import React from "react";

interface RightArrowProps {
  className?: string;
}

const RightArrow: React.FC<RightArrowProps> = ({ className = "" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={6} height={10} viewBox="0 0 6 10" fill="none" className={className}>
      <path
        d="M5.61053 4.96948C5.61053 5.1604 5.53882 5.32324 5.38987 5.46924L1.08682 9.75366C0.970972 9.8772 0.816504 9.93896 0.639969 9.93896C0.281382 9.93896 2.90871e-05 9.6582 2.90871e-05 9.2876C2.90871e-05 9.10791 0.0717463 8.94507 0.193114 8.82153L4.07137 4.96948L0.193114 1.11743C0.0717463 0.988281 2.90871e-05 0.825439 2.90871e-05 0.645752C2.90871e-05 0.280762 0.281382 0 0.639969 0C0.816504 0 0.970972 0.0617676 1.08682 0.185303L5.38987 4.46973C5.53882 4.61572 5.60502 4.77856 5.61053 4.96948Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RightArrow;
