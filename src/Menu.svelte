<script>
  import { mode } from './stores.js';
</script>
    
<body>
<div style="overflow-x:auto;"> 
  <div class="header">
    <img src="head.png"height="350" width ="1503.1">
  </div>
</div>

<center>
<br>
<button on:click={()=>$mode='Profile'}>โปรไฟล์</button>
<button on:click={()=>$mode='SJ'}>รายวิชา</button>
<button on:click={()=>$mode='Enroll'}>จดทะเบียนและขอโควต้า</button>
<button on:click={()=>$mode='Timetable'}>ตารางเรียน/ตารางสอบ</button>
<button on:click={()=>$mode='Review'}>รีวิวรายวิชา</button>
<button on:click={()=>$mode='Instructionalmedia'}>สื่อการเรียนเพิ่มเติม</button>
<button on:click={()=>$mode='Howto'}>คู่มือ</button>
<button on:click={()=>$mode='Contact'}>ผู้จัดทำ</button>
<br><br>
</center>
  
<div class="footer"> 
  <p>----- THAMMASAT SCHOOL OF ENGINEERING -----</p>
</div>
</body>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #fefafa;
  }

  button {
    color: #fefafa;
    padding: 14.5px 2px;
    margin: auto;
    border-top: 10px;
    cursor: auto;
    width: 70%;
    background-color: #787878;
    border-width: 4.5px;
    border-style: ridge;
    border-color: #fefafa;
    margin-bottom: 2.5px;
    transition-duration: 0.3s; 
    border-radius: 5px;
  }
  button:hover {
    background-color: #04aa6d; 
    color: white;
    box-shadow: 0px 10px 14px 0px rgba(0,0,0,0.26), 0 17px 50px 0 
    rgba(0,0,0,0.19);
  }

  h1{
    margin: 10px
  }

  h3{
    margin: 10px
  }
  
  .footer {
    color: white;
    padding: 20px;
    text-align: center;
    background: #222222;
  }
</style>