
// const btn = document.getElementById('btn');
// const links = document.getElementById('box');

// let myBtn = () => {
    
// }

// console.log("hello world");

// try {
//     adddlert("hello")
// } 
// catch (fuck) {
//     console.log(fuck);
// }

// function getLocation() {
//     try {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } catch {
//       x.innerHTML = err;
//     }
//   }
// function showPosition(position) {
//     console.log("Latitude: " + position.coords.latitude + 
//     "<br>Longitude: " + position.coords.longitude); 
//   }

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then( res => console.log(res)
// );
// let res = document.querySelectorAll(".container");

// res.addEventListener("click", () => {
//     function getLocation() {
//         if (navigator.geolocation) {
//             console.log();
//         }
//     }
// })

let api = fetch("https://jsonplaceholder.typicode.com/users")
.then(api => api.json())
.then(api => console.log(api));

// let sum = api.foreach("click", )

