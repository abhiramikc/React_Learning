import React from 'react';
class UserClass extends React.Component {
    constructor(props) {
        console.log(" child constrctor");
        super(props);
    console.log(props);
   this.state = {
            count: 0,
        }
    }
    componentDidMount() {
        console.log("component did mount");
    }
    render() {
             console.log("child render");
        const { username } = this.props; //destrcutre props
        const { count } = this.state; // desccture 
        return (
            <div>
                <h1>From Class components react</h1>
                <h2>Prop name: {username}</h2>
                <h2>City name : { this.props.city }</h2>
                <h3>Count: : {count}</h3>
                <button onClick={
                    () => {
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }
                }>Increment</button>
            </div>
        )
    }
}
export default UserClass;