import React from 'react';
import '@components/text/text.scss';

export default function Text({ children, ...props }) {
  return (
    <span className="text-container" {...props}>{children}</span>
  )
}
