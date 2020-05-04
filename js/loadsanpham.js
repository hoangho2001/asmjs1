// tạo ra danh sách đối tượng
loadsanpham();

function loadsanpham() {

    // 1. lay data tu local
    var data = JSON.parse(localStorage.getItem("danhSachSanPham"));


    if (data == null) { 

        data = taosanphammau();
        // luu lai tren local
        localStorage.setItem("danhSachSanPham", JSON.stringify(data));

    }
    else {
        // them funciton vao
        for (let i = 0; i < data.length; i++) {
            data[i] = taoDTSP(data[i].hinhAnh, data[i].ten, data[i].giaGoc, data[i].phanTram, data[i].khuVuc, data[i].id);
        }
    }

    //3. them vao wed

    var html = dsdtsanghtml(data);
    var nodehienthi = document.getElementById("hienthi");
    nodehienthi.innerHTML = html;
}

function onclickduavaogiohang(id) {

    let dataGioHang = new Array();
    dataGioHang = JSON.parse(localStorage.getItem("danhSachGioHang"));

    if (dataGioHang == null)
        dataGioHang = new Array();

    let hang = new Object();
    hang.id = id;
    hang.soluong = 1;

    let vitri = dataGioHang.findIndex(sp => sp.id == id);

    if (vitri >= 0)
        dataGioHang[vitri].soluong++;
    else
        dataGioHang.push(hang);

    localStorage.setItem("danhSachGioHang", JSON.stringify(dataGioHang));

}

function taosanphammau() {
    let dataMau = new Array();
    var sanPhamIp5 = taoDTSP("https://cdn.fptshop.com.vn/Uploads/Originals/2015/12/28/635869123783238651_iphone-5s-5.jpg", "Iphone 5", 5000000, 0.2, "Đắk Lắk");

    dataMau.push(sanPhamIp5);
    dataMau.push(sanPhamIp5);
    var sanPhamIp6 = taoDTSP("https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-hh-600x600-600x600-600x600.jpg", "Iphone 6", 6000000, 0.2, "Đắk Lắk");

    dataMau.push(sanPhamIp6);
    dataMau.push(sanPhamIp6);
    var sanPhamIp7 = taoDTSP("https://cdn.fptshop.com.vn/Uploads/Originals/2017/11/10/636459060731746898_2.jpg", "Iphone 7", 8000000, 0.2, "Đắk Lắk")
    dataMau.push(sanPhamIp7);
    dataMau.push(sanPhamIp7);
    var sanPhamIp8 = taoDTSP("https://bachlongmobile.com/media/catalog/product/cache/2/image/040ec09b1e35df139433887a97daa66f/7/s/7silver_2.jpg", "Iphone 8", 10000000, 0.2, "Đắk Lắk")
    dataMau.push(sanPhamIp8);
    dataMau.push(sanPhamIp8);

    var sanPhamIpx = taoDTSP("https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg", "Iphone X", 14000000, 0.2, "Đắk Lắk")
    dataMau.push(sanPhamIpx);
    dataMau.push(sanPhamIpx);
    var sanPhamIp11 = taoDTSP("https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg", "Iphone 11", 20000000, 0.2, "Đắk Lắk")
    dataMau.push(sanPhamIp11);
    dataMau.push(sanPhamIp11);
    var sanPhamssA10 = taoDTSP("https://cdn.tgdd.vn/Products/Images/42/205773/samsung-galaxy-a10s-green-600x600.jpg", "Samsung Galaxy A10s", 3000000, 0.2, "Đắk Lắk")
    dataMau.push(sanPhamssA10);
    dataMau.push(sanPhamssA10)
    var sanPhamssA30 = taoDTSP("https://cdn.tgdd.vn/Products/Images/42/204403/samsung-galaxy-a30s-green-600x600.jpg", "Samsung Galaxy A30s", 5000000, 0.2, "Đắk Lắk")
    dataMau.push(sanPhamssA30);
    dataMau.push(sanPhamssA30);
    var sanPhamssA50 = taoDTSP("https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-green-600x600.jpg", "Samsung Galaxy A50s", 7000000, 0.2, "Đắk Lắk")
    dataMau.push(sanPhamssA50);
    dataMau.push(sanPhamssA50);
    var sanPhamssA70 = taoDTSP("https://cdn.tgdd.vn/Products/Images/42/203614/samsung-galaxy-a70s-600x600.jpg", "Samsung Galaxy 70s", 9000000, 0.2, "Đắk Lắk")
    dataMau.push(sanPhamssA70);
    dataMau.push(sanPhamssA70);

    return dataMau;
}







// //chuyển đối tượng thành html

// var html = dsdtsanghtml(danhSanhSanpham); 
// var nodehienthi = document.getElementById("hienthi");
// nodehienthi.innerHTML= html;
// var json = JSON.stringify(danhSanhSanpham);

// localStorage.setItem("sanPham",json);

// var jsons = localStorage.getItem("sanPham");

// var doiTuongdaydu = taoDTSP().fromJSON(jsons);