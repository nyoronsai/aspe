millenium = new Date(2015,4,10,23,59,59)// ©Œ‚Ì‚İAİ’èŒ‚Ìh-1h‚Å“ü—Í


function CoundDown_form() {
document.write("<div id=\"form_cd\"> </div>");
}


function display() {
today = new Date();
myMsec= millenium.getTime()-today.getTime();
time0 = Math.floor(myMsec/(1000*60*60*24));
myMsec -= (time0*(1000*60*60*24)); 
time1 = Math.floor(myMsec/(1000*60*60));
myMsec -= (time1*(1000*60*60)); 
time2 = Math.floor(myMsec/(1000*60)); 
myMsec -= (time2*(1000*60));
time3 = Math.floor(myMsec/1000);
myMsec -= (time3*(1000)); 
time4 = Math.floor(myMsec/10);

for(i=0;i<2;i++){ time1 = '' + '0' + time1; }
for(i=0;i<2;i++){ time2 = '' + '0' + time2; }
for(i=0;i<2;i++){ time3 = '' + '0' + time3; }
for(i=0;i<2;i++){ time4 = '' + '0' + time4; }
time1 = time1.substring(time1.length - 2,time1.length);
time2 = time2.substring(time2.length - 2,time2.length);
time3 = time3.substring(time3.length - 2,time3.length);
time4 = time4.substring(time4.length - 2,time4.length);


if((millenium - today) > 0){
document.getElementById('form_cd').innerHTML ="<span class=\"fsc-48y\">"+time0+"</span>"+"“ú"+"<span class=\"fsc-48y\">"+time1+"</span>"+"ŠÔ"+"<span class=\"fsc-48y\">"+time2+"</span>"+"•ª"+"<span class=\"fsc-48y\">"+time3+"</span>•b";
}else{
document.getElementById('form_cd').innerHTML = "<span class=\"fin\">- I—¹€”õ’† -</span>";
}
tid = setTimeout('display()', 10);
}