//Bless up this works
console.log("content_script.js was successfully injected");
//This works too acutally wait there is an error

// wait for the DOM to be loaded
$(document).ready(function(){
    /*$("div").click(function(){
        $("div").hide();
        console.log("check 2");
    });*/

    $("article[data-analytics*='tool-type_list-xs']").mouseenter(function(){
      $(this).css("background-color", "pink");
      if(confirm("Does the highlighted section contain third-party content?"); {
        alert("Correct!");
      }
      else {
        alert("Incorrect!");
      }
      console.log("check 3");
        //Add basic form
        var HTML = '<form id="myForm" action="comment.php" method="post"> Name: <input type="text" name="name" /> Comment: <textarea name="comment"></textarea> <input type="submit" value="Submit Comment" /> </form>';
          $("#container").html(HTML);


        // bind 'myForm' and provide a simple callback function
        $('#myForm').ajaxForm(function() {
            alert("Thank you for your comment!");
        });
    });


    /*Stylize onclick*/
    $("div").click(function(){
      //console.log("check for div click");
      //alert("div was clicked'");'
      //$(this).hide();
      $(this).css({"display" : "block", "border-style" : "dotted !important", "border-width" : "10px !important", "border-color" : "yellow !important"});
    });


    //Test for mouse over binding
    $("img").mouseenter(function(){
        clearTimeout($(this).data('timeoutId'));
        alert("Test passed@");
        $(this).hide();//find(".tooltip").fadeIn("slow");
    }).mouseleave(function(){
        var someElement = $(this),
            timeoutId = setTimeout(function(){
                someElement.find(".tooltip").fadeOut("slow");
            }, 650);
        //set the timeoutId, allowing us to clear this trigger if the mouse comes back over
        someElement.data('timeoutId', timeoutId);
    });
});
