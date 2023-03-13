////////////////// 1 //////////////////
console.log(hello);
var hello = 'world';

////// Expected result //////
console.log("\nExpected result: 'undefined'\n");

// -----------------------------------------------------------------------------------

////////////////// 2 //////////////////
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

////// Expected result //////
console.log("\nExpected result: 'magnet'\n");

// -----------------------------------------------------------------------------------

////////////////// 3 //////////////////
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}

console.log(brendan);

////// Expected result //////
console.log("\nExpected result: 'super cool'\n");

// -----------------------------------------------------------------------------------

////////////////// 4 //////////////////
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

////// Expected result //////
console.log("\nExpected result: 'chicken, half-chicken'\n");

// -----------------------------------------------------------------------------------

////////////////// 5 //////////////////
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

////// Expected result //////
console.log("\nExpected result: 'Error no function'\n");

// -----------------------------------------------------------------------------------

////////////////// 6 //////////////////
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

////// Expected result //////
console.log("\nExpected result: 'undefined,rock,r&b,disco'\n");

// -----------------------------------------------------------------------------------

////////////////// 7 //////////////////
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

////// Expected result //////
console.log("\nExpected result: 'san jose,seattle,burbank,san jose'\n");

// -----------------------------------------------------------------------------------

////////////////// 8 //////////////////
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0 ) {
        dojo = "closed for now";
    }
    return dojo;
}

////// Expected result //////
console.log("\nExpected result: 'object {name:Chicago,students:65,hiring:true}, cant assign 'closed for now' for object dojo'\n");
