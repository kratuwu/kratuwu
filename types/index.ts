import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Post {
  body: string
  id: number
  title: string
}

export type ContentRef = {
  name: string;
  ref: React.RefObject<{}>;
  icon: IconProp;
};
