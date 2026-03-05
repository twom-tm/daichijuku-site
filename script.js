/* ============================================================
   大地塾｜暗号資産スクール — Interactive Logic
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ──────────────────────────────────────
  // 1. Scroll Fade-In (IntersectionObserver)
  // ──────────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeEls.forEach(el => fadeObserver.observe(el));

  // ──────────────────────────────────────
  // 2. Count-Up Animation
  // ──────────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  let counterAnimated = false;

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counterAnimated) {
        counterAnimated = true;
        animateCounters();
        countObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats');
  if (statsSection) countObserver.observe(statsSection);

  function animateCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'), 10);
      const duration = 2000;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.round(target * ease).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    });
  }

  // ──────────────────────────────────────
  // 3. FAQ Accordion
  // ──────────────────────────────────────
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const inner = item.querySelector('.faq-answer-inner');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('is-open');
        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        otherItem.querySelector('.faq-answer').style.maxHeight = '0';
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = inner.scrollHeight + 'px';
      }
    });
  });

  // ──────────────────────────────────────
  // 4. Header scroll effect
  // ──────────────────────────────────────
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // ──────────────────────────────────────
  // 5. Mobile Menu Toggle
  // ──────────────────────────────────────
  const menuToggle = document.getElementById('menuToggle');
  const headerNav = document.getElementById('headerNav');
  const siteHeader = document.getElementById('header');

  if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', () => {
      headerNav.classList.toggle('is-open');
      const isOpen = headerNav.classList.contains('is-open');
      menuToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
      // Animate hamburger
      menuToggle.classList.toggle('is-active');

      // Expand header to cover screen and prevent scrolling
      if (siteHeader) {
        siteHeader.classList.toggle('menu-open', isOpen);
      }
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on link click
    headerNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        headerNav.classList.remove('is-open');
        menuToggle.classList.remove('is-active');
        if (siteHeader) siteHeader.classList.remove('menu-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ──────────────────────────────────────
  // 6. Sticky CTA (Mobile)
  // ──────────────────────────────────────
  const stickyCta = document.getElementById('stickyCta');
  const heroSection = document.getElementById('hero');

  if (stickyCta && heroSection) {
    const stickyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          stickyCta.classList.add('is-visible');
        } else {
          stickyCta.classList.remove('is-visible');
        }
      });
    }, { threshold: 0 });

    stickyObserver.observe(heroSection);
  }

  // ──────────────────────────────────────
  // 7. Smooth scroll for nav links
  // ──────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ──────────────────────────────────────
  // 8. Voice Slider & Modal
  // ──────────────────────────────────────
  const voiceGrid = document.getElementById('voiceGrid');
  const voicePrev = document.getElementById('voicePrev');
  const voiceNext = document.getElementById('voiceNext');

  if (voiceGrid && voicePrev && voiceNext) {
    const scrollAmount = 340; // 320px card + 20px gap

    const updateArrows = () => {
      voicePrev.disabled = voiceGrid.scrollLeft <= 0;
      voiceNext.disabled = voiceGrid.scrollLeft >= voiceGrid.scrollWidth - voiceGrid.clientWidth - 5;
    };

    voiceGrid.addEventListener('scroll', updateArrows, { passive: true });

    voicePrev.addEventListener('click', () => {
      voiceGrid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    voiceNext.addEventListener('click', () => {
      voiceGrid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Initial check
    setTimeout(updateArrows, 100);
    window.addEventListener('resize', updateArrows);
  }

  // Modal logic
  const voiceModal = document.getElementById('voiceModal');
  const voiceModalBody = document.getElementById('voiceModalBody');
  const voiceModalClose = document.getElementById('voiceModalClose');
  const readMoreBtns = document.querySelectorAll('.voice-read-more');

  if (voiceModal && voiceModalBody) {
    const closeModal = () => {
      voiceModal.close();
      document.body.style.overflow = '';
    };

    if (voiceModalClose) voiceModalClose.addEventListener('click', closeModal);

    // Close on click outside the dialog
    voiceModal.addEventListener('click', (e) => {
      if (e.target === voiceModal) {
        closeModal();
      }
    });

    readMoreBtns.forEach((btn, index) => {
      const wrapper = btn.parentElement.previousElementSibling;
      const card = btn.closest('.voice-card');

      console.log(`Checking voice btn ${index}:`, { hasWrapper: !!wrapper, isTextWrapper: wrapper?.classList.contains('voice-text-wrapper') });

      if (wrapper && wrapper.classList.contains('voice-text-wrapper')) {
        const textEl = wrapper.querySelector('.voice-text');
        // Hide button if text is short
        if (textEl && textEl.scrollHeight <= 100) {
          btn.parentElement.style.display = 'none';
          wrapper.style.maxHeight = 'none';
        }

        btn.addEventListener('click', () => {
          console.log(`Voice btn ${index} clicked`);
          if (card) {
            // Clone the card's content except the read-more button
            const metaHtml = card.querySelector('.voice-meta') ? card.querySelector('.voice-meta').outerHTML : '';
            const titleHtml = card.querySelector('.voice-title') ? card.querySelector('.voice-title').outerHTML : '';
            const textHtml = textEl ? textEl.outerHTML : '';

            voiceModalBody.innerHTML = `
              ${metaHtml}
              ${titleHtml}
              ${textHtml}
            `;

            voiceModal.showModal();
            document.body.style.overflow = 'hidden';
          }
        });
      }
    });
  }

});
