import { SplitDirection } from "./SplitDirection";

interface TabNodeProps {
  id: string;
  parent?: string;
  tabs?: string[];
  first?: string;
  firstPercentage?: number;
  second?: string;
  secondPercentage?: number;
  split?: SplitDirection;
}

export type { TabNodeProps };
