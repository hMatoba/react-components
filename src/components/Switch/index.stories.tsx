import { StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { Switch } from '.';

export default {
  title: 'Switch',
  component: Switch,
};

const Template: StoryFn = () => {
  const [on, setOn] = useState(true);
  const handleClick = () => {
    setOn(!on);
  };

  return (
    <div>
      <div>
        <Switch on={on} onClick={handleClick} disabled={false} />
      </div>
      <hr />
      <div>
        <Switch on={!on} onClick={handleClick} disabled={false} />
      </div>
      <hr />
      <div>
        <Switch on={on} onClick={handleClick} disabled={true} />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
