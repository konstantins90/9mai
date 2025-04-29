import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.mjs
    siteTitle: `80 лет Победы – Празднование 9 мая 2025 в Шлосс-Хольте-Штукенброк`,
    siteTitleAlt: `80 лет Победы – Празднование 9 мая 2025 в Шлосс-Хольте-Штукенброк`,
    siteHeadline: `80 лет Победы – Празднование 9 мая 2025 в Шлосс-Хольте-Штукенброк`,
    siteUrl: `https://9-mai.de/`,
    siteDescription: `Приглашаем на торжественное празднование 80-летия Победы в Великой Отечественной войне! 9 мая 2025 года в Шлосс-Хольте-Штукенброк: бессмертный полк, панихида, возложение цветов, концерт и сладкий буфет.`,
    siteImage: `/banner.jpg`,
    siteLanguage: `ru`,
    author: `@ksmetana`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `80 лет Победы – Празднование 9 мая 2025 в Шлосс-Хольте-Штукенброк`,
        short_name: `80 лет Победы`,
        description: `Приглашаем на торжественное празднование 80-летия Победы в Великой Отечественной войне! 9 мая 2025 года в Шлосс-Хольте-Штукенброк: бессмертный полк, панихида, возложение цветов, концерт и сладкий буфет.`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/web-app-manifest-192x192`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/web-app-manifest-512x512`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
