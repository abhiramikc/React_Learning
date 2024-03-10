import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor() {
        super();
        console.log("Parent consctor");
    }
    componentDidMount() {
        console.log("Parent componentDid mount");
    }
    render() {
        console.log("parent render");
         return (
        <div>
            <h1>About</h1>
            <h2>This is namaste react About component</h2>
            <User />
                 <UserClass username={"Data passed"} city={"India,kerala"} />
                    <UserClass username={"Data passed"} city={"US,newyork"} />
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