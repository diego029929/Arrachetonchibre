const searchInput = document.getElementById("searchInput");
const contentContainer = document.getElementById("contentContainer");
const cards = Array.from(contentContainer.querySelectorAll(".choice-card"));
const noResult = document.getElementById("noResult");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  let anyVisible = false;

  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    if(title.includes(query) || query === "") {
      card.style.display = "flex";
      anyVisible = true;
    } else {
      card.style.display = "none";
    }
  });

  // Afficher ou cacher le message "Aucun résultat"
  noResult.style.display = anyVisible ? "none" : "block";
});
