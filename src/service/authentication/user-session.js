export default {
    save: user => window.sessionStorage.user = JSON.stringify(user),
    get: () => (window.sessionStorage.user) ? JSON.parse(window.sessionStorage.user) : null,
    getBearerToken: () => `Bearer ${ window.sessionStorage.user? JSON.parse(window.sessionStorage.user).token : '' }`,
    remove: () => window.sessionStorage.removeItem('user')
  }