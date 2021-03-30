import ClassNames from 'classnames';
import { HTMLElementProps } from '@core';
import React, { ElementType } from 'react';
import '@components/button/button.scss';

type IButtonProps<T extends ElementType<unknown>> = HTMLElementProps<T> & {
  primary?: boolean;
  secondary?: boolean;
  withBadge?: boolean;
}

export default function Button({ children, primary, secondary, withBadge, ...props }: IButtonProps<'button'>) {
  return (
    <button
      {...props}
      className={ClassNames('button', {
        'button-primary': primary,
        'button-secondary': secondary,
        'button-withBadge': withBadge
      })}
    >
      {children}
    </button>
  );
}
