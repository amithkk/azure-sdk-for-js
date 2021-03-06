/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import rollup from "rollup";
import nodeResolve from "rollup-plugin-node-resolve";
import sourcemaps from "rollup-plugin-sourcemaps";

/** @type {rollup.RollupFileOptions} */
const config = {
  input: "./dist-esm/quantumClient.js",
  external: ["@azure/core-http"],
  output: {
    file: "./dist/quantum.js",
    format: "umd",
    name: "Azure.Quantum",
    sourcemap: true,
    globals: {
      "@azure/core-http": "coreHttp"
    },
    banner: `/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */ `
  },
  plugins: [nodeResolve({ module: true }), sourcemaps()]
};

export default config;
