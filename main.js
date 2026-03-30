/* ============================================================
   PORTFOLIO — main.js
   ============================================================ */

/* ─── DRAGGABLE FLOATS ─────────────────────────────────────
   Makes .float-item and .float-text elements draggable,
   constrained within their parent container.
─────────────────────────────────────────────────────────── */
function makeFloatable(selector, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.querySelectorAll(selector).forEach(el => {
    let active = false, startX, startY, origLeft, origTop;

    el.addEventListener('mousedown', e => {
      active   = true;
      startX   = e.clientX;
      startY   = e.clientY;
      origLeft = el.offsetLeft;
      origTop  = el.offsetTop;
      el.style.zIndex = 999;
      e.preventDefault();
    });

    document.addEventListener('mousemove', e => {
      if (!active) return;
      const cW = container.offsetWidth;
      const cH = container.offsetHeight;
      const eW = el.offsetWidth;
      const eH = el.offsetHeight;
      el.style.left = Math.min(Math.max(0, origLeft + e.clientX - startX), cW - eW) + 'px';
      el.style.top  = Math.min(Math.max(0, origTop  + e.clientY - startY), cH - eH) + 'px';
    });

    document.addEventListener('mouseup', () => {
      if (active) { active = false; el.style.zIndex = 10; }
    });
  });
}

// Init dragging for both headers
makeFloatable('.float-item, .float-text', 'float-area');
makeFloatable('.float-item, .float-text', 'float-area-proj');


/* ─── PROJECT DATA ─────────────────────────────────────────
   Edit each project's content here.

   media array items:
     t    — 'img' or 'video'
     src  — file path or URL
     cap  — caption text (shown below image)
     sz   — 'full' | 'md' (75%) | 'sm' (55%)
─────────────────────────────────────────────────────────── */
const projects = {

  1: {
    title:       'Project One — Title Here',
    desc1:       'First paragraph about this project. Describe the challenge, your role, and the approach you took.',
    desc2:       'Second paragraph diving deeper into the process. What decisions did you make and why?',
    desc3:       'Third paragraph on outcomes, impact, or what you learned.',
    year:        '2024',
    disciplines: 'Brand Identity · Print · Illustration',
    client:      'Client Name',
    media: [
      { t: 'img', src: 'https://via.placeholder.com/1200x750/E0E0E0/1A1A1A?text=Hero',      cap: 'Hero shot',   sz: 'full' },
      { t: 'img', src: 'https://via.placeholder.com/600x750/FBBC04/1A1A1A?text=Detail+A',   cap: 'Detail A',    sz: 'sm'   },
      { t: 'img', src: 'https://via.placeholder.com/900x520/1A73E8/ffffff?text=Detail+B',   cap: 'Detail B',    sz: 'md'   },
      { t: 'img', src: 'https://via.placeholder.com/1200x600/34A853/ffffff?text=In+Context', cap: 'In context',  sz: 'full' },
    ]
  },

  2: {
    title:       'Project Two — Title Here',
    desc1:       'Description of project two. Each project page has the same structure but different content.',
    desc2:       'Process notes, research, iteration, and refinement.',
    desc3:       'Outcome and reflection.',
    year:        '2024',
    disciplines: 'Web Design · Motion · Dev',
    client:      'Studio XYZ',
    media: [
      { t: 'img', src: 'https://via.placeholder.com/1200x680/EA4335/ffffff?text=Hero',      cap: 'Hero',     sz: 'full' },
      { t: 'img', src: 'https://via.placeholder.com/750x900/FBBC04/1A1A1A?text=Screen+A',   cap: 'Screen A', sz: 'md'   },
      { t: 'img', src: 'https://via.placeholder.com/520x520/E0E0E0/1A1A1A?text=Screen+B',   cap: 'Screen B', sz: 'sm'   },
    ]
  },

  3: {
    title:       'Project Three — Title Here',
    desc1:       'Project three description. Replace all this with your actual copy.',
    desc2:       'Second paragraph — methodology, tools, collaborators.',
    desc3:       'Results and recognition.',
    year:        '2023',
    disciplines: 'App Design · UX Research',
    client:      'Startup ABC',
    media: [
      { t: 'img', src: 'https://via.placeholder.com/1200x900/1A73E8/ffffff?text=Overview',   cap: 'Overview',    sz: 'full' },
      { t: 'img', src: 'https://via.placeholder.com/600x600/34A853/ffffff?text=Components',  cap: 'Components',  sz: 'sm'   },
      { t: 'img', src: 'https://via.placeholder.com/1050x600/FBBC04/1A1A1A?text=Flow',       cap: 'User flow',   sz: 'md'   },
      { t: 'img', src: 'https://via.placeholder.com/1200x520/E0E0E0/1A1A1A?text=Final',      cap: 'Final',       sz: 'full' },
    ]
  },

  4: {
    title:       'Project Four — Title Here',
    desc1:       'Campaign project description. Art direction, photography, layout.',
    desc2:       'Process and collaboration details.',
    desc3:       'Impact and reach.',
    year:        '2024',
    disciplines: 'Campaign · Photography · Art Direction',
    client:      'Brand Co.',
    media: [
      { t: 'img', src: 'https://via.placeholder.com/1200x750/EA4335/ffffff?text=Hero',       cap: 'Campaign hero', sz: 'full' },
      { t: 'img', src: 'https://via.placeholder.com/900x1200/FBBC04/1A1A1A?text=Poster',     cap: 'OOH poster',    sz: 'md'   },
      { t: 'img', src: 'https://via.placeholder.com/1200x600/1A73E8/ffffff?text=Social+Set', cap: 'Social set',    sz: 'full' },
    ]
  },

  5: {
    title:       'Project Five — Title Here',
    desc1:       'Fifth project — your most ambitious or most recent.',
    desc2:       'Deep dive into what made this special.',
    desc3:       'Ongoing or completed. What is next?',
    year:        '2024',
    disciplines: 'UI/UX · Motion · Branding',
    client:      'Personal',
    media: [
      { t: 'img', src: 'https://via.placeholder.com/1200x750/34A853/ffffff?text=Hero',       cap: 'Hero',    sz: 'full' },
      { t: 'img', src: 'https://via.placeholder.com/600x600/E0E0E0/1A1A1A?text=Detail',      cap: 'Detail',  sz: 'sm'   },
      { t: 'img', src: 'https://via.placeholder.com/1050x680/FBBC04/1A1A1A?text=In+Use',     cap: 'In use',  sz: 'md'   },
      { t: 'img', src: 'https://via.placeholder.com/1200x570/EA4335/ffffff?text=Final',      cap: 'Final',   sz: 'full' },
    ]
  }

};


