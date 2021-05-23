import React from 'react'
import {useHistory} from "react-router";

export default function Header() {

    const history=useHistory();
    console.log(history);
    return (
        <div>
            <h1>This is Headar.....</h1>
            <button onClick={()=>{
                history.push("/home");
            }} >Go to Home</button>

        </div>
    )
}
