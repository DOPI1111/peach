document.addEventListener('DOMContentLoaded', () => {
    const ads = document.querySelectorAll('.ad-slider img');
    let currentIndex = 0;

    function changeAd() {
        ads[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % ads.length;
        ads[currentIndex].classList.add('active');
    }

    
    ads[currentIndex].classList.add('active');

    
    setInterval(changeAd, 4000); 
});
document.addEventListener('DOMContentLoaded', () => {
    const cartWindow = document.getElementById('cart-window');
    const buttons = document.querySelectorAll('.card button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Додати клас "active" для відображення вікна
            cartWindow.classList.add('active');

            // Після 2 секунд сховати вікно
            setTimeout(() => {
                cartWindow.classList.remove('active');
            }, 2000);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.card button');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            const itemName = card.querySelector('h3').textContent;
            const itemPrice = parseFloat(card.querySelector('.price').textContent.replace('$', ''));

            const existingItem = cart.find((item) => item.name === itemName);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name: itemName, price: itemPrice, quantity: 1 });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category');
    const priceRange = document.getElementById('price');
    const priceValue = document.getElementById('price-value');
    const filterButton = document.getElementById('filter-button');
    const cards = document.querySelectorAll('.card');

    // Оновлюємо відображення ціни
    priceRange.addEventListener('input', () => {
        priceValue.textContent = `$${priceRange.value}`;
    });

    // Фільтруємо товари
    filterButton.addEventListener('click', () => {
        const selectedCategory = categorySelect.value;
        const maxPrice = parseInt(priceRange.value);

        cards.forEach(card => {
            const category = card.querySelector('h3').textContent.toLowerCase();
            const price = parseInt(card.querySelector('.price').textContent.replace('$', ''));

            // Перевіряємо, чи відповідає товар обраним критеріям
            if (
                (selectedCategory === 'all' || category.includes(selectedCategory)) &&
                price <= maxPrice
            ) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
