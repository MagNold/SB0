import { memo, SVGProps } from 'react';

const BxlCss3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.5 2.00002H11.9998L11.045 12.7816L6.73882 14L2.45618 12.7809L1.5 2.00002ZM10.0451 4.20623L3.45539 4.20488L3.56164 5.51543L8.62428 5.51678L8.4972 6.87506H5.17679L5.29715 8.1614H8.38826L8.20537 9.92314L6.75025 10.3252L5.27294 9.91978L5.17813 8.86475H3.87364L4.01888 10.7926L6.75025 11.6432L9.43657 10.8786L10.0451 4.20623Z'
      fill='#F7F3F3'
    />
  </svg>
);
const Memo = memo(BxlCss3Icon);
export { Memo as BxlCss3Icon };
