// Minimal lightbox for article images using the native <dialog> element.
// Opens on click/Enter; closes on click, ESC, or backdrop click.
document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('article img');
    if (!imgs.length) return;

    const dialog = document.createElement('dialog');
    dialog.className = 'lightbox';
    dialog.setAttribute('aria-label', 'Image viewer');
    const big = document.createElement('img');
    dialog.appendChild(big);
    document.body.appendChild(dialog);

    const open = (img) => {
        big.src = img.src;
        big.alt = img.alt || '';
        dialog.showModal();
    };

    dialog.addEventListener('click', (e) => {
        if (e.target === dialog || e.target === big) dialog.close();
    });

    imgs.forEach((img) => {
        // Skip linked images, site chrome (avatar), and opt-outs.
        if (img.closest('a') || img.classList.contains('u-photo') || img.classList.contains('no-lightbox')) return;
        img.tabIndex = 0;
        img.setAttribute('role', 'button');
        img.setAttribute('aria-label', 'Open image fullscreen');
        img.addEventListener('click', () => open(img));
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                open(img);
            }
        });
    });
});
