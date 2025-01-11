export type Item = {
  title: string;
  desc: string;
  done: boolean;
};

export type Checklist = {
  items: [Item];
};
