module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget("./public/js/");
  eleventyConfig.addWatchTarget("./public/css/");
  eleventyConfig.addWatchTarget("./_data/site.json");
  eleventyConfig.addWatchTarget("./_data/images.json");
  
  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });

  eleventyConfig.setChokidarConfig({
    usePolling: true,
    interval: 500,
  });

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "build",
    },
  };
};
