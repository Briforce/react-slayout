import { Split } from "./Split";

interface TabNode {
  id: string;
  parent?: string;
  level: number;
  tabs: string[];
  first?: string;
  firstPercentage?: number;
  second?: string;
  secondPercentage?: number;
  split?: Split;
}

export type { TabNode };
