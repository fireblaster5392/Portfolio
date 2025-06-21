import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );

    projectRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  if (!projects || projects.length === 0) {
    return null;
  }

  const [mainProject, ...otherProjects] = projects;

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={el => projectRefs.current[0] = el} className="first-project-wrapper">
            <a href={mainProject.liveUrl || '#'} target="_blank" rel="noopener noreferrer">
              <div className="image-wrapper">
                <img src={mainProject.image} alt={mainProject.title} />
              </div>
            </a>
            <div className="text-content">
              <div className="badges">
                {mainProject.tags.map(tag => (
                  <span key={tag} className="hero-badge">{tag}</span>
                ))}
              </div>
              <h2>{mainProject.title}</h2>
              <p className="text-white-50 md:text-xl">{mainProject.description}</p>
              <div className="flex gap-4 mt-5">
                <Button text="View Live" href={mainProject.liveUrl} />
                <Button text="GitHub" href={mainProject.githubUrl} className="bg-black-200" />
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {otherProjects.map((project, index) => (
              <a 
                key={project.title}
                href={project.liveUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                ref={el => projectRefs.current[index + 1] = el}
                className="project"
              >
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img src={project.image} alt={project.title} />
                </div>
                <h2>{project.title}</h2>
                <div className="flex gap-2 mt-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs hero-badge">{tag}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;