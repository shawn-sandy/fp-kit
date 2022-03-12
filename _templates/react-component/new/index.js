/* eslint-disable camelcase */
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [

      {
        type: 'input',
        name: 'componentName',
        message: 'What is the component name?'
      },
      {
        type: 'input',
        name: 'packageDir',
        message: 'Path  to the package do you want to add the component to (my-package)?'
      },
      {
        type: 'select',
        name: 'subFolder',
        message: 'Which sub_folder of the package dir you would like to place the component (src/components)?',
        choices: ['components', 'elements', 'modules', 'page', 'services']
      },
      {
        type: 'input',
        name: 'dir',
        message: 'The name of the directory to store the component (optional)'
      }
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { componentName, dir, packageDir, subFolder } = answers
        const path = dir ? `${dir}` : `${componentName.toLowerCase()}`
        const absPath = `${packageDir}/src/${subFolder}/${path}`
        return { ...answers, path, absPath }
      })
  }
}
