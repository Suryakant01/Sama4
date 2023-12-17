function getNews() {
    return new Promise((resolve, reject) => {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1f593e78a367446fb35babbbfcfd1861";
          fetch(url)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              resolve(data.articles[0].title);
              resolve(data.articles[0].urlToImage);
              resolve(data.articles[0].description);
            })
            .catch((err) => {
              reject(err);
            });
        });
    }
    
    async function showNews() {
        try {
          let news = await getNews();
          let des = await getNews(data.articles[0].urlToImage);
          let imgurl = await getNews(data.articles[0].description);
          console.log(news);
          let textSelected = document.getElementsByClassName("title1")[1];
          let imgSelected = document.getElementsByClassName("img1")[0];
          let desSelected = document.getElementsByClassName("descrp1")[0];
          textSelected.innerHTML = news;
          imgSelected.innerHTML = imgurl;
          desSelected.innerHTML = des;
        } catch (error) {
            console.error(error);
        }
    }
    
 showNews();




      
    

  