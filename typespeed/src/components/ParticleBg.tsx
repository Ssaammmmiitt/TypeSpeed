import { useEffect, useMemo } from "react";
import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";

import { loadFull } from "tsparticles";

const ParticleBg = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        // Background color setting, uncomment and set value if needed
        // color: {
        //   value: "#0d47a1",
        // },
      },
      fpsLimit: 60, // Frame rate limit for performance optimization
      particles: {
        number: {
          value: 100, // Number of particles
          density: {
            enable: true,
            value_area: 800 // Area density of particles
          }
        },
        color: {
          value: "#ffffff" // Particle color
        },
        shape: {
          type: "triangle", // Shape of the particles
          stroke: {
            width: 0, // Stroke width for particles
            color: "#000000" // Stroke color for particles
          },
          polygon: {
            nb_sides: 5 // Number of sides for polygon shape
          },
          image: {
            src: "img/github.svg", // Image source for particles (if image shape is used)
            width: 100, // Width of the image
            height: 100 // Height of the image
          }
        },
        opacity: {
          value: 0.5, // Opacity of particles
          random: false, // Opacity is not random
          anim: {
            enable: false, // Animation for opacity is disabled
            speed: 2, // Speed of opacity animation
            opacity_min: 0.1, // Minimum opacity value
            sync: false // Synchronization of opacity animation
          }
        },
        size: {
          value: { min: 1, max: 5 }, // Size of particles with min and max range
          random: true, // Size of particles is random
          anim: {
            enable: false, // Animation for size is disabled
            speed: 60, // Speed of size animation
            size_min: 0.1, // Minimum size for animation
            sync: false // Synchronization of size animation
          }
        },
        links: {
          enable: true, // Enable links between particles
          distance: 150, // Distance between particles for linking
          color: "#ffffff", // Color of the links
          opacity: 0.5, // Opacity of the links
          width: 1 // Width of the links
        },
        move: {
          enable: true, // Enable particle movement
          speed: 3, // Speed of particle movement
          direction: "none", // Movement direction of particles (can also be "right")
          random: false, // Random movement of particles
          straight: false, // Particles do not move in straight lines
          outModes: {
            default: "bounce" // Default mode when particles reach the edge (can also be "out")
          },
          bounce: false, // Particles do not bounce off the edge
          attract: {
            enable: false, // Attraction between particles is disabled
            rotateX: 600, // Rotation along X-axis for attraction
            rotateY: 1200 // Rotation along Y-axis for attraction
          }
        }
      },
      interactivity: {
        detect_on: "canvas", // Interactivity detection on canvas
        events: {
          onHover: {
            enable: true, // Enable hover effect
            mode: "grab" // Mode for hover effect (grab particles)
          },
          onClick: {
            enable: true, // Enable click effect
            mode: "push" // Mode for click effect (remove particles, can also be "push")
          },
          resize: { enable: true } // Enable particle adjustment on canvas resize
        },
        modes: {
          grab: {
            distance: 400, // Distance for grab mode
            line_linked: {
              opacity: 1 // Opacity of links in grab mode
            }
          },
          bubble: {
            distance: 400, // Distance for bubble mode
            size: 40, // Size of particles in bubble mode
            duration: 2, // Duration of bubble effect
            opacity: 8, // Opacity of bubble effect
            speed: 5 // Speed of bubble effect
          },
          repulse: {
            distance: 200, // Distance for repulse mode
            duration: 0.4 // Duration of repulse effect
          },
          push: {
            particles_nb: 4 // Number of particles to push
          },
          remove: {
            particles_nb: 2 // Number of particles to remove
          }
        }
      },
      retina_detect: true // Enable retina display support
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
};

export default React.memo(ParticleBg);
