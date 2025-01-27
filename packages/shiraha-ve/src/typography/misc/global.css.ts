import { type ComplexStyleRule, globalStyle } from '@vanilla-extract/css'
import OP from 'open-props'

import { vars } from '../../vars.css'

globalStyle('abbr:where([title])', { textDecoration: 'underline dotted' })

globalStyle(':where(b, strong)', { fontWeight: OP.fontWeight7 })

globalStyle(':where(mark)', {
  backgroundColor: vars.color.tertiaryContainer,
  color: vars.color.onTertiaryContainer,
})

globalStyle(':where(small)', { fontSize: '80%' })

const subsup = {
  fontSize: '75%',
  lineHeight: 0,
  position: 'relative',
  verticalAlign: 'baseline',
} as const satisfies ComplexStyleRule

globalStyle(':where(sub)', {
  ...subsup,
  bottom: '-0.25em',
})

globalStyle(':where(sup)', {
  ...subsup,
  top: '-0.25em',
})
