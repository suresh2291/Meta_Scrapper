/* test/unit/index.js */
const should = require('should')
const metascraper = require('metascraper')([
  // loading our rules!
  require('metascraper-logo')()
])


describe('metascraper-logo', () => {
  it('create an absolute favicon url if the logo is not present', async () => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Test Html</title>
      <meta property="og:logo" content="open graph value">
      <meta itemprop="logo" content="itemprop value">
    </head>
    <body>
    </body>
    </html>
    `
    const meta = await metascraper({ html, url })
    should(meta.log).be.equal("open graph value")
  })
})