const url = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

const coffeeButton = document.querySelector("#coffee-button");
coffeeButton.addEventListener("click", () => {
    getAllCoffees()
        .then(allCoffees => {
            console.log(allCoffees);
        })
})

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

const getAllCoffees = () => {
    return fetch(coffeeUrl).then(resp => resp.json());
}