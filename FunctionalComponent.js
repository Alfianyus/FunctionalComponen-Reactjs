 import React, {useState}  from "react";

const FunctionalComponent=()=>{
    const[name, setName] = useState("alfi");


    const changeName = ()=>
     
      name === "alfi" ? setName("cuy universe"): setName("alfi")
//          if(name === "alfi") return stateName("cuy universe");
//          return stateName("alfi");
    
     
    return(
    <>
    <h1>Functional Component</h1>;
    <h1>Name:{name}</h1>;
    <button type="button" onClick={changeName}>Ganti Nama</button>
    </>
    );
}

export default FunctionalComponent;
