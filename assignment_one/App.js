// const heading = React.createElement("h1",{},"Hello world using React");

// console.log(heading)
// ReactDOM.createRoot(document.getElementById("root")).render(heading);

{
  /* <div id="parent">
        <div id="child">
          <h1>This is H1 Tag within child</h1>
        </div>
      </div> */
}



ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      [React.createElement("h1", {}, "This is H1 Tag within child"),React.createElement("h2", {}, "This is H2 Tag within child")])))

