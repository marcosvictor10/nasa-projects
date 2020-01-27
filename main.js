function resetButtons (buttonIds, button) {
  buttonIds.forEach(id => document.getElementById(id).disabled = false)
  document.getElementById(button.id).disabled = true
}

function getNasa (searchQuery, button) {
  document.getElementById('container').classList.add('fetching')
  document.getElementById(button.id).disabled = true

  fetch ("https://images-api.nasa.gov/search?q=" + searchQuery + "&media_type=image", { method: "GET" })
    .then(response => response.json())
    .then(response => {
      const items = response.collection.items
        .map(item => {
          return  {
            href: item.links[0].href,
            title: item.data[0].title
          }
        })

      console.log('searchQuery: '+ searchQuery)
      setNasa(items, 'result')
    })
    .catch(error => console.error(error))
    .finally(() => {
      document.getElementById('container').classList.remove('fetching')
      document.getElementById('btn-reset').disabled = false
    })
}

function setNasa (nasaItems, listId) {
  console.log(nasaItems)
  /*
    * Manipule o DOM para montar a sua lista de imagens da NASA
  */
}