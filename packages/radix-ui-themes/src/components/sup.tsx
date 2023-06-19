import * as React from 'react';
import classNames from 'classnames';

type SupElement = React.ElementRef<'sup'>;
interface SupProps extends React.ComponentPropsWithoutRef<'sup'> {}
const Sup = React.forwardRef<SupElement, SupProps>((props, forwardedRef) => (
  <sup {...props} ref={forwardedRef} className={classNames('rui-Sup', props.className)} />
));
Sup.displayName = 'Sup';

export { Sup };
