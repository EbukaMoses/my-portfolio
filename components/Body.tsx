"use client";

import { useState } from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";

export default function ScrollableTabs() {
  const tabs = [
    "Experience",
    "Projects",
    "Skills",
    "Education",
    "Certificates",
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full flex flex-col gap-10 rounded-xl border-[1px] border-[#001E28] p-10 ">

      {/* Scrollable Tab Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 w-max mx-auto px-2">

          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2 rounded-lg whitespace-nowrap transition hover:cursor-pointer
              
              ${
                activeTab === index
                  ? "bg-[#00141E] text-white"
                  : "border-1 border-[#00141E] hover:bg-[#00141E]/80"
              }`}
            >
              {tab}
            </button>
          ))}

        </div>
      </div>

      {/* Tab Content */}
      <div>
        <h2 className="text-xl font-semibold">
            {activeTab === 0 ? <Experience /> : activeTab === 1 ? <Projects /> : activeTab === 2 ? <Skills /> : activeTab === 3 ? <Education /> : tabs[activeTab]}
            {}
        </h2>
      </div>

    </div>
  );
}