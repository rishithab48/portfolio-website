"use client";
import React, {useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.JS</li>
                <li>React</li>
                <li>Java</li>
                <li>Python</li>
                <li>REST APIs</li>
                <li>Javascript</li>

            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Computer Science, BS</li>
                <li>Wayne State University, Detroit, Michigan</li>
                
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Sumo Logic: Search Mastery</li>
                <li>Jira Fundamentals</li>
                <li>Confluence Fundamentals</li>               
            </ul>
        )
    }
]
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange= (id) =>{
        startTransition(() =>{
            setTab(id);
        });
    }
  return (
    <section id="about" className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-18'>
        <Image src="/images/about-image.png" width={500} height={500} alt="About Image" />
        <div className='mt-4 md:mt-0 text-left flec flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me:</h2>
            <p className='text-base lg:text-lg'>Lorem Ipsum. I am a full stack developer. I am a Senior majoring in Computer 
                Science at Wayne State University. I have a passion for technology.
            </p>
            <div className="flex flex-row justify-start mt-8">
                <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>

            </div>
            <div className='mt-8'>
                {TAB_DATA.find((t) => t.id === tab).content}
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
