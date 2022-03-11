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
        name: 'dir',
        message: 'The name of the directory to store the component (optional)'
      }
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { component_name, dir } = answers
        const path = dir ? `${dir}` : `${component_name.toLowerCase()}`
        const absPath = `components/react/${path}`
        return { ...answers, path, absPath }
      })
  }
}
