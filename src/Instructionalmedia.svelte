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
		<div class="nav"> 
 			<button on:click={()=>$mode='SJall'}>Instuction</button>
      <hr>
     	<button on:click={()=>$mode='menu'}>Back to Menu</button>
    </div>
  </div>

  <div class="main">
		<h1>สื่อการเรียนรู้เพิ่มเติม</h1>
		<button class="collapsible">สื่อการเรียนรู้วิชาคณิตศาสตร์</button>
		<div class="content">
			<ul>
				<li><a href="https://youtu.be/rowWM-MijXU" target="_blank">youtube Matrix</a></li>
				<br>
				<li><a href="https://www.youtube.com/watch?v=HfACrKJ_Y2w"target="_blank">youtube calculus</a></li>
			</ul>
		</div>
  
    <button class="collapsible">สื่อการเรียนรู้วิชาคอมพิวเตอร์</button>
		<div class="content">
			<ul>
				<li><a href="https://www.youtube.com/watch?v=rfscVS0vtbw" target="_blank">youtube python</a></li>
				<br>
				<li><a href="https://www.youtube.com/watch?v=AbjY-ajKgSI&t=1293s"target="_blank">youtube javadcript</a></li>
        <br>
				<li><a href="https://youtu.be/vH3i3pfPbBs"target="_blank">youtube HTML CSS</a></li>
			</ul>
		</div>

    <button class="collapsible">สื่อการเรียนรู้วิชาภาษาอังกฤษ</button>
		<div class="content">
      <ul>
				<li><a href="https://youtu.be/xZIh2so3-AU" target="_blank">youtube Learn English with MOVIE</a></li>
        <br>
				<li><a href="https://youtu.be/u4h3TClSswE"target="_blank">youtube ENGLISH PODCAST</a></li>
        <br>
        <li><a href="https://youtu.be/_nSaJ0Wvs8U"target="_blank">youtube Netflix English Room</a></li>
      </ul>
		</div>
      
		<script>
			var coll = document.getElementsByClassName("collapsible");
			var i;
				
			for (i = 0; i < coll.length; i++) {coll[i].addEventListener("click", function() {
				this.classList.toggle("active");
				var content = this.nextElementSibling;
				if (content.style.maxHeight){
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				} 
				});
			}
		</script>    	
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
  
  .collapsible {
    background-color: #777;
    color: white;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
  }

  .collapsible:hover {
    background-color: #04aa6d;
  }

  .collapsible:after {
    content: '\002B';
    color: white;
    font-weight: bold;
    float: right;
    margin-left: 5px;
  }

  .content {
    padding: 0 18px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    background-color: #f1f1f1;
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
  
  a{
    text-decoration: none;
    color: #222222
  }
  
  a:hover{
    color: #04aa6d;
    font-size: 1.2em;
  }
  
  .footer {
    color: white;
    padding: 20px;
    text-align: center;
    background: #222222;
  }
</style>