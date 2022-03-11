/* eslint-disable camelcase */
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the component name (MyComponent)?'
      },
      {
        type: 'input',
        name: 'dir',
        message: 'The Components directory store the component (comps) default (components)'
      },
      {
        type: 'input',
        name: 'folderName',
        message: 'The name of the component (my-component) default (react)'
      }
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { componentName, dir, folderName } = answers
        const path = dir ? `${dir}` : `${componentName.toLowerCase()}`
        const absPath = `${dir || 'components'}/${folderName || 'react'}/${path}`
        return { ...answers, path, absPath }
      })
  }
}
