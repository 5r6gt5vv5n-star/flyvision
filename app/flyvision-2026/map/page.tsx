"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Point = {
  id: string;
  type: "team" | "guest" | "venue";
  number?: string;
  country: string;
  artist: string;
  photo: string;
  x: number;
  y: number;
};

const points: Point[] = [
  { id: "team-3", type: "team", number: "ОТРЯД 3", country: "Норвегия", artist: "Александр Рыбак", photo: "/images/team-3-norway.jpg", x: 61, y: 43 },
  { id: "team-6", type: "team", number: "ОТРЯД 6", country: "Россия, Мурманск", artist: "Анна Немченко", photo: "/images/team-6-murmansk.jpg", x: 65, y: 38 },
  { id: "team-2", type: "team", number: "ОТРЯД 2", country: "Россия, Санкт-Петербург", artist: "Поли Котик", photo: "/images/team-2-spb.jpg", x: 65, y: 42 },
  { id: "team-1", type: "team", number: "ОТРЯД 1", country: "Россия, Москва", artist: "Вики Шоу", photo: "/images/team-1-moscow.jpg", x: 67, y: 43 },
  { id: "team-8", type: "team", number: "ОТРЯД 8", country: "Беларусь", artist: "Ёлка Прованс", photo: "/images/team-8-belarus.jpg", x: 65, y: 45 },
  { id: "team-5", type: "team", number: "ОТРЯД 5", country: "Россия, Казань", artist: "Марьяна Локель", photo: "/images/team-5-kazan.jpg", x: 69, y: 43 },
  { id: "venue", type: "venue", country: "Ульяновск", artist: "Место проведения", photo: "/images/slide-1.jpg", x: 68, y: 45 },
  { id: "team-4", type: "team", number: "ОТРЯД 4", country: "Россия, Новосибирск", artist: "Дискотека Авария", photo: "/images/team-4-siberia.jpg", x: 76, y: 45 },
  { id: "team-9", type: "team", number: "ОТРЯД 9", country: "Россия, Омск", artist: "Надежда Кадышева", photo: "/images/team-9-omsk.jpg", x: 72, y: 44 },
  { id: "team-7", type: "team", number: "ОТРЯД 7", country: "Россия, Владивосток", artist: "Ваня Дмитриенко", photo: "/images/team-7-vladivostok.jpg", x: 84, y: 49 },
  { id: "guest-1", type: "guest", country: "Греция", artist: "AKYLAS — FERTO", photo: "/images/guest-greece.jpg", x: 64, y: 51 },
  { id: "guest-2", type: "guest", country: "Грузия", artist: "BZIKEBI — On Replay", photo: "/images/guest-georgia.jpg", x: 69, y: 51 },
  { id: "guest-3", type: "guest", country: "США", artist: "LADY GAGA — Bad Romance", photo: "/images/guest-usa.jpg", x: 47, y: 54 },
];

