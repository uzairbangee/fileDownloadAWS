/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  /* Your site config here */
  flags: {
    DEV_SSR: false
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-preact`,
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     purgeCSSOptions: {
    //       // https://purgecss.com/configuration.html#options
    //       // safelist: ['safelist'], // Don't remove this selector
    //     },
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     custom: {
    //       families: ["Calibri-Regular", "Calibri-Light", "Calibri-Light-Italic", "Calibri-Italic", "Calibri-Bold", "Calibri-Bold-Italic"],
    //       urls: ["/fonts/fonts.css"],
    //     },
    //   },
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.*\.svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/*`] },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: ["https://js.stripe.com/v3", "https://www.google-analytics.com"],

        custom: [
          {
            name: ["Calibri-Regular", "Calibri-Light", "Calibri-Light-Italic", "Calibri-Italic", "Calibri-Bold", "Calibri-Bold-Italic"],
            file: "/fonts/fonts.css"
          }
        ],

        web: [
          {
            name: "Material Icons",
            file: "https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"
          }
        ]
      }
    }
  ],
}