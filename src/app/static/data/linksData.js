import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";

const LinksData = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/Mr1Jay37",
    icon: <FaFacebookF />,
  },
  {
    name: "GitHub",
    link: "https://github.com/MrJay37",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sanket-jain-415a606a/",
    icon: <FaLinkedin />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/jsanket37/",
    icon: <FaInstagram />,
  },
  {
    name: "Mail",
    link: "mailto:sjain41@stevens.edu",
    icon: <FaEnvelope />,
  },
  {
    name: "YouTube",
    link:
      "https://www.youtube.com/channel/UC4QOttreVJ4zN6W1uBjtHIQ?view_as=subscriber",
    icon: <FaYoutube />,
  },
];

export default LinksData;
