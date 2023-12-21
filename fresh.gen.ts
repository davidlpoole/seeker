// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_v1_scrape_searchTerm_location_index from "./routes/api/v1/scrape/[searchTerm]/[location]/index.tsx";
import * as $api_v1_scrape_searchTerm_index from "./routes/api/v1/scrape/[searchTerm]/index.tsx";
import * as $api_v2_scrape_index from "./routes/api/v2/scrape/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $AddToList from "./islands/AddToList.tsx";
import * as $App from "./islands/App.tsx";
import * as $Count from "./islands/Count.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/v1/scrape/[searchTerm]/[location]/index.tsx":
      $api_v1_scrape_searchTerm_location_index,
    "./routes/api/v1/scrape/[searchTerm]/index.tsx":
      $api_v1_scrape_searchTerm_index,
    "./routes/api/v2/scrape/index.tsx": $api_v2_scrape_index,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/AddToList.tsx": $AddToList,
    "./islands/App.tsx": $App,
    "./islands/Count.tsx": $Count,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
