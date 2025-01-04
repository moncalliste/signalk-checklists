import React from "react";

const AppPanel = async (props: any) => {
  if (
    props.loginStatus.status == "notLoggedIn" &&
    props.loginStatus.authenticationRequired
  ) {
    return <props.adminUI.Login />;
  }

  const data = await fetch(
    "/signalk/v1/applicationData/global/signalk_checklists/1.0.0/checklists"
  )
    .then((response) => response.json)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  return `<div>testing ${data}</div>`;
};
export default AppPanel;
