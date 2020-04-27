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

export function niharImagePath(assetName) {
  return `${process.env.PUBLIC_URL}/images/nihar-gold/${assetName}`;
}

export function kateImagePath(assetName) {
  return `${process.env.PUBLIC_URL}/images/kate/${assetName}`;
}

export function thambbiImagePath(assetName) {
  return `${process.env.PUBLIC_URL}/images/thambbi/${assetName}`;
}

export function heroImagePath(assetName) {
  return `${process.env.PUBLIC_URL}/images/hero/${assetName}`;
}

export function cocoImagePath(assetName) {
  return `${process.env.PUBLIC_URL}/images/coco/${assetName}`;
}

export function sussegadoImagePath(assetName) {
  return `${process.env.PUBLIC_URL}/images/jars/${assetName}`;
}

export function rapidrupeeImagePath(assetName) {
  return `${process.env.PUBLIC_URL}/images/rapid-rupee/${assetName}`;
}

export function gravityImagePath(assetName) {
  return `${process.env.PUBLIC_URL}/images/gravity/${assetName}`;
}

export function fontPath(assetName) {
  return `${process.env.PUBLIC_URL}/fonts/${assetName}`;
}

export function blobImagePath(assetName) {
  return `${process.env.PUBLIC_URL}/images/blob/${assetName}`;
}
