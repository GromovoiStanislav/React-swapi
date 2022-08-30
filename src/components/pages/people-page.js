import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PersonDetails, PersonList } from "../sw-components";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

const PeoplePage = () => {
  const { itemId } = useParams();

  let navigate = useNavigate();
  return (
    <Row
      left={
        <PersonList
          onItemSelected={(id) => navigate(`/people/${id}`, { replace: false })}
        />
      }
      right={
        <ErrorBoundry>
          <PersonDetails itemId={itemId} />
        </ErrorBoundry>
      }
    />
  );
};
export default PeoplePage;

// import React, { Component } from "react";
// import { PersonDetails, PersonList } from "../sw-components";
// import Row from "../row";
// import ErrorBoundry from "../error-boundry";

// export default class PeoplePage extends Component {
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
//         left={<PersonList onItemSelected={this.onItemSelected} />}
//         right={
//           <ErrorBoundry>
//             <PersonDetails itemId={selectedItem} />
//           </ErrorBoundry>
//         }
//       />
//     );
//   }
// }
