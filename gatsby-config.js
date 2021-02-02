module.exports = {
  siteMetadata: {
    title: `I'm Fisherman!`,
    description: `or developer...`,
    author: `ppzxc <cjh8487@naver.com>`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`, // for the path you can change it based on your preferred folder structure
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: "ppzxc",
              includeDefaultCss: true,
              gistDefaultCssInclude: true,
              gistCssPreload: false,
              gistCssUrlAddress:
                "https://github.githubassets.com/assets/gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1500,
              withWebp: true,
              showCaptions: true,
              quality: 100,
            },
          },
        ],
      },
    },
  ],
}
