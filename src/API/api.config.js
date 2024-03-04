export default {
  token: sessionStorage.getItem('token') || null,
  getToken: function () {
    this.token = sessionStorage.getItem('token')
  },
}
