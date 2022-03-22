window.$docsify.push = function (hook) {
  const footer = [
    '<footer>',
    '<span><a href="https://github.com/QingWei-Li">cinwell</a> &copy;2017.</span>',
    '<span>Proudly published with <a href="https://github.com/docsifyjs/docsify" target="_blank">docsify</a>.</span>',
    '</footer>'
  ].join('')

  hook.afterEach(function (html) {
    return html + footer
  })
}
