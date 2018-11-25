function urun_ekle(ad, fiyat, link, resim) {
    $.ajax({
        url: "sepet/Urun_Ekle",
        data: { "resim": resim, "urun_adi": ad, "fiyat": fiyat, "url": link },
        success: function (response) {
            document.getElementById("demo").innerHTML = "Eklendi";
        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
};

function post_func() {
    var arr = [];
    var product = document.getElementById("aranan_kelime").value
    $.ajax({
        url: "http://fiyatkontrol.tk/migros",
        xhrFields: {
            withCredentials: false
        },
        data: { "product-name": product },
        success: function (response) {
            document.getElementById("tbl1").style.visibility = "visible";
            var table = document.getElementById("tbl1");
            var row = table.insertRow();
            for (var i in response) {
                arr.push(["<img height='100' width='100' src=" + response[i].resim + " >", response[i].urun, response[i].fiyat + " TL", "<a href=" + response[i].link + ">Git</a>"])
                var row = table.insertRow();
                var cell1 = row.insertCell();
                var cell2 = row.insertCell();
                var cell3 = row.insertCell();
                var cell4 = row.insertCell();
                cell1.innerHTML = "<img height='100' width='100' src=" + response[i].resim + " >";
                cell2.innerHTML = response[i].urun;
                cell3.innerHTML = response[i].fiyat;
                var yazi = `<button onclick = "urun_ekle('${response[i].urun}','${response[i].fiyat}','${response[i].link}','${response[i].resim}')">Sepete Ekle</button>`;
                cell4.innerHTML = yazi;
            

                //"<a href='/Sepet/urun_ekle?url=" + response[i].link + "&fiyat=" + response[i].fiyat + "&resim=" + response[i].resim + "&urun_adi=" + response[i].urun + "'>Git</a>";
                 
            }
        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
}
function post_func2() {
    var arr = [];
    var product = document.getElementById("aranan_kelime").value
    $.ajax({
        url: "http://fiyatkontrol.tk/carrefoursa",
        data: { "product-name": product },
        xhrFields: {
            withCredentials: false
        },
        success: function (response) {
            document.getElementById("tbl2").style.visibility = "visible";
            var table = document.getElementById("tbl2");
            var row = table.insertRow();
            for (var i in response) {
                arr.push(["<img height='100' width='100' src=" + response[i].resim + ">", response[i].urun, response[i].fiyat + " TL", "<a href=" + response[i].link + ">Git</a>"])
                var row = table.insertRow();
                var cell1 = row.insertCell();
                var cell2 = row.insertCell();
                var cell3 = row.insertCell();
                var cell4 = row.insertCell();
                cell1.innerHTML = "<img height='100' width='100' src=" + response[i].resim + " >";
                cell2.innerHTML = response[i].urun;
                cell3.innerHTML = response[i].fiyat;
                var yazi = `<button onclick = "urun_ekle('${response[i].urun}','${response[i].fiyat}','${response[i].link}','${response[i].resim}')">Sepete Ekle</button>`;
                cell4.innerHTML = yazi;

            }

        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
}
function Islogin() {
    $.ajax({
        async: "false",
        url: "/Home/Islogin",
        data: { "product-name": 1 },
        success: function (response) {
            var deneme = response
            if (deneme === true) {
                post_func();
                post_func2();
            } else {
                document.getElementById("demo2").innerHTML = "Lütfen Giriş Yapınız";
            }

        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
}



