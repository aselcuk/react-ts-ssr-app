import { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType } from 'react';

export type HTMLElementProps<T extends ElementType<unknown>> = ComponentPropsWithoutRef<T> & {
    customStyle?: Array<string>;
}

export type HTMLElementPropsWithRef<T extends ElementType<unknown>> = ComponentPropsWithRef<T> & {
    customStyle?: Array<string>;
}

// componentin root elemanı forwardRef ile kullanılacaksa bu interface ile kullanılmalıdır.
export type IComponentWithRef<T extends ElementType<unknown>> = React.ForwardRefExoticComponent<HTMLElementPropsWithRef<T>>