const Buffer = require("buffer/").Buffer;
const axios = require("axios").default;

async function getModelDetails(apiKey, modelId) {
	const authHeaderVal =
		"Basic " + Buffer.from(`${apiKey}:`, "utf-8").toString("base64");

	const data = await axios
		.get(`https://app.nanonets.com/api/v2/OCR/Model/${modelId}`, {
			headers: {
				"Authorization": authHeaderVal,
				"Accept": "application/json"
			}
		})
		.then((res) => res.data)
		.catch((err) => console.error(err));

	return data;
}

async function extractData(apiKey, modelId, fileURL) {
	const authHeaderVal =
		"Basic " + Buffer.from(`${apiKey}:`, "utf-8").toString("base64");
	const file = `urls=${fileURL}`;

	const data = await axios
		.post(
			`https://app.nanonets.com/api/v2/OCR/Model/${modelId}/LabelFile`,
			file,
			{
				headers: {
					"Authorization": authHeaderVal,
					"Accept": "application/json"
				}
			}
		)
		.then((res) => res.data)
		.catch((err) => console.error(err));

	return data;
}

module.exports = { getModelDetails, extractData };
