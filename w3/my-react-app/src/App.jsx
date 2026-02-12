import { useEffect } from "react";

function App() {
  const numbers = [1,2,3,4];
  const doubled = numbers.map(x => x*2);
  useEffect(() => {
    const myHeader = new Header();
    const btn = document.getElementById("btn");
    if(btn) {
      btn.addEventListener("click", myHeader.changeColor);
    }
  }, []);
  const mycar = new Model("BMW","Mustang");
  //mycar.present();
  mycar.show();
  return (
    <h1>Hello World!</h1>
  );
}
class Car{
  constructor(name){
    this.brand = name;
  }
  present(){
    return "I have a " + this.brand;
  }
}

class Model extends Car {
  constructor(name,mod){
    super(name);
    this.model=mod;
  }
  show(){
    return this.present() + ", it is a " + this.model;
  }
}

const hello = () => 
  "Hello World!";

const hello2 = (val) => "Hello " + val;
class Header {
  constructor(){
    this.color = "Red";
  }
  changeColor = () =>{
    document.getElementById("demo").innerHTML += this.color;
  }
}

const fruitlist = ["apple","banana","cherry"];
function myList(){
  return (
    <ul>
      {fruitlist.map(fruit => 
        <li key={fruit}>{fruit}</li>
      )}
    </ul>
  );
}

class tutorial {
  constructor(vol) {
    this.volume = vol;
  }
}
const users = [{id:1, name:"John", age:30},
  {id:2,name:"Jane", age:25},
  {id:3, name:"Bob",age:27}
];

function UserList(){
  return (
    <ul>
      {users.map(user => 
        <li key={user.id}>
          {user.name} is {user.age} years old
        </li>
      )}
    </ul>
  );
}

const vehicles = ["mustang", "f-150","expedition"];
const [car , truck, suv] = vehicles;
// const [car, , suv]

function dateInfo(dat){
const d = dat.getDate();
const m = dat.getMonth();
const y = dat.getFullYear();

return [d,m,y];
}
const [date, month, year] = dateInfo(new Date());

const person = {
  firsname : "Burak",
  lastname : "Can",
  age:24,
  car: {
    brand: "BMW",
    model: "M3",
  }
};

let {firsname, lastname,age, country ="Spain"} = person;
let {firstname, car:{brand, model}} = person2;
export default App;

/*var has function scope, let and const has block scope 
*     We cannot 
  *  Reassign a constant value
 *   Reassign a constant array
*    Reassign a constant object
*
*
*
*
*
*
*/