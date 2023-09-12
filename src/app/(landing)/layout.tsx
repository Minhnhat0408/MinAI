import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Introduction to MinAI',
    description: 'AI compilation platform',
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