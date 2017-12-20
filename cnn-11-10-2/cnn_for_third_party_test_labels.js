console.log("content_script.js was successfully injected");
//This works too acutally wait there is an error
// wait for the DOM to be loaded
$(document).ready(function(){
console.log("test");
//****************Inject Form*************************8
$('body').prepend('<form id="myForm" style="font-style:Helvetica;background-color:#CA0002;text-align:center;margin:auto; width: 500px;" action="thankyou.php" method="post"> \
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

//Floating attempt UPDATE SCRAPPED
//$('div[id="google_ads_iframe_/8663477/CNN/homepage_2__container__"]').css("position:relative");

//Inject Labels
  //Trying to inject an iframe --> Not functional rn --> bagged too complex
$('div[id="google_ads_iframe_/8663477/CNN/homepage_2__container__"]').prepend('<h1 style="color:purple;">CONTENT #1:</h1>');
//Other labels
$('.cd.cd--tool.cd--tool__webtag article').prepend('<h1 style="color:purple;">CONTENT #2:</h1>');
$('.column.zn__column--idx-5.column--top').prepend('<h1 style="color:purple;">CONTENT #3:</h1>');
$('.cn.cn-list-hierarchical-xs.cn--idx-5.cn-coverageContainer_B5ED9522-33C5-5FB3-7CEE-3E0FA1AA1D2B').prepend('<h1 style="color:purple;">CONTENT #4:</h1>');
$('div[id="google_ads_iframe_/8663477/CNN/homepage_5__container__"]').prepend('<h1 style="color:purple;">CONTENT #5:</h1>');
$('.l-footer__tools').prepend('<h1 style="color:purple;">CONTENT #6:</h1>');

//ON HOVER PULL UP QUESTIONS
//Stop Propagation function presents double trigger
$('div[id="google_ads_iframe_/8663477/CNN/homepage_2__container__"]').mouseenter(function(e) {
  e.stopPropagation();
  alert("You just hovered over Content #1. Is this content third party? Record your answer in the survey at the top of the page");
});

/*Hover alerts for popup directions */
$('.cd.cd--tool.cd--tool__webtag article').mouseenter(function(e) {
  e.stopPropagation();
  alert("You just hovered over Content #2. Is this content third party? Record your answer in the survey at the top of the page");
});
$('.column.zn__column--idx-5.column--top').mouseenter(function(e) {
  e.stopPropagation();
  alert("You just hovered over Content #3. Is this content third party? Record your answer in the survey at the top of the page");
});
$('.cn.cn-list-hierarchical-xs.cn--idx-5.cn-coverageContainer_B5ED9522-33C5-5FB3-7CEE-3E0FA1AA1D2B').mouseenter(function(e) {
  e.stopPropagation();
  alert("You just hovered over Content #4. Is this content third party? Record your answer in the survey at the top of the page");
});
$('div[id="google_ads_iframe_/8663477/CNN/homepage_5__container__"]').mouseenter(function(e) {
  e.stopPropagation();
  alert("You just hovered over Content #5. Is this content third party? Record your answer in the survey at the top of the page");
});
$('.l-footer__tools').mouseenter(function(e) {
  e.stopPropagation();
  alert("You just hovered over Content #6. Is this content third party? Record your answer in the survey at the top of the page");
});

/*Old Popup idea code outline
$('.l-footer__tools').hover(function() {
  $('#test_iframe').contents().find('body').html('<form  style="background-color:yellow"> <h1 style="color:purple;">SURVEY</h1> \
  Div 6:<input type="radio" name="div_6" value="1" required> Yes, it is third-Party Content \
    <input type="radio" name="div_6" value="0"> No <br> </form>');
    alert("Hover Test!");
});
*/

//test
console.log("Successful!");

});
