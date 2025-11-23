let arr1 = [10, 20, 30];
let arr2 = [40, 50];
let combined=[...arr1, ...arr2]
console.log(combined)
let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
let profile=[...person, ...extra]
console.log(profile)
function sumAll(...nums){
    return nums.reduce((acc,val)=>acc+val,0)
}
console.log(sumAll(1, 2, 3, 4)) // should return 10

let numbers = [10, 20, 30, 40, 50];
let[first,...remaining]=numbers
console.log(first)
console.log(remaining)

let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
let {
    address: {
        city,
        geo:{lat,lng}
    }
} =user;
console.log(city)
console.log(lat)
console.log(lng)

