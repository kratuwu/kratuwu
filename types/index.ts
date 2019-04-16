export interface Post {
  body: string
  id: number
  title: string
}

export type ContentRef = {
  name: string;
  ref: React.RefObject<{}>;
};
