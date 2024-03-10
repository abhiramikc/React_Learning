import React from 'react';
class UserClass extends React.Component {
    constructor(props) {
        console.log(" child constrctor");
        super(props);
    console.log(props);
   this.state = {
       count: 0,
            userDetails : {
            login: "dummy",
                html_url: "",
                avatar_url:"",
       }
        }
    }
    async componentDidMount() {
        console.log("component did mount");
        const data = await fetch("https://api.github.com/users/Abhirami");
        const json = await data.json();
        console.log("JSON", json);
        this.setState({ userDetails: json });
        console.log("userDetails", this.state.userDetails);

    }
    render() {
             console.log("child render");
        const { username } = this.props; //destrcutre props
        // const { count } = this.state; // desccture 
        const {login,avatar_url,html_url} = this.state.userDetails; //
        return (
            <div>
                <h2>From Class components react</h2>
                <h4>Prop name: {username}</h4>
                <h4>City name : { this.props.city }</h4>
                {/* <h3>Count: : {count}</h3>
                <button onClick={
                    () => {
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }
                }>Increment</button> */}
                <div>
                    <h3>user git username : {login}</h3>
                    <img src={avatar_url} />
                    <h3>Html url : { html_url}</h3>
                </div>
            </div>
        )
    }
}
export default UserClass;