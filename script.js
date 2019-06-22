const base_url="https://newsapi.org/v2/everything?domains=ndtv.com&apiKey=d7aefb80f9d84e1694a87bda79bc14ba"
// Fetches the top 10 news entries from the api
fetch (`${base_url}`)
    . then (response => {
        console.log(response)
        return response.json()
    })
    . then (json => {
        console.log(json)
        document.getElementById("headline1").innerHTML=json.articles[0].title
        document.getElementById("content1").innerHTML=json.articles[0].description
        document.getElementById("pic1").src=json.articles[0].urlToImage
        document.getElementById("headline2").innerHTML=json.articles[1].title
        document.getElementById("content2").innerHTML=json.articles[1].description
        document.getElementById("pic2").src=json.articles[1].urlToImage
        document.getElementById("headline3").innerHTML=json.articles[2].title
        document.getElementById("content3").innerHTML=json.articles[2].description
        document.getElementById("pic3").src=json.articles[2].urlToImage
        document.getElementById("headline4").innerHTML=json.articles[3].title
        document.getElementById("content4").innerHTML=json.articles[3].description
        document.getElementById("pic4").src=json.articles[3].urlToImage
        document.getElementById("headline5").innerHTML=json.articles[4].title
        document.getElementById("content5").innerHTML=json.articles[4].description
        document.getElementById("pic5").src=json.articles[4].urlToImage
        document.getElementById("headline6").innerHTML=json.articles[5].title
        document.getElementById("content6").innerHTML=json.articles[5].description
        document.getElementById("pic6").src=json.articles[5].urlToImage
        document.getElementById("headline7").innerHTML=json.articles[6].title
        document.getElementById("content7").innerHTML=json.articles[6].description
        document.getElementById("pic7").src=json.articles[6].urlToImage
        document.getElementById("headline8").innerHTML=json.articles[7].title
        document.getElementById("content8").innerHTML=json.articles[7].description
        document.getElementById("pic8").src=json.articles[7].urlToImage
        document.getElementById("headline9").innerHTML=json.articles[8].title
        document.getElementById("content9").innerHTML=json.articles[8].description
        document.getElementById("pic9").src=json.articles[8].urlToImage
        document.getElementById("headline10").innerHTML=json.articles[9].title
        document.getElementById("content10").innerHTML=json.articles[9].description
        document.getElementById("pic10").src=json.articles[9].urlToImage
        document.getElementById("headline11").innerHTML=json.articles[10].title
        document.getElementById("content11").innerHTML=json.articles[10].description
        document.getElementById("pic11").src=json.articles[10].urlToImage
        document.getElementById("headline12").innerHTML=json.articles[11].title
        document.getElementById("content12").innerHTML=json.articles[11].description
        document.getElementById("pic12").src=json.articles[11].urlToImage
        document.getElementById("headline13").innerHTML=json.articles[12].title
        document.getElementById("content13").innerHTML=json.articles[12].description
        document.getElementById("pic13").src=json.articles[12].urlToImage
        document.getElementById("headline14").innerHTML=json.articles[13].title
        document.getElementById("content14").innerHTML=json.articles[13].description
        document.getElementById("pic14").src=json.articles[13].urlToImage
        document.getElementById("headline15").innerHTML=json.articles[14].title
        document.getElementById("content15").innerHTML=json.articles[14].description
        document.getElementById("pic15").src=json.articles[14].urlToImage
        document.getElementById("headline16").innerHTML=json.articles[15].title
        document.getElementById("content16").innerHTML=json.articles[15].description
        document.getElementById("pic16").src=json.articles[15].urlToImage
        document.getElementById("headline17").innerHTML=json.articles[16].title
        document.getElementById("content17").innerHTML=json.articles[16].description
        document.getElementById("pic17").src=json.articles[16].urlToImage
        document.getElementById("headline18").innerHTML=json.articles[17].title
        document.getElementById("content18").innerHTML=json.articles[17].description
        document.getElementById("pic18").src=json.articles[17].urlToImage
        document.getElementById("headline19").innerHTML=json.articles[18].title
        document.getElementById("content19").innerHTML=json.articles[18].description
        document.getElementById("pic19").src=json.articles[18].urlToImage
        document.getElementById("headline20").innerHTML=json.articles[19].title
        document.getElementById("content20").innerHTML=json.articles[19].description
        document.getElementById("pic20").src=json.articles[19].urlToImage
    })

