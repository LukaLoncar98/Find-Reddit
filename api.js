export default {
    search: function(searchTerm) {
      return fetch(
        `https://www.reddit.com/r/javascript/search.json?q=${searchTerm}`
      )
        .then(res => res.json())
        .then(data => {
          return data.data.children.map(data => data.data);
        })
        .catch(err => console.log(err));
    }
  };