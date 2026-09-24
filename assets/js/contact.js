/**
 * CONTACT FORM CONTROLLER
 * Form validation and interactive alert feedback
 */

(function () {
  'use strict';

  const contactForm = document.getElementById('portfolioContactForm');
  const formFeedback = document.getElementById('contactFormFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const messageInput = document.getElementById('contactMessage');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        showFeedback('กรุณากรอกข้อมูลให้ครบถ้วนทุกช่อง', 'danger');
        return;
      }

      // Simple email validation regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        showFeedback('รูปแบบอีเมลไม่ถูกต้อง', 'warning');
        return;
      }

      // Simulate sending with loading state
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> กำลังส่งข้อความ...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;

        showFeedback(`ขอบคุณสำหรับข้อความคุณ ${nameInput.value}! ข้อความของคุณถูกส่งเรียบร้อยแล้ว แล้วเราจะติดต่อกลับโดยเร็วที่สุด`, 'success');
        contactForm.reset();
      }, 1000);
    });
  }

  function showFeedback(message, type) {
    if (!formFeedback) return;

    formFeedback.className = `alert alert-${type} mt-3 d-flex align-items-center gap-2 border-0 shadow-sm`;
    
    let iconClass = 'fa-info-circle';
    if (type === 'success') iconClass = 'fa-check-circle';
    if (type === 'danger') iconClass = 'fa-exclamation-triangle';
    if (type === 'warning') iconClass = 'fa-exclamation-circle';

    formFeedback.innerHTML = `
      <i class="fas ${iconClass} fs-5"></i>
      <div>${message}</div>
    `;
    formFeedback.classList.remove('d-none');

    // Auto dismiss after 6 seconds
    setTimeout(() => {
      formFeedback.classList.add('d-none');
    }, 6000);
  }
})();
