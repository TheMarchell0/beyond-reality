export function tabsFunctional(tabsBlock) {
    const tabs = tabsBlock.querySelectorAll('.js-tab');
    const contents = tabsBlock.querySelectorAll('.js-tabs-content');

    for (let tab of tabs) {
        tab.addEventListener('click', function () {
            if (!this.classList.contains('active')) {
                const tag = this.getAttribute('data-open-to');
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                contents.forEach(content => content.classList.remove('active'));
                const activeContent = Array.from(contents).find(content => content.getAttribute('data-tab') === tag);
                if (activeContent) {
                    activeContent.classList.add('active');
                }
            }
        });
    }
}