import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Button } from '../Button/Button';
import classes from './Button_TypeNormal.module.css';

interface Props {
  className?: string;
  classes?: {
    button?: string;
  };
  text?: {
    buttonText?: ReactNode;
  };
}
/* @figmaId 113:29 */
export const Button_TypeNormal: FC<Props> = memo(function Button_TypeNormal(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      <Button
        className={`${props.classes?.button || ''} ${classes.button}`}
        text={{
          buttonText: props.text?.buttonText,
        }}
      />
    </button>
  );
});
