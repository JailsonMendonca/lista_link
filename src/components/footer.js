"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="bg-white rounded-lg max-w-5xl mx-auto shadow">
        <div className="w-full  p-4  md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href={"/"} className="text-3xl font-bold" passHref>
              <>
                Lista
                <span className="text-blue-500">Link</span>
              </>
            </Link>
            <ul className="flex flex-wrap lg:mt-5 mt-5 items-center gap-4 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link href={"/about"}>Sobre</Link>
              </li>
              <li>
                <Link href={"/pricing"}>Preçario</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contato</Link>
              </li>
              <li>
                <Link href={"/politic"}>Políticas</Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a
                href="jailsonmendonca0707@gmail.com"
                className="hover:underline"
              >
                Jailson Mendonça™
              </a>
              . All Rights Reserved
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <ul className="flex items-center justify-center space-x-7 xl:justify-end">
                <li>
                  <Link href={"#"}>
                    <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
