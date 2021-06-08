import API from "../utils/api";
import React, {useState,useEffect } from "react";
const HomePage= ()=>{
    const [myState,setState]=useState(null)
    useEffect(()=>{
        API.seed()
    .then(res=>{
        const user=res.data.results;  
        setState(user);
    })
    },[]);
   const sortA=()=>{
        setState((data)=>{
            const datatosort=[...data]
            datatosort.sort((a, b) => (a.name.first)-(b.name.first));
            return datatosort;
        })
    }
   const sortD=()=>{
        const {name}=[...myState]
        name.sort((a, b) => a - b).reverse()   
        setState({ name })
    }
return(
    <div>
        {myState&&myState.map((Employee) => (
          <li className="list-group-item">
            <img src={Employee.picture.thumbnail}></img>
            {Employee.name.first+ " "+
            Employee.name.last+" Gender: "+Employee.gender}
          </li>
          
        ))}
        <button onClick={sortA} type="button">Sort by name Ascending</button>
        <button onClick={sortD} type="button">Sort by name Descending</button>
    </div>
)
}
export default HomePage;