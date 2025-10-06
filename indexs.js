let div = document.createElement('div');
div.className = "contanr";
let header = document.createElement('header');
let logo =  document.createElement('h2')
logo.innerHTML = 'Abh'
logo.style.color ='green';
logo.style.fontSize ='35px';
logo.style.margin= '5px';
logo.style.marginLeft= '20px';
let ul = document.createElement('ul');
ul.innerHTML = `
<li>home</li> 
<li>home</li>
<li>home</li>
<li>home</li>
<li>home</li>
`;
ul.style.listStyle ='none'
header.style.display = 'flex';
header.style.justifyContent= 'space-between';
ul.style.gap= '30px';
ul.style.margin= '15px';
ul.style.marginRight= '10%';
ul.style.fontSize ='20px';
ul.style.display = 'flex';
let body = document.body
body.style.margin ='0px'
body.style.padding ='0px'
let divBody = document.createElement('div');

for(let i = 1 ; i<=30 ;i++){
var box =document.createElement('div'); 
  box.innerHTML =`
  <h2>${i}</h2>
  <p>prodct</p>
  ` ;
  divBody.appendChild(box)
  box.style.width = "220px"
divBody.style.flexGrow ='1'
box.style.height=  "120px"
box.style.background ='#642642'
box.style.margin ='10px'
box.style.padding ='20px'
box.style.textAlign ='center'

}
divBody.style.display ='flex'
divBody.style.flexWrap ='wrap'
divBody.style.margin ='10px'
divBody.style.width ='100%'
let divEnd = document.createElement('div')
divEnd.innerHTML = "Abdallh 2024";
divEnd.style.background ="#009688";
divEnd.style.textAlign ='center';
divEnd.style.height ='30px'; 
divEnd.style.width ='100%';
divEnd.style.padding ='8px';
divEnd.style.color ='#fff';
divEnd.style.fontSize = '20px';
divEnd.style.position = 'fixed';
divEnd.style.bottom = '0';
body.appendChild(div)
div.appendChild(header)
header.appendChild(logo)
header.appendChild(ul)
div.appendChild(divBody)
div.appendChild(divEnd)