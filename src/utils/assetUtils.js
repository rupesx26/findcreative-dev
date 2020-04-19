// We can use "process.env.VAR_NAME" on both the server and the client.
// See config/env.js and server/indexHtml.js
export function imagePath(assetName) {
  return `${process.env.PUBLIC_URL}/images/${assetName}`;
}

export function workImagePath(assetName) {
  return `${process.env.PUBLIC_URL}/images/work/${assetName}`;
}

export function differImagePath(assetName) {
  return `${process.env.PUBLIC_URL}/images/difference/${assetName}`;
}

export function hrxImagePath(assetName) {
  return `${process.env.PUBLIC_URL}/images/hrx/${assetName}`;
}

export function fontPath(assetName) {
  return `${process.env.PUBLIC_URL}/fonts/${assetName}`;
}

export function blobImagePath(assetName) {
  return `${process.env.PUBLIC_URL}/images/blob/${assetName}`;
}
