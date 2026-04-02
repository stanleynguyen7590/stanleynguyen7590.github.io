const SITE_DATA = {
    about: {
        paragraphs: [
            "This collaborative research initiative brings together the <strong>University of Transport and Communications (UTC)</strong> in Hanoi, Vietnam, and the <strong>University of Aizu (UoA)</strong> in Aizu-Wakamatsu, Japan. Founded on a shared commitment to advancing computing science and engineering, the partnership fosters cross-cultural academic exchange, joint research supervision, and technology transfer.",
            "Led by <strong>Dr. Duy-Anh Nguyen</strong> (UTC) and <strong>Prof. K.N Dang</strong> (UoA), the collaboration spans areas including computer architecture, embedded systems, intelligent transportation, IoT, and machine learning. Together, we mentor graduate students, co-author publications, and develop solutions that bridge academic research with real-world impact."
        ],
        stats: [
            { number: "10+", label: "Publications" },
            { number: "8+", label: "Students" },
            { number: "4", label: "Active Projects" },
            { number: "2022", label: "Since Year" }
        ]
    },

    professors: [
        {
            name: "Dr. Duy-Anh Nguyen",
            initials: "DA",
            role: "Principal Investigator",
            affiliation: "University of Transport and Communications, Hanoi, Vietnam",
            bio: "Dr. Duy-Anh Nguyen is a researcher and lecturer at UTC, specializing in intelligent transportation systems, computer vision, and applied machine learning. He leads collaborative research projects with international partners and supervises graduate students in cutting-edge computing research.",
            interests: ["Intelligent Transportation", "Computer Vision", "Machine Learning", "IoT"],
            links: [
                { label: "Google Scholar", url: "#" },
                { label: "Email", url: "mailto:duyanh@utc.edu.vn" }
            ]
        },
        {
            name: "Prof. Khanh-Nghi Dang",
            initials: "KN",
            role: "Principal Investigator",
            affiliation: "University of Aizu, Aizu-Wakamatsu, Japan",
            bio: "Prof. K.N Dang is a professor at the University of Aizu with expertise in computer architecture, embedded systems, and hardware-software co-design. His research group focuses on novel computing architectures, FPGA-based accelerators, and efficient computing for AI and edge applications.",
            interests: ["Computer Architecture", "Embedded Systems", "FPGA", "Edge Computing"],
            links: [
                { label: "Google Scholar", url: "#" },
                { label: "Email", url: "mailto:kndang@u-aizu.ac.jp" }
            ]
        }
    ],

    students: [
        {
            name: "Nguyen Van A",
            initials: "NA",
            program: "Ph.D. Candidate",
            university: "UTC",
            topic: "Deep learning-based traffic flow prediction using spatio-temporal graph neural networks",
            tags: ["Deep Learning", "Traffic Optimization"]
        },
        {
            name: "Tran Thi B",
            initials: "TB",
            program: "Ph.D. Candidate",
            university: "UoA",
            topic: "FPGA-accelerated inference engines for edge AI applications in autonomous systems",
            tags: ["FPGA", "Edge AI"]
        },
        {
            name: "Le Hoang C",
            initials: "LC",
            program: "Master's Student",
            university: "UTC",
            topic: "Computer vision techniques for railway infrastructure inspection and monitoring",
            tags: ["Computer Vision", "Infrastructure"]
        },
        {
            name: "Pham Minh D",
            initials: "PD",
            program: "Master's Student",
            university: "UoA",
            topic: "Energy-efficient hardware architectures for convolutional neural networks",
            tags: ["Hardware Design", "CNN"]
        },
        {
            name: "Vo Thanh E",
            initials: "VE",
            program: "Master's Student",
            university: "UTC",
            topic: "IoT-based smart transportation management system for urban areas",
            tags: ["IoT", "Smart City"]
        },
        {
            name: "Do Anh F",
            initials: "DF",
            program: "Undergraduate Researcher",
            university: "UTC",
            topic: "Mobile application for real-time public transport tracking and route optimization",
            tags: ["Mobile Dev", "Transport"]
        }
    ],

    projects: [
        {
            title: "AI-Powered Intelligent Transportation System",
            description: "Developing a comprehensive AI framework for real-time traffic monitoring, prediction, and optimization in urban environments using deep learning and edge computing technologies.",
            status: "active",
            tags: ["Deep Learning", "IoT", "Smart City"],
            period: "2024 – Present"
        },
        {
            title: "FPGA-Based Edge Computing Accelerators",
            description: "Designing novel FPGA architectures for efficient deployment of machine learning models at the edge, targeting low-latency and energy-constrained applications.",
            status: "active",
            tags: ["FPGA", "Edge Computing", "Hardware"],
            period: "2023 – Present"
        },
        {
            title: "Railway Infrastructure Inspection with Computer Vision",
            description: "Building an automated inspection system using drone imagery and computer vision to detect and classify defects in railway infrastructure components.",
            status: "active",
            tags: ["Computer Vision", "Drones", "Safety"],
            period: "2024 – Present"
        },
        {
            title: "Cross-Border Research Data Platform",
            description: "Establishing a secure and efficient data sharing platform to facilitate collaborative research between UTC and UoA, supporting reproducible experiments and joint publications.",
            status: "completed",
            tags: ["Data Platform", "Collaboration"],
            period: "2023 – 2024"
        },
        {
            title: "Smart Environmental Monitoring Network",
            description: "Deploying IoT sensor networks for real-time environmental monitoring in transport corridors, with data analytics for pollution assessment and mitigation strategies.",
            status: "upcoming",
            tags: ["IoT", "Environmental", "Sensors"],
            period: "2025 – Planned"
        }
    ],

    publications: {
        "2025": [
            {
                authors: "<strong>K.N Dang</strong>, D.A. Nguyen, T.T. B",
                title: "Efficient FPGA Architecture for Edge AI: A Comprehensive Framework",
                venue: "IEEE Transactions on Computers, 2025",
                links: [{ label: "PDF", url: "#" }, { label: "DOI", url: "#" }]
            },
            {
                authors: "<strong>D.A. Nguyen</strong>, K.N Dang, N.V. A",
                title: "Spatio-Temporal Graph Neural Networks for Urban Traffic Flow Prediction",
                venue: "ACM SIGKDD, 2025",
                links: [{ label: "PDF", url: "#" }, { label: "Code", url: "#" }]
            }
        ],
        "2024": [
            {
                authors: "<strong>K.N Dang</strong>, D.A. Nguyen",
                title: "Hardware-Software Co-Design for Energy-Efficient Edge Computing",
                venue: "IEEE/ACM International Symposium on Microarchitecture (MICRO), 2024",
                links: [{ label: "PDF", url: "#" }]
            },
            {
                authors: "<strong>D.A. Nguyen</strong>, L.H. C, K.N Dang",
                title: "Automated Railway Inspection Using Deep Convolutional Networks",
                venue: "Pattern Recognition, vol. 150, 2024",
                links: [{ label: "PDF", url: "#" }, { label: "DOI", url: "#" }]
            },
            {
                authors: "T.T. B, <strong>K.N Dang</strong>, D.A. Nguyen",
                title: "A Survey of FPGA-Based Accelerators for Deep Learning Inference",
                venue: "ACM Computing Surveys, 2024",
                links: [{ label: "PDF", url: "#" }]
            }
        ],
        "2023": [
            {
                authors: "<strong>D.A. Nguyen</strong>, K.N Dang, V.T. E",
                title: "IoT-Enabled Smart Transportation: Architecture, Challenges, and Opportunities",
                venue: "IEEE Internet of Things Journal, vol. 10, no. 8, 2023",
                links: [{ label: "PDF", url: "#" }, { label: "DOI", url: "#" }]
            }
        ]
    },

    activities: [
        {
            date: "Mar 2026",
            title: "Joint Workshop on Intelligent Computing Systems",
            description: "Annual workshop hosted at UTC, bringing together researchers from both universities to present findings and plan future collaborations."
        },
        {
            date: "Jan 2026",
            title: "New Ph.D. Students Join the Program",
            description: "Two new doctoral candidates have been admitted to the joint supervision program, focusing on edge AI and intelligent transportation."
        },
        {
            date: "Oct 2025",
            title: "Paper Accepted at ACM SIGKDD",
            description: "Our work on spatio-temporal graph neural networks for traffic prediction has been accepted for presentation at ACM SIGKDD 2025."
        },
        {
            date: "Aug 2025",
            title: "Summer Research Exchange — UoA Visit",
            description: "UTC students visited the University of Aizu for a 6-week research exchange, working alongside UoA lab members on FPGA accelerator design."
        },
        {
            date: "Apr 2025",
            title: "Research Seminar: Edge Computing Trends",
            description: "Prof. K.N Dang delivered an invited seminar at UTC on emerging trends in edge computing and hardware acceleration for AI."
        },
        {
            date: "Dec 2024",
            title: "Year-End Review and Planning Meeting",
            description: "Annual review meeting between UTC and UoA teams to assess project progress, publication outputs, and student development."
        },
        {
            date: "Sep 2024",
            title: "Paper Accepted at IEEE/ACM MICRO",
            description: "Our collaborative paper on hardware-software co-design for edge computing was accepted at the IEEE/ACM MICRO conference."
        }
    ],

    contacts: [
        {
            name: "Dr. Duy-Anh Nguyen",
            role: "Principal Investigator",
            affiliation: "Dept. of Information Technology<br>University of Transport and Communications<br>Hanoi, Vietnam",
            email: "duyanh@utc.edu.vn",
            office: "UTC Campus, Dong Da, Hanoi"
        },
        {
            name: "Prof. Khanh-Nghi Dang",
            role: "Principal Investigator",
            affiliation: "School of Computer Science and Engineering<br>University of Aizu<br>Aizu-Wakamatsu, Fukushima, Japan",
            email: "kndang@u-aizu.ac.jp",
            office: "UoA Campus, Tsuruga, Ikki-machi"
        }
    ]
};

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

