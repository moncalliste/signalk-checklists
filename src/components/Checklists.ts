export type Item = {
  title: string;
  desc: string;
  done: boolean;
};

export type Checklist = {
  title: string;
  desc: string;
  items: [Item] | undefined;
};

export type Checklists = [Checklist];
