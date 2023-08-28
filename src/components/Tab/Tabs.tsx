import React, { useEffect, useMemo, useRef, useState } from "react";
import { Tab } from "./Tab";
import styles from './Tabs.module.scss';
import { HoverMarkBar } from "./HoverMarkBar";
import { ActiveMarkBar } from "./ActiveMarkBar";

type Item = {
  label: string;
  index: number;
  selected: boolean;
  onClick: (index: number) => void;
};

type Props = {
  items: Item[];
  selected: number;
};

export const Tabs: React.FC<Props> = ({ items, selected }) => {
  const divElement = useRef<HTMLDivElement>(null);
  const [tabElements, setTabElements] = useState<HTMLCollection | undefined>();
  const [hoverOn, setHoverOn] = useState<number | undefined>();

  useEffect(() => {
    setTabElements(divElement.current?.children);
  }, []);

  const selectedTabElement = tabElements?.[selected];

  const tabList = useMemo(
    () =>
      items.map((props) => {
        const { label, index, onClick } = props;
        return (
          <Tab
            key={index}
            label={label}
            selected={index === selected}
            index={index}
            onClick={(index) => {
              onClick(index);
              setTabElements(divElement.current?.children)
            }}
            onMouseEnter={() => {
              setHoverOn(index);
            }}
            onMouseLeave={() => {
              setHoverOn(undefined);
            }}
          />
        );
      }), [items, selected]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabList} ref={divElement}>
        {tabList}
      </div>
      <div className={styles.statusBar}>
        <HoverMarkBar refElements={tabElements} hoverOnIndex={hoverOn} />
        <ActiveMarkBar refElements={tabElements} selectedTabIndex={selected} selectedTabElement={selectedTabElement} />
      </div>
    </div>
  )
}