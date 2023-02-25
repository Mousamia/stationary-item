const subjects = ["Bangla", "English", "Math", "Religion", "Science", "Social-Science"];
const stationarys = ["pencil", "pen", "rubber", "scale", "sharpner"];
console.log("samia");

function addElements(subjects){
    for (const subject of subjects ){
        const bookList = document.getElementById("book-list");
        const li = document.createElement("li");
        li.innerText = subject;
        bookList.appendChild(li);
        console.log(li);
    }
}


const gettingBooks = document.getElementById("books");


gettingBooks.addEventListener('click', function(){
    for (const subject of subjects ){
        const bookList = document.getElementById("book-list");
        const li = document.createElement("li");
        li.innerText = subject;
        bookList.appendChild(li);
        

        if(bookList.style.display === "none"){
            bookList.style.display === "block";
        }

        else 
            bookList.style.display === "none";
    }
});

const gettingStationary = document.getElementById("stationary");
gettingBooks.addEventListener('click', function(){
    for (const stationary of stationarys ){
        const stationaryList = document.getElementById("stationary-list");
        const li = document.createElement("li");
        li.innerText = stationary;
        stationaryList.appendChild(li);
        

        if(bookList.style.display === "none"){
            bookList.style.display === "block";
        }

        else 
            bookList.style.display === "none";
    }
});

console.log(gettingBooks);


