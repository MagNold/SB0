import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Tag } from '../Tag/Tag';
import classes from './Card_Hover.module.css';
import { LinksIcon } from './LinksIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    links?: ReactNode;
  };
  hide?: {
    img?: boolean;
    tag?: boolean;
    tag2?: boolean;
  };
  text?: {
    digitalAgency?: ReactNode;
    tag?: ReactNode;
    digitalAgencyIsALandingPageBui?: ReactNode;
  };
}
/* @figmaId 203:251 */
export const Card_Hover: FC<Props> = memo(function Card_Hover(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.header}>
        {props.text?.digitalAgency != null ? (
          props.text?.digitalAgency
        ) : (
          <div className={classes.digitalAgency}>Digital Agency</div>
        )}
        <div className={classes._2023}>2023</div>
      </div>
      {!props.hide?.img && <div className={classes.img}></div>}
      <div className={classes.footer}>
        <div className={classes.tagsAndLinks}>
          <div className={classes.tags}>
            {!props.hide?.tag && (
              <Tag
                className={classes.tag2}
                text={{
                  tag: <div className={classes.tag}>HTML</div>,
                }}
              />
            )}
            {!props.hide?.tag2 && (
              <Tag
                className={classes.tag4}
                text={{
                  tag: <div className={classes.tag3}>Tailwind</div>,
                }}
              />
            )}
            <Tag
              className={classes.tag6}
              text={{
                tag: <div className={classes.tag5}>TypeScript</div>,
              }}
            />
            <Tag
              className={classes.tag8}
              text={{
                tag: props.text?.tag || <div className={classes.tag7}>Next.js</div>,
              }}
            />
          </div>
          <div className={classes.links}>{props.swap?.links || <LinksIcon className={classes.icon} />}</div>
        </div>
        {props.text?.digitalAgencyIsALandingPageBui != null ? (
          props.text?.digitalAgencyIsALandingPageBui
        ) : (
          <div className={classes.digitalAgencyIsALandingPageBui}>
            Digital agency is a landing page built with the latest version of next.js using best practices.
          </div>
        )}
      </div>
    </div>
  );
});
