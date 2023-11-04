//buttons for navigating screens

//begining screen to explainScreen
onEvent("nextButton", "click", function(){
  setScreen("explainScreen");
});

//explainScreen to miniQuiz screen
onEvent("next2Button", "click", function(){
  setScreen("miniQuiz");
});

//miniQuiz screen to miniQuiz2 screen
onEvent ("nextButtonM", "click", function(){
  setScreen("miniQuiz2");
});

//when clicked exPE button switch to pexampleScreen
onEvent("exPE", "click", function( ) {
  setScreen("pexampleScreen");
});

//when clicked exKE button switch to keExampleTitle Screen
onEvent("exKE", "click", function( ) {
  setScreen("keExampleTitle");
});

//when clickied peBackButton switch back to explainScreen
onEvent("peBackButton", "click", function( ) {
  setScreen("explainScreen");
});

//when clicked keBackButton switch back to explainScreen
onEvent("keBackButton", "click", function( ) {
  setScreen("explainScreen");
});

//when click on homeButtonM on final quiz screen switch to homeScreen
onEvent("homeButtonM", "click", function( ) {
  setScreen("homeScreen");
});

//if clicked on right radio button-show a check sign 
//if wrong radio button-show x sign
onEvent("q1B1", "click", function( ) {
  showElement("rightImage");
  hideElement("wrongImage");
  showElement("correctExplain");
  hideElement("wrongExplain");
});
onEvent("q1B2", "click", function( ) {
  showElement("wrongImage");
  hideElement("rightImage");
  showElement("wrongExplain");
  hideElement("correctExplain");
});

//if clicked on right radio button-show a check sign 
//if wrong radio button-show x sign
onEvent("q2B1", "click", function( ) {
  showElement("rightImage2");
  hideElement("wrongImage2");
  showElement("correctExplain2");
  hideElement("wrongExplain2");
});
onEvent("q2B2", "click", function( ) {
  showElement("wrongImage2");
  hideElement("rightImage2");
  showElement("wrongExplain2");
  hideElement("correctExplain2");
});


//energy home image: https://www.quantamagazine.org/physicists-use-quantum-mechanics-to-pull-energy-out-of-nothing-20230222/
//KE and PE image source examples: https://www.proprofs.com/quiz-school/story.php?title=gravitational-potential-energy-kinetic-energy

