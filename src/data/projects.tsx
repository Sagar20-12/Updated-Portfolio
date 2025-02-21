import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "blitzkrieg",
    category: "Coding platform",
    title: "Blitzkrieg",
    src: "/assets/projects-screenshots/blitzkrieg/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.reactQuery,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://blitzkrieg-beryl.vercel.app/",
    github: "https://github.com/Sagar20-12/Blitzkrieg",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Blitzkrieg = LeetCode + CodePen + CSS Battles
          </TypographyP>
          <TypographyP className="font-mono ">
            A feature-rich, browser-based Integrated Development Environment (IDE) designed to streamline the coding experience for developers. Built with modern web technologies, the IDE supports multiple programming languages, intelligent code completion, syntax highlighting, and live previews. It offers an intuitive interface with customizable themes, integrated version control, and debugging tools to boost productivity. The project demonstrates proficiency in building scalable and user-friendly front-end applications while ensuring seamless developer workflows.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problems </TypographyH3>
          <p className="font-mono mb-2">
            Solve coding problems similar in this IDE, enhance your
            problem-solving skills across various languages.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/blitzkrieg/css-battle.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8"> Languages </TypographyH3>

          <p className="font-mono mb-2">
            Challenge yourself to create code with Java/Python/Javascript, and get
            instant output for your test cases.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/blitzkrieg/css-battles.png`,
              `${BASE_PATH}/blitzkrieg/css-battle2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Different Project Folders </TypographyH3>
          <p className="font-mono mb-2">
            Organize your codes of different coding competitions. You can visit them anytime.
          </p>
          <SlideShow images={[`${BASE_PATH}/blitzkrieg/contests.png`]} />
          <TypographyH3 className="my-4 mt-8">Themes</TypographyH3>

          <p className="font-mono mb-2">
            Choose your favorite themes when coding, just click the drop down menu above!
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/blitzkrieg/users.png`,
              `${BASE_PATH}/blitzkrieg/user.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "dandelions",
    category: "Customize Folders",
    title: "Dandelions",
    src: "/assets/projects-screenshots/dandelions/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://dandelionsicons.vercel.app/",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.vue,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
          A web application that allows users to download and personalize their folder icons with a variety of custom designs. This platform offers a simple and intuitive interface where users can browse through a collection of pre-designed icons or upload their own designs. The app supports customization options, including color schemes, styles, and icon shapes, making it easy to organize and personalize digital files. It showcases a seamless user experience, powered by modern web technologies, and offers fast, high-quality downloads of customized folder icons.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            As soon as you land, boom! You&apos;re greeted with the freshest icons and top-tier quality that&apos;ll make your eyes happy.
          </p>
          <SlideShow images={[`${BASE_PATH}/dandelions/landing.png`]} />
          <TypographyH3 className="my-4 ">Icons</TypographyH3>
          <p className="font-mono mb-2">
            Dive into a comprehensive list of different icons, each packed with exclusive
            high quality pixels. It&apos;s like having a VIP pass to every luxury items in
            in town.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/dandelions/stores.png`,
              `${BASE_PATH}/dandelions/store.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-5">
            Plus, I&apos;ve sprinkled in some extra magic how to use document
            recommendations, user-friendly search features, and a sleek,
            responsive design that works like a charm on any device.
          </p>
          <p className="font-mono mb-2">
            Dandelions isn&apos;t just a website; it&apos;s your personal icon-hunting
            assistant, ensuring you never miss out on a productivity!
          </p>
          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
    id: "cf",
    category: "Platform Ranking",
    title: "CodeForces Statistics",
    src: "/assets/projects-screenshots/cf/landing.png",
    screenshots: ["1.png"],
    live: "https://code-forces-visualiser-7s4l.vercel.app/individual",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.sanity],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          Community driven, highly customizable, no-code tool to stress test Codeforces user profiles.
          Capable of generating the comparison between user profiles and their ratings , with 100% accuracy. 
          Techstack consisted of HTML, Tailwind CSS, JavaScript, React.js, MongoDB.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            A sleek, modern interface greets you, featuring the latest ranking
            tips, and must-visit ranking around the coding website.
          </p>
          <SlideShow images={[`${BASE_PATH}/cf/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">User Ratings</TypographyH3>
          <p className="font-mono mb-2">
            Dive into the ratings of users around the globe and compare the list of contest participated. Whether
            you&apos;re looking for hidden contests or ratings, our web application has
            you covered.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/cf/blog.png`,
              `${BASE_PATH}/cf/blogs.png`,
              `${BASE_PATH}/cf/blogss.png`,
            ]}
          />
          <p className="font-mono mb-2 my-8">
            With a stunning 100% score on ratings, The CodeForces Statistics isn&apos;t
            just beautiful—it&apos;s built to perform. Whether you&apos;re planning your
            next contest or just daydreaming, our site delivers a top-notch
            experience that&apos;s both informative and enjoyable.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "https://github.com/Sagar20-12/Updated-Portfolio",
    github: "https://github.com/Sagar20-12/Updated-Portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    id: "pathvisual",
    category: "Shortest Path Game",
    title: "Path Visualizer",
    src: "/assets/projects-screenshots/pathvisual/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://sagar20-12.github.io/Path-Visualizer/",
    github: "https://github.com/Sagar20-12/Path-Visualizer",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
      backend: [PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          Developed a high-performing coding website, enabling users to find the path from source to destination using different searching algorithms. 
          Leveraged A* Algorithm and Dijsktra Algorithm for finding the optimal path. 
          Frontend is built in ReactJS and Material UI, Backend in Node.js, Express.js and DataBase is MongoDB.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/pathvisual/landing.png`,
              `${BASE_PATH}/pathvisual/2.png`,
              `${BASE_PATH}/pathvisual/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "gitfit",
    category: "Code Wallet",
    title: "Git-Fit",
    src: "/assets/projects-screenshots/gitfit/1.jpg",
    screenshots: ["1.png"],
    live: "https://github.com/Sagar20-12/Git-Fit",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          A lightweight, no-fuss alternative to GitHub for storing your code as notes. Perfect for quick snippets, personal projects, and hassle-free versioning without the complexity of full-scale repositories. Keep your code organized, accessible, and fit for your workflow! 🚀
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/gitfit/1.jpg`, `${BASE_PATH}/gitfit/2.jpg`, `${BASE_PATH}/gitfit/3.jpg`,]} />
          <TypographyH3 className="my-4 mt-8">
            Effortless Results Retrieval
          </TypographyH3>
          {/* Effortless Results Retrieval: */}
          <ul className="list-disc ml-6">
            <li className="font-mono">
              store all your code using a single click, eliminating
              the tedious task of sifting through thousands of code on the
              local IDE/GitHub.
            </li>
          </ul>
          {/* <TypographyH3 className="my-4 mt-8">Class-Wise Results:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              class-wise results effortlessly by entering a roll number range.
              No more manual searches or filtering.
            </li>
          </ul> */}
          {/* <TypographyH3 className="my-4 mt-8">Faculty Features:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Faculty members could download batch results in Excel format,
              making administrative tasks a breeze.
            </li>
          </ul> */}
          {/* <TypographyH3 className="my-4 mt-8">
            Enhanced Data Insights:
          </TypographyH3> */}
          {/* <ul className="list-disc ml-6">
            <li className="font-mono">
              Each result came with additional features including:
              <ul className="list-disc font-mono ml-6">
                <li>
                  <strong>CGPA Calculations: </strong>Easily track your
                  cumulative grade point average.
                </li>
                <li>
                  <strong>Charts:</strong> Visualize your academic performance
                  with comprehensive charts.
                </li>
                <li>
                  <strong>Future Projections:</strong> Get insights into
                  potential future outcomes based on current performance.
                </li>
                <li>
                  <strong> Backlog Counts: </strong>Keep track of your backlog
                  subjects at a glance.
                </li>
              </ul>
            </li>
          </ul> */}
          {/* <TypographyH3 className="my-4 mt-8">Performance:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              The application was significantly faster and more efficient than
              the official site, providing a smoother user experience.
            </li>
          </ul> */}
          {/* <TypographyH3 className="my-4 mt-8">Downfall:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Unfortunately, as of May 2022, the tool stopped working due to the
              introduction of CAPTCHA on the official JNTUA results site, which
              disrupted the seamless functionality of the app. JNTUA Results
              Analyzer transformed the way students and faculty interacted with
              academic results, making it a must-have tool until its unexpected
              shutdown.
            </li>
          </ul> */}
        </div>
      );
    },
  },
];
export default projects;
