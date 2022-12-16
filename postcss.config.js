// parser
import sugarss from 'sugarss'
// plugins
import postcssImport from 'postcss-import'
import postcssImportExtGlob from 'postcss-import-ext-glob'
import postcssMixins from 'postcss-mixins'
import postcssJitProps from 'postcss-jit-props'
import postcssLightningCSS from 'postcss-lightningcss'
import combineSelectors from 'postcss-combine-duplicated-selectors'
import combineMediaQuery from 'postcss-combine-media-query'
// open-props
import OpenProps from 'open-props'

export const vite = {
  parser: sugarss,
  plugins: [
    postcssImport(),
    postcssImportExtGlob(),
    postcssMixins(),
    postcssJitProps(OpenProps),
    combineSelectors(),
    combineMediaQuery(),
    postcssLightningCSS({
      browsers: 'defaults and supports css-cascade-layers',
      lightningcssOptions: {
        drafts: {
          nesting: true,
          customMedia: true,
        },
      },
    }),
  ],
}

export default ({ env, file }) => ({
  parser: file.extname === '.sss' ? sugarss : false,
  plugins: [
    postcssImport(),
    postcssImportExtGlob(),
    postcssMixins(),
    postcssJitProps(OpenProps),
    combineSelectors(),
    combineMediaQuery(),
    postcssLightningCSS({
      browsers: 'defaults and supports css-cascade-layers',
      lightningcssOptions: {
        minify: env === 'production' ? true : false,
        drafts: {
          nesting: true,
          customMedia: true,
        },
      },
    }),
  ],
})
