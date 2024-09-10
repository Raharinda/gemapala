"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import svg from "../../public/icon.svg";
import img from "../image/hero.jpg";

export default function Home() {
  const [isThamActive, setIsThamActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  const toggleTham = () => {
    setIsThamActive(!isThamActive);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsThamActive(false);
    }
  };

  useEffect(() => {
    if (isThamActive) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isThamActive]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="pt-16">
      <header
        className={`bg-white fixed top-0 w-full z-50 ${
          isScrolled ? "shadow" : ""
        } transition-shadow duration-300`}
      >
        <nav>
          <section>
            <div className="flex text-sm font-medium px-4 sm:px-12 py-2 justify-between">
              <div className="flex flex-wrap">
                <img
                  src="icon.svg"
                  alt="An SVG of an eye"
                  className="size-12"
                />
              </div>

              <div className="hidden sm:flex flex-col mt-4 sm:flex-row gap-4 sm:gap-8 text-center sm:text-left">
                <a
                  href="#prologue"
                  className="hover:underline hover:transition-all hover:duration-300"
                >
                  Tentang Kami
                </a>
                <a
                  href="#"
                  className="hover:underline hover:transition-all hover:duration-300"
                >
                  Program
                </a>
                <a
                  href="#"
                  className="hover:underline hover:transition-all hover:duration-300"
                >
                  Kontak
                </a>
              </div>

              <div className="sm:hidden mt-4">
                <div
                  className={`tham tham-e-squeeze tham-w-6 ${
                    isThamActive ? "tham-active" : ""
                  }`}
                  onClick={toggleTham}
                >
                  <div className="tham-box">
                    <div className="tham-inner" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            ref={navRef}
            className={`sm:hidden fixed inset-y-0 right-0 w-64 bg-black transform transition-transform duration-300 ease-in-out z-50 ${
              isThamActive ? "translate-x-0" : "translate-x-full"
            } p-6`}
          >
            <div className="flex flex-col space-y-4 text-white">
              <a
                href="#prologue"
                className="hover:underline hover:text-white"
                onClick={() => setIsThamActive(false)}
              >
                Tentang Kami
              </a>
              <a
                href="#"
                className="hover:underline hover:text-white"
                onClick={() => setIsThamActive(false)}
              >
                Program
              </a>
              <a
                href="#"
                className="hover:underline hover:text-white"
                onClick={() => setIsThamActive(false)}
              >
                Kontak
              </a>
            </div>
          </section>
        </nav>
      </header>


      <section id="about" className="sm:mt-16 px-4">
        <div className="container mx-auto text-center ">
          <img
            src="/icon.svg"
            alt="An SVG of an eye"
            className="size-36 my-10 mx-auto"
          />

          <h1 className="text-3xl font-bold uppercase">Gemapala</h1>
          <p className="max-w-xl m-4 mx-auto">
            Gemapala merupakan singkatan dari Gema Muda Ganesha Pecinta Alam
            yang didirikan pada tahun 1981 oleh AKBP Tri Widianto
          </p>
          {/* Tautan "Selengkapnya" juga mengarah ke #prologue */}
          <button className="mt-6 px-8 py-3 rounded-full border border-black mx-auto transition hover:text-white hover:bg-black">
            <a href="#prologue" className="text-md">
              Selengkapnya
            </a>
          </button>
        </div>
      </section>

      <section className="my-28 sm:my-56">
        <div className="container mx-auto text-center">
          <Image src={img} alt="Background Image" className="mx-auto" />
        </div>
      </section>

      {/* Prologue Section */}
      <section id="prologue" className="mx-12">
        <div>
          <h1 className="font-bold mb-12 sm:mb-12 text-3xl sm:text-5xl">
            Tentang Kami
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-32 text-sm sm:text-xm text-justify">
            <div className="flex flex-col justify-between ">
              <p className="mb-12">
                Gemapala merupakan salah satu Organisasi siswa tingkat SMA yang
                berpusat di SMAN 1 Purworejo yang berdiri sejak 12 Desember
                1981. Gemapala merupakan wadah bagi siswa SMAN 1 Purworejo untuk
                berkegiatan di alam bebas, berkontribusi bagi masyarakat, serta
                peduli terhadap pelestarian lingkungan.
              </p>
              <p>
                Gemapala berdiri di Pangenjurutengah, Purworejo. Nama yang
                digunakan waktu itu adalah Mapala Prajnaparamita. Prajnaparamita
                diambil....
              </p>
            </div>

            <div className="flex flex-col justify-between">
              <p className="mb-12">
                These constructs known as "Colossi" are formed of both ancient
                and advanced technology, but their origin cannot be verified.
              </p>
              <p>
                A distinctly unique race, who could engage in psychic
                communication with Colossi, once lived a life of peace in a land
                named Eraveil. These beings were known as the Caelestites.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h1 className="font-bold text-3xl">Overview</h1>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-2">
        <div className="container mx-auto text-center">
          <p className="text-sm"></p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 11-8 0 4 4 0 018 0zM12 14.5a8 8 0 100-5M21.5 15a9 9 0 11-15-9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22 4.75C22 4.45 21.85 4 21.65 3.7a.95.95 0 00-1.3-.15 10 10 0 01-6 2.15 4.75 4.75 0 01-8 3.6 3.5 3.5 0 00-4-3.3"
                />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition duration-300"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 9h-3v2h2a9 9 0 00-9-9c-5 0-8 4-8 8s4 8 8 8"
                />
              </svg>
            </a>
          </div>
          <div className="text-sm my-2">
            &copy; {new Date().getFullYear()} Gemapala. All rights reserved.
          </div>
          <p className="text-xs">
            Designed by{" "}
            <a href="#" className="hover:underline">
              Raharinda
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
