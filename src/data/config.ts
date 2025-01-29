const config = {
  title: "Sagar Singh Raghav | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Sagar, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Sagar, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Sagar",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Blitzkrieg",
    "Dandelions",
    "CodeForces Statistics",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Sagar Singh Raghav",
  email: "sagar.singh.raghavv@gmail.com",
  site: "www.google.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/Cricdictor",
    linkedin: "https://www.linkedin.com/in/thesagarsingh/",
    instagram: "https://www.instagram.com/theguyywhoclicks",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/Sagar20-12",
  },
};
export { config };
