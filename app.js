const btns = document.querySelectorAll('.faq-toggle');
btns.forEach((btn) => btn.addEventListener('click', () => handleToggle(btn)));

function handleToggle(btn) {
    const faq = btn.closest('.faq');
    const answer = faq.querySelector('.faq-answer');
    const img = faq.querySelector('img');

    answer.classList.toggle('active');
    answer.classList.contains('active')
        ? img.setAttribute('src', 'assets/images/icon-minus.svg')
        : img.setAttribute('src', 'assets/images/icon-plus.svg');
}
