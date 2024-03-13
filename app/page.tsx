import React from "react";
import RandomUser from "@/components/RandomUser";

export default function Homepage() {
  return (
    <div className="flex justify-center items-center h-screen space-x-4">
      <RandomUser></RandomUser>
      <RandomUser></RandomUser>
      <RandomUser></RandomUser>
    </div>
  );
}
