interface Car{
    make:string;
    model:string;
    year: number;
    honk(): string;
}
let car1: Car = {
    make:"Toyata",
    model:"Rav4",
    year: 2021,
    honk(){return "BEEB" },
}
let car2: Car = {
    make:"Toyata",
    model:"Rav4",
    year: 2021,
    honk(){return "BEEB BEEB" },
}
let car3: Car = {
    make:"Toyata",
    model:"Rav4",
    year: 2021,
    honk(){return "BEEeeeEEB" },
}

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);

console.log(car1.honk());
console.log(car2.honk());
console.log(car3.honk());

console.log(car1.year);
console.log(car2.year);
console.log(car3.year);

console.log(car1.model);
console.log(car2.model);
console.log(car3.model);