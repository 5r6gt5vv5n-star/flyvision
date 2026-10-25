"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

type TeamData = {
  id: string;
  type: "team" | "guest" | "venue";
  number?: string;
  country: string;
  artist: string;
  photo: string;
  extraPhotos?: string[];
  vkLink?: string;
  video?: string;
  description: string[];
};

const teams: TeamData[] = [
  {
    id: "team-1",
    type: "team",
    number: "ОТРЯД 1",
    country: "Россия, Москва",
    artist: "Вики Шоу",
    photo: "/images/team-1-moscow.jpg",
    vkLink: "https://vk.ru/wall-121722754_2395",
    description: [
      "Отряд 1 представил столицу России — Москву. Вики Шоу вышла на сцену и сразу захватила внимание зала: её номер стал настоящим гимном энергии и движения.",
      "Публика подхватила ритм, подпевала и не отпускала артистку до последней ноты. Это был яркий дебют, задавший тон всему первому Flyvision.",
      "Москва на сцене «Компаса» звучала по-новому — молодо, дерзко и искренне. Именно с этого номера началась история конкурса.",
    ],
  },
  {
    id: "team-2",
    type: "team",
    number: "ОТРЯД 2",
    country: "Россия, Санкт-Петербург",
    artist: "Поли Котик",
    photo: "/images/team-2-spb.jpg",
    vkLink: "https://vk.ru/wall-121722754_2396",
    description: [
      "Отряд 2 привёз на сцену культурную столицу — Санкт-Петербург. Поли Котик представила номер, в котором соединились изящество, свет и особая петербургская атмосфера.",
      "Зал затих с первых аккордов, а затем взорвался аплодисментами. Это было выступление, которое хотелось пересматривать.",
      "Питер на сцене Flyvision — это про красоту в деталях. И отряд 2 показал её безупречно.",
    ],
  },
  {
    id: "team-3",
    type: "team",
    number: "ОТРЯД 3",
    country: "Норвегия",
    artist: "Александр Рыбак",
    photo: "/images/team-3-norway.jpg",
    vkLink: "https://vk.ru/wall-121722754_2397",
    description: [
      "Отряд 3 представил Норвегию. Александр Рыбак вышел на сцену с номером, в котором чувствовался холод скандинавских фьордов и тепло настоящей музыки.",
      "Зал слушал затаив дыхание, а после финальной ноты утонул в овациях. Норвегия звучала мощно, чисто и по-настоящему.",
      "Это было одно из самых проникновенных выступлений вечера — и яркий пример того, как музыка стирает границы.",
    ],
  },
  {
    id: "team-4",
    type: "team",
    number: "ОТРЯД 4",
    country: "Россия, Сибирь",
    artist: "Диско,тека Авария",
    photo: "/images/ знакомteam-4-siberia.jpg",
    vkLink: "https://vk.ru/wall-121722754_2398",
    description: [
      "Отряд 4 представил Сибирь — и с первых секунд стало ясно: зал будет танцевать. Дискотека Авария превратила выступление в настоящий праздник.",
      "Свет, движениеые хиты — всё это объединило зал в одну большую сцену. Даже те, кто не планировал, начали подпевать и пританцовывать.",
      "Сибирь на Flyvision — это про размах и щедрость. И отряд 4 показал это с лихвой.",
    ],
  },
  {
    id: "team-5",
    type: "team",
    number: "ОТРЯД 5",
    country: "Россия, Казань",
    artist: "Марьяна Локель",
    photo: "/images/team-5-kazan.jpg",
    vkLink: "https://vk.ru/wall-121722754_2399",
    description: [
      "Отряд 5 привёз на сцену Казань — город, где встречаются Восток и Запад. Марьяна Локель представила номер, в котором чувствовалась эта уникальная гармония.",
      "Публика слушала внимательно, а после выступления долго не отпускала артистку аплодисментами.",
      "Казань на Flyvision — это про единство культур. И отряд 5 показал это в каждой ноте.",
    ],
  },
  {
    id: "team-6",
    type: "team",
    number: "ОТРЯД 6",
    country: "Россия, Мурманск",
    artist: "Анна Немченко",
    photo: "/images/team-6-murmansk.jpg",
    vkLink: "https://vk.ru/wall-121722754_2408",
    description: [
      "Отряд 6 представил Мурманск — город за Полярным кругом. Анна Немченко вышла на сцену с номером, в котором чувствовалась сила и красота северного края.",
      "Зал встретил выступление тепло, а финальные аккорды утонули в овациях. Это был настоящий северный характер — стойкий и искренний.",
      "Мурманск на Flyvision — это про мужество и тепло, которое живёт даже в самых холодных краях.",
    ],
  },
  {
    id: "team-7",
    type: "team",
    number: "ОТРЯД 7",
    country: "Россия, Владивосток",
    artist: "Ваня Дмитриенко",
    photo: "/images/team-7-vladivostok.jpg",
    vkLink: "https://vk.ru/wall-121722754_2409",
    description: [
      "Отряд 7 привёз на сцену Владивосток — город у самого восточного края России. Ваня Дмитриенко выступил с номером, в котором было всё: и молодость, и энергия, и море.",
      "Зал подхватил настроение с первых секунд. Аплодисменты, крики, улыбки — Владивосток покорил Flyvision.",
      "Это выступление напомнило всем: Россия — огромная и разная, и каждая её точка — это отдельная история.",
    ],
  },
  {
    id: "team-8",
    type: "team",
    number: "ОТРЯД 8",
    country: "Беларусь",
    artist: "Ёлка Прованс",
    photo: "/images/team-8-belarus.jpg",
    vkLink: "https://vk.ru/wall-121722754_2410",
    description: [
      "Отряд 8 представил Беларусь. Ёлка Прованс вышел на сцену с номером, в котором чувствовались и сила, и душа белорусской земли.",
      "Зал слушал заворожённо. Это было выступление, которое по-настоящему объединило сцену и публику.",
      "Беларусь на Flyvision — это про искренность и красоту. И отряд 8 показал это в полной мере.",
    ],
  },
  {
    id: "team-9",
    type: "team",
    number: "ОТРЯД 9",
    country: "Россия, Омск",
    artist: "Надежда Кадышева",
    photo: "/images/team-9-omsk.jpg",
    vkLink: "https://vk.ru/wall-121722754_2411",
    description: [
      "Отряд 9 представил Омск. Надежда Кадышева вышла на сцену с номером, в котором чувствовалась русская душа — широкая, тёплая и настоящая.",
      "Зал подхватил мелодию и не отпускал артистку до самого конца. Аплодисменты не смолкали ещё долго после финальной ноты.",
      "Омск на Flyvision — это про традиции и искренность. И отряд 9 напомнил всем, что музыка умеет говорить на языке сердца.",
    ],
  },
  {
    id: "venue",
    type: "venue",
    country: "Ульяновск",
    artist: "Место проведения",
    photo: "/images/slide-1.jpg",
    description: [
      "Ульяновск — город, где 16 июня 2026 года состоялся первый концерт Flyvision.",
      "На сцене ЦДТ №2 лагеря «Компас» встретились 9 отрядов, 3 специальных гостя из Греции, Грузии и США, а также звёздные ведущие и члены жюри.",
      "Именно здесь началась история конкурса, объединившего музыку, культуру и людей.",
    ],
  },
  {
    id: "guest-1",
    type: "guest",
    country: "Греция",
    artist: "AKYLAS — FERTO",
    photo: "/images/guest-greece.jpg",
    video: "/videos/akylas-small.mp4",
    description: [
      "AKYLAS — специальный гость из Греции, представивший на первом Flyvision номер «FERTO».",
      "Его выступление стало настоящим украшением вечера: средиземноморская энергия, яркая подача и харизма, которая мгновенно захватила зал.",
      "Греция на сцене Flyvision — это про страсть и красоту. И AKYLAS показал это в полной мере.",
    ],
  },
  {
    id: "guest-2",
    type: "guest",
    country: "Грузия",
    artist: "BZIKEBI — On Replay",
    photo: "/images/guest-georgia.jpg",
    video: "/videos/bzikebi-small.mp4",
    description: [
      "BZIKEBI — специальные гости из Грузии, выступившие с номером «On Replay».",
      "Их выступление было наполнено грузинским колоритом, живым ритмом и настоящей сценической магией. Зал танцевал и подпевал от начала до конца.",
      "Грузия на Flyvision — это про гостеприимство и огонь. И BZIKEBI привезли его с собой.",
    ],
  },
  {
    id: "guest-3",
    type: "guest",
    country: "США",
    artist: "LADY GAGA — Bad Romance",
    photo: "/images/guest-usa.jpg",
    video: "/videos/lady-gaga-small.mp4",
    description: [
      "LADY GAGA — специальный гость из США, представившая на Flyvision легендарный номер «Bad Romance».",
      "Её выступление стало одним из самых ярких моментов вечера: мощный вокал, узнаваемый образ и атмосфера настоящего мирового шоу.",
      "США на Flyvision — это про масштаб и смелость. И LADY GAGA доказала, что музыка не знает границ.",
    ],
  },
];

