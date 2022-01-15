const content = document.querySelector(".content");

function displayNews(articles) {
  content.innerHTML = articles
    .map(
      (article) => `
      <div class="card">
        <div>
        <h2 class="title">
            ${article.title}
        </h2>
        <p class="author">${article.author}</p>
        </div>
        <div>
        <p class="description">
        ${article.description}
        </p>
        <a href="${article.url}" class="btn" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>`
    )
    .join(" ");
}

function fetchNews(category) {
  console.log("hey");
  const API_KEY = "57630b6543a34b8eb21d1175dbad40a6";
  const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => displayNews(data.articles));
}

const dropdown = document.querySelector(".dropdown");

if (dropdown.value === "general") {
  fetchNews(dropdown.value);
}
dropdown.addEventListener("change", () => {
  fetchNews(dropdown.value);
});
