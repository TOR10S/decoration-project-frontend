import clsx from "clsx"
import ModalIcons from "./ModalIcons"
import css from "./ModalSection.module.css";
import ModalNavList from "./ModalNavList";

export default function ModalSection({onClose, isOpen}) {
  return (
     <div className={clsx(css.modal, isOpen && css.open )}>
      <div className={css.modalBtnWrapper}>
        <button className={css.modalBtn} onClick={onClose}>
          <svg width="24" height="24" className={css.modalBtnIcon}>
            <use href="/img/icons.svg#icon-clear"></use>
          </svg>
        </button>
      </div>
      <ModalNavList/>
      <ModalIcons />
    </div>
  )
}
