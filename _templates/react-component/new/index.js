/* eslint-disable camelcase */
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [

      {
        type: 'input',
        name: 'component_name',
        message: 'What is the component name?'
      },
      {
        type: 'input',
        name: 'package_dir',
        message: 'Path  to the package do you want to add the component to (my-package)?'
      },
      {
        type: 'select',
        name: 'sub_folder',
        message: 'Which sub_folder of the package dir you would like to place the component (src/components)?',
        choices: ['components', 'elements', 'modules', 'page', 'services']
      },
      {
        type: 'input',
        name: 'dir',
        message: 'The name of the directory to store the component (optional) will default to the component name'
      }
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { component_name, dir, package_dir, sub_folder } = answers
        const path = dir ? `${dir}` : `${component_name.toLowerCase()}`
        const absPath = `${package_dir}/src/${sub_folder}/${path}`
        return { ...answers, path, absPath }
      })
  }
}
