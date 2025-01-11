import React from "react";
import { Checklist } from "./Checklists";

export default function ({
  props,
  checklist,
}: {
  props: any;
  checklist: Checklist;
}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">Card text</p>
        <a href="#" className="btn btn-primary">
          Checklist link
        </a>
      </div>
    </div>
  );
}
