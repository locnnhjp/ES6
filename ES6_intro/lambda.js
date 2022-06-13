let kids = [
    {id: 1, name: "a", age: 10},
    {id: 2, name: "b", age: 3},
    {id: 3, name: "c", age: 3},
    {id: 4, name: "d", age: 7},
    {id: 5, name: "e", age: 5},
    {id: 6, name: "f", age: 6},
    {id: 7, name: "g", age: 5},
    {id: 8, name: "h", age: 3},
    {id: 9, name: "i", age: 9},
    {id: 10, name: "j", age: 8},
];

let mau_giao = [];
kids.forEach(kid => {
    if (kid.age < 6) {
        mau_giao.push({
            id: kid.id,
            name: kid.name,
            age: kid.age
        });
    }
});
console.log(mau_giao);
