import { Link } from 'react-router-dom';
import css from "./ContactSection.module.css";

export default function ContactSection() {

  const links = [
    { label: "фотозони", value: "Фотозона" },
    { label: "гендер-паті", value: "Гендер-паті" },
    { label: "диво куля", value: "Диво куля" },
  ];

  return (
    <section className={css.contactMe}>
      <div className="container">
        <h2 className="header-2">Замовити декор</h2>

        <div className={css.cardWrapper}>
          <div className={css.infoWrapper}>

            <div className={css.linksWrapper}>
              {links.map(({ label, value }) => (
                <Link
                  key={value}
                  to={`/portfolio?type=${encodeURIComponent(value)}`}
                  className={css.redirectLinkSub}
                >
                  {label}
                </Link>
              ))}
            </div>

            <p className={css.infoText}>
              Якщо бажаєте замовити декор схожий на те, що є у вас в прикладу 
              (фото або відео), або замовити організацію певної події 
              (весілля, гендер-паті, дивокуля) натискайте на кнопку з низу 
              і ми обговоримо усі деталі в діректі
            </p>

            <a
              href="https://t.me/vodecor"
              target="_blank"
              rel="noopener noreferrer"
              className={css.contactLink}
            >
              Замовити
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}