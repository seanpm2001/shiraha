import type { Preview } from '@storybook/web-components'

import 'material-symbols/outlined.css'
import 'shiraha/src/shiraha.sss'
import 'shiraha/src/themes/baseline-tone-based.sss'
// import 'shiraha/src/themes/yuki.sss'

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['stories', 'components', 'typography', 'templates']
      }
    },
    html: {
      root: '#root-inner',
      removeComments: true,
    },
  },
} as Preview