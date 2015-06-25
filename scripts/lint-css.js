import fs from "fs"
import glob from "glob"
import reporter from "postcss-reporter"
import postcss from "postcss"
import stylelint from "stylelint"

const files = glob.sync(process.env.npm_package_config_src, "utf8")

files.forEach(function (file) {
  let css = fs.readFileSync(file, "utf-8")

  postcss([
    stylelint({
      "rules": {
        "at-rule-empty-line-before": [ 2, "always", {
          except: ["blockless-group"]
        } ],
        "at-rule-no-vendor-prefix": 2,
        "block-closing-brace-newline-after": [ 2, "always" ],
        "block-closing-brace-newline-before": [ 2, "always-multi-line" ],
        "block-closing-brace-space-before": [ 2, "always-single-line" ],
        "block-no-empty": 2,
        "block-opening-brace-newline-after": [ 2, "always-multi-line" ],
        "block-opening-brace-space-after": [ 2, "always-single-line" ],
        "block-opening-brace-space-before": [ 2, "always" ],
        "color-no-invalid-hex": 2,
        "comment-empty-line-before": [ 2, "always" ],
        "declaration-bang-space-after": [ 2, "never" ],
        "declaration-bang-space-before": [ 2, "always" ],
        "declaration-block-semicolon-newline-after": [ 2, "always-multi-line" ],
        "declaration-block-semicolon-space-after": [ 2, "always-single-line" ],
        "declaration-block-semicolon-space-before": [ 2, "never" ],
        "declaration-colon-space-after": [ 2, "always" ],
        "declaration-colon-space-before": [ 2, "never" ],
        "function-calc-no-unspaced-operator": 2,
        "function-comma-space-after": [ 2, "always" ],
        "function-comma-space-before": [ 2, "never" ],
        "function-parentheses-space-inside": [ 2, "never" ],
        "function-space-after": [ 2, "always" ],
        "function-token-no-space": 2,
        "function-url-quotes": [ 2, "double" ],
        "indentation": [ 2, 2 ],
        "media-feature-colon-space-after": [ 2, "always" ],
        "media-feature-colon-space-before": [ 2, "never" ],
        "media-feature-range-operator-space-after": [ 2, "always" ],
        "media-feature-range-operator-space-before": [ 2, "always" ],
        "media-query-list-comma-space-after": [ 2, "always" ],
        "media-query-list-comma-space-before": [ 2, "never" ],
        "media-query-parentheses-space-inside": [ 2, "never" ],
        "no-eol-whitespace": 2,
        "no-missing-eof-newline": 2,
        "no-multiple-empty-lines": 2,
        "number-leading-zero": [ 2, "always" ],
        "number-no-trailing-zeros": 2,
        "number-zero-length-no-unit": 2,
        "property-no-vendor-prefix": 2,
        "root-no-standard-properties": 2,
        "rule-nested-empty-line-before": [ 2, "always-multi-line", {
          except: ["first-nested"]
        } ],
        "rule-non-nested-empty-line-before": [ 2, "always-multi-line" ],
        "rule-properties-order": [2, "alphabetical"],
        "rule-trailing-semicolon": [ 2, "always" ],
        "selector-combinator-space-after": [ 2, "always" ],
        "selector-combinator-space-before": [ 2, "always" ],
        "selector-delimiter-newline-after": [ 2, "always" ],
        "selector-delimiter-space-before": [ 2, "never" ],
        "selector-no-vendor-prefix": 2,
        "selector-pseudo-element-colon-notation": [ 2, "double" ],
        "selector-root-no-composition": 2,
        "string-quotes": [ 2, "double" ],
        "value-list-comma-newline-after": [ 2, "always-multi-line" ],
        "value-list-comma-space-after": [ 2, "always-single-line" ],
        "value-list-comma-space-before": [ 2, "never" ],
        "value-no-vendor-prefix": 2,
      },
    }),
    reporter(),
   ])
  .process(css, { from: file })
  .then()
  .catch(err => console.error(err.stack))
})
