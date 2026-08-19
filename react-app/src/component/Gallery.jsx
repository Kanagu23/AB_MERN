import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Aperture } from "lucide-react";

// ---- Sample data -----------------------------------------------------
const PHOTOS = [
  { id: 1,  src: "https://picsum.photos/id/1015/800/1000", roll: "K-01", title: "River Bend",       category: "Landscape", year: 2023 },
  { id: 2,  src: "https://picsum.photos/id/1025/800/800",  roll: "K-02", title: "Good Boy",          category: "Portrait",  year: 2022 },
  { id: 3,  src: "https://picsum.photos/id/1039/800/1100", roll: "K-03", title: "Alpine Silence",     category: "Landscape", year: 2023 },
  { id: 4,  src: "https://picsum.photos/id/1041/800/900",  roll: "K-04", title: "Forest Floor",       category: "Nature",    year: 2021 },
  { id: 5,  src: "https://picsum.photos/id/1050/800/950",  roll: "K-05", title: "Old Door",           category: "Street",    year: 2022 },
  { id: 6,  src: "https://picsum.photos/id/106/800/1000",  roll: "K-06", title: "Bloom Study No.2",   category: "Nature",    year: 2024 },
  { id: 7,  src: "https://picsum.photos/id/1074/800/800",  roll: "K-07", title: "Amber Eyes",         category: "Portrait",  year: 2023 },
  { id: 8,  src: "https://picsum.photos/id/1084/800/1050", roll: "K-08", title: "Night Freight",      category: "Street",    year: 2024 },
  { id: 9,  src: "https://picsum.photos/id/110/800/900",   roll: "K-09", title: "Ridge Line",         category: "Landscape", year: 2021 },
  { id: 10, src: "https://picsum.photos/id/1069/800/1000", roll: "K-10", title: "Stillwater",         category: "Nature",    year: 2022 },
  { id: 11, src: "https://picsum.photos/id/111/800/850",   roll: "K-11", title: "Corner Market",      category: "Street",    year: 2023 },
  { id: 12, src: "https://picsum.photos/id/1027/800/1000", roll: "K-12", title: "Field Notes",        category: "Portrait",  year: 2024 },
];

const CATEGORIES = ["All", ...Array.from(new Set(PHOTOS.map((p) => p.category)))];

// ---- Component ---------------------------------------------------------
export default function Gallery() {
  const [active, setActive] = useState("All");
  const [openId, setOpenId] = useState(null);

  const filtered = active === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === active);
  const openIndex = filtered.findIndex((p) => p.id === openId);
  const openPhoto = openIndex >= 0 ? filtered[openIndex] : null;

  const close = useCallback(() => setOpenId(null), []);
  const step = useCallback(
    (dir) => {
      if (openIndex < 0) return;
      const next = (openIndex + dir + filtered.length) % filtered.length;
      setOpenId(filtered[next].id);
    },
    [openIndex, filtered]
  );

  useEffect(() => {
    if (!openPhoto) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openPhoto, close, step]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#161311",
        color: "#EDE6DC",
        fontFamily: "'Georgia', 'Iowan Old Style', serif",
        padding: "48px 24px 80px",
      }}
    >
      {/* Header */}
      <header style={{ maxWidth: 1100, margin: "0 auto 40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#C9622C" }}>
          <Aperture size={20} strokeWidth={1.5} />
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 12,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            Contact Sheet — 2021–2024
          </span>
        </div>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            margin: "10px 0 6px",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          Field &amp; Frame
        </h1>
        <p style={{ color: "#8C8377", fontSize: 15, maxWidth: 520, lineHeight: 1.5 }}>
          Twelve frames pulled from the archive, sorted by roll. Click a print to view it full size.
        </p>
      </header>

      {/* Filter strip */}
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto 28px",
          display: "flex",
          gap: 6,
          flexWrap: "wrap",
          borderTop: "1px solid #2B2622",
          borderBottom: "1px solid #2B2622",
          padding: "14px 0",
        }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "7px 14px",
                borderRadius: 999,
                border: isActive ? "1px solid #C9622C" : "1px solid #2B2622",
                background: isActive ? "#C9622C" : "transparent",
                color: isActive ? "#161311" : "#8C8377",
                cursor: "pointer",
                transition: "all 150ms ease",
              }}
            >
              {cat}
            </button>
          );
        })}
      </nav>

      {/* Masonry grid */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          columnCount: 3,
          columnGap: 16,
        }}
        className="gallery-columns"
      >
        <style>{`
          @media (max-width: 900px) { .gallery-columns { column-count: 2 !important; } }
          @media (max-width: 560px) { .gallery-columns { column-count: 1 !important; } }
          .gallery-card { break-inside: avoid; margin-bottom: 16px; }
          .gallery-card button:focus-visible { outline: 2px solid #C9622C; outline-offset: 3px; }
        `}</style>

        {filtered.map((photo) => (
          <div className="gallery-card" key={photo.id}>
            <button
              onClick={() => setOpenId(photo.id)}
              style={{
                display: "block",
                width: "100%",
                padding: 0,
                border: "none",
                background: "none",
                cursor: "zoom-in",
                textAlign: "left",
              }}
              aria-label={`Open ${photo.title}`}
            >
              <div style={{ position: "relative", overflow: "hidden", borderRadius: 3 }}>
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 8,
                  fontSize: 13,
                }}
              >
                <span style={{ color: "#EDE6DC" }}>{photo.title}</span>
                <span
                  style={{
                    fontFamily: "'Courier New', monospace",
                    color: "#6E655A",
                    fontSize: 11,
                  }}
                >
                  {photo.roll}
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {openPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10,9,8,0.94)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            padding: 24,
          }}
        >
          <button
            onClick={close}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "none",
              border: "none",
              color: "#EDE6DC",
              cursor: "pointer",
              padding: 8,
            }}
          >
            <X size={26} strokeWidth={1.5} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            style={{
              position: "absolute",
              left: 12,
              background: "none",
              border: "none",
              color: "#EDE6DC",
              cursor: "pointer",
              padding: 12,
            }}
          >
            <ChevronLeft size={30} strokeWidth={1.5} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            style={{
              position: "absolute",
              right: 12,
              background: "none",
              border: "none",
              color: "#EDE6DC",
              cursor: "pointer",
              padding: 12,
            }}
          >
            <ChevronRight size={30} strokeWidth={1.5} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: 720, width: "100%", textAlign: "center" }}
          >
            <img
              src={openPhoto.src}
              alt={openPhoto.title}
              style={{
                maxHeight: "72vh",
                width: "auto",
                maxWidth: "100%",
                borderRadius: 2,
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            />
            <div
              style={{
                marginTop: 16,
                display: "flex",
                justifyContent: "center",
                gap: 14,
                fontFamily: "'Courier New', monospace",
                fontSize: 12,
                letterSpacing: "0.06em",
                color: "#8C8377",
              }}
            >
              <span style={{ color: "#EDE6DC" }}>{openPhoto.title}</span>
              <span>·</span>
              <span>{openPhoto.category}</span>
              <span>·</span>
              <span>{openPhoto.year}</span>
              <span>·</span>
              <span>{openPhoto.roll}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}