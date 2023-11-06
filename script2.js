// alert("selamat datang..");
// var lagi = true;

// while (lagi === true) {
//   var nama = prompt("masukkan nama");
//   alert("Halo " + nama);

//   lagi = confirm("coba lagi?");
// }

// alert("terimakasih..");

// toggle class active
// const navbarNav = document.querySelector(".navbar-nav");
// // ketika hamburgermenu diklik
// document.querySelector("#hamburger-menu").onclick = (e) => {
//   e.preventDefault();
//   navbarNav.classList.toggle("active");
// };

// // klik di luar sidebar untuk menghilangkan nav
// const hamburger = document.querySelector("#hamburger-menu");

// document.addEventListener("click", function (e) {
//   if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove("active");
//   }
// });

{
    /* <button
    type="button"
    onclick="document.getElementById('about).style.display='block'"
  >
    Click Me!
  </button>; */
  }
  
  // function toggleParagraph() {
  //   const sejarahParagraph = document.getElementById("sejarah-paragraph");
  //   if (
  //     sejarahParagraph.style.display === "block" ||
  //     sejarahParagraph.style.display === ""
  //   ) {
  //     sejarahParagraph.style.display = "none"; // Sembunyikan paragraf jika sedang tampil
  //   } else {
  //     sejarahParagraph.style.display = "block"; // Tampilkan paragraf jika sedang tersembunyi
  //   }
  // }
  
  function toggleParagraph(event) {
    event.preventDefault();
    const sejarahParagraph = document.getElementById("sejarah");
    if (
      sejarahParagraph.style.display === "none" ||
      sejarahParagraph.style.display === ""
    ) {
      sejarahParagraph.style.display = "block";
    } else {
      sejarahParagraph.style.display = "none";
    }
  }
  
  // JS LAYANAN
  function toggleLayanan(event, id) {
    event.preventDefault();
    const layananText = document.getElementById("layananText");
    const layananTur = document.getElementById("layanan_tur");
    const layananText2 = document.getElementById("layananText2");
    const virtualTur = document.getElementById("virtual_tur");
    const layananText3 = document.getElementById("layananText3");
    const lokarya = document.getElementById("lokarya");
    const layananText4 = document.getElementById("layananText4");
    const seminar = document.getElementById("seminar");
    const layananText5 = document.getElementById("layananText5");
    const talkshow = document.getElementById("talkshow");
    const layananText6 = document.getElementById("layananText6");
    const buku = document.getElementById("buku");
  
    if (id === "layanan") {
      if (
        layananText.style.display === "none" ||
        layananText.style.display === ""
      ) {
        layananText.style.display = "block";
        layananTur.style.display = "block";
      } else {
        layananText.style.display = "none";
        layananTur.style.display = "none";
      }
    }
  
    if (id === "virtual") {
      if (
        layananText2.style.display === "none" ||
        layananText2.style.display === ""
      ) {
        layananText2.style.display = "block";
        virtualTur.style.display = "block";
      } else {
        layananText2.style.display = "none";
        virtualTur.style.display = "none";
      }
    }
  
    if (id === "lokarya") {
      if (
        layananText3.style.display === "none" ||
        layananText3.style.display === ""
      ) {
        layananText3.style.display = "block";
        lokarya.style.display = "block";
      } else {
        layananText3.style.display = "none";
        lokarya.style.display = "none";
      }
    }
  
    if (id === "seminar") {
      if (
        layananText4.style.display === "none" ||
        layananText4.style.display === ""
      ) {
        layananText4.style.display = "block";
        seminar.style.display = "block";
      } else {
        layananText4.style.display = "none";
        seminar.style.display = "none";
      }
    }
  
    if (id === "talkshow") {
      if (
        layananText5.style.display === "none" ||
        layananText5.style.display === ""
      ) {
        layananText5.style.display = "block";
        talkshow.style.display = "block";
      } else {
        layananText5.style.display = "none";
        talkshow.style.display = "none";
      }
    }
  
    if (id === "buku") {
      if (
        layananText6.style.display === "none" ||
        layananText6.style.display === ""
      ) {
        layananText6.style.display = "block";
        buku.style.display = "block";
      } else {
        layananText6.style.display = "none";
        buku.style.display = "none";
      }
    }
  }
  
  // JS KOLEKSI
  function toggleKoleksi(event, id) {
    event.preventDefault();
    const koleksiText = document.getElementById("koleksiText");
    const lukisanGaruda = document.getElementById("lukisan_garuda");
    const koleksiText2 = document.getElementById("koleksiText2");
    const lukisanIbu = document.getElementById("lukisan_ibu");
    const koleksiText3 = document.getElementById("koleksiText3");
    const lukisanKuda = document.getElementById("lukisan_kuda");
    const koleksiText4 = document.getElementById("koleksiText4");
    const lukisanKakak = document.getElementById("lukisan_kakak");
  
    if (id === "garuda") {
      if (
        koleksiText.style.display === "none" ||
        koleksiText.style.display === ""
      ) {
        koleksiText.style.display = "block";
        lukisanGaruda.style.display = "block";
      } else {
        koleksiText.style.display = "none";
        lukisanGaruda.style.display = "none";
      }
    }
  
    if (id === "ibu") {
      if (
        koleksiText2.style.display === "none" ||
        koleksiText2.style.display === ""
      ) {
        koleksiText2.style.display = "block";
        lukisanIbu.style.display = "block";
      } else {
        koleksiText2.style.display = "none";
        lukisanIbu.style.display = "none";
      }
    }
  
    if (id === "kuda") {
      if (
        koleksiText3.style.display === "none" ||
        koleksiText3.style.display === ""
      ) {
        koleksiText3.style.display = "block";
        lukisanKuda.style.display = "block";
      } else {
        koleksiText3.style.display = "none";
        lukisanKuda.style.display = "none";
      }
    }
  
    if (id === "kakak") {
      if (
        koleksiText4.style.display === "none" ||
        koleksiText4.style.display === ""
      ) {
        koleksiText4.style.display = "block";
        lukisanKakak.style.display = "block";
      } else {
        koleksiText4.style.display = "none";
        lukisanKakak.style.display = "none";
      }
    }
  }
  
