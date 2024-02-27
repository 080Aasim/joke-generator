const joke = document.getElementById('joke');
const button = document.getElementById('btn');

const url = "https://v2.jokeapi.dev/joke/Any";

let getJoke = async ()=>{
    const res = await fetch(url);
    const data = await res.json();
    if(data.joke){
        joke.innerText = data.joke;
    }
    else{
        joke.innerHTML = `${data.setup} <br></br> ${data.delivery}`
    }
}

button.addEventListener('click',getJoke);
getJoke();