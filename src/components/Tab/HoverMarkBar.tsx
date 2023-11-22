import React from 'react';
import styles from './Tabs.module.scss';

type Props = {
  refElements: HTMLCollection | undefined;
  hoverOnIndex: number | undefined;
};

export const HoverMarkBar: React.FC<Props> = ({
  refElements,
  hoverOnIndex,
}) => {
  const _refElements = Array.from(refElements ?? []);

  return (
    <div className={styles.hoverMarkBar}>
      <HoverMark refElements={_refElements} hoverOnIndex={hoverOnIndex} />
    </div>
  );
};

const HoverMark: React.FC<{
  refElements: Element[];
  hoverOnIndex: number | undefined;
}> = ({ refElements, hoverOnIndex }) => {
  if (refElements.length === 0) {
    return [];
  }
  return Array.from(Array(refElements.length), (_, k) => k).map((index) => {
    return (
      <div
        key={index}
        className={index === hoverOnIndex ? styles.hoverOn : ''}
        style={{ width: refElements[index].clientWidth }}
      />
    );
  });
};
