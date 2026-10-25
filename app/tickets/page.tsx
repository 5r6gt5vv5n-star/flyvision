"use client";

import Link from "next/link";

export default function TicketsPage() {
  return (
    <>
      <header className="glass-bar china-bar">
        <div className="glass-bar-top">
          <div className="bar-left">
            <Link href="/" className="heart-btn china-heart-btn" aria-label="На главную">
              <img src="/images/heart.png" alt="Flyvision" />
            </Link>

            <Link href="/china-2027" className="nav-btn china-nav-btn">
              Пекин 2027
            </Link>

            <Link href="/about" className="nav-btn china-nav-btn">
              Узнать
            </Link>
          </div>

          <div className="bar-center">
            <img
              src="/images/china-2027-logo.png"
              alt="Flyvision China 2027"
              className="header-logo-img"
            />
          </div>

        </div>
      </header>

      <main className="tickets-page">
        <div className="tickets-content">
          <h1 className="tickets-title">
            Билеты будут доступны совсем скоро
          </h1>
          <p className="tickets-description">
            Информация о начале продаж появится здесь и в новостях Flyvision.
          </p>
          <Link href="/news" className="tickets-news-link">Следить за новостями</Link>
        </div>
      </main>
    </>
  );
}