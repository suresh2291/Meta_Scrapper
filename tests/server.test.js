/**
 * Here i am checking one module function from meta scrapper "metascrapper-author"
 * similar to we can check other modules in the same fashion
 */
const metascraper = require('metascraper')([
  // loading our rules!
  require('metascraper-author')()
])


describe('metascraper-author', () => {
  it('check the author details', async () => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>My Test Html</title>
      <meta property="og:author" content="AMRUTHAM sURESH">
      <meta itemprop="author" content="itemprop value">
    </head>
    <body>
    </body>
    </html>
    `
    const url = `https://github.com/phoenixGeek/inputForm_ejs_template/tree/master/views/pages`
    const meta = await metascraper({ html, url })
    console.log(meta)
    expect(meta.author).toBe('amrutham Suresh');
  })
})