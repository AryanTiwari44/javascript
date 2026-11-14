const marvel_heros = ["thor", "Iron-Man", "Hulk"]
const dc_heros = ["superman", "Bat-Man", "Aqua-man"]
//console.log(dc_heros)
//marvel_heros.push(dc_heros) //with push we can combine both but dont use 
//console.log(marvel_heros)

const All_Heros = marvel_heros.concat(dc_heros) // with concate we can combine the array together
// for concat we have to create new array to hold the both values  
//console.log(All_Heros);
const all_new_heros = [...marvel_heros, ...dc_heros] // it called spread method

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //here array.flat use to help for recursive array useful

console.log(real_another_array);

