require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");

const app = express();

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:3000")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use(express.json());

// Basic abuse protection on the contact endpoint
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: "Too many messages sent. Please try again later." },
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "ayan-khan-portfolio-api" });
});

app.post("/api/contact", contactLimiter, async (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email and message are required." });
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  try {
    if (process.env.SMTP_HOST) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO || process.env.SMTP_USER,
        replyTo: email,
        subject: subject ? `Portfolio: ${subject}` : `New message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      });
    } else {
      // No SMTP configured yet — log instead of failing, so local dev still works.
      console.log("New contact message (SMTP not configured, logging only):", {
        name,
        email,
        subject,
        message,
      });
    }

    res.json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact message:", err);
    res.status(500).json({ error: "Something went wrong sending your message. Please try again." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
