<script>
  import { accounts, account, mode } from './stores.js';
</script>

<div style="overflow-x:auto;"> 
  <div class="header">
    <img src="head.png"height="350" width ="1503.1">
  </div>
</div>

<div class="row">
  <div class="side">
    <div class="nav" align="center"> 
      <button on:click={()=>$mode='menu'}>Back to Menu</button>
    </div>
  </div>
  
  <div class="main">
    <h2>ผู้จัดทำ</h2>
    <p>1. อดิภา ชูพลสัตย์ เลขทะเบียน 6410742081</p>
    <p>2. ศรุตยา อัตตระมงคล เลขทะเบียน 6410742503</p>
    <p>3. ฐิติมงคล ประจงพันธุ์ เลขทะเบียน 6410742594</p>
    <p>4. บัณพร หวังชูชอบ เลขทะเบียน 6410742610</p>
    <p>5. เบญญาภา ไวกยี เลขทะเบียน 6410742628</p>
    <br>
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
    margin-top: -4px;
  }

  .main {   
    -ms-flex: 70%; 
    flex: 70%;
    background-color: #FEFAFA;
    padding: 20px;
  }

  .nav {
    width: 100%;
    padding: 20px;
    margin: center;
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
    width: 100%;
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
  
  h2{
    margin-top: -4px;
    padding-top: 30px;
    background-color: #fefafa;
    padding-left: 50px;
    margin-left: -20px;
  }
</style>