const searchInput = document.getElementById("searchInput");
const contentContainer = document.getElementById("contentContainer");
const cards = contentContainer.querySelectorAll(".choice-card");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    if(title.includes(query) || query === "") {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});
