import { useEffect, useMemo, useState } from "react";
import styles from './Tabs.module.scss';

type Visibility = 'visible' | 'hidden';

type Props = {
  refElements: HTMLCollection | undefined;
  selectedTabIndex: number;
  selectedTabElement: Element | undefined;
};

export const ActiveMarkBar: React.FC<Props> = ({refElements, selectedTabIndex, selectedTabElement}) => {
  const _refElements = Array.from(refElements ?? []);
  const nonActiveMarkProps = getNonActiveMarkProps(
    _refElements,
    selectedTabIndex
  );
  const [activeMarkVisibility, setActiveMarkVisibility] = useState<Visibility>('visible');

  useEffect(() => {
    setTimeout(() => setActiveMarkVisibility('visible'), 200)
  });

  const markProps = useMemo(() => [
      ...nonActiveMarkProps,
      getActiveMarkProp(selectedTabElement, activeMarkVisibility),
    ],
    [activeMarkVisibility, nonActiveMarkProps, selectedTabElement]
  );

  const markElementsOnBar = useMemo(
    () => markProps.map((props, index) => {
      return <div key={index} className={props.className} style={props.styles} />;
    }),
    [markProps]
  );

  return <div className={styles.selectedMarkBar}>{markElementsOnBar}</div>
}

const getNonActiveMarkProps = (
  refElements: Element[],
  selectedItemIndex: number,
) => {
  if (refElements.length === 0) {
    return [];
  }
  return Array.from(Array(refElements.length - 1), (_, k) => k).map((index) => {
    return {
      className: [
        styles.inactiveMark,
        index >= selectedItemIndex
          ? styles.deflatedBlock
          : styles.inflatedBlock,
      ].join(' '),
      styles: { maxWidth: refElements[index].clientWidth },
    };
  });
};

const getActiveMarkProp = (
  selectedTabElement: Element | undefined,
  activeMarkVisibility: Visibility
) => {
  const selectedTabWidth = selectedTabElement?.clientWidth ?? 0;
  return {
    className: styles.activeMark,
    styles: {
      maxWidth: selectedTabWidth,
      positionn: 'relative',
      visibility: activeMarkVisibility 
    }
  }
};

