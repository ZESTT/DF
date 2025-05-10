import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: " Portfolio Site",
    description: "A beautiful Portfolio page app using Bootstrap.",
    image: "/projects/profile.jpg",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://jqueryy.netlify.app/",
    githubUrl: "https://jqueryy.netlify.app/",
  },
  {
    id: 2,
    title: "Gemini Clone",
    description: "use this interface to request assistance with specific queries or topics. For example, asking for ideas, summaries, brainstorming, or technical explanations",
    image: "/projects/hh.jpg",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "https://it-gate-chatbot.netlify.app/",
    githubUrl: "https://it-gate-chatbot.netlify.app/",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/ecoo.jpeg",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://courseeeee.vercel.app/login",
    githubUrl: "https://courseeeee.vercel.app/login",
  },
  {
    id: 3,
    title: "Movies Site ",
    description:
      "video subscription service. The homepage features a prominent title 'REBUNEKA THE DOLL' with a video thumbnail of a zombie-like figure. Below this, there are multiple video thumbnails.",
    image: "/projects/m.jpg",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://flourishing-scone-603fc0.netlify.app/",
    githubUrl: "https://flourishing-scone-603fc0.netlify.app/",
  },

  {
    id: 3,
    title: "Bakry Site",
    description:
      "Full-Bakery  platform with user authentication and payment processing.",
    image: "/projects/bakery.jpg",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "Weather App",
    description:
      "It displays current weather information such as the temperature (25.47 degrees), sky condition (clear), cloud cover (0%), humidity (38%), and pressure (1019hPa). The design of the interface is clean and minimalistic.",
    image: "/projects/wether.jpg",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "http://magenta-melba-11c230.netlify.app/",
    githubUrl: "http://magenta-melba-11c230.netlify.app/",
  },

  {
    id: 3,
    title: " Summary Order Of E-commerce",
    description:
      "user interface for a subscription plan summary and payment details. On the left side, there is an 'Order Summary' section showing a 'Professional Plan' priced at $49 per month,",
    image: "/projects/su.jpg",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://deluxe-puppy-f429a1.netlify.app/",
    githubUrl: "https://deluxe-puppy-f429a1.netlify.app/",
  },

  {
    id: 3,
    title: "Portfolio Platform",
    description:
      "developer's profile page showcasing their skills, projects, and social media links. To create a similar profile page, you can follow these steps:.",
    image: "/projects/4.jpg",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://portfolio-hgf-00886.netlify.app/",
    githubUrl: "https://portfolio-hgf-00886.netlify.app/",
  },

  {
    id: 3,
    title: "Product Management System",
    description:
      "This system is designed for managing a product inventory. The interface includes the following key elements:• Form Inputs: Fields for entering product details: • Product Name: Name of the product.• Product Price: Price of the produ",
    image: "/projects/pro.jpg",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://harmonious-torte-beb11b.netlify.app/",
    githubUrl: "https://harmonious-torte-beb11b.netlify.app/",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          All <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of projects You Will Do It. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
               
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_self"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_self"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
