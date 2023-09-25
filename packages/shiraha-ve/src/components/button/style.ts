import type { ComplexStyleRule } from '@vanilla-extract/css'

import OP from 'open-props'

import { opacity, state } from '../../utils/color'
import { vars } from '../../vars.css'

export const baseButton = (iconButtonClass: string) => ({
  ':disabled': {
    backgroundColor: opacity(vars.color.onSurface, 12),
    color: opacity(vars.color.onSurface, 38),
    cursor: 'not-allowed',
  },
  'borderRadius': 20,
  'color': vars.color.primary,
  'display': 'inline-flex',
  'gap': 8,
  'height': 40,
  // 'margin': '0.25rem',
  'minWidth': 40,
  'padding': '0.5rem 1.5rem',
  'selectors': {
    '&:active:not(:disabled)': {
      scale: 0.95,
    },
    [`&:has(.${iconButtonClass}:first-child:not(last-child))`]: {
      paddingLeft: 16,
    },
  },
  'textDecoration': 'none',
  'transition': 'ease-in-out 0.1s',
}) as const satisfies ComplexStyleRule

export const elevatedButton = {
  backgroundColor: vars.color.surfaceContainerLow,
  boxShadow: OP.shadow1,
  selectors: {
    '&:active:not(:disabled)': {
      backgroundColor: state(vars.color.primary, 12, vars.color.surfaceContainerLow),
    },
    '&:focus-visible:not(:disabled)': {
      backgroundColor: state(vars.color.primary, 12, vars.color.surfaceContainerLow),
    },
    '&:hover:not(:active, :disabled)': {
      backgroundColor: state(vars.color.primary, 8, vars.color.surfaceContainerLow),
      boxShadow: OP.shadow2,
    },
  },
} as const satisfies ComplexStyleRule

export const filledButton = {
  backgroundColor: vars.color.primary,
  color: vars.color.onPrimary,
  selectors: {
    '&:active:not(:disabled)': {
      backgroundColor: state(vars.color.onPrimary, 12, vars.color.primary),
    },
    '&:focus-visible:not(:disabled)': {
      backgroundColor: state(vars.color.onPrimary, 12, vars.color.primary),
    },
    '&:hover:not(:active, :disabled)': {
      backgroundColor: state(vars.color.onPrimary, 8, vars.color.primary),
      boxShadow: OP.shadow1,
    },
  },
} as const satisfies ComplexStyleRule

export const outlinedButton = {
  borderColor: vars.color.outline,
  borderWidth: 1,
  selectors: {
    '&:active:not(:disabled)': {
      backgroundColor: opacity(vars.color.primary, 12),
    },
    '&:focus-visible:not(:disabled)': {
      backgroundColor: opacity(vars.color.primary, 12),
      borderColor: vars.color.primary,
    },
    '&:hover:not(:active, :disabled)': {
      backgroundColor: opacity(vars.color.primary, 8),
    },
  },
} as const satisfies ComplexStyleRule

export const textButton = (iconButtonClass: string) => ({
  ':disabled': {
    backgroundColor: 'transparent',
    color: opacity(vars.color.onSurface, 38),
  },
  'padding': '0.5rem 0.75rem',
  'selectors': {
    '&:active:not(:disabled)': {
      backgroundColor: opacity(vars.color.primary, 12),
    },
    '&:focus-visible:not(:disabled)': {
      backgroundColor: opacity(vars.color.primary, 12),
      borderColor: vars.color.primary,
    },
    '&:hover:not(:active, :disabled)': {
      backgroundColor: opacity(vars.color.primary, 8),
    },
    [`&:has(.${iconButtonClass}:first-child:not(last-child))`]: {
      paddingLeft: 12,
      paddingRight: 16,
    },
  },
}) as const satisfies ComplexStyleRule

export const tonalButton = {
  backgroundColor: vars.color.secondaryContainer,
  color: vars.color.onSecondaryContainer,
  selectors: {
    '&:active:not(:disabled)': {
      backgroundColor: state(vars.color.onSecondaryContainer, 12, vars.color.secondaryContainer),
    },
    '&:focus-visible:not(:disabled)': {
      backgroundColor: state(vars.color.onSecondaryContainer, 12, vars.color.secondaryContainer),
    },
    '&:hover:not(:active, :disabled)': {
      backgroundColor: state(vars.color.onSecondaryContainer, 8, vars.color.secondaryContainer),
      boxShadow: OP.shadow1,
    },
  },
} satisfies ComplexStyleRule
