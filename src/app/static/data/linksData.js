import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";

const LinksData = [
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
