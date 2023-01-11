import logos from "./logos";

type ProjectName =
  | "devGram"
  | "dogmash"
  | "covid19"
  | "connect4"
  | "urlShortener"


export type StackType = { label: string; logo: string; invert?: boolean };

export type ProjectType = {
  title: string;
  description: string[];
  images: {
    webm?: string;
    mp4?: string;
    main?: { link: string; height: number; width: number };
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
  links: { github?: string; live: string };
  stack: StackType[];
  special?: { text: string; link: string };
};

type Projects = {
  [K in ProjectName]: ProjectType;
};

const projects: Projects = {
  devGram: {
    title: "Spotify-Clone",
    description: [
      "Music player website similar to **Spotify** made with the help of **rapidapi**.",
      "**Funcnality :**",
      "Made the website fully **responsive** with the help of **tailwindcss**",
      "User can **play** any song user can **search for songs** with its name.",
      "User can see the **top songs** & **top artists** user can also see songs **detail**",
      "User can also select the **category** of songs user can also listen to songs which are trending around them.",
      "User can also see the **related songs**."
    ],
    images: {
      main: {
        link: "/project/spotify/spotify.png",
        width: 1173,
        height: 847,
      },
    },
    stack: [
      logos.vitejs,
      logos.redux,
      logos.axios,
      logos.rapidapi,
      logos.tailwind,
      logos.netlify
    ],
    links: {
      live: "https://spotify-colone.netlify.app/",
      github: "https://github.com/Vishall001/Spotify_Clone",
    },
  },

  dogmash: {
    title: "Time Camp",
    description: [
      "**TimeCamp** is a simple, yet feature-rich time tracking app to help you gain insights into your projects and tasks.",
      "**Funcnality :**",
      "The site is fully **responsive** made it with the help of chakraUI",
      "User can **Signup** and **Login**",
      "After signup or login user get access to other funcnalities like :",
      "User can add their **projects** to track the productivity and user can also make their **tags**",
      "User can **delete** the project user can **start** the timer & **stop** it whenever they want"
      
    ],
    images: {
      main: {
        link: "/project/timacamp/timecamp.png",
        width: 1173,
        height: 847,
      },
    },
    stack: [
      logos.react,
      logos.redux,
      logos.mongodb,
      logos.expressjs,
      logos.chakraui,
      logos.netlify
      
    ],
    links: {
      github: "https://github.com/Vishall001/Time-camp",
      live: "https://time-campclone.netlify.app/",
    },
  },
  covid19: {
    title: "Flipkart-Clone",
    description: [
      "**Flipkart** Private Limited is an Indian e-commerce company, headquartered in Bengaluru, and incorporated in Singapore as a private limited company. Here you can buy any products that you need in your day-to-day life.",
      "**Funcnality :**",
      "User can **Signup** and **Login**",
      "User can add multiple products to **cart**",
      "The site is fully **responsive** you can use it on **mobile**,**tablet** & **desktop**",
      "By clicking on any product user can see all the details of that product like **price**, **description** and all the other details."
    ],
    images: {
      main: {
        link: "/project/flipkart/flipkart.png",
        width: 1173,
        height: 847,
      },
    },
    stack: [ logos.react, logos.redux,logos.mongodb,logos.expressjs,logos.materialui,logos.axios,      logos.netlify
    ],
    links: {
      github: "https://github.com/Vishall001/Flipkart_Clone",
      live: "https://clone-flipkartt.netlify.app/",
    },
  },
  connect4: {
    title: "Restaurent-App",
    description: [
      "It is a restaurent app where you can buy any products like icecream, fruits etc. It has very attractive UI. It has two section one for admin & one for customer.",
      "**Funcnality for Admin:**",
      "**Admin** can add products to any of the category with the help of firebase",
      "Admin can add the image, price, calories, and category of the product",
      "Admin can also delete any product",
      "**Funcnality for Customer/User:**",
      "**User** can buy any product they like",
      "User can **Login/Logout** with the help of firebase."

    ],
    stack: [logos.react,logos.redux, logos.tailwind,logos.axios,logos.firebase,      logos.netlify
    ],
    links: {
      github: "https://github.com/Vishall001/Restaurent_App",
      live: "https://restaurentt-app.netlify.app/",
    },
    images: {
      main: {
        link: "/project/restaurent/restaurent.png",
        width: 1173,
        height: 847,
      },
    },
  },
  // getItDone: {
  //   title: "Booking.com",
  //   description: [
  //     "Booking.com is a Dutch online travel agency for lodging reservations & other travel products, and a subsidiary of Booking Holdings. The website has over 28 million listings. The site is available in 43 languages.",
  //     "**Funcnality :**",
  //     "User can **Signup** and **Login**",
  //     "User can see the **hotels details** for a specific place ",
  //     "User can **sort** the details depending on price user can **filter** the data"
  //   ],
  //   links: {
  //     github: "https://github.com/Vishall001/booking",
  //     live: "https://bookingcom-clone.netlify.app/",
  //   },
  //   stack: [logos.react,logos.redux,logos.axios,logos.chakraui,      logos.netlify
  //   ],
  //   images: {
  //     main: {
  //       link: "/project/booking/booking.png",
  //       width: 1173,
  //       height: 847,
  //     },
  //   },
  // },
  urlShortener: {
    title: "Farfetch",
    description: [
      "Farfetch is a British-Portuguese online luxury fashion retail platform that sells products from over 700 boutiques and brands from around the world. The company was founded in 2007 by the Portuguese entrepreneur",
      "**Funcnality :**",
      "User can **Signup** and **Login**",
      "User can any product to **cart** and also **buy** it",
      "User can add product to **wishlist**",
      "User can **remove** the product from **wishlist** & **cart**",
      "User can **increase** the quantity of product"
    ],
    images: {
      main: {
        link: "/project/farfetch/farfetch.png",
        width: 964,
        height: 751,
      },
    },
    links: {
      github: "https://github.com/Vishall001/Farfetch-Clone",
      live: "https://peaceful-stroopwafel-aba1de.netlify.app/",
    },
    stack: [
      logos.javascript,
      logos.html,
      logos.css,
      logos.netlify

    ],
  },

 
  
};

export default projects;
