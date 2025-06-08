import { createMiddleware } from "@solidjs/start/middleware";
import { json } from "@solidjs/router";

const TRUSTED_ORIGINS = ["http://localhost:8081"];

export default createMiddleware({
  onBeforeResponse: (event) => {
    const { request, response } = event;

    response.headers.append("Vary", "Origin, Access-Control-Request-Method");

    const origin = request.headers.get("Origin");
    const requestUrl = new URL(request.url);
    const isApiRequest = requestUrl && requestUrl.pathname.startsWith("/api");

    if (isApiRequest && origin && TRUSTED_ORIGINS.includes(origin)) {
      // Handle preflight requests.
      if (
        request.method === "OPTIONS" &&
        request.headers.get("Access-Control-Request-Method")
      ) {
        // Preflight requests are standalone, so we immediately send a response.
        return json(null, {
          headers: {
            "Access-Control-Allow-Origin": origin,
            "Access-Control-Allow-Methods": "OPTIONS, POST, PUT, PATCH, DELETE",
            "Access-Control-Allow-Headers": "Authorization, Content-Type",
            'Access-Control-Allow-Credentials': 'true',
          },
        });
      }

      // Handle normal requests.
      response.headers.set("Access-Control-Allow-Origin", origin);
      response.headers.set('Access-Control-Allow-Credentials', 'true')
    }
  },
});