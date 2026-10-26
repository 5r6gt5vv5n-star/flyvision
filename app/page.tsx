"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-bottom-left">
          <p className="hero-line-1">У Китая есть новая песня для Flyvision</p>
          <p className="hero-line-2">Добро пожаловать в Азию</p>
        </div>
      </section>

      {/* ============ НОВОСТИ И ФОТО ============ */}
      <section className="news-section">
        <h2 className="news-title">
          УЗНАТЬ БОЛЬШЕ
          <br />
          О КОНЦЕРТАХ
        </h2>

        <div className="cards">
          <Link href="/china-2027" className="card">
            <div
              className="card-img card-img--china"
              style={{ backgroundImage: 'url("/images/china-bg-2.jpg")' }}
            >
              <img
                src="/images/china-2027-logo.png"
                alt="Flyvision China"
                className="card-logo-china"
              />
            </div>
            <div className="card-label card-label--hero-title">
              УЗНАТЬ БОЛЬШЕ О КОНЦЕРТЕ
            </div>
          </Link>

          <Link href="/about" className="card">
            <div
              className="card-img card-img--backstage"
              style={{ backgroundImage: 'url("/images/flyvision-2026-bg-v3.jpg")' }}
            >
              <img
                src="/images/flyvision-header-logo.png"
                alt="Flyvision"
                className="card-logo-backstage"
              />
            </div>
            <div className="card-label card-label--hero-title">
              Узнать больше о BACKSTAGE
            </div>
          </Link>

          <Link href="/flyvision-2026" className="card">
            <div
              className="card-img card-img--flyvision-2026"
              style={{ backgroundImage: 'url("/images/privacy-bg.jpg")' }}
            >
              <img
                src="/images/flyvision-2026-logo.png"
                alt="Flyvision 2026"
                className="card-logo-2026"
              />
            </div>
            <div className="card-label card-label--hero-title">
              УЗНАТЬ БОЛЬШЕ О КОНЦЕРТЕ
            </div>
          </Link>
        </div>
      </section>

      {/* ============ ФУТЕР ============ */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <img
              src="/images/flyvision-logo.png"
              alt="Flyvision Song Contest"
              className="footer-logo"
            />
          </div>

          <div className="footer-center">
            Конкурс песни <strong>Flyvision</strong> координируется
            Вожатским отрядом <strong>«Лететь»</strong>
          </div>

          <div className="footer-right">
            <a href="/privacy">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </>
  );
}
