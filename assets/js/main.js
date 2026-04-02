async function fetchMD(name) {
    const res = await fetch(`data/${name}.md`);
    return res.text();
}

function parseFrontmatter(text) {
    const meta = {};
    const match = text.match(/^---\n([\s\S]*?)\n---/);
    if (match) {
        match[1].split('\n').forEach(line => {
            const idx = line.indexOf(':');
            if (idx > 0) {
                const key = line.slice(0, idx).trim();
                const val = line.slice(idx + 1).trim();
                meta[key] = val;
            }
        });
    }
    const body = text.replace(/^---\n[\s\S]*?\n---\n?/, '').trim();
    return { meta, body };
}

function splitItems(text) {
    return text.split(/\n---\n/).map(s => s.trim()).filter(Boolean);
}

function mdToHtml(md) {
    return md
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/\n{2,}/g, '</p><p>')
        .replace(/\n/g, '<br>')
        .replace(/^(.+)$/, '<p>$1</p>');
}

async function loadAbout() {
    const text = await fetchMD('about');
    const parts = text.split('<!-- stats -->');
    const content = document.getElementById('about-content');
    content.innerHTML = mdToHtml(parts[0].trim());

    if (parts[1]) {
        const stats = document.getElementById('about-stats');
        stats.innerHTML = parts[1].trim().split('\n').filter(l => l.trim()).map(line => {
            const [number, label] = line.split('|').map(s => s.trim());
            return `<div class="stat-card"><div class="stat-number">${number}</div><div class="stat-label">${label}</div></div>`;
        }).join('');
    }
}

async function loadPeople() {
    const text = await fetchMD('people');
    const items = splitItems(text);
    const grid = document.getElementById('people-grid');
    grid.innerHTML = items.map((item, i) => {
        const { meta, body } = parseFrontmatter(item);
        const interests = (meta.interests || '').split(',').map(s => s.trim());
        const links = (meta.links || '').split(',').map(s => {
            const [label, url] = s.split('|').map(x => x.trim());
            return { label, url };
        });
        return `<div class="person-card reveal" style="transition-delay: ${i * 0.1}s">
            <div class="person-header">
                <div class="person-avatar">${meta.initials || ''}</div>
                <div>
                    <div class="person-name">${meta.name || ''}</div>
                    <div class="person-role">${meta.role || ''}</div>
                    <div class="person-affiliation">${meta.affiliation || ''}</div>
                </div>
            </div>
            <p class="person-bio">${body}</p>
            <div class="person-interests">
                ${interests.map(t => `<span class="person-interest-tag">${t}</span>`).join('')}
            </div>
            <div class="person-links">
                ${links.map(l => `<a class="person-link" href="${l.url}" ${l.url && l.url.startsWith('mailto') ? '' : 'target="_blank" rel="noopener"'}>${l.label}</a>`).join('')}
            </div>
        </div>`;
    }).join('');
}

