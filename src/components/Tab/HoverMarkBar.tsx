import { useMemo } from "react";
import styles from './Tabs.module.scss';

type Props = {
  refElements: HTMLCollection | undefined;
  hoverOnIndex: number | undefined;
};

export const HoverMarkBar: React.FC<Props> = ({refElements, hoverOnIndex}) => {
  const _refElements = Array.from(refElements ?? []);
  const hoverMarkProps = getHoverMarkProps(
    _refElements,
    hoverOnIndex
  );

  const hoverMarkElements = useMemo(
    () => hoverMarkProps.map((item, index) => {
      return <div key={index} className={item.className} style={item.styles} />;
    }), [hoverMarkProps]);

  return <div className={styles.hoverMarkBar}>{hoverMarkElements}</div>
}

const getHoverMarkProps = (
  refElements: Element[],
  hoverOnIndex: number | undefined,
) => {
  if (refElements.length === 0) {
    return [];
  }
  return Array.from(Array(refElements.length), (_, k) => k).map((index) => {
    return {
      className: [
        styles.fixedInflatedBlock,
        index === hoverOnIndex
          ? styles.hoverOn
          : '',
      ].join(' '),
      styles: { maxWidth: refElements[index].clientWidth },
    };
  });
};
