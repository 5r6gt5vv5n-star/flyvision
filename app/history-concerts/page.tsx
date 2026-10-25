"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function HistoryConcertsPage() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <main className="history-page">
      {/* ============ ТАЙМЛАЙН СВЕРХУ ============ */}
      <section className="history-timeline">
        <div className="history-timeline-line" />

        {/* Точка 1 — FLYVISION (ссылка на /flyvision-2026) */}
        <Link
          href="/flyvision-2026"
          className="history-timeline-point history-timeline-point--premiere history-timeline-point--link"
        >
          <div className="history-dot history-dot--yellow" />
          <span className="history-date">16.06.2026</span>
          <h2 className="history-title">FLYVISION</h2>
        </Link>

        {/* Точка 2 — FLYVISION CHINA (без ссылки) */}
        <div className="history-timeline-point history-timeline-point--coming">
          <div className="history-dot history-dot--question" />
          <span className="history-date">2027</span>
          <h2 className="history-title">
            FLYVISION
            <br />
            <span className="history-title-china">CHINA</span>
          </h2>
        </div>
      </section>

      {/* ============ КАРТА С ТОЧКАМИ ============ */}
      <section className="history-map">
        {/* Заголовок в левом углу карты */}
        <div className="history-map-info">
          <h2 className="history-map-title">
            Хронологический порядок Flyvision
          </h2>
          <p className="history-map-sub">
            На этой карте — вся история Flyvision: от самого первого концерта
            до будущих событий. Нажмите на город или точку, чтобы узнать больше.
          </p>
        </div>

        {/* Точка Ульяновск — ссылка */}
        <Link
          href="/flyvision-2026"
          className="history-map-dot history-map-dot--yellow history-map-dot--link"
          style={{ left: "57%", top: "-10%" }}
        >
          <span className="history-map-dot-label">Ульяновск</span>
        </Link>

        {/* Точка Пекин — без ссылки */}
        <div
          className="history-map-dot"
          style={{ left: "85.5%", top: "4.5%" }}
        >
          <span className="history-map-dot-label">Пекин</span>
        </div>

        {/* Линия между точками */}
        <svg
          className="history-map-line"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="history-map-line-path"
            d="M 57 -10 Q 71 -25, 85.5 4.5"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="0.12"
            fill="none"
          />
          <path
            className="history-map-line-spark"
            d="M 57 -10 Q 71 -25, 85.5 4.5"
            stroke="rgba(255, 255, 255, 0.95)"
            strokeWidth="0.22"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="3 200"
          />
        </svg>
      </section>

      {/* ============ КОМЕТЫ ============ */}
      <div className="history-comets" aria-hidden="true">
        <span className="history-comet history-comet--1" />
        <span className="history-comet history-comet--2" />
        <span className="history-comet history-comet--3" />
      </div>
    </main>
  );
}