/* ─── OPEN PROJECT PAGE ─────────────────────────────────── */
function openProject(id) {
  const p = projects[id];

  // Switch views
  document.getElementById('home-view').style.display = 'none';
  document.getElementById('proj-view').style.display = 'block';
  window.scrollTo(0, 0);

  // Inject text content
  document.getElementById('pp-title').textContent       = p.title;
  document.getElementById('pp-desc1').textContent       = p.desc1;
  document.getElementById('pp-desc2').textContent       = p.desc2;
  document.getElementById('pp-desc3').textContent       = p.desc3;
  document.getElementById('pp-year').textContent        = p.year;
  document.getElementById('pp-disciplines').textContent = p.disciplines;
  document.getElementById('pp-client').textContent      = p.client;

  // Build media items
  const right = document.getElementById('proj-page-right');
  right.innerHTML = '';

  p.media.forEach(m => {
    const fig = document.createElement('figure');
    fig.className = 'proj-media-item ' + (m.sz || 'full');

    let el;
    if (m.t === 'video') {
      el = document.createElement('video');
      el.src        = m.src;
      el.controls   = true;
      el.playsInline = true;
    } else {
      el = document.createElement('img');
      el.src = m.src;
      el.alt = m.cap || '';
    }
    fig.appendChild(el);

    if (m.cap) {
      const cap = document.createElement('figcaption');
      cap.textContent = m.cap;
      fig.appendChild(cap);
    }

    right.appendChild(fig);
  });

  // Re-init dragging for project header floats
  makeFloatable('.float-item, .float-text', 'float-area-proj');
}


/* ─── CLOSE PROJECT PAGE ────────────────────────────────── */
function closeProject() {
  document.getElementById('proj-view').style.display  = 'none';
  document.getElementById('home-view').style.display = 'block';
  window.scrollTo(0, 0);
}

const floats = document.querySelectorAll('.float-img');

floats.forEach(img => {
  // random initial position
  img.style.top = Math.random() * window.innerHeight + 'px';
  img.style.left = Math.random() * window.innerWidth + 'px';

  // random speed
  const speedX = (Math.random() - 0.5) * 2; // -1 to 1 px/frame
  const speedY = (Math.random() - 0.5) * 2;

  function move() {
    let top = parseFloat(img.style.top);
    let left = parseFloat(img.style.left);

    top += speedY;
    left += speedX;

    // bounce off edges
    if (top < 0 || top > window.innerHeight - img.height) img.style.top = Math.max(0, Math.min(top, window.innerHeight - img.height)) + 'px';
    if (left < 0 || left > window.innerWidth - img.width) img.style.left = Math.max(0, Math.min(left, window.innerWidth - img.width)) + 'px';

    img.style.top = top + 'px';
    img.style.left = left + 'px';

    requestAnimationFrame(move);
  }

  move();
});

// ─── GO TO TOP BUTTON ──────────────────────────────
window.onscroll = function() { toggleTopBtn() };

function toggleTopBtn() {
  const btn = document.getElementById('topBtn');
  if (!btn) return;
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = 'inline-flex';
  } else {
    btn.style.display = 'none';
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

