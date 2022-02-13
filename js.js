const input = document.querySelector('.input')
const close = document.querySelector('.close')
const btn = document.querySelector('.btn');

async function postData(url = '') {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Client-ID ejr-es62s5lX7iPVFyTFbVGIKkAkkFv8HrVIxDPRqkw',
    },
  })
  return await response.json()
}

let dataHandler = (request) => {
  if (!request) {
    request = 'forest'
  }
    postData('https://api.unsplash.com/search/photos?per_page=30&query=' + request)
    .then((data) => {
      let innerHtml = ''
      for (const i in data.results) {
        console.log(data.results[i])
        innerHtml += `<div class='main-img' style = ' background-image: url(` + data.results[i].urls.regular + `)'></div>`
      }
      document.querySelector('.main').innerHTML = innerHtml
    })
}

dataHandler()

input.addEventListener('keydown', (e) => {
  if (e.code ==='Enter') {
    dataHandler(input.value)
  }
})

input.addEventListener('keydown', (e) => {
  if (e.code ==='Escape') {
    input.value = ''
  }
})

btn.addEventListener('click',() => dataHandler(input.value))

close.addEventListener('click',() => input.value= '')
