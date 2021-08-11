const sorular=[
    {
        soru:"Osmanli Devleti'nin kurulus yili kactir?",
        a:"1200",
        b:"1250",
        c:"1249",
        d:"1299",
        cevap:"d"
    },
    {
        soru:"Cumhuriyet kac yilinda kurulmustur?",
        a:"1923",
        b:"1920",
        c:"1918",
        d:"2000",
        cevap:"a"
    },
    {
        soru:"Turkiye kac bolgeden olusur?",
        a:"5",
        b:"7",
        c:"10",
        d:"81",
        cevap:"b"
    },
    {
        soru:"Hindistan hangi kitada bulunur?",
        a:"Amerika",
        b:"Avrupa",
        c:"Asya",
        d:"Afrika",
        cevap:"c"
    },
    {
        soru:"Malazgirt Savasi kac yilinda yapilmistir?",
        a:"1071",
        b:"2012",
        c:"1453",
        d:"1918",
        cevap:"a"
    },
    {
        soru:"Ikinci Dunya Savasi kac yil surmustur?",
        a:"3",
        b:"1",
        c:"12",
        d:"4",
        cevap:"d"
    },
]

const soru=document.getElementById("soru");
const a_sik=document.getElementById("a");
const b_sik=document.getElementById("b");
const c_sik=document.getElementById("c");
const d_sik=document.getElementById("d");
const div=document.getElementById("quiz");

var dogru=0;
var yanlis=0;
var conf;
var simdikisoru=0;
window.onload=soruYukle;
function soruYukle(){

    soru.innerText="Soru "+(simdikisoru+1)+": "+sorular[simdikisoru].soru;
    a_sik.innerHTML=sorular[simdikisoru].a;
    b_sik.innerHTML=sorular[simdikisoru].b;
    c_sik.innerHTML=sorular[simdikisoru].c;
    d_sik.innerHTML=sorular[simdikisoru].d;

}
a_sik.addEventListener("click",()=> {
    if(sorular[simdikisoru].cevap==="a"){
        dogru++;
    }
    else{
        yanlis++;
    }
    simdikisoru++;
    if(simdikisoru<sorular.length){
        soruYukle();
    }
    else{
        alert("bitirdin "+dogru+" dogru, "+yanlis+" yanlis");
        conf=confirm("tekrar cozmek ister misin?");
        if (conf==true){
            window.location.reload();
        }
        else{
            div.innerText="Test Bitmistir. "+dogru+" dogru, "+yanlis+" yanlis";
        }
        

    }
})
b_sik.addEventListener("click",()=>{
    if(sorular[simdikisoru].cevap==="b"){
        dogru++;
    }
    else{
        yanlis++;
    }
    simdikisoru++;
    if(simdikisoru<sorular.length){
        soruYukle();
    }
    else{
        alert("bitirdin "+dogru+" dogru, "+yanlis+" yanlis");
        conf=confirm("tekrar cozmek ister misin?");
        if (conf==true){
            window.location.reload();
        }
        else{
            div.innerText="Test Bitmistir. "+dogru+" dogru, "+yanlis+" yanlis";
        }
    }
})
c_sik.addEventListener("click",()=>{
    if(sorular[simdikisoru].cevap==="c"){
        dogru++;
    }
    else{
        yanlis++;
    }
    simdikisoru++;
    if(simdikisoru<sorular.length){
        soruYukle();
    }
    else{
        alert("bitirdin "+dogru+" dogru, "+yanlis+" yanlis");
        conf=confirm("tekrar cozmek ister misin?");
        if (conf==true){
            window.location.reload();
        }
        else{
            div.innerText="Test Bitmistir. "+dogru+" dogru, "+yanlis+" yanlis";
        }
    }
})
d_sik.addEventListener("click",()=>{
    if(sorular[simdikisoru].cevap==="d"){
        dogru++;
    }
    else{
        yanlis++;
    }
    simdikisoru++;
    if(simdikisoru<sorular.length){
        soruYukle();
    }
    else{
        alert("bitirdin "+dogru+" dogru, "+yanlis+" yanlis");
        conf=confirm("tekrar cozmek ister misin?");
        if (conf==true){
            window.location.reload();
        }
        else{
            div.innerText="Test Bitmistir. "+dogru+" dogru, "+yanlis+" yanlis";
        }
    }
})