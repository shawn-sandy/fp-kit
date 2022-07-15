const repoUrl = 'https://github.com/shawn-sandy/fp-kit' // TODO: Update.
const editPath = `${repoUrl}/tree/develop/first-paint/www/`
const editMsg = '📝 Edit on GitHub'

window.$docsify = {
  name: 'First Paint', // TODO: Update.
  repo: repoUrl,
  auto2top: true,
  topMargin: 90, // default: 0
  search: {
    placeholder: 'Search',
    noData: 'No results found.',
    depth: 3,
    keys: ['title', 'subtitle', 'path']
  },
  coverpage: true,
  onlyCover: true,
  loadSidebar: true,
  executeScript: true,
  subMaxLevel: 2,
  notFoundPage: '404.md',
  logo: 'https://res.cloudinary.com/dqjs95c7n/image/upload/v1647385126/fp-text-logo-sm_efd59g.svg',
  themeColor: '#008000', // TODO: Set your own color.
  copyCode: {
    buttonText: 'Copy',
    errorText: 'Error',
    successText: 'Copied'
  },
  remoteMarkdown: {
    tag: 'remoteMarkdownUrl'
  },
  pagination: {
    previousText: 'Previous',
    nextText: 'Next',
    crossChapter: true,
    crossChapterText: true
  },
  toc: {
    scope: '.markdown-section',
    headings: 'h1, h2, h3',
    title: 'On This Page'
  },
  // eslint-disable-next-line no-undef
  plugins: [
    // eslint-disable-next-line no-undef
    EditOnGithubPlugin.create(editPath, null, editMsg),
    function (hook, vm) {
      // console.log(vm?.config.repo, vm)
      hook.beforeEach(function (html) {
        const path = window.location.hash
        const title = encodeURIComponent(
          `[Issue: ${path}]`
        )
        const body = encodeURIComponent(
          `<!-- Please describe related issue(s) here! --> \n [${path}](${window.location.href}${path})`
        )
        const issue = [
          '<div class="new-git-issue" style="text-align: right">',
          `<p><a role="button" style="--link-bg: lightgray; --btn-rds: 99rem" href="${vm?.config?.repo}/issues/new/?title=${title}&body=${body}" target="_blank" style="--btn-rds: var(--btn-pill)">Open a github issue</a>.</p>`,
          '</div>'
        ].join('')

        return html + issue
      })
    }
  ]
}

// eslint-disable-next-line no-unused-vars
function imgError (event) {
  console.log(
    'Image loading error' + event.currentTarget.src
  )
  event.currentTarget.src =
    'https://via.placeholder.com/800'
}

// open dialog

// eslint-disable-next-line no-unused-vars
function openDialog (target, elm) {
  //console.log(target, elm)
  document.querySelector(target).showModal()
}

// eslint-disable-next-line no-unused-vars
function closeDialog (elm) {
  elm.closest('dialog').close()
}
