const cards = document.querySelectorAll('.hotel-card');

cards.forEach(card => {
  const checkbox = card.querySelector('.hotel-card__checkbox');
  const btn = card.querySelector('.hotel-card__button');
  const paymentLink = card.querySelector('.payment-link'); // Находим ссылку

  // 1. Выбор через кнопку
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!card.classList.contains('hotel-card--reserved')) {
      checkbox.checked = true;
      card.classList.add('hotel-card--selected');
    }
  });

  // 2. Остановка сброса при клике на ссылку оплаты
  paymentLink.addEventListener('click', (e) => {
    e.stopPropagation(); // Теперь клик по ссылке не дойдет до обработчика карточки
  });

  // 3. Состояние Reserved при уходе курсора
  card.addEventListener('mouseleave', () => {
    if (card.classList.contains('hotel-card--selected')) {
      card.classList.remove('hotel-card--selected');
      card.classList.add('hotel-card--reserved');
    }
  });

  // 4. Отмена по всей карточке (кроме ссылки оплаты)
  card.addEventListener('click', () => {
    if (card.classList.contains('hotel-card--reserved')) {
      card.classList.remove('hotel-card--reserved');
      checkbox.checked = false;
    }
  });
});
