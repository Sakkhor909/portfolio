// need to add online certificates
export const ButtonsData = [
  {
    id: 1,
    command: "",
    Text: "Introduction",
    Icon: "user",
    MonitorData: `Hello, my name is Minhajur Rahman <br/>
     &nbsp; &nbsp; I am a full stack developer
    `
  },
  {
    id: 3,
    command: "Education",
    Text: "Education",
    Icon: "user-graduate",
    MonitorData: `I have studied Bachelor of Business Administration (BBA) with a major in Management Information system (MIS) graduated from <a href="https://daffodilvarsity.edu.bd/" target="_blank"> Daffodil Internation University  </a>`,
    typingSpeed: 40
  },
  {
    id: 4,
    command: "Skill",
    Text: "Skill",
    Icon: "tools",
    MonitorData: `<ul>
    <li> HTML, CSS, SASS</li>
    <li> JavaScript, React JS, Next JS, Ember JS </li>
    <li> Node JS, Express JS </li>
    </ul>`,
    typingSpeed: 70,
    display: "inline-block"
  },
  {
    id: 5,
    command: "Projects",
    Text: "Projects",
    Icon: "diagram-project",
    MonitorData: `<ul>
      <li> Raw Javascript : 
      <a href="https://sakkhor909.github.io/raw-javascript-projects/webcolorgame/" target="_blank"> Web Color Game </a>
      </li>
      <li> Directory Listing Website : <a href="https://khuji.vercel.app/" target="_blank"> Khuji </a> </li>
      <li> Multi-Author Blogging Platform : <a href="https://blogism.vercel.app/" target="_blank"> Blogism </a> </li>
      <li> Digital Marketing agency Website : <a href="https://webmarketizer.netlify.app/" target="_blank"> Web Marketizer </a> </li>
      </ul>`,
    typingSpeed: 70,
    display: "inline-block"
  },
  {
    id: 6,
    command: "Your Name",
    Text: "Contact",
    Icon: "envelope",
    MonitorData: "",
    typingSpeed: 70,
    display: "inline-block",
    page: "contact"
  }
];

// Need to add project from here
export const Projects = [
  {
    title: "Raw Javascript :",
    name: "Web Color Game",
    link: "https://sakkhor909.github.io/javascript-projects/webcolorgame/"
  },
  {
    title: "Live Project :",
    name: "Khuji",
    link: "https://khuji.net/"
  }
];
