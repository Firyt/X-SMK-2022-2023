// document.write("<h3>Hello ini dari external</h3>");

// //tipe data number
// document.write(100);
// document.write("<br>");
// document.write(3.14);
// document.write("<br>");
// document.write(0b100001);
// document.write("<br>");
// document.write(0o17);
// document.write("<br>");
// document.write(0x1a);
// document.write("<br>");
// document.write(10+12);

// //tipe data string( kata, kalimat, karakter)
// document.write("ini adalah tipe data string<br>");
// document.write("Wysis<br>");
// document.write("A<br>");
// document.write("Rumah saya di "+"Bogor");
// document.write("<br>");
// document.write("Umur saya adalah "+16);
// document.write("<br>");

// //tipe data boolean (true or false)
// document.write(true);
// document.write("<br>");
// document.write(false);
// document.write("<br>");

// //variable (tempat untuk menyimpan data / nilai)
 
// var nama_lengkap = "Adryan";
// var tempat= "Bogor";
// var Nomer= "081289643790";
// var Hobi= "Bermain Game";
// var TB= "181cm";

// document.write("nama saya adalah " + nama_lengkap + "<br>");
// document.write("Saya tinggal di " + tempat + "<br>");
// document.write("No telpon "+Nomer + "<br>");
// document.write("Hobi saya adalah " + Hobi + "<br>");
// document.write("Tinggi badan saya adalah " + TB + "<br>");
//..................................................................................................................................
// let sisi = 5;
// let luas;
// //luas persegi
// luas = sisi*sisi;
// document.write("jadi luas persegi yang sisinya " + sisi + " adalah " +luas + "<br>" );

// //luas persegi panjang (panjang x lebar)
// let panjang = 10;
// let lebar = 5;
// let ZZZ;

// //luas persegi panjang
// ZZZ = panjang*lebar;
// document.write("jadi hasil luas persegi panjang yang panjangnya "+panjang+" dan lebar "+lebar+" adalah " +ZZZ+ "<br>")

// //luas lingkaran(pi x r x r)
// let r = 10;
// const pi = 3.14;
// let iii;

// //luas lingkaran
// iii = pi*r**2;
// document.write("jadi hasil luas lingkarang yang jari jari nya "+r+" adalah "+iii+"<br>" )

// //luas segi tiga (1/2 x alas x tinggi)
// let alas = 3;
// let tinggi = 10;
// let ccc;

// //luas segitiga
// ccc = 0.5*alas*tinggi;
// document.write("Hasil dari luas segitiga yang alasnya "+alas+" dan tinggi nya "+tinggi+" adalah " +ccc+ "<br>")

// let nama = prompt("Masukan nama");
// let usia = prompt("Masukan usia");

// if(usia < 18){
//     //Jika kondisi True
//     document.write(nama + " belum boleh bawa motor");
// }else{
//     //Jika konsisi False
//     document.write(nama + " sudah boleh bawa motor");
// }

// let nilai = prompt("Masukan nilai anda");
//..................................................................................................................................
// if(nilai >= 90 && nilai <=100){
//     document.write("Anak Baik");
// }else if(nilai >= 80 && nilai <=89){
//     document.write("Baik");
// }else if(nilai >= 70 && nilai <=79){
//     document.write("Cukup Baik");
// }else if(nilai >= 60 && nilai <=69){
//     document.write("Cukup");
// }else{
//     document.write("Tidak Baik");
// }
//..................................................................................................................................
// let cuaca= prompt("Masukan Cuaca");

// switch(cuaca){
//     case "hujan":
//         document.write("Berangkat Naik Mobil");
//         break;
//     case "panas":
//         document.write("Berangkat Naik Motor");
//         break;
//     case "adem":
//         document.write("Berangkat Jalan Kaki");
//     default:
//         document.write("Salah Masukan Cuaca");
// }
//............................................
// let alamat = prompt("Masukan alamat");
// let cuaca = prompt("Masukan cuaca");

// if(cuaca == "Hujan"){
//     document.write(nama + " " + alamat + " " + cuaca + " " + "maka kesekolah naik mobil");
// }else if(cuaca == "Panas"){
//     document.write(nama + " " + alamat + " " + cuaca + " " + "maka kesekolah naik motor");
// }else if(cuaca == "Adem"){
//     document.write(nama + " " + alamat + " " + cuaca + " " + "maka kesekolah jalan kaki");
// }
//............................................
// let nama = prompt ("Masukan Nama");
// let Kendaraan = prompt ("Masukan Jenis Kendaraan");
// let Km = prompt ("Masukan Kilometer");

// if(Km < 50000){
//     alert(nama + " " + Kendaraan + "" +Km + " " +"Servis ringan");
// }else if(Km >= 50000 && Km <= 100000){
//     alert(nama + " " + Kendaraan + "" +Km + " " +"Servis sedang");
// }else if(Km > 100000){
//     alert(nama + " " + Kendaraan + "" +Km + " " +"Servis Berat");
// }

//..................................................................................................................................
//MATERI 2 MEI 2023
// membuat sebuah "function"

// function hello(){
//     document.write("<h3>Hallo Apakabar???</h3>");

// }


//panggil function
// hello();
// hello();
// hello(); //boleh berkali-
// document.write("<br>");
//............................................
//sama aja, cuma ini " function parameter"

// function hello(nama_depan, nama_belakang){
//     document.write(`hello nama saya adalah ${nama_depan} dan ${nama_belakang}`);
// }
//panggil function
// hello("ahmad", "ariel");
// hello("gio", "rida");
//............................................
//sama aja, cuma ini "nilai value function"

// function tambah(nilai_pertama, nilai_kedua){
//     let hasil = nilai_pertama + nilai_kedua;
//     return hasil;
// }

// document.write(tambah(23,30));
//............................................
//TUGAS
//Function fungsi
function hello(){
    document.write("<h3>Hallo Apakabar???</h3>");

}

hello();
hello();
hello();

document.write("<br>");
document.write("<br>");

//Function parameter
function saya(nama, kelas, alamat, hobi){
    document.write(`hello nama saya  ${nama}, saya kelas ${kelas}, alamat saya di ${alamat}, hobi saya adalah ${hobi}`);

}

saya("Raffi", "X RPL 3", "Depok", "Gaming");

document.write("<br>");
document.write("<br>");

//Nilai Value Function luas segitiga dan lingkaran
function segitiga(a, t){
    let hasil = 0.5 * a * t;
    return hasil;
}

document.write(segitiga (10,40));

document.write("<br>");

function lingkaran(radius){
    let hasil = 3.14 * radius * radius
    return hasil;
}

document.write(lingkaran(10));