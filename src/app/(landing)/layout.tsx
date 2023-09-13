import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'MinAI - AI compilation platform',
    description: 'Introduction to MinAI',
  }

  
const LandingLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="h-full overflow-auto">
        <div className="mx-auto max-w-screen-xl h-full w-full">
          {children}
        </div>
      </main>
     );
  }
   
  export default LandingLayout;