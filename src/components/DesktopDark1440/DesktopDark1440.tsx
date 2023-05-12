import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AkarIconsNextjsFillIcon } from './AkarIconsNextjsFillIcon.js';
import { BxlCss3Icon } from './BxlCss3Icon.js';
import { BxlJavascriptIcon } from './BxlJavascriptIcon.js';
import { BxlNodejsIcon } from './BxlNodejsIcon.js';
import { BxlReactIcon } from './BxlReactIcon.js';
import { BxlTypescriptIcon } from './BxlTypescriptIcon.js';
import { Card_Hover } from './Card_Hover/Card_Hover';
import classes from './DesktopDark1440.module.css';
import { LinksIcon2 } from './LinksIcon2.js';
import { LinksIcon3 } from './LinksIcon3.js';
import { LinksIcon } from './LinksIcon.js';
import { Navbar } from './Navbar/Navbar';
import { NavbarActionsIcon2 } from './NavbarActionsIcon2.js';
import { NavbarActionsIcon } from './NavbarActionsIcon.js';
import { RiHtml5FillIcon } from './RiHtml5FillIcon.js';
import { SimpleIconsExpressIcon } from './SimpleIconsExpressIcon.js';

interface Props {
  className?: string;
  hide?: {
    logo?: boolean;
    navbarLinks?: boolean;
    img?: boolean;
    tag?: boolean;
    tag2?: boolean;
    img2?: boolean;
    tag3?: boolean;
    tag4?: boolean;
    img3?: boolean;
    tag5?: boolean;
    tag6?: boolean;
  };
}
/* @figmaId 113:67 */
export const DesktopDark1440: FC<Props> = memo(function DesktopDark1440(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.header}>
        <Navbar
          className={classes.darkNavbar}
          swap={{
            navbarActions: <NavbarActionsIcon className={classes.icon} />,
          }}
          hide={{
            logo: true,
            navbarLinks: true,
          }}
          text={{
            bluedev: <div className={classes.bluedev}>SB0</div>,
          }}
        />
      </div>
      <div className={classes.hero}>
        <div className={classes.sB0}>SB0</div>
        <div className={classes.sB0LTDIsAForwardThinkingTechno}>
          SB0 LTD is a forward-thinking technology company specializing in the development and application of
          cutting-edge artificial intelligence solutions. With a focus on innovation and excellence, they are committed
          to pushing the boundaries of AI technology to drive growth and transformation across various industries.
        </div>
        <div className={classes.technologies}>
          <div className={classes.tech}>
            <div className={classes.riHtml5Fill}>
              <RiHtml5FillIcon className={classes.icon5} />
            </div>
            <div className={classes.hTML}>HTML</div>
          </div>
          <div className={classes.tech2}>
            <div className={classes.bxlCss3}>
              <BxlCss3Icon className={classes.icon6} />
            </div>
            <div className={classes.cSS}>CSS</div>
          </div>
          <div className={classes.tech3}>
            <div className={classes.bxlJavascript}>
              <BxlJavascriptIcon className={classes.icon7} />
            </div>
            <div className={classes.javaScript}>JavaScript</div>
          </div>
          <div className={classes.tech4}>
            <div className={classes.bxlTypescript}>
              <BxlTypescriptIcon className={classes.icon8} />
            </div>
            <div className={classes.typeScript}>TypeScript</div>
          </div>
          <div className={classes.tech5}>
            <div className={classes.bxlReact}>
              <BxlReactIcon className={classes.icon9} />
            </div>
            <div className={classes.react}>React</div>
          </div>
          <div className={classes.tech6}>
            <div className={classes.akarIconsNextjsFill}>
              <AkarIconsNextjsFillIcon className={classes.icon10} />
            </div>
            <div className={classes.nextjs}>Nextjs</div>
          </div>
          <div className={classes.tech7}>
            <div className={classes.bxlNodejs}>
              <BxlNodejsIcon className={classes.icon11} />
            </div>
            <div className={classes.nodejs}>Nodejs</div>
          </div>
          <div className={classes.tech8}>
            <div className={classes.simpleIconsExpress}>
              <SimpleIconsExpressIcon className={classes.icon12} />
            </div>
            <div className={classes.express}>Express</div>
          </div>
        </div>
      </div>
      <div className={classes.work}>
        <div className={classes.container}>
          <div className={classes.ourLatestWork}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>our latest </span>
              <span className={classes.label2}>work</span>
            </p>
          </div>
          <div className={classes.spaceBetween}>
            <Card_Hover
              className={classes.card}
              swap={{
                links: <LinksIcon className={classes.icon2} />,
              }}
              hide={{
                img: true,
                tag: true,
                tag2: true,
              }}
              text={{
                digitalAgency: <div className={classes.digitalAgency}>ArXiv - ChatGPT Plugin</div>,
                tag: <div className={classes.tag}>Node.js</div>,
                digitalAgencyIsALandingPageBui: (
                  <div className={classes.digitalAgencyIsALandingPageBui}>
                    Plugin for searching academic papers on arXiv.org. You can search for papers based on a query.
                  </div>
                ),
              }}
            />
            <div className={classes.brandLogoPrimary1}></div>
          </div>
          <div className={classes.spaceBetween2}>
            <Card_Hover
              className={classes.card2}
              swap={{
                links: <LinksIcon2 className={classes.icon3} />,
              }}
              hide={{
                img: true,
                tag: true,
                tag2: true,
              }}
              text={{
                digitalAgency: <div className={classes.digitalAgency2}>Wikipedia - ChatGPT Plugin</div>,
                tag: <div className={classes.tag2}>Node.js</div>,
                digitalAgencyIsALandingPageBui: (
                  <div className={classes.digitalAgencyIsALandingPageBui2}>
                    Plugin for searching articles on Wikipedia. You can search for articles based on a query.
                  </div>
                ),
              }}
            />
            <div className={classes.wikipediaLogoV21}></div>
          </div>
          <div className={classes.spaceBetween3}>
            <Card_Hover
              className={classes.card3}
              swap={{
                links: <LinksIcon3 className={classes.icon4} />,
              }}
              hide={{
                img: true,
                tag: true,
                tag2: true,
              }}
              text={{
                digitalAgency: <div className={classes.digitalAgency3}>Coincap - ChatGPT Plugin</div>,
                tag: <div className={classes.tag3}>Node.js</div>,
                digitalAgencyIsALandingPageBui: (
                  <div className={classes.digitalAgencyIsALandingPageBui3}>
                    Plugin for retrieving cryptocurrency information from the CoinCap API.
                  </div>
                ),
              }}
            />
            <div className={classes._512x512bb1}></div>
          </div>
        </div>
      </div>
      <div className={classes.contact}>
        <div className={classes.container2}>
          <div className={classes.content}>
            <div className={classes.readyToStartYourNextProjectGet}>
              <div className={classes.textBlock}>Ready to start your next project?</div>
              <div className={classes.textBlock2}>
                <p className={classes.labelWrapper2}>
                  <span className={classes.label3}>Get in touch me!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.container3}>
          <div className={classes.footer2}>
            <div className={classes.footerLeft}>
              <div className={classes.sB02}>SB0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
