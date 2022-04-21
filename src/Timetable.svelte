<script>
  import { accounts, account, mode } from './stores.js';
</script>

<div style="overflow-x:auto;"> 
  <div class="header">
    <img src="head.png"height="350" width ="1503.1">
  </div> 
</div> 

<div style="overflow-x:auto;">      
<div class="row">
  <div class="side">
      <button on:click={()=>$mode='menu'}>Back to Menu</button>
  </div>
  <div class="main">
    <center>
    <h3>CLASS AND EXAMINATION TIMETABLE OF ALL COURSES</h3>
      <table border="1">
        <tr>
         <th class="title" colspan="11" style="color: #FFFFFF ">CLASS TIMETABLE</th>
        </tr>
        <tr>
          <th rowspan="2">Day/Time</th>
          <th rowspan="2">8:30-9:30</th>
          <th rowspan="2">9:30-10:30</th>
          <th rowspan="2">10:30-11:30</th>
          <th rowspan="2">11:30-12:30</th>
          <th rowspan="2">12:30-13:30</th>
          <th rowspan="2">13:30-14:30</th>
          <th rowspan="2">14:30-15:30</th>
          <th rowspan="2">15:30-16:30</th>
          <th rowspan="2">16:30-17:30</th>
          <th>Semester 2</th>
        </tr>
        <tr>
        <td><b>2021</b></td>
        </tr>
        <tr>
          <td><b>Mon</b></td>
          <td>&nbsp;</td>
          <td class="title1"colspan="3">SF220,760001</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><b>Tue</b></td>
          <td>&nbsp;</td>
          <td class="title1"colspan="3">SF210,760001</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><b>Wed</b></td>
          <td>&nbsp;</td>
          <td class="title1"colspan="3">TU109,760001</td>
          <td>&nbsp;</td>
          <td class="title1"colspan="3">SF230,760001</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><b>Thu</b></td>
          <td>&nbsp;</td>
          <td class="title1"colspan="3">TU105,760001/TU050,760001</td>
          <td>&nbsp;</td>
          <td class="title1" colspan="3">TU107,760001</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        <tr>
          <td><b>Fri</b></td>
          <td class="title2"colspan="9">FREE DAY</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><b>Sat</b></td>
          <td class="title2"colspan="9">FREE DAY</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td><b>Sun</b></td>
          <td class="title2"colspan="9">FREE DAY</td>
          <td>&nbsp;</td>
        </tr>
      </table>
  <br>
  <br>
      <table border="1">
       <tr>
         <th colspan="5" class="title" style="color: #FFFFFF">EXAMINATION TIMETABLE</th>
       </tr>
       <tr>
          <th class="title1">Course</th>
          <th class="title1">Course name</th>
          <th class="title1">Section</th>
          <th class="title1">Midterm examination</th>
          <th class="title1">Final examination</th>
       </tr>
       <tr>
         <td>TU050</td>
         <td>ENGLISH SKILL DEVELOPMENT</td>
         <td>760001</td>
         <td>24 February 2022</td>
          <td>5 May 2022</td>
       </tr>
       <tr>
         <td>TU105</td>
         <td>COMMUNICATION SKILLS IN ENGLISH</td>
         <td>760001</td>
         <td>2 March 2022</td>
          <td>10 May 2022</td>
       </tr>
       <tr>
         <td>TU107</td>
         <td>DIGITAL SKILL AND PROBLEM SOLVING</td>
         <td>760001</td>
         <td>-</td>
          <td>5 May 2022</td>
       </tr>
       <tr>
         <td>TU109</td>
         <td>INNOVATION AND ENTREPRENEURIAL MINDSET</td>
         <td>760001</td>
         <td>-</td>
          <td>22 May 2022</td>
       </tr>
       <tr>
         <td>SF210</td>
         <td>PROGRAMMING SKILL DEVELOPMENT 1</td>
         <td>760001</td>
         <td>4 March 2022</td>
          <td>7 May 2022</td>
       </tr>
       <tr>
         <td>SF220</td>
         <td>INTRODUCTION TO SOFTWARE ENGINEERING</td>
         <td>760001</td>
         <td>7 March 2022</td>
          <td>2 May 2022</td>
       </tr>
       <tr>
         <td>SF230</td>
         <td>LINEAR ALGEBRA AND NUMERICAL METHODS FOR ENGINEERING</td>
         <td>760001</td>
         <td>9 March 2022</td>
         <td>4 May 2022</td>
       </tr>
     </table>
    </center>
  </div>
</div>
</div>

<div class="footer"> 
  <p>----- THAMMASAT SCHOOL OF ENGINEERING ----- </p>
</div>     

<style>
  * {
    box-sizing: border-box;
  }

  .row {  
    display: -ms-flexbox; 
    display: flex;
    -ms-flex-wrap: wrap; 
    flex-wrap: wrap;
  }

  .side {
    -ms-flex: 30%; 
    flex: 10%;
    background-color: #787878;
    padding: 10px;
    padding-top: 48px;
    margin-top: -4px;
  }

  .main {   
    -ms-flex: 70%; 
    flex: 70%;
    background-color: #FEFAFA;
    padding: 20px;
    margin-top: -0.1em;
  }

  @media screen and (max-width: 700px) {
    .row {   
      flex-direction: column;
    }
  }
  
  button {
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: auto;
    border: none;
    cursor: pointer;
    width: 90%;
  }
  
  h3 {
    color: #1a1a1a;
    text-align: center;
  }

  button:hover {
    opacity: 0.8;
  }

  .footer {
    color: white;
    padding: 20px;
    text-align: center;
    background: #222222;
  }
  
  table{
      text-align: center;
      color: #1a1a1a;
      }
      th{
        padding-left:1px;
        padding-right:1px;
        background-color: #fbf7f6;
        color: #1a1a1a;
      }
      td{
        padding-top: 1px;
        padding-bottom: 1px;
        background-color: #fbf7f6;
        color: #1a1a1a;
      }
    .title{
      background-color: #04aa6d;
      color: #1a1a1a;
    }
     .title1{
      background-color: #cae3cc;
      color: #1a1a1a;
    }
    .title2{
      background-color: #f1f9f1;
      color: #1a1a1a;
    }
</style>