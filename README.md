# React; Crypto Exchange Template

# sanity-template-nextjs-landing-pages

_SEO friendly page builder in React.js. Heroes, sign-up forms and calls to action._

This template repo is used by Sanity.io to easily create deployed and configured projects through a web interface. You can test it by [creating this project](https://www.sanity.io/create/?template=sanity-io%2Fsanity-template-nextjs-landing-pages).

The template contains both a Sanity Studio and a front-end in Next.js. Both are deployed on Netlify.

Want to make a template for Sanity and your favourite front-end framework? We’re still maturing [sanity.io/create](https://sanity.io/create) and our APIs, but do tell us about it on [slack.sanity.io](https://slack.sanity.io).

![Staking](https://firebasestorage.googleapis.com/v0/b/re-bench.appspot.com/o/Screenshot%20from%202021-07-21%2017-53-45.png?alt=media&token=cc160b15-e90b-48b5-9760-dfba65d4d36f)


![Farming](https://firebasestorage.googleapis.com/v0/b/re-bench.appspot.com/o/Screenshot%20from%202021-07-21%2017-53-56.png?alt=media&token=400d8e6b-4b5b-4073-b20e-a8e8994bbfcb)

![Lab](https://firebasestorage.googleapis.com/v0/b/re-bench.appspot.com/o/Screenshot%20from%202021-07-21%2017-54-19.png?alt=media&token=6260d3f6-d887-4057-8ed1-fe11cf9f63d1)

![Guides Activity](https://firebasestorage.googleapis.com/v0/b/re-bench.appspot.com/o/Screenshot%20from%202021-07-21%2017-54-37.png?alt=media&token=aec295f2-499c-4047-b6a8-8f3585c43406)

## Local development

You develop the templates in `/template`, and review your changes in `/build`.

1. **Install dependencies with `npm install` in the root folder.** This will install the template development tool that watches changes in the `/template` folder and output the template to `/build`.

2. **Run `npm run dev` in root folder.** This will build the template files to `/build`. This is how the code will look for those who install the project later.

3. **Run `npm install` in `./build/web` and `sanity install` in `/build/studio`** This will install the necessary dependencies for the Next.js frontend and the Studio.

4. **Run `npm run dev` in `./build/web` and `sanity start` in `/build/studio`**. This will start the development servers for the Next.js frontend and Sanity Studio.

## Notes

When developing ProjectId and dataset name can be changed in `template-values-development.json`