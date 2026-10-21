(() => {
  'use strict';
  const data = window.LUMORA;
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const links = [['index.html','Home'],['domain.html','Domain'],['milestones.html','Milestones'],['documents.html','Documents'],['presentations.html','Presentations'],['about.html','About us'],['contact.html','Contact us']];
  const file = location.pathname.split('/').pop() || 'index.html';
  const page = links.some(([url]) => url === file) ? file : 'index.html';
  const brand = '<a class="brand" href="index.html" aria-label="Lumora home"><img src="assets/mark.svg" alt="" width="35" height="35">lumora<span class="brand-dot">.</span></a>';
  document.getElementById('header').innerHTML = `<div class="container nav">${brand}<button class="menu" aria-expanded="false" aria-controls="navigation">Menu</button><nav class="navlinks" id="navigation" aria-label="Main navigation">${links.map(([url,label]) => `<a href="${url}" ${page === url ? 'aria-current="page"' : ''}>${label}</a>`).join('')}</nav></div>`;
  document.getElementById('footer').innerHTML = `<div class="container footer"><div class="footer-top"><div>${brand}<p>Learning that understands you.<br>A research project in adaptive education.</p></div><div class="footer-links"><a href="domain.html">Explore the research</a><a href="documents.html">Project documents</a><a href="contact.html">Get in touch ↗</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Lumora. Learn brighter.</span><span>Cognitive style · Cognitive load · Adaptive learning</span></div></div>`;
  const intro = (label,title,text) => `<section class="page-top"><div class="container"><div class="eyebrow">${label}</div><h1>${title}</h1><p>${text}</p></div></section>`;
  const components = [
    ['Understand the learner','Webcam and cursor behavior inform two dimensions of cognitive style: analytic, wholistic, or moderate; and visual or verbal.','01 / COGNITIVE STYLE'],
    ['Recognize the effort','Pauses, rewinds, and other video interactions help the trained model estimate low, medium, or high cognitive load during learning.','02 / COGNITIVE LOAD'],
    ['Adapt the explanation','Learning aids are generated from teacher resources, with structure and presentation adapted to the learner’s style and current load.','03 / ADAPTIVE CONTENT'],
    ['Make insights actionable','Teachers explore LIME and SHAP explanations and lesson recommendations. Students practise with resource-based MCQ exam aids.','04 / EXPLAINABILITY & EXAMS']
  ];
  function home() {
    return `<section class="container hero"><div><div class="eyebrow">Meet Lumora · Learn brighter</div><h1>A little less friction.<br>A lot more <em>learning.</em></h1><p>Discover your learning pattern. Explore content that adapts to your cognitive style and the effort you’re experiencing, as you learn.</p><div class="actions"><a class="button" href="domain.html">Explore our research <span>↗</span></a><a class="button secondary" href="#demo">See adaptation in action <span>↓</span></a></div><div class="hero-note"><span>Built around the learner</span><span>Designed to support educators</span></div></div><div class="hero-art" aria-label="Illustration of an adaptive lesson"><div class="orb"></div><div class="mock"><div class="mock-top"><b>Your learning space</b><span class="pill">Illustrative preview</span></div><div class="lesson-scene"><div class="diagram-node">Observe</div><span class="diagram-arrow">→</span><div class="diagram-node">Understand</div><span class="diagram-arrow">→</span><div class="diagram-node">Apply</div><span class="scene-caption">A concept, made clearer.</span></div><h3>One idea. A way that works for you.</h3><p class="small">Visual explanation · Bite-sized learning</p><div class="progress"><span></span></div></div><div class="floating">✦ Your next explanation, adapted.<small>Cognitive style + current cognitive load</small></div></div></section><div class="container strip"><div>Style-aware learning<span>Analytic · Wholistic · Moderate</span></div><div>Multimodal support<span>Visual · Verbal</span></div><div>Real-time adaptation<span>Low · Medium · High load</span></div><div>Teacher insight<span>Explainability · Exam aids</span></div></div><section class="container section"><div class="section-head"><div><div class="eyebrow">The idea behind Lumora</div><h2>Different minds.<br><em>Different ways forward.</em></h2></div><p>A connected learning loop that moves from understanding the learner to supporting the next step.</p></div><div class="grid">${components.map(([title,copy,tag],i) => `<article class="card"><span class="number">0${i+1}</span><h3>${title}</h3><p>${copy}</p><div class="tag">${tag}</div></article>`).join('')}</div></section><section class="container" id="demo"><div class="dark demo-grid"><div><div class="eyebrow">Try the idea</div><h2>Same concept.<br><em>A different approach.</em></h2><p>Choose a style and load level to see how an explanation of photosynthesis could change.</p><p class="small">Illustrative demo using authored examples. It does not detect your cognitive traits or call an AI model.</p></div><div><div class="controls"><div><label for="style">Presentation preference</label><select id="style"><option value="visual">Visual</option><option value="verbal">Verbal</option></select></div><div><label for="load">Cognitive load</label><select id="load"><option value="high">High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select></div></div><div id="demo-result" class="demo-result" aria-live="polite"></div></div></div></section><section class="container section"><div class="section-head"><h2>Better learning.<br><em>More informed teaching.</em></h2><p>Teacher-uploaded material is the starting point, from lecture videos and slides to mathematical resources.</p></div><div class="grid"><article class="card"><h3>For learners</h3><p>Receive learning aids aligned with your cognitive profile and current load, then reinforce understanding with MCQs grounded in course resources.</p></article><article class="card"><h3>For educators</h3><p>Explore student patterns, understand model predictions, and identify lesson sections that may benefit from simpler explanations.</p></article></div><div class="actions"><a class="button secondary" href="domain.html#methodology">Follow the methodology ↗</a></div></section>`;
  }
  function domain() {
    return intro('The research domain','Learning is personal.<br><em>Support should be, too.</em>','Lumora investigates how cognitive style and changing cognitive load can work together to guide learning support.') + `<div class="container"><nav class="subnav" aria-label="Domain sections">${[['literature','Literature survey'],['gap','Research gap'],['problem','Research problem'],['objectives','Objectives'],['methodology','Methodology'],['technology','Technologies']].map(([id,title]) => `<a href="#${id}">${title}</a>`).join('')}</nav><section class="research-row" id="literature"><h2>Literature survey</h2><div><p>The project brings together research themes in cognitive style, cognitive load, multimedia learning, behavioral analytics, and explainable AI. Its design considers both how a learner prefers information to be presented and the effort experienced during a lesson.</p><p>Cognitive style profiling distinguishes analytic, wholistic, and moderate patterns alongside visual and verbal preferences. Cognitive load estimation considers learner interaction with video rather than relying solely on a fixed profile.</p><div class="callout">The verified literature review, source citations, and study comparisons have not yet been supplied. Add them here before academic submission; this overview describes the project’s research themes.</div></div></section><section class="research-row" id="gap"><h2>Research gap</h2><div><p>The proposed gap is a connected workflow that combines cognitive style detection, real-time load estimation, resource-grounded content adaptation, and explanations for educators.</p><p>A profile alone does not represent a learner’s changing effort during a lesson. Load estimation alone does not describe how that learner may benefit from information being presented. Lumora explores their joint use.</p><p class="small">This is the project’s proposed research gap. Establishing novelty requires comparison with the verified literature review.</p></div></section><section class="research-row" id="problem"><h2>Research problem</h2><div><h3>How can a learning platform adapt support to both the learner’s cognitive style and their current cognitive load?</h3><p>The system must connect behavioral signals to useful learning aids while keeping generated content aligned with teacher resources and making model predictions understandable to educators.</p></div></section><section class="research-row" id="objectives"><h2>Research objectives</h2><div><ul><li>Detect cognitive style from webcam and cursor behavioral data using trained models.</li><li>Estimate cognitive load from video interactions such as pauses and rewinds.</li><li>Generate style-aware and load-aware learning aids from processed lecture resources.</li><li>Compare two model outputs using source faithfulness and readability alignment.</li><li>Explain learner predictions with LIME and SHAP and provide lesson recommendations.</li><li>Support course-enrolled learners with MCQ practice based on teacher-uploaded exam material.</li></ul></div></section><section class="research-row" id="methodology"><h2>Methodology</h2><div><p>Teachers upload course materials. Text extraction, transcription, and chunking prepare these resources, with a separate mathematical-content handling path to preserve equations.</p><div class="flow"><div><b>01 / Profile</b>Webcam + cursor → cognitive style</div><div><b>02 / Observe</b>Video events → behavioral features</div><div><b>03 / Predict</b>Trained model → cognitive load</div><div><b>04 / Adapt</b>Style + load + resources → learning aid</div><div><b>05 / Explain</b>Predictions → teacher insights</div></div><p>DeepSeek and Hugging Face generation workflows produce candidate learning aids. The codebase compares source overlap and readability alignment to select an output. Visual learners can receive diagrams or images; verbal learners can receive text-focused explanations.</p><p>Teachers inspect LIME and SHAP insights and lesson recommendations. A separate exam workflow generates MCQs from teacher-provided lesson resources for enrolled students.</p><div class="callout">The behavioral predictions are model estimates. Evaluation results, accuracy figures, and evidence of learning improvement are pending and are not claimed on this website.</div></div></section><section class="research-row" id="technology"><h2>Technologies used</h2><div><p>The research application uses a React frontend and an API gateway connecting Node.js and Python services. This project website is independently built with HTML, CSS, and JavaScript.</p><div class="tech-list">${['React + Vite','JavaScript','Node.js + Express','Python + FastAPI','scikit-learn','MediaPipe','MongoDB','MySQL','DeepSeek','Hugging Face','LIME','SHAP'].map(x=>`<span>${x}</span>`).join('')}</div></div></section></div>`;
  }
  function milestones() {
    return intro('The project journey','From an idea<br>to <em>an integrated system.</em>','Explore the project assessments and the work presented at each stage.') + `<section class="container section"><div class="grid"><div><label for="assessment">Choose an assessment</label><select id="assessment">${data.milestones.map((m,i)=>`<option value="${i}">${escape(m.name)}</option>`).join('')}</select><div id="assessment-detail" class="card" style="margin-top:25px" aria-live="polite"></div></div><div class="timeline">${data.milestones.map(m=>`<article><h3>${escape(m.name)}</h3><p class="small">${escape(m.description)}</p><span class="pending">${escape(m.date || 'Date to be confirmed')}</span></article>`).join('')}</div></div><div class="callout">Assessment dates, allocated marks, and completion status will be updated after confirmation from the project team.</div></section>`;
  }
  function resources(kind) {
    const docs = kind === 'documents';
    return intro(docs ? 'Research archive' : 'Presentation archive',docs ? 'The thinking behind<br><em>the work.</em>' : 'Our progress,<br><em>presented.</em>',docs ? 'Explore project approval, individual proposals, individual theses, and the final group thesis.' : 'Slides from the proposal, progress reviews, and final presentation.') + `<section class="container section">${docs ? '<nav class="subnav document-jumps" aria-label="Document sections"><a href="#documents-taf">TAF</a><a href="#documents-proposals">Individual proposals</a><a href="#documents-theses">Individual theses</a><a href="#documents-final">Final group thesis</a></nav>' : ''}<div class="archive-search"><label for="resource-search">Search ${kind}</label><input id="resource-search" type="search" placeholder="Search by name, student ID, or document type" style="max-width:500px"><p class="small" style="margin-top:15px">${docs ? 'PDFs open in a new tab. Word proposals are available to download.' : 'Download available PowerPoint decks below. The final slide deck will appear here when provided.'}</p></div><div id="resource-list"></div><p id="resource-count" class="small" role="status"></p></section>`;
  }
  function about() {
    return intro('The people behind Lumora','Curious minds.<br><em>A brighter way to learn.</em>','Meet the student researchers bringing together content processing, cognitive analytics, and explainable learning support.') + `<section class="container section"><div class="section-head"><div><div class="eyebrow">Our research team</div><h2>Built together.<br><em>With purpose.</em></h2></div><p>Four areas of expertise, connected by a shared commitment to more personal learning.</p></div><div class="grid team">${data.members.map((m,i)=>`<article class="card team-card"><div class="team-top"><div class="avatar" aria-hidden="true">${escape(m.initials || '0'+(i+1))}</div><span class="student-id">${escape(m.studentId || '')}</span></div><h3>${escape(m.name)}</h3><div class="role">${escape(m.role)}</div><p>${escape(m.description)}</p><a class="member-email" href="mailto:${escape(m.email)}"><span>${escape(m.email)}</span><span aria-hidden="true">↗</span></a></article>`).join('')}</div><div class="supervision"><div><div class="eyebrow">Academic guidance</div><h2>Guided by experience.</h2></div><div class="supervisor-card"><span class="supervisor-label">Supervisor</span><h3>${escape(data.supervisor)}</h3></div><div class="supervisor-card"><span class="supervisor-label">Co-supervisor</span><h3>${escape(data.coSupervisor)}</h3></div></div></section>`;
  }
  function contact() {
    return intro('Start a conversation','Let’s talk about<br><em>better learning.</em>','Questions about Lumora, the research approach, or the project? Prepare an enquiry for the team.') + `<section class="container section contact-grid"><div><h2>Get in touch.</h2><p>We welcome conversations about adaptive learning, educational research, and our four-component approach.</p><div class="card"><h3>Project contact</h3>${data.contactEmail ? `<a href="mailto:${escape(data.contactEmail)}">${escape(data.contactEmail)}</a>` : '<p>Official email and phone number awaiting confirmation.</p>'}</div><p class="small" style="margin-top:20px">This static website does not store or send enquiries. The form prepares an email for your email application once a project address is configured.</p></div><form id="contact-form"><div class="form-row"><div class="field"><label for="name">Your name</label><input id="name" name="name" autocomplete="name" required maxlength="100"></div><div class="field"><label for="email">Your email</label><input id="email" name="email" type="email" autocomplete="email" required maxlength="200"></div></div><div class="field"><label for="subject">Subject</label><select id="subject" name="subject"><option>Research enquiry</option><option>Adaptive learning</option><option>Project documentation</option><option>Other</option></select></div><div class="field"><label for="message">Your message</label><textarea id="message" name="message" required maxlength="5000" placeholder="Tell us what you’d like to discuss..."></textarea></div><button class="button" type="submit">${data.contactEmail ? 'Open email draft' : 'Prepare enquiry'} <span>↗</span></button><p class="form-status" id="contact-status" role="status"></p><textarea id="enquiry-draft" aria-label="Prepared enquiry — copy this text" hidden readonly style="margin-top:15px"></textarea></form></section>`;
  }
  const renderers = {'index.html':home,'domain.html':domain,'milestones.html':milestones,'documents.html':()=>resources('documents'),'presentations.html':()=>resources('presentations'),'about.html':about,'contact.html':contact};
  document.getElementById('main').innerHTML = renderers[page]();
  document.getElementById('main').classList.add('reveal');
  // Content remains visible if observers or animation support are unavailable.
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } });
    }, {threshold: 0.08});
    document.querySelectorAll('.section-head, .card, .research-row, .dark, .supervision, .timeline article').forEach((element, index) => {
      element.classList.add('scroll-reveal');
      element.style.setProperty('--delay', `${(index % 2) * 90}ms`);
      observer.observe(element);
    });
  }
  // An abstract constellation complements the adaptive learning preview.
  const art = document.querySelector('.hero-art');
  if (art) {
    art.insertAdjacentHTML('afterbegin', '<div class="constellation" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div><span class="art-label">THE ADAPTIVE LEARNING LOOP</span>');
    art.insertAdjacentHTML('beforeend', '<div class="signal-badge"><span class="signal-dot"></span>Style-aware. Load-aware. You-aware.</div>');
  }
  const menu = document.querySelector('.menu');
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded',String(open)); document.getElementById('navigation').classList.toggle('open',open); });
  document.addEventListener('keydown', event => { if(event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true'){ menu.click(); menu.focus(); }});
  if (page === 'index.html') {
    const update = () => {
      const visual = document.getElementById('style').value === 'visual';
      const load = document.getElementById('load').value;
      const copy = {high:'Plants use sunlight to turn water and carbon dioxide into food. Start with this single idea, then take a short recap.',medium:'Photosynthesis happens in chloroplasts. Plants use light energy, water, and carbon dioxide to make glucose and release oxygen. Follow the process in three steps.',low:'Light-dependent reactions capture energy as ATP and NADPH. The Calvin cycle uses that energy to fix carbon dioxide into sugars. Connect both stages to the overall photosynthesis equation.'};
      document.getElementById('demo-result').innerHTML = `<span class="pill">${visual ? 'Visual' : 'Verbal'} · ${escape(load)} load</span><h3 style="margin:16px 0">Photosynthesis, adapted.</h3>${visual ? `<div class="demo-visual" aria-label="Sunlight, water and carbon dioxide lead to glucose and oxygen"><span>☀ Light<br>+ water + CO₂</span><b>→</b><span>Glucose<br>+ oxygen</span></div>` : ''}<p>${copy[load]}</p><p class="small" style="margin-top:15px">${load === 'high' ? 'One core idea · Short recap' : load === 'medium' ? 'Guided explanation · Connected steps' : 'More detail · Connections between concepts'}</p>`;
    };
    document.getElementById('style').addEventListener('change',update); document.getElementById('load').addEventListener('change',update); update();
  }
  if (page === 'milestones.html') {
    const update = () => { const m = data.milestones[Number(document.getElementById('assessment').value)]; document.getElementById('assessment-detail').innerHTML = `<div class="eyebrow">Assessment details</div><h3 style="margin-top:20px">${escape(m.name)}</h3><p>${escape(m.description)}</p><div class="metadata"><div><small>Assessment date</small>${escape(m.date || 'To be confirmed')}</div><div><small>Marks allocated</small>${escape(m.marks || 'To be confirmed')}</div></div>`; };
    document.getElementById('assessment').addEventListener('change',update); update();
  }
  if (page === 'documents.html' || page === 'presentations.html') {
    const items = page === 'documents.html' ? data.documents : data.presentations;
    const safeURL = url => Boolean(url) && !/^(?:javascript|data|vbscript):/i.test(url.trim());
    const groups = [
      {id:'taf', title:'TAF', description:'Project TAF for research group R26-SE-004.'},
      {id:'proposals', title:'Individual proposals', description:'Each member’s research proposal, available as a Word document.'},
      {id:'theses', title:'Individual theses', description:'Draft theses covering the four individual research components.'},
      {id:'final', title:'Final group thesis', description:'The combined group thesis. The available version is a draft.'}
    ];
    const resourceRow = item => {
      const word = /\.docx?$/i.test(item.url || '');
      const slides = /\.pptx?$/i.test(item.url || '');
      const download = word || slides;
      return `<article class="resource"><div><h3>${escape(item.title)}</h3><p>${escape(item.type)}</p></div>${safeURL(item.url) ? `<a class="button secondary" href="${escape(item.url)}" ${download ? 'download' : 'target="_blank" rel="noopener"'}>${word ? 'Download Word ↓' : slides ? 'Download slides ↓' : 'View PDF ↗'}</a>` : '<span class="pending">File pending</span>'}</article>`;
    };
    const presentationCard = item => {
      const available = safeURL(item.url);
      const stage = String(items.indexOf(item) + 1).padStart(2, '0');
      return `<article class="presentation-card ${available ? '' : 'presentation-pending'}"><div class="presentation-cover" aria-hidden="true"><div class="slide-orbit"></div><span class="slide-stage">STAGE ${stage}</span><div class="slide-art"><div class="slide-art-heading"></div><div class="slide-art-line"></div><div class="slide-art-line short"></div><div class="slide-art-chart"><span></span><span></span><span></span><span></span></div></div><span class="slide-cover-brand">lumora.</span></div><div class="presentation-content"><div class="presentation-meta"><span class="presentation-format">${available ? 'PPTX · PowerPoint' : 'Slide deck pending'}</span><span class="presentation-availability">${available ? 'Available' : 'Coming soon'}</span></div><h2>${escape(item.title)}</h2><p>${escape(item.description || item.type)}</p><div class="presentation-action">${available ? `<a class="button" href="${escape(item.url)}" download aria-label="Download ${escape(item.title)}">Download slides <span aria-hidden="true">↓</span></a>` : '<span class="pending">File not yet provided</span>'}<span class="small">R26-SE-004</span></div></div></article>`;
    };
    const update = () => {
      const query = document.getElementById('resource-search').value.trim().toLowerCase();
      const filtered = items.filter(item => (item.title+' '+item.type+' '+(item.category || '')).toLowerCase().includes(query));
      document.getElementById('resource-list').innerHTML = page === 'documents.html'
        ? groups.map(group => {
          const matches = filtered.filter(item => item.category === group.id);
          if (!matches.length) return '';
          return `<section class="document-group" id="documents-${group.id}" aria-labelledby="heading-${group.id}"><div class="document-group-head"><div><h2 id="heading-${group.id}">${group.title}</h2><p>${group.description}</p></div><span class="document-total">${matches.length} ${matches.length === 1 ? 'file' : 'files'}</span></div><div class="document-group-files">${matches.map(resourceRow).join('')}</div></section>`;
        }).join('')
        : `<div class="presentation-grid">${filtered.map(presentationCard).join('')}</div>`;
      document.getElementById('resource-count').textContent = filtered.length ? `${filtered.length} files${query ? ' match your search' : ' in the archive'}` : 'No matching files. Try a different search.';
    };
    document.getElementById('resource-search').addEventListener('input',update); update();
  }
  if (page === 'contact.html') {
    const contactCard = document.querySelector('.contact-grid .card');
    contactCard.innerHTML = `<h3>Contact the research team</h3><div class="team-contacts">${data.members.map(member => `<a href="mailto:${escape(member.email)}"><strong>${escape(member.name)}</strong><span>${escape(member.role)}</span><small>${escape(member.email)} ↗</small></a>`).join('')}</div>`;
  }

if (page === 'contact.html') {
  document.getElementById('contact-form').addEventListener('submit', event => {
    event.preventDefault();

    const form = new FormData(event.target);

    const name = form.get('name');
    const email = form.get('email');
    const subject = form.get('subject');
    const message = form.get('message');

    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `${message}`;

    const recipient = data.contactEmail;

    if (!recipient) {
      document.getElementById('contact-status').textContent =
        'Please configure the project contact email in js/data.js.';
      return;
    }

    const gmailUrl =
      'https://mail.google.com/mail/?view=cm&fs=1' +
      '&to=' + encodeURIComponent(recipient) +
      '&su=' + encodeURIComponent('Lumora — ' + subject) +
      '&body=' + encodeURIComponent(body);

    window.open(gmailUrl, '_blank', 'noopener');

    document.getElementById('contact-status').textContent =
      'Gmail opened with your enquiry prepared. Please review and send it.';
  });
}

})();
