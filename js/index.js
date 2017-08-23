window.onload = () => {
  const url = "https://nightmare-heroku-test1.herokuapp.com/api/API"
  let list = document.querySelector('.teamList')
  try {
    fetch(url)
      .then((response) => {
        Promise.resolve(response.json()).then((res) => {
          res = JSON.parse(res)
          for (i in res) {
            console.log(list)
            var ul = document.createElement('ul')
            let li1 = document.createElement('li')
            let li2 = document.createElement('li')
            li1.innerHTML = res[i].Team1 + " " + res[i].Team1Score
            li2.innerHTML = res[i].Team2 + " " + res[i].Team2Score
            ul.innerText = "Match:"
            ul.appendChild(li1)
            ul.appendChild(li2)
            list.appendChild(ul)
          }
        })
      })
      .catch((err) => {
        console.log("Fetch Error:", err)
      })
  } catch (e) {
    console.log("Couldn't use fetch")
  }
}