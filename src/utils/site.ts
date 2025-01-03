const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://the-portfolio-lac.vercel.app";

export const siteConfig = {
  name: "Mariwan | Front-End Developer",
  description:
    "Personal portfolio website showcasing my projects and skills as a front-end developer",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    twitter: "https://twitter.com/Mariwan_01",
    github: "https://github.com/mariwan001/",
  },
  mailSupport: "sehadmarewan@gmail.com",
};
