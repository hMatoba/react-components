import { StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { Tabs } from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

const Template: StoryFn = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };
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
      <Tabs items={items} selected={selectedTab} onTabClick={handleTabClick} />
    </div>
  );
};

export const Default = Template.bind({});
