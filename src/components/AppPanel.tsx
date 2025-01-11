import React from "react";
import ChecklistPanel from "./ChecklistsPanel";
import { Checklist, Checklists, Item } from "./Checklists";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

  const i: Item = {
    title: "Item 1",
    desc: "This is item 1",
    done: false,
  };

  const c: Checklist[] = [
    {
      title: "End of season",
      desc: "Items to prepare the vessel for the end of the sailing season",
      items: undefined,
    },
    {
      title: "Start of season",
      desc: "Items to prepare the vessel for the start of the sailing season",
      items: undefined,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ChecklistPanel props checklists={c}></ChecklistPanel>}
        />
      </Routes>
      {/* <ChecklistPanel props checklists={c}></ChecklistPanel>; */}
    </BrowserRouter>
  );
};
export default AppPanel;
