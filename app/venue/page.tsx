"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
export default function VenuePage() {
  const [menuPekin, setMenuPekin] = useState(false);
  const [menuLearn, setMenuLearn] = useState(false);

  useEffect(() => {
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

      <main className="venue-new-page">
        {/* Заголовок */}
        <div className="venue-new-title-block">
          <h1 className="venue-new-title">МЕСТО ПРОВЕДЕНИЯ</h1>
          <p className="venue-new-sub">КИТАЙ / ПЕКИН</p>
          <p className="venue-new-sub-en">CHINA / BEIJING</p>
          <p className="venue-new-sub-cn">中国 / 北京</p>
        </div>

        {/* Адрес и контакты */}
        <div className="venue-new-info">
          <h2 className="venue-new-info-title">АДРЕС И КОНТАКТЫ</h2>

          <div className="venue-new-info-row">
            <span className="venue-new-info-label">АДРЕС</span>
            <span className="venue-new-info-value">
              俄罗斯，乌里扬诺夫斯克州，乌里扬诺夫斯克市，
              里亚比科夫街55号，邮编432029
            </span>
          </div>

          <div className="venue-new-info-row">
            <span className="venue-new-info-label">ТЕЛЕФОН</span>
            <span className="venue-new-info-value">
              +86 137 1629 3796
            </span>
          </div>
        </div>
      </main>
    </>
  );
}