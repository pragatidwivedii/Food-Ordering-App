import React from "react";
import User from "./User";
// const Contact = () => {
//     return (
//         <div className="Body">
//             <h1>
//                 Contact Us
//             </h1>
//         </div>
//     );
    
// }
//https://www.linkedin.com/in/pragati-dwivedi-00abb6360/
//USING CLASS BASED COMPONENT

class Contact extends React.Component{

    constructor(props){
        super(props);
        console.log("parent constructor");
    }

     componentDidMount() {
        console.log("parent componentDidMount");
    }

    render(){
        return(
            <div className="mx-20 mt-5">
            {console.log("parent render()")}
           <User name="Pragati Dwivedi" linkedin="https://www.linkedin.com/in/pragati-dwivedi-00abb6360/" gmail="pragatihripra@gmail.com" location = "India"/> 
          
           </div>
        )
    
    }
}



export default Contact;