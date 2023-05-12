import { memo, SVGProps } from 'react';

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_503_2626)'>
      <path
        d='M0.571429 0V6.27409C0.571429 6.6692 0.607801 7.05538 0.677221 7.42916L6.1552 7.42905C8.07305 7.42905 9.77516 8.39895 10.8409 9.89709C11.5683 8.89055 12 7.63525 12 6.27409V6.13704C12 2.74765 9.38319 0 6.1552 0H0.571429Z'
        fill='#111827'
      />
      <path
        d='M5.71429 9H9.53674e-07V15C9.53674e-07 18.3137 2.55837 21 5.71429 21C8.8702 21 11.4286 18.3137 11.4286 15C11.4286 11.6863 8.8702 9 5.71429 9Z'
        fill='#111827'
      />
    </g>
    <defs>
      <clipPath id='clip0_503_2626'>
        <rect width={12} height={21} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(LogoIcon);
export { Memo as LogoIcon };
