import type { ReactNode } from 'react';

declare global {
  namespace React {
    interface ReactNode {
      children?: ReactNode;
    }
  }
} 