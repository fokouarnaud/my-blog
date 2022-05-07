/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

 import React from 'react';
 export const onRenderBody = ({ setHeadComponents }) => {
   setHeadComponents([
     
     <link
       key="poppins-regular"
       rel="preload"
       href="/static/fonts/Poppins-Regular.woff2"
       as="font"
       type="font/woff2"
       crossOrigin="anonymous"
     />, 
      <link
       key="poppins-bold"
       rel="preload"
       href="/static/fonts/Poppins-Bold.woff2"
       as="font"
       type="font/woff2"
       crossOrigin="anonymous"
     />,
     <link
       key="poppins-semibold"
       rel="preload"
       href="/static/fonts/Poppins-SemiBold.woff2"
       as="font"
       type="font/woff2"
       crossOrigin="anonymous"
     />
   ]);
 };
