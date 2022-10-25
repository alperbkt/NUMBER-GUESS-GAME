"use strict"; // Hata yaparsak bizi uyaracak.

let secretNumber = Math.trunc(Math.random() *20)+1;        //1-20 arası rastgele sayı oluşturur.
let score = 0;                                             // Skor 0 puan ile başlar.
let yuksekscore = 0;                                       // Yüksek skorda 0 ile başlar.
let tahminhakkı = 5; 

    const displayMessage = function (message){                       //message diye bir fonksiyon tanımlıyoruz. Bu fonksiyon displayMessage komutunu çalıştıtır.
    document.querySelector(".message").textContent = message;    //Html sayfamızda message clasına sahip (Tahmin ediliyor...) kısmını displayMessage komutuyla ne yazılırsa değiştirir.
};
   const kalanHak = function (haksayısı){                            // kalanHak adlı bir değişken yaptık, haksayısı diyede bir fonksiyon tanımladık.
    document.querySelector(".haksayısı").textContent = haksayısı;    // haksayısı fonksiyonumuzu haksayısı diyebir <p> etiketine bağladık. Biz kalanHak("alper") diye
   }                                                                                                                  // bir komut yazarsak <p> etiketinde alper yazar.

//----------------------------------FONKSİYON BAŞLANGIÇ ------------------------------------------------------------

document.querySelector(".btn").addEventListener("click",kontrolEt);   // Kontrol et butonuna tıklama eventi ekliyoruz.
function kontrolEt(){                                                 // Kontrol et function ismi açıyoruz.
    const guess = Number(document.querySelector(".guess").value);     // guess clasına sahip input number türündeki nesnemizi number türüne çeviriyoruz.
    console.log(guess, typeof guess);                                 // guess'in kaç olduğunu ve türünü yazdırıyor.
    console.log(secretNumber, typeof secretNumber);                   // secretNumber'ın kaç olduğunu ve türünü yazdırıyor.
    document.querySelector("body").style.backgroundColor = "#222";    // Kontrol et butonuna tıklanınca tüm ekran verilen renk oluyor.
    document.querySelector(".number").textContent = "?";              // Kontrol et butonuna tıklanınca number classı "?" yazıyor.
         
//eğer kullanıcı sayı girmezse

if(!guess){                                                            //Eğer guess değilse, yani sayı girilmez ise veya 0 girilirse.
    displayMessage("Bir sayı giriniz!!");                              // Bir sayı girin uyarısı çıkacak.
    document.querySelector(".message").style.color = "#ff0000";        // Bir sayı girin uyarısının rengi belirtilen renk olur(kırmızı).
}

   // SKOR 100 olursa veya 100 ün üzerine çıkarsa oyunu kazanır.

   if(score == 100 || score > 100){
    document.querySelector(".kazan").textContent = "!!! KAZANDINIZ !!!";
    document.querySelector("body").style.backgroundColor ="#60b347";
    document.querySelector(".number").textContent = "BİTTİ";
}

//sayılar birbiriyle eşleşirse

else if(guess === secretNumber){                                       // Eğer guess(tahmin) ile secretNumber(gizlisayımız) eşleşirse 
    displayMessage("DOĞRU!!");                                         // Ekrana yazdırır.
    document.querySelector(".number").textContent = secretNumber;      // number classlı yani "?" olan kısımda gizli sayımız yazar.
    document.querySelector("body").style.backgroundColor = "#60b347";  // Arkaplan rengi belirtilen renk olur (Yeşil).
    score += 10;                                                            // Skora +10 puan ekler.
    document.querySelector(".score").textContent = "Skor :" + " " + score;  // Ekranda Skor : (skor kaç ise o) yazar.
    secretNumber = Math.trunc(Math.random() *20)+1;                         // Tekrardan 1-20 arası rastgele sayı oluşturur.
    tahminhakkı = 6 ;                                                       // Doğru bildiğinde tahmin hakkını gene 5 e çekiyoruz(Doğru bildiği anda 1 tahmin hakkı yiyor o yüzden 6)

    if(score > yuksekscore){                                                                    // Eğer skorumuz yüksek skordan büyük olursa.
        yuksekscore = score;                                                                    // yüksek skoru skora eşitler.
        
        document.querySelector(".yuksek-score").textContent ="En Yüksek Skor :" + yuksekscore;  // Ve ekrana yüksekskoru yazdırır.
    }
}

// sayılar birbiri ile eşleşmiyorsa.
 
else if (guess!==secretNumber){                                                                  // Eğer guess(tahmin) , secretNumber(gizlisayı) birbirine eşit değilse
    if(score>=0)                                                                                 //Eğer score 0 dan büyükse
    displayMessage(guess>secretNumber ? ":Yüksek Tahmin":"Düşük Tahmin");                              // tahminimiz gizli sayıdan büyükse ekrana çok yüksek yazdırır küçükse çok düşük yazdırır.
    document.querySelector(".score").textContent = "Skor :" + " " + score;                       // Skor : (skor kaçsa o yazar) ekrana yazdırır.
}

  // Eğer tahmin hakkı 0 a indiğinde kontrol et butonuna basarsa tekrar başlat butonu çalışır.

  if(tahminhakkı == 0){
    return Tekrarbasla();
}

// Tahmin hakkı bittiğinde

    tahminhakkı--;                                  // Her kontrol et butonuna tıklandığında tahminhakkı 1 sayı eksiliyor. Tahmin hakkının normal değeri 5
    kalanHak("Kalan hak :" + " " + tahminhakkı);    // yukarda tanımladığımız kalanHak değişkenimizi çağırıyoruz. Kalan tahmin hakkımızı ekrana yazdırıyor.
    if(tahminhakkı == 0){                           // Eğer tahmin hakkımız 0'a eşit olduğunda                   
        displayMessage("OYUN BİTTİ");               // OYUN BİTTİ YAZACAK.
        document.querySelector(".message").style.fontSize = "50px";        //Büyük harflerle oyun bitti yazar.
        document.querySelector("body").style.backgroundColor = "#ff0000";  // Kırmızı renkte oyun bitti yazar.
        }

   

 // Eğer girilen sayı 0' sa yada 20 den büyükse uyarır.
 
    if(guess > 20 || guess == 0){
    displayMessage("1 - 20 arası sayı giriniz.");
}

};


