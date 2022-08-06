import { createAuth0 } from "@auth0/auth0-vue";

export const auth = createAuth0({
  domain: "devxxxxxxxx.auth0.com",
  client_id: "12345",
  redirect_uri: "http://localhost:3000",
});
