const breedInput = document.getElementById("breed-input")
const button = document.getElementById("show-images")

// Div to show the result
let result = document.createElement('p')

// Image Carousel
let carousel = document.createElement('div')
let image = document.createElement('img')
let imageInterval;


function showImage(apiUrl){
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        if (data.status == "success") {
            result.innerText = ""
            image.src = data.message
            document.body.appendChild(image)
        } else {
            if (document.body.contains(image)) {
                image.remove()
            }
            result.innerHTML = "No such breed"
            document.body.appendChild(result)
            clearInterval(imageInterval)
        }
    })
}

function checkBreed() {
    clearInterval(imageInterval)
    const userInput = breedInput.value.trim().toLowerCase();

    // Convert to lowercase and split words
    let words = userInput.toLowerCase().split(" ");

    let breed;
    if (words.length === 2) {
        // Handle sub-breed case (e.g., "French Bulldog" -> "bulldog/french")
        breed = `${words[1]}/${words[0]}`;
    } else {
        // Handle single-word breeds (e.g., "Labrador" -> "labrador")
        breed = words[0];
    }

    let apiUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
    
    imageInterval = setInterval(() => showImage(apiUrl), 5000)
}

button.addEventListener('click', checkBreed)