// ---------------------------------------------- FONKSİYON BİTİŞ---------------------------------------------------------



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Entera basınca kontrol et butonu çalışması !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

 document.querySelector(".guess").addEventListener("keydown",function(e){   // guess(tahmin) yerinde keydown(klavyeden tuşa basınca) eventi çalışıyor. 
if(e.keyCode == 13 || e.keyIdentifier){                                     // Eğer keycode 13'e eşitse (13 Enter tuşu oluyor.)
    console.log("tamam");                                                   //Arkaplanda tamam yazıyor.
    return kontrolEt();                                                     // Eğer entera tıklanırsa kontrol et fonksiyonunu çalıştırıyor. (Yani kontrol et butonuna sol tık veya enter basılabilir)
}
 })
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// TEKRAR BAŞLAT BUTONU

document.querySelector(".again").addEventListener("click",Tekrarbasla);                 // again classlı(Tekrar başlat butonu) click eventi ekleniyor. (Tekrar başlat butonuna tıklanınca)
   function Tekrarbasla(){
score = 0;                                                                        // Skoru 0 a eşitler
    secretNumber = Math.trunc(Math.random() *20)+1;                                   // 1 ile 20 arası rastgele sayı üretir.
    displayMessage("Tahmin Ediliyor...");                                             // message kısmında tahmin ediliyor yazar.
    document.querySelector(".message").style.fontSize = "2.5rem";
    tahminhakkı = 5;  
    kalanHak("Kalan hak :" + " " + tahminhakkı);
    document.querySelector(".score").textContent ="Skor :" + " " + score;              
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";                                      // Kısacası herşey en baştaki hale döner.
    document.querySelector("body").style.backgroundColor ="#222";
    document.querySelector(".kazan").textContent = "";
    }

    // EĞER SKOR 100 Ü GEÇERSE BİŞEY OLACAK

   