async function loadStudents(filter = 'all') {
    if (!loadStudents._data) {
        const text = await fetchMD('students');
        loadStudents._data = splitItems(text).map(item => {
            const { meta, body } = parseFrontmatter(item);
            return {
                name: meta.name || '',
                initials: meta.initials || '',
                program: meta.program || '',
                university: meta.university || '',
                topic: body,
                tags: (meta.tags || '').split(',').map(s => s.trim())
            };
        });
    }
    const data = loadStudents._data;
    const filtered = filter === 'all'
        ? data
        : data.filter(s => s.program.toLowerCase().includes(filter));

    const grid = document.getElementById('students-grid');
    grid.innerHTML = filtered.map((s, i) => `
        <div class="student-card reveal" style="transition-delay: ${i * 0.05}s">
            <div class="student-header">
                <div class="student-avatar">${s.initials}</div>
                <div>
                    <div class="student-name">${s.name}</div>
                    <div class="student-program">${s.program} @ ${s.university}</div>
                </div>
            </div>
            <p class="student-topic">${s.topic}</p>
            <div class="student-tags">
                ${s.tags.map(t => `<span class="student-tag">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');

    requestAnimationFrame(() => initRevealAnimations());
}

function renderStudentFilters() {
    const programs = ['all', 'phd', "master's", 'undergraduate'];
    const labels = { 'all': 'All', 'phd': 'Ph.D.', "master's": "Master's", 'undergraduate': 'Undergraduate' };
    const container = document.getElementById('studentFilters');

    container.innerHTML = programs.map(p =>
        `<button class="filter-tab ${p === 'all' ? 'active' : ''}" data-filter="${p}">${labels[p]}</button>`
    ).join('');

    container.addEventListener('click', (e) => {
        if (!e.target.classList.contains('filter-tab')) return;
        container.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        loadStudents(e.target.dataset.filter);
    });
}

async function loadProjects() {
    const text = await fetchMD('projects');
    const items = splitItems(text);
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = items.map((item, i) => {
        const { meta, body } = parseFrontmatter(item);
        const tags = (meta.tags || '').split(',').map(s => s.trim());
        return `<div class="project-card reveal" style="transition-delay: ${i * 0.08}s">
            <div class="project-status ${meta.status || ''}">
                <span class="project-status-dot"></span>
                ${meta.status || ''}
            </div>
            <h3 class="project-title">${meta.title || ''}</h3>
            <p class="project-description">${body}</p>
            <div class="project-meta">
                ${tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>
            <div class="project-footer">
                <span>${meta.period || ''}</span>
            </div>
        </div>`;
    }).join('');
}

async function loadPublications() {
    const text = await fetchMD('publications');
    const container = document.getElementById('publications-list');
    const yearSections = text.split(/^## (.+)$/m).filter(Boolean);

    let html = '';
    for (let i = 0; i < yearSections.length; i += 2) {
        const year = yearSections[i].trim();
        const section = yearSections[i + 1];
        if (!section) continue;

        const items = splitItems(section);
        html += `<div class="pub-year-group reveal">
            <div class="pub-year-label">${year}</div>
            ${items.map(item => {
                const { meta, body } = parseFrontmatter(item);
                const links = (meta.links || '').split(',').map(s => {
                    const [label, url] = s.split('|').map(x => x.trim());
                    return { label, url };
                }).filter(l => l.label);
                return `<div class="pub-item">
                    <div class="pub-authors">${meta.authors || ''}</div>
                    <div class="pub-title">${meta.title || ''}</div>
                    <div class="pub-venue">${meta.venue || ''}</div>
                    ${links.length ? `<div class="pub-links">${links.map(l =>
                        `<a class="pub-link" href="${l.url}" target="_blank" rel="noopener">[${l.label}]</a>`
                    ).join('')}</div>` : ''}
                </div>`;
            }).join('')}
        </div>`;
    }
    container.innerHTML = html;
}

async function loadActivities() {
    const text = await fetchMD('activities');
    const items = splitItems(text);
    const container = document.getElementById('activities-timeline');
    container.innerHTML = items.map((item, i) => {
        const { meta, body } = parseFrontmatter(item);
        return `<div class="timeline-item reveal" style="transition-delay: ${i * 0.06}s">
            <div class="timeline-dot"></div>
            <div class="timeline-date">${meta.date || ''}</div>
            <div class="timeline-title">${meta.title || ''}</div>
            <div class="timeline-description">${body}</div>
        </div>`;
    }).join('');
}

async function loadContact() {
    const text = await fetchMD('contact');
    const items = splitItems(text);
    const container = document.getElementById('contact-content');
    container.innerHTML = items.map(item => {
        const { meta } = parseFrontmatter(item);
        const affiliation = (meta.affiliation || '').split(',').join('<br>');
        return `<div class="contact-card">
            <div class="contact-card-name">${meta.name || ''}</div>
            <div class="contact-card-role">${meta.role || ''}</div>
            <div class="contact-card-affiliation">${affiliation}</div>
            <div class="contact-detail">
                <svg class="contact-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:${meta.email || ''}">${meta.email || ''}</a>
            </div>
            <div class="contact-detail">
                <svg class="contact-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${meta.office || ''}</span>
            </div>
        </div>`;
    }).join('');
}

function initTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}

function initRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        observer.observe(el);
    });
}

function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
    });

    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    const sections = document.querySelectorAll('section[id]');
    const navLinkElements = navLinks.querySelectorAll('.nav-link');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinkElements.forEach(l => {
                    l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72}px 0px -30% 0px`
    });

    sections.forEach(s => sectionObserver.observe(s));
}

function initFooter() {
    document.getElementById('footerYear').textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', async () => {
    initTheme();

    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    await Promise.all([
        loadAbout(),
        loadPeople(),
        loadStudents(),
        loadProjects(),
        loadPublications(),
        loadActivities(),
        loadContact()
    ]);

    renderStudentFilters();
    initNavbar();
    initFooter();

    requestAnimationFrame(() => {
        initRevealAnimations();
    });
});
