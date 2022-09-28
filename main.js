let float = document.querySelector('.float')
let share = document.querySelector('#shareIcon')

document.querySelector("#shareIcon").addEventListener("click", showFloat);

function showFloat(){
    float.classList.toggle('hidden')
}