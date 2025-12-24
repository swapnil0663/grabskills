// Education.jsx
import React, { useState, useEffect } from 'react';

// Import all images from assets folder
import eduWebp from "../assets/edu.webp";
import educaJpg from "../assets/educa.jpg";
import educationeJpg from "../assets/educatione.jpg";
import educationgJpg from "../assets/educationg.jpg";
import impactImage from "../assets/impact.webp";
import reachProjects from "../assets/reach-projects.webp";
import reachStates from "../assets/reach-states.webp";
import reachDistricts from "../assets/reach-districts.webp";
import reachGovt from "../assets/reach-govt.webp";
import storyArjun from "../assets/story-arjun.webp";
import storySanjana from "../assets/story-sanjana.webp";
import storyBasheer from "../assets/story-basheer.webp";

const Education = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStory, setSelectedStory] = useState(null);
  
  // Array of background images - updated to use imported assets
  const backgroundImages = [
    eduWebp,
    educaJpg,
    educationeJpg,
    educationgJpg,
  ];

  // Education flow steps
  const educationFlowSteps = [
    {
      title: "Access to Quality Education",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      title: "Bridge Course for Non-School Going Children",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Remedial Education Support",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Vocational Education",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Scholarship Support for Continued Education",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  // 4-PRONGED APPROACH items
  const approachItems = [
    "Improving Learning Outcomes",
    "Creating Enabling Learning Environment",
    "Capacity Building of Teachers",
    "Community Engagement"
  ];

  // Impact statistics
  const impactStats = [
    { value: "160,000+", label: "Children provided with quality education" },
    { value: "44,000+", label: "Girls provided with vocational training support" },
    { value: "25,000+", label: "Children provided with infrastructure support" },
    { value: "2,000+", label: "Girls provided with scholarships for higher education" }
  ];

  // REACH & PRESENCE items - Updated with images
  const reachItems = [
    { 
      value: "261", 
      label: "projects", 
      color: "#10b981",
      image: reachProjects
    },
    { 
      value: "27", 
      label: "states", 
      color: "#f59e0b",
      image: reachStates
    },
    { 
      value: "12", 
      label: "Aspirational Districts", 
      color: "#10b981",
      image: reachDistricts
    },
    { 
      value: "8", 
      label: "Government Connect States", 
      color: "#f59e0b",
      image: reachGovt
    }
  ];

  // STORIES OF CHANGE
  const stories = [
    {
      name: "ARJUN",
      description: "13-year old Arjun, lives in Hoti camp slum community, in Delhi, with his uncle and aunt. During one of the field visits to Hoti camp, he was found in a dirty and unhygienic state. In the initial interaction which the EOW teachers had, they saw he was easily intimidated and unresponsive.",
      image: storyArjun,
      fullStory: "Scoring a perfect 10 on an educational transformation scale: Arjun's story\n\n13-year old Arjun, lives in Hoti camp slum community, in Delhi, with his uncle and aunt. During one of the field visits to Hoti camp, he was found in a dirty and unhygienic state. In the initial interaction which the EOW teachers had, they saw he was easily intimidated and unresponsive. After a few visits, he started mixing up with teachers. Finally, he enrolled in the EOW programme.\n\nAs he began to open up, the teachers discovered he was being ill treated by his uncle and aunt. This contributed to his erratic moods and depressive behaviour. He even harboured the thought of running away from home.\n\nHe got into the habit of begging in the temple in Rangpuri area. Post his induction in the EOW, he was given regular counselling by teachers on the importance of education, healthy lifestyle and values. Gradually, his personality began to change and his appearance and behaviour showed major improvement. He was punctual in boarding the EOW bus for studies and did not go out to beg.\n\nHe studied hard and cleared the Open Basic Examination that will now get him mainstreamed in the government school for higher studies. He is instrumental in bringing getting more children enrolled for non-formal education (NFE). Overall, 165 students like Arjun have got inducted into government schools and another 34 took their exams in February this year. Nearly 100% who took the exams (199 out of 200) got successfully mainstreamed, which is a major success for the programme."
    },
    {
      name: "SANJANA",
      description: "Sanjana resides in Nalapar with her parents and three siblings. Her family migrated from rural Punjab to Delhi in search of better job opportunities. However, their monthly income remained stagnant at a mere Rs 6,000 a month.",
      image: storySanjana,
      fullStory: "Making school the centre of her Universe: Sanjana's story\n\nSanjana resides in Nalapar with her parents and three siblings. Her family migrated from rural Punjab to Delhi in search of better job opportunities. However, their monthly income remained stagnant at a mere Rs 6,000 a month. Sanjana could not afford school due to long distance, family pressure and monetary and social constraints.\n\nShe would watch other children go with satchels on their bag and later in the day and do their homework and she would get upset. When the EOW Project team began approaching people in her neighbourhood and she heard what the bus provided and how children like her got an opportunity to study free of cost, she was ecstatic. Soon, the team from EOW visited her home and talked to her parents.\n\nIt was agreed to send Sanjana to school. She knew that god had answered her prayers. She went to the temple and thanked Him for his benevolence. She planned and prepared her lessons before hand and was one of the most attentive students in class. She became a favourite with her teachers and was one of the first girls whose names was on the list to be mainstreamed to a government school.\n\n\"I have learnt so much from my teacher. She provided me insights into the world which I want to belong to. When I grow up, I would like to become like her so that I can guide others like me the same way.\""
    },
    {
      name: "BASHEER",
      description: "When the Education on Wheels project team explored one of the odd slums located in Sector 57, Gurugram, there were many out-of-school children who had their own different aspirations. Their dreams ranged from becoming a teacher to a doctor, scientist and dancer.",
      image: storyBasheer,
      fullStory: "Pursuing cricketing aspirations along with studies: Basheer's story\n\nWhen the Education on Wheels project team explored one of the odd slums located in Sector 57, Gurugram, there were many out-of-school children who had their own different aspirations. Their dreams ranged from becoming a teacher to a doctor, scientist and dancer. Basheer was very clear he wanted to turn his hobby of playing cricket into a profession and scale heights of success like his idol, MS Dhoni.\n\nWhen his family moved from West Bengal to Gurugram in hope of a better livelihood, he had to discontinue his studies and help his parents in eking out a living.\n\nThe Remedial classes as part of the EOW progamme came as a blessing giving a drop-out student like him a chance to catch up on studies. Observing his sharp aesthetic sense and keen interest, the teachers motivated him to be regular and to get good grades in exams. They also engaged him to participate in extracurricular activities. They guided him on his cricket coaching and told him to pursue his passion seriously but also to continue with studies and give them equal priority. He is extremely grateful to Sukarya for providing direction and tools to plan his future. He soon joined a Cricket Academy and began to play local matches. Meanwhile, he was also doing well in studies. He was referred to as the boy with a golden smile.\n\nHe is now ready to appear for the 5th grade Open Basic Education examination being conducted by the National Institute of Open Schooling (NIOS). He says with a twinkle in his eye, \"from a rolling stone I am on way to becoming a chiselled diamond.\""
    },
   
  ];

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Navigation functions
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  const openStoryModal = (story) => {
    setSelectedStory(story);
  };

  const closeStoryModal = () => {
    setSelectedStory(null);
  };

  return (
    <>
      <style>
        {`
          .education-page {
            min-height: 100vh;
            background-color: ${darkMode ? '#1a202c' : '#f9fafb'};
            color: ${darkMode ? '#e2e8f0' : '#000000'};
            transition: background-color 0.3s ease, color 0.3s ease;
          }
          
          .carousel-section {
            position: relative;
            width: 100%;
            height: 70vh;
            overflow: hidden;
          }
          
          .slideshow-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          
          .slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0;
            transition: opacity 1.5s ease-in-out;
          }
          
          .slide.active {
            opacity: 1;
          }
          
          .nav-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            font-size: 2rem;
            padding: 10px 15px;
            cursor: pointer;
            z-index: 10;
            border-radius: 50%;
            transition: background-color 0.3s;
          }
          
          .nav-button:hover {
            background-color: rgba(0, 0, 0, 0.8);
          }
          
          .prev {
            left: 20px;
          }
          
          .next {
            right: 20px;
          }
          
          .indicators {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
            z-index: 10;
          }
          
          .indicator {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.5);
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          
          .indicator.active {
            background-color: white;
          }
          
          .content-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            z-index: 5;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          }
          
          .content-overlay h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
            letter-spacing: 2px;
          }
          
          .content-overlay p {
            font-size: 1.5rem;
            max-width: 800px;
            margin: 0 auto;
          }
          
          .content-section {
            width: 100%;
            padding: 80px 0;
          }
          
          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: ${darkMode ? '#63b3ed' : '#1e40af'};
            margin-bottom: 1rem;
            text-align: center;
          }
          
          .section-subtitle {
            font-size: 1.5rem;
            font-weight: 600;
            color: ${darkMode ? '#a0aec0' : '#4b5563'};
            margin-bottom: 2rem;
            text-align: center;
          }
          
          .description {
            font-size: 1.1rem;
            color: ${darkMode ? '#cbd5e0' : '#4b5563'};
            line-height: 1.6;
            margin: 0 auto 3rem;
            text-align: center;
            max-width: 800px;
            padding: 0 20px;
          }
          
          .what-we-do-container {
            display: flex;
            flex-direction: column;
            margin-bottom: 3rem;
            background-color: ${darkMode ? '#2d3748' : 'white'};
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            width: 100%;
          }
          
          .what-we-do-header {
            padding: 40px;
            text-align: center;
            background-color: ${darkMode ? '#4a5568' : '#f0f9ff'};
          }
          
          .what-we-do-title {
            font-size: 2.2rem;
            font-weight: 700;
            color: ${darkMode ? '#63b3ed' : '#1e40af'};
            margin-bottom: 1.5rem;
          }
          
          .what-we-do-text {
            font-size: 1.1rem;
            color: ${darkMode ? '#e2e8f0' : '#4b5563'};
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
          }
          
          .education-flow {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 40px;
            overflow-x: auto;
            gap: 15px;
            scrollbar-width: thin;
            scrollbar-color: ${darkMode ? '#4a5568' : '#93c5fd'} ${darkMode ? '#2d3748' : '#f0f9ff'};
          }
          
          .education-flow::-webkit-scrollbar {
            height: 8px;
          }
          
          .education-flow::-webkit-scrollbar-track {
            background: ${darkMode ? '#2d3748' : '#f0f9ff'};
            border-radius: 4px;
          }
          
          .education-flow::-webkit-scrollbar-thumb {
            background-color: ${darkMode ? '#4a5568' : '#93c5fd'};
            border-radius: 4px;
          }
          
          .flow-step {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 250px;
            padding: 25px 20px;
            border-radius: 12px;
            background-color: ${darkMode ? '#4a5568' : '#f0f9ff'};
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
          }
          
          .flow-step:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          }
          
          .flow-icon {
            width: 100px;
            height: 100px;
            background-color: ${darkMode ? '#2d3748' : '#dbeafe'};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            color: ${darkMode ? '#63b3ed' : '#1e40af'};
          }
          
          .flow-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: ${darkMode ? '#e2e8f0' : '#1e40af'};
          }
          
          .flow-arrow {
            color: ${darkMode ? '#718096' : '#93c5fd'};
            font-size: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 40px;
          }
          
          .approach-section {
            background-color: ${darkMode ? '#2d3748' : 'white'};
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            margin-bottom: 3rem;
            width: 100%;
          }
          
          .approach-header {
            padding: 30px;
            text-align: center;
            background-color: ${darkMode ? '#4a5568' : '#f0f9ff'};
          }
          
          .approach-title {
            font-size: 2.2rem;
            font-weight: 700;
            color: ${darkMode ? '#63b3ed' : '#1e40af'};
            margin-bottom: 1.5rem;
          }
          
          .approach-items {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            padding: 40px;
          }
          
          .approach-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 25px;
            border-radius: 12px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .approach-item:nth-child(1) {
            background-color: ${darkMode ? '#744210' : '#fef3c7'};
          }
          
          .approach-item:nth-child(2) {
            background-color: ${darkMode ? '#5b21b6' : '#ddd6fe'};
          }
          
          .approach-item:nth-child(3) {
            background-color: ${darkMode ? '#14532d' : '#bbf7d0'};
          }
          
          .approach-item:nth-child(4) {
            background-color: ${darkMode ? '#1e3a8a' : '#bfdbfe'};
          }
          
          .approach-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          }
          
          .approach-item-icon {
            width: 80px;
            height: 80px;
            background-color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            color: ${darkMode ? '#63b3ed' : '#1e40af'};
          }
          
          .approach-item-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: ${darkMode ? '#e2e8f0' : '#1e40af'};
          }
          
          .impact-section {
            background-color: ${darkMode ? '#2d3748' : 'white'};
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            margin-bottom: 3rem;
            width: 100%;
          }
          
          .impact-header {
            padding: 30px;
            text-align: center;
            background-color: ${darkMode ? '#4a5568' : '#f0f9ff'};
          }
          
          .impact-title {
            font-size: 2.2rem;
            font-weight: 700;
            color: ${darkMode ? '#63b3ed' : '#1e40af'};
            margin-bottom: 1.5rem;
          }
          
          .impact-content {
            display: flex;
            flex-wrap: wrap;
            padding: 40px;
            justify-content: center;
          }
          
          .impact-image {
            flex: 1;
            min-width: 300px;
            height: 300px;
            background-size: cover;
            background-position: center;
            border-radius: 12px;
            margin-right: 40px;
            max-width: 500px;
          }
          
          .impact-stats {
            flex: 1;
            min-width: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 500px;
          }
          
          .stat-item {
            margin-bottom: 25px;
            display: flex;
            align-items: center;
          }
          
          .stat-value {
            font-size: 2rem;
            font-weight: 700;
            color: ${darkMode ? '#63b3ed' : '#1e40af'};
            margin-right: 15px;
            min-width: 120px;
          }
          
          .stat-label {
            font-size: 1.1rem;
            color: ${darkMode ? '#e2e8f0' : '#4b5563'};
          }
          
          .reach-section {
            background-color: ${darkMode ? '#2d3748' : 'white'};
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            margin-bottom: 3rem;
            width: 100%;
          }
          
          .reach-header {
            padding: 30px;
            text-align: center;
            background-color: ${darkMode ? '#4a5568' : '#f0f9ff'};
          }
          
          .reach-title {
            font-size: 2.2rem;
            font-weight: 700;
            color: ${darkMode ? '#63b3ed' : '#1e40af'};
            margin-bottom: 1.5rem;
          }
          
          .reach-items {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 40px;
            padding: 40px;
          }
          
          .reach-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 180px;
          }
          
          .reach-icon {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 15px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
            overflow: hidden;
            border: 2px solid white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .reach-icon::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
          }
          
          .reach-value {
            font-size: 1.8rem;
            font-weight: 700;
            color: ${darkMode ? '#63b3ed' : '#1e40af'};
            margin-bottom: 5px;
          }
          
          .reach-label {
            font-size: 1.1rem;
            color: ${darkMode ? '#e2e8f0' : '#4b5563'};
            text-align: center;
          }
          
          .donation-info {
            font-size: 0.9rem;
            color: ${darkMode ? '#63b3ed' : '#1e40af'};
            font-weight: 600;
            margin-top: 8px;
            padding: 4px 8px;
            background-color: ${darkMode ? '#2c5282' : '#dbeafe'};
            border-radius: 12px;
            display: inline-block;
          }
          
          .stories-section {
            background-color: ${darkMode ? '#2d3748' : '#f0fdf4'};
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            margin-bottom: 3rem;
            width: 100%;
          }
          
          .stories-header {
            padding: 30px;
            text-align: center;
            background-color: ${darkMode ? '#14532d' : '#dcfce7'};
          }
          
          .stories-title {
            font-size: 2.2rem;
            font-weight: 700;
            color: ${darkMode ? '#86efac' : '#166534'};
            margin-bottom: 1.5rem;
          }
          
          .stories-content {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 30px;
            padding: 40px;
          }
          
          .story-card {
            width: 350px;
            background-color: ${darkMode ? '#2d3748' : 'white'};
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .story-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          }
          
          .story-image {
            width: 100%;
            height: 280px;
            background-size: cover;
            background-position: center;
          }
          
          .story-content {
            padding: 20px;
          }
          
          .story-name {
            font-size: 1.5rem;
            font-weight: 700;
            color: ${darkMode ? '#86efac' : '#166534'};
            margin-bottom: 10px;
          }
          
          .story-description {
            font-size: 1rem;
            color: ${darkMode ? '#e2e8f0' : '#4b5563'};
            margin-bottom: 15px;
            line-height: 1.5;
          }
          
          .read-more-button {
            display: inline-block;
            padding: 8px 16px;
            background-color: ${darkMode ? '#14532d' : '#166534'};
            color: white;
            border: none;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .read-more-button:hover {
            background-color: ${darkMode ? '#0f172a' : '#14532d'};
          }
          
          /* Modal Styles */
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 20px;
          }
          
          .modal-content {
            background-color: ${darkMode ? '#2d3748' : 'white'};
            border-radius: 12px;
            max-width: 800px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
          }
          
          .modal-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: ${darkMode ? '#e2e8f0' : '#4b5563'};
            z-index: 10;
          }
          
          .modal-image {
            width: 100%;
            height: 400px;
            background-size: cover;
            background-position: center;
            border-radius: 12px 12px 0 0;
          }
          
          .modal-body {
            padding: 30px;
          }
          
          .modal-title {
            font-size: 2rem;
            font-weight: 700;
            color: ${darkMode ? '#86efac' : '#166534'};
            margin-bottom: 20px;
          }
          
          .modal-text {
            font-size: 1.1rem;
            color: ${darkMode ? '#e2e8f0' : '#4b5563'};
            line-height: 1.7;
            white-space: pre-line;
          }
          
          @media (max-width: 768px) {
            .carousel-section {
              height: 50vh;
            }
            
            .content-overlay h1 {
              font-size: 2.5rem;
            }
            
            .content-overlay p {
              font-size: 1.2rem;
              padding: 0 20px;
            }
            
            .nav-button {
              font-size: 1.5rem;
              padding: 8px 12px;
            }
            
            .content-section {
              padding: 60px 0;
            }
            
            .section-title {
              font-size: 2rem;
            }
            
            .section-subtitle {
              font-size: 1.3rem;
            }
            
            .description {
              font-size: 1rem;
            }
            
            .what-we-do-header {
              padding: 30px 20px;
            }
            
            .what-we-do-title {
              font-size: 1.8rem;
            }
            
            .what-we-do-text {
              font-size: 1rem;
            }
            
            .education-flow {
              padding: 30px 20px;
            }
            
            .flow-step {
              min-width: 200px;
              padding: 20px 15px;
            }
            
            .flow-icon {
              width: 80px;
              height: 80px;
            }
            
            .flow-arrow {
              font-size: 1.5rem;
              min-width: 20px;
            }
            
            .approach-header {
              padding: 20px;
            }
            
            .approach-title {
              font-size: 1.8rem;
            }
            
            .approach-items {
              grid-template-columns: 1fr;
              padding: 20px;
              gap: 20px;
            }
            
            .approach-item {
              padding: 15px;
            }
            
            .approach-item-icon {
              width: 60px;
              height: 60px;
            }
            
            .impact-header {
              padding: 20px;
            }
            
            .impact-title {
              font-size: 1.8rem;
            }
            
            .impact-content {
              flex-direction: column;
              padding: 20px;
              align-items: center;
            }
            
            .impact-image {
              height: 200px;
              margin-right: 0;
              margin-bottom: 20px;
              max-width: 100%;
            }
            
            .impact-stats {
              max-width: 100%;
            }
            
            .stat-value {
              font-size: 1.5rem;
              min-width: 100px;
            }
            
            .stat-label {
              font-size: 1rem;
            }
            
            .reach-header {
              padding: 20px;
            }
            
            .reach-title {
              font-size: 1.8rem;
            }
            
            .reach-items {
              padding: 20px;
              gap: 20px;
            }
            
            .reach-item {
              width: 150px;
            }
            
            .reach-icon {
              width: 100px;
              height: 100px;
            }
            
            .reach-value {
              font-size: 1.5rem;
            }
            
            .reach-label {
              font-size: 1rem;
            }
            
            .donation-info {
              font-size: 0.8rem;
            }
            
            .stories-header {
              padding: 20px;
            }
            
            .stories-title {
              font-size: 1.8rem;
            }
            
            .stories-content {
              padding: 20px;
              gap: 20px;
            }
            
            .story-card {
              width: 100%;
              max-width: 350px;
            }
            
            .story-image {
              height: 220px;
            }
            
            .story-name {
              font-size: 1.3rem;
            }
            
            .story-description {
              font-size: 0.9rem;
            }
            
            .modal-image {
              height: 250px;
            }
            
            .modal-body {
              padding: 20px;
            }
            
            .modal-title {
              font-size: 1.5rem;
            }
            
            .modal-text {
              font-size: 1rem;
            }
          }
        `}
      </style>
      
      <div className="education-page">
        {/* Image Carousel Section */}
        <div className="carousel-section">
          <div className="slideshow-container">
            {backgroundImages.map((image, index) => (
              <div 
                key={index}
                className={`slide ${index === currentIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
            
            {/* Navigation arrows */}
            <button className="nav-button prev" onClick={goToPrevious}>
              &lt;
            </button>
            <button className="nav-button next" onClick={goToNext}>
              &gt;
            </button>
            
            {/* Slide indicators */}
            <div className="indicators">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>
          </div>
          
          {/* Content overlay */}
          <div className="content-overlay">
            <h1>EDUCATION IS EMPOWERMENT</h1>
            <p>Transforming lives through knowledge and opportunity</p>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="content-section">
          <h2 className="section-title">WHY EDUCATION</h2>
          <p className="description">
            Education is the most powerful tool we can use to change the world. It empowers individuals, 
            transforms communities, and drives sustainable development. Despite progress, millions of 
            children still lack access to quality education. Our programs aim to bridge this gap and create 
            opportunities for every child to learn and grow.
          </p>
          
          {/* WHAT WE DO Section */}
          <div className="what-we-do-container">
            <div className="what-we-do-header">
              <h2 className="what-we-do-title">WHAT WE DO</h2>
              <p className="what-we-do-text">
                Smile Foundation's Mission Education project aims to empower underprivileged children by providing 
                education, nutrition, and wellness support. Aligned with the New Education Policy 2020 and SDG Goal 4, 
                our initiative serves children aged 3-18 from marginalized communities and those in difficult circumstances. 
                We create a comprehensive ecosystem that ensures children not only access education but thrive in their 
                learning journey.
              </p>
            </div>
            
            {/* Education Flow Diagram */}
            <div className="education-flow">
              {educationFlowSteps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flow-step">
                    <div className="flow-icon">
                      {step.icon}
                    </div>
                    <div className="flow-title">{step.title}</div>
                  </div>
                  {index < educationFlowSteps.length - 1 && (
                    <div className="flow-arrow">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {/* 4-PRONGED APPROACH Section */}
          <div className="approach-section">
            <div className="approach-header">
              <h2 className="approach-title">4-PRONGED APPROACH</h2>
            </div>
            <div className="approach-items">
              {approachItems.map((item, index) => (
                <div key={index} className="approach-item">
                  <div className="approach-item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="approach-item-title">{item}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Impact 2023-24 Section */}
          <div className="impact-section">
            <div className="impact-header">
              <h2 className="impact-title">Impact 2023-24</h2>
            </div>
            <div className="impact-content">
              <div 
                className="impact-image"
                style={{ backgroundImage: `url(${impactImage})` }}
              ></div>
              <div className="impact-stats">
                {impactStats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* REACH & PRESENCE Section */}
          <div className="reach-section">
            <div className="reach-header">
              <h2 className="reach-title">REACH & PRESENCE</h2>
            </div>
            <div className="reach-items">
              {reachItems.map((item, index) => (
                <div key={index} className="reach-item">
                  <div 
                    className="reach-icon"
                    style={{ 
                      backgroundImage: `url(${item.image})`,
                      backgroundColor: item.color
                    }}
                  ></div>
                  <div className="reach-value">{item.value}</div>
                  <div className="reach-label">{item.label}</div>
                  {item.donationInfo && (
                    <div className="donation-info">{item.donationInfo}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* STORIES OF CHANGE Section */}
          <div className="stories-section">
            <div className="stories-header">
              <h2 className="stories-title">STORIES OF CHANGE</h2>
            </div>
            <div className="stories-content">
              {stories.map((story, index) => (
                <div key={index} className="story-card">
                  <div 
                    className="story-image"
                    style={{ backgroundImage: `url(${story.image})` }}
                  ></div>
                  <div className="story-content">
                    <h3 className="story-name">{story.name}</h3>
                    <p className="story-description">{story.description}</p>
                    <button className="read-more-button" onClick={() => openStoryModal(story)}>
                      READ MORE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Story Modal */}
        {selectedStory && (
          <div className="modal-overlay" onClick={closeStoryModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeStoryModal}>&times;</button>
              <div 
                className="modal-image"
                style={{ backgroundImage: `url(${selectedStory.image})` }}
              ></div>
              <div className="modal-body">
                <h2 className="modal-title">{selectedStory.name}</h2>
                <div className="modal-text">{selectedStory.fullStory || selectedStory.description}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Education;
