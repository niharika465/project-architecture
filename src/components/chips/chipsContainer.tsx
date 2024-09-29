import ChipsComponent from './chipsComponent';
import { ChipsOwnProps } from './types';

export const ChipsContainer = ({ label, color }: ChipsOwnProps) => {
  return <ChipsComponent label={label} color={color} />;
};
