"use client";

import Image from "next/image";
import { useEffect } from "react";

/* ─── Scroll reveal ─── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = el.dataset.delay || "0";
            setTimeout(() => el.classList.add("visible"), parseInt(delay));
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── App Store Button ─── */
function AppStoreButton({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const heights: Record<string, number> = { sm: 42, md: 54, lg: 62 };
  const fontSizes: Record<string, number> = { sm: 13, md: 15, lg: 17 };
  const pads: Record<string, number> = { sm: 20, md: 28, lg: 36 };
  const iconSizes: Record<string, number> = { sm: 16, md: 20, lg: 22 };

  return (
    <a
      href="https://apps.apple.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download EX-Ray on the App Store"
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        height: heights[size], paddingInline: pads[size],
        background: "#fff", color: "#050706", borderRadius: 999,
        fontFamily: "var(--font-syne)", fontWeight: 700,
        fontSize: fontSizes[size], letterSpacing: "0.01em",
        textDecoration: "none", transition: "all 0.25s ease",
        whiteSpace: "nowrap", flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 40px rgba(255,255,255,0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <svg width={iconSizes[size]} height={iconSizes[size]} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      App Store
    </a>
  );
}

/* ─── Google Play Button ─── */
function GooglePlayButton({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const heights: Record<string, number> = { sm: 42, md: 54, lg: 62 };
  const fontSizes: Record<string, number> = { sm: 13, md: 15, lg: 17 };
  const pads: Record<string, number> = { sm: 20, md: 28, lg: 36 };
  const iconSizes: Record<string, number> = { sm: 16, md: 20, lg: 22 };

  return (
    <a
      href="https://play.google.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download EX-Ray on Google Play"
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        height: heights[size], paddingInline: pads[size],
        background: "transparent", color: "#fff", borderRadius: 999,
        border: "1.5px solid rgba(255,255,255,0.18)",
        fontFamily: "var(--font-syne)", fontWeight: 700,
        fontSize: fontSizes[size], letterSpacing: "0.01em",
        textDecoration: "none", transition: "all 0.25s ease",
        whiteSpace: "nowrap", flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(44,165,147,0.5)";
        (e.currentTarget as HTMLElement).style.color = "var(--tirkiz)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)";
        (e.currentTarget as HTMLElement).style.color = "#fff";
      }}
    >
      <svg width={iconSizes[size]} height={iconSizes[size]} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M3.18 23.76c.3.17.64.24.99.2l.1-.04L13.65 14l-3.2-3.2-7.27 12.96zM20.7 10.56l-2.4-1.38-3.38 3 3.41 3.4 2.39-1.37c.68-.39 1.13-1.1 1.13-1.83 0-.73-.46-1.44-1.15-1.82zM2.14.7C2.05.97 2 1.27 2 1.59V22.4c0 .32.05.62.15.88L12.45 13 2.14.7zm10.64 9.88L2.85.14C3.16.06 3.5.1 3.79.27l11.02 6.34-3.03 3.97z" />
      </svg>
      Google Play
    </a>
  );
}

/* ─── Logo ─── */
function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes: Record<string, string> = { sm: "18px", md: "22px", lg: "28px" };
  return (
    <span style={{
      fontFamily: "var(--font-syne)", fontWeight: 800,
      fontSize: sizes[size], letterSpacing: "-0.03em", userSelect: "none",
    }}>
      <span style={{ color: "var(--tirkiz)" }}>EX</span>
      <span style={{ color: "#fff" }}>-RAY</span>
    </span>
  );
}

/* ─── Check item ─── */
function CheckItem({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
      <div style={{
        width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
        background: "rgba(44,165,147,0.15)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginTop: 2,
      }}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
          <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="var(--tirkiz)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span style={{ fontSize: 14, lineHeight: 1.65, color: "var(--muted)" }}>{text}</span>
    </div>
  );
}

