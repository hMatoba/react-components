import { useCallback, useEffect, useState } from 'react';
import styles from './index.module.scss';

const INITIAL_STYLES = {
  on: {
    bg: styles.bg_onFixed,
    circle: styles.circle_onFixed,
    icon: styles.iconColor_onFixed,
  },
  off: {
    bg: styles.bg_offFixed,
    circle: styles.circle_offFixed,
    icon: styles.iconColor_offFixed,
  },
};

const ANIMATION_STYLES = {
  on: {
    bg: styles.bg_onAnimation,
    circle: styles.circle_onAnimation,
    icon: styles.iconColor_onAnimation,
  },
  off: {
    bg: styles.bg_offAnimation,
    circle: styles.circle_offAnimation,
    icon: styles.iconColor_offAnimation,
  },
};

type Props = {
  on: boolean;
  disabled: boolean;
  onClick: () => void;
};

export const Switch: React.FC<Props> = ({ on, disabled, onClick }) => {
  const [animationEnabled, setAnimationEnabled] = useState(false);
  const [additionalStyle, setAdditionalStyle] = useState(
    on ? INITIAL_STYLES.on : INITIAL_STYLES.off,
  );

  useEffect(() => {
    setAnimationEnabled(true);
  });

  useEffect(() => {
    if (on && animationEnabled) {
      setAdditionalStyle(ANIMATION_STYLES.on);
      return;
    }
    if (!on && animationEnabled) {
      setAdditionalStyle(ANIMATION_STYLES.off);
      return;
    }
    // propsのonが切り替わるときのみ適用スタイルの入れ替えを行う
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on]);

  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <button
      className={[styles.wrapper, additionalStyle.bg].join(' ')}
      onClick={handleClick}
      disabled={disabled}
    >
      <div className={[styles.circle, additionalStyle.circle].join(' ')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          className={additionalStyle.icon}
        >
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->',
            }}
          />
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
      </div>
      <input type="checkbox" defaultChecked={on} hidden />
    </button>
  );
};
