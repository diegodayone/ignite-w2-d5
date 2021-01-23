// let x = 10
// let y = 20
// let total = x + y

// let name = "Diego"

// let array = [ 10, 20, 1 ]

// function total(collection) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i ++){
//         sum = sum + array[i]
//     }
//     return sum
// }

// let student = {
//     name:"Alessia",
    
//     courses: [ "Ignite", "FullStack"]
// }

// student.surname = "Luminari"

// delete student.email

// function example(n1, n2) {
//     console.log(n1)
//     let x = n1 + n2

//     return x
// }


// let finalResult = example(20, 50)


// // 50 => 50
// // -20 => 20
// function absoluteNumber(number) {
//     if (number >= 0) {
//         return number
//     }
//     else {
//         return -number
//     }
// }

function addListItem() {
    let newListItem = document.createElement("li") // create element
    newListItem.classList.add("list-item") // add class
    newListItem.innerText = "Newly created list item" // setting text
    newListItem.addEventListener("click", (eventProps) => {
        let clickedOne = eventProps.target
        clickedOne.classList.add("selected")
    })

    let ul = document.querySelector("ul") // searching for the right parent
    ul.appendChild(newListItem) // adding to the page
}