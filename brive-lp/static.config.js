import axios from "axios";
import Strings from './src/assets/strings'
import React from "react";

export default {
  // siteRoot: Strings.landingPage.meta.siteRoot,
  getSiteData: () => ({
    title: Strings.landingPage.meta.title
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
    // const { data: posts } = await axios.get(
    //   "https://jsonplaceholder.typicode.com/posts"
    // );
    return [
      {
        path: "/",
        component: "src/containers/Home"
      },
      {
        path: Strings.routing.imprint,
        component: Strings.routing.imprintComponentPath,
      },
      {
        path: Strings.routing.privacePolicy,
        component: Strings.routing.privacePolicyPath,
      },
      // {
      //   path: '/about',
      //   component: 'src/containers/About',
      // },
      // {
      //   path: '/blog',
      //   component: 'src/containers/Blog',
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
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  }
};
