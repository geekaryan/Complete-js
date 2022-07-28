const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
    console.log(cat);
}

//maps - Map() to do something to each item in a collection and create a new collection containing the changed items

function toUpper(string){
    return string.toUpperCase();

}

const catts = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const upperCatts = catts.map(toUpper);

console.log(upperCatts);

//filter() to test each item in a collection,and create a new collection containing only items that match.

function lCat(cat){
    return cat.startsWith('L');
}

const cots = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered= cats.filter(lCat);

console.log(filtered);

const catse = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filterd = catse.filter((cat) => cat.startsWith('L'));
console.log(filterd);

// For loops 

// for (intializer; condition; final-expression) { //code to run}

//intializer - this is usually a varibale set to a number, which is increented to count the number of times the loop has run. It is also sometimes referred to as a counter variable

//condition - this defines when the loop should stop looping. This is generally an expression featuring a comparsion operator, a test to see if the exit condition has been met.

//final-expression - this is always evaluated each tie the loop has gone through a full iteration. It usually serves to increment the counter variable, to bring it close to the point where the condition is no longer true.


//calculating squares 

