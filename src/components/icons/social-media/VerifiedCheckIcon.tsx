import type { SVGProps } from 'react';

const VerifiedCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" role="img" aria-label="Verified">
    {/* Badge: circle in light lime green */}
    <circle cx="12" cy="12" r="10" fill="#A3E635" />
    {/* Black checkmark inside */}
    <path
      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
      fill="#000"
    />
  </svg>
);

export { VerifiedCheckIcon };
