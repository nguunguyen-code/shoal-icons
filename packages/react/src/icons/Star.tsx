import * as React from 'react';
import type { IconProps } from '../types';

export const Star = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 3 2.5 6 6.5.5-5 4.3 1.5 6.2-5.5-3.5L6.5 20 8 13.8 3 9.5 9.5 9z"/>
    </svg>
  )
);

Star.displayName = 'Star';
