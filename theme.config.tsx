import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from "next/image";
import SVGIMG from "image/i3.svg";

const config: DocsThemeConfig = {
  logo: <span>FaceTime API</span>,
  //primaryHue:152,
  project: {
    link: 'https://github.com/adelayman1/FaceTimeCloneAPI',
    //icon:(<Image src={SVGIMG} alt={""}/>)
  },
  docsRepositoryBase: 'https://github.com/adelayman1/FaceTimeCloneAPI',
  footer: {
    text: 'adelayman1',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
      <meta property="og:title" content="adelayman1" />
      <meta property="og:description" content="FaceTime clone api" />
      <link rel="icon" href="https://i.ibb.co/SdKf7W8/d16x16.png" sizes='16x16'/>
    </>
  )
}

export default config
