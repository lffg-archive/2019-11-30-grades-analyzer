type Table = (string | number | undefined)[][]

export default function parseData(data: string, eol = '\n'): void {
  const lines = data
    .split(eol)
    .map((line) => line.trim())
    .filter((line) => !!line && !/^\/\//.test(line))

  const tableIndex = new Map<string, any>()
  let currentName: string | null = null

  for (const line of lines) {
    if (/^@/.test(line)) {
      currentName = line.replace(/^@/, '')
      tableIndex.set(currentName, [])
    } else {
      const tableEntry = line.split('\n').map((line) =>
        line
          .trim()
          .split('|')
          .map((lineEntry) => lineEntry.trim() || null)
      )

      const currentTable = tableIndex.get(currentName!)!
      tableIndex.set(currentName!, [...currentTable, tableEntry])
    }
  }

  console.log(JSON.stringify([...tableIndex.entries()], null, 2))
}
