import * as React from 'react';
import classNames from 'classnames';
import { extractMarginProps, withMargin, withBreakpoints } from '../helpers';

import type { MarginProps, Color, ButtonRadius, Responsive } from '../helpers';

type BaseButtonElement = React.ElementRef<'button'>;
interface BaseButtonProps
  extends Omit<React.ComponentPropsWithoutRef<'button'>, 'color'>,
    MarginProps {
  size?: Responsive<'1' | '2' | '3'>;
  variant?:
    | 'surface'
    | 'surface-mono'
    | 'solid'
    | 'solid-mono'
    | 'subtle'
    | 'subtle-mono'
    | 'outline'
    | 'outline-mono'
    | 'ghost'
    | 'ghost-mono';
  color?: Color;
  radius?: ButtonRadius;
}
const BaseButton = React.forwardRef<BaseButtonElement, BaseButtonProps>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    size = '2',
    variant = 'solid',
    color,
    radius,
    ...baseButtonProps
  } = marginRest;

  return (
    <button
      data-color-scale={color}
      data-button-radius={radius}
      {...baseButtonProps}
      ref={forwardedRef}
      className={classNames(
        'reset-button',
        'rui-BaseButton',
        withBreakpoints(size, 'size'),
        `variant-${variant}`,
        withMargin(marginProps),
        className
      )}
    />
  );
});
BaseButton.displayName = 'BaseButton';

export { BaseButton };
