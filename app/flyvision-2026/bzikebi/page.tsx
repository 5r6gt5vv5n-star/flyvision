"use client";

import Link from "next/link";

export default function BzikebiPage() {
  return (
    <main className="team-page team-page--bzikebi">
      <section className="page-section" style={{ paddingTop: "160px" }}>
        <div className="artist-layout">
          {/* Фото артиста слева — вертикально */}
          <div className="artist-photo-side">
            <div
              className="artist-photo artist-photo--bzikebi"
              style={{ backgroundImage: 'url("/images/guest-georgia-1.jpg")' }}
            />
          </div>

          {/* Текст справа — в стеклянной карточке */}
          <div className="artist-text-side">
            <span className="artist-country">ГРУЗИЯ</span>
            <h1 className="artist-name">BZIKEBI — ON REPLAY</h1>

            <div className="artist-description">
              <p>
                Грузия выступила на концерте Flyvision с номером «on Replay».
                Зрителям очень понравился характер данной группы. Их сюжет длится
                ещё с 2007 года — на их первом выступлении они взяли тематику
                пчёл, которую продолжают уже почти 20 лет.
              </p>
              <p>
                На концерте Flyvision они продемонстрировали свой номер
                в характере техно-необычного звучания.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ paddingBottom: "120px" }}>
        <h3 className="section-title-bold">ВЫСТУПЛЕНИЕ</h3>
        <div className="video-wrapper">
          <video controls className="video-player">
            <source src="/videos/bzikebi-small.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </main>
  );
}