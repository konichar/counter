import React, { Component } from "react";

// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <span className="navbar-brand mb-0 h1">
//           Counter
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </span>
//       </nav>
//     );
//   }
// }

// export default Navbar;

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Counter
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default Navbar;
