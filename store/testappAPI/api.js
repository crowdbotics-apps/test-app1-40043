import axios from "axios"
const testappAPI = axios.create({
  baseURL: "https://test-app1-40043.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return testappAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return testappAPI.post(`/api/v1/login/`, payload)
}
function api_v1_recipe_list(payload) {
  return testappAPI.get(`/api/v1/recipe/`)
}
function api_v1_recipe_create(payload) {
  return testappAPI.post(`/api/v1/recipe/`, payload)
}
function api_v1_recipe_retrieve(payload) {
  return testappAPI.get(`/api/v1/recipe/${payload.id}/`)
}
function api_v1_recipe_update(payload) {
  return testappAPI.put(`/api/v1/recipe/${payload.id}/`, payload)
}
function api_v1_recipe_partial_update(payload) {
  return testappAPI.patch(`/api/v1/recipe/${payload.id}/`, payload)
}
function api_v1_recipe_destroy(payload) {
  return testappAPI.delete(`/api/v1/recipe/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return testappAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return testappAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return testappAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return testappAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return testappAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return testappAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testappAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return testappAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return testappAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return testappAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testappAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return testappAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_recipe_list,
  api_v1_recipe_create,
  api_v1_recipe_retrieve,
  api_v1_recipe_update,
  api_v1_recipe_partial_update,
  api_v1_recipe_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
