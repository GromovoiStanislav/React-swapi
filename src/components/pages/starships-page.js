import React from "react";
import { StarshipList } from "../sw-components";
import { useNavigate } from "react-router-dom";

const StarshipsPage = () => {
  let navigate = useNavigate();
  return <StarshipList onItemSelected={(id) => navigate(id)} />; // navigate("/starships/" + id)
};

export default StarshipsPage;

// import React, { Component } from "react";
// import { StarshipDetails, StarshipList } from "../sw-components";
// import Row from "../row";

// export default class StarshipsPage extends Component {
//   state = {
//     selectedItem: null,
//   };

//   onItemSelected = (selectedItem) => {
//     this.setState({ selectedItem });
//   };

//   render() {
//     const { selectedItem } = this.state;

//     return (
//       <Row
//         left={<StarshipList onItemSelected={this.onItemSelected} />}
//         right={<StarshipDetails itemId={selectedItem} />}
//       />
//     );
//   }
// }
