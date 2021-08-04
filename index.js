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
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie);
    inputField.value = ''
}
let deleteMovie = function(event){
    console.log(`${event}`);
    message.textContent = `${event.target.parentNode.textContent} deleted!`
    event.target.parentNode.remove()
    revealMessage()
}
let crossOffMovie = function(event){
   
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} Watched!`
    }else{
        message.textContent = `${event.target.textContent} added back!!`
    }
    revealMessage()
}
let revealMessage = function(){
    message.classList.remove('hide')
    setTimeout(function(){
        message.classList.add('hide')
    }, 1000)
}
document.querySelector('form').addEventListener('submit', addMovie)