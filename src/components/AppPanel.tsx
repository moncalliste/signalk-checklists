import React from "react";
import ChecklistPanel from "./ChecklistsPanel";

const AppPanel = (props: any) => {
  if (
    props.loginStatus.status == "notLoggedIn" &&
    props.loginStatus.authenticationRequired
  ) {
    return <props.adminUI.Login />;
  }

  // const data = fetch(
  //   "/signalk/v1/applicationData/global/signalk_checklists/1.0.0/checklists"
  // )
  //   .then((response) => response.json)
  //   .then((data) => data)
  //   .catch((error) => console.debug(error));

  // return `<div>testing ${data}</div>`;

  return <ChecklistPanel props></ChecklistPanel>;
};
export default AppPanel;
