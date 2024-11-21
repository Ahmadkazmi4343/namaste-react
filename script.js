/*
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is  Heading"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/
/*
const para = React.createElement("p", { class: "para-check" }, "this is para");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(para);
*/

// but what if when i need to write (nested html elemnt) div into div and and some tag
/* <div id="parent">
      <div id="child">
        <h1>i am h1 tag</h1>
        <h2> this is h2 tag </h2>  // what is there is a  siblings present so i use array means [this bracket in start and end] 
      </div>
    </div>

    */

const parent = React.createElement(
  "div", // Parent element
  { id: "parent" }, // Parent properties
  [
    // First child div with id "child"
    React.createElement("div", { id: "child" }, [
      // Nested children of the first child div
      React.createElement("h1", {}, "I am h1 tag"), // First h1 tag
      React.createElement("h2", {}, "I am h2 tag"), // First h2 tag
    ]),
    // Second child div with id "child2"
    React.createElement("div", { id: "child2" }, [
      // Nested children of the second child2 div
      React.createElement("h1", {}, "I am h1 tag"), // Second h1 tag
      React.createElement("h2", {}, "I am h2 tag"), // Second h2 tag
    ]),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // agr kuch html ke root div mai kuch bhe ho to vo replace ho jata hai render se jo pass krte hai us se

// but here is  a mess so for that purpose we use **JSX**

/* chapter 2 */


