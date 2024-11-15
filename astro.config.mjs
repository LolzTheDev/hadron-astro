import { defineConfig } from "astro/config";
import { ChemicalVitePlugin as Chemical } from "chemicaljs";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  vite: {
    plugins: [
      Chemical({
        default: "uv",
        uv: true,
        rammerhead: true,
        scramjet: true,
      }),
    ],
  },
  integrations: [tailwind()],
});
