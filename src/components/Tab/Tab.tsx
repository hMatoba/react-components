import React from "react";
import styles from "./Tab.module.scss";

type Props = {
  label: string;
  index: number;
  selected: boolean;
  onClick: (index: number) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const Tab: React.FC<Props> = ({
  label,
  index,
  selected,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={styles.tab}
      data-selected={selected}
      data-value={index}
      onClick={() => onClick(index)}
      onMouseEnter={() => onMouseEnter?.()}
      onMouseLeave={() => onMouseLeave?.()}
    >
      {label}
    </div>
  );
};
