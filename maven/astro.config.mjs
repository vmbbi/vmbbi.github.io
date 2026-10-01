// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://vmbbi.is-a.dev",
  integrations: [preact()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Minecraft",
      cssVariable: "--font-minecraft",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Minecraft.woff2"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],
});
