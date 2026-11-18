
// =====================================
// NAVEGACIÓN
// =====================================

function showSection(id) {

    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    const selected = document.getElementById(id);

    if (selected) {
        selected.classList.add('active');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// =====================================
// FILTROS DE PRODUCTOS
// =====================================

document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.category-btn');
    const products = document.querySelectorAll('.product-card');

    buttons.forEach(button => {

        button.addEventListener('click', () => {

            const category = button.dataset.category;

            buttons.forEach(btn => btn.classList.remove('active'));

            button.classList.add('active');

            products.forEach(product => {

                const productCategory = product.dataset.category;

                if (category === 'todos' || category === productCategory) {
                    product.style.display = '';
                } else {
                    product.style.display = 'none';
                }

            });

        });

    });

});

console.log('Electric Kings Taller cargado correctamente ⚡');
