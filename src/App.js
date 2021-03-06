import React, { Component, Fragment } from "react";
import "./App.css";
import { Header, Footer } from "./Components/Layouts";
import { Portfolio } from "./Components/Portfolio";
// import Home from "./Components/Home";
import { Grid, Row, Col } from "react-bootstrap";
import MainBody from "./Components/MainBody";
// import { Menu } from "material-ui";
// import Menu from "./Components/Menu";
import bgImg from "./bg6.jpg";
import Footer from "./Components/Layouts/Footer";
import Header from "./Components/Layouts/Header";
import { Portfolio } from "./Components/Portfolio";
// import Home from "./Components/Home";
import { Grid, Row, Col } from "react-bootstrap";
import { Main } from "./Components/MainBody/Main";
const sectionStyle = {
  backgroundImage: `url(${bgImg})`
};

class App extends Component {
  render() {
    return (
      <Fragment>
        {" "}
        <Header />
        <MainBody />
        <Footer />{" "}
        <div className="App container-fluid">
          {/* <div className="container-fluid"> */}
          <div className="row">
            <div className="col">
              <Header />
            </div>
          </div>

          <div className="row row2">
            <div className="col">
              <section style={sectionStyle} className="sectionStyle">
                <div className="App-body container-fluid">
                  <div className="row row1">
                    <div className="col col-lg-12" />
                  </div>
                  <div className="row">
                    <Main />
                  </div>
                  <div className="row row3">
                    <div className="col col-lg-12"> </div>
                  </div>
                </div>{" "}
              </section>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <footer className="App-footer">
                <div />
                <div />
                <div className="social-media">
                  <Footer />
                </div>
              </footer>
            </div>
          </div>
          {/* </div> */}
        </div>
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
