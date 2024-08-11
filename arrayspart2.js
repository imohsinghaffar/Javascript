//Push, Concatenate, Spread operator, Array.from,of, array.flat(infinity)
// let newArr = ["Ahmad","Mohsin","Raza","Nadeem",[2,3,5,6],[4,9,8,45]];
// let newArr2 = [1,2,4,6];
// newArr.push("Nabi");
// let newArr3 = newArr.concat(newArr2);
// let newArrSpreadOperator = newArr.concat(...newArr2);
// let flatArray = newArr.flat(Infinity);
// console.log(flatArray);

// let checkArr = Array.isArray("Mohsin");
// let checkArr2 = Array.from("Mohsin");
// let check3 = Array.from({name:"Mohsin"}) //interesting
// let element1 = "Mohsin";
// let element2 = "Ghaffar";
// let element3 = "A Student";
// let addAll = Array.of(element1,element2,element3);
// console.log(addAll);

// let arr = [1,2,8,3,6,955];
// let checkIndex = arr.indexOf(5);
// let includeIndex = arr.includes(0);
// let sortArr = arr.sort(); //sort the array elements

// function isBigEnough(value) {
//     return value >= 10;
//   }
  
//   const filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// console.log(filtered);

// console.log(filterArr);
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result);

let arrElements = [23,29,40,60,100];
let filterArr = arrElements.filter((Element)=>Element>25);
console.log(filterArr);
