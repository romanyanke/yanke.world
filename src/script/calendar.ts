// one toggle is half a day: day -> night -> day is a full cycle
const togglesPerDay = 2

let togglesSoFar = 0

const milestones = new Map<number, string>([
  [7, 'Whoa! A week passed!'],
  [30, 'Whoa!! A month passed!'],
  [365, 'Whoa!!! A year passed! Please stop!'],
])

export const timeGoes = () => {
  const milestone = milestones.get(
    togglesSoFar++ / togglesPerDay,
  )

  if (milestone) {
    alert(milestone)
  }
}
