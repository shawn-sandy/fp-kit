export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  badgesConfig: {
    beta: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#018786',
        color: '#018786',
      },
      title: 'Beta',
    },
    deprecated: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#6200EE',
        color: '#6200EE',
      },
      title: 'Deprecated',
    },
  },
}
