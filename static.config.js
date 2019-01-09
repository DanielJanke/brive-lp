import React from "react";
import axios from 'axios'
import Strings from "./src/assets/strings";

export default {
  // plugins: ["react-static-plugin-styled-components", [
  //   'react-static-plugin-favicons',
  //   {
  //     // inputFile: path.resolve(__dirname, 'icon.svg')
  //   },
  // ]],
  getSiteData: async ({ dev }) => ({
    title: Strings.landingPage.meta.title,
  }),
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="de-DE">
      <Head>
        <title>{siteData.title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getRoutes: async () => {
    const {data: posts} = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
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
