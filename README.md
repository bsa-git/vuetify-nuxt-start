# Nuxt.js + Vuetify.js project

> Utilizing the power of [NUXT](https://nuxtjs.org), supercharge your development experience with a bootstraped version 
ready to go with [Vuetify](https://vuetifyjs.com/vuetify/quick-start) out of the box.

## About

1. This project uses [Vuetify.js](https://vuetifyjs.com). Vuetify.js Material Component Framework.

2. Supercharge your Development with the power of Vue and Material Design.

3. Vuetify comes ready to go with 5 pre-made vue-cli templates. 
Ranging from a simple html to a full blown SSR (server side rendered) application. 
No matter what the project, you are ready to go in minutes with your next great idea.

4. Each and every available layout from the Material design spec is at your disposal. 
Create unique and flexible user interfaces that fit the scope of any task.

5. Every component has been meticulously crafted to offer the easiest, 
most understandable interface and robust api of properties that will customize the 
experience delivered in your next application.

6. Be prepared to have an armada of specialized components at your disposal. 
With over 80 in total, there is a solution for any situation.

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

2. Clone or download [vuetify-nuxt-start](https://github.com/bsa-git/vuetify-nuxt-start) project with git.

3. Install your dependencies

```bash
cd <project-name>
npm install # Or yarn install
```

4. Environment variables

Add file "env.js" to your project to set user environment variables. See the sample file "env.example.js".

5. Start your app

```bash
npm run dev
```

6. The application is now running on http://localhost:3000

## Production

```bash
npm run build
npm start
```

## Generate static project

```bash
npm run generate
```

When building your application it will generate the HTML of every of your routes to store it in a file.

Example:

```bash
-| pages/
----| about.vue
----| index.vue
```

Will generate:

```bash
-| dist/
----| about/
------| index.html
----| index.html
```

This way, you can host your generated web application on any static hosting!

## Help

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js) 
and [Vuetify.js](https://vuetifyjs.com/vuetify/quick-start) documentation

