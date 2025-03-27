let theme = get("theme");

let head = get("head");
let foot = get("foot");
let icon = document.getElementsByClassName("icon");
let border = [];
let btn = [];

let headH1 = head.getElementsByTagName("h1")[0];

border[0] = get("codes");
btn[0] = get("codesbtn");


let plsSelect = message.getElementsByTagName("p")[0];

let reviewerAns = reviewer.querySelectorAll("h3");

border[1] = get("question");
border[2] = get("answer");
btn[1] = get("ansbtn");

border[3]  = get("numQ");
btn[2] = get("save");

let quizName = get("Qname");
let sCores=get("score").getElementsByTagName("h1")[0];


//run one time




let colors = []

colors[1] = {
  header: "#F5F7F8",
  footer: "#F5F7F8",
  headerH1: "#151515",
  icon: "#151515",
  border: "2px solid gray",
  button: "#F6F5F5",
  buttonP: "#151515",
  pHeading: "#151515",
  rHeading: "black",
  sHeading: "#151515",
  nHeading: "#151515"
}


colors[2] = {
  header: "#709ED0",
  footer: "#709ED0",
  headerH1: "#DFE2E3",
  icon: "#C6CCDF",
  border: "2px solid #709ED0",
  button: "#DFD0B8",
  buttonP: "white",
  pHeading: "#DFD0B8",
  rHeading: "#AF8F6F",
  sHeading: "#A2C5C9",
  nHeading: "#DFD0B8"
}

colors[3] = {
  header: "#FF90BC",
  footer: "#FF90BC",
  headerH1: "white",
  icon: "#FFC0D9",
  border: "2px solid #FFC0D9",
  button: "#8ACDD7",
  buttonP: "white",
  pHeading: "#D6B0BA",
  rHeading: "#FF90BC",
  sHeading: "#A2C5C9",
  nHeading: "#FF90BC"
}

colors[4] = {
  header: "#A87676",
  footer: "#A87676",
  headerH1: "white",
  icon: "#E1ACAC",
  border: "2px solid #E1ACAC",
  button: "#DCA47C",
  buttonP: "white",
  pHeading: "#FFD0D0",
  rHeading: "#DCA47C",
  sHeading: "#A87676",
  nHeading: "#DCA47C"
}

colors[5] = {
  header: "#45496A",
  footer: "#45496A",
  headerH1: "white",
  icon: "#7D8BAE",
  border: "2px solid #7D8BAE",
  button: "#E5857B",
  buttonP: "white",
  pHeading: "#E5857B",
  rHeading: "#E5857B",
  sHeading: "#F1B2B2",
  nHeading: "#E5857B"
}

colors[6] = {
  header: "#253528",
  footer: "#253528",
  headerH1: "#C0CFB2",
  icon: "#8BA888",
  border: "2px solid #8BA888",
  button: "#49654E",
  buttonP: "white",
  pHeading: "#49654E",
  rHeading: "#49654E",
  sHeading: "#C0CFB2",
  nHeading: "#49654E"
}



function change()
{
  let choice = theme.selectedIndex;
  changeColor(choice);
}



function changeColor(choice)
{
  template = colors[choice];
  
  plsSelect.style.color = template.pHeading;
  head.style.backgroundColor = template.header;
  foot.style.backgroundColor = template.footer;
  quizName.style.color = template.nHeading;
  sCores.style.color = template.sHeading;
  headH1.style.color = template.headerH1;
  
  
  for(i = 0; i < 4; i++)
  {
    border[i].style.border = template.border;
  }
  
  for(i = 0; i < 3; i++)
  {
    btn[i].style.backgroundColor = template.button;
    btn[i].style.color = template.buttonP;
  }
  
  
  for(i = 0; i < 3; i++)
  {
    icon[i].style.backgroundColor = template.icon;
  }

 
 for(i = 0; i < 20; i++)
 {
   reviewerAns[i].style.color = template.rHeading;
 }
  
  
  
}

