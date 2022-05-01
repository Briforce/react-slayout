import { Split } from "./Split";

interface Node {
  id: string;
  parent: string;
  level: number;
  tabs: string[];
  first: string;
  firstPercentage: number;
  second: string;
  secondPercentage: number;
  split: Split;
}

export type { Node };
