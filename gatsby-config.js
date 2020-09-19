module.exports = {
  siteMetadata: {
    title: 'GDevelop - Make your own games with no programming skills',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-twitter',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        // fonts: [`Asap:400,600`, `Roboto`],
        fonts: [`PT Sans:400`, `Roboto`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-9116535-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'GDevelop website',
        short_name: 'GDevelop website',
        background_color: '#ffffff',
        theme_color: '#9746c1',
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/favicons/favicon.ico`,
            sizes: `256x256`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog/posts`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog/authors`,
        name: 'authors',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              containerClass: 'embedVideo-container',
            },
          }, // Auto embed video links as iframes
          { resolve: `gatsby-remark-images` },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: {
                js: 'javascript',
                sh: 'bash',
                py: 'python',
              },
            },
          }, // JS Code highlighting
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` }, // Smart punctuation
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
