// Array

// let people = ["Greg", "Mary", "Devon", "James"];

// // for loop number 1
// for(let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// };

// // For Each number 2
// people.forEach(function(value){
//     console.log(value);
// })

// // Hapus greg number 3

// people.splice(0, 1);
// console.log(people);

// // Hapus James number 4

// people.pop();
// console.log(people);

// // Add Matt number 5

// people.unshift("Matt");
// console.log(people);

// // Add My Name number 6

// people.push("Juan")
// console.log(people);

// // for loop, exit when find mary number 7

// for(let name = 0; name < people.length; name++) {
//     console.log(people[name]);
//     if(people[name] == 'Mary') {
//         break;
//     }
// }

// // copy array using splice number 8 

// let people1 = people.slice(2);
// console.log(people1);

// // redefined  using splice add elizabeth and artie number 9
// people.splice(2,1)
// people.splice(2, 0, "Elizabeth", "Artie");
// console.log(people);

// // new variable withBob number 10
// let withBob = people.concat('Bob')
// console.log(withBob);



// Object

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// number 1
programming.languages.push('Go');
console.log(programming);

// number 2
programming['difficulty'] = 7;
console.log(programming);

// number 3
delete programming.jokes;
console.log(programming);


//number 4
programming.isFun = true;
console.log(programming);

//number 5
programming.languages.map(function(value, index){
    console.log(index + '-' + value);
})