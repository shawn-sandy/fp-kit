window.exclude = []
window.watch = false
window.environment = 'release'
window.localMode = 'build'

window.appConfig = {
  showDebugger: false,
  showExperimentalFeatures: false,
  workspaces: [
    {
      id: 'local',
      label: 'local',
      projectGraphUrl: 'project-graph.json',
      taskGraphUrl: 'task-graph.json',
    },
  ],
  defaultWorkspaceId: 'local',
}
window.projectGraphResponse = {
  hash: '3ff77d0d36c70814074cdad4b2c8c013ba6b6b4c53b931a67b2ab9ad69a828a4',
  projects: [
    {
      name: '@shawnsandy/fp-datatable',
      type: 'lib',
      data: {
        root: 'components/react/fp-datatable',
        sourceRoot: 'components/react/fp-datatable',
        name: '@shawnsandy/fp-datatable',
        projectType: 'library',
        targets: {
          test: {
            executor: 'nx:run-script',
            options: { script: 'test' },
            configurations: {},
          },
          build: {
            executor: 'nx:run-script',
            options: { script: 'build' },
            configurations: {},
          },
          'nx-release-publish': {
            dependsOn: ['^nx-release-publish'],
            executor: '@nx/js:release-publish',
            options: {},
            configurations: {},
          },
        },
        implicitDependencies: [],
        tags: [],
      },
    },
    {
      name: '@fpkit/types',
      type: 'lib',
      data: {
        root: 'libs/types/fp-types',
        sourceRoot: 'libs/types/fp-types',
        name: '@fpkit/types',
        projectType: 'library',
        targets: {
          dev: {
            executor: 'nx:run-script',
            options: { script: 'dev' },
            configurations: {},
          },
          build: {
            executor: 'nx:run-script',
            options: { script: 'build' },
            configurations: {},
          },
          preview: {
            executor: 'nx:run-script',
            options: { script: 'preview' },
            configurations: {},
          },
          preconstruct: {
            executor: 'nx:run-script',
            options: { script: 'preconstruct' },
            configurations: {},
          },
          'preconstruct:fix': {
            executor: 'nx:run-script',
            options: { script: 'preconstruct:fix' },
            configurations: {},
          },
          'nx-release-publish': {
            dependsOn: ['^nx-release-publish'],
            executor: '@nx/js:release-publish',
            options: {},
            configurations: {},
          },
        },
        implicitDependencies: [],
        tags: [],
      },
    },
    {
      name: '@fpkit/shared',
      type: 'lib',
      data: {
        root: 'libs/types/shared',
        sourceRoot: 'libs/types/shared',
        name: '@fpkit/shared',
        projectType: 'library',
        targets: {
          test: {
            executor: 'nx:run-script',
            options: { script: 'test' },
            configurations: {},
          },
          build: {
            executor: 'nx:run-script',
            options: { script: 'build' },
            configurations: {},
          },
          'nx-release-publish': {
            dependsOn: ['^nx-release-publish'],
            executor: '@nx/js:release-publish',
            options: {},
            configurations: {},
          },
        },
        implicitDependencies: [],
        tags: [],
      },
    },
    {
      name: '@fpkit/react',
      type: 'lib',
      data: {
        root: 'libs/react/fpkit',
        sourceRoot: 'libs/react/fpkit',
        name: '@fpkit/react',
        projectType: 'library',
        targets: {
          start: {
            executor: 'nx:run-script',
            options: { script: 'start' },
            configurations: {},
          },
          dev: {
            executor: 'nx:run-script',
            options: { script: 'dev' },
            configurations: {},
          },
          build: {
            executor: 'nx:run-script',
            options: { script: 'build' },
            configurations: {},
          },
          package: {
            executor: 'nx:run-script',
            options: { script: 'package' },
            configurations: {},
          },
          'package:watch': {
            executor: 'nx:run-script',
            options: { script: 'package:watch' },
            configurations: {},
          },
          'build::css': {
            executor: 'nx:run-script',
            options: { script: 'build::css' },
            configurations: {},
          },
          preview: {
            executor: 'nx:run-script',
            options: { script: 'preview' },
            configurations: {},
          },
          'build:sass': {
            executor: 'nx:run-script',
            options: { script: 'build:sass' },
            configurations: {},
          },
          'sass:build': {
            executor: 'nx:run-script',
            options: { script: 'sass:build' },
            configurations: {},
          },
          'sass:watch': {
            executor: 'nx:run-script',
            options: { script: 'sass:watch' },
            configurations: {},
          },
          sass: {
            executor: 'nx:run-script',
            options: { script: 'sass' },
            configurations: {},
          },
          test: {
            executor: 'nx:run-script',
            options: { script: 'test' },
            configurations: {},
          },
          'test:ui': {
            executor: 'nx:run-script',
            options: { script: 'test:ui' },
            configurations: {},
          },
          'test:coverage': {
            executor: 'nx:run-script',
            options: { script: 'test:coverage' },
            configurations: {},
          },
          'test:ui:coverage': {
            executor: 'nx:run-script',
            options: { script: 'test:ui:coverage' },
            configurations: {},
          },
          'test:snapshot': {
            executor: 'nx:run-script',
            options: { script: 'test:snapshot' },
            configurations: {},
          },
          release: {
            executor: 'nx:run-script',
            options: { script: 'release' },
            configurations: {},
          },
          'nx-release-publish': {
            dependsOn: ['^nx-release-publish'],
            executor: '@nx/js:release-publish',
            options: {},
            configurations: {},
          },
        },
        implicitDependencies: [],
        tags: [],
      },
    },
    {
      name: '@shawnsandy/first-paint',
      type: 'lib',
      data: {
        root: 'first-paint',
        sourceRoot: 'first-paint',
        name: '@shawnsandy/first-paint',
        projectType: 'library',
        targets: {
          start: {
            executor: 'nx:run-script',
            options: { script: 'start' },
            configurations: {},
          },
          serve: {
            executor: 'nx:run-script',
            options: { script: 'serve' },
            configurations: {},
          },
          watch: {
            executor: 'nx:run-script',
            options: { script: 'watch' },
            configurations: {},
          },
          docs: {
            executor: 'nx:run-script',
            options: { script: 'docs' },
            configurations: {},
          },
          '11ty': {
            executor: 'nx:run-script',
            options: { script: '11ty' },
            configurations: {},
          },
          '11ty-prod': {
            executor: 'nx:run-script',
            options: { script: '11ty-prod' },
            configurations: {},
          },
          build: {
            executor: 'nx:run-script',
            options: { script: 'build' },
            configurations: {},
          },
          package: {
            executor: 'nx:run-script',
            options: { script: 'package' },
            configurations: {},
          },
          'watch:docs': {
            executor: 'nx:run-script',
            options: { script: 'watch:docs' },
            configurations: {},
          },
          'watch-index': {
            executor: 'nx:run-script',
            options: { script: 'watch-index' },
            configurations: {},
          },
          'watch:v3': {
            executor: 'nx:run-script',
            options: { script: 'watch:v3' },
            configurations: {},
          },
          'build:v3': {
            executor: 'nx:run-script',
            options: { script: 'build:v3' },
            configurations: {},
          },
          'build-v3': {
            executor: 'nx:run-script',
            options: { script: 'build-v3' },
            configurations: {},
          },
          'watch:build-v3': {
            executor: 'nx:run-script',
            options: { script: 'watch:build-v3' },
            configurations: {},
          },
          'build-v3-index': {
            executor: 'nx:run-script',
            options: { script: 'build-v3-index' },
            configurations: {},
          },
          'watch-components': {
            executor: 'nx:run-script',
            options: { script: 'watch-components' },
            configurations: {},
          },
          'watch-scss': {
            executor: 'nx:run-script',
            options: { script: 'watch-scss' },
            configurations: {},
          },
          'build-css': {
            executor: 'nx:run-script',
            options: { script: 'build-css' },
            configurations: {},
          },
          test: {
            executor: 'nx:run-script',
            options: { script: 'test' },
            configurations: {},
          },
          production: {
            executor: 'nx:run-script',
            options: { script: 'production' },
            configurations: {},
          },
          clean: {
            executor: 'nx:run-script',
            options: { script: 'clean' },
            configurations: {},
          },
          'clean:dist': {
            executor: 'nx:run-script',
            options: { script: 'clean:dist' },
            configurations: {},
          },
          'release-next': {
            executor: 'nx:run-script',
            options: { script: 'release-next' },
            configurations: {},
          },
          release: {
            executor: 'nx:run-script',
            options: { script: 'release' },
            configurations: {},
          },
          pack: {
            executor: 'nx:run-script',
            options: { script: 'pack' },
            configurations: {},
          },
          'nx-release-publish': {
            dependsOn: ['^nx-release-publish'],
            executor: '@nx/js:release-publish',
            options: {},
            configurations: {},
          },
        },
        implicitDependencies: [],
        tags: [],
      },
    },
  ],
  dependencies: {
    '@shawnsandy/fp-datatable': [],
    '@fpkit/types': [],
    '@fpkit/shared': [],
    '@fpkit/react': [
      {
        source: '@fpkit/react',
        target: '@shawnsandy/first-paint',
        type: 'static',
      },
    ],
    '@shawnsandy/first-paint': [],
  },
  fileMap: {
    '@fpkit/react': [
      { file: 'libs/react/fpkit/.gitignore', hash: '15696141883691724301' },
      { file: 'libs/react/fpkit/CHANGELOG.md', hash: '8490555064887987233' },
      { file: 'libs/react/fpkit/README.md', hash: '13875746985017146603' },
      { file: 'libs/react/fpkit/index.html', hash: '6138325931540313280' },
      {
        file: 'libs/react/fpkit/package-lock.json',
        hash: '683860796248622612',
      },
      {
        file: 'libs/react/fpkit/package.json',
        hash: '18093973999165122568',
        deps: [
          'npm:focus-trap',
          'npm:react',
          'npm:react-dom',
          '@shawnsandy/first-paint',
          'npm:@testing-library/jest-dom',
          'npm:@testing-library/react',
          'npm:@testing-library/user-event',
          'npm:@total-typescript/ts-reset',
          'npm:@types/react',
          'npm:@types/react-dom',
          'npm:@vitejs/plugin-react',
          'npm:autoprefixer',
          'npm:jsdom',
          'npm:npm-run-all',
          'npm:postcss',
          'npm:react-test-renderer',
          'npm:sass',
          'npm:typescript',
          'npm:vite',
        ],
      },
      { file: 'libs/react/fpkit/reset.d.ts', hash: '4647421727375577292' },
      { file: 'libs/react/fpkit/src/App.css', hash: '16345029064838901209' },
      { file: 'libs/react/fpkit/src/App.tsx', hash: '5494476431882799829' },
      {
        file: 'libs/react/fpkit/src/__snapshots__/App.test.tsx.snap',
        hash: '13455985103072467724',
      },
      {
        file: 'libs/react/fpkit/src/components/.gitkeep',
        hash: '3244421341483603138',
      },
      {
        file: 'libs/react/fpkit/src/components/__snapshots__/fp.test.tsx.snap',
        hash: '14331307656814554380',
      },
      {
        file: 'libs/react/fpkit/src/components/badge/badge.scss',
        hash: '8538041084139313926',
      },
      {
        file: 'libs/react/fpkit/src/components/badge/fp-badge.stories.tsx',
        hash: '8727656249274609531',
      },
      {
        file: 'libs/react/fpkit/src/components/badge/fp-badge.test.tsx',
        hash: '16751851272194148099',
      },
      {
        file: 'libs/react/fpkit/src/components/badge/fp-badge.tsx',
        hash: '907171085404088558',
      },
      {
        file: 'libs/react/fpkit/src/components/breadcrumbs/bc-item.tsx',
        hash: '5095950697236053299',
      },
      {
        file: 'libs/react/fpkit/src/components/breadcrumbs/breadcrumb.tsx',
        hash: '12505103324976565911',
      },
      {
        file: 'libs/react/fpkit/src/components/buttons/button.scss',
        hash: '4845044493063632792',
      },
      {
        file: 'libs/react/fpkit/src/components/buttons/button.stories.tsx',
        hash: '11496490132655387178',
      },
      {
        file: 'libs/react/fpkit/src/components/buttons/button.test.tsx',
        hash: '5313508063156220525',
      },
      {
        file: 'libs/react/fpkit/src/components/buttons/button.tsx',
        hash: '2468198982973768027',
      },
      {
        file: 'libs/react/fpkit/src/components/cards/card.scss',
        hash: '18353745226506739525',
      },
      {
        file: 'libs/react/fpkit/src/components/cards/card.stories.tsx',
        hash: '18051885592152523145',
      },
      {
        file: 'libs/react/fpkit/src/components/cards/card.test.tsx',
        hash: '4858336926778404445',
      },
      {
        file: 'libs/react/fpkit/src/components/cards/card.tsx',
        hash: '13868623378563308933',
      },
      {
        file: 'libs/react/fpkit/src/components/details/details.scss',
        hash: '13790152747711839309',
      },
      {
        file: 'libs/react/fpkit/src/components/details/details.stories.tsx',
        hash: '1758241371141352315',
      },
      {
        file: 'libs/react/fpkit/src/components/details/details.tsx',
        hash: '17328946725275998147',
      },
      {
        file: 'libs/react/fpkit/src/components/dropdowns/dropdown-details.tsx',
        hash: '16511495588245933926',
      },
      {
        file: 'libs/react/fpkit/src/components/dropdowns/dropdown-summary.tsx',
        hash: '6589297692115252905',
      },
      {
        file: 'libs/react/fpkit/src/components/dropdowns/dropdown.scss',
        hash: '2271466440843345955',
      },
      {
        file: 'libs/react/fpkit/src/components/dropdowns/dropdown.stories.tsx',
        hash: '15017060491668207719',
      },
      {
        file: 'libs/react/fpkit/src/components/dropdowns/dropdown.test.tsx',
        hash: '6754863816777422631',
      },
      {
        file: 'libs/react/fpkit/src/components/dropdowns/dropdown.tsx',
        hash: '6751916319852838547',
      },
      {
        file: 'libs/react/fpkit/src/components/form/fields.tsx',
        hash: '11312807534005356836',
      },
      {
        file: 'libs/react/fpkit/src/components/form/inputs.test.tsx',
        hash: '18154144691274885542',
      },
      {
        file: 'libs/react/fpkit/src/components/form/inputs.tsx',
        hash: '13029983425698222557',
      },
      {
        file: 'libs/react/fpkit/src/components/form/select.tsx',
        hash: '14501304614030359268',
      },
      {
        file: 'libs/react/fpkit/src/components/form/textarea.tsx',
        hash: '3521215682579693280',
      },
      {
        file: 'libs/react/fpkit/src/components/fp.test.tsx',
        hash: '3562604812307801155',
      },
      {
        file: 'libs/react/fpkit/src/components/fp.tsx',
        hash: '9819508651639047141',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/add.tsx',
        hash: '9517311096559230495',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/arrow-down.tsx',
        hash: '18232755579074378522',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/arrow-left.tsx',
        hash: '7363280629330895498',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/arrow-right.tsx',
        hash: '11544294978273225422',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/arrow-up.tsx',
        hash: '7908269685534832336',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/chat.tsx',
        hash: '5743934192490055057',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/code.tsx',
        hash: '7197049662579156842',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/copy.tsx',
        hash: '7326312807884088744',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/down.tsx',
        hash: '15719287983409864407',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/home.tsx',
        hash: '7001276078205003245',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/left.tsx',
        hash: '5078789870947799000',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/minus.tsx',
        hash: '8379211015818994026',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/remove.tsx',
        hash: '150013980168425702',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/right.tsx',
        hash: '4008792281578354308',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/star.tsx',
        hash: '36877359035697192',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/svg.tsx',
        hash: '5729421189566025287',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/up.tsx',
        hash: '6206498493713159575',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/components/user.tsx',
        hash: '4042714095755926992',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/icon.scss',
        hash: '12422682435651882021',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/icon.stories.tsx',
        hash: '1928965045305220307',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/icon.tsx',
        hash: '7243327488769491767',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/index.ts',
        hash: '13476826856066633731',
      },
      {
        file: 'libs/react/fpkit/src/components/icons/types.ts',
        hash: '6539353630602867980',
      },
      {
        file: 'libs/react/fpkit/src/components/images/img.scss',
        hash: '12876064200413037094',
      },
      {
        file: 'libs/react/fpkit/src/components/images/img.stories.tsx',
        hash: '6218142070017580424',
      },
      {
        file: 'libs/react/fpkit/src/components/images/img.test.tsx',
        hash: '16880549818709059774',
      },
      {
        file: 'libs/react/fpkit/src/components/images/img.tsx',
        hash: '6204795793106682482',
      },
      {
        file: 'libs/react/fpkit/src/components/images/place-holder.png',
        hash: '5138583210014946559',
      },
      {
        file: 'libs/react/fpkit/src/components/kit.tsx',
        hash: '15449707658428850228',
      },
      {
        file: 'libs/react/fpkit/src/components/layout/footer.stories.tsx',
        hash: '20816854107131664',
      },
      {
        file: 'libs/react/fpkit/src/components/layout/landmarks.stories.tsx',
        hash: '4560455188838805372',
      },
      {
        file: 'libs/react/fpkit/src/components/layout/landmarks.tsx',
        hash: '10554684679752215503',
      },
      {
        file: 'libs/react/fpkit/src/components/layout/main.stories.tsx',
        hash: '1396597972331087939',
      },
      {
        file: 'libs/react/fpkit/src/components/link/link.scss',
        hash: '7681333521833765965',
      },
      {
        file: 'libs/react/fpkit/src/components/link/link.stories.tsx',
        hash: '5417652907044222967',
      },
      {
        file: 'libs/react/fpkit/src/components/link/link.tsx',
        hash: '198519424529178318',
      },
      {
        file: 'libs/react/fpkit/src/components/list/list.stories.tsx',
        hash: '16262757926998481174',
      },
      {
        file: 'libs/react/fpkit/src/components/list/list.tsx',
        hash: '3598793841386446710',
      },
      {
        file: 'libs/react/fpkit/src/components/modal/dialog.tsx',
        hash: '1418033297880951219',
      },
      {
        file: 'libs/react/fpkit/src/components/modal/modal.tsx',
        hash: '9146269558326478076',
      },
      {
        file: 'libs/react/fpkit/src/components/nav/nav-items.tsx',
        hash: '8341521164830543736',
      },
      {
        file: 'libs/react/fpkit/src/components/nav/nav.tsx',
        hash: '17639299244658497788',
      },
      {
        file: 'libs/react/fpkit/src/components/popover/popover.stories.tsx',
        hash: '17172955072159908482',
      },
      {
        file: 'libs/react/fpkit/src/components/popover/popover.test.tsx',
        hash: '14346955641550185199',
      },
      {
        file: 'libs/react/fpkit/src/components/popover/popover.tsx',
        hash: '16645811125263160309',
      },
      {
        file: 'libs/react/fpkit/src/components/progress/progress.scss',
        hash: '5986136659674318440',
      },
      {
        file: 'libs/react/fpkit/src/components/progress/progress.stories.tsx',
        hash: '521938186650766803',
      },
      {
        file: 'libs/react/fpkit/src/components/progress/progress.tsx',
        hash: '9633176059472759127',
      },
      {
        file: 'libs/react/fpkit/src/components/readme.stories.mdx',
        hash: '11175072946505826417',
      },
      {
        file: 'libs/react/fpkit/src/components/styles/index.css',
        hash: '4518189769403576036',
      },
      {
        file: 'libs/react/fpkit/src/components/styles/index.css.map',
        hash: '18020323798305386912',
      },
      {
        file: 'libs/react/fpkit/src/components/tables/table-elements.tsx',
        hash: '13226522556616136959',
      },
      {
        file: 'libs/react/fpkit/src/components/tables/table.tsx',
        hash: '15788096339583381181',
      },
      {
        file: 'libs/react/fpkit/src/components/text/text.tsx',
        hash: '17486967071209016750',
      },
      { file: 'libs/react/fpkit/src/favicon.svg', hash: '5570214330692728248' },
      {
        file: 'libs/react/fpkit/src/hooks/popover/__snapshots__/popover.test.tsx.snap',
        hash: '11734136474132866354',
      },
      {
        file: 'libs/react/fpkit/src/hooks/popover/popover.tsx',
        hash: '353805501902833465',
      },
      {
        file: 'libs/react/fpkit/src/hooks/popover/use-popover.tsx',
        hash: '16881767159364150468',
      },
      { file: 'libs/react/fpkit/src/hooks.ts', hash: '10077927201650832624' },
      { file: 'libs/react/fpkit/src/icons.ts', hash: '6114196860567539418' },
      { file: 'libs/react/fpkit/src/index.css', hash: '14056909652331273425' },
      { file: 'libs/react/fpkit/src/index.scss', hash: '12751169488431731320' },
      { file: 'libs/react/fpkit/src/index.ts', hash: '15721163700443962809' },
      { file: 'libs/react/fpkit/src/logo.svg', hash: '13356318757395577552' },
      { file: 'libs/react/fpkit/src/main.tsx', hash: '4819627354499536568' },
      {
        file: 'libs/react/fpkit/src/patterns/.gitkeep',
        hash: '3244421341483603138',
      },
      {
        file: 'libs/react/fpkit/src/patterns/page/page-header.stories.tsx',
        hash: '1067595250307075582',
      },
      {
        file: 'libs/react/fpkit/src/patterns/page/page-header.tsx',
        hash: '16888089572960312482',
      },
      {
        file: 'libs/react/fpkit/src/sass/_globals.scss',
        hash: '3926514966117220481',
      },
      {
        file: 'libs/react/fpkit/src/sass/_reset.scss',
        hash: '9254132400707792044',
      },
      {
        file: 'libs/react/fpkit/src/setupTest.ts',
        hash: '18244793749264894043',
      },
      {
        file: 'libs/react/fpkit/src/styles/badge/badge.css',
        hash: '9104548346873822587',
      },
      {
        file: 'libs/react/fpkit/src/styles/badge/badge.css.map',
        hash: '15751389572898714835',
      },
      {
        file: 'libs/react/fpkit/src/styles/buttons/button.css',
        hash: '14166908605674140231',
      },
      {
        file: 'libs/react/fpkit/src/styles/buttons/button.css.map',
        hash: '6391816642683519710',
      },
      {
        file: 'libs/react/fpkit/src/styles/cards/card.css',
        hash: '541975470383873227',
      },
      {
        file: 'libs/react/fpkit/src/styles/cards/card.css.map',
        hash: '839961270768664954',
      },
      {
        file: 'libs/react/fpkit/src/styles/details/details.css',
        hash: '2181571428002509989',
      },
      {
        file: 'libs/react/fpkit/src/styles/details/details.css.map',
        hash: '7811364119122154530',
      },
      {
        file: 'libs/react/fpkit/src/styles/dropdowns/dropdown.css',
        hash: '8586878811384009205',
      },
      {
        file: 'libs/react/fpkit/src/styles/dropdowns/dropdown.css.map',
        hash: '10896315893550868272',
      },
      {
        file: 'libs/react/fpkit/src/styles/form/style.css.map',
        hash: '7458703792687117334',
      },
      {
        file: 'libs/react/fpkit/src/styles/icons/icon.css',
        hash: '10075782556705360033',
      },
      {
        file: 'libs/react/fpkit/src/styles/icons/icon.css.map',
        hash: '16149686485459754334',
      },
      {
        file: 'libs/react/fpkit/src/styles/images/img.css',
        hash: '12959527897721191149',
      },
      {
        file: 'libs/react/fpkit/src/styles/images/img.css.map',
        hash: '13220086399703977645',
      },
      {
        file: 'libs/react/fpkit/src/styles/index.css',
        hash: '13729631822949271698',
      },
      {
        file: 'libs/react/fpkit/src/styles/index.css.map',
        hash: '13863213942984317985',
      },
      {
        file: 'libs/react/fpkit/src/styles/link/link.css',
        hash: '4349734526758853310',
      },
      {
        file: 'libs/react/fpkit/src/styles/link/link.css.map',
        hash: '16669556851880932965',
      },
      {
        file: 'libs/react/fpkit/src/styles/progress/progress.css',
        hash: '3853179627595591620',
      },
      {
        file: 'libs/react/fpkit/src/styles/progress/progress.css.map',
        hash: '16396879873672297495',
      },
      {
        file: 'libs/react/fpkit/src/styles/progress/sass/progress.css.map',
        hash: '7117246180187973395',
      },
      {
        file: 'libs/react/fpkit/src/styles/styles/index.css',
        hash: '10551087786420077390',
      },
      {
        file: 'libs/react/fpkit/src/styles/styles/index.css.map',
        hash: '8185274428795197772',
      },
      {
        file: 'libs/react/fpkit/src/test/setup.ts',
        hash: '7581470949647846645',
      },
      {
        file: 'libs/react/fpkit/src/types/component-props.ts',
        hash: '11224476502799633192',
      },
      {
        file: 'libs/react/fpkit/src/types/index.ts',
        hash: '16253150879306989884',
      },
      {
        file: 'libs/react/fpkit/src/types/input-props.ts',
        hash: '927607067957295129',
      },
      {
        file: 'libs/react/fpkit/src/types/shared.ts',
        hash: '9380202420706439202',
      },
      {
        file: 'libs/react/fpkit/src/vite-env.d.ts',
        hash: '12946363841406869089',
      },
      { file: 'libs/react/fpkit/tsconfig.json', hash: '10033230355031120763' },
      {
        file: 'libs/react/fpkit/tsconfig.node.json',
        hash: '2641887316940618802',
      },
      { file: 'libs/react/fpkit/tsup.config.cjs', hash: '2570123003543283000' },
      { file: 'libs/react/fpkit/vite.config.ts', hash: '10475853105148362539' },
      {
        file: 'libs/react/fpkit/vite.package.config.ts',
        hash: '7460498394083439681',
      },
      {
        file: 'libs/react/fpkit/vitest.config.js',
        hash: '11818914968430832620',
      },
      {
        file: 'libs/react/fpkit/src/components/layout/landmarks.scss',
        hash: '10750348598122949651',
      },
      {
        file: 'libs/react/fpkit/src/styles/layout/landmarks.css.map',
        hash: '6137587137102291941',
      },
      {
        file: 'libs/react/fpkit/src/styles/layout/landmarks.css',
        hash: '3898550914777083943',
      },
    ],
    '@shawnsandy/first-paint': [
      { file: 'first-paint/.eleventy.js', hash: '18300962255421907504' },
      { file: 'first-paint/.eleventyignore', hash: '8082900827049287900' },
      { file: 'first-paint/.nojekyll', hash: '3244421341483603138' },
      { file: 'first-paint/.posthtmlrc.js', hash: '1934505729740956961' },
      { file: 'first-paint/.sassrc', hash: '17406602150340826324' },
      { file: 'first-paint/.x-postcssrc', hash: '3272115040317998998' },
      { file: 'first-paint/CHANGELOG.md', hash: '11952955184591204284' },
      { file: 'first-paint/README.md', hash: '17962759415454185791' },
      { file: 'first-paint/ROADMAP.md', hash: '13131373860770182451' },
      { file: 'first-paint/build/v2/index.css', hash: '2706946518572011235' },
      {
        file: 'first-paint/build/v2/modules/banners.css',
        hash: '3680742151739870802',
      },
      {
        file: 'first-paint/build/v2/modules/buttons.css',
        hash: '7937062852985806299',
      },
      {
        file: 'first-paint/build/v2/modules/elements.css',
        hash: '1580129722269915568',
      },
      {
        file: 'first-paint/build/v2/modules/flex-grid.css',
        hash: '6965446971405470417',
      },
      {
        file: 'first-paint/build/v2/modules/footer.css',
        hash: '3848688862771360736',
      },
      {
        file: 'first-paint/build/v2/modules/form.css',
        hash: '4348320327383068820',
      },
      {
        file: 'first-paint/build/v2/modules/header.css',
        hash: '3244421341483603138',
      },
      {
        file: 'first-paint/build/v2/modules/img.css',
        hash: '12514300822979210555',
      },
      {
        file: 'first-paint/build/v2/modules/layout.css',
        hash: '2858636819725748320',
      },
      {
        file: 'first-paint/build/v2/modules/main.css',
        hash: '16506555652784968202',
      },
      {
        file: 'first-paint/build/v2/modules/nav.css',
        hash: '6590476451706386384',
      },
      {
        file: 'first-paint/build/v2/modules/page.css',
        hash: '17144699899083252046',
      },
      {
        file: 'first-paint/build/v2/modules/table.css',
        hash: '8232539703861130561',
      },
      {
        file: 'first-paint/build/v2/modules/type.css',
        hash: '1559166963135514215',
      },
      {
        file: 'first-paint/build/v2/modules/utilities/responsive.css',
        hash: '5363082150763289342',
      },
      {
        file: 'first-paint/build/v2/tokens/attributes.css',
        hash: '3244421341483603138',
      },
      {
        file: 'first-paint/build/v2/tokens/banner.css',
        hash: '3244421341483603138',
      },
      {
        file: 'first-paint/build/v2/tokens/footer.css',
        hash: '3244421341483603138',
      },
      {
        file: 'first-paint/build/v2/tokens/index.css',
        hash: '4882976441426756389',
      },
      { file: 'first-paint/favicon.png', hash: '14031112899349425140' },
      { file: 'first-paint/favicon.svg', hash: '16265794078393554688' },
      { file: 'first-paint/index.js', hash: '4503421068576381327' },
      { file: 'first-paint/package-lock.json', hash: '13756736856510000892' },
      {
        file: 'first-paint/package.json',
        hash: '2779205959381081412',
        deps: [
          'npm:@total-typescript/ts-reset',
          'npm:autoprefixer',
          'npm:clean-css',
          'npm:cssnano',
          'npm:npm-run-all',
          'npm:postcss',
          'npm:postcss-import',
          'npm:rimraf',
          'npm:sass',
          'npm:trash-cli',
        ],
      },
      { file: 'first-paint/postcss.config.js', hash: '12488138292532238565' },
      { file: 'first-paint/src/COMPONENTS.md', hash: '8329412365640668154' },
      { file: 'first-paint/src/components.css', hash: '1420346872944129484' },
      { file: 'first-paint/src/components.scss', hash: '2190217685916039455' },
      {
        file: 'first-paint/src/comps/button/01.html',
        hash: '1020248033192906399',
      },
      {
        file: 'first-paint/src/comps/button/02.html',
        hash: '12627833157130715653',
      },
      {
        file: 'first-paint/src/comps/button/button.json',
        hash: '912091676565630477',
      },
      {
        file: 'first-paint/src/comps/buttons.html',
        hash: '5025753129268409426',
      },
      { file: 'first-paint/src/comps/comps.json', hash: '7145548241830389350' },
      { file: 'first-paint/src/comps/footer.md', hash: '3659593308707310879' },
      {
        file: 'first-paint/src/comps/grid-list.html',
        hash: '10931030690050557701',
      },
      { file: 'first-paint/src/comps/grid.html', hash: '14868174583696883587' },
      { file: 'first-paint/src/comps/img.html', hash: '741549916336998914' },
      { file: 'first-paint/src/comps/index.html', hash: '1618417061423247889' },
      { file: 'first-paint/src/comps/size.html', hash: '3413407488165491675' },
      {
        file: 'first-paint/src/comps/table.html',
        hash: '12110492044488225019',
      },
      { file: 'first-paint/src/comps/type.html', hash: '9693079214807647110' },
      { file: 'first-paint/src/cover.html', hash: '13909316105349730464' },
      {
        file: 'first-paint/src/custom-styles.css',
        hash: '3139282065583139046',
      },
      {
        file: 'first-paint/src/custom-styles.scss',
        hash: '3053207492211108118',
      },
      { file: 'first-paint/src/dashboard.html', hash: '2391364507058581494' },
      {
        file: 'first-paint/src/elements/elements.scss',
        hash: '14199250140890066833',
      },
      { file: 'first-paint/src/img/fp-css.svg', hash: '3344017401273505328' },
      { file: 'first-paint/src/img/fp-icon.png', hash: '6967998992759939418' },
      { file: 'first-paint/src/img/fp-icon.svg', hash: '9770178191835605944' },
      { file: 'first-paint/src/img/fp.svg', hash: '5449483674092948757' },
      { file: 'first-paint/src/index.css', hash: '12509775802866355563' },
      { file: 'first-paint/src/index.css.map', hash: '14634136431295339327' },
      { file: 'first-paint/src/index.html', hash: '18091165566868096282' },
      { file: 'first-paint/src/index.scss', hash: '17882880760955800232' },
      { file: 'first-paint/src/js/scripts.js', hash: '17552727498340889515' },
      { file: 'first-paint/src/v2.html.bk', hash: '4451620486656865989' },
      {
        file: 'first-paint/src/v3/components/breadcrumb.scss',
        hash: '3348390985305960733',
      },
      {
        file: 'first-paint/src/v3/components/button.scss',
        hash: '13325855593349025656',
      },
      {
        file: 'first-paint/src/v3/components/cards.scss',
        hash: '11990219825798394176',
      },
      {
        file: 'first-paint/src/v3/components/checkbox.scss',
        hash: '12713626061264733931',
      },
      {
        file: 'first-paint/src/v3/components/color-names.scss',
        hash: '12485687462794009792',
      },
      {
        file: 'first-paint/src/v3/components/color-scale.scss',
        hash: '1428273263851875060',
      },
      {
        file: 'first-paint/src/v3/components/container.scss',
        hash: '11069477887402357930',
      },
      {
        file: 'first-paint/src/v3/components/content.scss',
        hash: '15818703570275389255',
      },
      {
        file: 'first-paint/src/v3/components/details-summary.scss',
        hash: '1065959371740959084',
      },
      {
        file: 'first-paint/src/v3/components/dialog.scss',
        hash: '9461898456222233359',
      },
      {
        file: 'first-paint/src/v3/components/footer.scss',
        hash: '1862478635903314969',
      },
      {
        file: 'first-paint/src/v3/components/from.scss',
        hash: '168229425294597304',
      },
      {
        file: 'first-paint/src/v3/components/grid.scss',
        hash: '15131073045823653112',
      },
      {
        file: 'first-paint/src/v3/components/header.scss',
        hash: '1449868774598188638',
      },
      {
        file: 'first-paint/src/v3/components/img.scss',
        hash: '16607067338029926198',
      },
      {
        file: 'first-paint/src/v3/components/input.scss',
        hash: '168229425294597304',
      },
      {
        file: 'first-paint/src/v3/components/links.scss',
        hash: '16926964876028851174',
      },
      {
        file: 'first-paint/src/v3/components/list.scss',
        hash: '9658104950171136712',
      },
      {
        file: 'first-paint/src/v3/components/nav.scss',
        hash: '17895577937304437185',
      },
      {
        file: 'first-paint/src/v3/components/radio.scss',
        hash: '6930688182543017177',
      },
      {
        file: 'first-paint/src/v3/components/scrollbar.scss',
        hash: '451728436655195197',
      },
      {
        file: 'first-paint/src/v3/components/select.scss',
        hash: '16861349656781936643',
      },
      {
        file: 'first-paint/src/v3/components/table.scss',
        hash: '15966966630771916411',
      },
      {
        file: 'first-paint/src/v3/components/textarea.scss',
        hash: '14256606235645716026',
      },
      {
        file: 'first-paint/src/v3/components/tooltip.scss',
        hash: '10317202013122853833',
      },
      {
        file: 'first-paint/src/v3/components/type.scss',
        hash: '14984958848725448860',
      },
      {
        file: 'first-paint/src/v3/css/components/breadcrumb.css',
        hash: '559633265426086504',
      },
      {
        file: 'first-paint/src/v3/css/components/breadcrumb.css.map',
        hash: '5681802177483285489',
      },
      {
        file: 'first-paint/src/v3/css/components/button.css',
        hash: '11339381038730155550',
      },
      {
        file: 'first-paint/src/v3/css/components/button.css.map',
        hash: '2017860696991201439',
      },
      {
        file: 'first-paint/src/v3/css/components/cards.css',
        hash: '15915255067166853678',
      },
      {
        file: 'first-paint/src/v3/css/components/cards.css.map',
        hash: '6900008122904576070',
      },
      {
        file: 'first-paint/src/v3/css/components/checkbox.css',
        hash: '4323657352040022155',
      },
      {
        file: 'first-paint/src/v3/css/components/checkbox.css.map',
        hash: '14062315805572648201',
      },
      {
        file: 'first-paint/src/v3/css/components/color-names.css',
        hash: '11514970931635142057',
      },
      {
        file: 'first-paint/src/v3/css/components/color-names.css.map',
        hash: '1663540628593785925',
      },
      {
        file: 'first-paint/src/v3/css/components/color-scale.css',
        hash: '17192940780728035562',
      },
      {
        file: 'first-paint/src/v3/css/components/color-scale.css.map',
        hash: '731755216121845375',
      },
      {
        file: 'first-paint/src/v3/css/components/container.css',
        hash: '10142787470676387768',
      },
      {
        file: 'first-paint/src/v3/css/components/container.css.map',
        hash: '1605810537988060506',
      },
      {
        file: 'first-paint/src/v3/css/components/content.css',
        hash: '14039634616539695649',
      },
      {
        file: 'first-paint/src/v3/css/components/content.css.map',
        hash: '3186967738684306694',
      },
      {
        file: 'first-paint/src/v3/css/components/details-summary.css',
        hash: '689614314340132121',
      },
      {
        file: 'first-paint/src/v3/css/components/details-summary.css.map',
        hash: '754043805716829120',
      },
      {
        file: 'first-paint/src/v3/css/components/dialog.css',
        hash: '14552378122541493325',
      },
      {
        file: 'first-paint/src/v3/css/components/dialog.css.map',
        hash: '16622403105277079163',
      },
      {
        file: 'first-paint/src/v3/css/components/footer.css',
        hash: '13619606928702647114',
      },
      {
        file: 'first-paint/src/v3/css/components/footer.css.map',
        hash: '15491984407435044303',
      },
      {
        file: 'first-paint/src/v3/css/components/from.css',
        hash: '12318374297807643178',
      },
      {
        file: 'first-paint/src/v3/css/components/from.css.map',
        hash: '12170171861140209895',
      },
      {
        file: 'first-paint/src/v3/css/components/grid.css',
        hash: '17174990587410236649',
      },
      {
        file: 'first-paint/src/v3/css/components/grid.css.map',
        hash: '16635918556830230491',
      },
      {
        file: 'first-paint/src/v3/css/components/header.css',
        hash: '2497913517381752206',
      },
      {
        file: 'first-paint/src/v3/css/components/header.css.map',
        hash: '12374274555750088378',
      },
      {
        file: 'first-paint/src/v3/css/components/headings.css',
        hash: '3277668395329235315',
      },
      {
        file: 'first-paint/src/v3/css/components/headings.css.map',
        hash: '11234649790393243019',
      },
      {
        file: 'first-paint/src/v3/css/components/img.css',
        hash: '14078613036372235297',
      },
      {
        file: 'first-paint/src/v3/css/components/img.css.map',
        hash: '3091378801603196813',
      },
      {
        file: 'first-paint/src/v3/css/components/input.css',
        hash: '9305606764763238424',
      },
      {
        file: 'first-paint/src/v3/css/components/input.css.map',
        hash: '7249975214554185447',
      },
      {
        file: 'first-paint/src/v3/css/components/links.css',
        hash: '3787761343411146500',
      },
      {
        file: 'first-paint/src/v3/css/components/links.css.map',
        hash: '6320151817259902630',
      },
      {
        file: 'first-paint/src/v3/css/components/list.css',
        hash: '2801455895963137697',
      },
      {
        file: 'first-paint/src/v3/css/components/list.css.map',
        hash: '11900673544598007340',
      },
      {
        file: 'first-paint/src/v3/css/components/nav.css',
        hash: '9834593593099104322',
      },
      {
        file: 'first-paint/src/v3/css/components/nav.css.map',
        hash: '13279988463237018846',
      },
      {
        file: 'first-paint/src/v3/css/components/radio.css',
        hash: '11589854676568317922',
      },
      {
        file: 'first-paint/src/v3/css/components/radio.css.map',
        hash: '18251750002713133225',
      },
      {
        file: 'first-paint/src/v3/css/components/scrollbar.css',
        hash: '1755603289667439506',
      },
      {
        file: 'first-paint/src/v3/css/components/scrollbar.css.map',
        hash: '1944279345599905010',
      },
      {
        file: 'first-paint/src/v3/css/components/select.css',
        hash: '3576779888493768542',
      },
      {
        file: 'first-paint/src/v3/css/components/select.css.map',
        hash: '14505633064802054153',
      },
      {
        file: 'first-paint/src/v3/css/components/table.css',
        hash: '7368574418765132540',
      },
      {
        file: 'first-paint/src/v3/css/components/table.css.map',
        hash: '18333745040764135065',
      },
      {
        file: 'first-paint/src/v3/css/components/textarea.css',
        hash: '16999794741068737101',
      },
      {
        file: 'first-paint/src/v3/css/components/textarea.css.map',
        hash: '11380354240851115616',
      },
      {
        file: 'first-paint/src/v3/css/components/tooltip.css',
        hash: '307363914445238144',
      },
      {
        file: 'first-paint/src/v3/css/components/tooltip.css.map',
        hash: '1767873864383318000',
      },
      {
        file: 'first-paint/src/v3/css/components/type.css',
        hash: '16020295998698485402',
      },
      {
        file: 'first-paint/src/v3/css/components/type.css.map',
        hash: '3729958220713591220',
      },
      {
        file: 'first-paint/src/v3/css/fp-index.css.map',
        hash: '5475722642638735598',
      },
      {
        file: 'first-paint/src/v3/css/index-min.css',
        hash: '14558107919664698344',
      },
      {
        file: 'first-paint/src/v3/css/index-min.css.map',
        hash: '153320437278633151',
      },
      {
        file: 'first-paint/src/v3/css/index.css',
        hash: '17422928129470464545',
      },
      {
        file: 'first-paint/src/v3/css/index.css.map',
        hash: '6875208687900189695',
      },
      {
        file: 'first-paint/src/v3/css/libs/all.css',
        hash: '10409133485511302578',
      },
      {
        file: 'first-paint/src/v3/css/libs/all.css.map',
        hash: '13947944334186586329',
      },
      {
        file: 'first-paint/src/v3/css/libs/fp-base.css',
        hash: '11024112399073661297',
      },
      {
        file: 'first-paint/src/v3/css/libs/fp-base.css.map',
        hash: '14227878572384976089',
      },
      {
        file: 'first-paint/src/v3/css/libs/fp-components.css',
        hash: '9992475344788166591',
      },
      {
        file: 'first-paint/src/v3/css/libs/fp-components.css.map',
        hash: '3936703003894006678',
      },
      {
        file: 'first-paint/src/v3/css/libs/fp-core.css',
        hash: '103486129961624838',
      },
      {
        file: 'first-paint/src/v3/css/libs/fp-core.css.map',
        hash: '15599174530614147288',
      },
      {
        file: 'first-paint/src/v3/css/libs/fp-extensions.css',
        hash: '17800534537679935372',
      },
      {
        file: 'first-paint/src/v3/css/libs/fp-extensions.css.map',
        hash: '18412939701478623384',
      },
      {
        file: 'first-paint/src/v3/css/libs/fp-index.css',
        hash: '608486713588680795',
      },
      {
        file: 'first-paint/src/v3/css/libs/fp-index.css.map',
        hash: '5950340822524305298',
      },
      {
        file: 'first-paint/src/v3/css/libs/fp-styles-complete.css',
        hash: '6870810971124816325',
      },
      {
        file: 'first-paint/src/v3/css/libs/fp-styles-complete.css.map',
        hash: '4048861268606691993',
      },
      {
        file: 'first-paint/src/v3/css/libs/fp-styles.css',
        hash: '14981836854493394898',
      },
      {
        file: 'first-paint/src/v3/css/libs/fp-styles.css.map',
        hash: '6764449614625938943',
      },
      {
        file: 'first-paint/src/v3/css/libs/utilities.css',
        hash: '12340160427118963156',
      },
      {
        file: 'first-paint/src/v3/css/libs/utilities.css.map',
        hash: '16141719949433423706',
      },
      {
        file: 'first-paint/src/v3/css/modules/global.css',
        hash: '6117926489627486420',
      },
      {
        file: 'first-paint/src/v3/css/modules/global.css.map',
        hash: '17494805487536323009',
      },
      {
        file: 'first-paint/src/v3/css/modules/reset.css',
        hash: '8553639863112605197',
      },
      {
        file: 'first-paint/src/v3/css/modules/reset.css.map',
        hash: '1921804911821473608',
      },
      {
        file: 'first-paint/src/v3/css/styles/all.css.map',
        hash: '1522314190330205627',
      },
      {
        file: 'first-paint/src/v3/css/styles/badge.css',
        hash: '2172332449662766686',
      },
      {
        file: 'first-paint/src/v3/css/styles/badge.css.map',
        hash: '13307076699847143577',
      },
      {
        file: 'first-paint/src/v3/css/styles/breadcrumb.css',
        hash: '18446100114617678921',
      },
      {
        file: 'first-paint/src/v3/css/styles/breadcrumb.css.map',
        hash: '3484658933989745474',
      },
      {
        file: 'first-paint/src/v3/css/styles/button.css',
        hash: '2813741772199596833',
      },
      {
        file: 'first-paint/src/v3/css/styles/button.css.map',
        hash: '1803140617876930341',
      },
      {
        file: 'first-paint/src/v3/css/styles/cards.css',
        hash: '3501758753227423245',
      },
      {
        file: 'first-paint/src/v3/css/styles/cards.css.map',
        hash: '6653492912957890081',
      },
      {
        file: 'first-paint/src/v3/css/styles/checkbox.css',
        hash: '2147295740786043568',
      },
      {
        file: 'first-paint/src/v3/css/styles/checkbox.css.map',
        hash: '13729318194922583203',
      },
      {
        file: 'first-paint/src/v3/css/styles/container.css',
        hash: '4113535587469587017',
      },
      {
        file: 'first-paint/src/v3/css/styles/container.css.map',
        hash: '11465086859571570496',
      },
      {
        file: 'first-paint/src/v3/css/styles/content.css',
        hash: '1746392268877482759',
      },
      {
        file: 'first-paint/src/v3/css/styles/content.css.map',
        hash: '620600873627278996',
      },
      {
        file: 'first-paint/src/v3/css/styles/details-summary.css',
        hash: '1835765939602440429',
      },
      {
        file: 'first-paint/src/v3/css/styles/details-summary.css.map',
        hash: '956837221448304785',
      },
      {
        file: 'first-paint/src/v3/css/styles/dialog.css',
        hash: '11798583171828271989',
      },
      {
        file: 'first-paint/src/v3/css/styles/dialog.css.map',
        hash: '15035451563498355177',
      },
      {
        file: 'first-paint/src/v3/css/styles/docsify.css',
        hash: '17503623597154365581',
      },
      {
        file: 'first-paint/src/v3/css/styles/docsify.css.map',
        hash: '5528361186679579450',
      },
      {
        file: 'first-paint/src/v3/css/styles/fp-core.css.map',
        hash: '11954011291036335785',
      },
      {
        file: 'first-paint/src/v3/css/styles/fp-styles-complete.css.map',
        hash: '16777469019610979949',
      },
      {
        file: 'first-paint/src/v3/css/styles/fp-styles.css.map',
        hash: '8213816261086800857',
      },
      {
        file: 'first-paint/src/v3/css/styles/grid.css',
        hash: '8978743482696155753',
      },
      {
        file: 'first-paint/src/v3/css/styles/grid.css.map',
        hash: '2025578413359877146',
      },
      {
        file: 'first-paint/src/v3/css/styles/header.css',
        hash: '8953628843493578768',
      },
      {
        file: 'first-paint/src/v3/css/styles/header.css.map',
        hash: '11680293896475539286',
      },
      {
        file: 'first-paint/src/v3/css/styles/img.css',
        hash: '13161825712618483851',
      },
      {
        file: 'first-paint/src/v3/css/styles/img.css.map',
        hash: '5204988176347965264',
      },
      {
        file: 'first-paint/src/v3/css/styles/input.css',
        hash: '17379285600154314742',
      },
      {
        file: 'first-paint/src/v3/css/styles/input.css.map',
        hash: '18145427930735662983',
      },
      {
        file: 'first-paint/src/v3/css/styles/layout.css',
        hash: '18194911487247928984',
      },
      {
        file: 'first-paint/src/v3/css/styles/layout.css.map',
        hash: '12066021948144070395',
      },
      {
        file: 'first-paint/src/v3/css/styles/nav.css',
        hash: '15853586287771786808',
      },
      {
        file: 'first-paint/src/v3/css/styles/nav.css.map',
        hash: '10906120657011369105',
      },
      {
        file: 'first-paint/src/v3/css/styles/props.css',
        hash: '12100095561340028008',
      },
      {
        file: 'first-paint/src/v3/css/styles/props.css.map',
        hash: '6885742425491625468',
      },
      {
        file: 'first-paint/src/v3/css/styles/radio.css',
        hash: '16426600195962690369',
      },
      {
        file: 'first-paint/src/v3/css/styles/radio.css.map',
        hash: '7408961526297964032',
      },
      {
        file: 'first-paint/src/v3/css/styles/scrollbar.css',
        hash: '364123008123361454',
      },
      {
        file: 'first-paint/src/v3/css/styles/scrollbar.css.map',
        hash: '16987989684237814052',
      },
      {
        file: 'first-paint/src/v3/css/styles/select.css',
        hash: '353559163031585656',
      },
      {
        file: 'first-paint/src/v3/css/styles/select.css.map',
        hash: '15410804282534994229',
      },
      {
        file: 'first-paint/src/v3/css/styles/table.css',
        hash: '6192419796022012721',
      },
      {
        file: 'first-paint/src/v3/css/styles/table.css.map',
        hash: '9930413789442131195',
      },
      {
        file: 'first-paint/src/v3/css/styles/textarea.css',
        hash: '2171546214970399114',
      },
      {
        file: 'first-paint/src/v3/css/styles/textarea.css.map',
        hash: '2809891382526598836',
      },
      {
        file: 'first-paint/src/v3/css/styles/tooltip.css',
        hash: '3021058762490853022',
      },
      {
        file: 'first-paint/src/v3/css/styles/tooltip.css.map',
        hash: '13596489362418182485',
      },
      {
        file: 'first-paint/src/v3/css/tokens/base.css',
        hash: '13873165238862994952',
      },
      {
        file: 'first-paint/src/v3/css/tokens/base.css.map',
        hash: '10659002214892389893',
      },
      {
        file: 'first-paint/src/v3/css/tokens/colors-scales.css',
        hash: '11427989337274976170',
      },
      {
        file: 'first-paint/src/v3/css/tokens/colors-scales.css.map',
        hash: '2410261421460199979',
      },
      {
        file: 'first-paint/src/v3/css/tokens/colors.css',
        hash: '6325286148755739241',
      },
      {
        file: 'first-paint/src/v3/css/tokens/colors.css.map',
        hash: '16856458187381485457',
      },
      {
        file: 'first-paint/src/v3/css/tokens/errors.css',
        hash: '12946401362085383930',
      },
      {
        file: 'first-paint/src/v3/css/tokens/errors.css.map',
        hash: '6060829662050117672',
      },
      {
        file: 'first-paint/src/v3/css/tokens/first-paint-styles.css',
        hash: '953405716614611258',
      },
      {
        file: 'first-paint/src/v3/css/tokens/first-paint-styles.css.map',
        hash: '15410542021491904534',
      },
      {
        file: 'first-paint/src/v3/css/tokens/first-paint.css',
        hash: '12079357772370009500',
      },
      {
        file: 'first-paint/src/v3/css/tokens/first-paint.css.map',
        hash: '6923650339058819883',
      },
      {
        file: 'first-paint/src/v3/css/tokens/fp-base-palette.css.map',
        hash: '14165686839410523958',
      },
      {
        file: 'first-paint/src/v3/css/tokens/fp-color-palette.css.map',
        hash: '6592105979705689634',
      },
      {
        file: 'first-paint/src/v3/css/tokens/fp-colors.css.map',
        hash: '14853022285301247138',
      },
      {
        file: 'first-paint/src/v3/css/tokens/fp.css',
        hash: '14690129092104512561',
      },
      {
        file: 'first-paint/src/v3/css/tokens/fp.css.map',
        hash: '15174504281978325063',
      },
      {
        file: 'first-paint/src/v3/css/tokens/index.css',
        hash: '17000734109290258293',
      },
      {
        file: 'first-paint/src/v3/css/tokens/index.css.map',
        hash: '1317883926409719914',
      },
      {
        file: 'first-paint/src/v3/css/tokens/main.css',
        hash: '8483476268937118486',
      },
      {
        file: 'first-paint/src/v3/css/tokens/main.css.map',
        hash: '11934406419714497371',
      },
      {
        file: 'first-paint/src/v3/css/tokens/neutral.css',
        hash: '693474029187901277',
      },
      {
        file: 'first-paint/src/v3/css/tokens/neutral.css.map',
        hash: '358683619292187232',
      },
      {
        file: 'first-paint/src/v3/css/tokens/open-color.css.map',
        hash: '11156639744049854819',
      },
      {
        file: 'first-paint/src/v3/css/tokens/palette.css.map',
        hash: '3872405902629866543',
      },
      {
        file: 'first-paint/src/v3/css/tokens/palettes/fp/first-paint-css.css',
        hash: '16366473466125165975',
      },
      {
        file: 'first-paint/src/v3/css/tokens/palettes/fp/first-paint-css.css.map',
        hash: '15778534935666632249',
      },
      {
        file: 'first-paint/src/v3/css/tokens/palettes/fp/first-paint.css',
        hash: '1623280915120580387',
      },
      {
        file: 'first-paint/src/v3/css/tokens/palettes/fp/first-paint.css.map',
        hash: '17564805956687159026',
      },
      {
        file: 'first-paint/src/v3/css/tokens/palettes/fp/index.css',
        hash: '12225696869041399655',
      },
      {
        file: 'first-paint/src/v3/css/tokens/palettes/fp/paint.css',
        hash: '18372797282929968852',
      },
      {
        file: 'first-paint/src/v3/css/tokens/palettes/fp/primary.css',
        hash: '9329757135065556359',
      },
      {
        file: 'first-paint/src/v3/css/tokens/palettes/fp/test.css.map',
        hash: '4662796908901949148',
      },
      {
        file: 'first-paint/src/v3/css/tokens/palettes-css.css',
        hash: '2969525906947284203',
      },
      {
        file: 'first-paint/src/v3/css/tokens/palettes-css.css.map',
        hash: '7876240409361338672',
      },
      {
        file: 'first-paint/src/v3/css/tokens/primary.css',
        hash: '4650757546666457527',
      },
      {
        file: 'first-paint/src/v3/css/tokens/primary.css.map',
        hash: '16327161662928508459',
      },
      {
        file: 'first-paint/src/v3/css/tokens/secondary.css',
        hash: '4897554897820244795',
      },
      {
        file: 'first-paint/src/v3/css/tokens/secondary.css.map',
        hash: '8233524984102028822',
      },
      {
        file: 'first-paint/src/v3/css/tokens/success.css',
        hash: '12858586302792389215',
      },
      {
        file: 'first-paint/src/v3/css/tokens/success.css.map',
        hash: '2373943563117171610',
      },
      {
        file: 'first-paint/src/v3/css/tokens/test-2.css',
        hash: '16418244641765323827',
      },
      {
        file: 'first-paint/src/v3/css/tokens/test-2.css.map',
        hash: '9896036435907107770',
      },
      {
        file: 'first-paint/src/v3/css/tokens/warning.css',
        hash: '11222777973752068778',
      },
      {
        file: 'first-paint/src/v3/css/tokens/warning.css.map',
        hash: '2358844675281350457',
      },
      {
        file: 'first-paint/src/v3/css/utilities/index.css',
        hash: '4924272304409519017',
      },
      {
        file: 'first-paint/src/v3/css/utilities/index.css.map',
        hash: '15158790971201362726',
      },
      { file: 'first-paint/src/v3/index.css', hash: '7513724862952246981' },
      { file: 'first-paint/src/v3/index.css.map', hash: '4521373420364217260' },
      { file: 'first-paint/src/v3/index.scss', hash: '2136338054279404075' },
      { file: 'first-paint/src/v3/libs/all.scss', hash: '3919176216115812045' },
      {
        file: 'first-paint/src/v3/libs/fp-base.scss',
        hash: '11096307089266765924',
      },
      {
        file: 'first-paint/src/v3/libs/fp-components.scss',
        hash: '6230768801807333795',
      },
      {
        file: 'first-paint/src/v3/libs/fp-core.scss',
        hash: '956780643357867486',
      },
      {
        file: 'first-paint/src/v3/libs/fp-extensions.scss',
        hash: '8261835602464148740',
      },
      {
        file: 'first-paint/src/v3/libs/fp-index.scss',
        hash: '7859052833424829640',
      },
      {
        file: 'first-paint/src/v3/libs/fp-styles-complete.scss',
        hash: '7110462054497405656',
      },
      {
        file: 'first-paint/src/v3/libs/fp-styles.scss',
        hash: '11902939417942966556',
      },
      {
        file: 'first-paint/src/v3/libs/utilities.scss',
        hash: '17247477785513511069',
      },
      {
        file: 'first-paint/src/v3/modules/_aside.scss',
        hash: '7099867261953795544',
      },
      {
        file: 'first-paint/src/v3/modules/_badge.scss',
        hash: '7915354389127281797',
      },
      {
        file: 'first-paint/src/v3/modules/_breadcrumb.scss',
        hash: '13844761836803717022',
      },
      {
        file: 'first-paint/src/v3/modules/_button.scss',
        hash: '1847632035543084582',
      },
      {
        file: 'first-paint/src/v3/modules/_cards.scss',
        hash: '15497030428726867038',
      },
      {
        file: 'first-paint/src/v3/modules/_checkbox.scss',
        hash: '6853626112552174845',
      },
      {
        file: 'first-paint/src/v3/modules/_container.scss',
        hash: '4094266600034331758',
      },
      {
        file: 'first-paint/src/v3/modules/_content.scss',
        hash: '17142314737301816877',
      },
      {
        file: 'first-paint/src/v3/modules/_details-summary.scss',
        hash: '11903124276737088765',
      },
      {
        file: 'first-paint/src/v3/modules/_dialog.scss',
        hash: '7190307913813820727',
      },
      {
        file: 'first-paint/src/v3/modules/_footer.scss',
        hash: '4060625534646922875',
      },
      {
        file: 'first-paint/src/v3/modules/_fp.scss',
        hash: '11561727135436065823',
      },
      {
        file: 'first-paint/src/v3/modules/_grid.scss',
        hash: '15470187371636332429',
      },
      {
        file: 'first-paint/src/v3/modules/_header.scss',
        hash: '7525326131353927901',
      },
      {
        file: 'first-paint/src/v3/modules/_img.scss',
        hash: '15070171666361826603',
      },
      {
        file: 'first-paint/src/v3/modules/_input.scss',
        hash: '8074778163396393700',
      },
      {
        file: 'first-paint/src/v3/modules/_layout.scss',
        hash: '8333759477606750681',
      },
      {
        file: 'first-paint/src/v3/modules/_links.scss',
        hash: '1744117009352399798',
      },
      {
        file: 'first-paint/src/v3/modules/_list.scss',
        hash: '12255674930083374525',
      },
      {
        file: 'first-paint/src/v3/modules/_main.scss',
        hash: '10981850303042735337',
      },
      {
        file: 'first-paint/src/v3/modules/_modules.scss',
        hash: '681755523140444110',
      },
      {
        file: 'first-paint/src/v3/modules/_nav.scss',
        hash: '9351379576196602582',
      },
      {
        file: 'first-paint/src/v3/modules/_progress.scss',
        hash: '12635828124565130670',
      },
      {
        file: 'first-paint/src/v3/modules/_props.scss',
        hash: '5105614303514950460',
      },
      {
        file: 'first-paint/src/v3/modules/_radio.scss',
        hash: '6675315081051072224',
      },
      {
        file: 'first-paint/src/v3/modules/_scrollbar.scss',
        hash: '9024833246049040272',
      },
      {
        file: 'first-paint/src/v3/modules/_select.scss',
        hash: '14778444251480748884',
      },
      {
        file: 'first-paint/src/v3/modules/_svg.scss',
        hash: '16311753302903006543',
      },
      {
        file: 'first-paint/src/v3/modules/_table.scss',
        hash: '12417482962224850126',
      },
      {
        file: 'first-paint/src/v3/modules/_textarea.scss',
        hash: '1079962321282539447',
      },
      {
        file: 'first-paint/src/v3/modules/_tooltip.scss',
        hash: '4348745117401019307',
      },
      {
        file: 'first-paint/src/v3/modules/global.scss',
        hash: '10069404449526915578',
      },
      {
        file: 'first-paint/src/v3/modules/layout/_content.scss',
        hash: '3244421341483603138',
      },
      {
        file: 'first-paint/src/v3/modules/reset.scss',
        hash: '11879096945550063888',
      },
      {
        file: 'first-paint/src/v3/styles/badge.scss',
        hash: '17024346546919533757',
      },
      {
        file: 'first-paint/src/v3/styles/breadcrumb.scss',
        hash: '3267841223812717103',
      },
      {
        file: 'first-paint/src/v3/styles/button.scss',
        hash: '11739102853928686205',
      },
      {
        file: 'first-paint/src/v3/styles/cards.scss',
        hash: '1662707590046780626',
      },
      {
        file: 'first-paint/src/v3/styles/checkbox.scss',
        hash: '16507139979258909349',
      },
      {
        file: 'first-paint/src/v3/styles/container.scss',
        hash: '17904569973066711574',
      },
      {
        file: 'first-paint/src/v3/styles/content.scss',
        hash: '2976143548169287336',
      },
      {
        file: 'first-paint/src/v3/styles/details-summary.scss',
        hash: '4533356239141621709',
      },
      {
        file: 'first-paint/src/v3/styles/dialog.scss',
        hash: '10868819739623406086',
      },
      {
        file: 'first-paint/src/v3/styles/docsify.scss',
        hash: '15075715194646953006',
      },
      {
        file: 'first-paint/src/v3/styles/grid.scss',
        hash: '4992190390694600195',
      },
      {
        file: 'first-paint/src/v3/styles/header.scss',
        hash: '1442331542890742530',
      },
      {
        file: 'first-paint/src/v3/styles/img.scss',
        hash: '3134026314145555573',
      },
      {
        file: 'first-paint/src/v3/styles/input.scss',
        hash: '14667572313003021707',
      },
      {
        file: 'first-paint/src/v3/styles/layout.scss',
        hash: '7431147538120308340',
      },
      { file: 'first-paint/src/v3/styles/nav.scss', hash: '10461394222886444' },
      {
        file: 'first-paint/src/v3/styles/props.scss',
        hash: '10023288313212247385',
      },
      {
        file: 'first-paint/src/v3/styles/radio.scss',
        hash: '15682571899272485345',
      },
      {
        file: 'first-paint/src/v3/styles/scrollbar.scss',
        hash: '3248768616899668117',
      },
      {
        file: 'first-paint/src/v3/styles/select.scss',
        hash: '5812907097815641550',
      },
      {
        file: 'first-paint/src/v3/styles/table.scss',
        hash: '13874756019052233535',
      },
      {
        file: 'first-paint/src/v3/styles/textarea.scss',
        hash: '10770138398591690062',
      },
      {
        file: 'first-paint/src/v3/styles/tooltip.scss',
        hash: '13170276897914262473',
      },
      {
        file: 'first-paint/src/v3/tokens/_colors-hsla.scss',
        hash: '10466988945449437789',
      },
      {
        file: 'first-paint/src/v3/tokens/_fp-globals.scss',
        hash: '185279936167259880',
      },
      {
        file: 'first-paint/src/v3/tokens/_layout.scss',
        hash: '8540186651334844909',
      },
      {
        file: 'first-paint/src/v3/tokens/_tokens.scss',
        hash: '17649444364839292309',
      },
      {
        file: 'first-paint/src/v3/tokens/_type.scss',
        hash: '5477848404033633061',
      },
      {
        file: 'first-paint/src/v3/tokens/base.css',
        hash: '10159552778490416112',
      },
      {
        file: 'first-paint/src/v3/tokens/colors-scales.scss',
        hash: '17638879756037467034',
      },
      {
        file: 'first-paint/src/v3/tokens/colors.scss',
        hash: '10362633486626270658',
      },
      {
        file: 'first-paint/src/v3/tokens/errors.css',
        hash: '15691528321883436097',
      },
      {
        file: 'first-paint/src/v3/tokens/first-paint-styles.css',
        hash: '7520852964531168518',
      },
      {
        file: 'first-paint/src/v3/tokens/first-paint.css',
        hash: '13923213246716802732',
      },
      {
        file: 'first-paint/src/v3/tokens/fp.css',
        hash: '15161602487319716752',
      },
      {
        file: 'first-paint/src/v3/tokens/index.scss',
        hash: '10115452001614267550',
      },
      {
        file: 'first-paint/src/v3/tokens/main.css',
        hash: '10255324383750245020',
      },
      {
        file: 'first-paint/src/v3/tokens/neutral.css',
        hash: '17775700029812761501',
      },
      {
        file: 'first-paint/src/v3/tokens/palettes/_fp-color-palette.scss',
        hash: '5112960151142481589',
      },
      {
        file: 'first-paint/src/v3/tokens/palettes/_names.scss',
        hash: '792568217428676625',
      },
      {
        file: 'first-paint/src/v3/tokens/palettes/fp/first-paint-css.css',
        hash: '14142058146528652665',
      },
      {
        file: 'first-paint/src/v3/tokens/palettes/fp/first-paint.css',
        hash: '5776332034502755804',
      },
      {
        file: 'first-paint/src/v3/tokens/palettes-css.css',
        hash: '1349220652341425854',
      },
      {
        file: 'first-paint/src/v3/tokens/primary.css',
        hash: '5224515163754023226',
      },
      {
        file: 'first-paint/src/v3/tokens/secondary.css',
        hash: '2527581613035086051',
      },
      {
        file: 'first-paint/src/v3/tokens/success.css',
        hash: '5597199794563670980',
      },
      {
        file: 'first-paint/src/v3/tokens/test-2.css',
        hash: '7520852964531168518',
      },
      {
        file: 'first-paint/src/v3/tokens/warning.css',
        hash: '194288553658495482',
      },
      {
        file: 'first-paint/src/v3/utilities/_layout.scss',
        hash: '15330313080558887279',
      },
      {
        file: 'first-paint/src/v3/utilities/_variants.scss',
        hash: '13655777575920240240',
      },
      {
        file: 'first-paint/src/v3/utilities/index.scss',
        hash: '3936545014933680859',
      },
      {
        file: 'first-paint/src/v3/utilities/variants/_base.scss',
        hash: '8502893530304389535',
      },
      {
        file: 'first-paint/src/v3/utilities/variants/_fluid.scss',
        hash: '2062608939246999816',
      },
      {
        file: 'first-paint/src/v3/utilities/variants/_palettes.scss',
        hash: '9735777675726536536',
      },
      {
        file: 'first-paint/src/v3/utilities/variants/_styles.scss',
        hash: '6073138027510348147',
      },
      {
        file: 'first-paint/src/v3/utilities/variants/_text.scss',
        hash: '14817022134039683351',
      },
      {
        file: 'first-paint/src/v3/utilities/variants/_themes.scss',
        hash: '18007756440134852396',
      },
      {
        file: 'first-paint/src/v3/vendor/components/button.css',
        hash: '18312925201829116698',
      },
      {
        file: 'first-paint/src/v3/vendor/components/cards.css',
        hash: '13543181665250388316',
      },
      {
        file: 'first-paint/src/v3/vendor/components/checkbox.css',
        hash: '9297007193914065234',
      },
      {
        file: 'first-paint/src/v3/vendor/components/color-names.css',
        hash: '8691879621379764753',
      },
      {
        file: 'first-paint/src/v3/vendor/components/color-scale.css',
        hash: '17638879756037467034',
      },
      {
        file: 'first-paint/src/v3/vendor/components/container.css',
        hash: '15162405732345370624',
      },
      {
        file: 'first-paint/src/v3/vendor/components/details-summary.css',
        hash: '833419520384046825',
      },
      {
        file: 'first-paint/src/v3/vendor/components/dialog.css',
        hash: '13439160594703072499',
      },
      {
        file: 'first-paint/src/v3/vendor/components/grid.css',
        hash: '14555231922678960123',
      },
      {
        file: 'first-paint/src/v3/vendor/components/header.css',
        hash: '5758409746916072679',
      },
      {
        file: 'first-paint/src/v3/vendor/components/img.css',
        hash: '15914402512120305923',
      },
      {
        file: 'first-paint/src/v3/vendor/components/nav.css',
        hash: '11243261753144943920',
      },
      {
        file: 'first-paint/src/v3/vendor/components/table.css',
        hash: '2082550659684425832',
      },
      {
        file: 'first-paint/src/v3/vendor/components/type.css',
        hash: '15111431835715272158',
      },
      {
        file: 'first-paint/src/v3/vendor/fp-index.css',
        hash: '17246580131609588958',
      },
      {
        file: 'first-paint/src/v3/vendor/index-min.css',
        hash: '2200272322777281411',
      },
      {
        file: 'first-paint/src/v3/vendor/index.css',
        hash: '12328372999725812864',
      },
      {
        file: 'first-paint/src/v3/vendor/libs/all.css',
        hash: '16931689561357451765',
      },
      {
        file: 'first-paint/src/v3/vendor/libs/fp-base.css',
        hash: '13049895262224684293',
      },
      {
        file: 'first-paint/src/v3/vendor/libs/fp-components.css',
        hash: '14964306254344878168',
      },
      {
        file: 'first-paint/src/v3/vendor/libs/fp-core.css',
        hash: '15324449858353140621',
      },
      {
        file: 'first-paint/src/v3/vendor/libs/fp-extensions.css',
        hash: '152181055361017840',
      },
      {
        file: 'first-paint/src/v3/vendor/libs/fp-index.css',
        hash: '10443240637559753376',
      },
      {
        file: 'first-paint/src/v3/vendor/libs/fp-styles-complete.css',
        hash: '11321326693972732387',
      },
      {
        file: 'first-paint/src/v3/vendor/libs/fp-styles.css',
        hash: '6641955760245880361',
      },
      {
        file: 'first-paint/src/v3/vendor/libs/utilities.css',
        hash: '4198606393601503152',
      },
      {
        file: 'first-paint/src/v3/vendor/modules/global.css',
        hash: '575414430726743356',
      },
      {
        file: 'first-paint/src/v3/vendor/modules/reset.css',
        hash: '3262324040818350139',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/all.css',
        hash: '8979932683660000505',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/badge.css',
        hash: '14975180741900881278',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/breadcrumb.css',
        hash: '10282018769086774279',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/button.css',
        hash: '6656103412334640968',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/cards.css',
        hash: '12881501753529914550',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/checkbox.css',
        hash: '10241385072488307798',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/container.css',
        hash: '12515912264792523511',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/content.css',
        hash: '15019128312482160119',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/details-summary.css',
        hash: '13010770707656810768',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/dialog.css',
        hash: '7937724055926282924',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/docsify.css',
        hash: '4046989084726654913',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/fp-core.css',
        hash: '1039277540602076938',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/fp-styles-complete.css',
        hash: '4832065680867708706',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/fp-styles.css',
        hash: '2884066176581894725',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/grid.css',
        hash: '6492448285314040339',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/header.css',
        hash: '3700867300258899021',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/img.css',
        hash: '7846548549686966528',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/input.css',
        hash: '11532346154759570753',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/layout.css',
        hash: '7855865469203398636',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/nav.css',
        hash: '622799233817308949',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/props.css',
        hash: '15305307227741793061',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/radio.css',
        hash: '17142558751516681329',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/scrollbar.css',
        hash: '326271994522621163',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/select.css',
        hash: '12753841007487335553',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/table.css',
        hash: '1956973366745742347',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/textarea.css',
        hash: '2529744391395371097',
      },
      {
        file: 'first-paint/src/v3/vendor/styles/tooltip.css',
        hash: '9228029823489398412',
      },
      {
        file: 'first-paint/src/v3/vendor/tokens/colors-scales.css',
        hash: '17638879756037467034',
      },
      {
        file: 'first-paint/src/v3/vendor/tokens/colors.css',
        hash: '8691879621379764753',
      },
      {
        file: 'first-paint/src/v3/vendor/tokens/index.css',
        hash: '14312424125601946563',
      },
      {
        file: 'first-paint/src/v3/vendor/tokens/open-color.css',
        hash: '13000320752403768214',
      },
      { file: 'first-paint/www/.nojekyll', hash: '3244421341483603138' },
      { file: 'first-paint/www/404.md', hash: '14590056380260263811' },
      { file: 'first-paint/www/CHANGELOG.md', hash: '404805249580495726' },
      { file: 'first-paint/www/FEATURES.md', hash: '18145819308975431283' },
      { file: 'first-paint/www/GUIDES.md', hash: '11968161023474336073' },
      { file: 'first-paint/www/README.md', hash: '13844391681211380800' },
      { file: 'first-paint/www/_coverpage.md', hash: '4261780362580370492' },
      { file: 'first-paint/www/_sidebar.md', hash: '2258913087690397807' },
      {
        file: 'first-paint/www/basic-sample.html',
        hash: '1902980283362492064',
      },
      {
        file: 'first-paint/www/components/Badge.md',
        hash: '7393703093355967098',
      },
      {
        file: 'first-paint/www/components/Breadcrumb.md',
        hash: '16761108200983691519',
      },
      {
        file: 'first-paint/www/components/Cards.md',
        hash: '13330677471676440066',
      },
      {
        file: 'first-paint/www/components/Checkbox.md',
        hash: '17537085062312734811',
      },
      {
        file: 'first-paint/www/components/ClassDemo.md',
        hash: '13310615871740281199',
      },
      {
        file: 'first-paint/www/components/Classes.md',
        hash: '14243938394199814564',
      },
      {
        file: 'first-paint/www/components/Content.md',
        hash: '7182437239214537357',
      },
      {
        file: 'first-paint/www/components/DETAILS.md',
        hash: '1627784116682179106',
      },
      {
        file: 'first-paint/www/components/Dialog.md',
        hash: '9882758380876914450',
      },
      {
        file: 'first-paint/www/components/Footer.md',
        hash: '9686898204056643414',
      },
      {
        file: 'first-paint/www/components/Form.md',
        hash: '6226550074586130376',
      },
      {
        file: 'first-paint/www/components/Header.md',
        hash: '6994322262571244729',
      },
      {
        file: 'first-paint/www/components/Headings.md',
        hash: '15678839350046700057',
      },
      {
        file: 'first-paint/www/components/Img.md',
        hash: '5849944284611651887',
      },
      {
        file: 'first-paint/www/components/Input.md',
        hash: '2548070549422699955',
      },
      {
        file: 'first-paint/www/components/Links.md',
        hash: '12114076875096430663',
      },
      {
        file: 'first-paint/www/components/List.md',
        hash: '12594452065077582942',
      },
      {
        file: 'first-paint/www/components/Navbar.md',
        hash: '9019543386206055714',
      },
      {
        file: 'first-paint/www/components/Overview.md',
        hash: '13386272841106085645',
      },
      {
        file: 'first-paint/www/components/Paragraph.md',
        hash: '817212824648051402',
      },
      {
        file: 'first-paint/www/components/Progress.md',
        hash: '7830595227895912250',
      },
      {
        file: 'first-paint/www/components/Radio.md',
        hash: '12238901100096211377',
      },
      {
        file: 'first-paint/www/components/Scrollbar.md',
        hash: '10701972564208428248',
      },
      {
        file: 'first-paint/www/components/Select.md',
        hash: '8992763248195871383',
      },
      {
        file: 'first-paint/www/components/Table.md',
        hash: '18108761226919570471',
      },
      {
        file: 'first-paint/www/components/Textarea.md',
        hash: '14920271329036678876',
      },
      {
        file: 'first-paint/www/components/Tooltip.md',
        hash: '2147633728331127877',
      },
      {
        file: 'first-paint/www/components/button.md',
        hash: '10806602102931716012',
      },
      {
        file: 'first-paint/www/components/grid.md',
        hash: '11836896510317741561',
      },
      { file: 'first-paint/www/config.js', hash: '3916122086293200543' },
      {
        file: 'first-paint/www/css/components/breadcrumb.css',
        hash: '3473577537805893219',
      },
      {
        file: 'first-paint/www/css/components/breadcrumb.css.map',
        hash: '17319641556413605885',
      },
      {
        file: 'first-paint/www/css/components/button.css',
        hash: '16382061587759834359',
      },
      {
        file: 'first-paint/www/css/components/button.css.map',
        hash: '7688006460947142388',
      },
      {
        file: 'first-paint/www/css/components/cards.css',
        hash: '6714215000308743384',
      },
      {
        file: 'first-paint/www/css/components/cards.css.map',
        hash: '14488067731283916564',
      },
      {
        file: 'first-paint/www/css/components/checkbox.css',
        hash: '621216432147943669',
      },
      {
        file: 'first-paint/www/css/components/checkbox.css.map',
        hash: '16639732738971658756',
      },
      {
        file: 'first-paint/www/css/components/color-names.css',
        hash: '7265948844397623069',
      },
      {
        file: 'first-paint/www/css/components/color-names.css.map',
        hash: '15934499225176741260',
      },
      {
        file: 'first-paint/www/css/components/color-scale.css',
        hash: '16776281673735662282',
      },
      {
        file: 'first-paint/www/css/components/color-scale.css.map',
        hash: '15832885880482485035',
      },
      {
        file: 'first-paint/www/css/components/container.css',
        hash: '13151024164984638818',
      },
      {
        file: 'first-paint/www/css/components/container.css.map',
        hash: '933777457965564473',
      },
      {
        file: 'first-paint/www/css/components/content.css',
        hash: '1114452047756842156',
      },
      {
        file: 'first-paint/www/css/components/content.css.map',
        hash: '1403534154402637598',
      },
      {
        file: 'first-paint/www/css/components/details-summary.css',
        hash: '16625817280910942993',
      },
      {
        file: 'first-paint/www/css/components/details-summary.css.map',
        hash: '13515636916863227292',
      },
      {
        file: 'first-paint/www/css/components/dialog.css',
        hash: '4029563911743348433',
      },
      {
        file: 'first-paint/www/css/components/dialog.css.map',
        hash: '5982441820338535355',
      },
      {
        file: 'first-paint/www/css/components/footer.css',
        hash: '3080054361996047935',
      },
      {
        file: 'first-paint/www/css/components/footer.css.map',
        hash: '8328333785047118185',
      },
      {
        file: 'first-paint/www/css/components/from.css',
        hash: '7961783598685046957',
      },
      {
        file: 'first-paint/www/css/components/from.css.map',
        hash: '5941616088334073697',
      },
      {
        file: 'first-paint/www/css/components/grid.css',
        hash: '3344527088646803472',
      },
      {
        file: 'first-paint/www/css/components/grid.css.map',
        hash: '12809093027383724424',
      },
      {
        file: 'first-paint/www/css/components/header.css',
        hash: '10445389685317962477',
      },
      {
        file: 'first-paint/www/css/components/header.css.map',
        hash: '9466891036921554245',
      },
      {
        file: 'first-paint/www/css/components/headings.css',
        hash: '3277668395329235315',
      },
      {
        file: 'first-paint/www/css/components/headings.css.map',
        hash: '11234649790393243019',
      },
      {
        file: 'first-paint/www/css/components/img.css',
        hash: '12958583190028325649',
      },
      {
        file: 'first-paint/www/css/components/img.css.map',
        hash: '10080430546821419720',
      },
      {
        file: 'first-paint/www/css/components/input.css',
        hash: '12783825368166336332',
      },
      {
        file: 'first-paint/www/css/components/input.css.map',
        hash: '1343910348427036596',
      },
      {
        file: 'first-paint/www/css/components/links.css',
        hash: '17605567085864442997',
      },
      {
        file: 'first-paint/www/css/components/links.css.map',
        hash: '15894568394743798728',
      },
      {
        file: 'first-paint/www/css/components/list.css',
        hash: '6983505930886224484',
      },
      {
        file: 'first-paint/www/css/components/list.css.map',
        hash: '13270263947602055097',
      },
      {
        file: 'first-paint/www/css/components/nav.css',
        hash: '15631257023375064467',
      },
      {
        file: 'first-paint/www/css/components/nav.css.map',
        hash: '15336570652904895863',
      },
      {
        file: 'first-paint/www/css/components/radio.css',
        hash: '3941744352741288342',
      },
      {
        file: 'first-paint/www/css/components/radio.css.map',
        hash: '13687888981416159111',
      },
      {
        file: 'first-paint/www/css/components/scrollbar.css',
        hash: '4805915781090164557',
      },
      {
        file: 'first-paint/www/css/components/scrollbar.css.map',
        hash: '12354089245281457472',
      },
      {
        file: 'first-paint/www/css/components/select.css',
        hash: '12372042482820613459',
      },
      {
        file: 'first-paint/www/css/components/select.css.map',
        hash: '17364929531003958166',
      },
      {
        file: 'first-paint/www/css/components/table.css',
        hash: '561385238784392732',
      },
      {
        file: 'first-paint/www/css/components/table.css.map',
        hash: '9140651626076890344',
      },
      {
        file: 'first-paint/www/css/components/textarea.css',
        hash: '6010255976544543894',
      },
      {
        file: 'first-paint/www/css/components/textarea.css.map',
        hash: '1039923140757019602',
      },
      {
        file: 'first-paint/www/css/components/tooltip.css',
        hash: '15555220929542185594',
      },
      {
        file: 'first-paint/www/css/components/tooltip.css.map',
        hash: '4868651626883773548',
      },
      {
        file: 'first-paint/www/css/components/type.css',
        hash: '5182317563832854881',
      },
      {
        file: 'first-paint/www/css/components/type.css.map',
        hash: '12932440438879970878',
      },
      { file: 'first-paint/www/css/index.css', hash: '6666697650015153186' },
      {
        file: 'first-paint/www/css/index.css.map',
        hash: '9411853409233524356',
      },
      { file: 'first-paint/www/css/libs/all.css', hash: '6079099052740970723' },
      {
        file: 'first-paint/www/css/libs/all.css.map',
        hash: '14914912335557730711',
      },
      {
        file: 'first-paint/www/css/libs/fp-base.css',
        hash: '8629634996097631932',
      },
      {
        file: 'first-paint/www/css/libs/fp-base.css.map',
        hash: '483833810440929516',
      },
      {
        file: 'first-paint/www/css/libs/fp-components.css',
        hash: '715831624421905890',
      },
      {
        file: 'first-paint/www/css/libs/fp-components.css.map',
        hash: '18079097070680026437',
      },
      {
        file: 'first-paint/www/css/libs/fp-core.css',
        hash: '2099188611485957939',
      },
      {
        file: 'first-paint/www/css/libs/fp-core.css.map',
        hash: '15227953406482723223',
      },
      {
        file: 'first-paint/www/css/libs/fp-extensions.css',
        hash: '12510230668112244376',
      },
      {
        file: 'first-paint/www/css/libs/fp-extensions.css.map',
        hash: '3634030542039942804',
      },
      {
        file: 'first-paint/www/css/libs/fp-index.css',
        hash: '6519437725909516733',
      },
      {
        file: 'first-paint/www/css/libs/fp-index.css.map',
        hash: '9182205677467366672',
      },
      {
        file: 'first-paint/www/css/libs/fp-styles-complete.css',
        hash: '10936521388026375921',
      },
      {
        file: 'first-paint/www/css/libs/fp-styles-complete.css.map',
        hash: '12787263382443148689',
      },
      {
        file: 'first-paint/www/css/libs/fp-styles.css',
        hash: '3134231580282595154',
      },
      {
        file: 'first-paint/www/css/libs/fp-styles.css.map',
        hash: '12989493690000150761',
      },
      {
        file: 'first-paint/www/css/libs/utilities.css',
        hash: '12315753474666260174',
      },
      {
        file: 'first-paint/www/css/libs/utilities.css.map',
        hash: '5417110719909029412',
      },
      {
        file: 'first-paint/www/css/modules/global.css',
        hash: '7877522836210315080',
      },
      {
        file: 'first-paint/www/css/modules/global.css.map',
        hash: '16959881912606272578',
      },
      {
        file: 'first-paint/www/css/modules/html.css.map',
        hash: '15768253158312628425',
      },
      {
        file: 'first-paint/www/css/modules/img.css.map',
        hash: '1856620083138656044',
      },
      {
        file: 'first-paint/www/css/modules/reset.css',
        hash: '825901609645085643',
      },
      {
        file: 'first-paint/www/css/modules/reset.css.map',
        hash: '12191132431642072892',
      },
      {
        file: 'first-paint/www/css/styles/all.css.map',
        hash: '13391951129658062437',
      },
      {
        file: 'first-paint/www/css/styles/badge.css',
        hash: '8752574320579801904',
      },
      {
        file: 'first-paint/www/css/styles/badge.css.map',
        hash: '14887603255397193004',
      },
      {
        file: 'first-paint/www/css/styles/breadcrumb.css',
        hash: '11315432426164173745',
      },
      {
        file: 'first-paint/www/css/styles/breadcrumb.css.map',
        hash: '11839601324343068052',
      },
      {
        file: 'first-paint/www/css/styles/button.css',
        hash: '17568148366503193449',
      },
      {
        file: 'first-paint/www/css/styles/button.css.map',
        hash: '17242341364829572039',
      },
      {
        file: 'first-paint/www/css/styles/cards.css',
        hash: '14655053596658093834',
      },
      {
        file: 'first-paint/www/css/styles/cards.css.map',
        hash: '14821949995433860467',
      },
      {
        file: 'first-paint/www/css/styles/checkbox.css',
        hash: '5243944663941033792',
      },
      {
        file: 'first-paint/www/css/styles/checkbox.css.map',
        hash: '1872488153466990293',
      },
      {
        file: 'first-paint/www/css/styles/container.css',
        hash: '14962185046730554908',
      },
      {
        file: 'first-paint/www/css/styles/container.css.map',
        hash: '16371833618101389371',
      },
      {
        file: 'first-paint/www/css/styles/content.css',
        hash: '13716275060036255318',
      },
      {
        file: 'first-paint/www/css/styles/content.css.map',
        hash: '2871443384076283646',
      },
      {
        file: 'first-paint/www/css/styles/details-summary.css',
        hash: '2084847365424398810',
      },
      {
        file: 'first-paint/www/css/styles/details-summary.css.map',
        hash: '7833583450738806856',
      },
      {
        file: 'first-paint/www/css/styles/dialog.css',
        hash: '2185155471793125660',
      },
      {
        file: 'first-paint/www/css/styles/dialog.css.map',
        hash: '17243290195258561470',
      },
      {
        file: 'first-paint/www/css/styles/docs.css.map',
        hash: '16338784223863153454',
      },
      {
        file: 'first-paint/www/css/styles/docsify.css',
        hash: '11221848904235463967',
      },
      {
        file: 'first-paint/www/css/styles/docsify.css.map',
        hash: '6626571289054036299',
      },
      {
        file: 'first-paint/www/css/styles/fp-core.css.map',
        hash: '9930351813836919554',
      },
      {
        file: 'first-paint/www/css/styles/fp-styles-complete.css.map',
        hash: '12041716327240167629',
      },
      {
        file: 'first-paint/www/css/styles/fp-styles-full.css.map',
        hash: '4433579794148491700',
      },
      {
        file: 'first-paint/www/css/styles/fp-styles.css.map',
        hash: '1322783685610370374',
      },
      {
        file: 'first-paint/www/css/styles/grid.css',
        hash: '11998296345120574344',
      },
      {
        file: 'first-paint/www/css/styles/grid.css.map',
        hash: '7471904773912289116',
      },
      {
        file: 'first-paint/www/css/styles/header.css',
        hash: '18268118695301070473',
      },
      {
        file: 'first-paint/www/css/styles/header.css.map',
        hash: '1587282119739753479',
      },
      {
        file: 'first-paint/www/css/styles/img.css',
        hash: '12205550374862826052',
      },
      {
        file: 'first-paint/www/css/styles/img.css.map',
        hash: '13044458519197669435',
      },
      {
        file: 'first-paint/www/css/styles/input.css',
        hash: '4732170119478374696',
      },
      {
        file: 'first-paint/www/css/styles/input.css.map',
        hash: '7083088790173909628',
      },
      {
        file: 'first-paint/www/css/styles/layout.css',
        hash: '1298663051043565045',
      },
      {
        file: 'first-paint/www/css/styles/layout.css.map',
        hash: '17681548742141238367',
      },
      {
        file: 'first-paint/www/css/styles/nav.css',
        hash: '807446683941502061',
      },
      {
        file: 'first-paint/www/css/styles/nav.css.map',
        hash: '16520414882963185376',
      },
      {
        file: 'first-paint/www/css/styles/props.css',
        hash: '3200094223134316840',
      },
      {
        file: 'first-paint/www/css/styles/props.css.map',
        hash: '734135693173766480',
      },
      {
        file: 'first-paint/www/css/styles/radio.css',
        hash: '12549735162172810039',
      },
      {
        file: 'first-paint/www/css/styles/radio.css.map',
        hash: '14080608574046743309',
      },
      {
        file: 'first-paint/www/css/styles/scrollbar.css',
        hash: '9813339238116506362',
      },
      {
        file: 'first-paint/www/css/styles/scrollbar.css.map',
        hash: '778109550091878395',
      },
      {
        file: 'first-paint/www/css/styles/select.css',
        hash: '17718319992729016914',
      },
      {
        file: 'first-paint/www/css/styles/select.css.map',
        hash: '15334383180503392713',
      },
      {
        file: 'first-paint/www/css/styles/table.css',
        hash: '5920844857645199634',
      },
      {
        file: 'first-paint/www/css/styles/table.css.map',
        hash: '3748543179022658943',
      },
      {
        file: 'first-paint/www/css/styles/textarea.css',
        hash: '3355267197653972640',
      },
      {
        file: 'first-paint/www/css/styles/textarea.css.map',
        hash: '5686558165880438818',
      },
      {
        file: 'first-paint/www/css/styles/tooltip.css',
        hash: '1827460749093700070',
      },
      {
        file: 'first-paint/www/css/styles/tooltip.css.map',
        hash: '9250170803324819942',
      },
      {
        file: 'first-paint/www/css/tokens/attributes.css',
        hash: '8984080306196844904',
      },
      {
        file: 'first-paint/www/css/tokens/attributes.css.map',
        hash: '13594871146371926772',
      },
      {
        file: 'first-paint/www/css/tokens/banner.css',
        hash: '17181252973425544771',
      },
      {
        file: 'first-paint/www/css/tokens/banner.css.map',
        hash: '16848630934367752068',
      },
      {
        file: 'first-paint/www/css/tokens/base.css',
        hash: '11693855187085004226',
      },
      {
        file: 'first-paint/www/css/tokens/base.css.map',
        hash: '1468665781241651753',
      },
      {
        file: 'first-paint/www/css/tokens/colors-scales.css',
        hash: '7449793456856847494',
      },
      {
        file: 'first-paint/www/css/tokens/colors-scales.css.map',
        hash: '9926905230952282704',
      },
      {
        file: 'first-paint/www/css/tokens/colors.css',
        hash: '8599986878339579353',
      },
      {
        file: 'first-paint/www/css/tokens/colors.css.map',
        hash: '10471936126134112757',
      },
      {
        file: 'first-paint/www/css/tokens/custom-props.css',
        hash: '6667100591477015316',
      },
      {
        file: 'first-paint/www/css/tokens/custom-props.css.map',
        hash: '6523013767325921506',
      },
      {
        file: 'first-paint/www/css/tokens/errors.css',
        hash: '15621432819155957910',
      },
      {
        file: 'first-paint/www/css/tokens/errors.css.map',
        hash: '8933754637197768945',
      },
      {
        file: 'first-paint/www/css/tokens/first-paint-styles.css',
        hash: '3549619486135561447',
      },
      {
        file: 'first-paint/www/css/tokens/first-paint-styles.css.map',
        hash: '9306904703760173081',
      },
      {
        file: 'first-paint/www/css/tokens/first-paint.css',
        hash: '1566186665663806912',
      },
      {
        file: 'first-paint/www/css/tokens/first-paint.css.map',
        hash: '440544527292901001',
      },
      {
        file: 'first-paint/www/css/tokens/footer.css',
        hash: '12323468369342999805',
      },
      {
        file: 'first-paint/www/css/tokens/footer.css.map',
        hash: '275221193080501139',
      },
      {
        file: 'first-paint/www/css/tokens/fp-base-palette.css.map',
        hash: '6302571454748049991',
      },
      {
        file: 'first-paint/www/css/tokens/fp-color-palette.css.map',
        hash: '6592105979705689634',
      },
      {
        file: 'first-paint/www/css/tokens/fp-colors.css.map',
        hash: '3918485125210019595',
      },
      {
        file: 'first-paint/www/css/tokens/fp.css',
        hash: '15265928500556230923',
      },
      {
        file: 'first-paint/www/css/tokens/fp.css.map',
        hash: '16088991162281451313',
      },
      {
        file: 'first-paint/www/css/tokens/globals.css',
        hash: '6622763708650329976',
      },
      {
        file: 'first-paint/www/css/tokens/globals.css.map',
        hash: '13377142676816361928',
      },
      {
        file: 'first-paint/www/css/tokens/index.css',
        hash: '1607944681215690594',
      },
      {
        file: 'first-paint/www/css/tokens/index.css.map',
        hash: '8228081648925487177',
      },
      {
        file: 'first-paint/www/css/tokens/main.css',
        hash: '1124989454748753311',
      },
      {
        file: 'first-paint/www/css/tokens/main.css.map',
        hash: '2888487923920412793',
      },
      {
        file: 'first-paint/www/css/tokens/neutral.css',
        hash: '1315726334629590316',
      },
      {
        file: 'first-paint/www/css/tokens/neutral.css.map',
        hash: '17684333605173817874',
      },
      {
        file: 'first-paint/www/css/tokens/open-color.css.map',
        hash: '2127871589397772863',
      },
      {
        file: 'first-paint/www/css/tokens/palette.css.map',
        hash: '3872405902629866543',
      },
      {
        file: 'first-paint/www/css/tokens/palettes/fp/first-paint-css.css',
        hash: '1555684702804847574',
      },
      {
        file: 'first-paint/www/css/tokens/palettes/fp/first-paint-css.css.map',
        hash: '3223004103297301096',
      },
      {
        file: 'first-paint/www/css/tokens/palettes/fp/first-paint.css',
        hash: '2569303708963043131',
      },
      {
        file: 'first-paint/www/css/tokens/palettes/fp/first-paint.css.map',
        hash: '6288546497229288699',
      },
      {
        file: 'first-paint/www/css/tokens/palettes/fp/index.css',
        hash: '12225696869041399655',
      },
      {
        file: 'first-paint/www/css/tokens/palettes/fp/paint.css',
        hash: '18372797282929968852',
      },
      {
        file: 'first-paint/www/css/tokens/palettes/fp/primary.css',
        hash: '9329757135065556359',
      },
      {
        file: 'first-paint/www/css/tokens/palettes/fp/test.css.map',
        hash: '10647903460926567436',
      },
      {
        file: 'first-paint/www/css/tokens/palettes-css.css',
        hash: '2068938392055917120',
      },
      {
        file: 'first-paint/www/css/tokens/palettes-css.css.map',
        hash: '15226667006364100386',
      },
      {
        file: 'first-paint/www/css/tokens/primary.css',
        hash: '14558858396684071625',
      },
      {
        file: 'first-paint/www/css/tokens/primary.css.map',
        hash: '1542756882113874002',
      },
      {
        file: 'first-paint/www/css/tokens/secondary.css',
        hash: '17038790250522351775',
      },
      {
        file: 'first-paint/www/css/tokens/secondary.css.map',
        hash: '4364603205655302450',
      },
      {
        file: 'first-paint/www/css/tokens/success.css',
        hash: '9865852634487306307',
      },
      {
        file: 'first-paint/www/css/tokens/success.css.map',
        hash: '12018648025805843053',
      },
      {
        file: 'first-paint/www/css/tokens/test-2.css',
        hash: '13637487223569337288',
      },
      {
        file: 'first-paint/www/css/tokens/test-2.css.map',
        hash: '7105819298347852003',
      },
      {
        file: 'first-paint/www/css/tokens/tokens.css',
        hash: '5935345067442058219',
      },
      {
        file: 'first-paint/www/css/tokens/tokens.css.map',
        hash: '1330124356205823054',
      },
      {
        file: 'first-paint/www/css/tokens/warning.css',
        hash: '8238501563803931007',
      },
      {
        file: 'first-paint/www/css/tokens/warning.css.map',
        hash: '17239411036984025851',
      },
      { file: 'first-paint/www/demos/Demos.md', hash: '5802830560260188832' },
      { file: 'first-paint/www/fp-styles.html', hash: '14871720279204315387' },
      {
        file: 'first-paint/www/images/favicon.png',
        hash: '9371326574054636232',
      },
      {
        file: 'first-paint/www/images/favicon.svg',
        hash: '13079548953757264957',
      },
      {
        file: 'first-paint/www/images/fp-page-example.jpg',
        hash: '9369624048775373711',
      },
      { file: 'first-paint/www/index.html', hash: '2441137350674429301' },
      {
        file: 'first-paint/www/install/Advanced.md',
        hash: '11941482794996337708',
      },
      { file: 'first-paint/www/install/Start.md', hash: '7069132985587839862' },
      {
        file: 'first-paint/www/install/Usage.md',
        hash: '15732563957509536760',
      },
      {
        file: 'first-paint/www/js/code-block.js',
        hash: '15838778499105403957',
      },
      { file: 'first-paint/www/js/new-issue.js', hash: '8280929206351119990' },
      { file: 'first-paint/www/tokens/Color.md', hash: '14822912146589666130' },
      {
        file: 'first-paint/www/tokens/ColorHSL.md',
        hash: '4548279103547185251',
      },
      {
        file: 'first-paint/www/tokens/ColorNames.md',
        hash: '5936634014691492108',
      },
      { file: 'first-paint/www/tokens/Tokens.md', hash: '5545973479993885565' },
      {
        file: 'first-paint/www/utilities/Layout.md',
        hash: '1514882030692140283',
      },
      {
        file: 'first-paint/www/utilities/Overview.md',
        hash: '13386272841106085645',
      },
      {
        file: 'first-paint/www/utilities/Variants.md',
        hash: '8221373306536407665',
      },
    ],
    '@shawnsandy/fp-datatable': [
      {
        file: 'components/react/fp-datatable/CHANGELOG.md',
        hash: '7907773595389674564',
      },
      {
        file: 'components/react/fp-datatable/README.md',
        hash: '10460904430186690994',
      },
      {
        file: 'components/react/fp-datatable/__tests__/fp-datatable.test.js',
        hash: '18435384952978774126',
      },
      {
        file: 'components/react/fp-datatable/package-lock.json',
        hash: '6663952524433575283',
      },
      {
        file: 'components/react/fp-datatable/package.json',
        hash: '4578642935398235641',
        deps: [
          'npm:@storybook/react',
          'npm:@total-typescript/ts-reset',
          'npm:@types/react',
          'npm:react',
          'npm:rollup',
          'npm:sass',
          'npm:typescript',
        ],
      },
      {
        file: 'components/react/fp-datatable/rollup.config.js',
        hash: '18325233767839032929',
      },
      {
        file: 'components/react/fp-datatable/src/components/data-table.stories.tsx',
        hash: '15810778635239251635',
      },
      {
        file: 'components/react/fp-datatable/src/components/data-table.tsx',
        hash: '5835586640112716448',
      },
      {
        file: 'components/react/fp-datatable/src/index.ts',
        hash: '8227236637385114252',
      },
      {
        file: 'components/react/fp-datatable/tsconfig.json',
        hash: '9845843669445630749',
      },
    ],
    '@fpkit/shared': [
      { file: 'libs/types/shared/.gitignore', hash: '7663861978715868291' },
      { file: 'libs/types/shared/CHANGELOG.md', hash: '15951548882052317027' },
      {
        file: 'libs/types/shared/package-lock.json',
        hash: '11662253395356496124',
      },
      {
        file: 'libs/types/shared/package.json',
        hash: '12907736652084189018',
        deps: [
          'npm:@storybook/test-runner',
          'npm:@total-typescript/ts-reset',
          'npm:typescript',
        ],
      },
      { file: 'libs/types/shared/src/index.ts', hash: '3223283936126269735' },
      { file: 'libs/types/shared/tsconfig.json', hash: '1539527662961998077' },
      { file: 'libs/types/shared/tsup.config.cjs', hash: '163484572130417668' },
    ],
    '@fpkit/types': [
      { file: 'libs/types/fp-types/.gitignore', hash: '13046175384202504187' },
      {
        file: 'libs/types/fp-types/babel.config.json',
        hash: '9342134073173841279',
      },
      { file: 'libs/types/fp-types/index.html', hash: '11354942365142370335' },
      {
        file: 'libs/types/fp-types/package-lock.json',
        hash: '16246175197993635355',
      },
      {
        file: 'libs/types/fp-types/package.json',
        hash: '5711486862279222232',
        deps: ['npm:@total-typescript/ts-reset', 'npm:typescript', 'npm:vite'],
      },
      {
        file: 'libs/types/fp-types/public/vite.svg',
        hash: '16046085400642193116',
      },
      {
        file: 'libs/types/fp-types/src/counter.ts',
        hash: '2774244522532860448',
      },
      { file: 'libs/types/fp-types/src/index.ts', hash: '605172097802446217' },
      {
        file: 'libs/types/fp-types/src/style.css',
        hash: '1801912439397686590',
      },
      {
        file: 'libs/types/fp-types/src/typescript.svg',
        hash: '8667544980518902788',
      },
      {
        file: 'libs/types/fp-types/src/vite-env.d.ts',
        hash: '12946363841406869089',
      },
      {
        file: 'libs/types/fp-types/tsconfig.json',
        hash: '1651067894237469091',
      },
    ],
  },
  layout: { appsDir: 'apps', libsDir: 'libs' },
  affected: [],
  focus: null,
  groupByFolder: false,
  exclude: [],
}
window.taskGraphResponse = {
  taskGraphs: {
    '@shawnsandy/fp-datatable:test': {
      roots: ['@shawnsandy/fp-datatable:test'],
      tasks: {
        '@shawnsandy/fp-datatable:test': {
          id: '@shawnsandy/fp-datatable:test',
          target: { project: '@shawnsandy/fp-datatable', target: 'test' },
          projectRoot: 'components/react/fp-datatable',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/fp-datatable:test': [] },
    },
    '@shawnsandy/fp-datatable:build': {
      roots: ['@shawnsandy/fp-datatable:build'],
      tasks: {
        '@shawnsandy/fp-datatable:build': {
          id: '@shawnsandy/fp-datatable:build',
          target: { project: '@shawnsandy/fp-datatable', target: 'build' },
          projectRoot: 'components/react/fp-datatable',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/fp-datatable:build': [] },
    },
    '@shawnsandy/fp-datatable:nx-release-publish': {
      roots: ['@shawnsandy/fp-datatable:nx-release-publish'],
      tasks: {
        '@shawnsandy/fp-datatable:nx-release-publish': {
          id: '@shawnsandy/fp-datatable:nx-release-publish',
          target: {
            project: '@shawnsandy/fp-datatable',
            target: 'nx-release-publish',
          },
          projectRoot: 'components/react/fp-datatable',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/fp-datatable:nx-release-publish': [] },
    },
    '@fpkit/types:dev': {
      roots: ['@fpkit/types:dev'],
      tasks: {
        '@fpkit/types:dev': {
          id: '@fpkit/types:dev',
          target: { project: '@fpkit/types', target: 'dev' },
          projectRoot: 'libs/types/fp-types',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/types:dev': [] },
    },
    '@fpkit/types:build': {
      roots: ['@fpkit/types:build'],
      tasks: {
        '@fpkit/types:build': {
          id: '@fpkit/types:build',
          target: { project: '@fpkit/types', target: 'build' },
          projectRoot: 'libs/types/fp-types',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/types:build': [] },
    },
    '@fpkit/types:preview': {
      roots: ['@fpkit/types:preview'],
      tasks: {
        '@fpkit/types:preview': {
          id: '@fpkit/types:preview',
          target: { project: '@fpkit/types', target: 'preview' },
          projectRoot: 'libs/types/fp-types',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/types:preview': [] },
    },
    '@fpkit/types:preconstruct': {
      roots: ['@fpkit/types:preconstruct'],
      tasks: {
        '@fpkit/types:preconstruct': {
          id: '@fpkit/types:preconstruct',
          target: { project: '@fpkit/types', target: 'preconstruct' },
          projectRoot: 'libs/types/fp-types',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/types:preconstruct': [] },
    },
    '@fpkit/types:preconstruct:fix': {
      roots: ['@fpkit/types:preconstruct:fix'],
      tasks: {
        '@fpkit/types:preconstruct:fix': {
          id: '@fpkit/types:preconstruct:fix',
          target: { project: '@fpkit/types', target: 'preconstruct:fix' },
          projectRoot: 'libs/types/fp-types',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/types:preconstruct:fix': [] },
    },
    '@fpkit/types:nx-release-publish': {
      roots: ['@fpkit/types:nx-release-publish'],
      tasks: {
        '@fpkit/types:nx-release-publish': {
          id: '@fpkit/types:nx-release-publish',
          target: { project: '@fpkit/types', target: 'nx-release-publish' },
          projectRoot: 'libs/types/fp-types',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/types:nx-release-publish': [] },
    },
    '@fpkit/shared:test': {
      roots: ['@fpkit/shared:test'],
      tasks: {
        '@fpkit/shared:test': {
          id: '@fpkit/shared:test',
          target: { project: '@fpkit/shared', target: 'test' },
          projectRoot: 'libs/types/shared',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/shared:test': [] },
    },
    '@fpkit/shared:build': {
      roots: ['@fpkit/shared:build'],
      tasks: {
        '@fpkit/shared:build': {
          id: '@fpkit/shared:build',
          target: { project: '@fpkit/shared', target: 'build' },
          projectRoot: 'libs/types/shared',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/shared:build': [] },
    },
    '@fpkit/shared:nx-release-publish': {
      roots: ['@fpkit/shared:nx-release-publish'],
      tasks: {
        '@fpkit/shared:nx-release-publish': {
          id: '@fpkit/shared:nx-release-publish',
          target: { project: '@fpkit/shared', target: 'nx-release-publish' },
          projectRoot: 'libs/types/shared',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/shared:nx-release-publish': [] },
    },
    '@fpkit/react:start': {
      roots: ['@fpkit/react:start'],
      tasks: {
        '@fpkit/react:start': {
          id: '@fpkit/react:start',
          target: { project: '@fpkit/react', target: 'start' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:start': [] },
    },
    '@fpkit/react:dev': {
      roots: ['@fpkit/react:dev'],
      tasks: {
        '@fpkit/react:dev': {
          id: '@fpkit/react:dev',
          target: { project: '@fpkit/react', target: 'dev' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:dev': [] },
    },
    '@fpkit/react:build': {
      roots: ['@fpkit/react:build'],
      tasks: {
        '@fpkit/react:build': {
          id: '@fpkit/react:build',
          target: { project: '@fpkit/react', target: 'build' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:build': [] },
    },
    '@fpkit/react:package': {
      roots: ['@fpkit/react:package'],
      tasks: {
        '@fpkit/react:package': {
          id: '@fpkit/react:package',
          target: { project: '@fpkit/react', target: 'package' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:package': [] },
    },
    '@fpkit/react:package:watch': {
      roots: ['@fpkit/react:package:watch'],
      tasks: {
        '@fpkit/react:package:watch': {
          id: '@fpkit/react:package:watch',
          target: { project: '@fpkit/react', target: 'package:watch' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:package:watch': [] },
    },
    '@fpkit/react:build::css': {
      roots: ['@fpkit/react:build::css'],
      tasks: {
        '@fpkit/react:build::css': {
          id: '@fpkit/react:build::css',
          target: { project: '@fpkit/react', target: 'build::css' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:build::css': [] },
    },
    '@fpkit/react:preview': {
      roots: ['@fpkit/react:preview'],
      tasks: {
        '@fpkit/react:preview': {
          id: '@fpkit/react:preview',
          target: { project: '@fpkit/react', target: 'preview' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:preview': [] },
    },
    '@fpkit/react:build:sass': {
      roots: ['@fpkit/react:build:sass'],
      tasks: {
        '@fpkit/react:build:sass': {
          id: '@fpkit/react:build:sass',
          target: { project: '@fpkit/react', target: 'build:sass' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:build:sass': [] },
    },
    '@fpkit/react:sass:build': {
      roots: ['@fpkit/react:sass:build'],
      tasks: {
        '@fpkit/react:sass:build': {
          id: '@fpkit/react:sass:build',
          target: { project: '@fpkit/react', target: 'sass:build' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:sass:build': [] },
    },
    '@fpkit/react:sass:watch': {
      roots: ['@fpkit/react:sass:watch'],
      tasks: {
        '@fpkit/react:sass:watch': {
          id: '@fpkit/react:sass:watch',
          target: { project: '@fpkit/react', target: 'sass:watch' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:sass:watch': [] },
    },
    '@fpkit/react:sass': {
      roots: ['@fpkit/react:sass'],
      tasks: {
        '@fpkit/react:sass': {
          id: '@fpkit/react:sass',
          target: { project: '@fpkit/react', target: 'sass' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:sass': [] },
    },
    '@fpkit/react:test': {
      roots: ['@fpkit/react:test'],
      tasks: {
        '@fpkit/react:test': {
          id: '@fpkit/react:test',
          target: { project: '@fpkit/react', target: 'test' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:test': [] },
    },
    '@fpkit/react:test:ui': {
      roots: ['@fpkit/react:test:ui'],
      tasks: {
        '@fpkit/react:test:ui': {
          id: '@fpkit/react:test:ui',
          target: { project: '@fpkit/react', target: 'test:ui' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:test:ui': [] },
    },
    '@fpkit/react:test:coverage': {
      roots: ['@fpkit/react:test:coverage'],
      tasks: {
        '@fpkit/react:test:coverage': {
          id: '@fpkit/react:test:coverage',
          target: { project: '@fpkit/react', target: 'test:coverage' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:test:coverage': [] },
    },
    '@fpkit/react:test:ui:coverage': {
      roots: ['@fpkit/react:test:ui:coverage'],
      tasks: {
        '@fpkit/react:test:ui:coverage': {
          id: '@fpkit/react:test:ui:coverage',
          target: { project: '@fpkit/react', target: 'test:ui:coverage' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:test:ui:coverage': [] },
    },
    '@fpkit/react:test:snapshot': {
      roots: ['@fpkit/react:test:snapshot'],
      tasks: {
        '@fpkit/react:test:snapshot': {
          id: '@fpkit/react:test:snapshot',
          target: { project: '@fpkit/react', target: 'test:snapshot' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:test:snapshot': [] },
    },
    '@fpkit/react:release': {
      roots: ['@fpkit/react:release'],
      tasks: {
        '@fpkit/react:release': {
          id: '@fpkit/react:release',
          target: { project: '@fpkit/react', target: 'release' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
      },
      dependencies: { '@fpkit/react:release': [] },
    },
    '@fpkit/react:nx-release-publish': {
      roots: ['@shawnsandy/first-paint:nx-release-publish'],
      tasks: {
        '@fpkit/react:nx-release-publish': {
          id: '@fpkit/react:nx-release-publish',
          target: { project: '@fpkit/react', target: 'nx-release-publish' },
          projectRoot: 'libs/react/fpkit',
          overrides: {},
        },
        '@shawnsandy/first-paint:nx-release-publish': {
          id: '@shawnsandy/first-paint:nx-release-publish',
          target: {
            project: '@shawnsandy/first-paint',
            target: 'nx-release-publish',
          },
          projectRoot: 'first-paint',
          overrides: { __overrides_unparsed__: [] },
        },
      },
      dependencies: {
        '@fpkit/react:nx-release-publish': [
          '@shawnsandy/first-paint:nx-release-publish',
        ],
        '@shawnsandy/first-paint:nx-release-publish': [],
      },
    },
    '@shawnsandy/first-paint:start': {
      roots: ['@shawnsandy/first-paint:start'],
      tasks: {
        '@shawnsandy/first-paint:start': {
          id: '@shawnsandy/first-paint:start',
          target: { project: '@shawnsandy/first-paint', target: 'start' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:start': [] },
    },
    '@shawnsandy/first-paint:serve': {
      roots: ['@shawnsandy/first-paint:serve'],
      tasks: {
        '@shawnsandy/first-paint:serve': {
          id: '@shawnsandy/first-paint:serve',
          target: { project: '@shawnsandy/first-paint', target: 'serve' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:serve': [] },
    },
    '@shawnsandy/first-paint:watch': {
      roots: ['@shawnsandy/first-paint:watch'],
      tasks: {
        '@shawnsandy/first-paint:watch': {
          id: '@shawnsandy/first-paint:watch',
          target: { project: '@shawnsandy/first-paint', target: 'watch' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:watch': [] },
    },
    '@shawnsandy/first-paint:docs': {
      roots: ['@shawnsandy/first-paint:docs'],
      tasks: {
        '@shawnsandy/first-paint:docs': {
          id: '@shawnsandy/first-paint:docs',
          target: { project: '@shawnsandy/first-paint', target: 'docs' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:docs': [] },
    },
    '@shawnsandy/first-paint:11ty': {
      roots: ['@shawnsandy/first-paint:11ty'],
      tasks: {
        '@shawnsandy/first-paint:11ty': {
          id: '@shawnsandy/first-paint:11ty',
          target: { project: '@shawnsandy/first-paint', target: '11ty' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:11ty': [] },
    },
    '@shawnsandy/first-paint:11ty-prod': {
      roots: ['@shawnsandy/first-paint:11ty-prod'],
      tasks: {
        '@shawnsandy/first-paint:11ty-prod': {
          id: '@shawnsandy/first-paint:11ty-prod',
          target: { project: '@shawnsandy/first-paint', target: '11ty-prod' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:11ty-prod': [] },
    },
    '@shawnsandy/first-paint:build': {
      roots: ['@shawnsandy/first-paint:build'],
      tasks: {
        '@shawnsandy/first-paint:build': {
          id: '@shawnsandy/first-paint:build',
          target: { project: '@shawnsandy/first-paint', target: 'build' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:build': [] },
    },
    '@shawnsandy/first-paint:package': {
      roots: ['@shawnsandy/first-paint:package'],
      tasks: {
        '@shawnsandy/first-paint:package': {
          id: '@shawnsandy/first-paint:package',
          target: { project: '@shawnsandy/first-paint', target: 'package' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:package': [] },
    },
    '@shawnsandy/first-paint:watch:docs': {
      roots: ['@shawnsandy/first-paint:watch:docs'],
      tasks: {
        '@shawnsandy/first-paint:watch:docs': {
          id: '@shawnsandy/first-paint:watch:docs',
          target: { project: '@shawnsandy/first-paint', target: 'watch:docs' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:watch:docs': [] },
    },
    '@shawnsandy/first-paint:watch-index': {
      roots: ['@shawnsandy/first-paint:watch-index'],
      tasks: {
        '@shawnsandy/first-paint:watch-index': {
          id: '@shawnsandy/first-paint:watch-index',
          target: { project: '@shawnsandy/first-paint', target: 'watch-index' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:watch-index': [] },
    },
    '@shawnsandy/first-paint:watch:v3': {
      roots: ['@shawnsandy/first-paint:watch:v3'],
      tasks: {
        '@shawnsandy/first-paint:watch:v3': {
          id: '@shawnsandy/first-paint:watch:v3',
          target: { project: '@shawnsandy/first-paint', target: 'watch:v3' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:watch:v3': [] },
    },
    '@shawnsandy/first-paint:build:v3': {
      roots: ['@shawnsandy/first-paint:build:v3'],
      tasks: {
        '@shawnsandy/first-paint:build:v3': {
          id: '@shawnsandy/first-paint:build:v3',
          target: { project: '@shawnsandy/first-paint', target: 'build:v3' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:build:v3': [] },
    },
    '@shawnsandy/first-paint:build-v3': {
      roots: ['@shawnsandy/first-paint:build-v3'],
      tasks: {
        '@shawnsandy/first-paint:build-v3': {
          id: '@shawnsandy/first-paint:build-v3',
          target: { project: '@shawnsandy/first-paint', target: 'build-v3' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:build-v3': [] },
    },
    '@shawnsandy/first-paint:watch:build-v3': {
      roots: ['@shawnsandy/first-paint:watch:build-v3'],
      tasks: {
        '@shawnsandy/first-paint:watch:build-v3': {
          id: '@shawnsandy/first-paint:watch:build-v3',
          target: {
            project: '@shawnsandy/first-paint',
            target: 'watch:build-v3',
          },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:watch:build-v3': [] },
    },
    '@shawnsandy/first-paint:build-v3-index': {
      roots: ['@shawnsandy/first-paint:build-v3-index'],
      tasks: {
        '@shawnsandy/first-paint:build-v3-index': {
          id: '@shawnsandy/first-paint:build-v3-index',
          target: {
            project: '@shawnsandy/first-paint',
            target: 'build-v3-index',
          },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:build-v3-index': [] },
    },
    '@shawnsandy/first-paint:watch-components': {
      roots: ['@shawnsandy/first-paint:watch-components'],
      tasks: {
        '@shawnsandy/first-paint:watch-components': {
          id: '@shawnsandy/first-paint:watch-components',
          target: {
            project: '@shawnsandy/first-paint',
            target: 'watch-components',
          },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:watch-components': [] },
    },
    '@shawnsandy/first-paint:watch-scss': {
      roots: ['@shawnsandy/first-paint:watch-scss'],
      tasks: {
        '@shawnsandy/first-paint:watch-scss': {
          id: '@shawnsandy/first-paint:watch-scss',
          target: { project: '@shawnsandy/first-paint', target: 'watch-scss' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:watch-scss': [] },
    },
    '@shawnsandy/first-paint:build-css': {
      roots: ['@shawnsandy/first-paint:build-css'],
      tasks: {
        '@shawnsandy/first-paint:build-css': {
          id: '@shawnsandy/first-paint:build-css',
          target: { project: '@shawnsandy/first-paint', target: 'build-css' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:build-css': [] },
    },
    '@shawnsandy/first-paint:test': {
      roots: ['@shawnsandy/first-paint:test'],
      tasks: {
        '@shawnsandy/first-paint:test': {
          id: '@shawnsandy/first-paint:test',
          target: { project: '@shawnsandy/first-paint', target: 'test' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:test': [] },
    },
    '@shawnsandy/first-paint:production': {
      roots: ['@shawnsandy/first-paint:production'],
      tasks: {
        '@shawnsandy/first-paint:production': {
          id: '@shawnsandy/first-paint:production',
          target: { project: '@shawnsandy/first-paint', target: 'production' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:production': [] },
    },
    '@shawnsandy/first-paint:clean': {
      roots: ['@shawnsandy/first-paint:clean'],
      tasks: {
        '@shawnsandy/first-paint:clean': {
          id: '@shawnsandy/first-paint:clean',
          target: { project: '@shawnsandy/first-paint', target: 'clean' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:clean': [] },
    },
    '@shawnsandy/first-paint:clean:dist': {
      roots: ['@shawnsandy/first-paint:clean:dist'],
      tasks: {
        '@shawnsandy/first-paint:clean:dist': {
          id: '@shawnsandy/first-paint:clean:dist',
          target: { project: '@shawnsandy/first-paint', target: 'clean:dist' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:clean:dist': [] },
    },
    '@shawnsandy/first-paint:release-next': {
      roots: ['@shawnsandy/first-paint:release-next'],
      tasks: {
        '@shawnsandy/first-paint:release-next': {
          id: '@shawnsandy/first-paint:release-next',
          target: {
            project: '@shawnsandy/first-paint',
            target: 'release-next',
          },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:release-next': [] },
    },
    '@shawnsandy/first-paint:release': {
      roots: ['@shawnsandy/first-paint:release'],
      tasks: {
        '@shawnsandy/first-paint:release': {
          id: '@shawnsandy/first-paint:release',
          target: { project: '@shawnsandy/first-paint', target: 'release' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:release': [] },
    },
    '@shawnsandy/first-paint:pack': {
      roots: ['@shawnsandy/first-paint:pack'],
      tasks: {
        '@shawnsandy/first-paint:pack': {
          id: '@shawnsandy/first-paint:pack',
          target: { project: '@shawnsandy/first-paint', target: 'pack' },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:pack': [] },
    },
    '@shawnsandy/first-paint:nx-release-publish': {
      roots: ['@shawnsandy/first-paint:nx-release-publish'],
      tasks: {
        '@shawnsandy/first-paint:nx-release-publish': {
          id: '@shawnsandy/first-paint:nx-release-publish',
          target: {
            project: '@shawnsandy/first-paint',
            target: 'nx-release-publish',
          },
          projectRoot: 'first-paint',
          overrides: {},
        },
      },
      dependencies: { '@shawnsandy/first-paint:nx-release-publish': [] },
    },
  },
  errors: {},
}
