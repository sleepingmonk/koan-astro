export function initModal() {
  if (typeof document === 'undefined') {
    return;
  }

  const modals = document.querySelectorAll('.koan-modal');

  modals.forEach((item) => {
    if (!(item instanceof HTMLElement) || item.dataset.koanModalBound === 'true') {
      return;
    }

    item.dataset.koanModalBound = 'true';

    const trigger = item.querySelector('.koan-modal__trigger');
    const modal = item.querySelector('dialog');

    if (trigger instanceof HTMLElement && modal instanceof HTMLDialogElement) {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        modal.showModal();
        modal.focus();
      });
    };
  });
}

export function setupModal() {
  if (typeof document === 'undefined') {
    return;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModal, { once: true });
    return;
  }

  initModal();
}
