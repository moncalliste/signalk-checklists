export interface Item {
  title: string;
  desc: string;
  done: boolean;
}

export interface Checklist {
  items: [Item];
}
