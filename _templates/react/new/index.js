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
        name: 'dir',
        message: 'The name of the directory to store the component (optional)'
      }
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { componentName, dir } = answers
        const path = dir ? `${dir}` : `${componentName.toLowerCase()}`
        const absPath = `components/react/${path}`
        return { ...answers, path, absPath }
      })
  }
}
