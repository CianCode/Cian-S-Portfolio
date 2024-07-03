import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      desc: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      desc: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      desc: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      desc: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a Fullstack Web App with Next.js and TailwindCSS.",
      desc: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      desc: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Work in progress ...",
      des: "I'm currently working on a Fullstack Web App with Next.js and TailwindCSS.",
      img: "/p1.svg",
      iconLists: ["/next.svg","/re.svg", "/tail.svg", "/ts.svg", "/supabase.svg"],
      link: "Soon !",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Cian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Cian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Cian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Cian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Cian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Cian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Cian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Cian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Cian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Cian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Cian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Cian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Cian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Cian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Cian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Freelance Web App Dev Project",
      desc: "Led the dev of a web app for a client, from initial concept to deployment.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 2,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      name: "github",
      img: "/git.svg",
      link: "https://github.com/CianCode"
    },
    {
      id: 2,
      name: "twitter",
      img: "/twit.svg",
      link: "https://x.com/CianCode",
    },
    {
      id: 3,
      name: "linkedin",
      img: "/link.svg",
      link: "https://www.linkedin.com/in/cian-jones-99698630b/",
    },
  ];