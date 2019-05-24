import { readFile } from 'fs-extra'
import path from 'path'
import parseData from './lib/parse-data'

const DATA_PATH = path.join(__dirname, '..', 'data', 'data.txt')

async function main() {
  const data = await readFile(DATA_PATH, 'utf8')
  parseData(data)
}

main().catch(console.error)
