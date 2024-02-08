"use client";

import React, { useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";

const Lists = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  if (loading) {
    const skeletonElements = [];
    for (let index = 0; index < 30; index++) {
      skeletonElements.push(
        <div className="mt-3 px-4" key={index}>
          <div className="flex items-center space-x-4 ">
            <Skeleton className="h-[50px] w-[51px] rounded-full bg-slate-300" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-[250px] bg-slate-300" />
              <Skeleton className="mt-2 h-4 w-[200px] bg-slate-300" />
            </div>
          </div>
        </div>
      );
    }
    return skeletonElements;
  }

  const userArr = [];

  for (let index = 0; index < 20; index++) {
    userArr.push(
      <div className="mt-3 flex cursor-pointer items-center space-x-4 px-4">
        <Image
          src="https://randomuser.me/api/portraits/thumb/women/93.jpg"
          className="rounded-full"
          alt="thumb"
          width={50}
          height={50}
        />
        <div className="space-y-2">
          <p>Suraj</p>
          <p>9120142980</p>
        </div>
      </div>
    );
  }

  return userArr;
};

export default Lists;
