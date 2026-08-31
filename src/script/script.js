document.addEventListener('DOMContentLoaded', () => {

    // 1. Alternar Menu Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Alternar tipo de voo (Ida e volta, Só ida, Vários destinos)
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // 3. Submissão do Formulário de Busca
    const searchForm = document.getElementById('search-form');

    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Buscando as melhores ofertas de voos para o seu destino...');
        });
    }

    // 4. Ação do Botão "Compre no Site"
    const buyButtons = document.querySelectorAll('.btn-buy');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Redirecionando para a etapa de pagamento e reserva...');
        });
    });
});