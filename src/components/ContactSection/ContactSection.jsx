import css from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={css.contactMe}>
    <div className="container">
      <h2 className="header-2">Замовити декор</h2>
      <div className={css.cardWrapper}>
        <div className={css.infoWrapper}>
          <div className={css.linksWrapper}>
            <a href="" className={css.redirectLinkSub}>фотозони</a>
            <a href="" className={css.redirectLinkSub}>гендерпаті</a>
            <a href="" className={css.redirectLinkSub}>дивокуля</a>
          </div>
          <p className={css.infoText}>Якщо бажаєте замовити декор схожий на те, що є у вас в прикладу (фото або відео), або замовити організацію певної події (весілля, гендер-паті, дивокуля) натискайте на кнопку з низу і ми обговоримо усі деталі в діректі</p>
          <a href="" className={css.contactLink}>Замовити</a>
        </div>
      </div>
    </div>
    </section>
  )
}
