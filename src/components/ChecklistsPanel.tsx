import React from "react";
import { Checklist } from "./Checklists";
import ChecklistCard from "./ChecklistCard";
import { title } from "process";

export default function ChecklistPanel({
  props,
  checklists,
}: {
  props: any;
  checklists: [Checklist];
}) {
  return (
    <ChecklistCard
      props={undefined}
      checklist={{
        items: [{ title: "test", desc: "test", done: false }],
      }}
    />
  );
  //   return <div>Checklists {JSON.stringify(checklists)}</div>;
}
