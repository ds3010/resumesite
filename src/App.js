// import classes from "./App.module.css";
import Menu from "./menu/Menu";
import { useState } from "react";
import MainScreen from "./mainScreen/MainScreen";

function App() {
  const [optionState, setOption] = useState(1);

  const options = [
    {
      title: "Summary",
      id: 1,
      items: [
        {
          description:
            "Bilingual Front-End Developer and Network Engineer (Spanish, English)",
        },
        {
          description:
            "Experience configuring and deploying websites using HTML, CSS, Javascript, React JS and TypeScript",
        },
        {
          description: "Experienced in Python scripting for task automation",
        },
        {
          description: "Cisco Certified: CCNA and CCNP Enterprise.",
        },
        {
          description:
            "Proficient in configuring, maintaining, troubleshooting, and upgrading different network topologies",
        },
        {
          description:
            "Proficient using third party Rest API’s and SDKs for integration",
        },
        {
          description:
            "Providing highly technical customer service while ensuring customer’s satisfaction",
        },
        {
          description: "Great technical problems solver",
        },
        {
          description:
            "Experience coding mobile applications in Android Studio and XCode",
        },
      ],
    },
    {
      title: "Education and Certifications",
      id: 2,
      items: [
        {
          description: "George Brown College",
          imageUrl: "images/gbc-logo.png",
          location: "Toronto,ON",
          duration: "Jan 2011 - Dec 2011",
          role: "Post-Graduate Diploma – Wireless Networking",
        },
        {
          description: "Jose Antonio Paez University",
          imageUrl: "images/Logo-UJAP.jpg",
          location: "San Diego, Venezuela",
          duration: "Sept 2004 - Dec 2008",
          role: "Bachelor of Engineering – Telecommunications",
        },
        {
          description: "Javascript Tutorial and Projects Course",
          imageUrl: "images/javascript.jpg",
          location: "Online - Udemy - John Smilga",
          duration: "2021",
          role: "Certificate #: UC-264eaf66-d4bd-416c-8ea6-f5011c0e0eba",
        },
        {
          description: "Javascript Bootcamp - Build Real World Applications",
          imageUrl: "images/javascript.jpg",
          location: "Online - Udemy - George Lomidze and Lasha Nozadze",
          duration: "2021",
          role: "Certificate #: UC-4382eeef-e925-4888-83e5-e2916a88270d",
        },
        {
          description:
            "React - The Complete Guide (incl Hooks, React Router, Redux)",
          imageUrl: "images/react.png",
          location: "Online - Udemy - Academind by Maximilian Schwarzmuller",
          duration: "2022",
          role: "Certificate #: UC-b536bacb-f580-4e82-ba98-99516db49d18",
        },
        {
          description:
            "Microsoft Certified - Technology Specialist - Windows Server 2008 - Active Directory",
          imageUrl: "images/microsoft.png",
          location: "Passed Certification Test",
          duration: "2012",
          role: "Certificate #: D950-9812",
        },
        {
          description:
            "The 10 Day iPhone App Bootcamp - New iOS 12 and XCode 10",
          imageUrl: "images/xcode.png",
          location: "Online - Udemy - Nick Walter Instructor",
          duration: "2021",
          role: "Certificate #: D950-9812",
        },
        {
          description: "Managing Big Data with MySQL",
          imageUrl: "images/sql.png",
          location: "Online - Coursera - Duke University",
          duration: "2016",
          role: "Verify Certificate at coursera.org/verify/U72ECES6EC58",
        },
      ],
    },
    {
      title: "Work Experience",
      id: 3,
      items: [
        {
          description: "Inpixon",
          location: "Toronto,ON",
          duration: "Sept 2020- Present",
          role: "Customer Success Engineer/Implementation",
          duties: [
            "Responsible for assisting new customers into implementing our solution (Rest APIs and SDKs)",
            "Provided new customers with code examples using our Web SDK (Javascript and React) and also our Android SDK (Java, Kotlin) and iOS SDK (Swift)",
            "Replicated issues SDK issues successfully before raising SDK bugs to our engineering department",
            "Answered technical questions to partners and customers regarding network and coding issues they may have",
            "Assisted the pre-sales department to vet new customers and ensure their use cases were feasible",
            "Created different python automation scripts to increase the speed in which we deployed configuration changes",
            "Led new members of the team so they could adapt faster into the work environment",
          ],
        },
        {
          description: "Adaptiv Networks",
          location: "Mississauga,ON",
          duration: "Jan 2017 - Sept 2020",
          role: "Solutions/Systems Engineer (SD-WAN)",
          duties: [
            "Responsible for planning and designing PoC and Pilot scenarios for new customers and partners ",
            "Met with customers and prospects to understand their requirements while explaining the benefits of SD-WAN",
            "Assisted in reviewing current network architectures for options to scale",
            "Provided demos on a weekly basis to prospects",
            "Created an SE Certification program to train partners into properly selling the solution",
            "To assist the Product Management team to understand current customer feature requests",
            "To act as a key technical escalation point for concerns related to technical aspects of the customers network ",
          ],
        },
        {
          description: "Hostopia (Deluxe)",
          location: "Mississauga,ON",
          duration: "Sept 2016 - Jan 2017",
          role: "Network Administrator",
          duties: [
            "Responsible for on-going maintenance of entire network infrastructure. Includes routers, switches, F5 appliances and other networking team assets such as Linux-based servers, vendor operating systems and security updates",
            "To assist in design and responsible for the successful installation, configuration and integration of new infrastructure, such as routers, switches, and legacy blade server environments",
            "Worked on after-hours maintenance windows, coordinated with other departments",
            "To provide troubleshooting expertise against any system and/or network operating issues and ensures, at the same time, that all security threats and/or network attacks are appropriately mitigated",
            "To work with external vendors and service providers to provide solutions for new projects or current issues",
          ],
        },
        {
          description: "Exinda Networks",
          location: "Waterloo,ON",
          duration: "May 2015 - Sept 2016",
          role: "Product Manager",
          duties: [
            "Manage all technical aspects of the product to ensure high performance and great customer satisfaction",
            "Led the efforts to define, analyze and implement technical and functional improvements",
            "Developed skills in the software development management area, focusing on an Agile (Scrum) approach",
          ],
        },
        {
          description: "Exinda Networks",
          location: "Waterloo,ON",
          duration: "Jan 2012 - May 2015",
          role: "Senior Network Optimization Engineer",
          duties: [
            "Worked onsite and remotely with customers to solve networking issues as a Senior Network Optimization Engineer, playing a key role in the sales department achieving a $1M US deal with an international government organization",
            "Provided exceptional customer service as a Network Optimization Engineer, ensuring the correct functionality of the product and customer’s satisfaction and solving highly technical issues directly with customers",
            "Troubleshot various scenarios and issues with the sales department to secure important deals for the organization",
            "Provided two-day trainings in English and Spanish monthly for new customers and employees",
            "Utilize extensive technical skills to install and configure several computer lab scenarios for case solving and training",
          ],
        },
        {
          description: "Huawei Technologies of Venezuela",
          location: "Caracas, Venezuela",
          duration: "Feb 2009 - Feb 2010",
          role: "Network Engineer",
          duties: [
            "Provided exceptional customer service while supporting Universal Mobile Telecommunications System (UMTS) network provided to cell phone companies",
            "Monitored UMTS network through advanced applications, and solved problems related to networking at customer offices to increase customer satisfaction",
            "Delivered managed services at the customer premises for the UMTS network management server",
            "Provided training for new Network Operation Center employees",
            "Guided clients and users on tough technical problems, demonstrating service scalability, application enhanced performance, 24x7 availability and exceptional support",
            "Responsible for hands-on server administration, installation and troubleshooting network related issues",
          ],
        },
      ],
    },
    {
      title: "Skills",
      id: 4,
      items: [
        { description: "HTML 5", imageUrl: "images/html.jpg" },
        { description: "CSS3", imageUrl: "images/css.jpg" },
        {
          description: "Vanilla Javascript",
          imageUrl: "images/javascript.png",
        },
        { description: "React", imageUrl: "images/react.png" },
        { description: "Python", imageUrl: "images/python.jpg" },
        { description: "CCNA Certified", imageUrl: "images/ccna.jpg" },
        { description: "CCNP Certified", imageUrl: "images/ccnp.jpg" },
        { description: "MySQL", imageUrl: "images/sql.png" },
      ],
    },
    { title: "Contact", id: 5 },
  ];
  //console.log(optionState);
  const showOption = (id) => {
    setOption(id);
  };

  const optionShown = options.filter((option) => option.id === optionState);
  //console.log(optionShown);

  // return (
  //   // <div className={classes.menuDiv}>
  //   <div>
  //     {/* <div> */}
  //     <Menu
  //       // className={classes.menu}
  //       options={options}
  //       optionSelected={showOption}
  //       optionDisplayed={optionState}
  //     ></Menu>
  //     {/* <MainScreen
  //       className={classes.mainScreen}
  //       option={optionShown}
  //     ></MainScreen> */}
  //   </div>
  // );
  return (
    <>
      <Menu
        options={options}
        optionSelected={showOption}
        optionDisplayed={optionState}
      ></Menu>
      <MainScreen option={optionShown}></MainScreen>
    </>
  );
}

export default App;
