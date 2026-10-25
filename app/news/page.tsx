import Link from "next/link";

const newsItems = [
  {
  id: 1,
  category: "FLYVISION",
  title: "Откройте для себя мир Flyvision",
  photo: "/images/flyvision-2026-bg-v3.jpg",
  size: "big",
  accent: "purple",
  logo: "/images/flyvision-header-logo.png",
  href: "/about",
},
  {
  id: 2,
  category: "ПЕКИН 2027",
  title: "Flyvision приезжает в Пекин",
  photo: "/images/china-venue-1.jpg",
  size: "big",
  accent: "red",
  hideCategory: true,
  href: "/news/beijing", // ← Проверь, что ссылка ведет сюда
},
  {
  id: 3,
  category: "ЗА КУЛИСАМИ",
  title: "За музыкой и сценой",
  photo: "/images/backstage-3.jpg", // ← Новое фото
  size: "big",
  accent: "purple",
  hideCategory: true,               // ← Убираем плашку
  href: "/about",
},
  {
  id: 4,
  category: "АРТИСТЫ И МУЗЫКА",
  title: "Познакомьтесь с артистами Flyvision",
  photo: "/images/slide-2.jpg",
  size: "small",
  accent: "purple",
  hideCategory: true,               // ← Убираем плашку
  href: "/flyvision-2026/groups",   // ← Ведёт на страницу отрядов
},
  
  {
  id: 6,
  category: "СПЕЦПРОЕКТ ПЕКИН",
  title: "Внутри подготовки к Пекину",
  photo: "/images/china-venue-2.jpg",
  size: "small",
  accent: "red",
  hideCategory: true,
  href: "/china-2027",         // ← ВЕДЁТ НА ГЛАВНУЮ КИТАЯ
},
  
];

export default function NewsPage() {
  const bigCards = newsItems.filter((n) => n.size === "big");
  const smallCards = newsItems.filter((n) => n.size === "small");

  return (
    <main className="news-page">
      {/* Заголовок страницы */}
      <section className="news-hero">
        <h1 className="news-hero-title">Новости Flyvision</h1>
      </section>

      {/* Верхний ряд — 3 большие карточки */}
      <section className="news-grid-big">
        {bigCards.map((item) => (
          <Link
  key={item.id}
  href={item.href || "#"}
  className={`news-card news-card--big news-card--${item.accent}`}
>
            <div
              className="news-card-photo"
              style={{ backgroundImage: `url("${item.photo}")` }}
            />

            {/* Лого по центру (только если задано) */}
            {item.logo && (
              <div className="news-card-logo">
                <img src={item.logo} alt={item.category} />
              </div>
            )}

            <div className="news-card-overlay" />
            
            <div className="news-card-content">
              {/* Плашку категории не показываем, если есть лого */}
              {!item.logo && !item.hideCategory && (
  <span className="news-card-category">{item.category}</span>
)}
              <h2 className="news-card-title">{item.title}</h2>
            </div>
          </Link>
        ))}
      </section>

      {/* Нижний ряд — 4 маленькие карточки */}
      <section className="news-grid-small">
  {smallCards.map((item) => (
    <Link
      key={item.id}
      href={item.href || "#"}
      className={`news-card news-card--small news-card--${item.accent}`}
    >
      <div
        className="news-card-photo"
        style={{ backgroundImage: `url("${item.photo}")` }}
      />
      <div className="news-card-overlay" />
      <div className="news-card-content">
        {!item.hideCategory && (
          <span className="news-card-category">{item.category}</span>
        )}
        <h2 className="news-card-title">{item.title}</h2>
      </div>
    </Link>
  ))}
</section>
    </main>
  );
}