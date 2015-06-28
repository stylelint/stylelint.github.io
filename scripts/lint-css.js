import fs from "fs"
import glob from "glob"
import postcss from "postcss"
import reporter from "postcss-reporter"
import stylelint from "stylelint"
import stylelintConfigSuitcss from "stylelint-config-suitcss"

const files = glob.sync(process.env.npm_package_config_src, "utf8")

files.forEach(function (file) {
  let css = fs.readFileSync(file, "utf-8")

  postcss([
    stylelint(stylelintConfigSuitcss),
    reporter(),
   ])
  .process(css, { from: file })
  .then()
  .catch(err => console.error(err.stack))
})
