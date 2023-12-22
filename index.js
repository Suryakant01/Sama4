function getNews() {
  return new Promise((resolve, reject) => {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=1f593e78a367446fb35babbbfcfd1861";
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
            imageUrl: article.urlToImage,
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
// for (let i = 0; i < 6; i++) {
//   // let textSelected = document.getElementsByClassName("title1")[i];
//   //     console.log(textSelected);
// }



        // const articles = data.articles.map(article => ({
        //   title: article.title,
        //   imageUrl: article.urlToImage,
        //   description: article.description,
        //   url: article.url
        // }));

//         resolve(articles);
//       })



