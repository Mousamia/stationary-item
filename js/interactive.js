class books  {
    constructor(type, price, writer){
        this.type = type;
        this.price = price;
        this.writer = writer;
    }
}

const bangla = new books("academic", 120, "Sunehra Chowdhury");
const english = new books("Academic", 80, "Suhaima Chowdhury");
const math  = new books("academic", 120, "Ankur Chowdhury");
const social = new books("Academic", 230, "Suhaima Chowdhury");
const science = new books("ACADEMIC", 100, "Suhaima Chowdhury");
const religion = new books("Academic", 200, "Raisa Alam");

console.log(bangla.type);
console.log(bangla.price);
console.log(religion.writer);
console.log(english.type);
console.log(science.type);

function elements(){
    const books = document.getElementById('books');
    const ul = document.createElement('ul');
    books.appendChild(ul);
    const li = 
    console.log(ul);
}

elements();

function displayData(){
    var x = document.getElementById('book-list');
    if(x.style.display === "none"){
        x.style.display = "block";
    }

    else 
        x.style.display = "none";

} 