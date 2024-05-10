// ********1***********
console.log("********1***********")
console.log(hello);          // undefined                         
var hello = 'world';        // hello = 'word'                         

// ********2***********
console.log("********2**********")
var needle = 'haystack';
test();  // logs  magnet
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// ********3***********
console.log("********3***********")
var brendan = 'super cool';
function print(){     // this function don't used
    brendan = 'only okay';
    console.log(brendan);  
}
console.log(brendan); // logs 'super cool'

// ********4***********
console.log("********4***********")
var food = 'chicken';
console.log(food); // logs 'chicken'
eat();  // logs 'half-chicken'
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// ********5***********
/*console.log("********5***********")
mean()  // mean is not a function 
console.log(food);

var mean = function() {
    food = "chicken";
    console.log(food);   // this don't return anything
   var food = "fish";
    console.log(food);

}
console.log(food);
*/
// ********6***********
console.log("********6***********")
console.log(genre);  // logs undefined
var genre = "disco"; 
rewind();  // logs ""rock"  
           // logs "r&b"
           
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre); // logs "disco"


// ********7***********
console.log("********7***********")
dojo = "san jose";
console.log(dojo);  // logs "san jose"
learn();   // logs "seattle"
            // logs "burbank"
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);   // logs "san jose"

// ********8***********
console.log("********8***********")
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now"; // 
    }
    return dojo;
}
