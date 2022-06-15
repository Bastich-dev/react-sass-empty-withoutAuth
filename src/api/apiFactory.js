const apiFactory = {}

export default apiFactory

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// API FACTROY CC2V

// import axios from 'axios'
// import { message } from 'antd'
// import { getAuthTokenInLocalStorage } from '~/contexts/AuthContext'
// import _ from 'lodash'

// const PUBLIC_ROUTE_PRE = '/api/'
// const ADMIN_ROUTE_PRE = '/api/admin/'

// const that = {
//     getAxiosInstence(autenticatedRoute = true) {
//         let reqHeaders = {}

//         if (autenticatedRoute === true) {
//             const auth_token = getAuthTokenInLocalStorage()
//             reqHeaders.Authorization = `Token ${auth_token}`
//         }

//         return axios.create({
//             baseURL: process.env.NEXT_PUBLIC_API_FULL_URL,
//             // timeout: 1000,
//             headers: reqHeaders,
//         })
//     },

//     listRoute(url, extraParams = {}, autenticatedRoute = true) {
//         let api = that.getAxiosInstence(autenticatedRoute)

//         return new Promise((resolve, reject) => {
//             api.get(url, { params: extraParams })
//                 .then((apiResp) => {
//                     let res = apiResp.data

//                     resolve(res)
//                 })
//                 .catch((err) => {
//                     if (
//                         !_.isNil(err.response) &&
//                         !_.isNil(err.response.status) &&
//                         ![404, 401].includes(err.response.status)
//                     ) {
//                         message.error('Une erreur est survenue.')
//                     }
//                     reject(err)
//                 })
//         })
//     },
//     showRoute(url, extraParams = {}, autenticatedRoute = true) {
//         let api = that.getAxiosInstence(autenticatedRoute)

//         return new Promise((resolve, reject) => {
//             api.get(url, { params: extraParams })
//                 .then((apiResp) => {
//                     let res = apiResp.data

//                     resolve(res)
//                 })
//                 .catch((err) => {
//                     if (
//                         !_.isNil(err.response) &&
//                         !_.isNil(err.response.status) &&
//                         ![404, 401].includes(err.response.status)
//                     ) {
//                         message.error('Une erreur est survenue.')
//                     }

//                     reject(err)
//                 })
//         })
//     },
//     createRoute(url, values, autenticatedRoute = true) {
//         let api = that.getAxiosInstence(autenticatedRoute)

//         return new Promise((resolve, reject) => {
//             api.post(url, values)
//                 .then((apiResp) => {
//                     let res = apiResp.data

//                     resolve(res)
//                 })
//                 .catch((err) => {
//                     message.error('Création impossible.')
//                     reject(err)
//                 })
//         })
//     },
//     updateRoute(url, values, autenticatedRoute = true) {
//         let api = that.getAxiosInstence(autenticatedRoute)

//         return new Promise((resolve, reject) => {
//             api.patch(url, values)
//                 .then((apiResp) => {
//                     let res = apiResp.data

//                     resolve(res)
//                 })
//                 .catch((err) => {
//                     message.error('Enregistrement impossible.')
//                     reject(err)
//                 })
//         })
//     },
//     deleteRoute(url, extraParams = {}, autenticatedRoute = true) {
//         let api = that.getAxiosInstence(autenticatedRoute)

//         return new Promise((resolve, reject) => {
//             api.delete(url, { params: extraParams })
//                 .then((apiResp) => {
//                     resolve('ok')
//                 })
//                 .catch((err) => {
//                     message.error('Suppression impossible.')
//                     reject(err)
//                 })
//         })
//     },

//     /* Users */
//     getUsers(params = {}) {
//         return that.listRoute(ADMIN_ROUTE_PRE + 'users/', params)
//     },
//     getUser(id) {
//         if (_.isNil(id)) return Promise.reject(new Error('ERR_EMPTY_PARAM'))
//         return that.showRoute(`${ADMIN_ROUTE_PRE}users/${id}/`)
//     },
//     createUser(values = {}) {
//         return that.createRoute(`${ADMIN_ROUTE_PRE}users/`, values)
//     },
//     updateUser(id, values = {}) {
//         if (_.isNil(id)) return Promise.reject(new Error('ERR_EMPTY_PARAM'))
//         values = _.omit(values, ['password_confirmation'])

//         if (_.isNil(values.password)) {
//             values = _.omit(values, ['password'])
//         }

//         return that.updateRoute(`${ADMIN_ROUTE_PRE}users/${id}/`, values)
//     },
//     deleteUser(id, newAuthor) {
//         return that.deleteRoute(`${ADMIN_ROUTE_PRE}users/${id}/`, {
//             new_author: newAuthor,
//         })
//     },

