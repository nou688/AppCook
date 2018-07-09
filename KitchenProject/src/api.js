const people = [
  { name: 'Nader', mdp: '08835275' },
  { name: 'Amanda', mdp: 'test21' },
  { name: 'Jason', mdp: '94326348' }
]

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people)
    }, 3000)
  })
}
