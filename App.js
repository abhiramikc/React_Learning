import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1",{},"React heading")
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

{
  /*
<div id="parent">
    <div id="children">
        <h1>im h1 tag</h1>
    </div>
      <div id="children2">
        <h2>im h2 tag</h2>
    </div>
</div> 
*/
}

// const pare=React.createElement("div",{id:"parent"},
// [React.createElement("div",{id:"children"},
// React.createElement("h1",{},"i am h1 tag")
// ),
// React.createElement("div",{id:"children2"},
// React.createElement("h2",{},"i am h2 tag")
// ),
// ]
// );

//react component
const pare = (
  <h1 className="heading" tabIndex="5">
    React heading
  </h1>
);
// create a functional component
//syntax1
const HeadingComponent = () => (
  <div>
    <h1>HI i am react functional component</h1>
  </div>
);
//syntax2

const HeadingComponent2 = () => {
  return <h1>One line return </h1>;
};

//syntax 3
const HeadingComponent3 = () => <h1>Using arrow functions</h1>;

//component composition - component inside component
const sample=1000;
const Title = () => (
  <div>
    <p>the sample data is {sample}</p>
    {HeadingComponent()}
   { <HeadingComponent2 />}
   { <HeadingComponent3></HeadingComponent3> }
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(pare);
root.render(<Title />);
