let get = (id) =>  document.getElementById(id);

let icon1 = get("icon1");
let icon2 = get("icon2");
let icon3 = get("icon3");

let search = get("search");
let qna = get("qna");
let reviewer = get("reviewer");
let message = get("message");

let searchBox = get("searchbox");
let codes = get("codes");
let codesBtn = get("codesbtn");

let first = get("s");
let second = get("d");
let numQ = get("numQ");
let save = get("save");
let question = get("question");
let answer = get("answer");
let ansbtn = get("ansbtn")
let qname = get("Qname");



icon1.addEventListener("click",()=>{
  changeContent(icon1,search,"Search");
})

icon2.addEventListener("click",()=>{
  changeContent(icon2,qna,"Q & A");
})

icon3.addEventListener("click", () => {
  changeContent(icon3, reviewer, "Reviewer");
})

let proceed = false;

function changeContent(icon, content, head)
{
    let heading = get("heading");
    search.style.display = "none";
    qna.style.display = "none";
    reviewer.style.display = "none";
    
    
    if(proceed)
    {
      content.style.display = "block";
      message.style.display = "none";
    }
    else if(proceed == false && content == search)
    {
      content.style.display = "block";
      message.style.display = "none";
    }
    else message.style.display = "block";
    
   
    heading.innerHTML = head;
}





//index variable
let index;
let Qnum;
let points = 1;
let limit;

//changes mumber of question

save.addEventListener("click",()=>{
  if(numQ.value <= Qnum)
  {
    d.innerHTML = numQ.value;
    Qnum = numQ.value;
    Calert("limit change","check.png","#A1DD70")
  }
  else 
  {
    Calert("invalid number", "error.png","#EE4E4E")
  }
  
  numQ.value = null;
})


function sleep()
{
  setTimeout(()=>{
  changeContent(icon3, reviewer, "Reviewer");
  },1000);
}


function setNum()
{
  let checkNum = Object.values(Quiz[index]);
  let plus = 0;
  for(i in checkNum)
  {
    if(i%2 == 0) plus++;
    if(checkNum[i] == "")
    {
      Qnum = i - plus;
      limit = Qnum;
      break;
    }
    else Qnum = 20;
  }
  console.log(Qnum)
}



//code checker
codesBtn.addEventListener("click",()=>{
  let code = codes.value;
  let isfalse = true;
  for(i in Quiz)
  {
    if(code == Quiz[i].code)
    {
      points = 1;
      index = i;
      proceed = true;
      setNum();
      randQuestion();
      reviewGenerator();
      qname.innerHTML = Quiz[index].name;
      s.innerHTML = points;
      d.innerHTML = Qnum;
      isfalse = false;
      Calert(Quiz[index].name,"check.png","#A1DD70");
      sleep();
    }
  }
  if(isfalse){
    Calert("invalid code","error.png","#EE4E4E");
  }
  codes.value = null;
})




let checker = [];

function Check(num)
{
  for(i of checker)
  {
    if(num == i) return true
  }
  return false;
}

let ques;
let ans;
let c = -1;

