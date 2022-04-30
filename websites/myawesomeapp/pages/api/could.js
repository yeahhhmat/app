import { removeTokenCookie } from '../../lib/auth-cookies'

export default async function cloud(req, res) {
  const resp = await fetch('https://myawesomeappdotorg.web.app/hello-world')
  const exampleResp = resp.json();
  console.log(exampleResp)

  res.writeHead(200, { })
  res.end()
}
