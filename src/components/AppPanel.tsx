import React from "react";

const AppPanel = async (props: any) => {
  if (
    props.loginStatus.status == "notLoggedIn" &&
    props.loginStatus.authenticationRequired
  ) {
    return <props.adminUI.Login />;
  }

  fetch(
    "/signalk/v1/applicationData/global/signalk_checklists/1.0.0/checklists"
  )
    .then((response) => response.json)
    .then((data) => console.log(data.toString()))
    .catch((error) => console.debug(error));

  return `<div>testing</div>`;
};
export default AppPanel;
