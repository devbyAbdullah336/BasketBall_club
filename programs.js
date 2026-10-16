const seasonFilter = document.querySelector("#season-filter");
const ageFilter = document.querySelector("#age-filter");
const programCards = [...document.querySelectorAll(".program-card")];
const programCount = document.querySelector("#program-count");

function filterPrograms() {
  const season = seasonFilter.value;
  const age = ageFilter.value;
  let visibleCount = 0;

  for (const card of programCards) {
    const seasons = card.dataset.season.split(" ");
    const ageGroups = card.dataset.age.split(" ");
    const matchesSeason = season === "all" || seasons.includes(season);
    const matchesAge = age === "all" || ageGroups.includes(age);
    card.hidden = !matchesSeason || !matchesAge;
    if (!card.hidden) visibleCount += 1;
  }

  programCount.textContent = `${visibleCount} ${visibleCount === 1 ? "program" : "programs"} match your filters.`;
}

seasonFilter.addEventListener("change", filterPrograms);
ageFilter.addEventListener("change", filterPrograms);
filterPrograms();

const interestForm = document.querySelector("#interest-form");
const formMessage = document.querySelector("#form-message");

interestForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Demo only: your entries were checked but not sent or saved. This page is not accepting registrations.";
  interestForm.reset();
});
