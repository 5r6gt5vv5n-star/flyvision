"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const TARGET_DATE = new Date("2027-07-22T00:00:00");

export default function CalendarPage() {
  const [menuPekin, setMenuPekin] = useState(false);
  const [menuLearn, setMenuLearn] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = TARGET_DATE.getTime() - now.getTime();
      const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
      setDaysLeft(days);
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
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
<Link href="/" className="back-btn" aria-label="Назад">
            ←
          </Link>

          <Link href="/" className="heart-btn" aria-label="На главную">
            <img src="/images/heart.png" alt="Flyvision" />
          </Link>

          <button
            className="nav-btn"
            onClick={() => {
              setMenuPekin(!menuPekin);
              setMenuLearn(false);
            }}
          >
            Пекин 2027 <span className="arrow">^</span>
          </button>

          <button
            className="nav-btn"
            onClick={() => {
              setMenuLearn(!menuLearn);
              setMenuPekin(false);
            }}
          >
            Узнать <span className="arrow">^</span>
          </button>
          </div>

          <div className="bar-center">
            <img src="/images/flyvision-logo.png" alt="Flyvision" className="bar-logo" />
          </div>

          
        </div>

        <div className={`glass-content pekin-content ${menuPekin ? "show" : ""}`}>
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

        <div className={`glass-content learn-content ${menuLearn ? "show" : ""}`}>
          <div className="glass-column">
            <span className="col-head">ИСТОРИЯ</span>
            <Link href="/history-concerts">История концертов</Link>
            <Link href="/about">История создания</Link>
            <Link href="/about">О конкурсе</Link>
          </div>
        </div>
      </header>

      <main className="page-2026">
        <section className="countdown-section">
          <div className="countdown-label">ДО FLYVISION 2027 · CHINA</div>
          <div className="countdown-sub">ОСТАЛОСЬ</div>
          <div className="countdown-days">{daysLeft}</div>
          <div className="countdown-unit">
            {daysLeft === 1 ? "ДЕНЬ" : daysLeft < 5 ? "ДНЯ" : "ДНЕЙ"}
          </div>
          <div className="countdown-date">22 · 07 · 2027</div>
        </section>
      </main>
    </>
  );
}