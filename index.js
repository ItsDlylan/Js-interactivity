console.log('hello world');
let message = document.querySelector('#message');
let addMovie = function(event){
    event.preventDefault()
    const inputField = document.querySelector('input');
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);
    document.querySelector('ul').appendChild(movie);
    inputField.value = ''
}
let deleteMovie = function(event){
    message.textContent = 'Movie deleted!'
    event.target.parentNode.remove()
}
let crossOffMovie = function(event){
   
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = 'Movie watched!'
    }else{
        message.textContent = 'Movie added back!'
    }
}
document.querySelector('form').addEventListener('submit', addMovie)