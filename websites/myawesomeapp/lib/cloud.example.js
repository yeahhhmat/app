export async function cloudExample (){
  const resp = await fetch('https://myawesomeappdotorg.web.app/hello-world')
  const data = await resp.json()
  return data;
}