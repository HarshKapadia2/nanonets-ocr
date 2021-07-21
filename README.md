# nanonets-ocr

A test NPM package to use the Nanonets OCR API.

***Do not use in production.***

NPM package: https://www.npmjs.com/package/nanonets-ocr

## Usage

```shell
> npm install nanonets-ocr
```

```javascript
const ocr = require("nanonets-ocr");
```

### To get model details

```javascript
await ocr.getModelDetails(apiKey, modelId);
```

### To extract data

```javascript
await ocr.extractData(apiKey, modelId, fileURL);
```

> NOTE:
> - The model is assumed to have already been created on the [Nanonets platform](https://nanonets.com).
> - Example usage: [HarshKapadia2/nanonets-ocr-app](https://github.com/HarshKapadia2/nanonets-ocr-app)
> - 'Buffer variable not found' error: Run `npm install buffer` in the project and add `if (typeof Buffer === "undefined") global.Buffer = require("buffer").Buffer;` at the head of the main file. ([More details](https://github.com/facebook/react-native/issues/14796).)
