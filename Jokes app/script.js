const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const loader = document.getElementById('loader')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()


async function generateJoke() {
    
    loader.classList.add('loader')
    jokeEl.style.display = "none";
    
    const config = {
                        headers: {
                            'Accept' : 'application/json'
                        }
                    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    
    const data = await res.json()

    loader.classList.remove('loader')
    jokeEl.style.display = "block";

    jokeEl.innerHTML = data.joke
}



// function generateJoke() {

//     const config = {
//                         headers: {
//                             'Accept' : 'application/json'
//                         }
//                     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then((response) => response.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })

// }


