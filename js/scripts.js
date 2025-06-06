// Žvaigždžių vertinimo sistema ir atsiliepimų pateikimas
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.rating .fa-star');
    const reviewForm = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviews');
    let selectedRating = 0;

    // Žvaigždžių pasirinkimas
    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = star.getAttribute('data-value'); 
            stars.forEach(s => s.classList.remove('checked')); 
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add('checked'); 
            }
        });
    });

    // Atsiliepimų pateikimas
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const comment = document.getElementById('comment').value.trim();

        if (selectedRating === 0) {
            alert('Prašome pasirinkti įvertinimą!');
            return;
        }

        if (!name || !comment) {
            alert('Prašome užpildyti visus laukus!');
            return;
        }

        // Sukuriame naują atsiliepimą
        const reviewItem = document.createElement('li');
        reviewItem.innerHTML = `
            <strong>${name}</strong> (${selectedRating} žvaigždutės):
            <p>${comment}</p>
        `;
        reviewsList.appendChild(reviewItem);

        // Išvalome formą
        reviewForm.reset();
        stars.forEach(s => s.classList.remove('checked'));
        selectedRating = 0;
    });

}); 

function showMoreInfo(projectName) {
    alert(`Daugiau informacijos apie projektą: ${projectName}`);
} 
