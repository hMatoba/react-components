import { StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { Tabs } from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

const Template: StoryFn = () => {
  const [selectedTab1, setSelectedTab1] = useState(0);
  const [selectedTab2, setSelectedTab2] = useState(3);
  const [selectedTab3, setSelectedTab3] = useState(-1);

  const items = [
    {
      label: 'item1',
      index: 0,
    },
    {
      label: 'item2',
      index: 1,
    },
    {
      label: 'item3',
      index: 2,
    },
    {
      label: 'item4',
      index: 3,
    },
  ];
  return (
    <div>
      <Tabs
        items={items}
        selected={selectedTab1}
        onTabClick={(index: number) => setSelectedTab1(index)}
      />
      <hr />
      <Tabs
        items={items}
        selected={selectedTab2}
        onTabClick={(index: number) => setSelectedTab2(index)}
      />
      <hr />
      <Tabs
        items={items}
        selected={selectedTab3}
        onTabClick={(index: number) => setSelectedTab3(index)}
      />
    </div>
  );
};

export const Default = Template.bind({});
