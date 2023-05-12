import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    buttonText?: ReactNode;
  };
}
/* @figmaId 15:1676 */
export const Button: FC<Props> = memo(function Button(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.buttonText != null ? props.text?.buttonText : <div className={classes.buttonText}>Button Text</div>}
    </div>
  );
});
