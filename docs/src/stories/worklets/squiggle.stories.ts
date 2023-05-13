import 'css-paint-polyfill'
import 'shiraha-worklets'

import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const Squiggle: StoryObj = {
  render: () => html`
    <style>
      hr {
        border: 0;
        height: 8px;
        background: paint(shiraha-squiggle);
      }
      main > hr:nth-child(3) {
        height: 16px;
      }
      main > hr:last-child {
        height: 32px;
      }
    </style>
    <main>
      <hr />
      <br />
      <hr />
      <br />
      <hr />
    </main>
  `,
}

export default {
  title: 'worklets/Squiggle',
} as Meta
