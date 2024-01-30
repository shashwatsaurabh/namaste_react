const heading=React.createElement("div",{class:"parent"},
[React.createElement("div",{class:"child1"},
[React.createElement("h1",{},"i am h1 tag"),
React.createElement("h2",{},"i am h1 tag"),]),
React.createElement("div",{class:"child1"},
[React.createElement("h1",{},"i am h1 tag"),
React.createElement("h2",{},"i am h1 tag")]),]);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);