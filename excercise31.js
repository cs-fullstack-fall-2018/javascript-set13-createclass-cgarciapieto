class Movie{
    constructor(name, rating, yearReleased)
    {
    this.name = name;
    this.rating = rating;
    this.yearReleased = yearReleased;
}

printAllAttributes()
{
    alert(this.name + " " +  this.rating +  " " + this.yearReleased);
}

}


function main(){

var movie1 = new Movie("The Dark Knight", 10, 2008);
var movie2 = new Movie("Man of Steel", 8, 13);

movie1.printAllAttributes();
movie2.printAllAttributes();
document.write(movie1);
document.write(movie2);
}

main();
