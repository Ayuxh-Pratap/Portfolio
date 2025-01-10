import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full pb-24 items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 md:pt-20 lg:pt-20"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"I DESIGN EXPERIENCES, CODE SOLUTIONS, AND CREATE MASTERPIECES."}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I am a passionate web developer and designer, specializing in crafting modern, responsive websites and dynamic user interfaces. With a keen eye for detail and a strong foundation in design principles, I build experiences that captivate and convert."
              }
            />
            <AnimatedBody
              text={
                "From conceptualizing designs to bringing them to life with clean, efficient code, I thrive on creating solutions that solve real problems. My expertise spans across frontend technologies, UX/UI design, and delivering fully functional, visually stunning web applications."
              }
            />
            <AnimatedBody
              text={
                "As a freelancer, I collaborate with clients to transform ideas into digital reality. Whether it’s a personal portfolio, an e-commerce site, or a full-scale web application, I deliver projects that meet your goals and exceed expectations."
              }
            />
          </div>

          <div className="flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Tech Stack"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JavaScript (ES6+), React.js, Next.js, TypeScript, Tailwind CSS, Redux, Redux Toolkit, Node.js, Express.js, HTML5, CSS3, Git/GitHub, REST APIs, Vite."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Figma, Adobe Photoshop, Adobe XD, Framer, ProtoPie, Blender (3D Design), UX/UI Design, Wireframing, Prototyping."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Specializations"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Responsive Web Design, Custom UI/UX Solutions, Landing Pages, E-commerce Platforms, Progressive Web Apps (PWAs), Performance Optimization, and Accessibility."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;
