export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "User Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "password",
      type: "string",
      title: "User Password",
      validation: (Rule) => Rule.required(),
    },
  ],
};
