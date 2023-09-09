import figlet from 'figlet'

const body = figlet.textSync('tabun')
const serve = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response('tabun!')
  }
})

console.log(body)
console.log(`Check it http://localhost:${serve.port} 🥟`)