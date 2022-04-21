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
      <button on:click={()=>$mode='SJall'}>รายวิชาทั้งหมด</button>
      <hr>
      <button on:click={()=>$mode='SJquota'}>รายวิชาโควต้าจำกัด</button>
      <hr>
      <button on:click={()=>$mode='menu'}>Back to Menu</button>
    </div>
  </div>
  
  <div class="main">
    <h2>รายวิชาทั้งหมด</h2>
    <button class="collapsible">SF210 PROGRAMMING SKILL DEVELOPMENT 1</button>
    <div class="content">
      <p>วิชาบังคับก่อน: สอบได้CN101</p>
      <p>การเขียนโปรแกรมและการแก้ปัญหาด้วยภาษาไพธอน เน้นหลักการของการพัฒนาซอฟแวร์ รูปแบบการเขียนโค้ด และการทดสอบ หัวข้อประกอบด้วย กระบวนคำสั่งและฟังก์ชั่น การวนซ้ำ การเรียกซ้ำ อาร์เรย์และเวกเตอร์ สตริง รูปแบบการดำเนินงานของการเรียกใช้กระบวนคำสั่งและฟังก์ชั่น ขั้นตอนวิธี ความผิดปกติ</p>
    </div>
    
    <button class="collapsible">SF220 INTRODUCTION TO SOFTWARE ENGINEERING</button>
    <div class="content">
      <p>วิชาบังคับก่อน: เคยศึกษาหรือศึกษาพร้อมกับCN101</p>
      <p>การแนะนำกระบวนการพัฒนาซอฟต์แวร์ และวงจรชีวิตการพัฒนาซอฟต์แวร์ แนะนำวิธีการ เทคนิคและเครื่องมือที่ใช้ในกระบวนการพัฒนาซอฟแวร์ นักศึกษาทำงานเป็นกลุ่ม โดยพัฒนาระบบ และนำเสนอรายงาน</p>
    </div>
    
    <button class="collapsible">SF230 LINEAR ALGEBRA AND NUMERICAL METHODS FOR COMPUTER ENGINEERS</button>
    <div class="content">
      <p>ทฤษฎีบทเมทริกซ์ ปริภูมิเวกเตอร์ อิสระเชิงเส้น มิติ ค่าลำดับชั้นของเมทริกซ์ การประยุกต์ของเมทริกซ์ในการแก้ระบบสมการเชิงเส้น เมทริกซ์ผกผัน ดีเทอร์มิแนนต์ หลักเกณฑ์คราเมอร์ การแปลงเชิงเส้น ปริภูมิผลคูณภายใน ส่วนเติมเต็มเชิงตั้งฉากและกำลังสองน้อยที่สุด ค่าลักษณะเฉพาะ เวกเตอร์ลักษณะเฉพาะและการประยุกต์ ผลเฉลยเชิงตัวเลขของสมการตัวแปรเดียว การประมาณพหุนาม การหาอนุพันธ์และปริพันธ์โดยวิธีเชิงตัวเลข การแก้ปัญหาทางวิศวกรรมโดยใช้โปรแกรมสำเร็จรูป</p>
    </div>

    <button class="collapsible">TU050 ENGLISH SKILL DEVELOPMENT</button>
    <div class="content">
      <p>รายวิชาต่อเนื่อง:	TU105</p>
      <p>ฝึกทักษะภาษาอังกฤษในระดับเบื้องต้น ได้แก่ การพูด การอ่าน การเขียน เชิงบูรณาการ เพื่อเป็นพื้นฐานในการพัฒนาทักษะภาษาอังกฤษระดับต่อไป</p>
    </div>

    <button class="collapsible">TU105 COMMUNICATION SKILLS IN ENGLISH</button>
    <div class="content">
      <p>วิชาบังคับก่อน: ต้องมีผลการศึกษาในระดับผ่าน(s)วิชาTU050ก่อนการจดทะเบียนเรียนวิชาTU105</p>
      <p>พัฒนาทักษะการฟัง พูด อ่าน และเขียนภาษาอังกฤษโดยมุ่งเน้นความสามารถในการสนทนาเพื่อแลกเปลี่ยนความคิดเห็น และการอ่าน เพื่อทำความเข้าใจเนื้อหาวิชาการในศาสตร์ต่างๆ ที่เกี่ยวข้องกับวิชาชีพของนักศึกษา</p>
    </div>
    
    <button class="collapsible">TU107 DIGITAL SKILL AND PROBLEM SOLVING</button>
    <div class="content">
      <p>ทักษะการคิดเชิงคำนวณเพื่อการแก้ปัญหาและการพัฒนาโอกาสใหม่ด้านสังคมและเศรษฐกิจ ความสามารถในการค้นหาและการเข้าถึงสารสนเทศได้อย่างมีประสิทธิภาพ การประเมินความน่าเชื่อถือของสารสนเทศ การกลั่นกรองและจัดการสารสนเทศอย่างเป็นระบบ การใช้และจรรยาบรรณด้านดิจิทัล การสื่อสารออนไลน์อย่างมืออาชีพ</p>
    </div>

    <button class="collapsible">TU109 INNOVATION AND ENTREPRENEURIAL MINDSET</button>
    <div class="content">
      <p>การประเมินความเสี่ยงและการสร้างโอกาสใหม่ การคิดและการวางแผนแบบผู้ประกอบการ การตัดสินใจและการพัฒนาธุรกิจ การสื่อสารเชิงธุรกิจและการสร้างแรงจูงใจอย่างมีประสิทธิภาพ การสร้างคุณค่าร่วมเพื่อสังคม</p>
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

  button {
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: auto;
    border: none;
    cursor: pointer;
    width: 100%;
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
  
  .footer {
    color: white;
    padding: 20px;
    text-align: center;
    background: #222222;
  }
</style>