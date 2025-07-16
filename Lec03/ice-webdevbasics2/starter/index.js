// This is where your JS goes!

// You can fetch data from https://cs571api.cs.wisc.edu/rest/s25/ice/chili
// When you are complete, you should also be able to fetch data from...
//  https://cs571api.cs.wisc.edu/rest/s25/ice/pasta
//  https://cs571api.cs.wisc.edu/rest/s25/ice/pizza

let recipe;

fetch("https://cs571.org/rest/s25/ice/chili", {
    headers: {
        "X-CS571-ID" : CS571.getBadgerId()
    }
})
.then((d) => {
    console.log(d.status)
    return d.json()
})
.then((data) => {
    recipe = data
    document.getElementById("recipe-name").innerText = data.name
    document.getElementById("recipe-author").innerText = data.author
    document.getElementById("recipe-img").src = data.img.location
    document.getElementById("recipe-img").alt = data.img.description

    let instructionsNode = document.getElementById("instructions")
    for(let step of data.recipe) {
        let newNode = document.createElement("li")
        newNode.innerText = step
        instructionsNode.appendChild(newNode)
    }
})

function updateYield() {
    if (recipe) {

    } else {
        alert("No data yet.")
    }
}

function displayReview() {
    if (recipe) {

    } else {
        alert("No data yet.")
    }
}

console.log("Good")
