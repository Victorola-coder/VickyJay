const image =
  "https://res.cloudinary.com/dkoe20rzl/image/upload/v1692130992/cover_xhnhes.png";
const creator = "VickyJay";
const author = creator;

export const url = (slug) => {
  return `https://victorola.dev/${slug ?? ""}`;
};
export const SEOdata = {
  homePage: {
    author,
    image,
    creator,
    url: url(),
    title: "VickyJay - Creative Fullstack Engineer",
    description:
      "I enjoy building fullstack solutions, from backend systems to frontend experiences, with solid foundations, scalability, and excellent user experiences.",
  },
};
