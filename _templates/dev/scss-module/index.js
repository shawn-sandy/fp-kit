/* eslint-disable camelcase */
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [

      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the module (button) underscore is added?'
      },
      {
        type: 'input',
        name: 'elementName',
        message: 'What is the name of the element (optional defaults to name)?'
      },
      {
        type: 'input',
        name: 'savePath',
        message: 'Where do you want the module saved/stored (path/dirname)?'
      }
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { name, savePath, description, elementName } = answers
        const absPath = savePath
        return { ...answers, name, absPath, description, elementName }
      })
  }
}
