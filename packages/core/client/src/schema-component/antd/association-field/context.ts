import { GeneralField } from '@formily/core';
import { createContext } from 'react';

export interface AssociationFieldContextProps {
  options?: any;
  field?: GeneralField;
  currentMode?: string;
  allowMultiple?: boolean;
}

export const AssociationFieldContext = createContext<AssociationFieldContextProps>({});