function renderAbout() {
    const content = document.getElementById('about-content');
    content.innerHTML = SITE_DATA.about.paragraphs.map(p => `<p>${p}</p>`).join('');

    const stats = document.getElementById('about-stats');
    stats.innerHTML = SITE_DATA.about.stats.map(s => `
        <div class="stat-card">
            <div class="stat-number">${s.number}</div>
            <div class="stat-label">${s.label}</div>
        </div>
    `).join('');
}

function renderPeople() {
    const grid = document.getElementById('people-grid');
    grid.innerHTML = SITE_DATA.professors.map((p, i) => `
        <div class="person-card reveal" style="transition-delay: ${i * 0.1}s">
            <div class="person-header">
                <div class="person-avatar">${p.initials}</div>
                <div>
                    <div class="person-name">${p.name}</div>
                    <div class="person-role">${p.role}</div>
                    <div class="person-affiliation">${p.affiliation}</div>
                </div>
            </div>
            <p class="person-bio">${p.bio}</p>
            <div class="person-interests">
                ${p.interests.map(t => `<span class="person-interest-tag">${t}</span>`).join('')}
            </div>
            <div class="person-links">
                ${p.links.map(l => `<a class="person-link" href="${l.url}" ${l.url.startsWith('mailto') ? '' : 'target="_blank" rel="noopener"'}>${l.label}</a>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderStudents(filter = 'all') {
    const grid = document.getElementById('students-grid');
    const filtered = filter === 'all'
        ? SITE_DATA.students
        : SITE_DATA.students.filter(s => s.program.toLowerCase().includes(filter));

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
        renderStudents(e.target.dataset.filter);
    });
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = SITE_DATA.projects.map((p, i) => `
        <div class="project-card reveal" style="transition-delay: ${i * 0.08}s">
            <div class="project-status ${p.status}">
                <span class="project-status-dot"></span>
                ${p.status}
            </div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-description">${p.description}</p>
            <div class="project-meta">
                ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>
            <div class="project-footer">
                <span>${p.period}</span>
            </div>
        </div>
    `).join('');
}

