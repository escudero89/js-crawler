# JS Crawler

Crawls results from [Google](https://google.com), and retrieves the JS files that are used in their most relevant results.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses [Ant Design](https://ant.design/) for the UI.

## Running the app

Install the dependencies with `npm` or `yarn` (this project uses `Node v12`). Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How it works

Once the user enters a search value in the home, we use [Puppeter](https://pptr.dev/) to crawl results in Google by exposing our own API.

> We use Puppeter with a [extra stealth plugin](https://www.npmjs.com/package/puppeteer-extra-plugin-stealth) to avoid detection by Google. Some sites (like Google) take crawling seriously, so we can't use a simple `CURL` to retrieve its content. This is why we have to use some browser emulator (in this case, a headless chromium) to navigate and retrieve its content. However, this approach is more **costly** (due to the increased usage of CPU).

Then we select using a certain query the links that are brought back by Google's results page. For each link, we also execute a crawl (in parallel due to how we implemented the components and the API calls) using Puppeter, and we extract the `script` tags with a `js` src code.

> We could just use a `curl` for most sites. This could be a potential improvement over this code.

For selecting the top scripts, we parse the sources and:

- remove the `.min` extension if exists.
- convert into wildcards the semver (e.g. `1.2.3` becomes `x.x.x`).
- remove query params and fragments (e.g. `/sit?in=chair#please` becomes `/sit`).
- remove internal paths.

By doing this, we take as "the same code" different variations of the same URL. For example, the following URLs are "equal":

- [https://cdn.example.com/folder/container/the-library.0.1.1.min.js](#)
- [https://cdn.example.com/the-library.x.x.x.js](#)

Better improvements can be done into these heuristics, to understand even better if two libraries are "the same".

## Configuration 

In the file [`/config/default.tsx`](config/default.tsx) you can find attributes for the configuration of the project.

### Parameters

- **MAX_CRAWLED_URLS_FROM_GOOGLE**. The max quantity of urls that we are going to take as relevant.
- **MAX_LENGTH_OF_SCRIPT_SOURCE**. Formats the max-len of scripts that are visualized in the results page.
- **MAX_QUANTITY_OF_LIBRARIES_SHOWN**. The number of libraries we are selecting to show on the top scripts list.

### Routes

Internal configuration of routes.

### Crawler

The crawler configuration, divided in the Google configuration, and the sites configuration.

- **google.url**. The url for google to start to look for results.
- **google.querySelectorAll**. The `querySelectorAll` value we use to crawl for links (Google returns lots of links, so we need to be specific about or search).
- **sites.querySelectorAll**. The `querySelectorAll` value we use to grab the script sources from the crawled sites.

## What could be improved upon

There are several things that we could add to this project to make it better. Just to name a few that were not mentioned above:

- A better error handling. Especially on the crawler (we assume that everything is going to be okay).
- Tests. We added just a few as a proof of concept and to setup the environement for more tests. Plus, the added tests are only unit test, we could add e2e test (via wdio for example), and snapshots/storybooks for the components.
- UI improvements (the bare minimum was done, but it looks nice thanks to Ant Design).
- Metrics, such as NewRelic and Datadog (for app measurements), and Google Analytics (for product measurements), if we decide to host the app.
