'use client';
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Loading() {
  const router = useRouter();
  useEffect (() => {
    router.push("/home");
  },[])
  return ;
}