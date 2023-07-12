import { NextResponse } from "next/server";

export async function POST(req) {
  const res = await req.json();

  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Pinned to a specific version of Stable Diffusion
      // See https://replicate.com/stability-ai/stable-diffussion/versions
      version: "db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",

      // This is the text prompt that will be submitted by a form on the frontend
      input: { prompt: res.prompt },
    }),
  });

  if (response.status !== 201) {
    let error = await response.json();
    return NextResponse.json(
      { detail: error.detail },
      {
        status: 500,
      }
    );
  }

  const prediction = await response.json();
  return NextResponse.json(prediction, {
    status: 201,
  });
}
