import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: <FaGithub size={25} />,
      href: "https://github.com/migarakavishan",
    },
    {
      id: 2,
      child: <FaLinkedin size={25} />,
      href: "https://www.linkedin.com/in/migara-kavishan-089936235/",
    },
    {
      id: 3,
      child: <HiOutlineMail size={25} />,
      href: "mailto:migarakavishan43@gmail.com",
    },
    {
      id: 4,
      child: <BsFacebook size={25} />,
      href: "https://www.facebook.com/migara.kavishan",
    },
  ];

  const link = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "contact",
    },
  ];
  return (
    <div className="w-full h-56 px-10 py-10 text-white bg-black">
      <div className="flex justify-between">
        <ul>
          <li className="text-3xl font-bold flex justify-between">Migara</li>
          <li className="text-sm text-gray-400">
            Mobile App Developer
          </li>
        </ul>
        <ul className="md:flex">
          {link.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="py-2 border-b-2"></div>

      <div>
        <div className=""></div>
        <div>
          <ul className="flex justify-end py-8">
            {links.map(({ id, child, href }) => (
              <li key={id} className="px-2 cursor-pointer">
                <a href={href}>{child}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
