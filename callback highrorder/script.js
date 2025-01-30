// const radius = [1,2,3,4];

// const diameter = function (radius){
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(radius[i] * 2);
//     }
//     return output;
// }

// const area = function(radius){
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * (radius[i] ** 2));
//     }
//     return output;
// }

// console.log(diameter(radius));
// console.log(area(radius));





//callback function with high order function//
const radius = [1,2,3,4];

const area = function(radius){
    return Math.PI * radius * radius;
};

const diameter = function (radius){
    return 2 * radius;
};

const calculate = function (radius, logic){
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(calculate(radius, diameter));
console.log(calculate(radius, area));