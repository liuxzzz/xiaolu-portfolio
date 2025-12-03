export interface Photo {
  id: string;
  url: string;
  width: number;
  height: number;
  title: string;
  category: string;
  description?: string;
}

export interface NavItem {
  label: string;
  path: string;
}