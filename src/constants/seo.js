const image =
  "https://res.cloudinary.com/dkoe20rzl/image/upload/v1692130992/cover_xhnhes.png";
const creator = "VickyJay";
const author = creator;

export const url = (slug) => {
  return `https://victorola.me/${slug ?? ""}`;
};
export const SEOdata = {
  homePage: {
    author,
    image,
    creator,
    url: url(),
    title: "VickyJay - Creative Frontend Engineer",
    description:
      "I enjoy creating frontend solutions with solid foundations, scalability, and excellent user experiences.",
  },
};
