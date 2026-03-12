/* ============================================================
   大地塾｜暗号資産スクール — Interactive Logic
   ============================================================ */

window.initDaichiScripts = function () {
  // ──────────────────────────────────────
  // 1. Scroll Fade-In (IntersectionObserver)
  // ──────────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-in:not(.is-observed)');
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

  fadeEls.forEach(el => {
    el.classList.add('is-observed');
    fadeObserver.observe(el);
  });

  // ──────────────────────────────────────
  // 2. Count-Up Animation
  // ──────────────────────────────────────
  const counters = document.querySelectorAll('[data-count]:not(.is-observed)');
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
  if (statsSection && !statsSection.classList.contains('is-observed')) {
    statsSection.classList.add('is-observed');
    countObserver.observe(statsSection);
  }

  function animateCounters() {
    counters.forEach(counter => {
      counter.classList.add('is-observed');
      const target = parseInt(counter.getAttribute('data-count'), 10);
      const duration = 2000;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
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
  const faqItems = document.querySelectorAll('.faq-item:not(.is-observed)');

  faqItems.forEach(item => {
    item.classList.add('is-observed');
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const inner = item.querySelector('.faq-answer-inner');

    if (btn && answer && inner) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        // Close all
        document.querySelectorAll('.faq-item').forEach(otherItem => {
          otherItem.classList.remove('is-open');
          const otherBtn = otherItem.querySelector('.faq-question');
          const otherAns = otherItem.querySelector('.faq-answer');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAns) otherAns.style.maxHeight = '0';
        });

        // Toggle current
        if (!isOpen) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = inner.scrollHeight + 'px';
        }
      });
    }
  });

  // ──────────────────────────────────────
  // 4. Header scroll effect
  // ──────────────────────────────────────
  const header = document.getElementById('header');
  if (header && !window._headerScrollBound) {
    window._headerScrollBound = true;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  // ──────────────────────────────────────
  // 5. Mobile Menu Toggle
  // ──────────────────────────────────────
  const menuToggle = document.getElementById('menuToggle');
  const headerNav = document.getElementById('headerNav');
  const siteHeader = document.getElementById('header');

  if (menuToggle && headerNav && !menuToggle.classList.contains('is-observed')) {
    menuToggle.classList.add('is-observed');
    menuToggle.addEventListener('click', () => {
      headerNav.classList.toggle('is-open');
      const isOpen = headerNav.classList.contains('is-open');
      menuToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
      menuToggle.classList.toggle('is-active');

      if (siteHeader) {
        siteHeader.classList.toggle('menu-open', isOpen);
      }
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

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

  if (stickyCta && heroSection && !stickyCta.classList.contains('is-observed')) {
    stickyCta.classList.add('is-observed');
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
  document.querySelectorAll('a[href^="#"]:not(.is-observed)').forEach(anchor => {
    anchor.classList.add('is-observed');
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

  if (voiceGrid && voicePrev && voiceNext && !voiceGrid.classList.contains('is-observed')) {
    voiceGrid.classList.add('is-observed');
    const scrollAmount = 340;

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

    setTimeout(updateArrows, 100);
    if (!window._voiceResizeBound) {
      window._voiceResizeBound = true;
      window.addEventListener('resize', updateArrows);
    }
  }

  // Modal logic
  const voiceModal = document.getElementById('voiceModal');
  const voiceModalBody = document.getElementById('voiceModalBody');
  const voiceModalClose = document.getElementById('voiceModalClose');
  const readMoreBtns = document.querySelectorAll('.voice-read-more:not(.is-observed)');

  if (voiceModal && voiceModalBody) {
    const closeModal = () => {
      voiceModal.close();
      document.body.style.overflow = '';
    };

    if (voiceModalClose && !voiceModalClose.classList.contains('is-observed')) {
      voiceModalClose.classList.add('is-observed');
      voiceModalClose.addEventListener('click', closeModal);
    }

    if (!window._voiceModalOutsideBound) {
      window._voiceModalOutsideBound = true;
      voiceModal.addEventListener('click', (e) => {
        if (e.target === voiceModal) {
          closeModal();
        }
      });
    }

    readMoreBtns.forEach((btn, index) => {
      btn.classList.add('is-observed');
      const wrapper = btn.parentElement.previousElementSibling;
      const card = btn.closest('.voice-card');

      if (wrapper && wrapper.classList.contains('voice-text-wrapper')) {
        const textEl = wrapper.querySelector('.voice-text');
        if (textEl && textEl.scrollHeight <= 100) {
          btn.parentElement.style.display = 'none';
          wrapper.style.maxHeight = 'none';
        }

        btn.addEventListener('click', () => {
          if (card) {
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
};

// 初回ロード用
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.initDaichiScripts);
} else {
  window.initDaichiScripts();
}