//     /* Companies */
//     getCompanies(params = {}) {
//         return that.listRoute(ADMIN_ROUTE_PRE + 'companies/', params)
//     },
//     getCompany(slug) {
//         if (_.isNil(slug)) return Promise.reject(new Error('ERR_EMPTY_PARAM'))
//         return that.showRoute(`${ADMIN_ROUTE_PRE}companies/${slug}/`)
//     },
//     createCompany(values = {}) {
//         return that.createRoute(`${ADMIN_ROUTE_PRE}companies/`, values)
//     },
//     updateCompany(slug, values = {}) {
//         if (_.isNil(slug)) return Promise.reject(new Error('ERR_EMPTY_PARAM'))
//         return that.updateRoute(`${ADMIN_ROUTE_PRE}companies/${slug}/`, values)
//     },
//     changeCompanyResponsible(slug, responsible_id) {
//         if (_.isNil(slug)) return Promise.reject(new Error('ERR_EMPTY_PARAM'))
//         return that.updateRoute(`${ADMIN_ROUTE_PRE}companies/${slug}/responsible/`, {
//             responsible_id,
//         })
//     },
//     declineCompany(slug, comments) {
//         if (_.isNil(slug)) return Promise.reject(new Error('ERR_EMPTY_PARAM'))
//         return that.updateRoute(`${ADMIN_ROUTE_PRE}companies/${slug}/decline/`, {
//             comments,
//         })
//     },
//     deleteCompany(slug) {
//         return that.deleteRoute(`${ADMIN_ROUTE_PRE}companies/${slug}/`)
//     },

//     /* Admin Dahsboard */
//     getAdminDashboard() {
//         return that.showRoute(`${ADMIN_ROUTE_PRE}admin/dashboard/`)
//     },

//     /* Settings */
//     getSettings(params = {}) {
//         return that.listRoute(`${PUBLIC_ROUTE_PRE}settings/`, params, false)
//     },

//     /* Media */
//     uploadMedia(file, values = {}) {
//         let api = that.getAxiosInstence(true),
//             formData = new FormData()

//         formData.append('file', file.originFileObj)

//         _.each(values, (v, k) => {
//             formData.append(k, v)
//         })

//         var formValues = {}
//         formData.forEach((value, key) => (formValues[key] = value))

//         return new Promise((resolve, reject) => {
//             api.post(`${ADMIN_ROUTE_PRE}medias/`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             })
//                 .then((apiResp) => {
//                     let res = apiResp.data

//                     resolve(res)
//                 })
//                 .catch((err) => {
//                     message.error('Upload impossible.')
//                     reject(err)
//                 })
//         })
//     },
//     deleteMedia(uuid) {
//         return that.deleteRoute(`${ADMIN_ROUTE_PRE}medias/${uuid}/`)
//     },

//     /* Authentication */
//     auth: {
//         login(values) {
//             let api = that.getAxiosInstence(false)

//             return new Promise((resolve, reject) => {
//                 api.post(`${ADMIN_ROUTE_PRE}auth/admin/login/`, values)
//                     .then((apiResp) => {
//                         let res = apiResp.data

//                         resolve(res)
//                     })
//                     .catch((err) => {
//                         reject(err)
//                     })
//             })
//         },
//         me() {
//             return that.showRoute(`${ADMIN_ROUTE_PRE}auth/users/me/`)
//         },
//         updateMe(values = {}) {
//             values = _.omit(values, ['password_confirmation'])

//             if (_.isNil(values.password)) {
//                 values = _.omit(values, ['password'])
//             }

//             return that.updateRoute(`${ADMIN_ROUTE_PRE}auth/users/me/`, values)
//         },
//         lostPassword(values) {
//             let api = that.getAxiosInstence(false)

//             return new Promise((resolve, reject) => {
//                 api.post(`${ADMIN_ROUTE_PRE}auth/users/reset_password/`, values)
//                     .then((apiResp) => {
//                         let res = apiResp.data

//                         resolve(res)
//                     })
//                     .catch((err) => {
//                         reject(err)
//                     })
//             })
//         },
//         changePassword(values = {}) {
//             let api = that.getAxiosInstence(false)
//             let newV = _.omit(values, ['password', 'password_confirmation'])

//             if (!_.isNil(values.password)) {
//                 newV.new_password = values.password
//             }

//             return new Promise((resolve, reject) => {
//                 api.post(`${ADMIN_ROUTE_PRE}auth/users/reset_password_confirm/`, newV)
//                     .then((apiResp) => {
//                         let res = apiResp.data

//                         resolve(res)
//                     })
//                     .catch((err) => {
//                         reject(err)
//                     })
//             })
//         },
//     },

//     /* Query builder */
//     query: {
//         search(params, value = '') {
//             if (!_.isEmpty(value)) params.search = value

//             return params
//         },
//         ordering(params, sorter) {
//             if (!_.isEmpty(sorter.order)) {
//                 let sortVal = sorter.field

//                 if (sorter.order == 'descend') {
//                     sortVal = '-' + sortVal
//                 }

//                 params.ordering = sortVal
//             }

//             return params
//         },
//         filters(params, filters) {
//             params = _.merge(params, filters)

//             return params
//         },
//         pagination(params, pagination) {
//             params.page = pagination.current || 1
//             params.size = pagination.pageSize || 20

//             return params
//         },
//     },
// }
