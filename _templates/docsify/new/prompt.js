/* eslint-disable camelcase */
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [

      {
        type: 'input',
        name: 'name',
        message: 'What is the doc name?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Do you want to add a brief description?'
      },
      {
        type: 'input',
        name: 'savePath',
        message: 'Where do you want the document saved/stored (path/dirname)?'
      }
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { name, savePath, description } = answers
        const absPath = savePath
        return { ...answers, name, absPath, description }
      })
  }
}
