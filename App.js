// const heading = React.createElement("h1",{},"React heading")
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

{/*
<div id="parent">
    <div id="children">
        <h1>im h1 tag</h1>
    </div>
      <div id="children2">
        <h2>im h2 tag</h2>
    </div>
</div> 
*/}

const pare=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"children"},
React.createElement("h1",{},"i am h1 tag")
),
React.createElement("div",{id:"children2"},
React.createElement("h2",{},"i am h2 tag")
),
]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(pare);

