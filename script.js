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