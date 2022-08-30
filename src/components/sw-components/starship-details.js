import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

import { useParams } from "react-router-dom";

function withParams(Component) {
  function ComponentWithParamsProp(props) {
    let { itemId } = useParams();
    // let params = useParams();
    return <Component {...props} itemId={itemId} />;
  }

  return ComponentWithParamsProp;
}

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
};

export default withParams(withSwapiService(mapMethodsToProps)(StarshipDetails));
