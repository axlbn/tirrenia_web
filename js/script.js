(() => {
  const header = document.querySelector('.site-header .navbar');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const yearEl = document.getElementById('year');
  const langButtons = document.querySelectorAll('.lang-btn');

  const translations = {
    it: {
      metaTitle: 'Casa sul Mare | Tirrenia, Toscana',
      skipLink: 'Vai al contenuto',
      navAria: 'Navigazione principale',
      openMenu: 'Apri menu',
      langLabel: 'Selettore lingua',
      navApartment: 'Appartamento',
      navPhoto: 'Foto',
      navServices: 'Servizi',
      navLocation: 'Posizione',
      navAvailability: 'Disponibilita',
      navRules: 'Regole',
      navContacts: 'Contatti',
      navBook: 'Prenota',
      heroEyebrow: 'Tirrenia, Toscana, Italia',
      heroSubtitle:
        'Appartamento fronte mare con accesso diretto alla spiaggia, immerso nella pineta e pensato per vacanze rilassanti in famiglia.',
      heroBook: 'Prenota su Airbnb',
      heroPhotos: 'Guarda le foto',
      heroStats: ['ospiti', 'camera', 'letti', 'bagno'],
      apartmentKicker: "L'appartamento",
      apartmentTitle: 'Relax fronte mare, a due passi da tutto',
      apartmentP1:
        "Casa sul Mare si trova in un complesso residenziale tranquillo, immerso nella pineta di Tirrenia. L'alloggio offre un soggiorno luminoso con divano letto, angolo cottura completo, TV, climatizzatore, camera matrimoniale e bagno spazioso con lavatrice.",
      apartmentP2:
        "E' la soluzione ideale per chi desidera una vacanza comoda, con accesso diretto alla spiaggia e tutti i servizi essenziali per soggiorni brevi o settimanali.",
      highlightTitles: ['Fronte mare', 'Accesso spiaggia', 'Immerso nella pineta', 'Adatto alle famiglie'],
      highlightTexts: [
        'Posizione privilegiata con brezza marina.',
        'Ingresso diretto alla spiaggia libera e ai bagni vicini.',
        'Ambiente verde e silenzioso, perfetto per staccare.',
        'Spazi funzionali fino a 4 ospiti, pratici e confortevoli.'
      ],
      galleryKicker: 'Galleria foto',
      galleryTitle: 'Scopri Casa sul Mare',
      servicesKicker: 'Servizi',
      servicesTitle: 'Tutto il necessario per una vacanza senza pensieri',
      amenities: [
        'Asciugacapelli, sapone, bidet, gel doccia, acqua calda',
        'Lavatrice e zanzariere',
        'TV',
        'Aria condizionata e riscaldamento',
        'Wi-Fi',
        'Cucina completa e spazio per cucinare',
        'Estintore',
        'Parcheggio gratuito privato',
        'Animali domestici ammessi',
        'Noleggio ombrelloni/lettini e spiaggia libera vicina'
      ],
      bedsKicker: 'Posti letto',
      bedsTitle: 'Distribuzione comoda per 4 ospiti',
      bedsCards: [
        {
          title: 'Camera da letto',
          badge: '1 letto matrimoniale',
          size: 'Dimensioni: <strong>160 x 190 cm</strong>'
        },
        {
          title: 'Soggiorno',
          badge: '1 divano letto',
          size: 'Dimensioni: <strong>140 x 190 cm</strong>'
        }
      ],
      locationKicker: 'Posizione',
      locationTitle: 'Nei pressi di Tirrenia al Calambrone, tra mare e servizi',
      locationDesc:
        'La casa si trova a pochi minuti da Livorno, dal porto e dalle principali vie di collegamento. Perfetta sia per vacanze al mare, sia come base strategica per esplorare Pisa e Firenze.',
      locationItems: [
        '<strong>Livorno:</strong> circa 10 minuti',
        '<strong>Porto:</strong> circa 8 minuti',
        '<strong>Pisa:</strong> circa 25 minuti',
        '<strong>Firenze:</strong> circa 1 ora'
      ],
      locationHospitals: '<strong>Ospedali vicini:</strong> Cisanello, Santa Chiara, Istituto Stella Maris.',
      distanceKicker: 'Distanze',
      distanceTitle: 'Tempi di percorrenza principali',
      distanceTimes: ['10 minuti', '25 minuti', '~ 1 ora', '8 minuti'],
      availabilityKicker: 'Disponibilita',
      availabilityTitle: 'Calendario disponibilita alloggio',
      availabilityDesc: 'Le date occupate non sono selezionabili nel form di prenotazione.',
      availabilityLegend: ['Disponibile', 'Non disponibile'],
      availabilityNote: 'Le disponibilita vengono sincronizzate dal calendario Airbnb.',
      rulesKicker: 'Regole della casa',
      rulesTitle: 'Soggiorno semplice e organizzato',
      rulesHeadings: ['Check-in', 'Check-out', 'Ospiti massimi', 'Biancheria'],
      rulesValues: ['16:00 - 18:00', 'Entro le 10:00', '4 persone', 'Su richiesta: <strong>25 EUR</strong> a persona'],
      hostKicker: 'Host',
      hostTitle: 'Cinzia ti da il benvenuto',
      hostDesc:
        "Host attenta e disponibile, con esperienza nell'accoglienza turistica. Perfetta per chi cerca un riferimento rapido prima e durante il soggiorno.",
      hostMeta: ['<strong>Tasso di risposta:</strong> 100%', '<strong>Tempo di risposta:</strong> entro 1 ora'],
      contactsKicker: 'Contatti',
      contactsTitle: 'Parla direttamente con noi',
      contactCardTitles: ["Per chi chiama dall'estero", "Per chi chiama dall'Italia", 'Email'],
      requestKicker: 'Richiesta via email',
      requestTitle: 'Invia una richiesta di prenotazione',
      requestDesc: 'Compila i dati e apriremo automaticamente la tua email con il messaggio gia preparato.',
      formName: 'Nome e cognome',
      formEmail: 'La tua email',
      formCheckin: 'Check-in',
      formCheckout: 'Check-out',
      formGuests: 'Numero ospiti',
      formPets: 'Animali domestici presenti?',
      formPetsCount: 'Numero animali',
      formMessage: 'Messaggio',
      formMessagePlaceholder: 'Scrivi qui eventuali richieste aggiuntive...',
      formSubmit: 'Invia richiesta via email',
      optionNo: 'No',
      optionYes: 'Si',
      bookingKicker: 'Prenotazione',
      bookingTitle: 'Pronto per la tua vacanza a Tirrenia?',
      bookingDesc: 'Verifica disponibilita e prezzi aggiornati direttamente su Airbnb.',
      bookingButton: 'Prenota su Airbnb',
      footerHouse: 'Casa sul Mare',
      footerLocation: 'Tirrenia, Toscana, Italia',
      footerContacts: 'Contatti',
      footerForeign: 'Estero',
      footerItaly: 'Italia',
      footerEmail: 'Email',
      footerLinks: 'Link utili',
      footerAirbnb: 'Pagina Airbnb',
      lightboxDialog: 'Anteprima foto',
      lightboxClose: 'Chiudi',
      lightboxPrev: 'Foto precedente',
      lightboxNext: 'Foto successiva',
      lightboxImageAlt: 'Anteprima gallery',
      statusCheckoutAfter: 'La data di check-out deve essere successiva al check-in.',
      statusPetsOne: 'Se ci sono animali, indica almeno 1 nel campo numero animali.',
      statusOpeningEmail: 'Apertura del client email in corso.',
      mailGreeting: 'Ciao Cinzia,',
      mailIntro: 'vorrei richiedere una prenotazione per Casa sul Mare.',
      mailName: 'Nome',
      mailEmail: 'Email',
      mailCheckin: 'Check-in',
      mailCheckout: 'Check-out',
      mailGuests: 'Numero ospiti',
      mailPets: 'Animali domestici presenti',
      mailPetsNumber: 'Numero animali',
      mailMessage: 'Messaggio',
      mailNoMessage: '(nessun messaggio aggiuntivo)',
      mailThanks: 'Grazie.',
      mailSubjectPrefix: 'Richiesta prenotazione Casa sul Mare - ',
      mailSubjectGuest: 'Nuovo ospite'
    },
    en: {
      metaTitle: 'Casa sul Mare | Tirrenia, Tuscany',
      skipLink: 'Skip to content',
      navAria: 'Main navigation',
      openMenu: 'Open menu',
      langLabel: 'Language selector',
      navApartment: 'Apartment',
      navPhoto: 'Photos',
      navServices: 'Amenities',
      navLocation: 'Location',
      navAvailability: 'Availability',
      navRules: 'House rules',
      navContacts: 'Contacts',
      navBook: 'Book',
      heroEyebrow: 'Tirrenia, Tuscany, Italy',
      heroSubtitle:
        'Seafront apartment with direct beach access, surrounded by pinewoods and designed for relaxing family holidays.',
      heroBook: 'Book on Airbnb',
      heroPhotos: 'View photos',
      heroStats: ['guests', 'bedroom', 'beds', 'bathroom'],
      apartmentKicker: 'The apartment',
      apartmentTitle: 'Seafront relaxation, steps from everything',
      apartmentP1:
        'Casa sul Mare is located in a quiet residential complex surrounded by the pinewoods of Tirrenia. The apartment includes a bright living room with sofa bed, fully equipped kitchenette, TV, air conditioning, double bedroom, and a spacious bathroom with washing machine.',
      apartmentP2:
        'It is the ideal choice for those looking for a comfortable holiday with direct beach access and all essential services for short or weekly stays.',
      highlightTitles: ['Seafront', 'Direct beach access', 'Surrounded by pinewoods', 'Family-friendly'],
      highlightTexts: [
        'Prime location with sea breeze.',
        'Direct access to the public beach and nearby beach clubs.',
        'Green and quiet setting, perfect to unwind.',
        'Functional spaces for up to 4 guests, practical and comfortable.'
      ],
      galleryKicker: 'Photo gallery',
      galleryTitle: 'Discover Casa sul Mare',
      servicesKicker: 'Amenities',
      servicesTitle: 'Everything you need for a stress-free stay',
      amenities: [
        'Hair dryer, soap, bidet, shower gel, hot water',
        'Washing machine and mosquito screens',
        'TV',
        'Air conditioning and heating',
        'Wi-Fi',
        'Full kitchen and cooking space',
        'Fire extinguisher',
        'Free private parking',
        'Pets allowed',
        'Umbrella/sunbed rental and nearby public beach'
      ],
      bedsKicker: 'Sleeping arrangements',
      bedsTitle: 'Comfortable setup for 4 guests',
      bedsCards: [
        {
          title: 'Bedroom',
          badge: '1 double bed',
          size: 'Size: <strong>160 x 190 cm</strong>'
        },
        {
          title: 'Living room',
          badge: '1 sofa bed',
          size: 'Size: <strong>140 x 190 cm</strong>'
        }
      ],
      locationKicker: 'Location',
      locationTitle: 'Near Tirrenia and Calambrone, between sea and services',
      locationDesc:
        'The apartment is just minutes from Livorno, the port and major roads. Perfect both for seaside holidays and as a strategic base to explore Pisa and Florence.',
      locationItems: [
        '<strong>Livorno:</strong> about 10 minutes',
        '<strong>Port:</strong> about 8 minutes',
        '<strong>Pisa:</strong> about 25 minutes',
        '<strong>Florence:</strong> about 1 hour'
      ],
      locationHospitals: '<strong>Nearby hospitals:</strong> Cisanello, Santa Chiara, Stella Maris Institute.',
      distanceKicker: 'Distances',
      distanceTitle: 'Main travel times',
      distanceTimes: ['10 minutes', '25 minutes', '~ 1 hour', '8 minutes'],
      availabilityKicker: 'Availability',
      availabilityTitle: 'Property availability calendar',
      availabilityDesc: 'Booked dates cannot be selected in the booking request form.',
      availabilityLegend: ['Available', 'Unavailable'],
      availabilityNote: 'Availability is synced from the Airbnb calendar.',
      rulesKicker: 'House rules',
      rulesTitle: 'Simple and organized stay',
      rulesHeadings: ['Check-in', 'Check-out', 'Maximum guests', 'Linen'],
      rulesValues: ['4:00 PM - 6:00 PM', 'Before 10:00 AM', '4 guests', 'On request: <strong>EUR 25</strong> per person'],
      hostKicker: 'Host',
      hostTitle: 'Cinzia welcomes you',
      hostDesc:
        'A caring and responsive host with hospitality experience. Ideal for guests looking for quick assistance before and during the stay.',
      hostMeta: ['<strong>Response rate:</strong> 100%', '<strong>Response time:</strong> within 1 hour'],
      contactsKicker: 'Contacts',
      contactsTitle: 'Get in touch directly',
      contactCardTitles: ['For international callers', 'For callers from Italy', 'Email'],
      requestKicker: 'Email request',
      requestTitle: 'Send a booking request',
      requestDesc: 'Fill in your details and we will open your email app with a prefilled message.',
      formName: 'Full name',
      formEmail: 'Your email',
      formCheckin: 'Check-in',
      formCheckout: 'Check-out',
      formGuests: 'Number of guests',
      formPets: 'Are pets coming?',
      formPetsCount: 'Number of pets',
      formMessage: 'Message',
      formMessagePlaceholder: 'Write any additional requests here...',
      formSubmit: 'Send request by email',
      optionNo: 'No',
      optionYes: 'Yes',
      bookingKicker: 'Booking',
      bookingTitle: 'Ready for your holiday in Tirrenia?',
      bookingDesc: 'Check updated availability and prices directly on Airbnb.',
      bookingButton: 'Book on Airbnb',
      footerHouse: 'Casa sul Mare',
      footerLocation: 'Tirrenia, Tuscany, Italy',
      footerContacts: 'Contacts',
      footerForeign: 'International',
      footerItaly: 'Italy',
      footerEmail: 'Email',
      footerLinks: 'Useful links',
      footerAirbnb: 'Airbnb listing',
      lightboxDialog: 'Photo preview',
      lightboxClose: 'Close',
      lightboxPrev: 'Previous photo',
      lightboxNext: 'Next photo',
      lightboxImageAlt: 'Gallery preview',
      statusCheckoutAfter: 'Check-out must be after check-in.',
      statusPetsOne: 'If pets are included, please enter at least 1 pet.',
      statusOpeningEmail: 'Opening your email client.',
      mailGreeting: 'Hello Cinzia,',
      mailIntro: 'I would like to request a booking for Casa sul Mare.',
      mailName: 'Name',
      mailEmail: 'Email',
      mailCheckin: 'Check-in',
      mailCheckout: 'Check-out',
      mailGuests: 'Number of guests',
      mailPets: 'Pets included',
      mailPetsNumber: 'Number of pets',
      mailMessage: 'Message',
      mailNoMessage: '(no additional message)',
      mailThanks: 'Thank you.',
      mailSubjectPrefix: 'Booking request Casa sul Mare - ',
      mailSubjectGuest: 'New guest'
    }
  };

  const savedLanguage = localStorage.getItem('casa_lang');
  let currentLanguage = savedLanguage === 'en' || savedLanguage === 'it' ? savedLanguage : 'it';

  const t = (key) => translations[currentLanguage]?.[key] ?? translations.it[key] ?? key;

  const setText = (selector, value, root = document) => {
    const el = root.querySelector(selector);
    if (el) el.textContent = value;
  };

  const setHtml = (selector, value, root = document) => {
    const el = root.querySelector(selector);
    if (el) el.innerHTML = value;
  };

  const setAllText = (selector, values, root = document) => {
    root.querySelectorAll(selector).forEach((el, i) => {
      if (values[i] !== undefined) el.textContent = values[i];
    });
  };

  const setAllHtml = (selector, values, root = document) => {
    root.querySelectorAll(selector).forEach((el, i) => {
      if (values[i] !== undefined) el.innerHTML = values[i];
    });
  };

  const applyLanguage = () => {
    document.documentElement.lang = currentLanguage;
    document.title = t('metaTitle');

    setText('.skip-link', t('skipLink'));

    if (header) header.setAttribute('aria-label', t('navAria'));
    if (menuToggle) menuToggle.setAttribute('aria-label', t('openMenu'));
    const langGroup = document.querySelector('.lang-buttons');
    if (langGroup) langGroup.setAttribute('aria-label', t('langLabel'));

    const navMap = [
      ['#appartamento', 'navApartment'],
      ['#gallery', 'navPhoto'],
      ['#servizi', 'navServices'],
      ['#posizione', 'navLocation'],
      ['#disponibilita', 'navAvailability'],
      ['#regole', 'navRules'],
      ['#contatti', 'navContacts']
    ];

    navMap.forEach(([href, key]) => {
      const link = document.querySelector(`.nav-links a[href="${href}"]`);
      if (link) link.textContent = t(key);
    });
    setText('.nav-cta', t('navBook'));

    setText('.hero-content .eyebrow', t('heroEyebrow'));
    setText('.hero-content .hero-subtitle', t('heroSubtitle'));
    setText('.hero-actions .btn-primary', t('heroBook'));
    setText('.hero-actions .btn-secondary', t('heroPhotos'));
    setAllText('.hero-stats li span', t('heroStats'));

    const apartment = document.getElementById('appartamento');
    if (apartment) {
      setText('.section-kicker', t('apartmentKicker'), apartment);
      setText('h2', t('apartmentTitle'), apartment);
      const apParagraphs = apartment.querySelectorAll('.about-grid > div > p');
      if (apParagraphs[1]) apParagraphs[1].textContent = t('apartmentP1');
      if (apParagraphs[2]) apParagraphs[2].textContent = t('apartmentP2');
      setAllText('.highlight-card h3', t('highlightTitles'), apartment);
      setAllText('.highlight-card p', t('highlightTexts'), apartment);
    }

    const gallery = document.getElementById('gallery');
    if (gallery) {
      setText('.section-kicker', t('galleryKicker'), gallery);
      setText('h2', t('galleryTitle'), gallery);
    }

    const services = document.getElementById('servizi');
    if (services) {
      setText('.section-kicker', t('servicesKicker'), services);
      setText('h2', t('servicesTitle'), services);
      setAllText('.amenity p', t('amenities'), services);
    }

    const beds = document.getElementById('posti-letto');
    if (beds) {
      setText('.section-kicker', t('bedsKicker'), beds);
      setText('h2', t('bedsTitle'), beds);
      const cards = beds.querySelectorAll('.sleep-card');
      cards.forEach((card, i) => {
        const cfg = t('bedsCards')[i];
        if (!cfg) return;
        setText('h3', cfg.title, card);
        setText('.sleep-badge', cfg.badge, card);
        setHtml('p:last-child', cfg.size, card);
      });
    }

    const location = document.getElementById('posizione');
    if (location) {
      setText('.section-kicker', t('locationKicker'), location);
      setText('h2', t('locationTitle'), location);
      setText('.location-grid > div > p:not(.section-kicker):not(.hospital-note)', t('locationDesc'), location);
      setAllHtml('.location-list li', t('locationItems'), location);
      setHtml('.hospital-note', t('locationHospitals'), location);
    }

    const distance = document.getElementById('distanze');
    if (distance) {
      setText('.section-kicker', t('distanceKicker'), distance);
      setText('h2', t('distanceTitle'), distance);
      setAllText('.distance-card p', t('distanceTimes'), distance);
    }

    const availability = document.getElementById('disponibilita');
    if (availability) {
      setText('.section-kicker', t('availabilityKicker'), availability);
      setText('h2', t('availabilityTitle'), availability);
      setText('.container > p:not(.section-kicker)', t('availabilityDesc'), availability);
      const legendLabels = t('availabilityLegend');
      availability.querySelectorAll('.availability-legend .legend-item').forEach((item, index) => {
        const dot = item.querySelector('.legend-dot');
        const dotClone = dot ? dot.cloneNode(true) : null;
        item.textContent = '';
        if (dotClone) item.appendChild(dotClone);
        item.appendChild(document.createTextNode(legendLabels[index] || ''));
      });
      setText('.availability-note', t('availabilityNote'), availability);
    }

    const rules = document.getElementById('regole');
    if (rules) {
      setText('.section-kicker', t('rulesKicker'), rules);
      setText('h2', t('rulesTitle'), rules);
      setAllText('.rule-card h3', t('rulesHeadings'), rules);
      setAllHtml('.rule-card p', t('rulesValues'), rules);
    }

    const host = document.getElementById('host');
    if (host) {
      setText('.section-kicker', t('hostKicker'), host);
      setText('h2', t('hostTitle'), host);
      setText('p:not(.section-kicker)', t('hostDesc'), host);
      setAllHtml('.host-meta li', t('hostMeta'), host);
    }

    const contacts = document.getElementById('contatti');
    if (contacts) {
      setText('.contact-grid > div:first-child .section-kicker', t('contactsKicker'), contacts);
      setText('.contact-grid > div:first-child h2', t('contactsTitle'), contacts);
      setAllText('.contact-card h3', t('contactCardTitles'), contacts);
      setText('#richiesta-prenotazione .section-kicker', t('requestKicker'));
      setText('#richiesta-prenotazione h3', t('requestTitle'));
      setText('#richiesta-prenotazione > p:not(.section-kicker)', t('requestDesc'));
    }

    setText('label[for="nome"]', t('formName'));
    setText('label[for="email"]', t('formEmail'));
    setText('label[for="checkin"]', t('formCheckin'));
    setText('label[for="checkout"]', t('formCheckout'));
    setText('label[for="ospiti"]', t('formGuests'));
    setText('label[for="animali"]', t('formPets'));
    setText('label[for="numero-animali"]', t('formPetsCount'));
    setText('label[for="messaggio"]', t('formMessage'));
    setText('#booking-request-form button[type="submit"]', t('formSubmit'));

    const noOption = document.querySelector('#animali option[value="No"]');
    const yesOption = document.querySelector('#animali option[value="Si"]');
    if (noOption) noOption.textContent = t('optionNo');
    if (yesOption) yesOption.textContent = t('optionYes');

    const messageField = document.getElementById('messaggio');
    if (messageField) messageField.setAttribute('placeholder', t('formMessagePlaceholder'));

    const bookingCta = document.getElementById('prenota');
    if (bookingCta) {
      setText('.section-kicker', t('bookingKicker'), bookingCta);
      setText('h2', t('bookingTitle'), bookingCta);
      setText('p:not(.section-kicker)', t('bookingDesc'), bookingCta);
      setText('.btn', t('bookingButton'), bookingCta);
    }

    setText('.site-footer .footer-grid > div:nth-child(1) h3', t('footerHouse'));
    setText('.site-footer .footer-grid > div:nth-child(1) p', t('footerLocation'));
    setText('.site-footer .footer-grid > div:nth-child(2) h3', t('footerContacts'));
    setHtml(
      '.site-footer .footer-grid > div:nth-child(2) p:nth-of-type(1)',
      `${t('footerForeign')}: <a href="tel:+393318327424">+39 3318327424</a>`
    );
    setHtml(
      '.site-footer .footer-grid > div:nth-child(2) p:nth-of-type(2)',
      `${t('footerItaly')}: <a href="tel:+393476788984">+39 3476788984</a>`
    );
    setHtml(
      '.site-footer .footer-grid > div:nth-child(2) p:nth-of-type(3)',
      `${t('footerEmail')}: <a href="mailto:tacchella.affitii@hotmail.com">tacchella.affitii@hotmail.com</a>`
    );
    setText('.site-footer .footer-grid > div:nth-child(3) h3', t('footerLinks'));
    setText('.site-footer .footer-grid > div:nth-child(3) a', t('footerAirbnb'));

    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.setAttribute('aria-label', t('lightboxDialog'));
    const closeButton = document.querySelector('.lightbox-close');
    if (closeButton) closeButton.setAttribute('aria-label', t('lightboxClose'));
    const prevButton = document.querySelector('.lightbox-nav.prev');
    if (prevButton) prevButton.setAttribute('aria-label', t('lightboxPrev'));
    const nextButton = document.querySelector('.lightbox-nav.next');
    if (nextButton) nextButton.setAttribute('aria-label', t('lightboxNext'));
    const lightboxImageEl = document.querySelector('.lightbox-image');
    if (lightboxImageEl) lightboxImageEl.setAttribute('alt', t('lightboxImageAlt'));

    langButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === currentLanguage);
      button.setAttribute('aria-pressed', button.dataset.lang === currentLanguage ? 'true' : 'false');
    });
  };

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  applyLanguage();

  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const nextLanguage = button.dataset.lang;
      if (!nextLanguage || nextLanguage === currentLanguage || !translations[nextLanguage]) return;
      currentLanguage = nextLanguage;
      localStorage.setItem('casa_lang', nextLanguage);
      applyLanguage();
    });
  });

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
      const hasPets = animali === 'Si' || animali.toLowerCase() === 'yes';
      const numeroAnimali = String(formData.get('numero_animali') || '0').trim();
      const messaggio = String(formData.get('messaggio') || '').trim();

      if (checkin && checkout) {
        const checkinDate = new Date(checkin);
        const checkoutDate = new Date(checkout);
        if (checkoutDate <= checkinDate) {
          if (bookingStatus) {
            bookingStatus.textContent = t('statusCheckoutAfter');
          }
          return;
        }
      }

      if (hasPets && Number(numeroAnimali) < 1) {
        if (bookingStatus) {
          bookingStatus.textContent = t('statusPetsOne');
        }
        numeroAnimaliInput?.focus();
        return;
      }

      const subject = `${t('mailSubjectPrefix')}${nome || t('mailSubjectGuest')}`;
      const body = [
        t('mailGreeting'),
        '',
        t('mailIntro'),
        '',
        `${t('mailName')}: ${nome}`,
        `${t('mailEmail')}: ${email}`,
        `${t('mailCheckin')}: ${checkin}`,
        `${t('mailCheckout')}: ${checkout}`,
        `${t('mailGuests')}: ${ospiti}`,
        `${t('mailPets')}: ${hasPets ? t('optionYes') : t('optionNo')}`,
        `${t('mailPetsNumber')}: ${hasPets ? numeroAnimali : '0'}`,
        '',
        `${t('mailMessage')}:`,
        messaggio || t('mailNoMessage'),
        '',
        t('mailThanks')
      ].join('\n');

      const mailtoUrl = `mailto:tacchella.affitii@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;

      if (bookingStatus) {
        bookingStatus.textContent = t('statusOpeningEmail');
      }
    });
  }
})();
