console.log("content_script.js was successfully injected");

//This works too acutally wait there is an error
// wait for the DOM to be loaded
$(document).ready(function(){
console.log("test");
$('body').prepend('<form id="myForm" style="font-style:Helvetica;background-color:Cornflowerblue;text-align:center;margin-top: 50px; margin-bottom: 0px;margin-right: 350px;margin-left: 350px; width: 500px;" action="thankyou.php" method="post"> \
    <h1 style="color:purple;">SURVEY</h1> \
    Content 1:<input type="radio" name="div_1" value="1" required> Yes, it is Third-Party Content \
      <input type="radio" name="div_1" value="0"> No <br> \
    Content 2:<input type="radio" name="div_2" value="1" required> Yes, it is Third-Party Content \
      <input type="radio" name="div_2" value="0"> No <br> \
    Content 3:<input type="radio" name="div_3" value="1" required> Yes, it is Third-Party Content \
      <input type="radio" name="div_3" value="0"> No <br> \
    Content 4:<input type="radio" name="div_4" value="1" required> Yes, it is Third-Party Content \
      <input type="radio" name="div_4" value="0"> No <br> \
    Content 5:<input type="radio" name="div_5" value="1" required> Yes, it is Third-Party Content \
      <input type="radio" name="div_5" value="0"> No <br> \
    Content 6:<input type="radio" name="div_6" value="1" required> Yes, it is Third-Party Content \
      <input type="radio" name="div_6" value="0"> No <br> \
    Rate Your Comfort with this Form (1 least, 5 most):<input type="radio" name="comfort" value="1" required> 1 \
      <input type="radio" name="comfort" value="2"> 2 \
      <input type="radio" name="comfort" value="3"> 3 \
      <input type="radio" name="comfort" value="4"> 4 \
      <input type="radio" name="comfort" value="5"> 5 <br> \
    <input type="submit" value="Submit Comment" name="form_submitted" value="0" /> \
  </form> \
</div>');

//Floating attempt
//$('div[id="google_ads_iframe_/8663477/CNN/homepage_2__container__"]').css("position:relative");

//Inject Labels
  //Trying to inject an iframe --> Not functional rn UPDATE SCRAPPED
$('._1-ia._11qy').prepend('<h1 style="color:purple;">CONTENT #1:</h1>');
//Other labels
$('div[id="pagelet_trending_tags_and_topics"]').prepend('<h1 style="color:purple;">CONTENT #2:</h1>');
$('div[title="Instant Games"]').prepend('<h1 style="color:purple;">CONTENT #3:</h1>');
$('div[id="6084609838936-id_5a32da8b69baf1b13453184"]').prepend('<h1 style="color:purple;">CONTENT #4:</h1>');
$('[data-referrer="hyperfeed_story_id_5a32d8dea44af9f76499310"]').prepend('<h1 style="color:purple;">CONTENT #5:</h1>');
$('[data-testid="chat_sidebar"]').prepend('<h1 style="color:purple;">CONTENT #6:</h1>');

//ON HOVER PULL UP QUESTIONS FIX FOR FACEBOOK *******************************************
$('._1-ia._11qy').mouseenter(function(e) {
  e.stopPropagation();
  alert("You just hovered over Content #1. Is this content third party? Record your answer in the survey at the top of the page");
});

$('div[id="pagelet_trending_tags_and_topics"]').mouseenter(function(e) {
  e.stopPropagation();
  alert("You just hovered over Content #2. Is this content third party? Record your answer in the survey at the top of the page");
});
$('div[title="Instant Games"]').mouseenter(function(e) {
  e.stopPropagation();
  alert("You just hovered over Content #3. Is this content third party? Record your answer in the survey at the top of the page");
});
$('div[id="6084609838936-id_5a32da8b69baf1b13453184"]').mouseenter(function(e) {
  e.stopPropagation();
  alert("You just hovered over Content #4. Is this content third party? Record your answer in the survey at the top of the page");
});
$('[data-referrer="hyperfeed_story_id_5a32d8dea44af9f76499310"]').mouseenter(function(e) {
  e.stopPropagation();
  alert("You just hovered over Content #5. Is this content third party? Record your answer in the survey at the top of the page");
});
$('[data-testid="chat_sidebar"]').mouseenter(function(e) {
  e.stopPropagation();
  alert("You just hovered over Content #6. Is this content third party? Record your answer in the survey at the top of the page");
});

console.log("Successful!");

});
