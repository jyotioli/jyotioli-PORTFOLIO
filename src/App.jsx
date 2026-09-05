import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// CHUNK 1: STATIC DATA (The Terminal Scripts)
// ==========================================
const LINUX_COMMANDS = [
  "mounting_filesystem...",
  "establishing_secure_link...",
  "decrypting_payload...",
  "something inside...", // <-- Your hidden lyric
  "feels like it is burning...", // <-- Your hidden lyric
  "bypassing_firewall...",
  "access_granted.",
];

const SKILLS = [
  "FULL_STACK",
  "WEB_DEV",
  "CLOUD_COMPUTING",
  "VIDEO_EDITOR",
  "GRAPHIC_DESIGNER",
];

const PROJECTS = [
  {
    id: "01",
    title: "NOTES_API",
    desc: "Full-stack MERN application. Containerized Node.js/Express REST API deployed on AWS EC2 with Docker and PM2 for zero-downtime. React frontend hosted on AWS S3.",
    tech: ["REACT", "NODE.JS", "AWS EC2", "DOCKER"],
  },
  {
    id: "02",
    title: "IOT_AUTOMATION",
    desc: "Engineered a full-stack IoT dashboard bridging ESP32 hardware sensors to a web interface via MQTT over TLS (HiveMQ Cloud) and a Flask backend.",
    tech: ["PYTHON", "FLASK", "ESP32", "MQTT"],
  },
  {
    id: "03",
    title: "KANBAN_SYS",
    desc: "Task management system built from scratch. Implemented task-state management and dynamic DOM rendering using vanilla JavaScript without external libraries.",
    tech: ["JAVASCRIPT", "HTML5", "CSS3", "DOM"],
  },
];

