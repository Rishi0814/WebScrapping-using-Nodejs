const feedDisplay = document.querySelector("#feed");
const feedDisplay1 = document.querySelector("#feed1");
fetch("http://localhost:5000/results")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((article) => {
      const articleItem = `<div><h4>` + article.title + `</h4>` + `</div>`;
      const articleItem1 = `<div><p>` + article.link + `</p>` + `</div>`;
      console.log(article);
      feedDisplay.insertAdjacentHTML("beforeend", articleItem);
      feedDisplay1.insertAdjacentHTML("beforeend", articleItem1);
    });
  })
  .catch((err) => console.log(err));
