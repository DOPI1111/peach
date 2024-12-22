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
    const sortButton = document.getElementById('sort-desc');
    const container = document.querySelector('.container');
    let sortOrder = 'desc'; // Початковий порядок сортування

    sortButton.addEventListener('click', () => {
        const cards = Array.from(container.querySelectorAll('.card'));

        // Сортуємо за ціною в залежності від поточного порядку
        cards.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
            const priceB = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
            return sortOrder === 'desc' ? priceB - priceA : priceA - priceB;
        });

        // Переміщуємо відсортовані елементи назад у контейнер
        cards.forEach(card => container.appendChild(card));

        // Змінюємо порядок сортування
        sortOrder = sortOrder === 'desc' ? 'asc' : 'desc';

        // Оновлюємо текст кнопки
        sortButton.textContent = 
            sortOrder === 'desc' ? 'Sort by Price: High to Low' : 'Sort by Price: Low to High';
    });
});