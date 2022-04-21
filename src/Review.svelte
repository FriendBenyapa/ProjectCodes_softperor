<script>
  import { accounts, account, mode } from './stores.js';
  import Modal from './Modal.svelte';
  let reviewSF210 = false;
  let reviewSF220 = false;
  let reviewSF230 = false;
  let reviewTU107 = false;
  let reviewTU109 = false;
  let reviewTU050 = false;
  let reviewTU105 = false;
</script>

<div style="overflow-x:auto;"> 
  <div class="header">
    <img src="head.png"height="350" width ="1503.1">
  </div>
</div>

<div class="bg">
  <center>
    <br><br>
    <h1>REVIEW</h1>
    
    <button class="dec210" on:click="{() => reviewSF210 = true}">
	  SF210
    </button>
    {#if reviewSF210}
	  <Modal on:close="{() => reviewSF210 = false}">
		<h2 slot="header">
			👩🏻‍💻 Review SF210
			<small>-</small>
		</h2>
		<ol class="definition">
      <p>SF210 เรียนการเขียนโค้ดPython คล้ายๆกับวิชาCN101 แต่จะมีความท้าทายเพิ่มขึ้น และนั้นก็เท่ากับความสนุกที่เพิ่มขึ้นด้วย</p>
		</ol>
	  </Modal>
    {/if}
    
    <button class="dec220" on:click="{() => reviewSF220 = true}">
	  SF220
    </button>
    {#if reviewSF220}
	  <Modal on:close="{() => reviewSF220 = false}">
		<h2 slot="header">
			👩🏻‍💻 Review SF220 
			<small>-</small>
		</h2>
		<ol class="definition">
			<p>SF220 เรียนเกี่ยวกับการเขียนเว็บไซต์ ด้วยการเขียนโค้ดHTML javascript CSS Svelte เรียนภาษคอมเยอะเลยเรียนจบอาจลืมภาษามนุษย์ได้55555😄 จริงก็ไม่อยากมากคะแนนมาจากการทำงานกลุ่ม ทำให้ได้รู้จัก คุยกับเพื่อนมากขึ้น เพราะเป็นช่วงโควิดทำให้ไม่ได้ไปเรียนที่มหาลัยกัน พอมีงานกลุ่มทำให้ได้รู้จักเพื่อนๆ พอได้ทำงานกับเพื่อนก็ยิ่งสนุกมีสีสันขึ้นมา แต่แอบเครียดๆอยู่นะต้องแบ่งเวลาทำงานให้ดีๆนะ</p>
		</ol>
	  </Modal>
    {/if}
    
    <button on:click="{() => reviewSF230 = true}">
	  SF230
    </button>
    {#if reviewSF230}
	  <Modal on:close="{() => reviewSF230 = false}">
		<h2 slot="header">
			👩🏻‍💻 Review SF230
			<small>-</small>
		</h2>
		<ol class="definition">
			<p>SF230 วิชานี้เลขจ้าาา😩 มีทั้ง Matrix Vector ~~~ คิดว่าจะคล้ายกับมัธยมคือคิดผิดไปเลย ระดับความยากเพิ่มขึ้นหลายเท่าตัวเลย ไม่ต้องกังวลเพราะอาจารย์มีแบบฝึกหัดให้ค่อยฝึกตลอดก่อนสอบก็จะทวนให้ สบายใจได้🙃</p>
		</ol>
	  </Modal>
    {/if}
</center>

<center>
    <button class="dec107" on:click="{() => reviewTU107 = true}">TU107
    </button>
    {#if reviewTU107}
	  <Modal on:close="{() => reviewTU107 = false}">
		<h2 slot="header">
			👩🏻‍💻 ReviewTU107
			<small>- </small>
		</h2>
		<ol class="definition">
			<p>TU107 ได้เรียนหลายเรื่องเลยทั้งประวัติความเป็นมาของเทคโนโลยี โลกดิจิทัล กฎหมายที่เกี่ยวข้องจรรยาบรรณด้านดิจิทัล การใช้เทคโนโลยีให้มีประสิทธิภาพ งานมีทั้งงานเดี่ยวงานกลุ่ม ทำให้ได้เรียนรู้สิ่งใหม่ๆได้รู้จักเพื่อนๆเพิ่มขึ้น จะมีความตื่นเต้นช่วงสี่โมงที่มีควิสเกือบทุกสัปดาห์ ตื่นเต้นครับ</p> <br>
      <a href="https://www.facebook.com/thammasatsu/photos/pcb.3036739699696146/3036795539690562"target="_blank">review on facebook</a>
		</ol>
	  </Modal>
    {/if}

    <button on:click="{() => reviewTU109 = true}">
	   TU109
    </button>
    {#if reviewTU109}
	  <Modal on:close="{() => reviewTU109 = false}">
		<h2 slot="header">
			👩🏻‍💻 ReviewTU109
			<small>-</small>
		</h2>
		<ol class="definition">
			<p>TU109 สอนสนุกมมีความตื่นเต้นตลอดทั้งคาบ ข้อสอบออกยากไปหน่อยแต่คะแนนส่วนใหญ่จะมาจากการงานกลุ่ม ในกลุ่มต้องว่างแผนการทำงานแบ่งงานกันให้ดีก็จะทำงานกันมีความสุข บางสัปดาห์จะมีเล่นเกมในห้องม่่่่ายรู้จะสนุกหรือเครียดดีเพราะมีคะแนนด้วย ส่วนตอนนี้แทบจะไม่ใช่นักศึกษาแล้วแทบจะเป็นCEOได้แล้ว</p> <br>
      <a href="https://www.facebook.com/thammasatsu/photos/pcb.3036739699696146/3036795846357198"target="_blank">review on facebook</a>
		</ol>
	  </Modal>
    {/if}

    <button class="space" on:click="{() => reviewTU050 = true}">TU050
    </button>
    {#if reviewTU050}
	  <Modal on:close="{() => reviewTU050 = false}">
		<h2 slot="header">
			👩🏻‍💻 ReviewTU050
			<small>-</small>
		</h2>
		<ol class="definition">
			<p>TU050 ภาษาอังกฤษพื้นฐานม่ายมีเกรดแต่ต้องเรียนให้ผ่าน มีทั้งงานเดียวงานกลุ่ม มีสอบครบทุกอย่างทั้งพูด อ่านเขียนครบหมดเลยยย</p> <br>
      <a href="https://www.facebook.com/thammasatsu/photos/pcb.3036739699696146/3036794639690652"target="_blank">review on facebook</a>
		</ol>
	  </Modal>
    {/if} 
  
    <button class="space" on:click="{() => reviewTU105 = true}">TU105
    </button>
    {#if reviewTU105}
	  <Modal on:close="{() => reviewTU105 = false}">
		<h2 slot="header">
			👩🏻‍💻 ReviewTU105
			<small>-</small>
		</h2>
		<ol class="definition">
			<p>TU105 ภาษาอังกฤษพื้นฐานที่ยาากขึ้น 5555 แต่ไม่เกินความสามารถหรอก ม่ายรู้จะเหล่าอะไรเอาเป้นว่าต้องไปลองดูน้าาาา</p> <br>
      <a href="https://www.facebook.com/thammasatsu/photos/pcb.3036739699696146/3036795476357235"target="_blank">review on facebook</a>
		</ol>
	  </Modal>
    {/if} 
</center>
  
<center>
    <button class="back"on:click={()=>$mode='menu'}>Back to 
     Menu</button>
</center>
  <div class="footer">
     <p>----- THAMMASAT SCHOOL OF ENGINEERING -----</p>
  </div>
</div>

<style>
  
header {
    padding-top: 1px;
    background-color: #1abc9c;
  }
* {
  box-sizing: border-box;
}  

/* Header/logo Title */

button{
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 1em;
    margin-bottom: 1.5em;
    margin-right: 1.5em;
    background-color: #787878;
    border-style: ridge;
    border-width: 6px;
    border-color: #f3f6f6;
    color: #ffffff;
    font-size: 15px;
  }
  
button:hover {
  background-color: #04aa6d; 
  color: white;
  box-shadow: 0px 10px 14px 0px rgba(0,0,0,0.26), 0 17px 50px 0 
  rgba(0,0,0,0.19);}
  
li {
    padding-bottom: 4px;
  }
  
.definition{
    text-align: left;
  }
  
 .dec210 {
    margin-top: 5.5em;
  }
  
.dec107 {
    padding-left: 45px;
    padding-right: 45px;
  }
  
.dec220 {
    padding-left: 51px;
    padding-right: 51px;
  }
  
.space {
    padding-left: 54px;
    padding-right: 54px;
  }
  
h4 {
    text-align: center;
    margin-top: 9em;
    padding-bottom: 2.3em;
    margin-bottom: -1em;
    color: #97938a;
  }

h1{
    padding-top: 80px;
    margin-top: -60px;
    color: #04aa6d;
  }
  
.bg {
    background-color: #fefafa;
    margin-left: -1em;
    margin-right: -1.3em;
  }

.back{
  margin-top: 5em;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right:10px;
  margin-bottom:2em;
  background-color: #04aa6d;
}

/* Footer */
.footer {
  color: white;
  padding: 20px;
  text-align: center;
  background: #222222;
  margin-bottom: -10px;
}

</style>