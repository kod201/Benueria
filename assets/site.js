/* Small, dependency-free enhancements. The story remains readable without JavaScript. */
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const closeMenu = () => { navigation.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); };
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
matchMedia('(min-width: 681px)').addEventListener('change', closeMenu);

const artDialog = document.querySelector('.art-dialog');
const artImage = document.querySelector('#art-image');
let galleryTrigger;
document.querySelectorAll('[data-gallery]').forEach((link) => {
  link.addEventListener('click', (event) => {
    // Preserve normal open-in-new-tab and direct image navigation.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !artDialog.showModal) return;
    event.preventDefault();
    galleryTrigger = link;
    artImage.src = link.href;
    artImage.alt = link.querySelector('img').alt;
    document.querySelector('#art-title').textContent = link.dataset.title;
    document.querySelector('#art-caption').textContent = link.dataset.caption;
    artDialog.showModal();
    document.body.classList.add('modal-open');
    window.benueriaTrack?.('artwork_open', { content_name: link.dataset.title });
  });
});
artDialog.addEventListener('click', (event) => {
  const box = artDialog.getBoundingClientRect();
  if (event.target === artDialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) artDialog.close();
});
artDialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  galleryTrigger?.focus({ preventScroll: true });
});

// Keep grouped disclosures exclusive in browsers predating details[name].
document.querySelectorAll('details[name]').forEach((panel) => {
  let wasOpen = panel.open;
  panel.addEventListener('toggle', () => {
    const opened = panel.open && !wasOpen;
    wasOpen = panel.open;
    if (!panel.open) return;
    document.querySelectorAll(`details[name="${panel.getAttribute('name')}"]`).forEach((other) => {
      if (other !== panel) other.open = false;
    });
    // Initially open panels and automatic closures are not reader interactions.
    if (opened) {
      const label = panel.querySelector('summary').cloneNode(true);
      const contentType = panel.getAttribute('name');
      label.querySelectorAll(contentType === 'culture' ? 'small, .culture-index, .plus' : 'span')
        .forEach((decoration) => decoration.remove());
      window.benueriaTrack?.('lore_open', {
        content_type: contentType,
        content_name: label.textContent.trim().replace(/\s+/g, ' ')
      });
    }
  });
});
