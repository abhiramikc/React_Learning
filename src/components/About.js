// import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { UserContex } from '../utils/UserContex';

class About extends React.Component {
    constructor() {
        super();
        //("Parent consctor");
    }
    componentDidMount() {
        //("Parent componentDid mount");
    }
    render() {
        //("parent render");
         return (
        <div style={{border: "1px solid black",paddingTop: "5px",marginTop: "5px"}}>
            <h3>About user:</h3>
                 <UserClass username={"Data passed"} city={"India,kerala"} />

                 {/* Consuming context in class based components */}
                 <UserContex.Consumer>
                     {({ loggedInUser }) => (
                         <h3>Logg:::{ loggedInUser}</h3>
                     )}
                 </UserContex.Consumer>
        </div>
    )
}
}

// const About = () => {
//     const dataToPass = "data props";
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is namaste react About component</h2>
//             <User />
//             <UserClass username="Data passed" />
//         </div>
//     )
// }
export default About;