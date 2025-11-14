document.addEventListener('DOMContentLoaded', () => {
    const menuHTML = `
        <div class="headerend">
            <button class="headermenu-btn menu-btn" aria-label="menu" aria-expanded="false" aria-controls="mainNav">
                🍔
            </button>
            <nav class="header__menu menu" id="mainNav" aria-hidden="true">
                <ul class="menu__list list-unstyled">
                    <li class="menu__item">
                        <a class="menu__link" href="./cats/chat-1.html">Chat 1</a>
                    </li>
                    <li class="menu__item">
                        <a class="menu__link" href="./cats/chat-2.html">Chat 2</a>
                    </li>
                    <li class="menu__item">
                        <a class="menu__link" href="./dogs/chien-1.html">Chien 1</a>
                    </li>
                    <li class="menu__item">
                        <a class="menu__link" href="./dogs/chien-2.html">Chien 2</a>
                    </li>
                </ul>
            </nav>
        </div>
    `;

    const header = document.querySelector('.header.container');
    header.insertAdjacentHTML('beforeend', menuHTML);

    const menuButton = document.querySelector('.headermenu-btn');
    const menu = document.getElementById('mainNav');

    menuButton.addEventListener('click', () => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        menu.setAttribute('aria-hidden', isExpanded);
        menu.style.display = isExpanded ? 'none' : 'block'; // Toggle menu visibility
    });
});

<script type="module" src="./src/js/menu.js" defer></script>