import React from 'react'
import { useParams } from 'react-router-dom'


function DogPage({ dogs }) {
    const { dogName } = useParams()   // useParams() = {dogName: 'whiskey'}. useParams() returns an object with the parameter name as the property name and the value of the parameter (endpoint) name as the value of the property name 

    const dog = dogs.filter(obj => obj.name === dogName)  //dog = [{name: 'Whiskey', age: 5, src: '/whiskey.jpg', facts: ["Whiskey loves eating popcorn.","Whiskey is a terrible guard dog.","Whiskey wants to cuddle with you!"]}]

    return (
        <div>
            <h1>{dog[0].name}</h1>

            <h2>Age: {dog[0].age}</h2>

            <h3>Facts About {dog[0].name}:</h3>

            {dog[0].facts.map((fact) =>
                <p>{fact}</p>
            )}

            <img src={dog[0].src} />
        </div>
    )
}
//dogs.filter(obj => obj.name === dogName) = find out which 
//url parameter(endpoint) that the user clicked on by using the filter method.
//we will loop over each object in the dogs array, and if the obj.name is 
//equal to the dogName, then give me back that entire object in an array.
//const dog = dogs.filter(obj => obj.name === dogName)  = 
//dog = [{name: 'Whiskey', age: 5, src: '/whiskey.jpg', facts: ["Whiskey loves eating popcorn.","Whiskey is a terrible guard dog.","Whiskey wants to cuddle with you!"]}]

export default DogPage;

//{dogs} =
//dogs = 
// [
//     {
//       name: "Whiskey",
//       age: 5,
//       src: '/whiskey.jpg',
//       facts: [
//         "Whiskey loves eating popcorn.",
//         "Whiskey is a terrible guard dog.",
//         "Whiskey wants to cuddle with you!"
//       ]
//     },
//     {
//       name: "Duke",
//       age: 3,
//       src: '/duke.jpg',
//       facts: [
//         "Duke believes that ball is life.",
//         "Duke likes snow.",
//         "Duke enjoys pawing other dogs."
//       ]
//     },
//     {
//       name: "Perry",
//       age: 4,
//       src: '/perry.jpg',
//       // src: perry,
//       facts: [
//         "Perry loves all humans.",
//         "Perry demolishes all snacks.",
//         "Perry hates the rain."
//       ]
//     },
//     {
//       name: "Tubby",
//       age: 4,
//       src: './tubby.jpg',
//       // src: tubby,
//       facts: [
//         "Tubby is really stupid.",
//         "Tubby does not like walks.",
//         "Angelina used to hate Tubby, but claims not to anymore."
//       ]
//     }
//   ]
//becuase we're passing in an object into the paramter of a function and we can
//destructure the object to just get the properties
//props = 
//{
// dogs: [
//     {
//       name: "Whiskey",
//       age: 5,
//       src: '/whiskey.jpg',
//       facts: [
//         "Whiskey loves eating popcorn.",
//         "Whiskey is a terrible guard dog.",
//         "Whiskey wants to cuddle with you!"
//       ]
//     },
//     {
//       name: "Duke",
//       age: 3,
//       src: '/duke.jpg',
//       facts: [
//         "Duke believes that ball is life.",
//         "Duke likes snow.",
//         "Duke enjoys pawing other dogs."
//       ]
//     },
//     {
//       name: "Perry",
//       age: 4,
//       src: '/perry.jpg',
//       // src: perry,
//       facts: [
//         "Perry loves all humans.",
//         "Perry demolishes all snacks.",
//         "Perry hates the rain."
//       ]
//     },
//     {
//       name: "Tubby",
//       age: 4,
//       src: './tubby.jpg',
//       // src: tubby,
//       facts: [
//         "Tubby is really stupid.",
//         "Tubby does not like walks.",
//         "Angelina used to hate Tubby, but claims not to anymore."
//       ]
//     }
//   ]
// }