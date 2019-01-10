import React from "react";
import axios from 'axios'
import Strings from "./src/assets/strings";

export default {
  plugins: ["react-static-plugin-styled-components", [
    'react-static-plugin-favicons',
    {
      inputFile: './src/assets/img/favicons/favicon-32x32.png',
    },
  ]],
  getSiteData: async ({ dev }) => ({
    title: Strings.landingPage.meta.title,
  }),
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="de-DE">
      <Head>
        <title>{siteData.title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="shortcut icon" href="/favicon.png" type="image/png"></link>
        <link rel="icon" href="/favicon.png" type="image/png"></link>

        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>

        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getRoutes: async () => {
    // const {data: posts} = await axios.get(
    //   'https://jsonplaceholder.typicode.com/posts'
    // )
    return [{
        path: Strings.routing.imprint,
        component: Strings.routing.imprintComponentPath,
        getData: async () => ({
          title: Strings.routing.imprintText
        })
      },
      {
        path: Strings.routing.privacePolicy,
        component: Strings.routing.privacePolicyPath,
        getData: async () => ({
          title: Strings.routing.privacePolicyText
        })
      },
      // {
      //   path: '/blog',
      //   getData: () => ({
      //     posts,
      //   }),
      //   children: posts.map(post => ({
      //     path: `/post/${post.id}`,
      //     component: 'src/containers/Post',
      //     getData: () => ({
      //       post,
      //     }),
      //   })),
      // },
    ]
  },
}
