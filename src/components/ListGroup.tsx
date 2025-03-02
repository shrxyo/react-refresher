// import { Fragment } from "react";

// function ListGroup() {
//   return (
//     <>
//       <h1>This is a heading</h1>
//       <ul className="list-group">
//         <li className="list-group-item">An item</li>
//         <li className="list-group-item">A second item</li>
//         <li className="list-group-item">A third item</li>
//         <li className="list-group-item">A fourth item</li>
//         <li className="list-group-item">And a fifth one</li>
//       </ul>
//     </>
//   );
// }

// export default ListGroup;

import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Mumbai", "Hyderabad", "Bangalore", "Chennai", "Kolkata"];
  // items = [];
  let selectedIndex = 0;

  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  //created a function to add the conditions.
  const getMessage = () => {
    // return items.length === 0 ? <p>No item found</p> : null;
    // "and" logic. and the value that will return if the condition is true. for a concise code.
    return items.length === 0 && <p>No item found</p>;
  };

  //If else long way example
  // if (items.length === 0) {
  //   return (
  //     <>
  //       <h1>Error</h1>
  //       <p>Items are not found</p>
  //     </>
  //   );
  // }

  //take each item, and convert it into a different type (using map)
  return (
    <>
      <h1>List Group</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          // We are not calling "handleClick" function. We are just referencing it.
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={handleClick}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

//active: used to highlight hovered items in bootstrap. We need a variable to keep track of the index of the selected item
