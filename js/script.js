
//Question 1:

const cat = {
    complain: () => {
        console.log("Meow!");
    }
};

cat.complain();




// Question 2:

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";





// Question 3:

heading.style.fontSize = "2em";




//Question 4:

heading.className = "subheading";
// console.log(heading.className);




//Question 5:

let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);
    paragraphs[i].style.color = "red";
};



//Question 6:

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.backgroundColor = "yellow";




// Question 7:

function myFunction(list) {
    for (let i = 0; i < list.length; i++) {
        // console.log(list[i]);

        for (const property in list[i]) {
            console.log(property);
        }
    }
};

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

myFunction(cats);




//Question 8:

function createCats(cats) {
    let html = "";
    for (let i = 0; i < cats.length; i++) {

        html += `<div>
                <h5>Name: ${cats[i].name}</h5>
                <p>${cats[i].age == undefined ? "Age unknown" : "Age: " + cats[i].age}</p>
            </div>`;
    };
    return html;
};

const divCats = document.querySelector(".cat-container");

divCats.innerHTML = createCats(cats);




