import * as cheerio from 'cheerio'
import fs from 'fs'
import md5 from 'md5'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const sleep = ms => new Promise(r => setTimeout(r, ms))
const cacheDir = path.join(__dirname, '../cache')
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir)
}

const BASE_URL = 'https://www.smbc-comics.com'
let url = BASE_URL + '/comic'

for (let i = 0; i < 10; i++) {
  let body
  const hash = md5(url)
  const cacheFile = path.join(cacheDir, `${hash}.html`)

  if (fs.existsSync(cacheFile)) {
    body = fs.readFileSync(cacheFile, 'utf8')
    console.log('Loaded from cache:', url)
  } else {
    await sleep(1000)
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      body = await res.text()
      fs.writeFileSync(cacheFile, body, 'utf8')
      console.log('Fetched and cached:', url)
    } catch (err) {
      console.error('Failed to fetch URL:', url)
      console.error(err)
      break
    }
  }

  const $ = cheerio.load(body)
  const imgs = []

  $('#cc-comicbody img').each((_, el) => {
    let src = $(el).attr('src')
    if (!src) return

    if (src.startsWith('//')) src = 'https:' + src
    else if (src.startsWith('/')) src = BASE_URL + src
    imgs.push(src)
  })

  console.log('URL:', url)
  imgs.forEach(src => console.log('IMG:', src))
  const prev = $('a.cc-prev')
  const href = prev.attr('href')

  if (href.startsWith('http')) {
    url = href
  } else {url = BASE_URL + href}}