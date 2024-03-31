import Particles from "react-tsparticles"
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import { Technologies } from "../Technologies";
import { Showcase } from "../Showcase/Showcase";
import { Slider } from "../Slider/Slider";

export function Main() {
  return (
    <Container>
      <Particles

        id="tsparticles"
        options={{
  "autoPlay": true,
  "background": {
    "color": {
      "value": "#bfa2a20"
    },
    "image": "",
    "position": "",
    "repeat": "",
    "size": "",
    "opacity": 1
  },
  "backgroundMask": {
    "composite": "destination-out",
    "cover": {
      "color": {
        "value": "#9cb810"
      },
      "opacity": 1
    },
    "enable": false
  },
  "clear": true,
  "defaultThemes": {},
  "delay": 0.5,
  "fullScreen": {
    "enable": true,
    "zIndex": -1
  },
  "detectRetina": true,
  "duration": 0,
  "fpsLimit": 10,
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onClick": {
        "enable": false,
        "mode": []
      },

      "onHover": {
        "enable": true,
        "mode": "trail",
        "parallax": {
          "enable": false,
          "force": 2,
          "smooth": 10
        }
      },

    },
    "modes": {
      "trail": {
        "delay": 0.1,
        "pauseOnStop": true,
        "quantity": 5,
        "particles": {
          "color": {
            "value": "#ee4c4c",
            "animation": {
              "enable": true,
              "speed": 1,
              "sync": true
            }
          },
          "collisions": {
            "enable": false
          },
          "links": {
            "enable": false
          },
          "move": {
            "outModes": {
              "default": "destroy"
            },
            "speed": 1
          },
          "size": {
            "value": {
              "min": 1,
              "max": 5
            },
            "animation": {
              "enable": true,
              "speed": 5,
              "sync": true,
              "startValue": "min",
              "destroy": "max"
            }
          }
        }
      },
      "attract": {
        "distance": 400,
        "duration": 0.4,

        "factor": 1,
        "maxSpeed": 50,
        "speed": 1
      },

      "bubble": {
        "distance": 400,
        "duration": 0.4,
        "mix": false,
        "divs": {
          "distance": 400,
          "duration": 0.4,
          "mix": false,
          "selectors": []
        }
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 1010,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,

      },
      "slow": {
        "factor": 3,
        "radius": 400
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#eedd26"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#bfbbbb"
          },
          "length": 4000
        }
      }
    }
  },
  "manualParticles": [],
  "particles": {
    "bounce": {
      "horizontal": {
        "value": 1
      },
      "vertical": {
        "value": 1
      }
    },
    "collisions": {

      "bounce": {
        "horizontal": {
          "value": 1
        },
        "vertical": {
          "value": 1
        }
      },
      "enable": false,

      "mode": "bounce",
      "overlap": {
        "enable": true,
        "retries": 0
      }
    },
    "color": {
      "value": "#898787",
      "animation": {
        "h": {
          "count": 0,
          "enable": true,
          "speed": 50,

          "sync": false,
          "offset": 0
        },
        "s": {
          "count": 0,
          "enable": false,
          "speed": 1,

          "sync": true,
          "offset": 0
        },
        "l": {
          "count": 0,
          "enable": false,
          "speed": 1,


          "sync": true,
          "offset": 0
        }
      }
    },
  
    "groups": {},
    "move": {
      "angle": {
        "offset": 0,
        "value": 90
      },
      "attract": {
        "distance": 400,
        "enable": false,
        "rotate": {
          "x": 3000,
          "y": 3000
        }
      },

      "decay": 0,
      "distance": {},
      "direction": "none",
      "drift": 0,
      "enable": true,
      "gravity": {
        "acceleration": 9.81,
        "enable": false,
        "inverse": false,
        "maxSpeed": 5
      },
      "path": {
        "clamp": true,
        "delay": {
          "value": 0
        },
        "enable": false,
        "options": {}
      },
      "outModes": {
        "default": "out",
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "random": false,
      "size": false,
      "speed": 2,
      "spin": {
        "acceleration": 0,
        "enable": false
      },
      "straight": false,
      "trail": {
        "enable": false,
        "length": 50,

      },
      "vibrate": false,
      "warp": false
    },
    "number": {
      "density": {
        "enable": true,


      },

      "value": 10
    },
    "opacity": {
      "value": {
        "min": 0.3,
        "max": 0.8
      },
      "animation": {
        "count": 0,
        "enable": true,
        "speed": 0.5,


        "sync": false,

        "startValue": "random",
        "destroy": "none"
      }
    },
    "reduceDuplicates": false,
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {


      "options": {},
      "type": "circle"
    },
    "size": {
      "value": {
        "min": 1,
        "max": 3
      },
      "animation": {
        "count": 0,
        "enable": true,
        "speed": 3,


        "sync": false,

        "startValue": "random",
        "destroy": "none"
      }
    },
    "stroke": {
      "width": 0
    },
    "zIndex": {
      "value": 0,
      "opacityRate": 1,
      "sizeRate": 1,
      "velocityRate": 1
    },
    "destroy": {

      "split": {
        "count": 1,
        "factor": {
          "value": 3
        },
        "rate": {
          "value": {
            "min": 4,
            "max": 9
          }
        },
        "sizeOffset": true,
        "particles": {}
      }
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "tilt": {
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,

        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": 1
    },
    "life": {
      "count": 0,
      "delay": {
        "value": 0.1,
        "sync": true
      },
      "duration": {
        "value": 0,
        "sync": false
      }
    },
    "rotate": {
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,

        "sync": false
      },
      "direction": "clockwise",
      "path": false
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,


        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "value": 45
      },
      "width": 1
    },
    "links": {
      "blink": false,
      "color": {
        "value": "random"
      },
      "consent": false,
      "distance": 100,
      "enable": true,
      "frequency": 1,
      "opacity": 1,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "repulse": {
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  "responsive": [],
  "smooth": false,
  "style": {},
  "themes": [],
  "zLayers": 100,
  "emitters": [],
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  }
}}
      />
      <Hero></Hero>
      <About></About>
      <Technologies></Technologies>
      <Showcase></Showcase>
      <Slider></Slider>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}