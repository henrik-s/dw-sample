## 1. How do we build and run it?

1\. Install node modules
```sh
> npm i
```
2\. Build and serve at [localhost:9000](http://localhost:9000/)
```sh
> npm run build; npm run serve
```
    
The sample app is also accessible at [https://happy-field-02cbce203.azurestaticapps.net/](https://happy-field-02cbce203.azurestaticapps.net/)

## 2. What tools did you use and why?
The solution is built with Gatsby, more specifically the [Gatsby's hello-world starter](https://github.com/gatsbyjs/gatsby-starter-hello-world) recipe. I used it since it fulfilled the requirements listed in the challenge (according to my interpretation) together with the fact that Gatsby was among the techniques listed for the role.

The majority of the code is written in [TypeScript](https://www.typescriptlang.org/). I used it simply because it's superior to vanilla JavaScript.

[axios](https://www.npmjs.com/package/axios) is another tool used to simplify API requests. The standardized [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) could have been used instead, but axios is a good replacement offering support for IE as well as node.js environments.

Another third-party tool used is [rc-drawer](https://www.npmjs.com/package/rc-drawer) to present product details.

## 3. Did you intentionally leave anything out? If yes, what and why?
I didn't spend that much time on the UX-aspect of the product detail view. It's pretty rough. I did this because the challenge didn't include a design for that view.

I missed out on the bonus point - including unit tests. Pure unit tests are good to have if you have a lot of intricate internal functions which this (simple) app doesn't have. Historically I've utilized snapshot tests for React components, which usually requires mocked data. Creating up a clean mock api would require more time and effort. Finally, based on my experience, setting up i.e. [Jest](https://jestjs.io/) (even though it says 'zero config') for React and TypeScript usually requires a bit of configuration.

I intentionally **kept** a piece of code which may seem a bit odd - the use of [gatsby-source-rest-api](https://www.gatsbyjs.com/plugins/gatsby-source-rest-api/). The only thing it achieves is three server side rendered product cards 
```
<div>Static server side card</div>
```
on the index page. I tried out the plugin while exploring the server side rendering aspect of Gatsby and I kept the code because I would be interested to discuss this aspect with you.
