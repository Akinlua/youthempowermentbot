function optResponse(){

let advOne="A lazy person will only end up being more lazy. So don't be lazy";
let advTwo="Remember God loves you always";

  // set if options//
  let one="What's your name";
 let two='What do you do';
 let three='I want to know how to realise my skill';
 let four='I want to know about skill';
 let five='I want to know about education';
 let six='I want to know about Scholarship';
 let seven='Ask me a question';
 let eight='good will messages';
 
 let arrange=document.createElement('div');
arrange.setAttribute('class','arrange');
  let arr=document.getElementById('#arrange');
     
  // html with style for the options //
 let ans= document.getElementById('optone').innerHTML;
    let anshtml='<p class="usertext"><span>'+ans+'</span></p>';
    
     let anstwo= document.getElementById('opttoo').innerHTML;
    let anshtmltwo='<p class="usertext"><span>'+anstwo+'</span></p>';
    
      
       let bothtml='';
    
 //bot div for answer to opt//
 let optRes= document.createElement('div');
 optRes.setAttribute('class','bottext');
 
  let optResOne= document.createElement('div');
 optResOne.setAttribute('class','bottext')
 let optResTwo= document.createElement('div');
 optResTwo.setAttribute('class','bottext')
 
 let optRespOne= document.createElement('div');
 optRespOne.setAttribute('class','bottext')
  let optRespTwo= document.createElement('div');
 optRespTwo.setAttribute('class','bottext')
 
 
 
 
 // div options for the users//
 let opttwo=document.createElement('div');
 opttwo.setAttribute('class','opttext');
  
 let optthree=document.createElement('div');
 optthree.setAttribute('class','opttext');
 
  let oneOpt=document.createElement('div');
 oneOpt.setAttribute('class','opttext');
  
 let twoOpt=document.createElement('div');
 twoOpt.setAttribute('class','opttext');
 
  let threeOpt=document.createElement('div');
 threeOpt.setAttribute('class','opttext');
 
  let fourOpt=document.createElement('div');
 fourOpt.setAttribute('class','opttext');
 
  let fiveOpt=document.createElement('div');
 fiveOpt.setAttribute('class','opttext');
 
  let sixOpt=document.createElement('div');
 sixOpt.setAttribute('class','opttext');
 
  let sevenOpt=document.createElement('div');
 sevenOpt.setAttribute('class','opttext');
 
 let eightOpt=document.createElement('div');
 eightOpt.setAttribute('class','opttext');
 
 // html with style for the options//
 let anshtmlthree='<p class="usertext"><span>'+ 'fine what of yours'+'</span></p>'
 let anshtmlfour='<p class="usertext"><span>'+ 'not fine '+'</span></p>';
  let anshtmlfive='<p class="usertext"><span>'+ "What's your name"+'</span></p>'
  let anshtmlsix='<p class="usertext"><span>'+two+'</span></p>'
 let anshtmlseven='<p class="usertext"><span>'+three+'</span></p>'
  let anshtmleight='<p class="usertext"><span>'+four+'</span></p>'
    let anshtmlnine='<p class="usertext"><span>'+five+'</span></p>'
    let anshtmlten='<p class="usertext"><span>'+six+'</span></p>';
       let anshtmleleven='<p class="usertext"><span>'+seven+'</span></p>'    
    let anshtmltwelve='<p class="usertext"><span>'+eight+'</span></p>'
    
 let hey=document.getElementById(optone)
 // hey //
  $('#optone').click(
  function(){
    

  
    
    $('#chatbox').append(anshtml);
   
    $('#optone').remove();
    $('#opttoo').remove();
    
    setTimeout( function (){
   
   bothtml='how was your day😁';
  
 $(optRes).append(bothtml);
 $('#chatbox').append(optRes);
 
$('#chatbox').append(hey);
 
  let optwotext='fine, what of yours';
 let optthreetext='not fine';
 $(opttwo).append(optwotext);
 $('#chatbox').append(opttwo);
 
 $(optthree).append(optthreetext);
 $('#chatbox').append(optthree);
 },1000);
 
 
 
 });
 


//hi//
 $('#opttoo').click(
  function(){
  
   $('#chatbox').append(anshtmltwo);
    $('#opttoo').hide();
    $('#optone').hide();
    
   setTimeout( function (){
   
   bothtml='how was your day 😁';
   
 $(optRes).append(bothtml);
 $('#chatbox').append(optRes);
 

 let optwotext='fine, what of yours';
 let optthreetext='not fine';
 $(opttwo).append(optwotext);
 $('#chatbox').append(opttwo);
 
 $(optthree).append(optthreetext);
 $('#chatbox').append(optthree);
 },1000);
 
 
 
  });
    
// fine, what of your//
 $(opttwo).click(
  function(){
  
  
   $('#chatbox').append(anshtmlthree);
    $(opttwo).hide();
    $(optthree).hide();
    
   setTimeout( function (){
   
   bothtml='fine, which question do you have or should i ask my question';
   
 $(optResOne).append(bothtml);
 $('#chatbox').append(optResOne);
 

 let one="What's your name";
 let two='What do you do';
 let three='I want to know how to realise my skill';
 let four='I want to know about skill';
 let five='I want to know about education';
 let six='I want to know about Scholarship';
 let seven='Ask me a question';

 $(oneOpt).append(one);
 $(arrange).append(oneOpt)
 $('#chatbox').append(arrange);
 
 $(twoOpt).append(two);
  $(arrange).append(twoOpt)
 $('#chatbox').append(arrange);
 
 $(threeOpt).append(three);
 $(arrange).append(threeOpt)
 $('#chatbox').append(arrange);
 
$(fourOpt).append(four);
 $(arrange).append(fourOpt)
 $('#chatbox').append(arrange);
 
 $(fiveOpt).append(five);
 $(arrange).append(fiveOpt)
 $('#chatbox').append(arrange);
 
 $(sixOpt).append(six);
 $(arrange).append(sixOpt)
 $('#chatbox').append(arrange);
 
 $(eightOpt).append(eight);
 $(arrange).append(eightOpt)
 $('#chatbox').append(arrange);
 
 $(sevenOpt).append(seven);
 $(arrange).append(sevenOpt)
 $('#chatbox').append(arrange);
 
 
 
 
 
  },1000);
  
  }
 );


// notfine//
 $(optthree).click(
  function(){
  
  
   $('#chatbox').append(anshtmlfour);
    $(opttwo).hide();
    $(optthree).hide();
    
   setTimeout( function (){
   
   bothtml='Aah 🥺 sorry but cheerup 🥳, just move on from whatever problem you have faced, may God help you. ';
   
 $(optResTwo).append(bothtml);
 $('#chatbox').append(optResTwo);
 

 
 $(oneOpt).append(one);
 $(arrange).append(oneOpt)
 $('#chatbox').append(arrange);
 
 $(twoOpt).append(two);
  $(arrange).append(twoOpt)
 $('#chatbox').append(arrange);
 
 $(threeOpt).append(three);
 $(arrange).append(threeOpt)
 $('#chatbox').append(arrange);
 
$(fourOpt).append(four);
 $(arrange).append(fourOpt)
 $('#chatbox').append(arrange);
 
 $(fiveOpt).append(five);
 $(arrange).append(fiveOpt)
 $('#chatbox').append(arrange);
 
 $(sixOpt).append(six);
 $(arrange).append(sixOpt)
 $('#chatbox').append(arrange);
 
 $(eightOpt).append(eight);
 $(arrange).append(eightOpt)
 $('#chatbox').append(arrange);
 
 $(sevenOpt).append(seven);
 $(arrange).append(sevenOpt)
 $('#chatbox').append(arrange);
 
 
 
 },1000);
  
  }
 );
  
  
  
  
 //whats your name//
 $(oneOpt).click(
  function(){
    

  
    window.scrollTo(300,500);
    $('#chatbox').append(anshtmlfive);
    $(arrange).hide();
 

    setTimeout( function (){
   
   bothtml='YE-Bot, meaning Youth Empowerment 😁';
  let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>'
 $(optRespOne).append(bothtml);
 $('#chatbox').append(bot);
 
$(arrange).show();


 
 
 },1000);
 
 
 
 });

 
 // wt do you..//
 $(twoOpt).click(
  function(){
    

  
    
    $('#chatbox').append(anshtmlsix);
  $(arrange).hide();
 

    setTimeout( function (){
   
   bothtml='I help youths and teens in realising their skills by giving them resources to do so. I also help in other youths related questions.';
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>'
 $(optRespTwo).append(bothtml);
 $('#chatbox').append(bot);
$(arrange).show();




 },1000);
 }
 );
 

// I want to know how to reali...//

$(threeOpt).click(
  function(){
    

  
    
    $('#chatbox').append(anshtmlseven);
  $(arrange).hide();
 

    setTimeout( function (){
   
   bothtml='You can read this article to know more on how to realise your skill . Here is the link';
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>'
 $('#chatbox').append(bot);
$(arrange).show();




 },1000);
 }
 );
 
 
// I want to know about skill//
 $(fourOpt).click(
  function(){
    

  
    
    $('#chatbox').append(anshtmleight);
  $(arrange).hide();
 

    setTimeout( function (){
   
   bothtml='To know more about skill read this';
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>'
 $(optRespTwo).append(bothtml);
 $('#chatbox').append(bot);
$(arrange).show();




 },1000);
 }
 );
 

// I want to... education//
 $(fiveOpt).click(
  function(){
    

  
    
    $('#chatbox').append(anshtmlnine);
  $(arrange).hide();
 

    setTimeout( function (){
   
   bothtml='Read this article to know more about education. This is is the link';
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>'
 $(optRespTwo).append(bothtml);
 $('#chatbox').append(bot);
$(arrange).show();




 },1000);
 }
 );
 
 
// i want to.. scholarship//
 $(sixOpt).click(
  function(){
    

  
    
    $('#chatbox').append(anshtmlten);
  $(arrange).hide();
 

    setTimeout( function (){
   
   bothtml='Read this article to know about scholarships. This is is the link';
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>'
 $(optRespTwo).append(bothtml);
 $('#chatbox').append(bot);
$(arrange).show();




 },1000);
 }
 );
 
 
$(eightOpt).click(
  function(){
    

  
    
    $('#chatbox').append(anshtmltwelve);
  $(arrange).hide();
 

    setTimeout( function (){
    
   advice=[advOne,advTwo];
let randomAdvice=Math.random()*2
let finAdv= Math.floor(randomAdvice);
let adv=advice[finAdv];

   bothtml=adv;
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>'
 $(optRespTwo).append(bothtml);
 $('#chatbox').append(bot);
$(arrange).show();




 },1000);
 }
 );
 


// ask me a question//
$(sevenOpt).click(
  function(){
    

  
    
    $('#chatbox').append(anshtmleleven);
  $(arrange).hide();
 

    setTimeout( function (){
   
   bothtml='What do you like, like your hobbies just in one word ';
let  bot= '<p class="bottext"><span>'+bothtml+'</span></p>'
 $(optRespTwo).append(bothtml);
 $('#chatbox').append(bot);
$(arrange).show();




 },1000);
 }
 );
 
}

optResponse();




