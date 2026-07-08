export function jumpLinks() {
  if (typeof document === 'undefined') {
    return;
  }

  const jumpLinks = document.querySelectorAll('.jump-links a');

  jumpLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');

      if (!href || !href.startsWith('#')) {
        return;
      }

      const targetId = href.slice(1);
      const target = document.getElementById(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

export function initJumpLinks() {
  if (typeof document === 'undefined') {
    return;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', jumpLinks, { once: true });
    return;
  }

  jumpLinks();
}
