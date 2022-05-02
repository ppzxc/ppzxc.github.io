module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-simple-blog",
      options: {}
    }
  ],
  siteMetadata: {
    url: "https://ppzxc.github.io",
    title: "I am fisherman",
    author: "ppzxc",
    description: "or developer...",
    locale: "kr",
    socialLinks: [
      {
        text: "GitHub",
        link: "https://github.com/ppzxc"
      }
    ],
    navLinks: [
      {
        text: "Home",
        link: "/"
      }
	  //,
      //{
      //  text: "About",
      //  link: "/about"
      //},
      //{
      //  text: "Contact",
      //  link: "/contact"
      //}
    ],
    themeConfig: {
      themeSwitcher: false, // enable theme switcher
      showNavLinks: false, // show links from navLinks array in navbar
      loadMorePosts: false, // enable load more posts
      postsPerPage: 10, // posts to display per page
      postsIncrementBy: 5 // posts increment value
    }
  }
};
