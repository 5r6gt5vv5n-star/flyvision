"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
export default function China2027Page() {
  const [menuPekin, setMenuPekin] = useState(false);
  const [menuLearn, setMenuLearn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
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
              aria-expanded={menuPekin}
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
              aria-expanded={menuLearn}
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

        <div className={`glass-content pekin-content learn-content--gold ${menuPekin ? "show" : ""}`}>
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

        <div className={`glass-content learn-content learn-content--gold ${menuLearn ? "show" : ""}`}>
          <div className="glass-column">
            <span className="col-head china-col-head">ИСТОРИЯ</span>
            <Link href="/history-concerts">История концертов</Link>
            <Link href="/about">История создания</Link>
          </div>
        </div>
      </header>

      <main className="china-page">
        <Link href="/china-2027/about" className="china-bottom-label">
          <span className="china-bottom-label-text">УЗНАТЬ О КОНЦЕРТЕ</span>
        </Link>
      </main>
    </>
  );
}