<script>
	import { accounts, account, islogin, mode } from './stores.js';
  let accountNo = '';
  let pin = '';

  function checkLogin() {
    if (!(accountNo in $accounts) || $accounts[accountNo].pin != pin) {
      alert('Incorrect Account Number or PIN');
    } else {
      $islogin = true;
      $mode = 'menu';
      $account = accountNo
      accountNo = '';
      pin = '';
    }
  }
  
  // Get the modal
  var modal = document.getElementById('id01');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  } 
</script>

<body>
<img class="wave" src="wave.png">  
  
<div class="row">
  <div class="side">
    <div class="img">
       <img src="bg.svg">
      </div>
  </div>
  <div class="main">
     <center>
  <h1>WEB APPLICATION</h1><h2>สำหรับจดทะเบียนและขอโควต้า</h2> 
    <button onclick="document.getElementById('id01').style.display='block'" style="width:auto; font-size:25px;">Log In</button>
     </center>
</div>
    
<div id="id01" class="modal">
    <div class="imgcontainer">
      <img src="avatar2.png" alt="Avatar" class="avatar" >
    </div>
<center>
    <div class="container">
      <label for="uname"><b>Username</b></label><br>
      <center>
			<input type="text" bind:value={accountNo} placeholder="Accoucnt No">
      </center>
      <center>
      <label for="psw"><b>Password</b></label><br>
      </center>
      <center>
			<input type="password" bind:value={pin} placeholder="PIN">
      </center>
			<button on:click={checkLogin}>Log In</button>
      <br>
      <label style="color:black;">
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label> 
      <br>
    </div>
</center>
    <div class="container1" style="background-color:#FFFFFF">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
      <span class="psw"><a href="mailto:friendben.wy@gmail.com">Forgot password?</a></span>
    </div>
</div>
</div>
</body>

<style>
* {
  box-sizing: border-box;
}

/* Style the body */
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

h1 {
  color:#04AA6D;
  font-size:50px;
}
h2 {
  font-size:40px;
}
  
/* พวกกล่องข้อความ Full-width input fields */
input[type=text], input[type=password] {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* ปุ่ม Login Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 20px 30px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  display: inline-block;
}

button:hover {
  opacity: 0.8;
}

/* ปุ่มยกเลิก Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* จัดรูปโปร Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}
img.avatar {
  width: 15%;
  border-radius: 50%;
}
/*จัดกล่องยกเลิกกับลืมรหัส*/
.container1 {
  padding: 5px;
  margin-left: 23.695em;
}
/*ระยะปุ่มยกเลิกกับลืมรหัส*/
span.psw {
  float: right;
  padding-top: 10px;
  margin-right: 23.69em;
}

/* ตัวคลิก The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #FEFAFA; /* Fallback color */
  background-color: rgba(255,255,255,100); /* Black w/ opacity */
  padding-top: 60px;
}
/* รูปแบบตัวคลิก Modal Content/Box */
.modal-content {
  background-color: #FEFAFA;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}


/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
  
@media screen and (max-width: 700px) {
  .row {   
    flex-direction: column;
  }
  .wave{
    display: none;
   }
}
.wave{
 position: fixed;
 bottom: 0;
 left: 0;
 height: 90%;
 z-index: -1;
}
.img{
  display: flex;
  margin-top:100px;
}
.img img{
 width: 150%;
} 
  
.row {  
  display: -ms-flexbox; 
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
}
.side {
  -ms-flex: 10%; /* IE10 */
  flex: 10%;
  padding: 10px;
  margin-top: -3.9px;
}

/* Main column */
.main {   
  -ms-flex: 30%; /* IE10 */
  flex: 30%;
  padding: 150px;
}
</style>
