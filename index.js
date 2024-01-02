function getNews() {
  return new Promise((resolve, reject) => {
    let category = ``;
    let url =
      `https://gnews.io/api/v4/search?q=trending&lang=en&country=in&max=10&apikey=614239a8f6f25d743272fb017e8d0ec3`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        const articles = [];
        const dataArticles = data.articles;
        for (let i = 0; i < dataArticles.length; i++) {
          const article = dataArticles[i];
          const transformedArticle = {
            title: article.title,
            imageUrl: article.image,
            description: article.description,
            url: article.url
          };

          articles.push(transformedArticle);
        }
        resolve(articles);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function showNews() {
  try {
    let articles = await getNews();
    console.log(articles);
    for (let i = 0; i < 9; i++) {
      
      let textSelected = document.getElementsByClassName("title1")[i];
      let imgSelected = document.getElementsByClassName("img1")[i];
      let desSelected = document.getElementsByClassName("descrp")[i];
      let buttonSelected = document.getElementsByClassName("article-url")[i];
      
      textSelected.innerHTML = articles[i].title;
      imgSelected.setAttribute("src", articles[i].imageUrl);
      desSelected.innerHTML = articles[i].description;
      buttonSelected.setAttribute("href", articles[i].url);
    }
  } catch (error) {
    console.error(error);
  }
} 
showNews();
//Test

// document.getElementsByClassName("submitButton")[0].addEventListener("click", function() {

  document.getElementById("Form").addEventListener("submit", function() {
      let SearchInput = document.getElementById("searchBar");
      console.log(SearchInput.value)
  });
// });

//another method to make articles object 
        // const articles = data.articles.map(article => ({
        //   title: article.title,
        //   imageUrl: article.urlToImage,
        //   description: article.description,
        //   url: article.url
        // }));

// resolve(articles);
// })



