const btn= document.querySelector('.btn');
const list1= document.querySelector('.container1');
const list2= document.querySelector('.container2');
const list3= document.querySelector('.container3');

const url='https://api.coindesk.com/v1/bpi/currentprice.json';
const div1= document.createElement('div');
const div2= document.createElement('div');
const div3= document.createElement('div');

const rate1= document.createElement('div');
const rate2= document.createElement('div');
const rate3= document.createElement('div');

const country1= document.createElement('div');
const country2= document.createElement('div');
const country3= document.createElement('div');


btn.addEventListener('click',()=>{
    fetch(url)
    .then((res)=>{
        // console.log(res.json());
        return res.json();
    })
    .then((data)=>{
        console.log(data);
       
        div1.innerText='';
        div2.innerText='';
        div3.innerText='';
        rate1.innerText='';
        rate2.innerText='';
        rate3.innerText='';
        country1.innerText='';
        country2.innerText='';
        country3.innerText='';

        const time=document.querySelector('.time');
        time.innerText=data.time.updated;

        
        div1.innerText=data.bpi.USD.code;
        div2.innerText=data.bpi.GBP.code;
        div3.innerText=data.bpi.EUR.code;

        country1.innerText=data.bpi.USD.description;
        country2.innerText=data.bpi.GBP.description;
        country3.innerText=data.bpi.EUR.description;

        rate1.innerText=data.bpi.USD.rate;
        list1.append(div1);
        list1.append(country1);
        list1.append(rate1);
        
        
        rate2.innerText=data.bpi.GBP.rate;
        list2.append(div2);
        list2.append(country2);
        list2.append(rate2);
        

        rate3.innerText=data.bpi.EUR.rate;
        list3.append(div3);
        list3.append(country3);
        list3.append(rate3);
        
    })
})
