"use client";

import { useEffect, useState } from "react";
import { terminalObjectLines } from "@/data/content";

const CMD = "whoami --verbose";

function highlight(line) {
  if (line.startsWith("const")) {
    return (
      <>
        <span className="kw">const</span>{" "}
        <span className="pl">developer</span> = {"{"}
      </>
    );
  }

  if (line.trim() === "};") return "};";

  const match = line.match(/^(\s*)(\w+):\s*(.+)$/);

  if (!match) return line;

  const [, indent, key, rest] = match;

  const isNumber = /^\d+,?$/.test(rest);
  const isArray = rest.startsWith("[");

  return (
    <>
      {indent}
      {key}:{" "}

      {isNumber ? (
        <span className="fn">{rest}</span>
      ) : isArray ? (
        rest.split(/('[^']*')/).map((part, i) =>
          part.startsWith("'") ? (
            <span className="str" key={i}>
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )
      ) : (
        <span className="str">{rest}</span>
      )}
    </>
  );
}

export default function TerminalCard() {
  const [cmdTyped, setCmdTyped] = useState("");
  const [cmdDone, setCmdDone] = useState(false);

  const [lines, setLines] = useState([]);

  const [activeLine, setActiveLine] = useState({
    idx: -1,
    text: "",
  });

  useEffect(() => {
    let cancelled = false;
    let timer;

    const sleep = (ms) =>
      new Promise((resolve) => {
        timer = setTimeout(resolve, ms);
      });

    async function runTerminal() {
      while (!cancelled) {
        // =================================
        // 1. TYPE COMMAND
        // =================================

        setCmdTyped("");
        setCmdDone(false);
        setLines([]);
        setActiveLine({
          idx: -1,
          text: "",
        });

        await sleep(700);

        for (let i = 0; i <= CMD.length; i++) {
          if (cancelled) return;

          setCmdTyped(CMD.slice(0, i));

          await sleep(55);
        }

        if (cancelled) return;

        setCmdDone(true);

        await sleep(500);

        // =================================
        // 2. TYPE OBJECT LINES
        // =================================

        for (
          let lineIdx = 0;
          lineIdx < terminalObjectLines.length;
          lineIdx++
        ) {
          if (cancelled) return;

          const full = terminalObjectLines[lineIdx].text;

          for (let charIdx = 0; charIdx <= full.length; charIdx++) {
            if (cancelled) return;

            setActiveLine({
              idx: lineIdx,
              text: full.slice(0, charIdx),
            });

            await sleep(38);
          }

          setLines((prev) => [...prev, full]);

          setActiveLine({
            idx: -1,
            text: "",
          });

          await sleep(220);
        }

        // =================================
        // 3. WAIT AFTER COMPLETION
        // =================================

        await sleep(1800);

        // =================================
        // 4. ERASE EVERYTHING
        // =================================

        for (let i = terminalObjectLines.length - 1; i >= 0; i--) {
          if (cancelled) return;

          const full = terminalObjectLines[i].text;

          // Put line into active state
          setActiveLine({
            idx: i,
            text: full,
          });

          setLines((prev) => prev.slice(0, -1));

          // Delete character by character
          for (let charIdx = full.length; charIdx >= 0; charIdx--) {
            if (cancelled) return;

            setActiveLine({
              idx: i,
              text: full.slice(0, charIdx),
            });

            await sleep(25);
          }

          setActiveLine({
            idx: -1,
            text: "",
          });

          await sleep(100);
        }

        // =================================
        // 5. ERASE COMMAND
        // =================================

        for (let i = CMD.length; i >= 0; i--) {
          if (cancelled) return;

          setCmdTyped(CMD.slice(0, i));
          setCmdDone(false);

          await sleep(45);
        }

        await sleep(700);

        // =================================
        // LOOP STARTS AGAIN
        // =================================
      }
    }

    runTerminal();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="float">
      <div className="term overflow-hidden">

        {/* Terminal Header */}
        <div className="term-bar flex items-center gap-2 px-4 py-3">
          <span
            className="dot"
            style={{ background: "#FF5F57" }}
          />

          <span
            className="dot"
            style={{ background: "#FEBC2E" }}
          />

          <span
            className="dot"
            style={{ background: "#28C840" }}
          />

          <span className="ml-3 font-mono text-xs text-dim">
            itsayan.in — zsh
          </span>
        </div>

        {/* Terminal Content */}
        <div className="p-5 font-mono text-[13px] leading-relaxed md:text-[13.5px]">

          {/* Command */}
          <div>
            <span className="text-dim">$</span>{" "}

            {cmdDone ? CMD : cmdTyped}

            <span className="caret">|</span>
          </div>

          {/* Output */}
          <div className="mt-2">

            {lines.map((line, index) => (
              <div key={index}>
                {highlight(line)}
              </div>
            ))}

            {activeLine.idx !== -1 && (
              <div>
                {activeLine.text}
                <span className="caret">|</span>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}