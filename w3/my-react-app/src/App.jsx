import { useEffect } from "react";

function App() {
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
export default App;