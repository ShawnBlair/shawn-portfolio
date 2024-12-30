import './index.css';
import React, { useState, useEffect, useRef } from 'react';
import { ReactTyped } from "react-typed";
import { motion, useMotionValue, useSpring } from 'framer-motion';

function App() {

  const [activeSection, setActiveSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   // Function to handle scroll event
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll('.section');
  //     let currentSection = null;

  //     sections.forEach(section => {
  //       const sectionTop = section.offsetTop;
  //       const sectionHeight = section.clientHeight;
  //       if (window.scrollY >= sectionTop - sectionHeight * 0.25) {
  //         currentSection = section.id;
  //       }
  //     });

  //     setActiveSection(currentSection);
  //   };


  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection = null;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight * 0.25 && window.scrollY < sectionTop + sectionHeight * 0.75) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };



    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
    //setActiveSection(sectionId);
    //setIsMenuOpen(false); // Close the menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [checkedInput, setCheckedInput] = useState('c1'); // Default checked input ID

  const handleInputChange = (e) => {
    setCheckedInput(e.target.id); // Update state with the clicked input's ID
  };

  useEffect(() => {
  let cb = document.querySelector('.containerbio')
  let cb1 = document.querySelector('.containerbio1')
  
  // let count = 1000;
  let count = 84;
  //for local development, if the number of boxes is alot after refreshing twice, let count be 42
  for(let i=0; i<count; i++){
    let box = document.createElement('div');
    box.className = "box";
    let box1 = document.createElement('div');
    box1.className = "box";
    cb.appendChild(box);
    cb1.appendChild(box1);
  }
  let boxes = document.querySelectorAll(".box")

  for(let i=0; i<boxes.length; i++){
    boxes[i].addEventListener('mouseover', (e) => {
      boxes[i].classList.add('active')
      boxes[i].style.setProperty('--x',getRandomValue)
      boxes[i].style.setProperty('--y',getRandomValue)

      function getRandomValue(){
        // return `${Math.random() * 2000 - 1000}px`;
        return `${Math.random() * 168 - 84}px`;
        //for local development, if the number of boxes is alot after refreshing twice, let return 
        // be -> return `${Math.random() * 84 - 42}px`;
      }

      let angleValue = Math.random() * 360;
      boxes[i].style.filter = 'hue-rotate('+angleValue+'deg)';

    })
  }
}, []); // Empty dependency array to run once after mount


const ref = useRef(null);
    const [position, setPosition] = useState({x:0,y:0});

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const {height, width, left, top} = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width/2)
        const middleY = clientY - (top + height/2)

        setPosition({x: middleX, y: middleY})
    }

    const reset = () => {
        setPosition({x:0, y:0})
    }

    const { x, y } = position;

// //const MagneticEffect = () => {
//   const [isHovering, setIsHovering] = useState(false);
//   const ref = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const springConfig = { stiffness: 200, damping: 20 };
//   const springX = useSpring(x, springConfig);
//   const springY = useSpring(y, springConfig);

//   const mouseMove = (e) => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     const offsetX = e.clientX - rect.left - rect.width / 2;
//     const offsetY = e.clientY - rect.top - rect.height / 2;
//     x.set(offsetX);
//     y.set(offsetY);
//     setIsHovering(true);
//   };

//   const mouseLeave = () => {
//     x.set(0);
//     y.set(0);
//     setIsHovering(false);
//   };


