import React from "react";
import { MdManageHistory } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <a
            href="/"
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <MdManageHistory className="mr-3 size-9 sm:h-9 text-yellow-500" />
            Control de Mantenimiento
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400"></p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a href="#about" className="mr-4 hover:underline md:mr-6 ">
                Quienes somos
              </a>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Control de Mantenimiento™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
