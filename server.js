/**
 * ilk yapmamız gereken express projemize aktarmak:
 */

 var express = require("express");
 var middleware = require("./middleware") //bulunduğum klasörün altında bulunan middleware  isimli dosyayı buraya import et
 var app = express();  //burada fonks olarak kullanmak icin
 var port = 3000;

 //root hali   localhost/3000 
 /*
app.get("/", function(req, res){
    res.send("Merhaba Express !!!"); // bu aşamdan sonra server.jsi kapatıp tekrar acıyoruz
})
*/

//----------------middleware-------------------------------------
/* Middleware 2 şekilde tanımlayabiliyoruz. Birincisi application seviyesinde 2.si root seviyesinde 
Application seviyesinde olduğu zaman herbir tanımlanan rootlar (app.get... gibi) bundan etkilenir yani hepsinde geçerli olur.
Application seviyesinde tanımlarken rootların en üstünde olmalı tanımlama
*/

//bu yazacağımız ifadeden sonra yukarıdaki satırı kaldırabiliriz


app.use(middleware.logger); //app. seviyesinde 

app.get("/hakkimda",middleware.requireAuthentication, function(req, res){  //istek içinde root halinde.
    res.send("Hakkımda sayfası !!!"); //eğer hakkimda istediği gelirse. tarayıcıda localhost:3000/hakkimda diyerek çalıştırıyoruz
})

//console.log(__dirname);  // bulunduğumuz klasörün yolunu veren komut

app.use(express.static(__dirname + '/public'));  //burada istediğiniz gibi bir yönlendirmek yaparak istediğiniz gibi çağırabilirsiniz.





//çalışması için
app.listen(port, function(){  //bağlandıktan sonra bize mesaj versin
    console.log("Express server" + port+  "nolu portta çalışıyor...");
}); //3000 nolu port    bu şekilde localhost:3000 diye çalıştırırsak cannot get/ ifadesiyle karşılacağız
//nedeni : herhangi bir şekilde http requesti tanımlamamış olmamızdan kaynaklı.yani get yapıyoruz.
//biz burada herhangi bir şekilde url yazıp entera bastığımızda sunucuya bir get istediği gönderiyoruz.
//herhangi bir get ile bir tanımlama yapmadığımız için böyle bir ifadeyi aldık. şimdi üste ekleyelim app.geti...


/**
 * Gördüğünüz gibi express de bir istek oluşturmak, bir isteği karşılamak yönlendirme işlemi yapmak gerçekten kolay
 * özellikle kendinize ait web sunucusunu baştan oluşturmak oldukça mükemmel kolaylıkla yapılan bir işlem.
 */


