The build is failing with the following error after rollup-cache is added.

## The error

```
[1m[31m[!] [1mError: While loading the Rollup configuration from "rollup.config.js", Node tried to require an ES module from a CommonJS file, which is not supported. A common cause is if there is a package.json file with "type": "module" in the same folder. You can try to fix this by changing the extension of your configuration file to ".cjs" or ".mjs" depending on the content, which will prevent Rollup from trying to preprocess the file but rather hand it to Node directly.[22m[1m[39m[22m
[36mhttps://rollupjs.org/guide/en/#using-untranspiled-config-files[39m
[2mError: While loading the Rollup configuration from "rollup.config.js", Node tried to require an ES module from a CommonJS file, which is not supported. A common cause is if there is a package.json file with "type": "module" in the same folder. You can try to fix this by changing the extension of your configuration file to ".cjs" or ".mjs" depending on the content, which will prevent Rollup from trying to preprocess the file but rather hand it to Node directly.
    at Object.error (D:\Projects\test-rollup-cache\node_modules\rollup\dist\shared\rollup.js:198:30)
    at loadConfigFromBundledFile (D:\Projects\test-rollup-cache\node_modules\rollup\dist\shared\loadConfigFile.js:637:27)
    at getDefaultFromTranspiledConfigFile (D:\Projects\test-rollup-cache\node_modules\rollup\dist\shared\loadConfigFile.js:613:12)
    at async loadConfigFile (D:\Projects\test-rollup-cache\node_modules\rollup\dist\shared\loadConfigFile.js:572:11)
    at async Object.loadAndParseConfigFile (D:\Projects\test-rollup-cache\node_modules\rollup\dist\shared\loadConfigFile.js:552:21)
    at async getConfigs (D:\Projects\test-rollup-cache\node_modules\rollup\dist\bin\rollup:1691:39)
    at async runRollup (D:\Projects\test-rollup-cache\node_modules\rollup\dist\bin\rollup:1665:43)[22m

[2K[1G[31merror[39m Command failed with exit code 1.
```
