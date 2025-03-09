
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  
  // إخفاء جميع محتويات الدروس عند التحميل
  hideAllContents();
  
  // عرض الشاشة الرئيسية فقط
  document.querySelector('#home').style.display = 'block';
  
  // مع زر استكشف الدورات في الصفحة الرئيسية
  document.querySelector('.explore-btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    // إخفاء جميع الأقسام
    hideAllContents();
    
    // عرض قسم الدورات
    document.querySelector('#courses').style.display = 'block';
    
    // تحديث الزر النشط في القائمة
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector('nav a[href="#courses"]').classList.add('active');
    
    // التمرير لأعلى الصفحة
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only prevent default for links with hash
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Get the target section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Hide all sections
        hideAllContents();
        
        // Show the target section
        if (targetSection) {
          targetSection.style.display = 'block';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });
  
  // Function to hide all content sections
  function hideAllContents() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  }
  
  // تم إزالة كود إضافة رسائل "قريباً" ليتمكن المستخدمون من الوصول لجميع الدورات
  const cssCard = document.querySelector('#css-course');
  const jsCard = document.querySelector('#js-course');
  
  // Smooth scroll for course buttons
  const courseButtons = document.querySelectorAll('.course-card .btn');
  courseButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const parentCard = this.closest('.course-card');
      
      // السماح لجميع الأزرار بالعمل بشكل طبيعي (HTML و CSS و JavaScript)
      console.log("الانتقال إلى الدورة:", this.getAttribute('href'));
    });
  });
  
  // إضافة أحداث النقر لبطاقات أمان الويب
  const securityCards = document.querySelectorAll('.security-card');
  securityCards.forEach(card => {
    const cardTitle = card.querySelector('h3');
    const cardContent = card.querySelector('.security-content');
    
    // إخفاء المحتوى في البداية
    if (cardContent) {
      cardContent.style.display = 'none';
    }
    
    cardTitle.addEventListener('click', function() {
      // Toggle content visibility
      if (cardContent) {
        if (cardContent.style.display === 'none') {
          // Hide all other contents first
          document.querySelectorAll('.security-content').forEach(content => {
            content.style.display = 'none';
          });
          // Show this content
          cardContent.style.display = 'block';
          card.classList.add('active');
        } else {
          cardContent.style.display = 'none';
          card.classList.remove('active');
        }
      }
    });
  });
  
  // عرض/إخفاء محتوى الدروس عند النقر على عناوينها
  const lessonTitles = document.querySelectorAll('.lesson h3');
  lessonTitles.forEach(title => {
    title.addEventListener('click', function() {
      const lessonContent = this.parentElement.querySelectorAll('p, .code-example, .html-explanation, .note');
      
      let isContentVisible = false;
      // Check if content is visible
      lessonContent.forEach(element => {
        if (element.style.display !== 'none') {
          isContentVisible = true;
        }
      });
      
      // Toggle visibility
      lessonContent.forEach(element => {
        element.style.display = isContentVisible ? 'none' : 'block';
      });
      
      // Toggle class for styling
      this.classList.toggle('collapsed', !isContentVisible);
    });
    
    // التشغيل مباشرة لإخفاء المحتوى
    const initialEvent = new Event('click');
    title.dispatchEvent(initialEvent);
  });
  
  // تم تعديل هذا الجزء ليناسب الزر في الصفحة الفرعية (a بدلاً من button)
  const backButton = document.querySelector('.nav-buttons a');
  if (backButton) {
    backButton.addEventListener('click', function(e) {
      // سنترك الرابط يعمل بشكل طبيعي في صفحة html_tutorial.html
      // حيث أنه يحتوي على href="../index.html#courses"
    });
  }
});

// Function to show HTML content
function showHTMLContent() {
  document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
  });
  document.querySelector('#html-content').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to hide HTML content
function hideHTMLContent() {
  document.querySelector('#html-content').style.display = 'none';
  document.querySelector('#courses').style.display = 'block';
}

// Function to show CSS content
function showCSSContent() {
  document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
  });
  document.querySelector('#css-content').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to hide CSS content
function hideCSSContent() {
  document.querySelector('#css-content').style.display = 'none';
  document.querySelector('#courses').style.display = 'block';
}

// Function to show JavaScript content
function showJSContent() {
  document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
  });
  document.querySelector('#js-content').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to hide JavaScript content
function hideJSContent() {
  document.querySelector('#js-content').style.display = 'none';
  document.querySelector('#courses').style.display = 'block';
}


// حماية الموقع ضد inspect element (فحص العناصر)
(function() {
  // تعطيل النقر بزر الفأرة الأيمن
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert("غير مسموح باستخدام زر الفأرة الأيمن على هذا الموقع!");
    return false;
  });
  
  // تعطيل مفاتيح التطوير F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  document.addEventListener('keydown', function(e) {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
      alert("غير مسموح باستخدام أدوات المطور!");
      return false;
    }
    
    // Ctrl+Shift+I أو Ctrl+Shift+J أو Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
      e.preventDefault();
      alert("غير مسموح باستخدام أدوات المطور!");
      return false;
    }
    
    // Ctrl+U (عرض المصدر)
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
      alert("غير مسموح بعرض المصدر!");
      return false;
    }
  });
  
  // إرسال إشعار عند محاولة فتح أدوات المطور
  function detectDevTools() {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;
    
    if (widthThreshold || heightThreshold) {
      document.body.innerHTML = `
        <div style="text-align: center; padding: 50px; font-family: 'Cairo', sans-serif;">
          <h1>تم اكتشاف محاولة استخدام أدوات المطور</h1>
          <p>غير مسموح باستخدام أدوات المطور على هذا الموقع.</p>
          <button onclick="location.reload()">إعادة تحميل الصفحة</button>
        </div>
      `;
    }
  }
  
  // فحص أدوات المطور كل ثانية
  setInterval(detectDevTools, 1000);
  
  // تعطيل التحديد للنصوص
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
  });
  
  // منع السحب والإفلات
  document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
  });
  
  // إضافة رسالة تحذير عند مغادرة الصفحة
  window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    e.returnValue = '';
    return '';
  });
  
  // تعديل بيانات المتصفح Console
  console.log = function() { 
    console.error('محاولة استخدام وحدة التحكم غير مسموحة!');
    window.location.reload(); 
  };
  console.warn = console.log;
  console.error = console.log;
  console.info = console.log;
  console.debug = console.log;
  console.clear = console.log;
  
  // حل مشكلة courseButtons
  const courseButtons = document.querySelectorAll('.course-card .btn');
  if (courseButtons.length > 0) {
    courseButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        const parentCard = this.closest('.course-card');
        console.log("الانتقال إلى الدورة:", this.getAttribute('href'));
      });
    });
  }
})();