function renderPublications() {
    const container = document.getElementById('publications-list');
    const years = Object.keys(SITE_DATA.publications).sort((a, b) => b - a);

    container.innerHTML = years.map(year => `
        <div class="pub-year-group reveal">
            <div class="pub-year-label">${year}</div>
            ${SITE_DATA.publications[year].map(pub => `
                <div class="pub-item">
                    <div class="pub-authors">${pub.authors}</div>
                    <div class="pub-title">${pub.title}</div>
                    <div class="pub-venue">${pub.venue}</div>
                    ${pub.links ? `<div class="pub-links">${pub.links.map(l =>
                        `<a class="pub-link" href="${l.url}" target="_blank" rel="noopener">[${l.label}]</a>`
                    ).join('')}</div>` : ''}
                </div>
            `).join('')}
        </div>
    `).join('');
}

function renderActivities() {
    const container = document.getElementById('activities-timeline');
    container.innerHTML = SITE_DATA.activities.map((a, i) => `
        <div class="timeline-item reveal" style="transition-delay: ${i * 0.06}s">
            <div class="timeline-dot"></div>
            <div class="timeline-date">${a.date}</div>
            <div class="timeline-title">${a.title}</div>
            <div class="timeline-description">${a.description}</div>
        </div>
    `).join('');
}

function renderContact() {
    const container = document.getElementById('contact-content');
    container.innerHTML = SITE_DATA.contacts.map(c => `
        <div class="contact-card">
            <div class="contact-card-name">${c.name}</div>
            <div class="contact-card-role">${c.role}</div>
            <div class="contact-card-affiliation">${c.affiliation}</div>
            <div class="contact-detail">
                <svg class="contact-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:${c.email}">${c.email}</a>
            </div>
            <div class="contact-detail">
                <svg class="contact-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${c.office}</span>
            </div>
        </div>
    `).join('');
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

document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    renderAbout();
    renderPeople();
    renderStudentFilters();
    renderStudents();
    renderProjects();
    renderPublications();
    renderActivities();
    renderContact();

    initNavbar();
    initFooter();

    requestAnimationFrame(() => {
        initRevealAnimations();
    });
});
