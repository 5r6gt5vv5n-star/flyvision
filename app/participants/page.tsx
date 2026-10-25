"use client";

import Link from "next/link";
export default function ParticipantsPage() {
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

      <main className="participants-page">
        <h1 className="participants-title">
          Информация об участниках появится совсем скоро
        </h1>
      </main>
    </>
  );
}