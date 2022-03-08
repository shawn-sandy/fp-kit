const markdown = require("@shawnsandy/marked")

const CleanCSS = require("clean-css")

module.exports = function (eleventyConfig) {
  // css-min filter
  eleventyConfig.addFilter("cssmin", (code) => {
    return new CleanCSS({}).minify(code).styles
  })

  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    open: true
  })

  eleventyConfig.addPassthroughCopy("./src/*.css", "./dist")
  eleventyConfig.addPassthroughCopy(
    "./src/v21/css/**/*.css",
    "./dist"
  )
  eleventyConfig.addPassthroughCopy("./src/css", "./dist")
  eleventyConfig.addPassthroughCopy("./src/img", "./dist")
  eleventyConfig.addPassthroughCopy("./src/js", "./dist")

  eleventyConfig.addPlugin(markdown)

  eleventyConfig.setQuietMode(true)

  eleventyConfig.addPlugin(
    require("@shawnsandy/code-clipper")
  )

  // add  paired shortcodes
  eleventyConfig.addPairedShortcode(
    "looper",
    function (content) {
      for (let i = 1; i < 10; i++) {
        /* do something here */

        console.log(1)
      }
    }
  )

  eleventyConfig.addPairedShortcode(
    "highlight",
    (content, lang = "html") => {
      return `<div class="shj-lang-${lang}">${content}</div>`
    }
  )

  return {
    dir: {
      input: "./src",
      includes: "/_includes",
      data: "/_data",
      output: "./dist"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
    // pathPrefix: "/"
  }
}
