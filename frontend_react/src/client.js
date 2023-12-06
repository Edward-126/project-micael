import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "19i2868n",
  dataset: "production",
  apiVersion: "2023-12-06",
  useCdn: false,
  token:
    "skKPw3b5DcEV7PU9kTol1qfyRdk6WJeoTu1NE5nA5gjx1C4hWtli6T848MwAHZ6JOmB7788XZZivhRP1t3CBAtgbDtxT0P47U3rTDg6cXN5iGGKHueDenvQZfQjtAxAgjlGUYFOm4MHZzSFOjwZA8F2AdkZcu5jBv4yrQHSiM2JR1r9Kyg8c",
});

// ! FIX THIS SHIT!

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
