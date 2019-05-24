export default function getPercentage(
  num: number,
  base: number = 100,
  round: boolean = true
) {
  const index = 100 / base
  const percentage = num * index

  return round ? Math.round(percentage) : percentage
}
