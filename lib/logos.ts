type logoNames =
  | "netlify"
  | "css"
  | "html"
  | "react"
  | "bootstrap"
  | "expressjs"
  | "git"
  | "github"
  | "materialui"
  | "mongodb"
  | "nextjs"
  | "typescript"
  | "vercel"
  | "nodejs"
  | "javascript"
  | "redux"
  | "tailwind"
  | "axios"
  | "chakraui"
  | "rapidapi"
  | "vitejs"
  | "firebase";

type Logos = {
  [k in logoNames]: {
    label: string;
    logo: string ;
    spin?: boolean;
    invert?: boolean;
  };
};

const logos: Logos = {
  netlify: {
    label: "Netlify",
    logo: "./assets/icons/netlify-icon.svg",
    spin: false,
    invert: true,
  },
  css: {
    label: "CSS",
    logo: "./assets/icons/css-icon.svg",
    spin: false,
  },
  html: {
    label: "HTML",
    logo: "./assets/icons/w3_html5-icon.svg",
    spin: false,
  },
  react: {
    label: "React",
    logo: "./assets/icons/react.png",
    spin: true,
  },
  bootstrap: {
    label: "Bootstrap",
    logo: "./assets/icons/bootstrap.svg",
  },
  expressjs: {
    label: "Express.js",
    logo: "./assets/icons/expressjs.png",
  },
  vitejs: {
    label: "Vite.js",
    logo: "./assets/icons/vitejs.svg",
  },

   rapidapi: {
    label: "Rapidapi",
    logo: "./assets/icons/rapidapi-icon.svg",
  },
  git: {
    label: "Git",
    logo: "./assets/icons/git.svg",
  },
  github: {
    label: "GitHub",
    logo: "./assets/icons/github.svg",
    invert: true,
  },
  materialui: {
    label: "Material-UI",
    logo: "./assets/icons/materialui.svg",
  },
  mongodb: {
    label: "MongoDB",
    logo: "./assets/icons/mongodb.svg",
  },
  nextjs: {
    label: "Next.js",
    logo: "./assets/icons/nextjs.svg",
    invert: true,
  },

  typescript: {
    label: "TypeScript",
    logo: "./assets/icons/typescript.svg",
  },
  vercel: {
    label: "Vercel",
    logo: "./assets/icons/vercel.svg",
    invert: true,
  },
  nodejs: {
    label: "Node.js",
    logo: "./assets/icons/nodejs.svg",
  },
  javascript: {
    label: "JavaScript",
    logo: "./assets/icons/javascript.svg",
  },
  redux: {
    label: "Redux",
    logo: "./assets/icons/redux.svg",
  },
  tailwind:{
    label:"Tailwindcss",
    logo: "./assets/icons/tailwindcss-icon.svg"
  },
  axios:{
    label:"Axios",
    logo: "./assets/icons/axios-icon.svg"
  },
  firebase:{
    label:"Firebase",
    logo: "./assets/icons/firebase-icon.svg"
  },
  chakraui:{
    label:"Chakra UI",
    logo: "./assets/icons/chakra-ui.svg"
  },
};

export default logos;
