// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://overlap.gg",
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [sitemap({
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date(),
    })]
});
