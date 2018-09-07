// import React, { Component, Fragment } from "react";
// import bgImg from "./bg6.jpg";
import React from "react";
import { Grid } from "material-ui";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
// import { orange100 } from "material-ui/styles/colors";
// import { blue } from "material-ui/styles/colors";

// const sectionStyle = {
//   backgroundImage: `url(${bgImg})`
// };

const styles = {
  paper: {
    padding: 160,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    background: "orange"
  }
};

export default props => (
  <Grid container>
    <Grid item sm>
      <LeftPane style={styles} />
    </Grid>
    <Grid item sm>
      <LeftPane style={styles} />
    </Grid>
    <Grid item sm>
      <LeftPane style={styles} />
    </Grid>

    <Grid item sm>
      <RightPane style={styles} />
    </Grid>

    <Grid item sm>
      <RightPane style={styles} />
    </Grid>
    <Grid item sm>
      <RightPane style={styles} />
    </Grid>
  </Grid>
);

// class props extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Grid container>
//           <Grid item sm>
//             <Paper style={style.paper}>
//               <strong> Main Body Left</strong>
//             </Paper>
//           </Grid>
//           <Grid item sm>
//             <Paper style={style.paper}>
//               <strong> Main Body Right</strong>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Fragment>
//     );
//   }
// }

// export default props;

// <section style={sectionStyle} className="sectionStyle">
//     <div className="App-body container-fluid">
//         <div className="row row1">
//             <div className="col col-lg-12" />
//         </div>

//         <div className="row">
//             <div className="col-lg-3 col-md-3 col-sm-3  firstCol" />
//             <div className="col-lg-1 col-md-1 col-sm-2 secondCol" />
//             <div className="col-lg-8  col-md-8 col-sm-7 col-xs-12 lastCol">
//                 <p className="App-intro">
//                     <h1>
//                         <strong>Hello !!</strong>
//                     </h1>
//                     <h3>
//                         <b>Welcome to my personal website !</b>
//                     </h3>
//                 </p>
//                 <p>
//                     I am going to post my interests and the projects that I am
//                     currently working on. So, come along and find out what I have
//                     been doing and what we can do together for the better future.
//                 </p>
//                 <p className="font-color">
//                     <em>
//                         PS. It's just a begining and will update bit by bit. <br />
//                         So be patient. :) !!!
//                   </em>
//                 </p>
//             </div>
//         </div>
//         <div className="row row3">
//             <div className="col col-lg-12"> </div>
//         </div>
//     </div>{" "}
// </section>
