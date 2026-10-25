"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
export default function Home() {
  const [menuPekin, setMenuPekin] = useState(false);
  const [menuLearn, setMenuLearn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closeAll = () => {
    setMenuPekin(false);
    setMenuLearn(false);
  };

  const isOpen = menuPekin || menuLearn;

  return (
    <>
      {isOpen && <div className="menu-backdrop" onClick={closeAll} />}

      <header className={`glass-bar ${isOpen ? "open" : ""}`}>
        <div className="glass-bar-top">
          <div className="bar-left">
            <Link href="/" className="heart-btn" aria-label="На главную">
              <img src="/images/heart.png" alt="Flyvision" />
            </Link>

            <button
              className="nav-btn"
              onClick={() => {
                setMenuPekin(!menuPekin);
                setMenuLearn(false);
              }}
              aria-expanded={menuPekin}
            >
              Пекин 2027{" "}
              <span className={`arrow ${menuPekin ? "up" : ""}`}>^</span>
            </button>

            <button
              className="nav-btn"
              onClick={() => {
                setMenuLearn(!menuLearn);
                setMenuPekin(false);
              }}
              aria-expanded={menuLearn}
            >
              Узнать{" "}
              <span className={`arrow ${menuLearn ? "up" : ""}`}>^</span>
            </button>
          </div>

          <div className="bar-center">
            <img
              src="/images/flyvision-logo.png"
              alt="Flyvision"
              className="bar-logo"
            />
          </div>

          
        </div>

        <div className={`glass-content pekin-content learn-content--gold ${menuPekin ? "show" : ""}`}>
          <div className="glass-column">
            <span className="col-head">ПЕКИН 2027</span>
            <Link href="/news">Новости</Link>
            <Link href="/participants">Участники</Link>
            <Link href="/calendar">Календарь</Link>
            <Link href="/venue">Место проведения</Link>
          </div>
          <div className="glass-column">
            <span className="col-head">ПРИНЯТЬ УЧАСТИЕ</span>
            <Link href="/vote">Смотреть и голосовать</Link>
            <Link href="/tickets">Билеты</Link>
          </div>
        </div>

        <div className={`glass-content learn-content learn-content--gold ${menuLearn ? "show" : ""}`}>
          <div className="glass-column">
            <span className="col-head">ИСТОРИЯ</span>
            <Link href="/history-concerts">История концертов</Link>
            <Link href="/about">История создания</Link>
          </div>
        </div>
      </header>

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