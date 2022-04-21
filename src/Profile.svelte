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
      <img src="avatar2.png" alt="Avatar" style="height:200px;">
      <hr>
      <button on:click={()=>$mode='menu'}>Back to Menu</button>
    </div>
  </div>
  <div class="main">
    <h2>ข้อมูลส่วนตัว</h2>
    <p>ชื่อ: {$accounts[$account].nameth} นามสกุล: {$accounts[$account].surnameth}</p>
    <p>Name: {$accounts[$account].nameEN} Surname: {$accounts[$account].surnameEN}</p>
    <p>คณะ: {$accounts[$account].faculty}</p>
    <p>รหัสนักศึกษา: {$accounts[$account].studentNo}</p>
    <p>วันเดือนปีเกิด(วว/ดด/ปปปป): {$accounts[$account].dateofbirth}</p>
    <p>เชื้อชาติ: {$accounts[$account].race}</p>
    <p>สัญชาติ: {$accounts[$account].nationality}</p>
    <p>หมู่โลหิต : {$accounts[$account].bloodtype}</p> 
    <p>เพศ: {$accounts[$account].gender}</p>
    <p>เลขที่บัตรประชาชน : {$accounts[$account].idcard}</p>
    <p>ที่อยู่: {$accounts[$account].address}</p>
    <p>เบอร์ติดต่อ: {$accounts[$account].tel}</p>
    <p>อีเมล: {$accounts[$account].email}</p>
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
    margin-top: -3.9px;
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

  h4 {
    margin-top: -245px;
    margin-bottom: 185px;
    text-align: center;
    color: #ffffff;
    font-size: 4.5em;
    -webkit-text-stroke-width: 3.5px;
    -webkit-text-stroke-color: #ffffff;
  }
  
  p{
    margin-left: 2em;
  }

  .footer {
    color: white;
    padding: 20px;
    text-align: center;
    background: #222222;
    margin-bottom: -1em;
  }
</style>