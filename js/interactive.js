class books  {
    constructor(type, price, writer){
        this.type = type;
        this.price = price;
        this.writer = writer;
    }
}

const bangla = new books("academic", 120, "Sunehra Chowdhury");
const english = new books("academic", 80, "Suhaima Chowdhury");
const math  = new books("academic", 120, "Ankur Chowdhury");
const social = new books("academic", 230, "Suhaima Chowdhury");
const science = new books("academic", 100, "Suhaima Chowdhury");
const religion = new books("academic", 200, "Raisa Alam");

console.log(bangla.type);
console.log(religion.writer);

