"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pathname -> friendly page name shown in the popup.
const PAGE_NAMES = {
  "/": "Home",
  "/about": "About Us",
  // naya page add karo toh yahan bhi likh do, e.g. "/projects": "Projects",
};

function getPageName(pathname) {
  if (PAGE_NAMES[pathname]) return PAGE_NAMES[pathname];
  // Fallback: "/my-new-page" -> "My New Page"
  const last = pathname.split("/").filter(Boolean).pop() || "Home";
  return last.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// The look of the popup: a pin icon + small label + bold page name.
function PageToastContent({ name }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span
        style={{
          width: 34,
          height: 34,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(139,124,255,0.15)",
          border: "1px solid rgba(139,124,255,0.35)",
          flexShrink: 0,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B7CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </span>
      <div style={{ lineHeight: 1.25 }}>
        <div style={{ fontSize: 11, color: "#8B93A6", letterSpacing: "0.04em" }}>you are here</div>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#E9ECF3" }}>{name}</div>
      </div>
    </div>
  );
}

export default function PageToast() {
  const pathname = usePathname();

  // Fires on first load AND every time the user moves to another page.
  useEffect(() => {
    toast.dismiss(); // clear the previous page's popup
    toast(<PageToastContent name={getPageName(pathname)} />, {
      toastId: `page-${pathname}`, // same id = no duplicate popups (also in dev StrictMode)
      icon: false,
    });
  }, [pathname]);

  return (
    <ToastContainer
      position="top-center"
      transition={Slide}
      autoClose={2600}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover={false}
      draggable
      theme="dark"
      // Navbar is fixed at the top, so push the popup just below it
      style={{ top: "5.25rem" }}
      toastStyle={{
        background: "rgba(16,20,29,0.92)",
        backdropFilter: "blur(12px)",
        color: "#E9ECF3",
        border: "1px solid #2C3345",
        borderRadius: "16px",
        margin: "0 12px 8px",
        boxShadow: "0 18px 40px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,124,255,0.08)",
        fontFamily: "var(--font-mono), monospace",
      }}
      progressStyle={{ background: "linear-gradient(90deg,#8B7CFF,#FFB454)", height: 3 }}
    />
  );
}
