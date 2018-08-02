class Product{
    constructor(name, price, quantity)
    {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    printAllAttributes()
    {
        alert(this.name + " " +  this.price +  " " + this.quantity);
    }

}


function main(){

    var product1 = new Product("Books", 10, 4);
    var product2 = new Product("Movies", 5, 5);

    product1.printAllAttributes();
    product2.printAllAttributes();
    console.log(product1);
    console.log(product2);
}

main();
