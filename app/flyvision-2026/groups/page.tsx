"use client";

import { useState } from "react";

type Group = {
  num: number;
  city: string;
  country: string;
  region: "russia" | "europe";
  flag: string;
  photo: string;
  href: string;
  accent: string;
};

const groups: Group[] = [
  {
    num: 1,
    city: "Москва",
    country: "Россия",
    region: "russia",
    flag: "/images/flags/ru.png",
    photo: "/images/city-moscow.jpg",
    href: "https://vk.ru/wall-121722754_2395",
    accent: "rgba(60, 100, 220, 0.85)",      // синий
  },
  {
    num: 2,
    city: "Санкт-Петербург",
    country: "Россия",
    region: "russia",
    flag: "/images/flags/ru.png",
    photo: "/images/city-spb.jpg",
    href: "https://vk.ru/wall-121722754_2396",
    accent: "rgba(50, 130, 230, 0.85)",      // голубой
  },
  {
    num: 3,
    city: "Норвегия",
    country: "Норвегия",
    region: "europe",
    flag: "/images/flags/no.png",
    photo: "/images/city-norway.jpg",
    href: "https://vk.ru/wall-121722754_2397",
    accent: "rgba(180, 60, 200, 0.85)",      // фиолетово-розовый
  },
  {
    num: 4,
    city: "Новосибирск",
    country: "Россия",
    region: "russia",
    flag: "/images/flags/ru.png",
    photo: "/images/city-siberia.jpg",
    href: "https://vk.ru/wall-121722754_2398",
    accent: "rgba(40, 180, 170, 0.85)",      // бирюзово-зелёный
  },
  {
    num: 5,
    city: "Казань",
    country: "Россия",
    region: "russia",
    flag: "/images/flags/ru.png",
    photo: "/images/city-kazan.jpg",
    href: "https://vk.ru/wall-121722754_2399",
    accent: "rgba(240, 130, 60, 0.85)",      // оранжево-розовый
  },
  {
    num: 6,
    city: "Мурманск",
    country: "Россия",
    region: "russia",
    flag: "/images/flags/ru.png",
    photo: "/images/city-murmansk.jpg",
    href: "https://vk.ru/wall-121722754_2408",
    accent: "rgba(40, 90, 220, 0.85)",       // синий
  },
  {
    num: 7,
    city: "Владивосток",
    country: "Россия",
    region: "russia",
    flag: "/images/flags/ru.png",
    photo: "/images/city-vladivostok.jpg",
    href: "https://vk.ru/wall-121722754_2409",
    accent: "rgba(60, 120, 200, 0.85)",      // морской
  },
  {
    num: 8,
    city: "Беларусь",
    country: "Беларусь",
    region: "europe",
    flag: "/images/flags/by.png",
    photo: "/images/city-belarus.jpg",
    href: "https://vk.ru/wall-121722754_2410",
    accent: "rgba(190, 50, 90, 0.85)",       // красно-розовый
  },
  {
    num: 9,
    city: "Омск",
    country: "Россия",
    region: "russia",
    flag: "/images/flags/ru.png",
    photo: "/images/city-omsk.jpg",
    href: "https://vk.ru/wall-121722754_2411",
    accent: "rgba(80, 60, 180, 0.85)",       // индиго
  },
];

type Tab = "all" | "russia" | "europe";

export default function GroupsPage() {
  const [tab, setTab] = useState<Tab>("all");

  const filtered = groups.filter((g) => {
    if (tab === "all") return true;
    return g.region === tab;
  });

  return (
    <main className="groups-page">
      <section className="groups-hero">
        <div className="groups-hero-glow" aria-hidden="true" />
        <div className="groups-hero-content">
          <h1 className="groups-hero-title">ОТРЯДЫ</h1>
          <p className="groups-hero-sub">FLYVISION SONG CONTEST 2027</p>
          <p className="groups-hero-stats">
  9 отрядов &nbsp;·&nbsp; 9 городов
</p>
        </div>
        <div className="groups-hero-side">
          <span className="groups-hero-side-line" />
          <p className="groups-hero-side-text">
            МУЗЫКА
            <br />
            ОБЪЕДИНЯЕТ
            <br />
            МИР
          </p>
          <span className="groups-hero-side-line" />
        </div>
      </section>

      <section className="groups-content">
        <div className="groups-tabs" role="tablist" aria-label="Фильтр отрядов">
          <button
            role="tab"
            aria-selected={tab === "all"}
            className={`groups-tab ${tab === "all" ? "active" : ""}`}
            onClick={() => setTab("all")}
          >
            Все
          </button>
          <button
            role="tab"
            aria-selected={tab === "russia"}
            className={`groups-tab ${tab === "russia" ? "active" : ""}`}
            onClick={() => setTab("russia")}
          >
            Россия
          </button>
          <button
            role="tab"
            aria-selected={tab === "europe"}
            className={`groups-tab ${tab === "europe" ? "active" : ""}`}
            onClick={() => setTab("europe")}
          >
            Европа
          </button>
        </div>

        <div className="groups-cards-grid">
          {filtered.map((g) => (
            <a
  key={g.num}
  href={g.href}
  target="_blank"
  rel="noopener noreferrer"
  className="group-tile"
  style={{ ["--accent" as string]: g.accent }}
>
              <div
                className="group-tile-bg"
                style={{ backgroundImage: `url(${g.photo})` }}
              />
              <div className="group-tile-overlay" />

              <div className="group-tile-content">
                <div className="group-tile-num">
                  {String(g.num).padStart(2, "0")}
                </div>

                <div className="group-tile-bottom">
                  <div className="group-tile-info">
                    <div className="group-tile-city-row">
                      <img
                        src={g.flag}
                        alt={g.country}
                        className="group-tile-flag"
                      />
                      <span className="group-tile-city">{g.city}</span>
                    </div>
                    <span className="group-tile-label">ОТРЯД {g.num}</span>
                  </div>

                  <span className="group-tile-arrow" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}