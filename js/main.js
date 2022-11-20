// const jsObject = {
//   name: 'John Doe',
//   age: 30,
// }
// const newString = JSON.stringify(jsObject) // '{"name":"John Doe","age":30}'
// console.log(newString)
// const newObject = JSON.parse(newString) // {name: "John Doe", age: 30}
// console.log(newObject)
//
// const callApi = () => {
// const requestedUrl = "https://api.github.com/search/repositories?q=javascript"
//   fetch(requestedUrl)
//     .then(response => response.json())
//     .then((data => {
//       for (let i = 0; i < 5; i++) {
//
//
//       const newData = JSON.stringify(data)
//       const parsedData = JSON.parse(newData)
//       console.log(data.items[i].description)
//     }
//     }))
// }
// callApi()
// const planeApi = () => {
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '5674d7fb32msh3df0bc7158dd20fp111c83jsnee9a7bfde9e0',
//       'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
//     }
//   };
//   const code = prompt('Enter airport code')
//   const newBody = document.createElement('div')
//
//   fetch('https://airport-info.p.rapidapi.com/airport?iata='+ code , options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     const airport = JSON.stringify(response)
//     const parsedAirport = JSON.parse(airport)
//     const airportName = parsedAirport.city
//   console.log(airportName)
//   newBody.innerHTML(`${airport}`)
//     .catch(err => console.error(err));
// }
// planeApi()
const Data = [
  { id: "1", title: "car" },
  { id: "2", title: "bus" },
  { id: "3", title: "plane" },
  { id: "4", title: "train" },
  { id: "5", title: "boat" },
];
const upperData = Data.map((element) =>
  element.title.substring(0, 1).toUpperCase()
);
console.log(upperData);
const filterData = Data.filter((element) => element.id % 2 === 0);
console.log(filterData);

const dataSplice = [
  { id: "1", title: "car" },
  { id: "2", title: "bus" },
  { id: "3", title: "plane" },
  { id: "4", title: "train" },
  { id: "5", title: "boat" },
];
dataSplice.splice(dataSplice.length, 1, { id: "6", title: "truck" });
console.log(dataSplice);
const dataSlice = ["car", "bus", "plane", "train", "boat"];
const CopyArray = [...dataSlice];
const newArray = CopyArray.slice(0, 2);
console.log(newArray);
console.log(CopyArray);

const dataDestruct = ["Äudi", "MTA", "Boeing", "Diesel", "Titanic"];
//console.log(car)
let search = dataDestruct.findIndex((element) => element === "MTA");
const strip = dataDestruct.slice(search, search + 1);
console.log(strip);
console.log(dataDestruct);
const [car, bus, plane, train, boat] = dataDestruct;
console.log(car, bus, plane, train, boat);
const dataSpread = ["car", "bus", "plane", "train", "boat"];
const copArray = [...dataSpread];
console.log(copArray);
console.log(...copArray);
//console.log(typeof...copArray);

const dataRest = (...args) => {
  return args.length;
};
console.log(dataRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(
  dataRest(
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  )
);
console.log(
  dataRest(
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30
  )
);
fetch("https://api.github.com/search/repositories?q=javascript")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 15; i++) {
      //console.log(data.items[i].description);
      const p = document.createElement("p");
      const header = document.createElement("h1");
      header.innerHTML = data.items[i].name;
      p.innerHTML = data.items[i].description;
      document.body.appendChild(header);
      document.body.appendChild(p);
    }
    //para.innerHTML = data.items[1].description;
    //console.log(data.items[1].description);
  })
  .catch((err) => console.error(err));

fetch("https://www.dnd5eapi.co/api/ability-scores/str")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.skills[0].name);
  });
fetch()
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
//remove last letter from string javascript

const removeLast = (string) => {
  const newString = string.substring(0, string.length - 1);
  return newString;
};
console.log(removeLast("Hello"));
console.log(removeLast("Hello World"));
console.log(removeLast("Hello World!"));
console.log(removeLast("Hello World!!"));
console.log(removeLast("Hello World!!!"));
console.log(removeLast("Hello World!!!!"));
console.log(removeLast("Hello World!!!!!"));
console.log(removeLast("Hello World!!!!!!"));
console.log(removeLast("Hello World!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
console.log(removeLast("Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"));
