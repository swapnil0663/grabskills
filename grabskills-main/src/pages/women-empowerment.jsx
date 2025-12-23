import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WomenEmpowerment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const navigate = useNavigate();
  
  // Array of background images for carousel
  const backgroundImages = [
    'https://www.shutterstock.com/image-photo/generate-ai-image-theme-india-260nw-2663275035.jpg',
    'https://www.smilefoundationindia.org/wp-content/uploads/2023/07/9-scaled.jpg',
    'https://plutusias.com/wp-content/uploads/2024/03/p2-1-2.jpg',
    'https://media.licdn.com/dms/image/v2/C5622AQGMFzGEbupyZg/feedshare-shrink_800/feedshare-shrink_800/0/1646757643471?e=2147483647&v=beta&t=wIte-G1s9Isr7VRv7lCMrPM_7xVVs9hVHmuWidRwchc'
  ];

  // Array of images and descriptions for the gallery
  const galleryImages = [
    {
      url: 'https://z-cdn-media.chatglm.cn/files/e6bf8cbc-a373-4924-95d5-9d1eec512e8b.png?auth_key=1866408407-085cb54cfeaf4081a5a882b461ea57e5-0-1afcec0efb63243434ae4b04ae3f83ac',
      title: "Community Gathering",
      description: "Women from local communities come together to participate in empowerment workshops and awareness sessions. These gatherings provide a platform for sharing experiences, learning new skills, and building supportive networks."
    },
    {
      url: 'https://z-cdn-media.chatglm.cn/files/3c01e86d-d74f-4339-8e77-c381550bfe2f.png?auth_key=1866408407-02f350e06c694ef7ada15d3c01cfe161-0-7cd83015f718beaddbd5c87d16619dcd',
      title: "Knowledge Sharing",
      description: "Women engage in interactive knowledge sharing sessions where they learn about their rights, health, nutrition, and financial literacy. These sessions are designed to empower women with information and practical skills."
    },
    {
      url: 'https://z-cdn-media.chatglm.cn/files/b8efd1af-bb81-484e-89d1-e389fac1bec9.png?auth_key=1866408407-fca3b73ccbb74e41a2b2290c38fb0860-0-f1d0c9e5f372a8e33ead17fda8e2611d',
      title: "Swabhiman Initiative",
      description: "The Swabhiman initiative collaborates with ASHA and Anganwadi workers to reach marginalized women. This program focuses on health interventions, skill development, and creating awareness about women's rights."
    },
    {
      url: 'https://z-cdn-media.chatglm.cn/files/fbc43c45-2d9d-4f64-98e5-3632a12ecd30.png?auth_key=1866411142-26c679325b3d412a8eb4cad7ae855c12-0-b136586ed48d5ee7843a98eac61f4318',
      title: "Reproductive Health",
      description: "Specialized sessions on reproductive and child health are conducted to educate women about maternal health, family planning, and childcare. These sessions help women make informed decisions about their health and well-being."
    },
    {
      url: 'https://z-cdn-media.chatglm.cn/files/420e7666-fcf9-4e24-8f71-f87ad77cd5f6.png?auth_key=1866421125-4b2025ae54d0468c86b92455ba6c24a2-0-2d9f2f83ed9bb194f799ad69c1c313a3',
      title: "SUSTAINABILITY IN COMMUNITIES",
      description: "Swabhiman by far has been able to affirm through community actions and advocacy that though women face numerous socio-cultural challenges coming from their prescribed societal roles and ascribed status within the family, community, and society, contravening such challenges is very much possible through creation of opportunities and enabling environment. The mainstay of Swabhiman programme's community outreach is through Change Agents, Peers Educators, Community Health Educators and Swabhiman Health Volunteers. These change agents are identified from the community and empowered through regular training sessions on relevant issues. They further educate and spread awareness among their peers in the community. Such interventions and innovations lead to a comprehensive approach that addresses social, economic, and health challenges, promoting sustainable development, and leaving a positive and lasting impact on individuals, communities, and society as a whole."
    },
    {
      url: 'https://z-cdn-media.chatglm.cn/files/abad9df3-365a-4ea3-8262-79791eb9f65e.png?auth_key=1866421125-e9f001ab81b84b748e7b4821f146a266-0-0226b9a25085e29b66629a1f8b968944',
      title: "GOVT. CONVERGENCE & SYSTEM STRENGTHENING",
      description: "One of the major interventions under Swabhiman programme is networking with government institutions to enhance community awareness. The community institutions with which the networking is undertaken are Integrated Child Health Scheme (ICDS), health departments, educational institutions and panchayats. The fostering of network with such institutions has qualitatively impacted the outcome of efforts and activities, and Swabhiman has always kept these organizations under the information loop ensuring possibilities of future convergence and relationships. Networking is also done with 3-level structures of the health administration for seamless implementation of its interventions:<br><br><strong>a) Primary level</strong>—working closely with Auxiliary Nurse Midwives (ANMs) and Accredited Social health Activists (ASHA) workers in the community<br><br><strong>b) Second level</strong>—coordination with Primary Health Centres (PHCs)/dispensaries<br><br><strong>c) Third level</strong>—contact coordination with medical personnel at specialty hospital/institutions"
    }
  ];

  // Stories of Change data - Updated with correct images
  const stories = [
    {
      id: 1,
      name: "SHYAMA",
      location: "HARYANA",
      // Updated image URL for SHYAMA - Woman with red headscarf and blue top
      imageUrl: "https://www.smilefoundationindia.org/wp-content/uploads/2023/07/Shyama.jpg.webp",
      shortDescription: "Covid brought many problems with it– both outside and within our home. My husband who used to work at a tailoring shop lost his job. It became very hard to make ends meet…",
      fullDescription: "Covid brought many problems with it– both outside and within our home. My husband who used to work at a tailoring shop lost his job. It became very hard to make ends meet. We could not even pay the school fees of our daughter. This led to many fights at home and I could see my family falling apart. At that time, the Swabhiman community mobilizer started visiting me, asking about my health and well being. I started attending the meetings where we were taught about healthcare, financial literacy, and becoming self dependent. I gradually became more confident and encouraged my husband to start working from our home. I too learned sewing and got much-needed support to get a tailoring machine. After that, we started receiving orders and getting back on our feet. During Covid, I also taught how to make masks to other women in my slum who needed some extra income. Now, thankfully, things are much better."
    },
    {
      id: 2,
      name: "YASHODA",
      location: "KARNATAKA",
      // Updated image URL for YASHODA - Woman sitting outdoors with colorful patterned top
      imageUrl: "https://www.smilefoundationindia.org/wp-content/uploads/2023/07/Yashoda-2-1-e1689926256432-298x300.jpg.webp",
      shortDescription: "Before the pandemic, Yashoda was a young mother to a one-year old, living with her cab driver husband in Bengaluru. However, her husband lost his job in the lockdown…",
      fullDescription: "Before the pandemic, Yashoda was a young mother to a one-year old, living with her cab driver husband in Bengaluru. However, her husband lost his job in the lockdown and things turned bitter due to the resultant financial constraints. Yashoda, however, fought back. She joined the 'Entrepreneur Development Training Programme' of Smile Foundation which enables women to start their own ventures. Yashoda not only completed the training herself, but also gathered women in her community who were suffering like her. Soon she emerged as a leader of her peer group and set up a business of handmade organic cosmetics with them. Since then the group has started making lip balm, kajal, bathing salt, bathing powder and tooth powder. The enterprise has now been registered as \"Kadamba Naturals\". Yashoda wants to expand her business and support other women too in becoming self-reliant."
    },
    {
      id: 3,
      name: "ISHWATI",
      location: "MAHARASHTRA",
      // Updated image URL for ISHWATI - Woman in blue printed dress with pink shawl
      imageUrl: "https://www.smilefoundationindia.org/wp-content/uploads/2023/07/Ishwati.jpg.webp",
      shortDescription: "Ishwati was a daily wage labourer living with her family of six in Maharashtra. After a day's work her family was barely able to make ends meet. When Smile Foundation began its Swabhiman…",
      fullDescription: "Ishwati was a daily wage labourer living with her family of six in Maharashtra. After a day's work her family was barely able to make ends meet. When Smile Foundation began its Swabhiman programme, she was one of the first to come on board and helped mobilize other women from her community. Initially, Ishwati took up vegetable cultivation in her backyard. The two-pronged benefit being that not only does she run her own business, but also uses nutritious vegetables to feed her family. Slowly Ishwati mobilized other women of her community and formed a Self Help Group which now runs the vegetable cultivation business. During the Covid-19 lockdown, it was this essential business which helped their families survive. Ishwati is a true change-maker, who has led women from her community towards financial independence and confidence."
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

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

  const goBackToPrograms = () => {
    navigate('/programs');
  };

  // Handle image click in gallery
  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  // Handle story click
  const handleStoryClick = (index) => {
    setSelectedStory(index);
  };

  // Close the greeting card
  const closeGreetingCard = () => {
    setSelectedImage(null);
    setSelectedStory(null);
  };

  // Impact Section Component - Modified to show only the image at full size
  const ImpactSection = () => {
    // Using the image URL directly since we don't have the local asset
    const impactImg = "https://z-cdn-media.chatglm.cn/files/3eba7c11-5b30-48f5-a471-1a37b1488171.png?auth_key=1866421436-10fa2e1cac4e485592564c24aa0f8d16-0-011a8a077f96a500493ecf5ca1128087";

    const styles = {
      container: {
        width: "100%",
        padding: "0",
        margin: "40px 0 0",
        backgroundColor: "#f0f9ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
      },
      image: {
        width: "100%",
        height: "auto",
        display: "block",
        objectFit: "contain"
      }
    };

    return (
      <div style={styles.container}>
        <img
          src={impactImg}
          alt="Impact"
          style={styles.image}
        />
      </div>
    );
  };

  return (
    <>
      <style>
        {`
          .women-empowerment-page {
            min-height: 100vh;
            background-color: #fdf2f8;
          }
          
          .carousel-section {
            position: relative;
            width: 100%;
            height: 100vh;
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
            font-size: 3.5rem;
            margin-bottom: 1rem;
            letter-spacing: 1px;
            font-weight: 700;
          }
          
          .content-overlay p {
            font-size: 1.5rem;
            max-width: 800px;
            margin: 0 auto;
          }
          
          .content-section {
            padding: 80px 20px;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #be185d;
            margin-bottom: 1.5rem;
            text-align: center;
          }
          
          .section-content {
            font-size: 1.1rem;
            color: #4b5563;
            line-height: 1.6;
            margin-bottom: 3rem;
            text-align: justify;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .divider {
            width: 100px;
            height: 4px;
            background-color: #f9a8d4;
            margin: 3rem auto;
            border-radius: 2px;
          }
          
          .gallery-section {
            padding: 80px 20px;
            max-width: 1200px;
            margin: 0 auto;
            background-color: #f0fdf4;
            border-radius: 12px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          }
          
          .gallery-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #166534;
            margin-bottom: 2rem;
            text-align: center;
          }
          
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
          }
          
          .gallery-item {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
            height: 250px;
          }
          
          .gallery-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          }
          
          .gallery-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }
          
          .gallery-item:hover .gallery-image {
            transform: scale(1.05);
          }
          
          .gallery-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
            padding: 20px;
            color: white;
            font-weight: 600;
            font-size: 1.1rem;
          }
          
          .stories-section {
            width: 100%;
            padding: 80px 0;
            margin: 40px 0;
            background-color: #fef3c7;
            overflow: hidden;
          }
          
          .stories-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .stories-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #b45309;
            margin-bottom: 2rem;
            text-align: center;
          }
          
          .stories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
          }
          
          .story-card {
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
          }
          
          .story-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          }
          
          .story-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
          }
          
          .story-content {
            padding: 20px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          }
          
          .story-name {
            font-size: 1.5rem;
            font-weight: 700;
            color: #b45309;
            margin-bottom: 10px;
          }
          
          .story-description {
            font-size: 1rem;
            color: #4b5563;
            line-height: 1.5;
            margin-bottom: 20px;
            flex-grow: 1;
          }
          
          .read-more-button {
            background-color: #f59e0b;
            color: white;
            border: none;
            border-radius: 6px;
            padding: 10px 20px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s;
            align-self: flex-start;
          }
          
          .read-more-button:hover {
            background-color: #d97706;
          }
          
          .greeting-card-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;
            padding: 20px;
          }
          
          .greeting-card {
            background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
            border-radius: 16px;
            max-width: 700px;
            width: 100%;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            overflow: hidden;
            position: relative;
            animation: slideIn 0.3s ease-out;
            max-height: 90vh;
            overflow-y: auto;
          }
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .greeting-card-header {
            background-color: #166534;
            color: white;
            padding: 20px;
            text-align: center;
            position: relative;
          }
          
          .greeting-card-title {
            font-size: 1.8rem;
            font-weight: 700;
            margin: 0;
          }
          
          .greeting-card-body {
            padding: 30px;
            text-align: center;
          }
          
          .greeting-card-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 20px;
          }
          
          .greeting-card-description {
            font-size: 1.1rem;
            color: #4b5563;
            line-height: 1.6;
            margin-bottom: 20px;
            text-align: left;
          }
          
          .close-button {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            font-size: 1.5rem;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          
          .close-button:hover {
            background: rgba(255, 255, 255, 0.3);
          }
          
          .greeting-card-footer {
            background-color: #22c55e;
            padding: 15px;
            text-align: center;
            color: #166534;
            font-weight: 600;
            font-size: 0.9rem;
          }
          
          @media (max-width: 768px) {
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
            
            .section-title {
              font-size: 2rem;
            }
            
            .section-content {
              font-size: 1rem;
            }
            
            .gallery-grid {
              grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              gap: 20px;
            }
            
            .gallery-item {
              height: 200px;
            }
            
            .stories-grid {
              grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              gap: 20px;
            }
            
            .story-image {
              height: 250px;
            }
            
            .story-name {
              font-size: 1.3rem;
            }
            
            .story-description {
              font-size: 0.9rem;
            }
            
            .greeting-card {
              max-width: 90%;
            }
            
            .greeting-card-title {
              font-size: 1.5rem;
            }
            
            .greeting-card-description {
              font-size: 1rem;
            }
          }
        `}
      </style>
      
      <div className="women-empowerment-page">
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
            <h1>WOMEN EMPOWERMENT FOR NATION BUILDING</h1>
            <p>Empowering women to build a stronger nation</p>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="content-section">
          <h2 className="section-title">WHY WOMEN EMPOWERMENT?</h2>
          <p className="section-content">
            Over the past decade, gender equality has emerged as a critical factor not only for the health of nations but also for their social and economic advancement. Promoting gender equality and women empowerment is central to the UNDP's Sustainable Development Goals. Women empowerment focuses on ensuring equal rights, opportunities, and access to resources for women, allowing them to make independent decisions and take charge of their own lives.
          </p>
          <p className="section-content">
            When women empowerment is prioritized, women significantly contribute to economic growth, social development, and a sustainable future. Empowered women take active roles in leadership, education, healthcare, and decision-making at various levels. Women empowerment helps create a more inclusive and balanced society where women's voices are valued, their skills are recognized, and their potential is fully realized.
          </p>
          <p className="section-content">
            Ultimately, women empowerment is essential for building a fairer and more harmonious world for everyone.
          </p>
          
          <div className="divider"></div>
          
          <h2 className="section-title">WHAT WE DO?</h2>
          <p className="section-content">
            Smile Foundation's women empowerment programme Swabhiman, initiated in 2005, reaches out to marginalized and socially excluded women. It focuses on interventions in nutrition, healthcare, and livelihood.
          </p>
          <p className="section-content">
            The programme capacitates women through innovative community practices, empowering them to seek healthcare and bring sustainable changes in the community. It also supports them to become aware, skilled, and financially independent.
          </p>
          <p className="section-content">
            Swabhiman actively works to create a gender-equal society, engaging men and boys in the process of women empowerment.
          </p>
        </div>
        
        {/* Gallery Section */}
        <div className="gallery-section">
          <h2 className="gallery-title">OUR INITIATIVES IN ACTION</h2>
          
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="gallery-item"
                onClick={() => handleImageClick(index)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  {image.title}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Impact Section - Full Size Image */}
        <ImpactSection />
        
        {/* Stories of Change Section */}
        <div className="stories-section">
          <div className="stories-container">
            <h2 className="stories-title">STORIES OF CHANGE</h2>
            
            <div className="stories-grid">
              {stories.map((story, index) => (
                <div key={story.id} className="story-card">
                  <img 
                    src={story.imageUrl} 
                    alt={story.name}
                    className="story-image"
                  />
                  <div className="story-content">
                    <h3 className="story-name">{story.name}, {story.location}</h3>
                    <p className="story-description">{story.shortDescription}</p>
                    <button 
                      className="read-more-button" 
                      onClick={() => handleStoryClick(index)}
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Greeting Card Overlay */}
        {(selectedImage !== null || selectedStory !== null) && (
          <div className="greeting-card-overlay" onClick={closeGreetingCard}>
            <div className="greeting-card" onClick={(e) => e.stopPropagation()}>
              <div className="greeting-card-header">
                <h3 className="greeting-card-title">
                  {selectedImage !== null 
                    ? galleryImages[selectedImage].title 
                    : stories[selectedStory].name + ", " + stories[selectedStory].location}
                </h3>
                <button className="close-button" onClick={closeGreetingCard}>×</button>
              </div>
              <div className="greeting-card-body">
                {selectedImage !== null ? (
                  <>
                    <img 
                      src={galleryImages[selectedImage].url} 
                      alt={galleryImages[selectedImage].title}
                      className="greeting-card-image"
                    />
                    <div 
                      className="greeting-card-description"
                      dangerouslySetInnerHTML={{ __html: galleryImages[selectedImage].description }}
                    />
                  </>
                ) : (
                  <>
                    <img 
                      src={stories[selectedStory].imageUrl} 
                      alt={stories[selectedStory].name}
                      className="greeting-card-image"
                    />
                    <div className="greeting-card-description">
                      {stories[selectedStory].fullDescription}
                    </div>
                  </>
                )}
              </div>
              <div className="greeting-card-footer">
                Women Empowerment Initiative
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WomenEmpowerment;
