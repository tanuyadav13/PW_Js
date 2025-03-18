const myArray = [1,2,3,4,5]

const mynewArray  = new Array(1,2,3,4,5)
console.log(myArray[1])


const dcHeros = ['batman','superman','flash', true ,1 ,12 ]
dcHeros.push('wonderwomen') // to add  at last or append atlast in array
console.log(dcHeros)


const lasthero = dcHeros.pop() //remove last from the array
console.log(dcHeros)

dcHeros.unshift('aquaman')  // Bad idea to add at starting of an array
console.log(dcHeros)

console.log(dcHeros.toString());

console.log(dcHeros.join("-"));

console.log(dcHeros.slice(2,4));
console.log(dcHeros)

console.log(dcHeros.splice(2,4)); //  splice manipulate the original array whereas alice does not manipulate the original array , Slice does not include the last value but splice includes the last .
console.log(dcHeros)
