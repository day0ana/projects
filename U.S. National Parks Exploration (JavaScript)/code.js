//onEvents that switches to their respective screens 
//homeScreen, listScreen, parkScreen
onEvent("list1Button", "click", function( ) {
  setScreen("listScreen");
});
onEvent("parkListButton", "click", function( ) {
  setScreen("listScreen");
});
onEvent("park1Button", "click", function( ) {
  setScreen("parkScreen");
});
onEvent("park2Button", "click", function( ) {
  setScreen("parkScreen");
});
onEvent("home1Button", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("parkHomeButton", "click", function( ) {
  setScreen("homeScreen");
});


//homie
//variable set up for further use for user's input
var park = "";


//displays all information regarding user's input
//input is user's park choice 
//output is respective park's info
onEvent("enterButton", "click", function() {
  park = getText("parkNameInput");
  setImageURL("parkImageBox", parkImage(park));
  setText("locationBox", parkLocation(park));
  setText("descriptionBox", parkDescription(park));
  setText("parkNameBox", park);
});


//returns the location of park
function parkLocation(parkName) {
  var allParksList = getColumn("US National Parks", "Name");
  var allParkLocationList = getColumn("US National Parks", "Location");
  for (var i = 0; i < allParksList.length; i++) {
    if (allParksList[i].toLowerCase()==parkName.toLowerCase()) {
      return allParkLocationList[i];
    }
  }
  return "No Park Under That Name";
}
//returns the description of park
function parkDescription(parkName) {
  var allParksList = getColumn("US National Parks", "Name");
  var allParkDescriptionList = getColumn("US National Parks", "Description");
  for (var i = 0; i < allParksList.length; i++) {
    if (allParksList[i].toLowerCase()==parkName.toLowerCase()) {
      return (allParkDescriptionList[i]);
    }
  }
  return "No Park Under That Name";
}
//returns image of park
function parkImage(parkName) {
  var allParksList = getColumn("US National Parks", "Name");
  var allParkImageList = getColumn("US National Parks", "Image");
  for (var i = 0; i < allParksList.length; i++) {
    if (allParksList[i].toLowerCase()==parkName.toLowerCase()) {
      return (allParkImageList[i]);
    }
  }
  return "No Park Under That Name";
}
//all data is from code.org's database under the section "Geography" in "US National Parks"
//including all images are from code.org's database
