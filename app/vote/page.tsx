"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function VotePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [1, 2, 3, 4, 5];

  // Смена фото каждые 4 секунды
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((s) => (s + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

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

      <main className="vote-page">
        <div className="vote-layout">
          
          {/* ЛЕВАЯ ЧАСТЬ: Слайдшоу с фото */}
          <div className="vote-slideshow-wrapper">
            <div className="vote-slideshow">
              {slides.map((i) => (
                <div
                  key={i}
                  className={`vote-slide ${activeSlide === i - 1 ? "active" : ""}`}
                  style={{ backgroundImage: `url("/images/vote-slide-${i}.jpg")` }}
                />
              ))}
            </div>
            {/* Точки-индикаторы */}
            <div className="vote-slide-dots">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`vote-slide-dot ${activeSlide === i ? "active" : ""}`}
                />
              ))}
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Текст на полупрозрачной плашке */}
          <div className="vote-content-box">
            <h1 className="vote-title">ТРАНСЛЯЦИЯ И ГОЛОСОВАНИЕ</h1>

            <div className="vote-block">
              <h2 className="vote-subtitle">СМОТРЕТЬ</h2>
              <p className="vote-text">
                Посмотреть шоу вы сможете на странице лагеря «Компас» в ВК{" "}
                <a
                  href="https://vk.ru/club121722754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vote-link"
                >
                  vk.ru/club121722754
                </a>
              </p>
            </div>

            <div className="vote-block">
              <h2 className="vote-subtitle">ГОЛОСОВАТЬ</h2>
              <p className="vote-text">
                Голосование пока закрыто. Оно откроется во время проведения конкурса — следите за новостями Flyvision.
              </p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}