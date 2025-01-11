import React from "react";
import { Checklist } from "./Checklists";

export default function ChecklistPanel({
  props,
  checklists,
}: {
  props: any;
  checklists: [Checklist];
}) {
  return <div>Checklists {JSON.stringify(checklists)}</div>;
}
