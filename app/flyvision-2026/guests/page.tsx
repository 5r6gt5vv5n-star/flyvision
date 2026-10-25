import Link from "next/link";

const guests = [
  {
    id: 1,
    name: "AKYLAS FERTO",
    href: "/flyvision-2026/akylas-ferto",
    photo: "/images/guest-greece-card.jpg",
    color: "pink",
    position: "center 30%",
  },
  {
    id: 2,
    name: "BZIKEBI ON REPLAY",
    href: "/flyvision-2026/bzikebi",
    photo: "/images/guest-georgia-1.jpg",
    color: "blue",
    position: "70% 20%",
  },
  {
    id: 3,
    name: "LADY GAGA",
    href: "/flyvision-2026/lady-gaga",
    photo: "/images/guest-usa-2.jpg",
    color: "green",
    position: "8% 35%",
  },
];

export default function GuestsPage() {
  return (
    <main className="guests-page-new">
      <section className="guests-hero-new">
        <h1 className="guests-title-new">СПЕЦИАЛЬНЫЕ ГОСТИ</h1>
        <p className="guests-sub-new">FLYVISION SONG CONTEST 2026</p>
      </section>

      <section className="guests-tiles-section">
        <div className="guests-tiles-grid">
          {guests.map((g) => (
            <Link
              key={g.id}
              href={g.href}
              className={`guest-tile guest-tile--${g.color}`}
            >
              <div
                className="guest-tile-bg"
                style={{
                  backgroundImage: `url("${g.photo}")`,
                  backgroundPosition: g.position,
                }}
              />

              {/* Угловые полупрозрачные градиенты */}
              <div className="guest-tile-shape guest-tile-shape-1" />
              <div className="guest-tile-shape guest-tile-shape-2" />

              <div className="guest-tile-content">
                <h3 className="guest-tile-name">{g.name}</h3>
                <span className="guest-tile-label">ОБ УЧАСТНИКЕ</span>
                <span className="guest-tile-line" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}