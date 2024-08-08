document.querySelectorAll('.run-btn').forEach(button => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('data-link');
        window.open(link, '_blank');
    });
});
