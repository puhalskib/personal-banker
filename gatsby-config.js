module.exports = {
<<<<<<< HEAD
  siteMetadata: {
    //siteUrl: "https://www.yourdomain.tld",
    title: "personal banker",
    description: "banking app for keeping track.",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`,
      },
    },
  ],
=======
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "personal banker",
	},
	plugins: [
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
	],
>>>>>>> parent of db095d3 (added graphql blog data layer)
};