/* ─── Phone Duo — back to back ─── */
function PhoneDuo({
  leftSrc, rightSrc, leftAlt, rightAlt, width = 230,
}: {
  leftSrc: string; rightSrc: string;
  leftAlt: string; rightAlt: string; width?: number;
}) {
  const h = Math.round(width * 2.165);
  const totalW = width * 2 - width * 0.35;

  return (
    <div
      className="duo-wrap"
      style={{
        position: "relative",
        width: totalW,
        height: h + 50,
        userSelect: "none",
      }}
    >
      {/* Glow between phones */}
      <div style={{
        position: "absolute", bottom: "15%", left: "50%",
        transform: "translateX(-50%)",
        width: 140, height: 140,
        background: "rgba(44,165,147,0.2)",
        borderRadius: "50%", filter: "blur(50px)",
        zIndex: 0, pointerEvents: "none",
      }} />

      {/* LEFT */}
      <div
        className="phone-card"
        style={{
          position: "absolute", left: 0, bottom: 0,
          width, height: h, borderRadius: 44, overflow: "hidden",
          border: "2px solid rgba(44,165,147,0.35)",
          boxShadow: "-20px 30px 70px rgba(0,0,0,0.75), 0 0 50px rgba(44,165,147,0.08)",
          transform: "rotate(-7deg) translateY(14px)",
          transformOrigin: "bottom center",
          zIndex: 2,
          transition: "transform 0.55s cubic-bezier(.34,1.56,.64,1), box-shadow 0.5s ease, opacity 0.3s ease, filter 0.3s ease",
        }}
      >
        <div style={{
          position: "absolute", top: 13, left: "50%", transform: "translateX(-50%)",
          width: 86, height: 26, background: "#000", borderRadius: 20, zIndex: 20,
        }} />
        <Image src={leftSrc} alt={leftAlt} width={width} height={h} style={{ display: "block" }} />
      </div>

      {/* RIGHT */}
      <div
        className="phone-card"
        style={{
          position: "absolute", right: 0, bottom: 0,
          width, height: h, borderRadius: 44, overflow: "hidden",
          border: "2px solid rgba(44,165,147,0.35)",
          boxShadow: "20px 30px 70px rgba(0,0,0,0.75), 0 0 50px rgba(44,165,147,0.08)",
          transform: "rotate(7deg) translateY(14px)",
          transformOrigin: "bottom center",
          zIndex: 2,
          transition: "transform 0.55s cubic-bezier(.34,1.56,.64,1), box-shadow 0.5s ease, opacity 0.3s ease, filter 0.3s ease",
        }}
      >
        <div style={{
          position: "absolute", top: 13, left: "50%", transform: "translateX(-50%)",
          width: 86, height: 26, background: "#000", borderRadius: 20, zIndex: 20,
        }} />
        <Image src={rightSrc} alt={rightAlt} width={width} height={h} style={{ display: "block" }} />
      </div>
    </div>
  );
}

/* ─── Single phone ─── */
function PhoneSingle({ src, alt, width = 280, tilt = 0 }: { src: string; alt: string; width?: number; tilt?: number }) {
  const h = Math.round(width * 2.165);
  return (
    <div style={{
      width, height: h, borderRadius: 44, overflow: "hidden",
      border: "2px solid rgba(44,165,147,0.3)",
      boxShadow: "0 40px 100px rgba(0,0,0,0.75), 0 0 60px rgba(44,165,147,0.12)",
      transform: `rotate(${tilt}deg)`,
      transition: "transform 0.5s ease, box-shadow 0.4s ease",
      flexShrink: 0, position: "relative",
    }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = `rotate(0deg) translateY(-8px)`;
        (e.currentTarget as HTMLElement).style.boxShadow = "0 60px 120px rgba(0,0,0,0.85), 0 0 80px rgba(44,165,147,0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = `rotate(${tilt}deg)`;
        (e.currentTarget as HTMLElement).style.boxShadow = "0 40px 100px rgba(0,0,0,0.75), 0 0 60px rgba(44,165,147,0.12)";
      }}
    >
      <div style={{
        position: "absolute", top: 13, left: "50%", transform: "translateX(-50%)",
        width: 86, height: 26, background: "#000", borderRadius: 20, zIndex: 10,
      }} />
      <Image src={src} alt={alt} width={width} height={h} style={{ display: "block" }} />
    </div>
  );
}

/* ─── Feature Card ─── */
function FeatureCard({ icon, title, desc, delay = "0" }: { icon: string; title: string; desc: string; delay?: string }) {
  return (
    <div
      className="reveal"
      data-delay={delay}
      style={{
        background: "var(--card)", border: "1px solid var(--border)",
        borderRadius: 20, padding: "28px 24px",
        display: "flex", flexDirection: "column", gap: 16,
        transition: "border-color 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(44,165,147,0.35)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: "rgba(44,165,147,0.1)", border: "1px solid rgba(44,165,147,0.2)",
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
      }}>
        {icon}
      </div>
      <div>
        <h3 style={{
          fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 17,
          color: "#fff", marginBottom: 8, letterSpacing: "-0.01em",
        }}>{title}</h3>
        <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--muted)" }}>{desc}</p>
      </div>
    </div>
  );
}