export default function TeamPage() {
  const params = useParams();
  const id = params?.id as string;
  const team = teams.find((t) => t.id === id);

  if (!team) {
    return (
      <main className="team-page">
        <div className="team-layout">
          <div className="team-text-side">
            <h1 className="team-title">СТРАНИЦА НЕ НАЙДЕНА</h1>
            <p className="team-description">
              Такой страницы не существует.
            </p>
            <div className="team-buttons">
              <Link href="/flyvision-2026/map" className="team-back-btn">
                ← ВЕРНУТЬСЯ К КАРТЕ
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="team-page">
      <div className="team-layout">
        {/* ФОТО СЛЕВА */}
        <div className="team-photo-side">
          <div
            className="team-photo"
            style={{ backgroundImage: `url("${team.photo}")` }}
          />
        </div>

        {/* ТЕКСТ СПРАВА */}
        <div className="team-text-side">
          {team.number && (
            <span className="team-number">{team.number}</span>
          )}
          <h1 className="team-title">{team.country}</h1>
          <p className="team-artist">{team.artist}</p>

          <div className="team-description-block">
            {team.description.map((paragraph, i) => (
              <p key={i} className="team-description">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="team-buttons">
            {team.vkLink && (
              <a
                href={team.vkLink}
                target="_blank"
                rel="noopener noreferrer"
                className="team-vk-btn"
              >
                СМОТРЕТЬ В VK →
              </a>
            )}

            <Link href="/flyvision-2026/map" className="team-back-btn">
              ← К КАРТЕ
            </Link>
          </div>
        </div>
      </div>

      {/* ВИДЕО — если есть (гости) */}
      {team.video && (
        <div className="team-video-wrapper">
          <video
            controls
            className="team-video"
            src={team.video}
          />
        </div>
      )}
    </main>
  );
}