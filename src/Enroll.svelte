<script>
  import { accounts, account, mode, subjects, subject, account_sjs, account_sj } from './stores.js';
  let todos = [];
  let task = "";
  let user_sjs=Object.entries($account_sjs[$account]);

  function checksj() {
    if (!(task in $subjects) || $subjects[task].name != task ) {
      alert('กรอกรหัสวิชาผิด โปรดตรวจสอบอีกครั้ง')
    } else {
	 		  todos = [{
	 			task:task,
	 			  }, ...todos];
	 			task = "";		
      }
   }
  function submit() {
    alert('ยืนยันการจดทะเบียนและขอโควต้าเรียบร้อยแล้ว')
  }
  
	function markComplete(i){
	 	if ($subjects[i].seat > 0 && $account_sjs[$account][i] == 0 ) {
      $subjects[i].seat = $subjects[i].seat - 1;
      $account_sjs[$account][i]=1; 
      user_sjs[i]=1;
    }     
	}
	function removeTask(i){
    if ($subjects[i].seat < $subjects[i].seatall  && $account_sjs[$account][i] == 1){
	 	  $subjects[i].seat = $subjects[i].seat + 1;
      $account_sjs[$account][i]=0; 
      user_sjs[i]=0;
    }
	}

</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div style="overflow-x:auto;"> 
  <div class="header">
    <img src="head.png"height="350" width ="1503.1">
  </div>
</div>
<div style="overflow-x:auto;"> 
<div class="row">
  <div class="side">
    <div class="nav">
      <button class="button" on:click={submit}>ยืนยันการจดทะเบียนและขอโควตา</button>
      <hr>
      <button class="button" on:click={()=>$mode='menu'}>Back to Menu</button>
    </div>
  </div>

  <div class="main">
    <h2>รายวิชาที่ต้องการจดทะเบียนและขอโควตา</h2>
    <hr>
    <p>{$accounts[$account].studentNo} : {$accounts[$account].nameth}&nbsp;&nbsp;{$accounts[$account].surnameth}</p>
    <hr>
    <p>(หมายเหตุ: รหัสวิชาต้องพิมพ์ด้วยภาษาอังกฤษตัวพิมพ์ใหญ่เท่านั้น)</p>

    <div class="todo"> 
	    <div class="form">
		    <input class="searchcode" type="text" bind:value={task} placeholder="กรอกรหัสวิชา">
		    <button class="search" on:click={checksj}><i class="fa fa-search"></i></button>
	    </div> 
      <br>
 	    <div class="tasks"> 
 		    {#each todos as todo, i}
		      <div class="task">
				    {todo.task}&nbsp;&nbsp;{$subjects[todo.task].allname}&nbsp;&nbsp;ประเภทรายวิชา&nbsp;{$subjects[todo.task].code} &nbsp;&nbsp;ที่นั่งคงเหลือ&nbsp;{$subjects[todo.task].seat}/{$subjects[todo.task].seatall}	
				    <button class="add" on:click={()=>{markComplete((todo.task))}}><i class="fa fa-plus-square-o fa-lg"></button>
			    	<button class="del" on:click={()=>{removeTask((todo.task))}}><i class="fa fa-minus-square-o fa-lg"></button>
          <hr>
			    </div>
		    {/each}
	    </div>
     </div>
    <br>
    
    <fieldset><strong>ผลการจดทะเบียน</strong><br><br>
      {#each user_sjs as task}
        {#if ($account_sjs[$account][task[0]])=='1'}
          {(task[0])} &nbsp;&nbsp;
            {#if ([task[0]] in $subjects || $subjects[task[0]].name == [task[0]])}
              {$subjects[task[0]].allname}
              <br>
            {/if}
        {/if}
      {/each}
    </fieldset>
  </div>
</div>
</div>
<div style="overflow-x:auto;"> 
<div class="footer"> 
  <p>----- THAMMASAT SCHOOL OF ENGINEERING ----- </p>
</div>
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

  @media screen and (max-width: 700px) {
    .row {   
      flex-direction: column;
    }
  }
  
  .button {
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: auto;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  .button:hover {
    opacity: 0.8;
  }
  
  .search{
    background-color: #04AA6D;
    color: white;
    padding: 13px 20px;
    margin: auto;
    border: none;
    cursor: pointer;
    width: 5%;
  }

  .search:hover {
    opacity: 0.8;
  }
  
  .searchcode {
    padding: 12px 20px;
    margin: auto;
    cursor: pointer;
    width: 50%;
  }

  .add{
    background-color: black;
    color: white;
    margin: auto;
    border: none;
    cursor: pointer;
    padding: 3px;
    width: 2%;
    border-radius: 4px;
  }

  .add:hover {
    opacity: 0.8;
  }
  
  .del{
    background-color: red;
    color: white;
    margin: auto;
    border: none;
    cursor: pointer;
    padding: 3px;
    width: 2%;
    border-radius: 4px;
  }

  .del:hover {
    opacity: 0.8;
  }

  .footer {
    color: white;
    padding: 20px;
    text-align: center;
    background: #222222;
    margin-bottom: -1em;
  }
  
  .nav {
    width: 100%;
    padding: 20px;
    margin: center;
  }
  
  h2{
    margin-top: 2px;
  }
  
  fieldset{
    background-color: #cae3cc;
    border-style: ridge;
    border-width: 7px;
    border-color: #f7f7f7;
    margin-right: 20em;
  }
</style>