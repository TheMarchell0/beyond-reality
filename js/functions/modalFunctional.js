export function modalFunctional(modal) {
    const triggerButtons = document.querySelectorAll('.js-modal-trigger');
    const closeButtons = modal.querySelectorAll('.js-close-modal');

    triggerButtons.forEach(triggerButton => {
        triggerButton.addEventListener('click', () => {
            const modalId = triggerButton.getAttribute('data-open-modal');
            const modal = document.querySelector(`#${modalId}`);
            openModal(modal);
        });
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });

    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => closeModal(modal));
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal(modal);
        }
    });
}

const body = document.body;

function openModal(modal) {
    modal.classList.add('active', 'modal-anim-open');
    lockScroll();
    modal.classList.remove('modal-anim-close');
}

function closeModal(modal) {
    if (modal) {
        modal.classList.replace('modal-anim-open', 'modal-anim-close');
        modal.addEventListener('animationend', () => {
            modal.classList.remove('active', 'modal-anim-close');
            unlockScroll();
        }, {once: true});
    }
}

function lockScroll() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.paddingRight = `${scrollbarWidth}px`;
    body.classList.add('no-scroll');
}

function unlockScroll() {
    body.style.paddingRight = '';
    body.classList.remove('no-scroll');
}
