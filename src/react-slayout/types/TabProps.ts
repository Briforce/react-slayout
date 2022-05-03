import { EntityId } from "@reduxjs/toolkit";
import { ReactNode } from "react";

interface TabProps {
  id: string;
  component: ReactNode;
  tabNodeId: EntityId;
}

export type { TabProps };
