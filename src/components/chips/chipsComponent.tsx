import classNames from 'classnames';
import { ChipsOwnProps } from './types';
import './chips.scss';

const ChipsComponent = ({ label, color }: ChipsOwnProps) => {
  return (
    <div
      className={classNames('chips', {
        'chips--green': color === 'green',
        'chips--orange': color === 'orange',
      })}
    >
      {label}
    </div>
  );
};

export default ChipsComponent;
