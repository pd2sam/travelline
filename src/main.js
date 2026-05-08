const cards = document.querySelectorAll(".hotel-card");

cards.forEach((card) => {
  const btn = card.querySelector(".hotel-card__button");
  const paymentLink = card.querySelector(".hotel-card__payment-link");
  const nameLink = card.querySelector(".hotel-card__name-link");


  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!card.classList.contains("hotel-card--reserved")) {
      card.classList.add("hotel-card--selected");
    }
  });

  paymentLink.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  card.addEventListener("mouseleave", () => {
    if (card.classList.contains("hotel-card--selected")) {
      card.classList.remove("hotel-card--selected");
      card.classList.add("hotel-card--reserved");
    }
  });

  card.addEventListener("click", () => {
    if (card.classList.contains("hotel-card--reserved")) {
      card.classList.remove("hotel-card--reserved");
    }
  });

  nameLink.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
