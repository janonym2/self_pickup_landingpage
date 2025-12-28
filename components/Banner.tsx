"use client";
import Image from 'next/image';
import React, { ReactNode } from 'react';

type BannerProps = {
  content?: string; // optional, default: "banner text"
  contentMobile?: string; //optional
};

function convertBreakRows(text: string): ReactNode {
  if (text === "") return "";
  const arr = text.split("\n");
  if (arr.length === 1) return text;
  return arr.map((line, i) => (
    <React.Fragment key={i}>
      {line}
      <br />
    </React.Fragment>
  ));
}

export default function Banner({ content, contentMobile}: BannerProps) {

  const htmlContent = convertBreakRows(content ?? "");
  const htmlContentMobile = convertBreakRows(contentMobile ?? "");

  return (
    <div>
      {/* Banner Desktop*/}
      <div className="hidden md:flex relative w-full">
        <Image src="/images/banner.svg" alt="Banner" width={1920} height={400} className="w-full hidden md:block" />
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={385}
          height={385}
          className="absolute top-1/2 left-[82%] -translate-x-1/2 -translate-y-1/2 h-[80%] w-auto"
        />
        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 text-4xl tracking-widest text-gray-800 text-left font-bold">
          {htmlContent != "" ? htmlContent : "banner text"}
        </div>
      </div>

      {/* Banner Mobile */}
        <div className="md:hidden relative w-full bg-[var(--accent)] flex flex-col items-center py-10">
        {/* Logo */}
        <Image
            src="/images/logo.svg"
            alt="Logo"
            width={385}
            height={385}
            className="w-[70px] aspect-[1/1] mb-4"
        />

        {/* Text */}
        <div className="max-w-[90%] text-center text-3xl font-bold tracking-widest text-gray-800 break-words leading-snug">
            {htmlContentMobile != "" ? htmlContentMobile : (htmlContent != "" ? htmlContent : "banner text")}
        </div>
        </div>

    </div>
  );
}
