"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
export default function ChinaAboutPage() {
  const [menuPekin, setMenuPekin] = useState(false);
  const [menuLearn, setMenuLearn] = useState(false);

  // Слайдшоу для "Место проведения"
  const [venueSlide, setVenueSlide] = useState(0);
  // Слайдшоу для "Новости"
  const [newsSlide, setNewsSlide] = useState(0);
  // Слайдшоу для "Участники"
  const [partSlide, setPartSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Таймеры для смены фото (каждые 4 секунды)
  useEffect(() => {
    const t1 = setInterval(() => setVenueSlide((s) => (s + 1) % 3), 4000);
    const t2 = setInterval(() => setNewsSlide((s) => (s + 1) % 3), 4000);
    const t3 = setInterval(() => setPartSlide((s) => (s + 1) % 3), 4000);

    return () => {
      clearInterval(t1);
      clearInterval(t2);
      clearInterval(t3);
    };
  }, []);

  const closeAll = () => {
    setMenuPekin(false);
    setMenuLearn(false);
  };

  const isOpen = menuPekin || menuLearn;

  return (
    <>
      {isOpen && <div className="menu-backdrop" onClick={closeAll} />}

      <header className={`glass-bar china-bar ${isOpen ? "open" : ""}`}>
        <div className="glass-bar-top">
          <div className="bar-left">
            <Link href="/" className="heart-btn china-heart-btn" aria-label="На главную">
              <img src="/images/heart.png" alt="Flyvision" />
            </Link>

            <button
              className="nav-btn china-nav-btn"
              onClick={() => {
                setMenuPekin(!menuPekin);
                setMenuLearn(false);
              }}
            >
              Пекин 2027{" "}
              <span className={`arrow ${menuPekin ? "up" : ""}`}>^</span>
            </button>

            <button
              className="nav-btn china-nav-btn"
              onClick={() => {
                setMenuLearn(!menuLearn);
                setMenuPekin(false);
              }}
            >
              Узнать{" "}
              <span className={`arrow ${menuLearn ? "up" : ""}`}>^</span>
            </button>
          </div>

          <div className="bar-center">
            <img
              src="/images/china-2027-logo.png"
              alt="Flyvision China 2027"
              className="header-logo-img"
            />
          </div>

          
        </div>

        <div className={`glass-content pekin-content ${menuPekin ? "show" : ""}`}>
          <div className="glass-column">
            <span className="col-head china-col-head">ПЕКИН 2027</span>
            <Link href="/news">Новости</Link>
            <Link href="/participants">Участники</Link>
            <Link href="/calendar">Календарь</Link>
            <Link href="/venue">Место проведения</Link>
          </div>
          <div className="glass-column">
            <span className="col-head china-col-head">ПРИНЯТЬ УЧАСТИЕ</span>
            <Link href="/vote">Смотреть и голосовать</Link>
            <Link href="/tickets">Билеты</Link>
          </div>
        </div>

        <div className={`glass-content learn-content ${menuLearn ? "show" : ""}`}>
          <div className="glass-column">
            <span className="col-head china-col-head">ИСТОРИЯ</span>
            <Link href="/history-concerts">История концертов</Link>
            <Link href="/about">История создания</Link>
          </div>
        </div>
      </header>

      <main className="china-about-page">
        <div className="china-about-grid">
          
          {/* КАРТОЧКА 1 — Новости */}
          <Link href="/news/beijing" className="china-about-card">
            <div className="china-venue-slideshow">
              <div
                className={`china-venue-slide ${newsSlide === 0 ? "active" : ""}`}
                style={{ backgroundImage: 'url("/images/beijing-news-bg-v3.jpg")' }}
              />
              <div
                className={`china-venue-slide ${newsSlide === 1 ? "active" : ""}`}
                style={{ backgroundImage: 'url("/images/about-news-slide-2.jpg")' }}
              />
              <div
                className={`china-venue-slide ${newsSlide === 2 ? "active" : ""}`}
                style={{ backgroundImage: 'url("/images/about-news-slide-3.jpg")' }}
              />
            </div>

            <div className="china-about-label">
              <span className="china-about-label-text">УЗНАТЬ О НОВОСТЯХ</span>
            </div>

            <div className="china-venue-dots">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`china-venue-dot ${newsSlide === i ? "active" : ""}`}
                />
              ))}
            </div>
          </Link>

          {/* КАРТОЧКА 2 — Участники */}
          {/* КАРТОЧКА 2 — Участники */}
<Link href="/participants" className="china-about-card">
            <div className="china-venue-slideshow">
              <div
                className={`china-venue-slide ${partSlide === 0 ? "active" : ""}`}
                style={{ backgroundImage: 'url("/images/about-part-slide-1.jpg")' }}
              />
              <div
                className={`china-venue-slide ${partSlide === 1 ? "active" : ""}`}
                style={{ backgroundImage: 'url("/images/about-part-slide-2.jpg")' }}
              />
              <div
                className={`china-venue-slide ${partSlide === 2 ? "active" : ""}`}
                style={{ backgroundImage: 'url("/images/about-part-slide-3.jpg")' }}
              />
            </div>

            <div className="china-about-label">
              <span className="china-about-label-text">УЗНАТЬ ОБ УЧАСТНИКАХ</span>
            </div>

            <div className="china-venue-dots">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`china-venue-dot ${partSlide === i ? "active" : ""}`}
                />
              ))}
            </div>
          </Link>

          {/* КАРТОЧКА 3 — Место проведения */}
          <Link href="/venue" className="china-about-card">
            <div className="china-venue-slideshow">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`china-venue-slide ${
                    venueSlide === i - 1 ? "active" : ""
                  }`}
                  style={{
                    backgroundImage: `url("/images/china-venue-${i}.jpg")`,
                  }}
                />
              ))}
            </div>

            <div className="china-about-label">
              <span className="china-about-label-text">МЕСТО ПРОВЕДЕНИЯ</span>
            </div>

            <div className="china-venue-dots">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`china-venue-dot ${venueSlide === i ? "active" : ""}`}
                />
              ))}
            </div>
          </Link>

        </div>
      </main>
    </>
  );
}