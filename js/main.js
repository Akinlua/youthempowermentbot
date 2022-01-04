

 
 
function getTime(){
  
  let today=new Date();
  hours=today.getHours();
  minutes=today.getMinutes();
  
  if (hours<10){
    
    hours='0'+hours;
    
    
  }
  
  if (minutes<10) {
    
    minutes='0'+minutes;
    
  }
  
  let time= hours+':'+minutes;
  return time;
  
}





function botFirstMessage(){

  let bot_msg="hi there!!!🌄🌞/🌃. Pls check this link to know about me :) <a href='https://ye-about.webflow.io/' >Go here</a> "
 document.getElementById('botFirstMessage').innerHTML= bot_msg;
document.getElementById('optone').innerHTML='hey';
  document.getElementById('opttoo').innerHTML='hi';
  
  let time=getTime();
 $('#timeSection').append(time);
  
}

botFirstMessage();


function getHardResponse(userText){
 
  
 
  
 
  
  document.getElementById('chat-bar-bottom').scrollIntoView(true); 
}



function getResponse() {

let userText=$('#text').val();
let bothtml= ''
let botOtherMessages= document.createElement('div');
 botOtherMessages.setAttribute('class','bottext');
 
   
  if (userText=='') {
  
    
    userText='I love to code';
  bothtml="That's nice"
  
  }
  
  else if(userText=='I love to code'){
   bothtml="That's nice"
    
  }
 
// articles//
else if(userText=='article'||userText== 'Article'){
  
  let artOne="Check out this article. <a href='https://www.hindawi.com/journals/edri/2021/5611033/' >Assessing the Effectiveness of Innovative Pedagogy and Lecture Method on Students Academic Achievement and Retention in Computer Programming </a> ";
 let artTwo="Check out this article. <a href='https://www.hindawi.com/journals/edri/2021/8160084/' >Techno-Pedagogical Skills for 21st Century Digital Classrooms: An Extensive Literature Review</a> ";
let artThree="Check out this article.<a href='https://youthstrends.webflow.io/' >Video Games A modern Drug</a> "; 

  article=[artOne,artTwo,artThree];
let randomArticle=Math.random()*3
let finArt= Math.floor(randomArticle);
let art=article[finArt];

  setTimeout( function (){
 botOtherMessages.remove();
 let  bot= '<p class="bottext"><span>'+art+'</span></p>';
 $('#chatbox').append(bot);
       },1000);
 
 
 
  }
  
// advice//
else if(userText=='advice'||userText== 'Advice'){
  
  let advOne="A lazy person will only end up being more lazy. So don't be lazy";
let advTwo="Remember God loves you always";
let advThree="Advice is like snow - the softer it falls, the longer it dwells upon, and the deeper it sinks into the mind. Samuel Taylor Coleridge. ";
let advFour="When we honestly ask ourselves which person in our lives means the most to us, we often find that it is those who, instead of giving advice, solutions, or cures, have chosen rather to share our pain and touch our wounds with a warm and tender hand. Henri Nouwen. ";
let advFive=" When we honestly ask ourselves which person in our lives means the most to us, we often find that it is those who, instead of giving advice, solutions, or cures, have chosen rather to share our pain and touch our wounds with a warm and tender hand. Henri Nouwen.";
let advSix=" My only advice is, follow your dream and do whatever you like to do the most. I chose journalism because I wanted to be in the places where history was being made. Jorge Ramos.";

  advice=[advOne,advTwo,advThree,advFour,advFive,advSix];
let randomAdvice=Math.random()*6
let finAdv= Math.floor(randomAdvice);
let adv=advice[finAdv];

   bothtml=adv;
    
  }

//Quotes //

else if(userText=='quotes'||userText== 'Quotes'||userText=='quote'||userText== 'Quote'){
  
  let quoOne="A lazy person will only end up being more lazy. So don't be lazy";
let quoTwo="Remember God loves you always";
let quoThree="That which does not kill us makes us stronger. Friedrich Nietzsche";
let quoFour="When you look into an abyss, the abyss also looks into you. Friedrich Nietzsche ";
let quoFive="No matter what you're going through, there's a light at the end of the tunnel and it may seem hard to get to it but you can do it and just keep working towards it and you'll find the positive side of things. Demi Lovato ";
let quoSix="A man travels the world over in search of what he needs and returns home to find it. George A. Moore ";
let quoSev="The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion. Albert Camus ";
let quoEig="Nothing is more despicable than respect based on fear. Albert Camus ";
let quoNin=" Those who lack the courage will always find a philosophy to justify it. Albert Camus";
let quoTe="Once you bring life into the world, you must protect it. We must protect it by changing the world.Elie Wiesel ";

  quote=[quoOne,quoTwo,quoThree,quoFour,quoFive,quoSix,quoSev,quoEig, quoNin,quoTe];
let randomQuote=Math.random()*10
let finQuo= Math.floor(randomQuote);
let quo=quote[finQuo];

   bothtml=quo;
    
  }
 
//goodwill//

else if(userText=='goodwill'||userText== 'Goodwill'){
  
  let goodOne='“At this very moment enormous numbers of intelligent men and women of goodwill are trying to build a better world. But problems are born faster than they can be solved.”― B.F. Skinner, Walden Two';
let goodTwo=' “The difference between darkness and brightness is how you thrive on those moments and how you use such circumstances with goodwill in your spirit.”― Angelica Hopes';
let goodThree='“The non-violent resistor not only avoids external, physical violence, but he avoids internal violence of spirit. He not only refuses to shoot his opponent, but he refuses to hate him. And he stands with understanding, goodwill at all times.”― Martin Luther King Jr. ';
let goodFour=' “Let us reach out to the people and show them an abundance of goodwill. We must, however, learn to identify manipulations as well and uncover maneuvers in the dark if we do not want to be tricked by lying eyes. ("With confidence")”― Erik Pevernagie';



  goodwill=[goodOne,goodTwo,goodThree,goodFour];
let randomGoodwill=Math.random()*4
let finGoo= Math.floor(randomGoodwill);
let good=goodwill[finGoo];

   bothtml=good;
    
  }

// hobbies //
    //dancing//
 else if (userText=='dance' || userText== 'Dance'  || userText=='dancing' || userText== 'Dancing'){

setTimeout( function (){


   botOtherMessages.remove();
    let   botHTML= '<p class="bottext">'+ 'Have you thought of going for a dancing competition or doing something with your dancing or furnishing your dancing skill.'+'</p><br>';
    $('#chatbox').append(botHTML);
 
    
 
    
   let yeshtml='yes'
   let nohtml= 'no'
   
   let yes= document.createElement('div');
 yes.setAttribute('class','opttext');

$(yes).append(yeshtml);
 $('#chatbox'). append(yes);
  
  let no= document.createElement('div');
 no.setAttribute('class','opttext');
 $(no).append(nohtml);
  $('#chatbox'). append(no);
  
  let yesans='<p class="usertext"><span>'+yeshtml+'</span></p>';
let noans='<p class="usertext"><span>'+nohtml+'</span></p>';

  $(yes).click(
 function (){
   
   $('#chatbox').append(yesans);
   $(yes).hide();
   $(no).hide();
   setTimeout( function (){


   bothtml="That's nice, here is a link to know about dance better.  <a href='https://youth-and-teens-empowerment.webflow.io/skills/#dance' >Go here</a>";
let  bot= '<p class="bottext"><span>'+ bothtml+ '</span></p>';
 $('#chatbox').append(bot);
 
botHTML="Also what skill do you like or will like to have in one word." ;
let  bott= '<p class="bottext"><span>'+botHTML+'</span></p>';
 $('#chatbox').append(bott);
   },1000);
 
 });
 
 $(no).click(
 function (){
   
   $('#chatbox').append(noans);
   $(yes).hide();
   $(no).hide();
   
   
    setTimeout( function (){
   let botHTML='';
   bothtml="Ok. You can check out this link to know more about dancing and how you can use it. <a href='https://youth-and-teens-empowerment.webflow.io/skills/#dance' >Go here</a> ";
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>';
 $('#chatbox').append(bot);

botHTML="Also what skill do you like or will like to have in one word." ;
let  bott= '<p class="bottext"><span>'+botHTML+'</span></p>';
 $('#chatbox').append(bott);
 
   
    },1000);
    
    
 });

 
   
},1000); 
  
}
 

  //singing//
else if (userText=='singing' || userText== 'Singing' ){

setTimeout( function (){

   botOtherMessages.remove();
    let   botHTML= '<p class="bottext">'+'Have you thought of going for a singing competition or doing something with your singing.'+'</p><br>';
    $('#chatbox').append(botHTML);
 
    
 
    
   let yeshtml='yes'
   let nohtml= 'no'
   
   let yes= document.createElement('div');
 yes.setAttribute('class','opttext');

$(yes).append(yeshtml);
 $('#chatbox'). append(yes);
  
  let no= document.createElement('div');
 no.setAttribute('class','opttext');
 $(no).append(nohtml);
  $('#chatbox'). append(no);
  
  let yesans='<p class="usertext"><span>'+yeshtml+'</span></p>';
let noans='<p class="usertext"><span>'+nohtml+'</span></p>';

  $(yes).click(
 function (){
   
   $('#chatbox').append(yesans);
   $(yes).hide();
   $(no).hide();
   setTimeout( function (){
   
   bothtml="That's nice, here is a link to know about singing better. <a href='https://youth-and-teens-empowerment.webflow.io/skills/#singing' >Go here</a>" ;
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>';
 $('#chatbox').append(bot);
 
botHTML="Also what skill do you like or will like to have in one word." ;
let  bott= '<p class="bottext"><span>'+botHTML+'</span></p>';
 $('#chatbox').append(bott);	
   },1000);
 
 });
 
 $(no).click(
 function (){
   
   $('#chatbox').append(noans);
   $(yes).hide();
   $(no).hide();
   
   
    setTimeout( function (){
   let botHTML='';
   bothtml="Ok. You can check out this link to know how you can use your singing talents<a href='https://youth-and-teens-empowerment.webflow.io/skills/#dance' >Go here</a> " ;
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>';
 $('#chatbox').append(bot);

botHTML="Also what skill do you like or will like to have in one word." ;
let  bott= '<p class="bottext"><span>'+botHTML+'</span></p>';
 $('#chatbox').append(bott);
 
   
    },1000);
    
    
 });

 
   
},1000);
   
}
 
  //drummin//
 else if (userText=='drumming' || userText== 'Drumming' ){

setTimeout( function (){


   botOtherMessages.remove();
    let   botHTML= '<p class="bottext">'+ 'Have you thought of going for a drumming competition or doing something with your drumming or furnishing your drumming skill.'+'</p><br>';
    $('#chatbox').append(botHTML);
 
    
 
    
   let yeshtml='yes'
   let nohtml= 'no'
   
   let yes= document.createElement('div');
 yes.setAttribute('class','opttext');

$(yes).append(yeshtml);
 $('#chatbox'). append(yes);
  
  let no= document.createElement('div');
 no.setAttribute('class','opttext');
 $(no).append(nohtml);
  $('#chatbox'). append(no);
  
  let yesans='<p class="usertext"><span>'+yeshtml+'</span></p>';
let noans='<p class="usertext"><span>'+nohtml+'</span></p>';

  $(yes).click(
 function (){
   
   $('#chatbox').append(yesans);
   $(yes).hide();
   $(no).hide();
   setTimeout( function (){


   bothtml="That's nice, here is a link to know about drumming better.  <a href='https://youth-and-teens-empowerment.webflow.io/skills/#drumming' >Go here</a>";
let  bot= '<p class="bottext"><span>'+ bothtml+ '</span></p>';
 $('#chatbox').append(bot);
 
botHTML="Also what skill do you like or will like to have in one word." ;
let  bott= '<p class="bottext"><span>'+botHTML+'</span></p>';
 $('#chatbox').append(bott);
   },1000);
 
 });
 
 $(no).click(
 function (){
   
   $('#chatbox').append(noans);
   $(yes).hide();
   $(no).hide();
   
   
    setTimeout( function (){
   let botHTML='';
   bothtml="Ok. You can check out this link to know more about drumming and how you can use it. <a href='https://youth-and-teens-empowerment.webflow.io/skills/#drumming' >Go here</a> ";
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>';
 $('#chatbox').append(bot);

botHTML="Also what skill do you like or will like to have in one word." ;
let  bott= '<p class="bottext"><span>'+botHTML+'</span></p>';
 $('#chatbox').append(bott);
 
   
    },1000);
    
    
 });

 
   
},1000); 
  
}
 
// skills//
  //programm//
 else if (userText=='programming' || userText== 'Programming'|| userText=='coding' || userText== 'Coding'){

setTimeout( function (){

   botOtherMessages.remove();
    let   botHTML= '<p class="bottext">'+'Have you thought of using your programming skills in one area or the other'+'</p><br>';
    $('#chatbox').append(botHTML);
 
    
 
    
   let yeshtml='yes'
   let nohtml= 'no'
   
   let yes= document.createElement('div');
 yes.setAttribute('class','opttext');

$(yes).append(yeshtml);
 $('#chatbox'). append(yes);
  
  let no= document.createElement('div');
 no.setAttribute('class','opttext');
 $(no).append(nohtml);
  $('#chatbox'). append(no);
  
  let yesans='<p class="usertext"><span>'+yeshtml+'</span></p>';
let noans='<p class="usertext"><span>'+nohtml+'</span></p>';

  $(yes).click(
 function (){
   
   $('#chatbox').append(yesans);
   $(yes).hide();
   $(no).hide();
   setTimeout( function (){
   
   bothtml="That's nice, here is a link to know about programming better.<a href='https://youth-and-teens-empowerment.webflow.io/#coding' >Go here</a>";
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>';
 $('#chatbox').append(bot);
 
   },1000);
 
 });
 
 $(no).click(
 function (){
   
   $('#chatbox').append(noans);
   $(yes).hide();
   $(no).hide();
   
   
    setTimeout( function (){

   bothtml="Ok. You can check out this link to know how you can use your programming skills.<a href='https://youth-and-teens-empowerment.webflow.io/#coding' >Go here</a> " ;
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>';
 $('#chatbox').append(bot);

   
    },1000);
    
    
 });

 
   
},1000); 

}
 
 
 //drawin//
 else if (userText=='drawing' || userText== 'Drawing' || userText=='sketching' || userText== 'Sketching'){

setTimeout( function (){

   botOtherMessages.remove();
    let   botHTML= '<p class="bottext">'+'Have you thought of using your drawing or sketching skills in one area or the other'+'</p><br>';
    $('#chatbox').append(botHTML);
 
    
 
    
   let yeshtml='yes'
   let nohtml= 'no'
   
   let yes= document.createElement('div');
 yes.setAttribute('class','opttext');

$(yes).append(yeshtml);
 $('#chatbox'). append(yes);
  
  let no= document.createElement('div');
 no.setAttribute('class','opttext');
 $(no).append(nohtml);
  $('#chatbox'). append(no);
  
  let yesans='<p class="usertext"><span>'+yeshtml+'</span></p>';
let noans='<p class="usertext"><span>'+nohtml+'</span></p>';

  $(yes).click(
 function (){
   
   $('#chatbox').append(yesans);
   $(yes).hide();
   $(no).hide();
   setTimeout( function (){
   
   bothtml="That's nice, here is a link to know about drawing better.<a href='https://youth-and-teens-empowerment.webflow.io/#drawing' >Go here</a>";
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>';
 $('#chatbox').append(bot);
 
   },1000);
 
 });
 
 $(no).click(
 function (){
   
   $('#chatbox').append(noans);
   $(yes).hide();
   $(no).hide();
   
   
    setTimeout( function (){

   bothtml="Ok. You can check out this link to know how you can use your drawing or sketching skills.<a href='https://youth-and-teens-empowerment.webflow.io/#drawing' >Go here</a> " ;
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>';
 $('#chatbox').append(bot);

   
    },1000);
    
    
 });

 
   
},1000); 

}
 
 //writing//
 else if (userText=='Writing' || userText== 'writing'){

setTimeout( function (){

   botOtherMessages.remove();
    let   botHTML= '<p class="bottext">'+'Have you thought of using your writing skills in one area or the other'+'</p><br>';
    $('#chatbox').append(botHTML);
 
    
 
    
   let yeshtml='yes'
   let nohtml= 'no'
   
   let yes= document.createElement('div');
 yes.setAttribute('class','opttext');

$(yes).append(yeshtml);
 $('#chatbox'). append(yes);
  
  let no= document.createElement('div');
 no.setAttribute('class','opttext');
 $(no).append(nohtml);
  $('#chatbox'). append(no);
  
  let yesans='<p class="usertext"><span>'+yeshtml+'</span></p>';
let noans='<p class="usertext"><span>'+nohtml+'</span></p>';

  $(yes).click(
 function (){
   
   $('#chatbox').append(yesans);
   $(yes).hide();
   $(no).hide();
   setTimeout( function (){
   
   bothtml="That's nice, here is a link to know about writing better.<a href='https://youth-and-teens-empowerment.webflow.io/#Writing' >Go here</a>";
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>';
 $('#chatbox').append(bot);
 
   },1000);
 
 });
 
 $(no).click(
 function (){
   
   $('#chatbox').append(noans);
   $(yes).hide();
   $(no).hide();
   
   
    setTimeout( function (){

   bothtml="Ok. You can check out this link to know how you can use your Writing skills.<a href='https://youth-and-teens-empowerment.webflow.io/#Writing' >Go here</a> " ;
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>';
 $('#chatbox').append(bot);

   
    },1000);
    
    
 });

 
   
},1000); 

}
  
 
 
  //animal//
 else if (userText=='animalhusbandry' || userText== 'Animalhusbandry' || userText=='animal husbandry' || userText== 'Animal husbandry'){

setTimeout( function (){

   botOtherMessages.remove();
    let   botHTML= '<p class="bottext">'+'Have you thought of using your animal husbandry skills in one area or the other'+'</p><br>';
    $('#chatbox').append(botHTML);
 
    
 
    
   let yeshtml='yes'
   let nohtml= 'no'
   
   let yes= document.createElement('div');
 yes.setAttribute('class','opttext');

$(yes).append(yeshtml);
 $('#chatbox'). append(yes);
  
  let no= document.createElement('div');
 no.setAttribute('class','opttext');
 $(no).append(nohtml);
  $('#chatbox'). append(no);
  
  let yesans='<p class="usertext"><span>'+yeshtml+'</span></p>';
let noans='<p class="usertext"><span>'+nohtml+'</span></p>';

  $(yes).click(
 function (){
   
   $('#chatbox').append(yesans);
   $(yes).hide();
   $(no).hide();
   setTimeout( function (){
   
   bothtml="That's nice, here is a link to know about animal husbandrybetter.<a href='https://youth-and-teens-empowerment.webflow.io/#Animal Husbandry' >Go here</a>";
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>';
 $('#chatbox').append(bot);
 
   },1000);
 
 });
 
 $(no).click(
 function (){
   
   $('#chatbox').append(noans);
   $(yes).hide();
   $(no).hide();
   
   
    setTimeout( function (){

   bothtml="Ok. You can check out this link to know how you can use your animal husbandry skills.<a href='https://youth-and-teens-empowerment.webflow.io/#Animal Husbandry' >Go here</a> " ;
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>';
 $('#chatbox').append(bot);

   
    },1000);
    
    
 });

 
   
},1000); 

}


 
 
 
 
 
 
 else{
setTimeout( function (){
 botOtherMessages.remove();
   bothtml='Try asking something else. Or check here to know the problem. <a href="https://ye-about.webflow.io/">Go here</a> ';
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>';
 $('#chatbox').append(bot);
    },1000);
  

 }
 
 
 let userhtml='<p class="usertext"><span>'+userText+'</span></p>'
$('#text').val('');
$('#chatbox').append(userhtml);
botOtherMessages.append(bothtml);
$('#chatbox'). append(botOtherMessages);
 document.getElementById('chat-bar-bottom').scrollIntoView(true);
 
 setTimeout( function (){
   
   getHardResponse();
 },1000);
 
}





function sendButton() {
  getResponse();
}


  

 
$('#send').click(
function (){
    
    getResponse();
    
  }
)

 
$('#text').keypress(
function (e){
    
    if(e.which== 13){
    
      getResponse();      
      
    }
    
    
  }
);


 
   
  
