"use client";

import Link from "next/link";
export default function BeijingNewsPage() {
  return (
    <>
      {/* Хедер как на странице Flyvision China */}
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

      {/* Основной контент */}
      <main className="beijing-news-page">
        <div className="beijing-news-container">
          
          {/* Блок 1: Текст слева, Фото china-venue-1.jpg справа */}
          <div className="beijing-news-row">
            <div className="beijing-news-text">
              <h1 className="beijing-news-title">FLYVISION ОТПРАВЛЯЕТСЯ В ПЕКИН</h1>
              <p>Следующая глава истории Flyvision начнётся в Китае! Пекин станет местом проведения следующего музыкального конкурса, открывая новую страницу в истории проекта.</p>
              <p>Новая страна. Новая сцена. Новые эмоции.</p>
            </div>
            <div
              className="beijing-news-photo"
              style={{ backgroundImage: 'url("/images/china-venue-1.jpg")' }}
            />
          </div>

          {/* Блок 2: Фото china-section-2.jpg слева, Текст справа */}
          <div className="beijing-news-row beijing-news-row--reverse">
            <div className="beijing-news-text">
              <p>Город, в котором древние традиции встречаются с современным миром, станет местом встречи музыки, культуры и творчества. Артисты, яркие выступления и неповторимая атмосфера объединятся на одной международной сцене.</p>
            </div>
            <div
              className="beijing-news-photo"
              style={{ backgroundImage: 'url("/images/china-section-2.jpg")' }}
            />
          </div>

          {/* Блок 3: Текст слева, Фото china-venue-2.jpg справа */}
          <div className="beijing-news-row">
            <div className="beijing-news-text">
              <p>Пекин известен своей уникальной архитектурой, богатой историей и невероятной энергией. Его культурное наследие и современный облик создадут особую атмосферу для нового события Flyvision, которое обещает стать яркой главой в развитии конкурса.</p>
            </div>
            <div
              className="beijing-news-photo"
              style={{ backgroundImage: 'url("/images/china-venue-2.jpg")' }}
            />
          </div>

          {/* Блок 4: Фото china-venue-3.jpg слева, Текст справа */}
          <div className="beijing-news-row beijing-news-row--reverse">
            <div className="beijing-news-text">
              <p>Подготовка к следующему этапу открывает новые возможности для проекта. Flyvision продолжает расширять свои горизонты, объединяя разные музыкальные направления и создавая пространство, где каждый артист может поделиться своим талантом со зрителями.</p>
              <p><strong>Один конкурс. Разные культуры. Музыка без границ.</strong></p>
              <p>Пекин, Китай — следующая остановка Flyvision!</p>
            </div>
            <div
              className="beijing-news-photo"
              style={{ backgroundImage: 'url("/images/china-venue-3.jpg")' }}
            />
          </div>

        </div>
      </main>
    </>
  );
}