const films = [
  {
    title: "Zielona mila",
    originalTitle: "The Green Mile",
    year: 1999,
    genre: "Dramat",
    rating: 8.6,
    image: "https://fwcdn.pl/fpo/08/62/862/7517878_1.10.webp",
  },
  {
    title: "Incepcja",
    originalTitle: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.2,
    image: "https://fwcdn.pl/fpo/08/91/500891/7354571_1.10.webp",
  }
];


function makeCard(movie) {
  const card = document.createElement("div");
  card.classList.add("card", "no");

  const content = document.createElement("div");
  content.classList.add("content");


  const poster = document.createElement("img");
  poster.src = movie.image;
  poster.alt = movie.title;

  const details = document.createElement("div");
  details.classList.add("desc");


  const titles = document.createElement("div");
  titles.classList.add("title");
  const mainTitle = document.createElement("h2");
  mainTitle.textContent = movie.title;
  const origTitle = document.createElement("h3");
  origTitle.textContent = movie.originalTitle;
  titles.appendChild(mainTitle);
  titles.appendChild(origTitle);

 
  const userData = document.createElement("div");
  userData.classList.add("user-data");
  const userInner = document.createElement("div");

  const lbl = document.createElement("label");
  lbl.classList.add("no");
  const chk = document.createElement("input");
  chk.type = "checkbox";
  chk.name = "watched";
  lbl.appendChild(chk);
  lbl.appendChild(document.createTextNode("Oznacz jako obejrzany"));

  const ratingSpan = document.createElement("span");
  ratingSpan.textContent = `⭐ ${movie.rating}`;

  userInner.appendChild(lbl);
  userInner.appendChild(ratingSpan);
  userData.appendChild(userInner);


  const footer = document.createElement("div");
  footer.classList.add("footer-desc");
  const genreSpan = document.createElement("span");
  genreSpan.textContent = movie.genre;
  const yearSpan = document.createElement("span");
  yearSpan.textContent = movie.year;
  const ratingFooter = document.createElement("span");
  ratingFooter.textContent = `⭐ ${movie.rating}`;
  footer.appendChild(genreSpan);
  footer.appendChild(yearSpan);
  footer.appendChild(ratingFooter);

  details.appendChild(titles);
  details.appendChild(userData);
  details.appendChild(footer);

  content.appendChild(poster);
  content.appendChild(details);
  card.appendChild(content);

 
  function setYes() {
    card.classList.remove("no");
    card.classList.add("yes");
    lbl.classList.remove("no");
    lbl.classList.add("yes");
  }
  function setNo() {
    card.classList.remove("yes");
    card.classList.add("no");
    lbl.classList.remove("yes");
    lbl.classList.add("no");
  }

  
  chk.addEventListener("change", () => {
    chk.checked ? setYes() : setNo();
  });

  return card;
}


function renderList(list) {
  const container = document.querySelector(".cards-container");
  if (!container) return;
  container.innerHTML = "";
  list.forEach(movie => container.appendChild(makeCard(movie)));
}


document.addEventListener("DOMContentLoaded", () => {
  renderList(films);
});
