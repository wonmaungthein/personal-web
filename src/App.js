import React, { Component, Fragment } from "react";
import "./App.css";
import { Header, Footer } from "./Components/Layouts";
import { Portfolio } from "./Components/Portfolio";
// import Home from "./Components/Home";
import { Grid, Row, Col } from "react-bootstrap";
import MainBody from "./Components/MainBody";
// import { Menu } from "material-ui";
// import Menu from "./Components/Menu";

class App extends Component {
  render() {
    return (
      <Fragment>
        {" "}
        <Header />
        <MainBody />
        <Footer />{" "}
      </Fragment>
    );
  }
}

export default App;

//     <div className="App container-fluid">
//       {/* <div className="container-fluid"> */}
//       <div className="row">
//         <div className="col">
//           <Header />
//         </div>
//       </div>

//       <div className="row row2">
//         <div className="col">
//           {/* <MainBody /> */}
//           <MainBody />
//         </div>
//       </div>

//       <div className="row">
//         <div className="col">
//           <footer className="App-footer">
//             <div />
//             <div />
//             <div className="social-media">
//               <Footer />
//             </div>
//           </footer>
//         </div>
//       </div>
//       {/* </div> */}
//     </div>
//     );
//   }
// }
