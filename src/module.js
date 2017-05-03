
function BauCI () {
  let auth = {
    'user': 'your.name',
    'password': 'your-password'
  }

  let Client = require('stash-rest-api').Client

  let stash = new Client(
      'https://stash.b-i.com/rest/api/1.0/',
      auth.user,
      auth.password
  )

  /**
   * Documentation:
   *  https://developer.atlassian.com/static/rest/stash/3.11.3/stash-rest.html
   *  https://www.npmjs.com/package/stash-rest-api
   */

  console.info('> Retreiving data from Stash API...')

  stash.projects.get()
    .then(p => {
      console.log('Projects:', p)
    })
    .catch(reason => console.error(reason))

  // function getProjects () { return stash.projects.get() }

  // function getProjectsAndRepos () {
  //   // Projects
  //   stash.projects.get()
  //     .then(projects => projects)
  //     .then(projectsList => {
  //       if (projectsList.length) {
  //         projectsList.values.map(project => {
  //           // console.log('\n>>> Project :', project)
  //           stash.repos.get(project.key)
  //             .then(repos => {
  //               console.log('*** Project repos:', repos)
  //             })
  //             .catch(reason => console.error(reason))
  //         })
  //       }
  //     })
  //     .catch(reason => console.error(reason))
  // }

  // return {
  //   getProjects: getProjects(),
  //   getProjectsAndRepos: getProjectsAndRepos()
  // }
}

export default BauCI
