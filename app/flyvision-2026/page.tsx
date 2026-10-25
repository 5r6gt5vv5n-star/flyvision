import Link from "next/link";

export default function Flyvision2026() {
  return (
    <main className="page-2026-new">
      {/* ============ HERO ============ */}
      <section className="hero-2026">
        <div className="hero-2026-inner">
          <img
            src="/images/flyvision-2026-logo.png"
            alt="Flyvision 2026"
            className="hero-2026-logo"
          />

          <h1 className="hero-2026-title">ПЕРВЫЙ КОНЦЕРТ</h1>
          <p className="hero-2026-date">
            16 ИЮНЯ 2026 · УЛЬЯНОВСК · «КОМПАС»
          </p>

          <Link href="/flyvision-2026/map" className="hero-2026-btn">
            ИССЛЕДОВАТЬ КОНЦЕРТ
          </Link>
        </div>
      </section>

      {/* ============ ДВЕ СЕКЦИИ — ОТРЯДЫ И ГОСТИ ============ */}
      <section className="explore-section">
        <div className="explore-grid">
          <Link href="/flyvision-2026/groups" className="explore-card">
            <div
              className="explore-photo"
              style={{ backgroundImage: 'url("/images/slide-6.jpg")' }}
            />
            <div className="explore-overlay">
              <h3 className="explore-title">УЗНАТЬ БОЛЬШЕ ПРО ОТРЯДЫ</h3>
              <p className="explore-sub">9 отрядов · 9 городов и стран</p>
            </div>
          </Link>

          <Link href="/flyvision-2026/guests" className="explore-card">
            <div
              className="explore-photo"
              style={{ backgroundImage: 'url("/images/guests-2026.jpg")' }}
            />
            <div className="explore-overlay">
              <h3 className="explore-title">УЗНАТЬ БОЛЬШЕ ПРО ГОСТЕЙ</h3>
              <p className="explore-sub">Греция · Грузия · США</p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}