// utils.js
import { getCurrentInstance } from 'vue'

export function useRoute() {
  const { proxy } = getCurrentInstance()
  const route = proxy.$route
  return route
}
export function useRouter() {
  const { proxy } = getCurrentInstance()
  const router = proxy.$router
  return router
}