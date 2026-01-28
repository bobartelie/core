export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory("views");
  eleventyConfig.addPassthroughCopy({"../public": "/"});
  
  eleventyConfig.addWatchTarget("./views/_data/**");
  eleventyConfig.addWatchTarget("./views/_includes/**");

  eleventyConfig.addFilter("json", (text) => {
    return `<pre>${JSON.stringify(text, null, 2)}</pre>`
  });
  eleventyConfig.setServerOptions({
    showAllHosts: true,
    port: 8080,
  })
}