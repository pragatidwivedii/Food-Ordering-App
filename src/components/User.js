import { Component } from "react";

class User extends Component {
    constructor(props){
        super(props);

        this.state = {
            userinfo : {
                name : "",
                location: "",
            },
        }
    }

    async componentDidMount() {
        // const data = await fetch("https://api.github.com/users/Akshaymarch7");
        // const json = await data.json();
       
        // this.setState({
        //     userinfo: json,
        // });
         
        // console.log(json);
    }
    // debugger;
    render(){
        // const {name , location} = this.state.userinfo;
        const {name , location} = this.props;
        console.log(name);
        return (
             <div className="mx-20 mt-5">
                <h1 className="text-2xl font-bold"> Name: {name}</h1>
                {/* <h2>linkedin: {this.props.linkedin}</h2> */}
                <h2 className="text-xl font-bold">location: {location}</h2>

             </div>
         )
    }
}

export default User;

/* 
- parent constructor
- parent render()
   -I Child constructor
   -I Child render()
   -II Child constructor
   -II Child render()

<DOM UPDATED - IN SINGLE BATCH>

-I Child componentDidMount
-II Child componentDidMount 
*/