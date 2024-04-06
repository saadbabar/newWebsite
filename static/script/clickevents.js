// for click events inside projects page
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            const target = this.getAttribute('data-href');
            if (target.startsWith('#')) {
                document.querySelector(target).scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                window.location.href = target;
            }
        });
    });
});