export default function ModalSection() {
  return (
     <div class="modal">
      <div class="modal-btn-wrapper">
        <button class="modal-btn">
          <svg width="24" height="24" class="modal-btn-icon">
            <use href="/img/icons.svg#icon-clear"></use>
          </svg>
        </button>
      </div>
      <nav class="modal-nav">
        <ul class="modal-nav-list">
          <li class="modal-nav-list-item">
            <a class="modal-nav-link" href="">Головна</a>
          </li>
          <li class="modal-nav-list-item">
            <a class="modal-nav-link" href="">Каталог</a>
          </li>
        </ul>
      </nav>
      <div class="modal-icons">
        <ul class="modal-icons-list">
          <li class="modal-icon-item">
            <a href="" class="modal-icon-link">
              <svg width="20" height="20" class="modal-link-icon">
                <use href="/img/icons.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li class="modal-icon-item">
            <a href="" class="modal-icon-link">
              <svg width="20" height="20" class="modal-link-icon">
                <use href="/img/icons.svg#icon-telegram"></use>
              </svg>
            </a>
          </li>
          <li class="modal-icon-item">
            <a href="" class="modal-icon-link">
              <svg width="20" height="20" class="modal-link-icon">
                <use href="/img/icons.svg#icon-phone"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
