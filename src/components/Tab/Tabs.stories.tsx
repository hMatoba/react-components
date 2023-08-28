import { StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { Tabs } from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

const Template: StoryFn = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleClick = (index: number) => {
    setSelectedTab(index);
  };
  const items = [
    {
      label: 'item1',
      index: 0,
      selected: false,
      onClick: handleClick,
    },
    {
      label: 'item2',
      index: 1,
      selected: false,
      onClick: handleClick,
    },
    {
      label: 'item3',
      index: 2,
      selected: false,
      onClick: handleClick,
    },
    {
      label: 'item4',
      index: 3,
      selected: false,
      onClick: handleClick,
    },
  ];
  return (
    <div>
      <Tabs items={items} selected={selectedTab} />
    </div>
  );
};

export const Default = Template.bind({});
