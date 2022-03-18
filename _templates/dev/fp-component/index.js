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
        name: 'controls',
        message: 'Do you want to include controls (yes|no)?',
        enables: 'yes',
        disabled: 'no'
      },
      {
        type: 'input',
        name: 'packageDir',
        message: 'Folder name of package folder/path (my-package, other-package/my-component)?'
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
        // console.log(answers)
        const { componentName, dir, packageDir, subFolder, controls } = answers
        const path = dir ? `${dir}` : `${componentName.toLowerCase()}`
        const absPath = `${packageDir}/src/${subFolder}/${path}`
        return { ...answers, path, absPath, controls }
      })
  }
}
