export default {
  list() {
    return this.$axios.get('/api/admin/user/all')
  },
  get(_context, id) {
    return this.$axios.get(`/api/admin/user/${id}`)
  },
  create(_context, data) {
    return this.$axios.post(`/api/admin/user`, data)
  },
  update(_context, data) {
    return this.$axios.put(`/api/admin/user`, data)
  },
  delete(_context, id) {
    return this.$axios.delete(`/api/admin/user/${id}`)
  },
  changePassword(_context, data) {
    return this.$axios.post(`/api/admin/User/ChangePassword`, data)
  },
  resetPassword(_context, data) {
    return this.$axios.post(`/api/admin/User/ResetPassword`, data)
  }
}
