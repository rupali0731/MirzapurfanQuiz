var chalk=require('chalk');
console.log("Welcome to the "+chalk.bold("Mirzapur Quiz"));
var readlineSync=require('readline-sync');
name=readlineSync.question("Before starting May I know your name? ");
console.log("Hey,"+chalk.blue(name)+" so lets get started\nThere are 8 questions in this quiz and after 4 correct responses you will reach to level 2");
score=0;
questions={
  q1:"\nTo whom did kaleen Bhaiya said"+chalk.blue('" Aap jis Shehar Mein Naukar hain,hum malik hain us shehar ke ')+"?"+'\na.compounder\nb.maurya ratan singh\nc.ratan singh\n',
  a1:"B",
  q2:"\nAbbey Bawaal cheez hai,System hil jata hai What is being refered as bawaal here?\na.gun\nb.bullet\nc.belt\n",
  a2:"A",
  q3:"\nWhen was the show first aired?\na.16 november 2018\nb.10 november 2017\nc.14 november 2019\n",
  a3:"A",
  q4:"\nWho plays the role of Munna on the show?\na.Ali fazal\nb.Divyendu Sharam\nc.Vikrant messy\n",
  a4:"B",
  q5:"\nWho plays the role of Akhandanand tripathi?\na.Ali fazal\nb.Pankaj tripathi\nc.nawaz\n",
  a5:"B",
  q6:"\nWho said"+chalk.blue('"Agli baar munna bhaiya ghar aayein,zinda vapas nahi laute toh"')+"?\na.guddu pandit\nb.bablu pandit\nc.dimpy\n",
  a6:"A",
  q7:"\nWho plays the role of guddu pandit?\na.Ali fazal\nb.vikrant messy\nc.divyendu sharma\n",
  a7:"A",
  q8:"\nTripathi ke pehle kin logo ka raz tha mirzapur pe?\na.maurya ka\nb.rama singh ka\nc.chaudhary ka\n",
  a8:"C"
};
 ans1=readlineSync.question(questions.q1);
 if(ans1.toUpperCase()===questions.a1){
   score=score+1;
   console.log(chalk.green("yayy!!correct answer and your score is ")+score);
 }
 else{
   score=score-1;
   console.log(chalk.red("oops!!wrong answer and score is ")+score);
 }
 ans2=readlineSync.question(questions.q2);
 if(ans2.toUpperCase()==questions.a2){
   score=score+1;
   console.log(chalk.green("yayy!!correct answer and your score is ")+score);
 }
 else{
   score=score-1;
   console.log(chalk.red("oops!!wrong answer and score is ")+score);
 }
  ans3=readlineSync.question(questions.q3);
 if(ans3.toUpperCase()==questions.a3){
   score=score+1;
   console.log(chalk.green("yayy!!correct answer and your score is ")+score);
 }
 else{
   score=score-1;
   console.log(chalk.red("oops!!wrong answer and score is ")+score);
 }
 ans4=readlineSync.question(questions.q4);
 if(ans4.toUpperCase()==questions.a4){
   score=score+1;
   console.log(chalk.green("yayy!!correct answer and your score is ")+score);
 }
 else{
   score=score-1;
   console.log(chalk.red("oops!!wrong answer and score is ")+score);
 }
 if(score=='4'){
   console.log(chalk.bold("congrats!!!you have cleared the level one"));
 }
 ans5=readlineSync.question(questions.q5);
 if(ans5.toUpperCase()==questions.a5){
   score=score+1;
   console.log(chalk.green("yayy!!correct answer and your score is ")+score);
 }
 else{
   score=score-1;
   console.log(chalk.red("oops!!wrong answer and score is ")+score);
 }
  if(score=='4'){
   console.log(chalk.bold("congrats!!!you have cleared the level one"));}
 ans6=readlineSync.question(questions.q6);
 if(ans6.toUpperCase()==questions.a6){
   score=score+1;
   console.log(chalk.green("yayy!!correct answer and your score is ")+score);
    if(score=='4'){
   console.log(chalk.bold("congrats!!!you have cleared the level one"));}
 }
 else{
   score=score-1;
   console.log(chalk.red("oops!!wrong answer and score is ")+score);
 }
  
ans7=readlineSync.question(questions.q7);
 if(ans7.toUpperCase()==questions.a7){
   score=score+1;
   console.log(chalk.green("yayy!!correct answer and your score is ")+score);
   if(score=='4'){
   console.log(chalk.bold("congrats!!!you have cleared the level one"));}
 }
  
 else{
   score=score-1;
   console.log(chalk.red("oops!!wrong answer and score is ")+score);
 }
 ans8=readlineSync.question(questions.q8);
 if(ans8.toUpperCase()==questions.a8){
   score=score+1;
   console.log(chalk.green("yayy!!correct answer and your score is ")+score);
   if(score=='4'){
   console.log(chalk.bold("congrats!!!you have cleared the level one"));}
 }
 else{
   score=score-1;
   console.log(chalk.red("oops!!wrong answer and score is ")+score);
 }
 console.log("Thanks for taking the quiz "+chalk.bold(name.toUpperCase()));
 highscore={
   name:"Akash",
   score:"8",
 };
 
 if(score===highscore.score){
   highscore.name=name;
 }
 console.log("current highscorer is "+highscore.name+" with score "+highscore.score)