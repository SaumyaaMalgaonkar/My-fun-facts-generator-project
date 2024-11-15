document.addEventListener('DOMContentLoaded', () => {
    const toggleFactsBtn = document.getElementById('toggleFactsBtn');
    const factsList = document.getElementById('funFactsList');

    toggleFactsBtn.addEventListener('click', () => {
        factsList.classList.toggle('hidden');
    });
});
