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
        name: 'componentDescription',
        message: 'Component package description?'
      },
      {
        type: 'input',
        name: 'dir',
        message: 'The directory to store the component, ( default react)'
      },
      {
        type: 'input',
        name: 'folderName',
        message: 'The folder name of the component (my-component) (default component name)'
      }
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { componentName, dir, folderName } = answers
        const path = dir ? `${dir}` : `${componentName.toLowerCase()}`
        const absPath = `${dir || 'react'}/${folderName || componentName.toLowerCase()}`
        return { ...answers, path, absPath }
      })
  }
}
