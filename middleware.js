var middleware = { //bir obje oluşturalım
    requireAuthentication : function(req, res, next){ //isimsiz fonksiyon, içerisine req, res, next isteklerimizi tanımladık. next callback fonksiyondur.
        console.log("özel root girildi...");
        next(); //next dedikki ilerleyebilelim
    },
    logger : function(req, res, next){ //yapacağı sey girilen herhangi bir metot varsa daha doğru girilen herhangi bir root varsa onun bize metodun adını versin. hangi metotla request çağırıldığını göstersin gibi 
        console.log(req.method + " " + req.originalUrl);// hangi istediğin geldiğini gösterecek
         /* biz burada herhangi bir mesaj yazdırmaya bilirdik. burada database işlemi de yaptırabilirdik, session işlemi de yaptırabilirdik. Birçok işlemi burada yaptırabilirdik. Bu da bize middleware ne kadar güçlü ve ne kadar yetkili bir katman olduğunu söylüyor. */
         next();
    }
}

module.exports = middleware;