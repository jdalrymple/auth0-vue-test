import {auth} from "../authfile";

export default defineNuxtRouteMiddleware((to, from) => {
  let isAuthenticated = unref(auth.isAuthenticated);

  console.log(isAuthenticated)
  
  auth.loginWithRedirect();
});
