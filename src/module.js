
function BauCI () {
  let auth = {
    'user': 'your-username',
    'password': 'your-password'
  }

  let Client = require('stash-rest-api').Client

  let stash = new Client(
      'https://stash.b-i.com/rest/api/1.0/',
      auth.user,
      auth.password
  )

  stash.projects.get().then(p => console.log('> Projects:', p))
}

export default BauCI
