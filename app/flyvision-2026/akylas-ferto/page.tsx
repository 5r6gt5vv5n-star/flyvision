"use client";

import Link from "next/link";

export default function AkylasPage() {
  return (
    <main className="team-page team-page--akylas">
      <section className="page-section" style={{ paddingTop: "160px" }}>
        <div className="artist-layout">
          {/* Фото артиста слева — вертикально */}
          <div className="artist-photo-side">
            <div
              className="artist-photo"
              style={{ backgroundImage: 'url("/images/guest-greece-card.jpg")' }}
            />
          </div>

          {/* Текст справа — в стеклянной карточке */}
          <div className="artist-text-side">
            <span className="artist-country">ГРЕЦИЯ</span>
            <h1 className="artist-name">AKYLAS — FERTO</h1>

            <div className="artist-description">
              <p>
                Греция представила на концерте Flyvision номер «Ferto» в исполнении
                артиста Akylas. Выступление стало ярким представлением
                греческого музыкального колорита, объединив характер артиста,
                необычное звучание и атмосферу современной Греции.
              </p>
              <p>
                Номер сразу привлёк внимание зрителей своей энергетикой и стал
                одним из запоминающихся международных выступлений вечера.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ paddingBottom: "120px" }}>
        <h3 className="section-title-bold">ВЫСТУПЛЕНИЕ</h3>
        <div className="video-wrapper">
          <video controls className="video-player">
            <source src="/videos/akylas-small.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </main>
  );
}