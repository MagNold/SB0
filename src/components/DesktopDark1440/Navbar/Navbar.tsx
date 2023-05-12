import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Button_TypeNormal } from '../Button_TypeNormal/Button_TypeNormal';
import { LogoIcon } from './LogoIcon.js';
import classes from './Navbar.module.css';
import { NavbarActionsIcon } from './NavbarActionsIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    navbarActions?: ReactNode;
  };
  hide?: {
    logo?: boolean;
    navbarLinks?: boolean;
  };
  text?: {
    bluedev?: ReactNode;
  };
}
/* @figmaId 114:19 */
export const Navbar: FC<Props> = memo(function Navbar(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.navbarLeft}>
        {!props.hide?.logo && (
          <div className={classes.logo}>
            <LogoIcon className={classes.icon} />
          </div>
        )}
        {props.text?.bluedev != null ? props.text?.bluedev : <div className={classes.bluedev}>bluedev</div>}
      </div>
      <div className={classes.navbarRight}>
        {!props.hide?.navbarLinks && (
          <div className={classes.navbarLinks}>
            <div className={classes.home}>Home</div>
            <div className={classes.about}>About</div>
            <div className={classes.work}>Work</div>
          </div>
        )}
        <div className={classes.navbarActions}>
          {props.swap?.navbarActions || <NavbarActionsIcon className={classes.icon2} />}
        </div>
        <Button_TypeNormal
          classes={{ button: classes.button }}
          text={{
            buttonText: <div className={classes.buttonText}>Contact me -&gt;</div>,
          }}
        />
      </div>
    </div>
  );
});
