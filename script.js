const d = document,
  $flags = d.getElementById("flags");

const $textsToChange = d.querySelectorAll("[data-section]");


const changeLanguaje = async language => {
  const requestJson = await fetch(`./language/${language}.json`);
  const texts = await requestJson.json();

  for (const textToChange of $textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    textToChange.innerHTML = texts[section][value];
  }
};

$flags.addEventListener("click", (e) => {
  changeLanguaje(e.target.parentElement.dataset.language);
});
