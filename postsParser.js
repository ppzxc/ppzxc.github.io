const path = require("path")

const APP_DIR = process.cwd()
const BUILD_DIR = path.resolve(APP_DIR, "build")
const PUBLIC_DIR = path.resolve(APP_DIR, "public")
const BUILD_POSTS_DIR = path.resolve(APP_DIR, "build/posts")
const PUBLIC_POSTS_DIR = path.resolve(APP_DIR, "public/posts")

const fs = require("fs")
const showdown = require("showdown")

const POSTS_READ_PATH = APP_DIR + "/_posts"

function ToHtml() {
  const converter = new showdown.Converter({ metadata: true })
  const meta = []

  if (!fs.existsSync(APP_DIR + "/content/posts")) {
    fs.mkdirSync(APP_DIR + "/content/posts")
  }

  fs.readdirSync(POSTS_READ_PATH).forEach(file => {
    const read = POSTS_READ_PATH + "/" + file
    const data = fs.readFileSync(read, "utf-8")

    const body = data.substr(data.indexOf("---", 4) + 3, data.length)

    if (body.indexOf('{% gist ') > -1) {

    }

    const html = converter.makeHtml(data)
    const metadata = converter.getMetadata()

    // metadata["id"] = metadata["id"].replace(" ", "")
    // metadata["id"] = Number(metadata["id"])

    metadata["title"] = metadata["title"].replace(/&quot;/gi, "")

    if (metadata.hasOwnProperty("subtitle")) {
      metadata["subtitle"] = metadata["subtitle"].replace(/&quot;/gi, "")
    } else {
      metadata["subtitle"] = ""
    }

    metadata["date"] = metadata["date"].replace(/&quot;/gi, "")

    if (metadata['date'].indexOf('.') > -1) {
      metadata["date"] = metadata["date"].replace(/\./gi, "-")
    }

    if (metadata['date'].indexOf(':') === -1) {
      metadata["date"] = metadata["date"] + " 00:00:00"
    }

    metadata['tags'] = "[" + metadata['tags'].replace(/&quot;/gi, "") + "]"

    // console.log(metadata)

    header = '---\r\n'
      + 'id: ' + metadata['id'] + '\r\n'
      + 'slug: /posts/' + metadata['title'].replace(/ /gi, "") + '\r\n'
      + 'date: ' + metadata['date'] + '\r\n'
      + 'title: ' + metadata['title'] + '\r\n'
      + 'subtitle: ' + metadata['subtitle'] + '\r\n'
      + 'tags: ' + metadata['tags'] + '\r\n'
      + 'excerpt: ' + 'explain in content' + '\r\n'
      + '---' + '\r\n'

    console.log(metadata['date'])
    const date = metadata['date'].substr(0, 10).replace(/-/gi, "")
    const sdate = date.replace(/\./gi, "")

    fs.writeFileSync('./content/posts/' + metadata['id'] + '-' + sdate + '.md', header + body)
  })
}


ToHtml()