function toggleMenufunc() {
  const menu = document.querySelector(".menu");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}

  // const skillRef = useRef(null);

  // useEffect(() => {
  //   const skillContainer = skillRef.current;
  //   const skills = Array.from(skillContainer.children);
  //   const totalWidth = skills.reduce((acc, skill) => acc + skill.offsetWidth, 0);

  //   // Duplicate the skills to fill the container for seamless scrolling
  //   skills.forEach(skill => {
  //     const clone = skill.cloneNode(true);
  //     skillContainer.appendChild(clone);
  //   });

  //   skillContainer.style.width = `${totalWidth * 2}px`;
  // }, []);
  

  return (
    <>
      
<nav className='desktoprect'>
<div className="overlay"></div>
      <div className="App">
        <motion.p 
        // onMouseMove={mouseMove}
        // onMouseLeave={mouseLeave}
        // ref={ref}
        // style={{ x: springX, y: springY }}
        // className={`titlenav ${isHovering ? 'hovering' : ''}`}
        style={{position: "relative"}}
            className='titlenav'
            ref={ref}

            onMouseMove={handleMouse}

            onMouseLeave={reset}

            animate={{x, y}}

            transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
        >Shawn Blair</motion.p>
        <nav className="navbar">
          <ul>
            <li className={activeSection === 'section1' ? 'active' : ''} onClick={() => scrollToSection('section1')}>
              Bio
              {activeSection === 'section1' && <div className="underline"></div>}
            </li>
            <li className={activeSection === 'section2' ? 'active' : ''} onClick={() => scrollToSection('section2')}>
              Professional Experience
              {activeSection === 'section2' && <div className="underline"></div>}
            </li>
            <li className={activeSection === 'section3' ? 'active' : ''} onClick={() => scrollToSection('section3')}>
              Scholastic Record
              {activeSection === 'section3' && <div className="underline"></div>}
            </li>
            <li className={activeSection === 'section4' ? 'active' : ''} onClick={() => scrollToSection('section4')}>
              Program Development
              {activeSection === 'section4' && <div className="underline"></div>}
            </li>
            <li className={activeSection === 'section5' ? 'active' : ''} onClick={() => scrollToSection('section4')}>
              Competencies
              {activeSection === 'section5' && <div className="underline"></div>}
            </li>
            <li className={activeSection === 'section6' ? 'active' : ''} onClick={() => scrollToSection('section5')}>
              Endorsements
              {activeSection === 'section6' && <div className="underline"></div>}
            </li>
          </ul>
        </nav>

        <div className='intronpic'>
        
        <div className='introsum'>A passionate {" "}
        <ReactTyped
          strings={["programmer", "software engineer", "data annotator", "web developer", 
            "mobile app developer"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          showCursor={true}
        /><br/>
        who aims to use information and communication technology to make a positive impact on people's lives.
        </div>
        <div className='imgsection'>
        <img src='/sbimg.jpg' alt='My Image' className="bordered-image" />
        <div className='border-image' style={{ borderImage: 'url("/assets/newspaper-pieces.jpg") 30 30 round' }}></div>
        {/* <div className='cropped-border'> style={{ borderImage: 'url("/newspaper-pieces.jpg") 30 30 round' }}*/}
        {/* <img src='/ripped-paper.jpg' alt='My Border' className='image-border'/> */}
        {/* </div> */}
        {/* if you want the image to pop out of its own background check this out: "Create an animated 
        pop-out effect // HTML & CSS" */}
        </div>
        </div>
        <div className="content">
          <div id="section1" className="section"><div className='containerbio'>
          {/* <img src="/ransomizerfont-img.png" alt="Bio"></img> */}
          </div>
          
            <h2>Bio</h2>
            <div>I am a dedicated Information Communication Technology enthusiast who is quite 
              experienced in various coding languages and software, including React JavaScript, Python, C#, 
              Visual Basic, C++, and MySQL. I have developed projects such as websites, progressive web 
              applications, a soccer management system, and a point of sale system. My skills include software 
              development, hardware maintenance, digital platform management, and database systems creation 
              and management. I excel in teamwork, independent work, critical thinking and communication. 
              Additionally, I have experience in both traditional and digital marketing and advertising. 
              I aim to leverage technology to solve people's everyday challenges and at least put a smile on 
              their faces.</div>
          </div>
          <div id="section2" className="section">
            <h2>Professional Experience</h2>
            <div className='wkexperience'>
            <div className='container2'>
            <div className="cover">Creptie School</div><div className="overlay2"></div><div className='tb2'>
              <h3>May 2023 - To date</h3>
            As a tutor at a coding institution, I;
              <ol>
                <li>Deliver intensive web development training programs.</li>
                <li>Focus on hands-on learning and real-world applications, including robotics.</li>
                <li>Engage students in STEAM-based immersive projects.</li>
                <li>Aim to equip students with the skills and knowledge needed to excel in their field.</li>
                <li>Help students become resourceful members of society.</li>
                <li>Handle the transport and logistics role of the institution</li>
                <li>Work in an agile development environment</li>
              </ol>
              </div></div>
              <div className='container2'>
              <div className="cover">Bevy Technologies Limited</div><div className="overlay2"></div><div className='tb2'>
                <h3>August 2018 - April 2019</h3>
             At the company, I;
              <ol>
                <li>Learned the company's operations and services.</li>
                <li>Mastered C# for creating simple problem-solving programs</li>
                <li>Gained exposure to MySQL, enhancing technical skills.</li>
                <li>Improved communication with colleagues and clients.</li>
                <li>Became an efficient team player.</li>
                <li>Worked independently to solve challenges</li>
                <li>Expanded expertise in digital marketing and advertising.</li>
                <li>Utilized critical thinking abilities effectively.</li>
              </ol>
              </div></div>
          </div></div>
          <div id="section3" className="section">
            <h2>Scholastic Record</h2>
            <div className='timeline'> <div className='overlayt'></div>
            <div className='container right'>            
            <div className="label">
            <div className="overlaylabel"></div><span>May 2019 – February 2021</span></div>              
            <div className="overlay2"></div>
            <div className="dot-overlay"></div>           
            <div className='textbox'><h3>Nairobi Technical Training Institute</h3>
            <p>Acquired the Diploma in Information Communication Technology</p>
            </div><div className="hover-word">N.T.T.I</div></div>
            <div className='container left'>
            <div className="label">
            <div className="overlaylabel"></div><span>May 2017 – July 2018</span></div>            
            <div className="overlay2"></div>
            <div className="dot-overlayl"></div>          
            <div className='textbox'><h3>Nairobi Technical Training Institute</h3>
            <p>Acquired the Craft Certificate in Information Technology</p>
              </div><div className="hover-word">N.T.T.I</div></div>
              <div className='container right'>
              <div className="label">
              <div className="overlaylabel"></div><span>March 2017 – May 2017</span></div>
            <div className="overlay2"></div>
            <div className="dot-overlay"></div>           
            <div className='textbox'><h3>Unity College</h3>
            <p>Acquired the Computer Society of Kenya Proficiency Certificate</p>
            </div><div className="hover-word">UNITY</div></div>
            <div className='container left'>
            <div className="label four4">
            <div className="overlaylabel"></div><span>2013 – 2016</span></div>
            <div className="overlay2"></div>
            <div className="dot-overlayl"></div>           
            <div className='textbox'><h3>Dagoretti High School</h3>
            <p>Acquired the Kenya Certificate of Secondary Education.</p>
            </div><div className="hover-word">D.H.S</div></div>
          </div></div>

          <div id="section4" className="section">
            <h2>Program Development</h2>
            <div className='skills1'>
              <div className="covskills1"></div>           
            <div className='tb3'><div className="cover">Creptie School</div>
            <h3 className='h3'>Scrum Study’s Scrum Fundamentals Certification</h3>
            <p className='h3'>Acquired a Scrum Fundamentals Certificate</p>
              </div></div>
              {/* <>^Locomotive Page Scroll using HTML CSS JS - Smooth Scroll Animation @OnlinewebustaadCom
               ^for people who prefre reduced motion; Create an infinite horizontal scroll animation
               ^Stunning HTML & CSS Card Animation</> */}
          </div>
                
          <div id="section5" className="section">
            <h2>Competencies</h2>
            <div className='skills1'>
              <div className="covskills1"></div>           
            <div className='tb3'>
              I am proficient in the following coding languages and software, enabling me to create various 
              programs:
              <ol>
                <li value={'1'}>React JavaScript</li>
                <li>Python progamming language</li>
                <li>C# programming language</li>
                <li>Visual Basic (.NET) language</li>
                <li>C++ programming language</li>
                <li>Object-Oriented programming</li>
                <li>Internet-based programming languages</li>
                <li>MySQL (an open-source relational database management system)</li>
                <li>Microsoft software like Visual Studio</li>
                <li>Online interactive coding platforms like Scrimba</li>
              </ol>
              <p>I have built websites from scratch using Scrimba, which provided me with extensive knowledge of 
              React JavaScript. I continue to enhance my skills with platforms like Visual Studio Code. I have 
              developed a point-of-sale system using C#, a progressive web app with internet-based programming 
              languages, and a soccer management system using Visual Basic, among other projects. 
              Additionally, I can create automated client counter systems and various other applications 
              using these languages and tools.</p>
              <p>Other skills I have include or can be grouped into;</p></div></div>
              {/* <>^Locomotive Page Scroll using HTML CSS JS - Smooth Scroll Animation @OnlinewebustaadCom
               ^for people who prefre reduced motion; Create an infinite horizontal scroll animation
               ^Stunning HTML & CSS Card Animation</> */}
              <div className='skillgen'><div className='skill'>
              <div className="overlay4"></div>
                <input type='radio' name='slide' id='c1' checked={checkedInput === 'c1'}
        onChange={handleInputChange} />
        <label htmlFor="c1" className='lc1'><div className='skills2'>
          {checkedInput !== 'c1' && <><div className="overlay5">Digital</div></>}
              <div className="covskills1"></div>           
              {checkedInput === 'c1' && <><div className='tb3'>
                Ability to comprehend and use the following digital platforms effectively and accordingly;
                <ol>
                  <li value={'1'}>Microsoft Office, Word, PowerPoint, Excel, Access, Publisher</li>
                  <li>Google Drive, Google Docs, Gmail</li>
                  <li>Social Media platforms</li>           
                </ol>
              </div></>}</div></label>
              <input type='radio' name='slide' id='c2' checked={checkedInput === 'c2'}
        onChange={handleInputChange}/><label  htmlFor="c2" className='lc1'><div className='skills2'>
          {checkedInput !== 'c2' && <><div className="overlay5">Technical/Hard</div></>}
              <div className="covskills1"></div>           
              {checkedInput === 'c2' && <><div className='tb3'>
                Ability to accomplish tasks through use of the following artistries effectively and accordingly;
                <ol>
                  <li value={'1'}>Database Management</li>
                  <li>User Interface design</li>
                  <li>Storage systems and management</li>
                  <li>Creation of systems and websites using visual basic (.net), C sharp, hypertext markup 
                  language(html) and JavaScript as well as React, Python and Cascading Style Sheets</li>
                  <li>Robot creation as well as creation of programs that facilitate their functioning</li>
                  <li>Data annotation</li>
                </ol>
              </div></>}</div></label>
              <input type='radio' name='slide' id='c3' checked={checkedInput === 'c3'}
        onChange={handleInputChange}/><label  htmlFor="c3" className='lc1'><div className='skills2'>
          {checkedInput !== 'c3' && <><div className="overlay5">Soft</div></>}
              <div className="covskills1"></div>           
              {checkedInput === 'c3' && <><div className='tb3'>
                Ability to ease situations through use of the following proficiencies effectively and accordingly;
                <ol>
                  <li value={'1'}>Integrity</li>
                  <li>Effective communication (verbal and written)</li>
                  <li>Teamwork</li>
                  <li>Creativity</li>
                  <li>Critical thinking</li>
                  <li>Willingness to learn</li>
                  <li>Responsibility</li>
                  <li>Prudency</li>
                  <li>Leadership</li>       
                  </ol>  
                The above named proficiencies are just but a few of them.
                
              </div></>}</div></label>

              </div>
              </div>
          </div>
          <div id="section6" className="section">
  <h2>Endorsements</h2>
  <div className="logos"><div className="overlay3"></div><div className="links">
    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/shawn-blair-91abb3218/" target="_blank" rel="noopener noreferrer">
      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn" className="logo" /> */}
    <img src='/linkedin-logo.png' alt='LinkedIn' className='logo' />
    </a>
    {/* GitHub */}
    <a href="https://github.com/ShawnBlair" target="_blank" rel="noopener noreferrer">
      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="logo" /> */}
      <img src='/github-logo.png' alt='GitHub' className='logo2' />
    </a>
  </div></div>
</div>
        </div>
      </div>
      </nav>

      <nav id='hamburger-nav'>
      <div className="overlay"></div>
      <div className="App">
        <motion.p 
        // onMouseMove={mouseMove}
        // onMouseLeave={mouseLeave}
        // ref={ref}
        // style={{ x: springX, y: springY }}
        // className={`titlenav ${isHovering ? 'hovering' : ''}`}

        style={{position: "relative"}}
            className='titlenav1'
            ref={ref}

            onMouseMove={handleMouse}

            onMouseLeave={reset}

            animate={{x, y}}

            transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
        >Shawn Blair</motion.p>
        <nav className="hamburger-navbar">
          <div className='hamburger-icon' onClick={toggleMenufunc}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <li className={activeSection === 'section11' ? 'active' : ''} onClick={() => scrollToSection('section11')}>
              Bio
              {activeSection === 'section11' && <div className="underline"></div>}
            </li>
            <li className={activeSection === 'section21' ? 'active' : ''} onClick={() => scrollToSection('section21')}>
              Professional Experience
              {activeSection === 'section21' && <div className="underline"></div>}
            </li>
            <li className={activeSection === 'section31' ? 'active' : ''} onClick={() => scrollToSection('section31')}>
              Scholastic Record
              {activeSection === 'section31' && <div className="underline"></div>}
            </li>
            <li className={activeSection === 'section41' ? 'active' : ''} onClick={() => scrollToSection('section41')}>
              Competencies
              {activeSection === 'section41' && <div className="underline"></div>}
            </li>
            <li className={activeSection === 'section51' ? 'active' : ''} onClick={() => scrollToSection('section51')}>
              Endorsements
              {activeSection === 'section51' && <div className="underline"></div>}
            </li>
          </ul>
        </nav>

          <div className='imgsection1'>
          <img src='/sbimg.jpg' alt='My Image' className="bordered-image" />
            <div className='border-image' style={{ borderImage: 'url("/assets/newspaper-pieces.jpg") 30 30 round' }}></div>
        {/* <div className='cropped-border'> style={{ borderImage: 'url("/newspaper-pieces.jpg") 30 30 round' }}*/}
        {/* <img src='/ripped-paper.jpg' alt='My Border' className='image-border'/> */}
        {/* </div> */}
          </div>

          <div className='introsum1'>A passionate {" "}
        <ReactTyped
          strings={["programmer", "software engineer", "data annotator", "web developer", 
            "mobile app developer"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          showCursor={true}
        /><br/>
        who aims to use information and communication technology to make a positive impact on people's lives.
        </div>

        <div className="content">
        <div id="section11" className="section"><div className='containerbio1'>
          {/* <img src="/ransomizerfont-img.png" alt="Bio"></img> */}
          </div>
          
            <h2>Bio</h2>
            <div>I am a dedicated Information Communication Technology enthusiast who is quite 
              experienced in various coding languages and software, including React JavaScript, Python, C#, 
              Visual Basic, C++, and MySQL. I have developed projects such as websites, progressive web 
              applications, a soccer management system, and a point of sale system. My skills include software 
              development, hardware maintenance, digital platform management, and database systems creation 
              and management. I thrive in a scrum and agile setting, excel in teamwork, independent work, critical thinking, and communication. 
              Additionally, I have experience in both traditional and digital marketing and advertising. 
              I aim to leverage technology to solve people's everyday challenges and at least put a smile on 
              their faces.</div>
          </div>

          <div id="section21" className="section">
            <h2>Professional Experience</h2>
            <div className='wkexperience1'>
            <div className='container21'>
            <div className="cover">Creptie School</div><div className="overlay2"></div><div className='tb2'>
              <h3>May 2023 - To date</h3>
              As a tutor at a coding institution, I;
              <ol>
                <li>Deliver intensive web development training programs.</li>
                <li>Focus on hands-on learning and real-world applications, including robotics.</li>
                <li>Engage students in STEAM-based immersive projects.</li>
                <li>Aim to equip students with the skills and knowledge needed to excel in their field.</li>
                <li>Help students become resourceful members of society.</li>                
                <li>Handle the transport and logistics role of the institution</li>
                <li>Work in an agile development environment</li>
              </ol>
              </div></div>
              <div className='container21'>
              <div className="cover">Bevy Technologies Limited</div><div className="overlay2"></div><div className='tb2'>
                <h3>August 2018 - April 2019</h3>
                 At the company, I;
              <ol>
                <li>Learned the company's operations and services.</li>
                <li>Mastered C# for creating simple problem-solving programs</li>
                <li>Gained exposure to MySQL, enhancing technical skills.</li>
                <li>Improved communication with colleagues and clients.</li>
                <li>Became an efficient team player.</li>
                <li>Worked independently to solve challenges</li>
                <li>Expanded expertise in digital marketing and advertising.</li>
                <li>Utilized critical thinking abilities effectively.</li>
              </ol>
              </div></div>
          </div></div>

          <div id="section31" className="section">
            <h2>Scholastic Record</h2>
            <div className='timeline1'><div className='timeline1-overlay'></div> 
            <div className="label1">
            <div className="overlaylabel"></div><span>May 2019 – February 2021</span></div>
            {/* <div className="dot-overlay1"></div> */}
            <div className='container right1'>            
            {/* <div className="label1">
            <div className="overlaylabel"></div><span>May 2019 – February 2021</span></div>               */}
            <div className="overlay2"></div>
            <div className="dot-overlay21"></div>           
            <div className='textbox'><h3>Nairobi Technical Training Institute</h3>
            <p>Acquired the Diploma in Information Communication Technology</p>
            </div><div className="hover-word">N.T.T.I</div></div>
            <div className="label1left">
            <div className="overlaylabel"></div><span>May 2017 – July 2018</span></div>
            <div className='container left2'>                        
            <div className="overlay2"></div>
            <div className="dot-overlay2"></div>          
            <div className='textbox'><h3>Nairobi Technical Training Institute</h3>
            <p>Acquired the Craft Certificate in Information Technology</p>
              </div><div className="hover-word">N.T.T.I</div></div>
              <div className="label3">
              <div className="overlaylabel"></div><span>March 2017 – May 2017</span></div>
              <div className='container right2'>              
            <div className="overlay2"></div>
            <div className="dot-overlay2"></div>           
            <div className='textbox'><h3>Unity College</h3>
            <p>Acquired the Computer Society of Kenya Proficiency Certificate</p>
            </div><div className="hover-word">UNITY</div></div>
            <div className="label four41">
            <div className="overlaylabel"></div><span>2013 – 2016</span></div>
            <div className='container left1'>            
            <div className="overlay2"></div>
            <div className="dot-overlay2"></div>           
            <div className='textbox'><h3>Dagoretti High School</h3>
            <p>Acquired the Kenya Certificate of Secondary Education.</p>
            </div><div className="hover-word">D.H.S</div></div>
          </div></div>
          <div id="section41" className="section">
            <h2>Competencies</h2>
            <div className='skills1'>
              <div className="covskills1"></div>           
            <div className='tb3'>
              I am proficient in the following coding languages and software, enabling me to create various 
              programs:
              <ol>
                <li value={'1'}>React JavaScript</li>
                <li>Python programming language</li>
                <li>C# programming language</li>
                <li>Visual Basic (.NET) language</li>
                <li>C++ programming language</li>
                <li>Object-Oriented programming</li>
                <li>Internet-based programming languages</li>
                <li>MySQL (an open-source relational database management system)</li>
                <li>Microsoft software like Visual Studio</li>
                <li>Online interactive coding platforms like Scrimba</li>
              </ol>
              <p>I have built websites from scratch using Scrimba, which provided me with extensive knowledge of 
              React JavaScript. I continue to enhance my skills with platforms like Visual Studio Code. I have 
              developed a point-of-sale system using C#, a progressive web app with internet-based programming 
              languages, and a soccer management system using Visual Basic, among other projects. 
              Additionally, I can create automated client counter systems and various other applications 
              using these languages and tools.</p>
              <p>Other skills I have include or can be grouped into;</p></div></div>
              {/* <>^Locomotive Page Scroll using HTML CSS JS - Smooth Scroll Animation @OnlinewebustaadCom
               ^for people who prefre reduced motion; Create an infinite horizontal scroll animation
               ^Stunning HTML & CSS Card Animation</> */}
              <div className='skillgen'><div className='skilltwo'>
              <div className="overlay4"></div>
                <input type='radio' name='slide' id='c1' checked={checkedInput === 'c1'}
        onChange={handleInputChange} />
        <label htmlFor="c1" className='labelh'><div className='skills21'>
          {checkedInput !== 'c1' && <><div className="overlay51">Digital</div></>}
              <div className="covskills1"></div>           
              {checkedInput === 'c1' && <><div className='tb3'>
                Ability to comprehend and use the following digital platforms effectively and accordingly;
                <ol>
                  <li value={'1'}>Microsoft Office, Word, PowerPoint, Excel, Access, Publisher</li>
                  <li>Google Drive, Google Docs, Gmail</li>
                  <li>Social Media platforms</li>           
                </ol>
              </div></>}</div></label>
              <input type='radio' name='slide' id='c2' checked={checkedInput === 'c2'}
        onChange={handleInputChange}/><label  htmlFor="c2" className='labelh'><div className='skills21'>
          {checkedInput !== 'c2' && <><div className="overlay51">Technical/Hard</div></>}
              <div className="covskills1"></div>           
              {checkedInput === 'c2' && <><div className='tb3'>
                Ability to accomplish tasks through use of the following artistries effectively and accordingly;
                <ol>
                  <li value={'1'}>Database Management</li>
                  <li>User Interface design</li>
                  <li>Storage systems and management</li>
                  <li>Creation of systems and websites using visual basic (.net), C sharp, hypertext markup 
                  language(html) and JavaScript as well as React and Cascading Style Sheets</li>
                  <li>Robot creation as well as creation of programs that facilitate their functioning</li>
                  <li>Data annotation</li>
                </ol>
              </div></>}</div></label>
              <input type='radio' name='slide' id='c3' checked={checkedInput === 'c3'}
        onChange={handleInputChange}/><label  htmlFor="c3" className='labelh'><div className='skills21'>
          {checkedInput !== 'c3' && <><div className="overlay51">Soft</div></>}
              <div className="covskills1"></div>           
              {checkedInput === 'c3' && <><div className='tb3'>
                Ability to ease situations through use of the following proficiencies effectively and accordingly;
                <ol>
                  <li value={'1'}>Integrity</li>
                  <li>Effective communication (verbal and written)</li>
                  <li>Teamwork</li>
                  <li>Creativity</li>
                  <li>Critical thinking</li>
                  <li>Willingness to learn</li>
                  <li>Responsibility</li>
                  <li>Prudency</li>
                  <li>Leadership</li>       
                  </ol>  
                The above named proficiencies are just but a few of them.
                
              </div></>}</div></label>

              </div>
              </div>
          </div>

          <div id="section51" className="section">
  <h2>Endorsements</h2>
  <div className="logos"><div className="overlay3"></div><div className="links">
    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/shawn-blair-91abb3218/" target="_blank" rel="noopener noreferrer">
      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn" className="logo" /> */}
    <img src='/linkedin-logo.png' alt='LinkedIn' className='logo' />
    </a>
    {/* GitHub */}
    <a href="https://github.com/ShawnBlair" target="_blank" rel="noopener noreferrer">
      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="logo" /> */}
      <img src='/github-logo.png' alt='GitHub' className='logo2' />
    </a>
  </div></div>
</div>

          </div>
        </div>
      </nav>
    </>
  );
}
//}

export default App;