export default function MapPage() {
  const [selected, setSelected] = useState<Point | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const isZoomed = selected !== null;

  return (
    <>
      <main
        className="map-page"
        onClick={(e) => {
          const t = e.target as HTMLElement;
          if (
            selected &&
            !t.closest(".map-dot") &&
            !t.closest(".map-card")
          ) {
            setSelected(null);
          }
        }}
      >
        <div className={`map-explore-label ${selected ? "hidden" : ""}`}>
          ИССЛЕДУЙТЕ СТРАНЫ
        </div>

        <div
          className={`map-zoom-layer ${isZoomed ? "zoomed" : ""}`}
          style={
            isZoomed && selected
              ? { transformOrigin: `${selected.x}% ${selected.y}%` }
              : undefined
          }
        >
          <img
            src="/images/world-map-2026.jpg"
            alt="Карта мира"
            className="map-bg"
          />

          {points.map((p) => (
            <button
              key={p.id}
              className={`map-dot map-dot-${p.type} ${
                selected?.id === p.id ? "active" : ""
              } ${p.type === "venue" && isZoomed ? "counter-zoom" : ""}`}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              onClick={(e) => {
                e.stopPropagation();
                setSelected(p);
              }}
              aria-label={p.country}
            />
          ))}
        </div>

        <div className={`map-side ${selected ? "hidden" : ""}`}>
          <div className="text-block">
            <h4 className="text-block-title">НАЧАЛО ИСТОРИИ</h4>
            <p className="text-block-text">
              16 июня 2026 года в Ульяновске состоялся первый концерт
              Flyvision — масштабное музыкальное событие, объединившее
              творчество, культуру и музыку разных стран. Авторами
              проекта стали Екатерина Тарасова и Михаил Бабаве.
            </p>
          </div>

          <div className="text-block">
            <h4 className="text-block-title">СЦЕНА И УЧАСТНИКИ</h4>
            <p className="text-block-text">
              На сцене ЦДТ №2 лагеря «Компас» встретились 9 отрядов,
              каждый из которых представил свой музыкальный номер
              и передал зрителям атмосферу и колорит выбранной страны.
              Особым украшением программы стали 3 специальных гостя
              из Греции, Грузии и США.
            </p>
          </div>

          <div className="text-block">
            <h4 className="text-block-title">ВЕДУЩИЕ И ЖЮРИ</h4>
            <p className="text-block-text">
              Провели этот особенный вечер Сергей Лазарев и Лера
              Кудрявцева, а оценивали выступления звёздные члены жюри —
              MACAN, Диана Арбенина и Ёлка.
            </p>
          </div>
        </div>

        <div className={`map-card ${selected ? "visible" : ""}`}>
          {selected && (
            <>
              <div
                className="map-card-photo"
                style={{ backgroundImage: `url("${selected.photo}")` }}
              />
              <div className="map-card-info">
                {selected.number && (
                  <span className="map-card-number">{selected.number}</span>
                )}
                <h3 className="map-card-country">{selected.country}</h3>
                <p className="map-card-artist">{selected.artist}</p>

                <Link
                  href={`/flyvision-2026/team/${selected.id}`}
                  className="map-card-btn"
                >
                  УЗНАТЬ БОЛЬШЕ →
                </Link>
              </div>
            </>
          )}
        </div>
      </main>

      <section className="after-map">
        <div className="hosts-section">
          <div className="hosts-text">
            <h3 className="hosts-title">ВЕДУЩИЕ</h3>
            <p className="hosts-text-p">
              Первый концерт Flyvision 2026 года вели{" "}
              <strong>Сергей Лазарев</strong> и{" "}
              <strong>Лера Кудрявцева</strong>. Артисты отметили,
              что это был <strong>первый на их памяти настолько
              масштабный и красивый концерт</strong> — с настоящей
              сценой, международными гостями и атмосферой большого шоу.
            </p>
          </div>

          <div className="hosts-photo-frame">
            <div
              className="hosts-photo"
              style={{ backgroundImage: 'url("/images/hosts.jpg")' }}
            />
          </div>
        </div>

        <div className="judges-section">
          <div className="judges-photo-frame">
            <div
              className="judges-photo"
              style={{ backgroundImage: 'url("/images/judges.jpg")' }}
            />
          </div>

          <div className="judges-text">
            <h3 className="judges-title">ЖЮРИ</h3>
            <p className="judges-text-p">
              Оценивали выступления звёздные члены жюри —{" "}
              <strong>MACAN</strong>, <strong>Диана Арбенина</strong>{" "}
              и <strong>Ёлка</strong>.
            </p>
            <p className="judges-text-p">
              <strong>MACAN</strong> ради такого вечера приехал прямо
              из армии. <strong>Диана Арбенина</strong> призналась,
              что ради этого концерта её группе «Ночные снайперы»
              пришлось лечь спать днём, чтобы быть в форме.
              А <strong>Ёлка</strong> отметила, что впервые получила
              столько внимания, сколько обычно получает только
              на Новый год.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}