export default function App() {
  // ==========================================
  // CHUNK 2: THE MEMORY 🧠 (State)
  // ==========================================
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [stage, setStage] = useState("loading");
  const [skillsIndex, setSkillsIndex] = useState(0);

  // 1. A memory to store the X and Y coordinates of the mouse
  const [heroMouse, setHeroMouse] = useState({ x: -1000, y: -1000 });

  // 2. A function that calculates the exact position of the mouse inside Slide 2
  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHeroMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // ==========================================
  // CHUNK 3: THE ACTION ⏱️ (Timer)
  // ==========================================
  useEffect(() => {
    let currentProg = 0;
    let logIndex = 0;

    const interval = setInterval(() => {
      currentProg += 1;

      // Every time progress hits a multiple of 16, inject the next line of text
      if (currentProg % 16 === 0 && logIndex < LINUX_COMMANDS.length) {
        setLogs((prev) => [...prev, LINUX_COMMANDS[logIndex]]);
        logIndex++;
      }

      if (currentProg === 101) {
        clearInterval(interval);
        setStage("main"); // Triggers the cinematic dissolve!
      } else {
        setProgress(currentProg);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (stage === "main") {
      const skillInterval = setInterval(() => {
        // Ye math logic (modulo %) array ko wapas 0 par bhej deta hai jab wo end par pahonchta hai
        setSkillsIndex((prevIndex) => (prevIndex + 1) % SKILLS.length);
      }, 2000); // Har 2 second mein change hoga

      // Cleanup: Memory leak rokne ke liye
      return () => clearInterval(skillInterval);
    }
  }, [stage]);

  // Memory for the success banner
  const [formSubmitted, setFormSubmitted] = useState(false);

  // The function that runs when they click "TRANSMIT_MESSAGE"
  const handleFormSubmit = (e) => {
    e.preventDefault(); // 1. Stops the page from refreshing

    // (Here is where we will eventually add the code to send the email)

    setFormSubmitted(true); // 2. Triggers the success banner
    e.target.reset(); // 3. CLEARS THE FORM BOXES!

    // 4. Hides the success banner after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  // ==========================================
  // CHUNK 4: THE VISUALS 🎨 (JSX)
  // ==========================================
  return (
    <div className="min-h-screen bg-[#020202] text-white">
      {/* AnimatePresence allows elements to animate OUT when they are removed */}
      <AnimatePresence>
        {stage === "loading" && (
          <motion.div
            // 🎬 THE CINEMATIC DISSOLVE
            exit={{
              opacity: 0,
              filter: "blur(20px)",
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
            className="fixed inset-0 flex items-center justify-center bg-[#020202]"
          >
            {/* 🌟 LAYER 0: BACKGROUND (Grid + Divine Glow) */}
            <div className="absolute inset-0 bg-grid pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF1493] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

            {/* 🖥️ LAYER 1: TOP HUD TEXT */}
            <div className="absolute top-8 w-full px-8 flex justify-between font-mono text-xs tracking-widest text-gray-500">
              <span className="uppercase">CASE_FILE // 2026</span>
              <span className="text-[#FF1493] flex items-center gap-2 uppercase">
                <span className="w-1.5 h-1.5 bg-[#FF1493] rounded-full animate-pulse shadow-[0_0_5px_#FF1493]"></span>
                ENCRYPTED
              </span>
            </div>

            {/* 🌊 LAYER 2: CENTER CONSOLE (Spaced Layout) */}
            <div className="relative flex flex-col items-center justify-center w-full z-20 py-10">
              {/* 1. Top Text (Pushed up with mb-8) */}
              <div className="relative z-10 font-serif-heroing                           ">
                SIGNAL_TRACE <span className="text-[#FF1493]">// INIT</span>
              </div>

              {/* 2. THE WAVES (Positioned in the middle, shifted slightly up) */}
              <div className="absolute top-1/2 left-0 w-full h-16 -translate-y-[70%] overflow-hidden flex items-center pointer-events-none z-0">
                {/* Wave 1: Faint and Slowest */}
                <div
                  className="absolute inset-0 wave-container opacity-20"
                  style={{ animation: "wave-slide 15s linear infinite" }}
                >
                  <svg
                    className="h-full w-full stroke-[#FF1493] fill-none"
                    preserveAspectRatio="none"
                    viewBox="0 0 2000 100"
                  >
                    <path
                      d="M 0,50 Q 25,30 50,50 T 100,50 T 150,50 T 200,50 T 250,50 T 300,50 T 350,50 T 400,50 T 450,50 T 500,50 T 550,50 T 600,50 T 650,50 T 700,50 T 750,50 T 800,50 T 850,50 T 900,50 T 950,50 T 1000,50 T 1050,50 T 1100,50 T 1150,50 T 1200,50 T 1250,50 T 1300,50 T 1350,50 T 1400,50 T 1450,50 T 1500,50 T 1550,50 T 1600,50 T 1650,50 T 1700,50 T 1750,50 T 1800,50 T 1850,50 T 1900,50 T 1950,50 T 2000,50"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Wave 2: Medium Opacity and Speed */}
                <div
                  className="absolute inset-0 wave-container opacity-40"
                  style={{ animation: "wave-slide 10s linear infinite" }}
                >
                  <svg
                    className="h-full w-full stroke-[#FF1493] fill-none"
                    preserveAspectRatio="none"
                    viewBox="0 0 2000 100"
                  >
                    <path
                      d="M 0,50 Q 25,15 50,50 T 100,50 T 150,50 T 200,50 T 250,50 T 300,50 T 350,50 T 400,50 T 450,50 T 500,50 T 550,50 T 600,50 T 650,50 T 700,50 T 750,50 T 800,50 T 850,50 T 900,50 T 950,50 T 1000,50 T 1050,50 T 1100,50 T 1150,50 T 1200,50 T 1250,50 T 1300,50 T 1350,50 T 1400,50 T 1450,50 T 1500,50 T 1550,50 T 1600,50 T 1650,50 T 1700,50 T 1750,50 T 1800,50 T 1850,50 T 1900,50 T 1950,50 T 2000,50"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Wave 3: Glowing and Fastest */}
                <div
                  className="absolute inset-0 wave-container"
                  style={{ animation: "wave-slide 8s linear infinite" }}
                >
                  <svg
                    className="h-full w-full stroke-[#FF1493] fill-none drop-shadow-[0_0_6px_#FF1493]"
                    preserveAspectRatio="none"
                    viewBox="0 0 2000 100"
                  >
                    <path
                      d="M 0,50 Q 25,0 50,50 T 100,50 T 150,50 T 200,50 T 250,50 T 300,50 T 350,50 T 400,50 T 450,50 T 500,50 T 550,50 T 600,50 T 650,50 T 700,50 T 750,50 T 800,50 T 850,50 T 900,50 T 950,50 T 1000,50 T 1050,50 T 1100,50 T 1150,50 T 1200,50 T 1250,50 T 1300,50 T 1350,50 T 1400,50 T 1450,50 T 1500,50 T 1550,50 T 1600,50 T 1650,50 T 1700,50 T 1750,50 T 1800,50 T 1850,50 T 1900,50 T 1950,50 T 2000,50"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* 3. Bottom Text (Pushed down with mt-10) */}
              <h1 className="relative z-10 text-6xl md:text-5xl font-semibold tracking-tighter text-white font-mono mt-10">
                {progress}
                <span className="text-3xl md:text-5xl text-gray-400 font-light ml-1">
                  %
                </span>
              </h1>
            </div>

            {/* ⌨️ LAYER 3: BOTTOM-LEFT LOGS (With the lyrics!) */}
            <div className="absolute bottom-8 left-8 text-xs text-gray-500 flex flex-col items-start font-mono space-y-2">
              {/* Notice the .slice(-3) here to create the 3-line "feeding" effect */}
              {logs.slice(-3).map((log, i) => (
                <div key={i} className="opacity-90">
                  <span className="text-[#FF1493] mr-2">&gt;</span>
                  {log}
                </div>
              ))}

              {/* The blinking cursor that shows it is actively typing */}
              {progress < 100 && (
                <div className="flex items-center">
                  <span className="text-[#FF1493] mr-2">&gt;</span>sys_
                  <span className="inline-block w-2 h-3 bg-[#FF1493] ml-1 animate-pulse"></span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          THE MAIN DASHBOARD (Scrolling Website)
          ========================================= */}
      {stage === "main" && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full flex flex-col"
          >
            {/* =========================================
                SLIDE 2: HERO SECTION
                ========================================= */}
            <section
              onMouseMove={handleHeroMouseMove}
              className="relative min-h-screen bg-[#020202] flex flex-col items-center justify-center cursor-crosshair overflow-hidden"
            >
              {/* =========================================
                BASE LAYER (Dark, always visible)
                ========================================= */}
              <div className="absolute inset-0 bg-grid opacity-100 flex items-center justify-center pointer-events-none">
                {/* HUD Elements (Invisible here to keep layout stable) */}
                <div className="absolute top-8 text-center font-mono text-xs text-[#FF1493] tracking-widest opacity-0">
                  TOP SECRET // CASE #2026
                </div>

                {/* Massive Stacked Serif Name */}
                <h1 className="flex flex-col items-center text-7xl md:text-[10rem] font-black text-gray-900 leading-[0.8] font-serif-hero">
                  <span>JYOTI</span>
                  <span>OLI</span>
                </h1>

                {/* Invisible Spacer for Skills (keeps layout identical) */}
                <div className="absolute bottom-48 h-12 flex items-center justify-center opacity-0">
                  <div className="t-tech tracking-[0.5em] text-xs md:text-sm px-6 py-2 border">
                    {SKILLS[skillsIndex]}
                  </div>
                </div>
              </div>
              {/* =========================================
                REVEAL LAYER (Bright, visible only under mouse)
                ========================================= */}
              <div
                className="absolute inset-0 bg-grid flex flex-col items-center justify-center pointer-events-none"
                style={{
                  WebkitMaskImage: `radial-gradient(circle 450px at ${heroMouse.x}px ${heroMouse.y}px, black 0%, transparent 100%)`,
                  maskImage: `radial-gradient(circle 450px at ${heroMouse.x}px ${heroMouse.y}px, black 0%, transparent 100%)`,
                }}
              >
                {/* HUD Elements */}
                <div className="absolute top-8 text-center font-mono text-xs text-[#FF1493] tracking-widest border border-[#FF1493]/30 px-4 py-1 bg-black/50">
                  TOP SECRET // CASE #2026
                </div>
                <div className="absolute top-20 left-10 font-mono text-xs text-gray-500 tracking-widest opacity-70">
                  LAT_68.8566_N
                  <br />
                  LON_2.3522_E
                </div>
                <div className="absolute bottom-20 right-10 font-mono text-xs border border-gray-800 bg-black/80 p-4">
                  <span className="text-gray-500 block mb-2 text-[10px]">
                    IMMERSIVE_MODE
                  </span>
                  <span className="text-[#FF1493] text-sm tracking-widest">
                    LET'S GO
                  </span>
                  <span className="text-gray-500 block mt-2 text-[10px] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF1493] rounded-full"></span>{" "}
                    AVAILABLE
                  </span>
                </div>

                {/* Massive Stacked Serif Name (Bright) */}
                <h1 className="flex flex-col items-center text-7xl md:text-[10rem] font-black text-white leading-[0.8] font-serif-hero drop-shadow-[0_0_30px_#FF1493] z-10">
                  <span>JYOTI</span>
                  <span>OLI</span>
                </h1>

                {/* The Animated Cycling Skills */}
                <div className="absolute bottom-34   flex items-center justify-center z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={skillsIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-[#FF1493] font-tech tracking-[0.5em] text-xs md:text-sm px-6 py-2 border  shadow-[0_0_10px_rgba(255,20,147,0.2)] rounded-full"
                    >
                      {SKILLS[skillsIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </section>

            {/* =========================================
                SLIDE 3: ABOUT SECTION (3-Column Dashboard)
                ========================================= */}

            <section className="relative min-h-screen bg-[#020202] border-b border-neutral-900 py-24 px-8 md:px-12 lg:px-20 flex flex-col justify-center z-10">
              <h2 className="text-[#FF1493] font-serif-hero text-2xl md:text-4xl mb-10 border-l-4 border-[#FF1493] pl-4">
                PROFILE // BIO
              </h2>

              {/* THE GRID CONTAINER */}
              <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl mx-auto items-stretch border-t border-b border-neutral-900 py-12">
                {/* ================= COLUMN 1: Visuals & Status ================= */}
                {/* Added border-r and padding to separate it from Column 2 */}
                <div className="flex flex-col gap-6 md:border-r border-neutral-800 md:pr-12 pb-12 md:pb-0">
                  {/* Image Container with Laser */}
                  <div className="relative w-full aspect-square border border-neutral-800 p-2 overflow-hidden bg-black/50 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 border border-[#FF1493]/30 pointer-events-none z-30"></div>

                    {/* The Scanner Laser */}
                    <motion.div
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute left-0 right-0 h-[2px] bg-[#FF1493] shadow-[0_0_20px_4px_rgba(255,20,147,0.8)] z-20"
                    />

                    {/* Placeholder for your actual image */}
                    <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-600 font-mono text-xs relative z-10">
                      [IMAGE_RENDER_FAILED]
                    </div>
                  </div>

                  {/* Designation & Status */}
                  <div className="flex justify-between font-mono text-xs text-gray-400 border-b border-neutral-800 pb-2">
                    <div>
                      <span className="text-gray-600 block mb-1">CLASS</span>
                      DEV_FULLSTACK
                    </div>
                    <div className="text-right">
                      <span className="text-gray-600 block mb-1">LOCATION</span>
                      NEW_DELHI
                    </div>
                  </div>

                  {/* CINEMATIC: Open to Work Button */}
                  <div className="relative border border-[#FF1493] bg-[#FF1493]/5 overflow-hidden group mt-auto">
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,20,147,0.1)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
                    <a
                      href="#contact"
                      className="relative block w-full text-white text-center font-tech  text-sm py-4 transition-all duration-300 group-hover:bg-[#FF1493] group-hover:text-black group-hover:shadow-[0_0_2px_#FF1493]"
                    >
                      <span className="inline-block w-2 h-2 bg-[#FF1493] group-hover:bg-black rounded-full mr-3 animate-pulse"></span>
                      OPEN_TO_WORK
                    </a>
                  </div>
                </div>

                {/* ================= COLUMN 2: Data & Logs (Bio & Edu) ================= */}
                {/* Added border-r and padding to separate it from Column 3 */}
                <div className="flex flex-col gap-10 font-mono md:border-r border-neutral-800 md:px-12 pb-12 md:pb-0">
                  {/* Summary */}
                  <div>
                    <div className="flex items-center justify-between border-b border-[#FF1493]/30 pb-2 mb-4">
                      <h3 className="text-[#FF1493] font-serif-hero text-sm ">
                        COMPETENCE_ANALYSIS
                      </h3>
                      <span className="text-xs text-gray-600">[READ_ONLY]</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed text-justify">
                      Hybrid developer obsessed with the fusion of{" "}
                      <span className="text-white">backend rigor</span> and{" "}
                      <span className="text-white">frontend interactivity</span>
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed text-justify">
                      I am a BSc Electronics graduate My core working tech spans
                      the MERN stack for both frontend and backend development.
                      Currently, my primary focus is on cloud infrastructure,
                      where I am actively learning and deploying applications
                      using AWS and Docker.
                    </p>
                  </div>

                  {/* Detailed Education */}
                  <div>
                    <h3 className="text-gray-500 font-serif-hero text-sm mb-4 border-b border-gray-800 pb-2">
                      // ACADEMIC_LOG
                    </h3>

                    {/* Degree */}
                    <div className="mb-4 bg-black/40 border border-neutral-900 p-4 hover:border-gray-700 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#FF1493] text-sm font-bold">
                          [UNIVERSITY OF DELHI]
                        </span>
                        <span className="text-gray-500 text-xs border border-gray-800 px-2 py-0.5">
                          2026
                        </span>
                      </div>
                      <div className="text-gray-300 text-sm mb-1">
                        BSc (Honours) Electronics
                      </div>
                    </div>

                    {/* Schooling */}
                    <div className="bg-black/40 border border-neutral-900 p-4 hover:border-gray-700 transition-colors">
                      <div className="text-gray-400 text-sm font-bold mb-2">
                        [SCHOOL OF EXCELLENCE]
                      </div>
                      <div className="flex flex-col gap-1 text-gray-500 text-xs">
                        <div className="flex justify-between">
                          <span>Class 12th</span>
                          <span className="text-white">83%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Class 10th</span>
                          <span className="text-white">87%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= COLUMN 3: Skills Inventory ================= */}
                <div className="flex flex-col gap-8 font-mono md:pl-12">
                  <div>
                    <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-4">
                      <h3 className="text-gray-500 font-serif-hero text-sm ">
                        EQUIPMENT_INVENTORY
                      </h3>
                    </div>

                    {/* Cloud & DevOps Skills (Moved to TOP) */}
                    <div className="mb-6">
                      <span className="text-[#FF1493] text-xs mb-2 block">
                        CLOUD_&_OPS_ [ACTIVE_FOCUS]
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "AWS (EC2, S3, IAM)",
                          "Docker",
                          "GitHub Actions",
                          "Linux / Bash",
                        ].map((skill, i) => (
                          <div
                            key={`cloud-${i}`}
                            className="border border-neutral-800 bg-[#FF1493]/10 text-white text-xs text-center py-2 hover:border-[#FF1493] transition-colors cursor-crosshair"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Frontend Skills */}
                    <div className="mb-6">
                      <span className="text-gray-500 text-xs mb-2 block">
                        FRONTEND_
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "React",
                          "JavaScript (ES6+)",
                          "HTML5 / CSS3",
                          "Tailwind",
                        ].map((skill, i) => (
                          <div
                            key={`front-${i}`}
                            className="border border-neutral-800 bg-black/30 text-gray-400 text-xs text-center py-2 hover:border-[#FF1493] hover:text-white transition-colors cursor-crosshair"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Backend Skills */}
                    <div>
                      <span className="text-gray-500 text-xs mb-2 block">
                        BACKEND_
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "Node.js",
                          "Express",
                          "Python",
                          "MongoDB (Atlas)",
                        ].map((skill, i) => (
                          <div
                            key={`back-${i}`}
                            className="border border-neutral-800 bg-black/30 text-gray-400 text-xs text-center py-2 hover:border-[#FF1493] hover:text-white transition-colors cursor-crosshair"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* =========================================
                SLIDE 4: EVIDENCE (Projects Section)
                ========================================= */}
            <section className="relative min-h-screen bg-[#020202] py-24 px-8 md:px-12 lg:px-20 flex flex-col justify-center z-10 overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-[#FF1493] font-serif-hero text-2xl md:text-4xl mb-12 border-l-4 border-[#FF1493] pl-4"
              >
                EVIDENCE BOARD
              </motion.h2>

              {/* Projects Container with Staggered Variants */}
              <motion.div
                // 1. Setup the staggered animation sequence
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of it is on screen
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 }, // Delay between each card appearing
                  },
                }}
                className="flex flex-col md:flex-row gap-6 max-w-7xl w-full mx-auto justify-center items-stretch"
              >
                {PROJECTS.map((project) => (
                  <motion.div
                    key={project.id}
                    // 2. Child animation: sliding up and fading in
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.2, ease: "easeOut" },
                      },
                    }}
                    // 3. The Hover Pop-up effect you wanted
                    whileHover={{ scale: 1.05, y: -10, zIndex: 10 }}
                    // 4. Enhanced Tech-Noir UI Styling
                    className="group relative flex-1 border border-neutral-800 border-t-2 border-t-[#FF1493]/40 bg-gradient-to-b from-neutral-900/80 to-black/90 backdrop-blur-sm p-8 flex flex-col hover:border-[#FF1493] hover:shadow-[0_0_10px_rgba(255,20,147,0.15)] transition-all duration-300"
                  >
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#FF1493] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#FF1493] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    {/* Project ID */}
                    <div className="absolute top-0 right-0 p-3 text-xs text-neutral-500 font-mono group-hover:text-[#FF1493] transition-colors">
                      {project.id}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-white font-serif-hero  text-xl md:text-2xl mb-4 group-hover:text-[#FF1493] group-hover:drop-shadow-[0_0_8px_rgba(255,20,147,0.8)] transition-all">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-400 font-mono text-xs md:text-sm mb-8 flex-grow leading-relaxed group-hover:text-gray-300 transition-colors">
                      {project.desc}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono text-gray-500 border border-gray-800 bg-black/50 px-2 py-1 group-hover:border-[#FF1493]/50 group-hover:text-[#FF1493] group-hover:bg-[#FF1493]/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </section>
            {/* =========================================
                SLIDE 5: CONTACT SECTION
                ========================================= */}
            <section
              id="contact"
              className="relative min-h-screen py-32 px-8 md:px-12 lg:px-20 flex flex-col justify-center z-10 border-t border-neutral-900 overflow-hidden"
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#FF1493] text-2xl md:text-4xl mb-12 border-l-4 border-[#FF1493] pl-4 max-w-2xl mx-auto w-full uppercase"
              >
                LET'S CONNECT
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl w-full mx-auto bg-black/50 border border-neutral-800 p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative group"
              >
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FF1493]/50"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FF1493]/50"></div>

                {/* Conditional rendering for the Success Banner */}
                {formSubmitted && (
                  <div className="bg-[#FF1493]/20 border border-[#FF1493] text-[#FF1493] text-sm p-4 mb-6 text-center uppercase  animate-pulse">
                    [SUCCESS] MESSAGE TRANSMITTED SUCCESSFULLY.
                  </div>
                )}

                <form
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-500 text-xs uppercase">
                      Target_Name
                    </label>
                    <input
                      type="text"
                      className="bg-[#020202] border border-neutral-800 text-white p-3 focus:outline-none focus:border-[#FF1493] transition-all uppercase"
                      placeholder="ENTER NAME..."
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-500 text-xs uppercase">
                      Return_Address
                    </label>
                    <input
                      type="email"
                      className="bg-[#020202] border border-neutral-800 text-white p-3 focus:outline-none focus:border-[#FF1493] transition-all uppercase"
                      placeholder="ENTER EMAIL..."
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-500 text-xs uppercase">
                      Payload_Data
                    </label>
                    <textarea
                      rows="4"
                      className="bg-[#020202] border border-neutral-800 text-white p-3 focus:outline-none focus:border-[#FF1493] transition-all resize-none uppercase"
                      placeholder="ENTER MESSAGE..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="relative mt-4 border border-[#FF1493] bg-[#FF1493]/10 text-white py-4 hover:bg-[#FF1493] hover:text-black hover:shadow-[0_0_1px_#FF1493] transition-all duration-300 uppercase"
                  >
                    TRANSMIT_MESSAGE
                  </button>
                </form>
              </motion.div>
            </section>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
