let daysPassed = 0

const milestones = new Map()
  .set(7, 'Whoa! A week passed!')
  .set(30, 'Whoa!! A month passed!')
  .set(365, 'Whoa!!! A year passed! Please stop!')

export const timeGoes = () => {
  const milestone = milestones.get(daysPassed++ / 2)

  if (milestone) {
    alert(milestone)
  }
}
