import React from 'react';
import styles from './Tabs.module.scss';

type Props = {
  refElements: HTMLCollection | undefined;
  selectedTabIndex: number;
};

export const ActiveMarkBar: React.FC<Props> = ({
  refElements,
  selectedTabIndex,
}) => {
  const selectedTabElement = refElements?.[selectedTabIndex];

  return (
    <div className={styles.selectedMarkBar}>
      <ActiveMark selectedTabElement={selectedTabElement} />
    </div>
  );
};

const ActiveMark: React.FC<{ selectedTabElement: Element | undefined }> = ({
  selectedTabElement,
}) => {
  if (!(selectedTabElement instanceof HTMLDivElement)) {
    return null;
  }
  const selectedTabWidth = selectedTabElement?.offsetWidth ?? 0;
  const offsetLeft =
    (selectedTabElement?.offsetLeft ?? 0) -
    (selectedTabElement?.parentElement?.offsetLeft ?? 0);
  return (
    <div
      className={styles.activeMark}
      style={{
        position: 'absolute',
        left: `${offsetLeft}px`,
        width: `${selectedTabWidth}px`,
      }}
    />
  );
};
