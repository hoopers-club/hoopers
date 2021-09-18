// export default {
// 	projectRoot: '.', // Where to resolve all URLs relative to. Useful if you have a monorepo project.
// 	pages: './src/pages', // Path to Astro components, pages, and data
// 	dist: './dist', // When running `astro build`, path to final static output
// 	public: './public', // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
// 	buildOptions: {
// 		site: 'http://example.com', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
// 		sitemap: false, // Generate sitemap (set to "false" to disable)
// 	},
// 	devOptions: {
// 		// hostname: 'localhost',  // The hostname to run the dev server on.
// 		// port: 3000,             // The port to run the dev server on.
// 		// tailwindConfig: '',     // Path to tailwind.config.js if used, e.g. './tailwind.config.js'
// 	},
// 	renderers: ['@astrojs/renderer-react'],
// };

// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	// Enable the Preact renderer to support Preact JSX components.
	renderers: ['@astrojs/renderer-react'],
});
