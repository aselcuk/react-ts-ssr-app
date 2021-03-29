import * as React from 'react';

function SvgSearch(props) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

const MemoSvgSearch = React.memo(SvgSearch);
export default MemoSvgSearch;
