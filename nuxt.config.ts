//import { Configuration, NuxtConfig } from '@nuxt/types/config'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs:{
      class: 'bg-light'
    },
    title: 'YMath.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'YMath.io' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel:'stylesheet', href:'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css'},
      { rel:'stylesheet', href:'/style.css'},
      { rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css'}
    ]/*,
    script:[
      {
        src:'https://fred-wang.github.io/mathjax.js/mpadded-min.js', type:'text/javascript'
      }
    ]*/
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'vuesax/dist/vuesax.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src:'@/plugins/vuesax', mode:'client', srr:false}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      remarkPlugins: [
        'remark-math'
      ],
      rehypePlugins: [
        'rehype-katex'
      ]
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  server:{
    host:'0.0.0.0',
    port:process.env.PORT
  },
  hooks: {
    // Doc: https://content.nuxtjs.org/advanced#contentfilebeforeinsert
    'content:file:beforeInsert': async (document: { extension: string; sections: any; text: any; }, database: { markdown: { toJSON: (arg0: any) => any; }; }) => {
      // search for markdown containing
      // only `sections` property.
      //console.log('the document ',document.text) // should exist
      if (document.extension === '.md' &&
        document.sections) {
        // Replace Markdown string in database
        // with the JSON AST version
        const a = document.text;
        const b = a.split('[begin]');
        b.shift();

        let c = b.map((k: string)=> k.split('[end]'));

        c = c.map((k: string[])=>k.map(l=>l.trim()));
        const data = c.map((k: string[])=>{// @ts-ignore
          k[1]=k[1].slice(1,-1).split(','); return k}).map(v=>({text:v[0],options:v[1]}));
        for (let i=0; i<data.length; i++) {
          data[i].text = await database
            .markdown
            .toJSON(data[i].text)
        }
        document.sections = data;

      }
    }
  },
}
