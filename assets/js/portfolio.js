/**
 * PORTFOLIO CONTROLLER
 * Filter tabs functionality and dynamic project preview modal
 */

(function () {
  'use strict';

  // Project Detailed Data
  const projectDetails = {
    '1': {
      title: 'Lumina Brand Identity & Visual System',
      category: 'Graphic Design',
      tools: 'Adobe Illustrator, Photoshop, Figma',
      year: '2026',
      client: 'Lumina Creative Studio',
      image: 'assets/images/portfolio-1.svg',
      description: 'การออกแบบอัตลักษณ์แบรนด์และระบบภาพกราฟิกแบบครบวงจรสำหรับสตูดิโอสร้างสรรค์ มีการกำหนดคู่สี โทนสีฟ้า-เหลืองอันทรงพลัง พร้อมไกด์ไลน์การนำไปใช้งานในสื่อสิ่งพิมพ์และสื่อดิจิทัลทุกรูปแบบ',
      features: ['Logo & Monogram Design', 'Brand Guidelines System', 'Stationery & Mockup Suite', 'Typography & Color Tokens']
    },
    '2': {
      title: 'Urban Echoes Cinematic Short Film',
      category: 'Video Editing',
      tools: 'Premiere Pro, DaVinci Resolve, Audition',
      year: '2025',
      client: 'Creative Media Showcase',
      image: 'assets/images/portfolio-2.svg',
      description: 'ภาพยนตร์สั้นเชิงทดลองที่บอกเล่าเรื่องราวการเคลื่อนไหวของเมืองผ่านภาพและเสียง ออกแบบการตัดต่อแบบจังหวะไดนามิก การเกรดสีระดับภาพยนตร์ (Color Grading) พร้อมการออกแบบเสียงและ Foley บรรยากาศเมืองหลวงในยามค่ำคืน',
      features: ['4K DCI Cinematic Editing', 'Sound Design & Foley Mixing', 'Color Grading & LUT Mastery', 'Visual Rhythm & Pacing']
    },
    '3': {
      title: 'CyberPulse 3D Motion Reel',
      category: 'Motion Graphic',
      tools: 'Cinema 4D, After Effects, Octane Render',
      year: '2026',
      client: 'Pulse Tech Summit',
      image: 'assets/images/portfolio-3.svg',
      description: 'งานโมชันกราฟิกและ 3D แอนิเมชันสำหรับงานเปิดตัวนวัตกรรม ใช้เทคนิคการจำลองอนุภาค (Particle Simulation), ลำแสงเรืองแสง และเรขาคณิตสามมิติที่เคลื่อนไหวสอดประสานกับดนตรีอิเล็กทรอนิกส์แนวไซเบอร์พังค์',
      features: ['3D Geometry & Shader Design', 'Kinetic Typography', 'Particle & Dynamics Physics', 'Audio-reactive Keyframing']
    },
    '4': {
      title: 'Artisan Coffee UX/UI Mobile Experience',
      category: 'UI/UX Design',
      tools: 'Figma, Protopie, Adobe XD',
      year: '2025',
      client: 'Artisan Coffee Roasters',
      image: 'assets/images/portfolio-4.svg',
      description: 'การออกแบบประสบการณ์และส่วนต่อประสานผู้ใช้งานสำหรับแอปพลิเคชันร้านกาแฟพรีเมียม ผ่านกระบวนการ Design Thinking, User Research, Wireframing, High-fidelity UI และ Interactive Micro-interactions',
      features: ['User Persona & Journey Map', 'Interactive Micro-interactions', 'Design System & Component Library', 'Usability Testing & Feedback']
    },
    '5': {
      title: 'Solaris NextGen Web Experience',
      category: 'Web Design',
      tools: 'HTML5, CSS3, JavaScript, Bootstrap 5',
      year: '2026',
      client: 'Solaris Agency',
      image: 'assets/images/portfolio-5.svg',
      description: 'เว็บไซต์ Landing Page สไตล์โมเดิร์นล้ำสมัย ออกแบบด้วยแนวคิด Glassmorphism โทนสีฟ้า-เหลือง รองรับ Responsive เต็มรูปแบบ มีแอนิเมชัน Scroll Reveal และโครงสร้างโค้ดที่มีประสิทธิภาพสูงตามมาตรฐานเว็บสากล',
      features: ['Fully Responsive Frontend', 'Glassmorphism & Gradient Effects', 'Dark / Light Mode Switching', 'Smooth Scroll & Clean Architecture']
    },
    '6': {
      title: 'Synthesia AI Visual Synthesizer',
      category: 'AI Tools',
      tools: 'Midjourney, Stable Diffusion, ComfyUI, Photoshop',
      year: '2026',
      client: 'Experimental Media Lab',
      image: 'assets/images/portfolio-6.svg',
      description: 'โปรเจกต์ทดลองผสานเทคโนโลยี Generative AI เข้ากับความคิดสร้างสรรค์ทางศิลปะ โดยใช้ Prompt Engineering ขั้นสูงและเทคนิค Inpainting/Outpainting เพื่อสร้างคอนเซ็ปต์อาร์ตและภาพจำลองโลกเสมือนจริงในอนาคต',
      features: ['Advanced Prompt Engineering', 'LoRA & ControlNet Pipelines', 'Post-processing & Color Tuning', 'Creative Concept Development']
    }
  };

  // 1. Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      filterBtns.forEach((b) => b.classList.remove('active'));
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');

      portfolioItems.forEach((item) => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // 2. Project Modal Trigger
  const modalEl = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalImg = document.getElementById('modalProjectImg');
  const modalCategory = document.getElementById('modalProjectCategory');
  const modalTools = document.getElementById('modalProjectTools');
  const modalYear = document.getElementById('modalProjectYear');
  const modalClient = document.getElementById('modalProjectClient');
  const modalDesc = document.getElementById('modalProjectDesc');
  const modalFeatures = document.getElementById('modalProjectFeatures');

  const triggerButtons = document.querySelectorAll('[data-bs-target="#projectModal"]');

  triggerButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const projectId = this.getAttribute('data-project-id');
      const data = projectDetails[projectId];

      if (data) {
        if (modalTitle) modalTitle.textContent = data.title;
        if (modalImg) modalImg.src = data.image;
        if (modalCategory) modalCategory.textContent = data.category;
        if (modalTools) modalTools.textContent = data.tools;
        if (modalYear) modalYear.textContent = data.year;
        if (modalClient) modalClient.textContent = data.client;
        if (modalDesc) modalDesc.textContent = data.description;

        if (modalFeatures) {
          modalFeatures.innerHTML = '';
          data.features.forEach((feature) => {
            const li = document.createElement('li');
            li.className = 'mb-1';
            li.innerHTML = `<i class="fas fa-check-circle text-primary me-2"></i> ${feature}`;
            modalFeatures.appendChild(li);
          });
        }
      }
    });
  });
})();
