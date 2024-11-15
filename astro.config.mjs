import { defineConfig } from "astro/config";
import { ChemicalVitePlugin as Chemical } from "chemicaljs";
import { server as wisp } from "@mercuryworkshop/wisp-js/server";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  vite: {
    plugins: [
      {
        name: "vite-wisp-server",
        configureServer(server) {
          server.httpServer?.on("upgrade", (req, socket, head) =>
            req.url?.startsWith("/f")
              ? wisp.routeRequest(req, socket, head)
              : undefined,
          );
        },
      },
      Chemical({
        default: "uv",
        uv: true,
        rammerhead: true,
        scramjet: true,
      }),
    ],
  },
  output: "server",
  integrations: [tailwind()],
});
