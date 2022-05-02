import { EntityId } from "@reduxjs/toolkit";
import { ReactNode } from "react";

interface Tab {
  id: string;
  component: ReactNode;
  tabNodeId: EntityId;
}

export type { Tab };
