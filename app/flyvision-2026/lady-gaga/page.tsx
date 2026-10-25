"use client";

import Link from "next/link";

export default function LadyGagaPage() {
  return (
    <main className="team-page team-page--lady-gaga">
      <section className="page-section" style={{ paddingTop: "160px" }}>
        <div className="artist-layout">
          {/* Фото артиста слева — вертикально */}
          <div className="artist-photo-side">
            <div
              className="artist-photo"
              style={{ backgroundImage: 'url("/images/guest-usa-2.jpg")' }}
            />
          </div>

          {/* Текст справа — в стеклянной карточке */}
          <div className="artist-text-side">
            <span className="artist-country">США</span>
            <h1 className="artist-name">LADY GAGA — BAD ROMANCE</h1>

            <div className="artist-description">
              <p>
                Одним из самых ярких и запоминающихся моментов концерта Flyvision
                стало выступление с легендарным хитом Lady Gaga — «Bad Romance».
                На сцене появилась сама Lady Gaga, превратив номер в настоящее
                мировое шоу.
              </p>
              <p>
                Её узнаваемый образ, мощная энергетика и фирменная подача
                буквально захватили внимание зрителей. Это выступление стало
                настоящей кульминацией вечера.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" style={{ paddingBottom: "120px" }}>
        <h3 className="section-title-bold">ВЫСТУПЛЕНИЕ</h3>
        <div className="video-wrapper">
          <video controls className="video-player">
            <source src="/videos/lady-gaga-small.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </main>
  );
}