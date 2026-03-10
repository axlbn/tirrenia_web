(() => {
  const header = document.querySelector('.site-header .navbar');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinksContainer.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof Node)) return;

      if (
        navLinksContainer.classList.contains('open') &&
        !navLinksContainer.contains(target) &&
        !menuToggle.contains(target)
      ) {
        navLinksContainer.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const scrollToTarget = (hash) => {
    const target = document.querySelector(hash);
    if (!target) return;

    const offset = header ? header.offsetHeight + 8 : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = link.getAttribute('href');
      if (!href) return;

      scrollToTarget(href);

      if (navLinksContainer && navLinksContainer.classList.contains('open')) {
        navLinksContainer.classList.remove('open');
        menuToggle?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const internalButtons = document.querySelectorAll('a.btn-secondary[href^="#"]');
  internalButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const href = btn.getAttribute('href');
      if (href) scrollToTarget(href);
    });
  });

  const sectionIds = ['appartamento', 'gallery', 'servizi', 'posizione', 'disponibilita', 'regole', 'contatti'];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (!href) return;
          link.classList.toggle('active', href === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: 0.1 }
  );

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });

  const toggleScrolledClass = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 10);
  };

  toggleScrolledClass();
  window.addEventListener('scroll', toggleScrolledClass, { passive: true });

  const galleryButtons = Array.from(document.querySelectorAll('.gallery-item'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-nav.prev');
  const nextBtn = document.querySelector('.lightbox-nav.next');
  let currentIndex = 0;

  if (lightbox && lightboxImage && lightboxCaption && galleryButtons.length) {
    const galleryData = galleryButtons.map((button) => {
      const img = button.querySelector('img');
      return {
        src: img?.src || '',
        alt: img?.alt || 'Immagine della galleria'
      };
    });

    const renderSlide = (index) => {
      const item = galleryData[index];
      if (!item) return;
      lightboxImage.src = item.src;
      lightboxImage.alt = item.alt;
      lightboxCaption.textContent = item.alt;
    };

    const openLightbox = (index) => {
      currentIndex = index;
      renderSlide(currentIndex);
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    const goNext = () => {
      currentIndex = (currentIndex + 1) % galleryData.length;
      renderSlide(currentIndex);
    };

    const goPrev = () => {
      currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
      renderSlide(currentIndex);
    };

    galleryButtons.forEach((button, index) => {
      button.addEventListener('click', () => openLightbox(index));
    });

    closeBtn?.addEventListener('click', closeLightbox);
    nextBtn?.addEventListener('click', goNext);
    prevBtn?.addEventListener('click', goPrev);

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (event) => {
      if (!lightbox.classList.contains('open')) return;

      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowRight') goNext();
      if (event.key === 'ArrowLeft') goPrev();
    });
  }

  const bookingForm = document.getElementById('booking-request-form');
  const bookingStatus = document.getElementById('booking-form-status');

  if (bookingForm) {
    const animaliSelect = document.getElementById('animali');
    const numeroAnimaliInput = document.getElementById('numero-animali');

    const syncAnimaliFields = () => {
      if (!animaliSelect || !numeroAnimaliInput) return;
      const hasPets = animaliSelect.value === 'Si';
      numeroAnimaliInput.disabled = !hasPets;
      numeroAnimaliInput.min = hasPets ? '1' : '0';
      if (hasPets && Number(numeroAnimaliInput.value) < 1) numeroAnimaliInput.value = '1';
      if (!hasPets) numeroAnimaliInput.value = '0';
    };

    syncAnimaliFields();
    animaliSelect?.addEventListener('change', syncAnimaliFields);

    bookingForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!bookingForm.checkValidity()) {
        bookingForm.reportValidity();
        return;
      }

      const formData = new FormData(bookingForm);
      const nome = String(formData.get('nome') || '').trim();
      const email = String(formData.get('email') || '').trim();
      const checkin = String(formData.get('checkin') || '').trim();
      const checkout = String(formData.get('checkout') || '').trim();
      const ospiti = String(formData.get('ospiti') || '').trim();
      const animali = String(formData.get('animali') || 'No').trim();
      const numeroAnimali = String(formData.get('numero_animali') || '0').trim();
      const messaggio = String(formData.get('messaggio') || '').trim();

      if (checkin && checkout) {
        const checkinDate = new Date(checkin);
        const checkoutDate = new Date(checkout);
        if (checkoutDate <= checkinDate) {
          if (bookingStatus) {
            bookingStatus.textContent = 'La data di check-out deve essere successiva al check-in.';
          }
          return;
        }
      }

      if (animali === 'Si' && Number(numeroAnimali) < 1) {
        if (bookingStatus) {
          bookingStatus.textContent = 'Se ci sono animali, indica almeno 1 nel campo numero animali.';
        }
        numeroAnimaliInput?.focus();
        return;
      }

      const subject = `Richiesta prenotazione Casa sul Mare - ${nome || 'Nuovo ospite'}`;
      const body = [
        'Ciao Cinzia,',
        '',
        'vorrei richiedere una prenotazione per Casa sul Mare.',
        '',
        `Nome: ${nome}`,
        `Email: ${email}`,
        `Check-in: ${checkin}`,
        `Check-out: ${checkout}`,
        `Numero ospiti: ${ospiti}`,
        `Animali domestici presenti: ${animali}`,
        `Numero animali: ${animali === 'Si' ? numeroAnimali : '0'}`,
        '',
        'Messaggio:',
        messaggio || '(nessun messaggio aggiuntivo)',
        '',
        'Grazie.'
      ].join('\n');

      const mailtoUrl = `mailto:tacchella.affitii@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;

      if (bookingStatus) {
        bookingStatus.textContent = 'Apertura del client email in corso.';
      }
    });
  }
})();