# nanonets-ocr

A test NPM package to use the Nanonets OCR API. **Do not use in production.**

## Usage

```shell
> npm install nanonets-ocr
```

```javascript
const ocr = require("nanonets-ocr");
```

> The model is assumed to have already been created on the [Nanonets platform](https://nanonets.com).

### To get model details

```javascript
await ocr.getModelDetails(apiKey, modelId);
```

### To extract data

```javascript
await ocr.extractData(apiKey, modelId, fileURL);
```