function randQuestion()
{
   if(c == Qnum-1)
  {
    c = -1;
    for(i in checker)
    {
      checker[i] = 0;
    }
  }
  
  let rand;
  do{
    rand = Math.floor(Math.random()*Qnum + 1);
  }while(Check(rand));
  c++;
  checker[c] = rand;

  switch(rand)
  {
    case 1:
      ans = Quiz[index].A1;
      ques = Quiz[index].Q1;
    break;
    
    case 2:
      ans = Quiz[index].A2;
      ques = Quiz[index].Q2;
    break;
    
    case 3:
      ans = Quiz[index].A3;
      ques = Quiz[index].Q3;
    break;
    
    case 4:
      ans = Quiz[index].A4;
      ques = Quiz[index].Q4;
    break;
    
    case 5:
      ans = Quiz[index].A5;
      ques = Quiz[index].Q5;
    break;
    
    case 6:
      ans = Quiz[index].A6;
      ques = Quiz[index].Q6;
    break;
    
    case 7:
      ans = Quiz[index].A7;
      ques = Quiz[index].Q7;
    break;
    
    case 8:
      ans = Quiz[index].A8;
      ques = Quiz[index].Q8;
    break;
    
    case 9:
      ans = Quiz[index].A9;
      ques = Quiz[index].Q9;
    break;
    
    case 10:
      ans = Quiz[index].A10;
      ques = Quiz[index].Q10;
    break;
 
    case 11:
      ans = Quiz[index].A11;
      ques = Quiz[index].Q11;
    break;
    
    case 12:
      ans = Quiz[index].A12;
      ques = Quiz[index].Q12;
    break;
    
    case 13:
      ans = Quiz[index].A13;
      ques = Quiz[index].Q13;
    break;
    
    case 14:
      ans = Quiz[index].A14;
      ques = Quiz[index].Q14;
    break;
    
    case 15:
      ans = Quiz[index].A15;
      ques = Quiz[index].Q15;
    break;
    
    case 16:
      ans = Quiz[index].A16;
      ques = Quiz[index].Q16;
    break;
    
    case 17:
      ans = Quiz[index].A17;
      ques = Quiz[index].Q17;
    break;
    
    case 18:
      ans = Quiz[index].A18;
      ques = Quiz[index].Q18;
    break;
    
    case 19:
      ans = Quiz[index].A19;
      ques = Quiz[index].Q19;
    break;
    
    case 20:
      ans = Quiz[index].A20;
      ques = Quiz[index].Q20;
    break;
 
    
  }
 
  let printQ = question.getElementsByTagName('p')[0];
  let change = "left";
  setTimeout(()=>{
      if(ques.length < 20) change = "center";
      printQ.style.textAlign = change;
      printQ.innerHTML = ques;
      
  },2500)

}

function score()
{
  setTimeout(()=>{
     points++;
     if (points > Qnum)
     {
       points = 1;
     }
     s.innerHTML = points;
  },2500)
}



ansbtn.addEventListener("click",()=>{
  
 let user_answer = changeA(answer.value);
 let true_answer = changeA(ans);
 
 if(user_answer == true_answer)
 {
   randQuestion();
   score();
   if(points == Qnum)
   {
     Calert("Well Done!!","trophy.png","#F4CE14");
   }
   else 
   {
      Calert("Correct","check.png","#A1DD70");
   }
 }
 else
 {
   Calert("Wrong","error.png","#EE4E4E");
   
 }
 answer.value = null;
})


function changeA(text)
{
 let a = text.toUpperCase()
 return a.replace(/\s+/g,'')
}



function reviewGenerator()
{
  let h3 = reviewer.getElementsByTagName("h3");
  let p = reviewer.getElementsByTagName("p");
  let key = Object.values(Quiz[index]);
 
  for(i = 0; i < h3.length; i++)
  {
    h3[i].innerHTML = "";
    p[i].innerHTML = "";
  }
 
 
  let a = 0;
 
  for(i = 0; i < Qnum; i++)
  {
    for(j = 2; j < 4; j++)
    {
      if(j == 2) h3[i].innerHTML = key[j+a];
      else p[i].innerHTML = key[j+a];
    }
    a+=2;
  }

  
}




let sortedQuiz = sorting(Quiz);



//search box code generator
for(i in sortedQuiz)
{
  let newElem = document.createElement("div");
  let name = sortedQuiz[i].name;
  let code = sortedQuiz[i].code;
  newElem.innerHTML = name + " - " + code;
  
  searchBox.appendChild(newElem);
}



let alertRemove = get("alert");

function Calert(b,icon,color)
{
  let sign = get('img');
  let text = get('b');
  
  text.innerHTML = b;
  sign.src = icon;
  alertRemove.style.backgroundColor = color;

  alertRemove.style.display = "grid";
 
}



alertRemove.addEventListener("animationend",()=>{

  
  alertRemove.style.display = "none";
})




function sorting(quiz)
{
  let names = [];
  
  for(i of  Quiz)
  {
    names.push(i.name);
  }
  
  
  let sortedName = names.sort();
  
  let sortedObject = [];
  
  for(i = 0; i < quiz.length; i++)
  {
    for(j = 0; j < quiz.length; j++)
    {
      if(sortedName[i] == quiz[j].name)
      {
        sortedObject.push(quiz[j]);
      }
    }
  }
  
  return sortedObject
  
}


