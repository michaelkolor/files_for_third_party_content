<!DOCTYPE html>
<html>
<head>
<title> Simple PHP contact form with MySQL and Form Validation </title>
</head>
<body>
<h3> Contact US</h3>
<!-- Form to try out form plug-in UPDATE SECURITY -->
<form id="myForm" action="thankyou.php" method="post">
  Div 1:<input type="radio" name="div_1" value="1" required> Yes, it is third-Party Content
    <input type="radio" name="div_1" value="0"> No <br>
  Div 2:<input type="radio" name="div_2" value="1" required> Yes, it is third-Party Content
    <input type="radio" name="div_2" value="0"> No <br>
  Div 3:<input type="radio" name="div_3" value="1" required> Yes, it is third-Party Content
    <input type="radio" name="div_3" value="0"> No <br>
  Div 4:<input type="radio" name="div_4" value="1" required> Yes, it is third-Party Content
    <input type="radio" name="div_4" value="0"> No <br>
  Div 5:<input type="radio" name="div_5" value="1" required> Yes, it is third-Party Content
    <input type="radio" name="div_5" value="0"> No <br>
  Div 6:<input type="radio" name="div_6" value="1" required> Yes, it is third-Party Content
    <input type="radio" name="div_6" value="0"> No <br>
  Rate Your Comfort with this Form (1 least comfortable, 5 most):<input type="radio" name="comfort" value="1" required> 1
    <input type="radio" name="comfort" value="2"> 2
    <input type="radio" name="comfort" value="3"> 3
    <input type="radio" name="comfort" value="4"> 4
    <input type="radio" name="comfort" value="5"> 5 <br>
  <input type="submit" value="Submit Comment" name="form_submitted" value="0" />
</form>
</body>
</html>
