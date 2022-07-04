let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const filterArr = (arr, range) => {
    let min = range[0] === null ? 0 : range[0],
        max = range[1] === null ? Infinity : range[1];

    let newArr = [...arr];
    newArr.map((obj) => {
        obj.prices[0] = obj.prices[0] === null ? 0 : obj.prices[0];
        obj.prices[1] = obj.prices[1] === null ? Infinity : obj.prices[1];
    });
    console.log(newArr);

    return newArr.filter((obj) => {
        if (
            (obj.prices[0] >= min || obj.prices[0] === min) &&
            (obj.prices[1] <= max || obj.prices[1] === max)
        ) {
            return obj;
        }
    });
};

console.log(filterArr(courses, requiredRange1));
console.log(filterArr(courses, requiredRange2));
console.log(filterArr(courses, requiredRange3));
