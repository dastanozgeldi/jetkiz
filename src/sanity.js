import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "qkvle73j",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export const createUser = async (name, password) => {
  try {
    // Create a new user document in Sanity with the given name and password
    const response = await client.create({
      _type: "user",
      name,
      password,
    });

    return true; // Return true if the user was successfully created
  } catch (error) {
    console.error(error);
    return false; // Return false if the user could not be created
  }
};

export default client;
