"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const items = [
  {
    id: 1,
    img: "/img/astronaut.webp",
    title: "astronaut riding a horse",
    prompt: "an astronaut riding a horse on mars artstation, hd, dramatic lighting, detailed",
  },
  {
    id: 2,
    img: "/img/cat.webp",
    title: "cat wearing a  crown",
    prompt: "Ragdoll cat king wearing a golden crown, intricate, elegant, highly detailed",
  },
  {
    id: 3,
    img: "/img/dolphin.webp",
    title: "dolphin on mars",
    prompt: "dolphin on mars artstation, hd, dramatic lighting, detailed",
  },
];

export default function Home() {
  const router = useRouter();
  const [demo, setDemo] = useState(0);
  useEffect(() => {
    AOS.init({});
  });

  return (
    <main>
      <section className="gradient-bg">
        <nav className="sticky inset-x-0 top-0 z-10 flex h-20 w-full items-center justify-center border-b border-white/70 bg-white/40 backdrop-blur">
          <div className="container flex items-center justify-between px-4 lg:px-6">
            <div className="flex items-center gap-6">
              <a href="/" className="flex items-center gap-3">
                <img src="https://i.postimg.cc/NjPzcv2N/Group-4.png" alt="Logo layar besar " className="h-6 hidden sm:block" />
                <img src="https://i.postimg.cc/TPdp25bP/imfiniteee.png" alt="Logo layar kecil" className="h-6 block sm:hidden" />
              </a>

              <a href="https://youtu.be/QBH6FEqFI6U" className="htu text-gray- text-sm font-bold hover:text-ungutext text">
                How to Use
              </a>
            </div>
            <div className="items-center gap-2 ">
              <Link
                href="/dashboard"
                className="items-center rounded-2xl bg-black px-4 py-2 text-sm font-bold text-white transition-all 
                hover:-translate-y-px hover:shadow-lg hover:shadow-black/20 hover:contrast-150 flex hover:text-ungutext
                hover:bg-biru hover:border-ungu hover:border-solid hover:border-2 duration-700 ease-in-out"
              >
                Sign In
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="font-size40 md:font-size20 font-extrabold custom-ts">
                  Make Your
                  <span className="gradient-text-animation custom-ts"> Imagination </span>
                  Images Come True With Our
                  <span className="gradient-text-animation custom-ts"> AI Assistance </span>
                </div>
                <a
                  href="#demo"
                  className="rounded-lg bg-black px-4 py-2 text-lg font-bold text-white transition-all 
                hover:-translate-y-px hover:shadow-lg hover:shadow-black/20 hover:contrast-150 hover:text-ungutext
                hover:bg-biru hover:border-ungu hover:border-solid hover:border-2 inline-block "
                >
                  Demo
                </a>
              </div>
            </div>

            <div className=" order-1 md:order-2">
              <div className="w-full aspect-square relative animate-squeeze-slow">
                <img src="https://ibb.co/JjQw55n" alt="ai" className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="mt-16 mb-7" id="demo">
          <div className="font-size40 flex justify-center bg-clip-text font-extrabold ">
            <p className="gradient-text-animation custom-ts">DEMO</p>
          </div>
        </div>

        <div data-aos="fade-in" className="flex grid-cols-3 justify-center gap-3 px-2 ">
          {items.map((i, idx) => (
            <div className="flate " key={i.id}>
              <button
                onClick={() => setDemo(idx)}
                className="group mx-auto block max-w-xs space-y-2 rounded-full
                 bg-slate-400/40 p-2 shadow-lg ring-1 ring-slate-900/5 hover:bg-white/30 hover:ring-white md:pl-6"
              >
                <div className="flex items-center space-x-3">
                  <svg className="h-6 w-6 group-hover:stroke-black/40" viewBox="0 0 24 24">
                    <title>magnify</title>
                    <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                  </svg>
                  <p className="text-xs font-semibold text-slate-900 group-hover:text-black/80 md:text-sm">{i.title}</p>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div data-aos="zoom-in" className="Search bar">
          <div className="flex justify-center mt-10 mb-10">
            <div className="w-full px-2 md:w-1/2">
              <div className="relative flex w-full flex-wrap items-stretch space-x-2 border-stone-900 shadow-lg bg-white rounded-full p-2 ">
                <img className="h-10" src="https://i.postimg.cc/CLdDFfqS/Group-1.png" alt=" Logoimfinity" />
                <p className="rounded-lg bg-gray-700/10 text-black pt-2 px-2 gap-2">imagine :</p>
                <input
                  type="search"
                  className=" m-0 -mr-px block w-[1%] min-w-0 flex-auto r-2xl bg-clip-padding text-base text-black outline- transition duration-300 ease-in-out focus:text-neutral-700 focus:shadow-te-primary focus:outline-none placeholder:text-neutral-500 border-none"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                  placeholder={items[demo]?.prompt}
                />
                <button
                  disabled
                  href="/dashboard"
                  className="cursor-not-allowed relative z-[2] flex items-center rounded-r-2xl  bg- px-6 py-2.5 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-white/70 hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="max-w-3xl mx-auto">
          <div className="box shadow-lg w-100 h-full ">
            <img
              className="w-full aspect-[3/2] object-top object-cover rounded-lg border border-b-kuning border-t-ungu border-r-biru border-l-ungutext"
              alt="result"
              src={items[demo]?.img}
            />
            <p className="font-bold"></p>
          </div>
        </div>

        <div className="container mx-auto px-5 pb-20 mt-20">
          <div className="fitur grid justify-center gap-14 p-3 grid-cols-1 md:grid-cols-3">
            <div data-aos="fade-up" data-aos-duration="3000" className="card rounded-2xl border-2 border-fuchsia-700 p-5 shadow-md shadow-black w-full ">
              <img src="https://i.postimg.cc/cLBxL78z/search.png" className="card-img-top w-16" alt="search" />
              <div className="card-body">
                <h5 className="font-size20 font-bold">Search Your Imagination</h5>
                <p className="card-text font-size16 font-medium">Find an imaginary image of the text that you enter directly.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className="card rounded-2xl border-2 border-fuchsia-700 p-5 shadow-md shadow-black/70 w-full">
              <img src="https://i.postimg.cc/6pS1vqGN/galery-1.png" className="card-img-top w-16" alt="search" />
              <div className="card-body">
                <h5 className="font-size20 font-bold">Get Your Image</h5>
                <p className="card-text font-size16 font-medium">All images are directly generated by AI with stunning results.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className="card rounded-2xl border-2 border-fuchsia-700 p-5 shadow-md shadow-black/70 w-full">
              <img src="https://i.postimg.cc/nLBT9kJv/icon-download-1.png" className="card-img-top w-16" alt="search" />
              <div className="card-body">
                <h5 className="font-size20 font-bold">Easy Download</h5>
                <p className="card-text font-size16 font-medium">Very easy to download after the image has been completed.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer bg-black/80 text-center">
          <div className="justify-center p-10">
            <p className="font-size40 md:font-size20 font-extrabold gradient-text-animation custom-ts"> IMAGINE YOUR IMAGINATION</p>
          </div>
        </div>
      </section>
    </main>
  );
}
