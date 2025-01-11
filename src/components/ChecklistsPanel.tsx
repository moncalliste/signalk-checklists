import React from "react";
import { Checklist } from "./Checklists";
import ChecklistCard from "./ChecklistCard";
import { title } from "process";

export default function ChecklistPanel({
  props,
  checklists,
}: {
  props: any;
  checklists: Checklist[];
}) {
  return (
    <div className="container text-center">
      <div className="row">
        {checklists.map((item) => {
          return <ChecklistCard props checklist={item} />;
        })}
      </div>
    </div>
  );
  //   return <div>Checklists {JSON.stringify(checklists)}</div>;
}