/* ─── Ticker data ─── */
const TICKER = [
  "Mixed Signals", "Ghosting", "Situationship", "Love Bombing",
  "Breadcrumbing", "Red Flags", "Hot & Cold", "Left on Read",
  "Toxic Patterns", "Moving On", "The Ick", "Attachment Styles",
];
const TICKER_ALL = [...TICKER, ...TICKER];

/* ══════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════ */
export default function Home() {
  useScrollReveal();

  return (
    <>
      <style>{`
        /* Phone hover interactions */
        .duo-wrap:hover .phone-card { opacity: 0.8; }
        .duo-wrap .phone-card:hover {
          transform: rotate(0deg) translateY(-12px) !important;
          box-shadow: 0 60px 130px rgba(0,0,0,0.9), 0 0 90px rgba(44,165,147,0.22) !important;
          opacity: 1 !important;
          z-index: 10 !important;
        }

        /* Keyframes */
        @keyframes floatY {
          0%,100%{ transform: translateY(0) rotate(-1.5deg); }
          50%{ transform: translateY(-22px) rotate(1.5deg); }
        }
        @keyframes floatSlow {
          0%,100%{ transform: translateY(0); }
          50%{ transform: translateY(-14px); }
        }
        @keyframes ticker {
          0%{ transform: translateX(0); }
          100%{ transform: translateX(-50%); }
        }
        @keyframes fadeUp {
          from{ opacity:0; transform:translateY(30px); }
          to{ opacity:1; transform:translateY(0); }
        }
        @keyframes glowPulse {
          0%,100%{ box-shadow: 0 0 28px rgba(44,165,147,0.28), 0 0 70px rgba(44,165,147,0.08); }
          50%{ box-shadow: 0 0 52px rgba(44,165,147,0.5), 0 0 110px rgba(44,165,147,0.15); }
        }

        /* Scroll reveal */
        .reveal{ opacity:0; transform:translateY(26px); transition:opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible{ opacity:1; transform:translateY(0); }
        .reveal-left{ opacity:0; transform:translateX(-34px); transition:opacity 0.75s ease, transform 0.75s ease; }
        .reveal-left.visible{ opacity:1; transform:translateX(0); }
        .reveal-right{ opacity:0; transform:translateX(34px); transition:opacity 0.75s ease, transform 0.75s ease; }
        .reveal-right.visible{ opacity:1; transform:translateX(0); }

        /* Utilities */
        .animate-float{ animation: floatY 5.5s ease-in-out infinite; }
        .animate-float-slow{ animation: floatSlow 7s ease-in-out infinite; }
        .animate-glow{ animation: glowPulse 3s ease-in-out infinite; }
        .ticker-wrap{ overflow:hidden; white-space:nowrap; }
        .ticker-inner{ display:inline-flex; animation: ticker 30s linear infinite; }

        .hero-grid{
          background-image:
            linear-gradient(rgba(44,165,147,0.032) 1px, transparent 1px),
            linear-gradient(90deg, rgba(44,165,147,0.032) 1px, transparent 1px);
          background-size: 52px 52px;
        }
        .sline{
          display: inline-block;
          width: 36px; height: 2px;
          background: var(--tirkiz); border-radius: 1px;
        }
        .sline-center{
          display: block; margin: 0 auto 24px;
          width: 36px; height: 2px;
          background: var(--tirkiz); border-radius: 1px;
        }

        /* Footer link hover */
        .footer-link{ font-size:12px; color:#555; text-decoration:none; transition:color 0.2s; }
        .footer-link:hover{ color:#fff; }
      `}</style>

      <main style={{ overflowX: "hidden", background: "var(--bg)" }}>

        {/* ═════ NAV ═════ */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          height: 64, display: "flex", alignItems: "center",
          justifyContent: "space-between",
          paddingInline: "clamp(20px, 5vw, 52px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(5,7,6,0.85)",
          backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
        }}>
          <Logo size="md" />
          <AppStoreButton size="sm" />
        </nav>

        {/* ═════ HERO ═════ */}
        <section
          className="hero-grid"
          style={{
            minHeight: "100vh",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            paddingTop: 100, paddingBottom: 80,
            paddingInline: "clamp(20px, 5vw, 52px)",
            position: "relative", overflow: "hidden",
          }}
        >
          {/* Ambient glows */}
          <div style={{
            position: "absolute", top: "6%", left: "50%", transform: "translateX(-50%)",
            width: 700, height: 550,
            background: "radial-gradient(ellipse, rgba(44,165,147,0.14) 0%, transparent 68%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: "10%", right: "3%",
            width: 320, height: 320,
            background: "radial-gradient(circle, rgba(44,165,147,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Content */}
          <div style={{
            position: "relative", zIndex: 2,
            display: "flex", flexDirection: "column",
            alignItems: "center", textAlign: "center", maxWidth: 820,
          }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "7px 20px", borderRadius: 999,
              background: "rgba(44,165,147,0.1)",
              border: "1px solid rgba(44,165,147,0.25)",
              color: "var(--tirkiz)", fontSize: 12, fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: 32,
              animation: "fadeUp 0.6s 0.05s ease both",
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "var(--tirkiz)",
                boxShadow: "0 0 10px var(--tirkiz)",
              }} />
              AI Relationship Analyzer · iOS & Android
            </div>

            {/* H1 */}
            <h1 style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(46px, 8vw, 96px)",
              lineHeight: 1.02, letterSpacing: "-0.036em", color: "#fff",
              animation: "fadeUp 0.7s 0.18s ease both",
            }}>
              Your Partner Is
              <br />
              <span style={{
                color: "var(--tirkiz)",
                textShadow: "0 0 70px rgba(44,165,147,0.55)",
              }}>
                Sending Signals.
              </span>
              <br />
              Remy Reads
              <br />
              Every One.
            </h1>

            {/* Subtext */}
            <p style={{
              marginTop: 28,
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.72, color: "var(--muted)",
              maxWidth: 540,
              animation: "fadeUp 0.7s 0.33s ease both",
            }}>
              Upload screenshots. Describe the situation.
              Get brutally honest AI analysis — no hopium, no sugarcoating.
              Just the truth you've been avoiding.
            </p>

            {/* CTA buttons */}
            <div style={{
              display: "flex", flexWrap: "wrap", gap: 12,
              justifyContent: "center", marginTop: 40,
              animation: "fadeUp 0.7s 0.48s ease both",
            }}>
              <div className="animate-glow" style={{ borderRadius: 999 }}>
                <AppStoreButton size="lg" />
              </div>
              <GooglePlayButton size="lg" />
            </div>

            {/* Social proof */}
            <div style={{
              display: "flex", alignItems: "center", gap: 18,
              marginTop: 24,
              animation: "fadeUp 0.7s 0.6s ease both",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "#f1c40f", fontSize: 13, letterSpacing: 1 }}>★★★★★</span>
                <span style={{ fontSize: 12, color: "var(--muted)" }}>4.8 · 10,000+ users</span>
              </div>
              <div style={{ width: 1, height: 14, background: "var(--border)" }} />
              <span style={{ fontSize: 12, color: "var(--muted)" }}>Entertainment · 17+</span>
            </div>
          </div>

          {/* Hero phone duo */}
          <div
            className="duo-wrap reveal"
            data-delay="150"
            style={{ marginTop: 72, position: "relative", zIndex: 2 }}
          >
            <PhoneDuo
              leftSrc="/HomeSC.PNG"
              rightSrc="/AnalyzeSC.PNG"
              leftAlt="EX-Ray Home Screen — Scan My Situation"
              rightAlt="EX-Ray Analyze Screen — Who Are We Analyzing"
              width={240}
            />
          </div>
        </section>

        {/* ═════ TICKER ═════ */}
        <div
          className="ticker-wrap"
          aria-hidden
          style={{
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            paddingBlock: 15,
          }}
        >
          <div className="ticker-inner">
            {TICKER_ALL.map((item, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 14,
                  paddingInline: 22, fontSize: 11,
                  letterSpacing: "0.13em", textTransform: "uppercase",
                  fontFamily: "var(--font-syne)", fontWeight: 600,
                  color: i % 3 === 1 ? "var(--tirkiz)" : "#333",
                }}
              >
                {item}
                <span style={{ color: "#222", fontSize: 18, lineHeight: 1 }}>·</span>
              </span>
            ))}
          </div>
        </div>

        {/* ═════ MASCOT SECTION ═════ */}
        <section style={{
          padding: "clamp(80px, 10vw, 150px) clamp(20px, 5vw, 52px)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "5%", left: "-6%",
            width: 560, height: 560,
            background: "radial-gradient(ellipse, rgba(44,165,147,0.09) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />

          <div style={{
            maxWidth: 1120, margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 72, alignItems: "center",
          }}>
            {/* Mascot */}
            <div className="reveal-left" data-delay="0" style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative" }}>
                <div style={{
                  position: "absolute", inset: -70,
                  background: "radial-gradient(circle, rgba(44,165,147,0.24) 0%, transparent 65%)",
                  borderRadius: "50%", filter: "blur(24px)",
                }} />
                <Image
                  src="/Mascott1Trans.png"
                  alt="Remy — EX-Ray AI robot mascot holding an anatomical heart"
                  width={460}
                  height={460}
                  className="animate-float"
                  style={{
                    position: "relative", zIndex: 1,
                    filter: "drop-shadow(0 0 56px rgba(44,165,147,0.38))",
                    maxWidth: "100%",
                  }}
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="reveal-right" data-delay="100" style={{ display: "flex", flexDirection: "column", gap: 26 }}>
              <div className="sline" />
              <h2 style={{
                fontFamily: "var(--font-syne)", fontWeight: 800,
                fontSize: "clamp(32px, 4.5vw, 54px)",
                lineHeight: 1.07, letterSpacing: "-0.028em", color: "#fff",
              }}>
                Meet{" "}
                <span style={{ color: "var(--tirkiz)" }}>Remy.</span>
                <br />The AI friend who
                <br />always tells the truth.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.78, color: "var(--muted)", maxWidth: 460 }}>
                No "maybe they're just busy." No "I'm sure they like you."
                Remy runs your situation through Gemini AI and delivers
                what your friends are too scared to say — the unfiltered,
                brutally honest truth about your relationship dynamics.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Reads between every line so you don't have to",
                  "Spots red flags, love bombing & toxic patterns instantly",
                  "Gives you a real action plan — not empty comfort",
                  "Available in 8 languages globally",
                ].map((item, i) => <CheckItem key={i} text={item} />)}
              </div>
            </div>
          </div>
        </section>

        {/* ═════ FEATURES ═════ */}
        <section style={{
          background: "var(--card)",
          padding: "clamp(80px, 10vw, 130px) clamp(20px, 5vw, 52px)",
        }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: 68 }}>
              <div className="sline-center" />
              <h2 style={{
                fontFamily: "var(--font-syne)", fontWeight: 800,
                fontSize: "clamp(28px, 4.5vw, 52px)",
                letterSpacing: "-0.028em", color: "#fff",
              }}>
                Everything Remy sees.{" "}
                <span style={{ color: "var(--tirkiz)" }}>Nothing you miss.</span>
              </h2>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 16,
            }}>
              <FeatureCard icon="🔍" delay="0" title="Deep Situation Analysis"
                desc="Describe what's happening in your relationship. Remy deconstructs every dynamic, pattern, and signal — giving you the full picture you've been avoiding." />
              <FeatureCard icon="📸" delay="80" title="Screenshot Reader"
                desc="Upload up to 3 screenshots of your chats. Remy's multimodal AI reads tone, frequency, word choice — and especially what's deliberately left unsaid." />
              <FeatureCard icon="⚡" delay="160" title="Instant Vibe Check"
                desc="Get a rapid emotional pattern scan. Are they genuinely into you, stringing you along, or running a full situationship playbook? Know in seconds." />
              <FeatureCard icon="🧠" delay="0" title="What's Actually Going On"
                desc="Beyond surface signals — Remy breaks down the underlying psychology, attachment style, and real intentions behind their behavior." />
              <FeatureCard icon="⚖️" delay="80" title="Reality Check"
                desc="Remy holds up a mirror to your narrative. Sometimes you're the main character, sometimes you're the red flag. Either way, you'll know." />
              <FeatureCard icon="🚀" delay="160" title="Your Next Step"
                desc="Not just analysis — a concrete, personalized action plan. What to say, what not to say, and when to finally walk away. No more guessing." />
            </div>
          </div>
        </section>

        {/* ═════ SCREEN DUO — Home + Analyze ═════ */}
        <section style={{
          padding: "clamp(80px, 10vw, 150px) clamp(20px, 5vw, 52px)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "25%", right: "-4%",
            width: 500, height: 500,
            background: "radial-gradient(ellipse, rgba(44,165,147,0.09) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />
          <div style={{
            maxWidth: 1120, margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 72, alignItems: "center",
          }}>
            <div className="reveal-left" data-delay="0">
              <div className="sline" style={{ marginBottom: 24 }} />
              <h2 style={{
                fontFamily: "var(--font-syne)", fontWeight: 800,
                fontSize: "clamp(28px, 3.8vw, 48px)",
                lineHeight: 1.1, letterSpacing: "-0.025em", color: "#fff",
                marginBottom: 20,
              }}>
                Start a case.{" "}
                <span style={{ color: "var(--tirkiz)" }}>Get clarity fast.</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)", maxWidth: 440, marginBottom: 32 }}>
                From home screen to first analysis in under 2 minutes.
                Tap <span style={{ color: "var(--tirkiz)", fontWeight: 600 }}>Scan My Situation</span>,
                tell Remy who's involved, upload evidence if you have it,
                and describe what's been eating at you.
              </p>
              {[
                { step: "01", label: "Enter names & relationship context" },
                { step: "02", label: "Upload screenshots (optional)" },
                { step: "03", label: "Describe your main concern" },
              ].map((s, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 18px", borderRadius: 14,
                  background: "var(--card)", border: "1px solid var(--border)",
                  marginBottom: 8,
                }}>
                  <span style={{ fontSize: 14, color: "#fff" }}>{s.label}</span>
                  <span style={{ fontSize: 12, fontFamily: "var(--font-syne)", color: "var(--tirkiz)", fontWeight: 700 }}>
                    {s.step}
                  </span>
                </div>
              ))}
            </div>
            <div className="duo-wrap reveal-right" data-delay="150" style={{ display: "flex", justifyContent: "center" }}>
              <PhoneDuo
                leftSrc="/HomeSC.PNG"
                rightSrc="/AnalyzeSC.PNG"
                leftAlt="EX-Ray Home Screen"
                rightAlt="EX-Ray Analyze Screen"
                width={215}
              />
            </div>
          </div>
        </section>

        {/* ═════ SCREEN DUO — History + Profile ═════ */}
        <section style={{
          background: "var(--card2, #0A0C0B)",
          padding: "clamp(80px, 10vw, 150px) clamp(20px, 5vw, 52px)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "15%", left: "-5%",
            width: 480, height: 480,
            background: "radial-gradient(ellipse, rgba(44,165,147,0.08) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />
          <div style={{
            maxWidth: 1120, margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 72, alignItems: "center",
          }}>
            <div className="duo-wrap reveal-left" data-delay="0" style={{ display: "flex", justifyContent: "center" }}>
              <PhoneDuo
                leftSrc="/HistorySC.PNG"
                rightSrc="/ProfileSC.PNG"
                leftAlt="EX-Ray Case Archives History Screen"
                rightAlt="EX-Ray Profile Screen"
                width={215}
              />
            </div>
            <div className="reveal-right" data-delay="150">
              <div className="sline" style={{ marginBottom: 24 }} />
              <h2 style={{
                fontFamily: "var(--font-syne)", fontWeight: 800,
                fontSize: "clamp(28px, 3.8vw, 48px)",
                lineHeight: 1.1, letterSpacing: "-0.025em", color: "#fff",
                marginBottom: 20,
              }}>
                Every case.{" "}
                <span style={{ color: "var(--tirkiz)" }}>Always archived.</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)", maxWidth: 440, marginBottom: 28 }}>
                Your <span style={{ color: "var(--tirkiz)", fontWeight: 600 }}>Case Archives</span> store
                every analysis — so when you find yourself in the same
                pattern six months later, Remy can show you the receipts.
                Track growth. Spot cycles. Finally break them.
              </p>
              <div style={{
                padding: 22, borderRadius: 18,
                background: "var(--card)", border: "1px solid rgba(44,165,147,0.2)",
              }}>
                <p style={{
                  fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "var(--tirkiz)", fontWeight: 700,
                  fontFamily: "var(--font-syne)", marginBottom: 16,
                }}>
                  Case Archives include
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  {[
                    "Full neural analysis history",
                    "Locked & unlocked Next Step action plans",
                    "Partner patterns across multiple cases",
                    "Securely synced via Google account",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: "var(--tirkiz)", fontSize: 14 }}>→</span>
                      <span style={{ fontSize: 13, color: "var(--muted)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═════ SCREEN — Login ═════ */}
        <section style={{
          padding: "clamp(80px, 10vw, 150px) clamp(20px, 5vw, 52px)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            maxWidth: 1120, margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 72, alignItems: "center",
          }}>
            <div className="reveal-left" data-delay="0">
              <div className="sline" style={{ marginBottom: 24 }} />
              <h2 style={{
                fontFamily: "var(--font-syne)", fontWeight: 800,
                fontSize: "clamp(28px, 3.8vw, 48px)",
                lineHeight: 1.1, letterSpacing: "-0.025em", color: "#fff",
                marginBottom: 20,
              }}>
                Secure.{" "}
                <span style={{ color: "var(--tirkiz)" }}>Private. Yours.</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)", maxWidth: 440, marginBottom: 28 }}>
                Your relationship data stays yours. Sign in with Google for
                instant access — no passwords, no forms, no friction. Every
                analysis encrypted and tied to your account only.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  { icon: "🔒", label: "Lifetime analysis history" },
                  { icon: "🛡️", label: "Enhanced data security" },
                  { icon: "⭐", label: "Premium pattern insights" },
                  { icon: "🔄", label: "Cross-device sync" },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "13px 14px", borderRadius: 12,
                    background: "var(--card)", border: "1px solid var(--border)",
                  }}>
                    <span style={{ fontSize: 16 }}>{item.icon}</span>
                    <span style={{ fontSize: 12, lineHeight: 1.5, color: "var(--muted)" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right" data-delay="150" style={{ display: "flex", justifyContent: "center" }}>
              <PhoneSingle
                src="/LoginSC.PNG"
                alt="EX-Ray Login Screen — Sign in with Google"
                width={300}
                tilt={2}
              />
            </div>
          </div>
        </section>

        {/* ═════ HOW IT WORKS ═════ */}
        <section style={{
          background: "var(--card)",
          padding: "clamp(80px, 10vw, 130px) clamp(20px, 5vw, 52px)",
        }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: 72 }}>
              <div className="sline-center" />
              <h2 style={{
                fontFamily: "var(--font-syne)", fontWeight: 800,
                fontSize: "clamp(28px, 4.5vw, 50px)",
                letterSpacing: "-0.028em", color: "#fff",
              }}>
                How Remy works.
              </h2>
              <p style={{ marginTop: 12, fontSize: 16, color: "var(--muted)" }}>
                From confused to clear in three steps.
              </p>
            </div>
            {[
              { n: "01", title: "Describe or upload", desc: "Write out your situation — what happened, who said what, how it felt. Optionally upload up to 3 screenshots of your actual chat. Remy handles both." },
              { n: "02", title: "Remy runs the analysis", desc: "Powered by Gemini 2.5 Flash AI, Remy maps emotional patterns, identifies attachment behaviors, spots manipulation tactics, and builds your full breakdown." },
              { n: "03", title: "Get your reality check", desc: "Six deep-dive sections: Vibe Check, Message Deep Dive, What's Actually Going On, Reality Check, Good Signs, and your personalized Next Step action plan." },
            ].map((s, i) => (
              <div key={i}>
                <div className="reveal" data-delay={String(i * 120)} style={{ display: "flex", gap: 22, alignItems: "flex-start" }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: "50%",
                    border: "1.5px solid var(--tirkiz)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 14,
                    color: "var(--tirkiz)", flexShrink: 0,
                  }}>
                    {s.n}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-syne)", fontWeight: 700,
                      fontSize: 18, color: "#fff", marginBottom: 8,
                      letterSpacing: "-0.01em",
                    }}>
                      {s.title}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.78, color: "var(--muted)" }}>{s.desc}</p>
                  </div>
                </div>
                {i < 2 && (
                  <div style={{
                    width: 1, height: 36, background: "var(--border)",
                    marginLeft: 23, marginBlock: 6,
                  }} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ═════ STATS + TESTIMONIALS ═════ */}
        <section style={{ padding: "clamp(80px, 10vw, 130px) clamp(20px, 5vw, 52px)" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            {/* Stats */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16, marginBottom: 20,
            }}>
              {[
                { stat: "10K+", label: "Situations analyzed" },
                { stat: "4.8 ★", label: "Average rating" },
                { stat: "8", label: "Languages supported" },
                { stat: "< 60s", label: "Time to get answers" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="reveal"
                  data-delay={String(i * 70)}
                  style={{
                    background: "var(--card)", border: "1px solid var(--border)",
                    borderRadius: 20, padding: "28px 20px", textAlign: "center",
                  }}
                >
                  <div style={{
                    fontFamily: "var(--font-syne)", fontWeight: 800,
                    fontSize: "clamp(28px, 3vw, 42px)",
                    color: "var(--tirkiz)", letterSpacing: "-0.025em", marginBottom: 8,
                  }}>
                    {item.stat}
                  </div>
                  <div style={{ fontSize: 11, letterSpacing: "0.09em", textTransform: "uppercase", color: "var(--muted)" }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}>
              {[
                { q: "I needed someone to just tell me the truth. Remy did in 30 seconds what my friends couldn't in 3 months.", h: "@user_2847" },
                { q: "The reality check section hit different. I didn't want to hear it but I needed to. Worth every cent.", h: "@user_1193" },
                { q: "Uploaded the screenshots, got the analysis, cried, deleted his number. 10/10 therapy alternative.", h: "@user_5522" },
              ].map((t, i) => (
                <div
                  key={i}
                  className="reveal"
                  data-delay={String(i * 90)}
                  style={{
                    background: "var(--card)", border: "1px solid var(--border)",
                    borderRadius: 20, padding: "24px 22px",
                    display: "flex", flexDirection: "column", gap: 14,
                  }}
                >
                  <span style={{
                    fontSize: 44, lineHeight: 1,
                    fontFamily: "var(--font-syne)",
                    color: "var(--tirkiz)", opacity: 0.3,
                  }}>"</span>
                  <p style={{ fontSize: 14, lineHeight: 1.72, color: "var(--muted)", flex: 1 }}>{t.q}</p>
                  <span style={{ fontSize: 12, color: "#444" }}>{t.h}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════ FINAL CTA ═════ */}
        <section style={{
          background: "var(--card)",
          padding: "clamp(110px, 14vw, 180px) clamp(20px, 5vw, 52px)",
          position: "relative", overflow: "hidden", textAlign: "center",
        }}>
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: 900, height: 600,
            background: "radial-gradient(ellipse, rgba(44,165,147,0.15) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 640, margin: "0 auto" }}>
            <div className="reveal" data-delay="0" style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
              <Image
                src="/Mascott1Trans.png"
                alt="Remy the EX-Ray AI mascot"
                width={155}
                height={155}
                className="animate-float-slow"
                style={{ filter: "drop-shadow(0 0 42px rgba(44,165,147,0.44))" }}
              />
            </div>
            <h2
              className="reveal"
              data-delay="100"
              style={{
                fontFamily: "var(--font-syne)", fontWeight: 800,
                fontSize: "clamp(38px, 6.5vw, 72px)",
                lineHeight: 1.05, letterSpacing: "-0.036em", color: "#fff",
              }}
            >
              Stop guessing.
              <br />
              <span style={{ color: "var(--tirkiz)" }}>Start knowing.</span>
            </h2>
            <p
              className="reveal"
              data-delay="200"
              style={{ marginTop: 22, fontSize: 16, lineHeight: 1.78, color: "var(--muted)" }}
            >
              Your clarity starts with one honest conversation.
              <br />
              Less than a coffee. Worth more than months of overthinking.
            </p>
            <div
              className="reveal"
              data-delay="310"
              style={{
                display: "flex", flexWrap: "wrap", gap: 12,
                justifyContent: "center", marginTop: 44,
              }}
            >
              <div className="animate-glow" style={{ borderRadius: 999 }}>
                <AppStoreButton size="lg" />
              </div>
              <GooglePlayButton size="lg" />
            </div>
            <p
              className="reveal"
              data-delay="400"
              style={{ marginTop: 18, fontSize: 12, color: "#3a3a3a" }}
            >
              For entertainment only · Not a medical or professional diagnosis.
            </p>
          </div>
        </section>

        {/* ═════ FOOTER ═════ */}
        <footer style={{
          borderTop: "1px solid var(--border)",
          padding: "28px clamp(20px, 5vw, 52px)",
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between", gap: 16,
        }}>
          <Logo size="md" />
          <p style={{ fontSize: 12, color: "#383838", textAlign: "center" }}>
            EX-Ray · 2026 · Security Audited · Entertainment purposes only.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            <a
              href="https://makkadva.github.io/exray-legal/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Privacy Policy
            </a>
            <a
              href="https://makkadva.github.io/exray-legal/terms.html"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Terms of Service
            </a>
          </div>
        </footer>

      </main>
    </>
  );
}