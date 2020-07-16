import * as React from 'react';
import { getStyleFromPropsAndOptions } from '@fluentui/react-theme-provider';
import { useFocusRects } from '@uifabric/utilities';
import { ComposePreparedOptions } from '@fluentui/react-compose';
import { ButtonProps, ButtonState } from './Button.types';

/**
 * The useButton hook processes the Button component props and returns state.
 * @param props - Button props to derive state from.
 */
export const useButton = (
  props: ButtonProps,
  ref: React.Ref<HTMLElement>,
  options: ComposePreparedOptions,
): ButtonState => {
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  React.useImperativeHandle(props.componentRef, () => ({
    focus: () => buttonRef.current?.focus(),
  }));
  useFocusRects(buttonRef);

  return {
    ...props,
    buttonRef,
    style: getStyleFromPropsAndOptions(props, options, '--button'),
  };
};
