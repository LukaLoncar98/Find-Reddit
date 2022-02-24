import reddit from './api';

const searchForm = document.getElementById('search-form');
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', e => {
  
  
 
  const searchTerm = searchInput.value;
  
  if (searchTerm == '') {
   
    showMessage('Please add a search term', 'alert-danger');
  }

  searchInput.value = '';

  
  reddit.search(searchTerm).then(results => {
    let output = '<div class="card-columns">';
    console.log(results);
    results.forEach(post => {
      
      output += `
      <div class="card mb-2">
      
      <div class="card-body">
      <a href="${post.url}" target="_blank
      " class="card-title">${post.title}</a>
       
        <p class="card-text">${post.selftext}</p>
        
        
      </div>
    </div>
      `;
    });
    output += '</div>';
    document.getElementById('results').innerHTML = output;
  });

  e.preventDefault();
});


function showMessage(message, className) {
  
  const div = document.createElement('div');
  
  div.className = `alert ${className}`;

  div.appendChild(document.createTextNode(message));

  const searchContainer = document.getElementById('search-container');
  
  const search = document.getElementById('search');

 
  searchContainer.insertBefore(div, search);

 
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
}


