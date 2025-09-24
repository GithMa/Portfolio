"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
/*import { title } from "process";*/

const TAB_DATA = [
  {
    title: "Ferdigheter",
    id: "ferdigheter",
    content: (
      <ul className="list-disc pl-2">
        <li>Programmering i Python og R</li>
        <li>Statistikk og sannsynlighetsteori</li>
        <li>
          Maskinlæringsalgoritmer (regresjon, klassifisering, clustering,
          anbefalingssystemer)
        </li>
        <li>
          Dataanalyse og visualisering (Pandas, NumPy, Matplotlib, Seaborn)
        </li>
        <li>SQL og databaser</li>
        <li>Version control med Git</li>
        <li>Cloud computing og ML deployment (AWS, GCP, Azure)</li>
      </ul>
    ),
  },
  {
    title: "Utdanning",
    id: "utdanning",
    content: (
      <ul className="list-disc pl-2">
        <li>Integrert master i Data Science</li>
      </ul>
    ),
  },
  {
    title: "Erfaringer",
    id: "erfaringer",
    content: (
      <ul className="list-disc pl-2">
        <li>Webkom</li>
        <li>Echo Consulting</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("ferdigheter");
  const [, /*isPending*/ startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8  items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image
          src="/images/IMG_6064.JPG"
          alt="Lettis bilde"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold  text-white mb-4">Om Meg</h2>
          <p className="text-base lg:text-lg">
            Som data scientist med spesialisering i maskinlæring har jeg
            bakgrunn i matematikk, statistikk og informatikk. Erfaringen min
            inkluderer Python, scikit-learn, TensorFlow, Pandas, NumPy og SQL,
            og jeg liker å utvikle modeller som skaper praktiske løsninger. Jeg
            har jobbet med dype nevrale nettverk og modelloptimalisering, og er
            rask til å lære og nysgjerrig på nye metoder og teknologier.
            Samarbeid og innovasjon motiverer meg til å bygge pålitelige og
            intelligente systemer.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("ferdigheter")}
              active={tab === "ferdigheter"}
            >
              {" "}
              Ferdigheter{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("utdanning")}
              active={tab === "utdanning"}
            >
              {" "}
              Utdanning{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("erfaringer")}
              active={tab === "erfaringer"}
            >
              {" "}
              Erfaringer{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
