var repoUrl =
        'https://github.com/shawn-sandy/fp-kit' // TODO: Update.
      var editPath = repoUrl + '/tree/main/www/'
      var editMsg = '📝 Edit on GitHub'

      window.$docsify = {
        name: 'First Paint', // TODO: Update.
        repo: repoUrl,
        auto2top: true,
        search: {
          placeholder: 'Search',
          noData: 'No results found.',
          depth: 2,
          keys: ['title', 'subtitle', 'path'],
          paths: ['/']
        },
        coverpage: true,
        loadSidebar: true,
        subMaxLevel: 3,
        logo: 'https://res.cloudinary.com/dqjs95c7n/image/upload/v1644774792/fp-brand-rgb-sm_v1rtjz.svg',
        themeColor: '#001524', // TODO: Set your own color.
        copyCode: {
          buttonText: 'Copy to clipboard',
          errorText: 'Error',
          successText: 'Copied'
        },
        toc: {
          scope: '.markdown-section',
          headings: 'h1, h2, h3, h4, h5, h6',
          title: 'Table of Contents'
        },
        onlyCover: true,
        plugins: [EditOnGithubPlugin.create(editPath, null, editMsg)]
      }
