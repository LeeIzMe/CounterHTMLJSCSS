let num = 0
let text1 = ""

 document.getElementById("add1").innerText = "+1"
 document.getElementById('sub1').innerText = "-1"
 document.getElementById('title').innerText = num
 document.getElementById('title1').innerText = text

 function clickAdd() {
     num++;
     document.getElementById('title').innerText = num;
     const result = num == 20
     if(result == true) {  
         let text1 = "20 has been reached"
         document.getElementById('title1').innerText = text1
     }
     if(result == false) {  
         let text1 = ""
         document.getElementById('title1').innerText = text1
     }

   
 }

 function clickSub() {
     
     num--;
     document.getElementById('title').innerText = num
     const result = num == 20

     if(result == true) {  
         let text1 = "20 has been reached... again"
         document.getElementById('title1').innerText = text1
     }
     if(result == false) {  
         let text1 = ""
         document.getElementById('title1').innerText = text1
     }
     if(num < 0) {
        num++;
        document.getElementById('title').innerText = "No negative nancies! Press +1 to go back."
     }
 }