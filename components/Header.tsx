"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuPekin, setMenuPekin] = useState(false);
  const [menuLearn, setMenuLearn] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const closeAll = () => {
    setMenuPekin(false);
    setMenuLearn(false);
  };

  const isOpen = menuPekin || menuLearn;

  useEffect(() => {
    try {
      const raw = localStorage.getItem("flyvision_user");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.name) setUser(parsed.name);
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <>
      {isOpen && <div className="menu-backdrop" onClick={closeAll} />}

      <header className={`glass-bar header-bar ${isOpen ? "open" : ""}`}>
        <div className="glass-bar-top">
          <div className="bar-left">
            <Link href="/" className="heart-btn" aria-label="На главную">
              <img src="/images/heart-logo.png" alt="Flyvision" />
            </Link>

            <div className="header-logo-link" aria-label="Flyvision Song Contest">
              <img
                src="/images/header-logo.png"
                alt="Flyvision"
                className="header-logo-img"
              />
            </div>

            <span className="header-divider" aria-hidden="true" />

            <button
              className="nav-btn"
              onClick={() => {
                setMenuPekin(!menuPekin);
                setMenuLearn(false);
              }}
              aria-expanded={menuPekin}
            >
              Пекин 2027{" "}
              <span className={`arrow ${menuPekin ? "up" : ""}`}>⌄</span>
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
              <span className={`arrow ${menuLearn ? "up" : ""}`}>⌄</span>
            </button>
          </div>

          <div className="bar-right-custom">
            <Link
              href={user ? "/account" : "/login"}
              className="auth-icon"
              aria-label="Аккаунт"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </Link>

            {user && (
              <Link href="/account" className="auth-name-btn">
                {user}
              </Link>
            )}
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
          </div>
        </div>
      </header>
    </>
  );
}
