"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Privacy() {
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

      <header className={`glass-bar privacy-bar ${isOpen ? "open" : ""}`}>
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
            <Link href="/vote">Голосование</Link>
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

      <main className="privacy-page">
        <div className="privacy-card">
          <h1 className="privacy-title">Политика конфиденциальности</h1>

          <p className="privacy-text">
            Настоящая Политика конфиденциальности описывает, какие данные
            собирает сайт Flyvision Song Contest и как они используются.
          </p>

          <h2 className="privacy-subtitle">Персональные данные</h2>
          <p className="privacy-text">
            На текущем этапе сайт не предоставляет регистрацию, вход или личные
            кабинеты и не запрашивает имя, фамилию или адрес электронной почты
            через формы регистрации.
          </p>

          <h2 className="privacy-subtitle">Обновления политики</h2>
          <p className="privacy-text">
            Если в будущем на сайте появятся функции, требующие обработки
            персональных данных, эта политика будет обновлена до запуска таких
            функций.
          </p>

          <h2 className="privacy-subtitle">Контакты</h2>
          <p className="privacy-text">
            По вопросам, связанным с обработкой персональных данных,
            свяжитесь с организаторами конкурса.
          </p>
        </div>
      </main>
    </>
  );
}