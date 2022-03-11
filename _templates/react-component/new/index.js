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
        message: 'What package do you want to add the component to?'
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
        const { component_name, dir, package_dir } = answers
        const path = dir ? `${dir}` : `${component_name.toLowerCase()}`
        const absPath = `${package_dir}/src/${path}`
        return { ...answers, path, absPath }
      })
  }
}
