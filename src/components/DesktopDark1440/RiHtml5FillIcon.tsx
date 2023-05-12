import { memo, SVGProps } from 'react';

const RiHtml5FillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.47692 10.7367L9.24892 9.98313L9.62272 5.91633H4.69252L4.57012 4.56393H9.74572L9.88192 3.23733H3.07192L3.45352 7.24413H8.14552L7.98892 8.96373L6.47692 9.36393L4.96492 8.96373L4.87012 7.85733H3.50812L3.70552 9.98373L6.47692 10.7367ZM1.07692 1.02993H11.8769L10.9031 11.8299L6.47692 13.0299L2.05072 11.8299L1.07692 1.02993Z'
      fill='#F7F3F3'
    />
  </svg>
);
const Memo = memo(RiHtml5FillIcon);
export { Memo as RiHtml5FillIcon };
