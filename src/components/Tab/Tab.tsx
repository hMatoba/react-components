import React from 'react';
import styles from './Tab.module.scss';

type Props = {
  label: string;
  index: number;
  selected: boolean;
  onSelect: (index: number) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const Tab: React.FC<Props> = ({
  label,
  index,
  selected,
  onSelect,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={styles.tab}
      data-selected={selected}
      data-value={index}
      onClick={() => onSelect(index)}
      onKeyDown={() => onSelect(index)}
      onMouseEnter={() => onMouseEnter?.()}
      onMouseLeave={() => onMouseLeave?.()}
    >
      {label}
    </div>
  );
};
