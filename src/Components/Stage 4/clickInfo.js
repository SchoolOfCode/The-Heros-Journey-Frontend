function handleClick(text) {
  switch (text) {
    case "1":
      console.log("useQuestionMark");
      break;
    case "2":
      console.log("useHelmet");
      break;
    case "3":
      console.log("usePlanet");
      break;
    case "4":
      console.log("useComet");
      break;
    case "5":
      console.log("useSuperhero");
      break;
    default:
  }
}

//info to map through and make each button
const clickInfo = [
  {
    key: "1",
    text: "1",
    handleClick: handleClick,
    style: {
      position: "fixed",
      top: "28.5vh",
      marginRight: "79vh",
      height: "9vh",
      width: "6vh",
      opacity: 0,
    },
  },
  {
    key: "2",
    text: "2",
    handleClick: handleClick,
    style: {
      position: "fixed",
      top: "39vh",
      marginRight: "61.5vh",
      height: "14vh",
      width: "11vh",
      borderRadius: "40%",
      transform: "rotate(-25deg)",
      opacity: 0,
    },
  },
  {
    key: "3",
    text: "3",
    handleClick: handleClick,
    style: {
      position: "fixed",
      bottom: "11.5vh",
      marginLeft: "26.5vh",
      height: "14vh",
      width: "26vh",
      borderRadius: "50%",
      transform: "rotate(-25deg)",
      opacity: 0,
    },
  },
  {
    key: "4",
    text: "4",
    handleClick: handleClick,
    style: {
      position: "fixed",
      top: "45vh",
      marginLeft: "25.5vh",
      height: "11vh",
      width: "11vh",
      transform: "skew(40deg)",
      opacity: 0,
    },
  },
  {
    key: "5",
    text: "5",
    handleClick: handleClick,
    style: {
      position: "fixed",
      top: "8vh",
      marginLeft: "40.5vh",
      height: "25vh",
      width: "40vh",
      transform: "skew(50deg)",
      borderRadius: "50% 50% 40% 50%",
      opacity: 0,
    },
  },
];

export default clickInfo;
