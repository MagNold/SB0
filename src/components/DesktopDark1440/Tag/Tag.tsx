import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Tag.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    tag?: ReactNode;
  };
}
/* @figmaId 206:269 */
export const Tag: FC<Props> = memo(function Tag(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.tag != null ? props.text?.tag : <div className={classes.tag}>Tag</div>}
    </div>
  );
});
