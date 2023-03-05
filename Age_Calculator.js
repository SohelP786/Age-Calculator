<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
</head>
<style type="text/css">
    
    .block{
 width: 135px;
 padding: 5px 20px;
 margin-left: 20px;
 display: inline-block;
 float: left;
}

.title{
 font-size: 20px;
 text-align: left;
 font-family: sans-serif;
 font-weight: normal;
 line-height: 0.5;
 letter-spacing: 0.5px;
 word-spacing: 2.7px;
 color: #1073d0;
}

input[type=text] {
 width: 140px;
 margin: auto;
 outline: none;
 min-height: 50px;
 border: 2px solid #1073d0;
 padding: 12px;
 background-color: #f7f7f7;
 border-radius: 2px;
 color: #1073d0;
 font-size: 17px;
}

input[type=text]:focus{
 background-color: #ffffff;
 border: 2px solid orange;
 outline: none;
}


* {
 box-sizing: border-box;
}

body{
 font-family: Arial, Helvetica, sans-serif;
 background-color:lightsalmon;
 font-size: 15px;
 line-height: 1.5;
 padding: 0;
 margin: 0;
}

.container{
 width:520px;
 height: auto;
 min-height:100px;
 margin: 100px auto;
 background-color: #eee;
 border-radius: 5px;
}


.base{
 width: 100%;
 margin: 0;
 overflow: hidden;
 display: block;
 float: none;
}

.base h4{
 font-size: 26px;
 text-align: center;
 font-family: sans-serif;
 font-weight: normal;
 margin-top: 0px;
 box-shadow: 0px 2px #bababa;
 background: white;
 font-size: 34px;
 color: navy;
}

.block{
 width: 135px;
 padding: 5px 20px;
 margin-left: 20px;
 display: inline-block;
 float: left;
}

.title{
 font-size: 20px;
 text-align: left;
 font-family: sans-serif;
 font-weight: normal;
 line-height: 0.5;
 letter-spacing: 0.5px;
 word-spacing: 2.7px;
 color: #1073d0;
}

input[type=text] {
 width: 140px;
 margin: auto;
 outline: none;
 min-height: 50px;
 border: 2px solid #1073d0;
 padding: 12px;
 background-color: #f7f7f7;
 border-radius: 2px;
 color: #1073d0;
 font-size: 17px;
}

input[type=text]:focus{
 background-color: #ffffff;
 border: 2px solid orange;
 outline: none;
}

input[type=button]{
 width: 150px;
 margin-left: 35%;
 margin-top: 40px;
 outline: none;
 border: none;
 border-radius: 2px;
 background-color: #0761b6;
 color: #ffffff;
 padding: 14px 16px;
 text-align: center;
 font-size: 16px;
}

input[type=button]:hover{
 background-color: #003669;
}

#age{
 display: block;
 margin: 10px;
 margin-top: 35px;
 padding: 10px;
 padding-bottom: 20px;
 overflow: hidden;
 font-family: verdana;
 font-size: 23px;
 font-weight: normal;
 line-height: 1.5;
 word-spacing: 2.7px;
 color: navy;
}

</style>

<body>

<div class="container">
<div class="base">
   <h4>Age Calculator</h4>
 
 <div class="block">
    <p class="title">Date</p>
    <input type="text" name="date" id="date" placeholder="dd" required="required" minlength="1" maxlength="2" />
  </div>
  <div class="block">
    <p class="title">Month</p>
    <input type="text" name="month" id="month" placeholder="mm" required="required" minlength="1" maxlength="2" />
  </div>
  <div class="block">
    <p class="title">Year</p>
    <input type="text" name="year" id="year" placeholder="yyyy" required="required" minlength="4" maxlength="4" />
  </div>

  <div class="base">
 <input type="button" name="submit" value="Submit" onclick="age()" />
 <div id="age"></div>
</div>
 </div>
</div>


<script type="text/javascript">
    
  function age() {
  var d1 = document.getElementById('date').value;
  var m1 = document.getElementById('month').value;
  var y1 = document.getElementById('year').value;

  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if(d1 > d2){
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if(m1 > m2){
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
}


</script>


</body>
</html>
