import sanityClient from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

export const client = sanityClient({
  projectId: "7vdorx9h",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-06-10",
  token: process.env.TARDIS_TOKEN
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)