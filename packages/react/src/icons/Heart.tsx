import * as React from 'react';
import type { IconProps } from '../types';

export const Heart = React.forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12 20.5 4.5 13A5 5 0 1 1 12 6.5a5 5 0 1 1 7.5 6.5Z"/>
    </svg>
  )
);

Heart.displayName = 'Heart';
