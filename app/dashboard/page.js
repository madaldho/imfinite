"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Dashboard() {
  const [myDid, setMyDid] = useState();
  const [myWeb5, setMyWeb5] = useState();

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initWeb5 = async () => {
      const { Web5 } = await import("@web5/api");

      const { web5, did } = await Web5.connect();
      setMyDid(did);
      setMyWeb5(web5);
    };
    initWeb5();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: e.target.prompt.value,
      }),
    });
    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (prediction.status !== "succeeded" && prediction.status !== "failed") {
      await sleep(5000);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      setPrediction(prediction);
    }
  };

  return (
    <section className="gradient-bg" x-data="data">
      <nav className="sticky inset-x-0 top-0 z-10 flex h-20 w-full items-center justify-center border-b border-white/30 bg-white/40 backdrop-blur-sm">
        <div className="container flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-3">
              <img src="https://i.postimg.cc/NjPzcv2N/Group-4.png" alt="Logo layar besar " className="h-6 hidden sm:block" />
              <img src="https://i.postimg.cc/TPdp25bP/imfiniteee.png" alt="Logo layar kecil" className="h-6 block sm:hidden" />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md
             text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
            >
              {myDid?.substring(0, 20)}...
            </button>
            <Link href="/" className="p-1.5 bg-red-500 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-5">
        <h1 className="text-center font-extrabold text-5xl mt-12 custom-ts">
          Type Your <span className="gradient-text-animation">Imagine</span> Here
        </h1>
      </div>
      <div className="max-w-4xl mx-auto px-5  mb-10">
        <div className="flex justify-center mt-10">
          <form
            onSubmit={handleSubmit}
            className="relative flex w-full flex-wrap items-stretch space-x-2 border-stone-900 shadow-lg bg-white rounded-full p-2 "
          >
            <img className="h-10" src="https://i.postimg.cc/CLdDFfqS/Group-1.png" alt=" Logoimfinity" />
            <p className="rounded-lg bg-gray-700/10 text-black pt-2 px-2 gap-2">imagine :</p>
            <input
              type="text"
              name="prompt"
              className="border-none m-0 -mr-px block w-[1%] min-w-0 flex-auto r-2xl bg-clip-padding text-base text-black outline- transition duration-300 ease-in-out focus:text-neutral-700 focus:shadow-te-primary focus:outline-none placeholder:text-neutral-200"
              placeholder="Excample: King of Darknes"
            />
            <button
              className="relative z-[2] flex items-center rounded-r-2xl  bg- px-6 py-2.5 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-white/70 hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="submit"
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
          </form>
        </div>
      </div>

      {error && <div className="text-red-500 my-4 text-center">{error}</div>}

      <div className="max-w-3xl mx-auto pb-40">
        <div className="box shadow-lg w-100 h-full border border-b-kuning border-t-ungu border-r-biru border-l-ungutext rounded-lg">
          <div className="w-full aspect-[16/9] object-center object-cover rounded-lg bg-white flex items-center justify-center">
            {prediction?.status === undefined ? (
              <div className="text-center">
                <p>Your Imagine Image</p>
                <p>Can be in Here</p>
              </div>
            ) : (
              <>
                {prediction.output ? (
                  <img
                    src={prediction.output[prediction.output.length - 1]}
                    alt="output"
                    className="w-full aspect-square object-center object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 animate-spin mx-auto mb-5" viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25l2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
                      ></path>
                    </svg>
                    <p>Processing your imagination</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {prediction && prediction.output && (
          <div className="flex items-center justify-center gap-5">
            <button
              onClick={() => {
                const linkhasil = document.createElement("a");
                linkhasil.href = prediction.output[prediction.output.length - 1];
                linkhasil.download = "imfinite.png";
                linkhasil.click();
              }}
              className="inline-flex items-center gap-4 px-7 py-3 bg-red-600 text-white font-bold rounded-lg mt-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M6 20q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Z"
                />
              </svg>
              <span>Download</span>
            </button>
            <a href="/dashboard" className="inline-flex items-center gap-4 px-7 py-3 bg-ungutext text-white font-bold rounded-lg mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
              </svg>
              <span>Create New</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
