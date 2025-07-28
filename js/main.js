
  const menuToggle = document.getElementById('menuToggle');
const menuList = document.getElementById('menuList');
const menuChild = document.querySelector('.icon span:nth-child(2)')

  // عند الضغط على الأيقونة، يظهر أو يختفي
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // يمنع غلق القائمة فوراً عند الضغط على الأيقونة
    menuList.classList.toggle('show');
    menuChild.classList.toggle('show');
  });

  // إذا ضغط المستخدم في أي مكان آخر، نخفي القائمة
  document.addEventListener('click', (e) => {
    if (!menuList.contains(e.target) && !menuToggle.contains(e.target)) {
        menuList.classList.remove('show');
         menuChild.classList.toggle('show');
    }
  });

//   
// زر الرجوع للأعلى
const backToTopBtn = document.getElementById("backToTop");

// عند التمرير لأسفل 700px نظهر الزر
window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// عند الضغط على الزر نصعد لأعلى بسلاسة
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


