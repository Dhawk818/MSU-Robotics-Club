const routes = ["home", "login", "register", "dashboard", "admin"];

const defaultSiteContent = {
  brand: {
    title: "MSU Denver Robotics",
    subtitle: "Club Portal",
    footer: "MSU Denver Robotics Club - Dark Robotics Launch Standard"
  },
  theme: {
    accent: "#00d9ff",
    yellow: "#d6f400",
    text: "#f4f7fb",
    muted: "#8a93a7"
  },
  hero: {
    kicker: "Advanced Robotics Division",
    title: "Build robots. Learn systems. Compete together.",
    description: "MSU Denver Robotics Club is a student-built robotics community for programmers, designers, engineers, makers, and curious beginners. Explore autonomous builds, electronics, AI, mechanical design, and competition-ready prototypes.",
    primaryButton: "Get Started",
    secondaryButton: "Discover Projects",
    metricOneLabel: "Sign-ups",
    metricTwoLabel: "Active Tracks",
    metricThreeLabel: "Club Events"
  },
  focusStrip: ["Programming", "Electronics", "Mechanical", "Competition"],
  gallerySection: {
    kicker: "Robotics In Action",
    title: "See the kind of future we are building.",
    description: "Robotics is not just code. It is machines, circuits, teamwork, testing, design, and problem-solving coming together."
  },
  gallery: [
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80",
      alt: "Humanoid robot technology display",
      label: "Automation",
      title: "Robotics Systems",
      tall: false
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
      alt: "Electronic circuit board close up",
      label: "Electronics",
      title: "Circuits and Sensors",
      tall: true
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
      alt: "Student working with technology",
      label: "Team Build",
      title: "Hands-On Learning",
      tall: false
    }
  ],
  about: {
    kicker: "About The Club",
    title: "Where curiosity turns into working machines.",
    description: "The club is designed for students who want to learn by building. Some members focus on code, some on circuits, some on design, and some just show up ready to learn. Together, the group turns ideas into working robotic systems.",
    specs: [
      { label: "Experience", value: "No experience required" },
      { label: "Tracks", value: "Beginner to advanced" },
      { label: "Tools", value: "Arduino, CAD, sensors, code" },
      { label: "Focus", value: "Autonomy, AI, electronics" },
      { label: "Cost", value: "Free student club participation" }
    ]
  },
  process: {
    kicker: "Club Process",
    title: "From idea to robot.",
    description: "Members move through a practical build cycle that mirrors real robotics development.",
    cards: [
      {
        number: "Step 01",
        icon: "R",
        title: "Research",
        description: "Study the problem, choose sensors, define the goal, and sketch a build direction."
      },
      {
        number: "Step 02",
        icon: "B",
        title: "Build",
        description: "Assemble the frame, wire components, design parts, and prepare the robot platform."
      },
      {
        number: "Step 03",
        icon: "P",
        title: "Program",
        description: "Write control logic, test navigation, tune behavior, and add automation features."
      },
      {
        number: "Step 04",
        icon: "C",
        title: "Compete",
        description: "Showcase the build, prepare for events, and improve through testing and teamwork."
      }
    ]
  },
  showcase: {
    kicker: "Showcase Preview",
    title: "Explore what members can build.",
    description: "Use the project area to see robotics tracks, build categories, and club learning paths."
  },
  projectsSection: {
    kicker: "Project Focus",
    title: "Where innovation meets automation.",
    description: "Choose a focus area and explore the robotics builds the club can grow around."
  },
  eventsSection: {
    kicker: "Mission Calendar",
    title: "Club events and build sessions.",
    description: "Keep track of meetings, workshops, build nights, and competition preparation."
  },
  teamSection: {
    kicker: "Crew",
    title: "Club leadership structure.",
    description: "These are default officer cards. Replace them with the actual MSU Denver Robotics Club officers when ready."
  },
  faqSection: {
    kicker: "FAQ",
    title: "Questions before joining?",
    description: "Here are the common questions new members usually have."
  },
  contact: {
    kicker: "Get Started",
    title: "Ready to build with the club?",
    description: "Submit your interest here, or register a demo member account using the Register button at the top. This section can later connect to a real form or database."
  },
  projects: [
    {
      title: "Maze Solver Bot",
      description: "A compact robot that uses sensors and pathfinding logic to escape a maze.",
      tags: ["competition", "hardware", "beginner"]
    },
    {
      title: "Object Sorting Arm",
      description: "A robotic arm that separates objects by color using a camera and servo control.",
      tags: ["ai", "hardware"]
    },
    {
      title: "Line Follower Racer",
      description: "A speed-focused robot designed to follow a track using infrared sensors.",
      tags: ["competition", "beginner"]
    },
    {
      title: "Rescue Rover",
      description: "A rover prototype made for rough terrain, obstacle avoidance, and remote control.",
      tags: ["competition", "hardware"]
    },
    {
      title: "Vision Navigator",
      description: "A computer-vision project that identifies markers and guides a robot through zones.",
      tags: ["ai", "competition"]
    },
    {
      title: "Intro Arduino Kit",
      description: "A beginner-friendly electronics build using LEDs, buttons, motors, and simple code.",
      tags: ["beginner", "hardware"]
    }
  ],
  events: [
    {
      month: "SEP",
      day: "12",
      title: "Kickoff Meeting",
      details: "Meet the team, choose project groups, and review the competition calendar.",
      location: "Room 214 - Engineering Lab"
    },
    {
      month: "SEP",
      day: "19",
      title: "Arduino Workshop",
      details: "Learn basic circuits, motor control, and microcontroller programming.",
      location: "Makerspace"
    },
    {
      month: "OCT",
      day: "03",
      title: "Build Night",
      details: "Bring your project parts and work with the team on robot prototypes.",
      location: "Robotics Lab"
    },
    {
      month: "NOV",
      day: "15",
      title: "Regional Robotics Competition",
      details: "Competition team travels to test the season robot against other schools.",
      location: "Downtown Convention Center"
    }
  ],
  team: [
    {
      initials: "PR",
      title: "President",
      description: "Coordinates the club, meetings, and official student organization direction."
    },
    {
      initials: "PL",
      title: "Programming Lead",
      description: "Guides coding, automation logic, AI/vision experiments, and software testing."
    },
    {
      initials: "ML",
      title: "Mechanical Lead",
      description: "Helps with frame design, prototyping, fabrication, and physical build quality."
    }
  ],
  faqs: [
    {
      question: "Do I need robotics experience?",
      answer: "No. Beginners are welcome. The club can support students who are just starting as well as students who already have coding, electronics, or design experience."
    },
    {
      question: "Is the club free?",
      answer: "Yes. This site should not include pricing or paid package sections. It is for MSU Denver Robotics Club participation and interest collection."
    },
    {
      question: "What kind of projects can members work on?",
      answer: "Members can work on autonomous robots, sensor systems, Arduino builds, mechanical prototypes, AI/computer vision experiments, and competition-style robotics projects."
    },
    {
      question: "What does the login portal do?",
      answer: "The portal is a demo member/admin system. Members get a dashboard, while admins can add events, manage projects, review interest submissions, and edit the site content."
    }
  ]
};

const demoUsers = [
  {
    name: "Admin Officer",
    email: "admin@msudenver.edu",
    password: "Admin123!",
    role: "admin",
    interest: "Administration"
  },
  {
    name: "Club Member",
    email: "member@msudenver.edu",
    password: "Member123!",
    role: "member",
    interest: "Robotics"
  }
];

const storageKeys = {
  session: "msuRoboticsCurrentUser",
  members: "msuRoboticsMembers",
  users: "msuRoboticsUsers",
  siteContent: "msuRoboticsSiteContent"
};

const navLinks = document.getElementById("navLinks");
const mobileToggle = document.getElementById("mobileToggle");
const logoutBtn = document.getElementById("logoutBtn");
const roleBadge = document.getElementById("roleBadge");
const joinForm = document.getElementById("joinForm");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const memberList = document.getElementById("memberList");
const adminMemberList = document.getElementById("adminMemberList");
const adminEventList = document.getElementById("adminEventList");
const adminProjectList = document.getElementById("adminProjectList");
const toast = document.getElementById("toast");
const clearMembers = document.getElementById("clearMembers");
const clearAllMembers = document.getElementById("clearAllMembers");
const resetDemoData = document.getElementById("resetDemoData");
const adminEventForm = document.getElementById("adminEventForm");
const adminProjectForm = document.getElementById("adminProjectForm");
const siteJsonEditor = document.getElementById("siteJsonEditor");
const applyJsonButton = document.getElementById("applyJsonButton");
const downloadJsonButton = document.getElementById("downloadJsonButton");
const resetSiteContentButton = document.getElementById("resetSiteContentButton");
const editorTabs = document.getElementById("editorTabs");
const editorForms = document.getElementById("editorForms");

function readData(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function writeData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function deepMerge(defaultValue, savedValue) {
  if (Array.isArray(defaultValue)) {
    return Array.isArray(savedValue) ? savedValue : cloneData(defaultValue);
  }

  if (
    defaultValue &&
    typeof defaultValue === "object" &&
    !Array.isArray(defaultValue)
  ) {
    const result = cloneData(defaultValue);
    const savedObject = savedValue && typeof savedValue === "object" ? savedValue : {};

    Object.keys(savedObject).forEach(key => {
      if (key in defaultValue) {
        result[key] = deepMerge(defaultValue[key], savedObject[key]);
      } else {
        result[key] = savedObject[key];
      }
    });

    return result;
  }

  return savedValue === undefined || savedValue === null ? defaultValue : savedValue;
}

function getSiteContent() {
  const savedContent = readData(storageKeys.siteContent, {});
  return deepMerge(defaultSiteContent, savedContent);
}

function saveSiteContent(content) {
  writeData(storageKeys.siteContent, content);
}

function getUsers() {
  return [...demoUsers, ...readData(storageKeys.users, [])];
}

function saveRegisteredUsers(users) {
  writeData(storageKeys.users, users);
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem(storageKeys.session) || "null");
}

function isLoggedIn() {
  return Boolean(getCurrentUser());
}

function isAdmin() {
  const user = getCurrentUser();
  return user && user.role === "admin";
}

function getMembers() {
  return readData(storageKeys.members, []);
}

function saveMembers(members) {
  writeData(storageKeys.members, members);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function setText(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value || "";
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function applyTheme(content) {
  const root = document.documentElement;

  root.style.setProperty("--cyan", content.theme.accent);
  root.style.setProperty("--yellow", content.theme.yellow);
  root.style.setProperty("--text", content.theme.text);
  root.style.setProperty("--muted", content.theme.muted);
}

function renderSiteContent() {
  const content = getSiteContent();

  applyTheme(content);

  document.title = content.brand.title;

  setText("brandTitle", content.brand.title);
  setText("brandSubtitle", content.brand.subtitle);
  setText("footerText", content.brand.footer);

  setText("heroKicker", content.hero.kicker);
  setText("heroTitle", content.hero.title);
  setText("heroDescription", content.hero.description);
  setText("heroPrimaryButton", content.hero.primaryButton);
  setText("heroSecondaryButton", content.hero.secondaryButton);
  setText("metricOneLabel", content.hero.metricOneLabel);
  setText("metricTwoLabel", content.hero.metricTwoLabel);
  setText("metricThreeLabel", content.hero.metricThreeLabel);

  document.getElementById("focusStrip").innerHTML = content.focusStrip
    .map(item => `<div class="logo-pill">${escapeHtml(item)}</div>`)
    .join("");

  setText("galleryKicker", content.gallerySection.kicker);
  setText("galleryTitle", content.gallerySection.title);
  setText("galleryDescription", content.gallerySection.description);

  document.getElementById("galleryGrid").innerHTML = content.gallery
    .map(item => `
      <article class="photo-card ${item.tall ? "tall" : ""}">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" />
        <div class="photo-overlay">
          <span>${escapeHtml(item.label)}</span>
          <h3>${escapeHtml(item.title)}</h3>
        </div>
      </article>
    `)
    .join("");

  setText("aboutKicker", content.about.kicker);
  setText("aboutTitle", content.about.title);
  setText("aboutDescription", content.about.description);

  document.getElementById("aboutSpecs").innerHTML = content.about.specs
    .map(spec => `
      <div class="spec-row">
        <strong>${escapeHtml(spec.label)}</strong>
        <span>${escapeHtml(spec.value)}</span>
      </div>
    `)
    .join("");

  setText("processKicker", content.process.kicker);
  setText("processTitle", content.process.title);
  setText("processDescription", content.process.description);

  document.getElementById("processGrid").innerHTML = content.process.cards
    .map(card => `
      <article class="content-card">
        <span class="card-number">${escapeHtml(card.number)}</span>
        <div class="card-icon">${escapeHtml(card.icon)}</div>
        <h3>${escapeHtml(card.title)}</h3>
        <p>${escapeHtml(card.description)}</p>
      </article>
    `)
    .join("");

  setText("showcaseKicker", content.showcase.kicker);
  setText("showcaseTitle", content.showcase.title);
  setText("showcaseDescription", content.showcase.description);

  setText("projectsKicker", content.projectsSection.kicker);
  setText("projectsTitle", content.projectsSection.title);
  setText("projectsDescription", content.projectsSection.description);

  setText("eventsKicker", content.eventsSection.kicker);
  setText("eventsTitle", content.eventsSection.title);
  setText("eventsDescription", content.eventsSection.description);

  setText("teamKicker", content.teamSection.kicker);
  setText("teamTitle", content.teamSection.title);
  setText("teamDescription", content.teamSection.description);

  document.getElementById("teamGrid").innerHTML = content.team
    .map(member => `
      <article class="content-card team-card">
        <div class="avatar">${escapeHtml(member.initials)}</div>
        <h3>${escapeHtml(member.title)}</h3>
        <p>${escapeHtml(member.description)}</p>
      </article>
    `)
    .join("");

  setText("faqKicker", content.faqSection.kicker);
  setText("faqTitle", content.faqSection.title);
  setText("faqDescription", content.faqSection.description);

  document.getElementById("faqList").innerHTML = content.faqs
    .map((faq, index) => `
      <article class="faq-item ${index === 0 ? "open" : ""}">
        <button class="faq-question" type="button">
          <span>${escapeHtml(faq.question)}</span>
          <span>+</span>
        </button>
        <div class="faq-answer">${escapeHtml(faq.answer)}</div>
      </article>
    `)
    .join("");

  setText("contactKicker", content.contact.kicker);
  setText("contactTitle", content.contact.title);
  setText("contactDescription", content.contact.description);
}

function scrollToSection(sectionId) {
  setRoute("home", false);

  window.setTimeout(() => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 60);
}

function updateNavVisibility() {
  const user = getCurrentUser();

  document.querySelectorAll(".logged-in-only").forEach(element => {
    element.classList.toggle("hidden", !user);
  });

  document.querySelectorAll(".logged-out-only").forEach(element => {
    element.classList.toggle("hidden", Boolean(user));
  });

  document.querySelectorAll(".admin-only").forEach(element => {
    element.classList.toggle("hidden", !user || user.role !== "admin");
  });

  if (user) {
    roleBadge.textContent = user.role === "admin" ? "Admin" : "Member";

    setText(
      "dashboardWelcome",
      `Welcome back, ${user.name}. Your current access level is ${user.role}.`
    );

    setText("dashboardRole", user.role);
  }
}

function setRoute(route, scrollTop = true) {
  const requestedRoute = routes.includes(route) ? route : "home";
  let safeRoute = requestedRoute;

  if ((requestedRoute === "dashboard" || requestedRoute === "admin") && !isLoggedIn()) {
    safeRoute = "login";
    showToast("Please log in first.");
  }

  if (requestedRoute === "admin" && !isAdmin()) {
    safeRoute = "dashboard";
    showToast("Admin access required.");
  }

  document.querySelectorAll(".page").forEach(page => {
    page.classList.toggle("active", page.id === safeRoute);
  });

  document.querySelectorAll(".nav-link[data-route]").forEach(link => {
    link.classList.toggle("active", link.dataset.route === safeRoute);
  });

  window.location.hash = safeRoute;
  navLinks.classList.remove("open");
  renderAll();

  if (scrollTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function renderProjects(filter = document.querySelector(".chip.active")?.dataset.filter || "all") {
  const projects = getSiteContent().projects;
  const visibleProjects = filter === "all"
    ? projects
    : projects.filter(project => project.tags.includes(filter));

  document.getElementById("projectGrid").innerHTML = visibleProjects
    .map(project => `
      <article class="content-card">
        <div class="card-icon">R</div>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.description)}</p>
        <div class="tag-list">
          ${project.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
        </div>
      </article>
    `)
    .join("");
}

function renderEvents() {
  const events = getSiteContent().events;

  document.getElementById("eventList").innerHTML = events
    .map(event => `
      <article class="event-item">
        <div class="date-box">
          <small>${escapeHtml(event.month)}</small>
          <span>${escapeHtml(event.day)}</span>
        </div>
        <div>
          <h3>${escapeHtml(event.title)}</h3>
          <p>${escapeHtml(event.details)}</p>
          <p><strong>Location:</strong> ${escapeHtml(event.location)}</p>
        </div>
        <button class="btn btn-secondary" type="button" data-event="${escapeHtml(event.title)}">Interested</button>
      </article>
    `)
    .join("");
}

function renderMembers() {
  const members = getMembers();

  if (!memberList) {
    return;
  }

  memberList.innerHTML = members.length === 0
    ? `<p>No demo sign-ups yet.</p>`
    : members
        .map(member => `
          <div class="member-pill">
            <span><strong>${escapeHtml(member.name)}</strong> - ${escapeHtml(member.interest)}</span>
            <span>${escapeHtml(member.level || "Member")}</span>
          </div>
        `)
        .join("");
}

function renderAdminLists() {
  const content = getSiteContent();
  const members = getMembers();

  adminMemberList.innerHTML = members.length === 0
    ? `<p>No submitted sign-ups.</p>`
    : members
        .map((member, index) => `
          <article class="admin-list-item">
            <div>
              <h3>${escapeHtml(member.name)}</h3>
              <p><strong>Email:</strong> ${escapeHtml(member.email)}</p>
              <p><strong>Level:</strong> ${escapeHtml(member.level || "Registered Member")}</p>
              <p><strong>Interest:</strong> ${escapeHtml(member.interest)}</p>
              <p>${escapeHtml(member.reason || "Registered through the portal.")}</p>
            </div>
            <button class="btn btn-danger btn-small" type="button" data-delete-member="${index}">Delete</button>
          </article>
        `)
        .join("");

  adminEventList.innerHTML = content.events
    .map((event, index) => `
      <article class="admin-list-item">
        <div>
          <h3>${escapeHtml(event.month)} ${escapeHtml(event.day)} - ${escapeHtml(event.title)}</h3>
          <p>${escapeHtml(event.details)}</p>
          <p><strong>Location:</strong> ${escapeHtml(event.location)}</p>
        </div>
        <button class="btn btn-danger btn-small" type="button" data-delete-event="${index}">Delete</button>
      </article>
    `)
    .join("");

  adminProjectList.innerHTML = content.projects
    .map((project, index) => `
      <article class="admin-list-item">
        <div>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
          <div class="tag-list">
            ${project.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
        </div>
        <button class="btn btn-danger btn-small" type="button" data-delete-project="${index}">Delete</button>
      </article>
    `)
    .join("");
}

function renderStats() {
  const content = getSiteContent();

  setText("memberCountStat", getMembers().length);
  setText("projectCountStat", content.projects.length);
  setText("eventCountStat", content.events.length);
  setText("dashboardEvents", content.events.length);
  setText("dashboardProjects", content.projects.length);
}

function renderEditorTabs() {
  if (!isAdmin()) {
    return;
  }

  const sections = [
    "brand",
    "theme",
    "hero",
    "focusStrip",
    "gallerySection",
    "gallery",
    "about",
    "process",
    "showcase",
    "projectsSection",
    "eventsSection",
    "teamSection",
    "faqSection",
    "contact",
    "projects",
    "events",
    "team",
    "faqs"
  ];

  editorTabs.innerHTML = sections
    .map((section, index) => `
      <button class="editor-tab ${index === 0 ? "active" : ""}" type="button" data-editor-section="${section}">
        ${section}
      </button>
    `)
    .join("");

  editorForms.innerHTML = sections
    .map((section, index) => `
      <form class="editor-form ${index === 0 ? "active" : ""}" data-editor-form="${section}">
        <h3>${section.toUpperCase()} Editor</h3>
        <p>Edit this section using JSON. This gives admin broad site access while keeping the interface compact.</p>
        <textarea class="json-editor" data-section-json="${section}" spellcheck="false"></textarea>
        <button class="btn btn-primary" type="submit">Save ${section}</button>
      </form>
    `)
    .join("");

  refreshEditorValues();
}

function refreshEditorValues() {
  if (!isAdmin()) {
    return;
  }

  const content = getSiteContent();

  siteJsonEditor.value = JSON.stringify(content, null, 2);

  document.querySelectorAll("[data-section-json]").forEach(textarea => {
    const key = textarea.dataset.sectionJson;
    textarea.value = JSON.stringify(content[key], null, 2);
  });
}

function downloadSiteJson() {
  const content = JSON.stringify(getSiteContent(), null, 2);
  const blob = new Blob([content], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "msu-denver-robotics-club-site-content.json";

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

function renderAll() {
  renderSiteContent();
  renderProjects();
  renderEvents();
  renderMembers();
  renderStats();
  updateNavVisibility();

  if (isAdmin()) {
    renderAdminLists();

    if (!editorTabs.dataset.ready) {
      renderEditorTabs();
      editorTabs.dataset.ready = "true";
    }

    refreshEditorValues();
  }
}

loginForm.addEventListener("submit", event => {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;

  const matchedUser = getUsers().find(user => {
    return user.email.toLowerCase() === email && user.password === password;
  });

  if (!matchedUser) {
    showToast("Login failed. Check the email and password.");
    return;
  }

  localStorage.setItem(storageKeys.session, JSON.stringify({
    name: matchedUser.name,
    email: matchedUser.email,
    role: matchedUser.role,
    interest: matchedUser.interest
  }));

  loginForm.reset();
  showToast(`Logged in as ${matchedUser.role}.`);
  editorTabs.dataset.ready = "";
  setRoute(matchedUser.role === "admin" ? "admin" : "dashboard");
});

registerForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim().toLowerCase();
  const password = document.getElementById("registerPassword").value;
  const interest = document.getElementById("registerInterest").value;

  const emailAlreadyExists = getUsers().some(user => {
    return user.email.toLowerCase() === email;
  });

  if (emailAlreadyExists) {
    showToast("That email is already registered.");
    return;
  }

  const registeredUsers = readData(storageKeys.users, []);

  registeredUsers.push({
    name,
    email,
    password,
    role: "member",
    interest
  });

  saveRegisteredUsers(registeredUsers);

  const members = getMembers();

  members.unshift({
    name,
    email,
    level: "Registered Member",
    interest,
    reason: "Created a member account through the portal.",
    createdAt: new Date().toISOString()
  });

  saveMembers(members);

  registerForm.reset();
  showToast("Registration complete. You can log in now.");
  setRoute("login");
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem(storageKeys.session);
  editorTabs.dataset.ready = "";
  showToast("Logged out.");
  setRoute("home");
});

document.addEventListener("click", event => {
  const routeButton = event.target.closest("[data-route]");

  if (routeButton) {
    event.preventDefault();
    setRoute(routeButton.dataset.route);
  }

  const scrollButton = event.target.closest("[data-scroll]");

  if (scrollButton) {
    event.preventDefault();
    scrollToSection(scrollButton.dataset.scroll);
    navLinks.classList.remove("open");
  }

  const eventButton = event.target.closest("[data-event]");

  if (eventButton) {
    showToast(`Marked interested: ${eventButton.dataset.event}`);
  }

  const faqButton = event.target.closest(".faq-question");

  if (faqButton) {
    faqButton.closest(".faq-item").classList.toggle("open");
  }

  const tabButton = event.target.closest("[data-editor-section]");

  if (tabButton) {
    document.querySelectorAll(".editor-tab").forEach(tab => {
      tab.classList.remove("active");
    });

    document.querySelectorAll(".editor-form").forEach(form => {
      form.classList.remove("active");
    });

    tabButton.classList.add("active");

    const matchingForm = document.querySelector(`[data-editor-form="${tabButton.dataset.editorSection}"]`);

    if (matchingForm) {
      matchingForm.classList.add("active");
    }
  }

  const memberDelete = event.target.closest("[data-delete-member]");

  if (memberDelete && isAdmin()) {
    const members = getMembers();

    members.splice(Number(memberDelete.dataset.deleteMember), 1);
    saveMembers(members);
    renderAll();
    showToast("Member sign-up deleted.");
  }

  const eventDelete = event.target.closest("[data-delete-event]");

  if (eventDelete && isAdmin()) {
    const content = getSiteContent();

    content.events.splice(Number(eventDelete.dataset.deleteEvent), 1);
    saveSiteContent(content);
    renderAll();
    showToast("Event deleted.");
  }

  const projectDelete = event.target.closest("[data-delete-project]");

  if (projectDelete && isAdmin()) {
    const content = getSiteContent();

    content.projects.splice(Number(projectDelete.dataset.deleteProject), 1);
    saveSiteContent(content);
    renderAll();
    showToast("Project deleted.");
  }
});

document.addEventListener("submit", event => {
  const editorForm = event.target.closest("[data-editor-form]");

  if (!editorForm) {
    return;
  }

  event.preventDefault();

  if (!isAdmin()) {
    return;
  }

  const key = editorForm.dataset.editorForm;
  const textarea = editorForm.querySelector("[data-section-json]");

  try {
    const nextValue = JSON.parse(textarea.value);
    const content = getSiteContent();

    content[key] = nextValue;
    saveSiteContent(content);
    renderAll();
    showToast(`${key} updated.`);
  } catch (error) {
    showToast("Invalid JSON. Fix formatting and try again.");
  }
});

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(item => {
      item.classList.remove("active");
    });

    chip.classList.add("active");
    renderProjects(chip.dataset.filter);
  });
});

mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

joinForm.addEventListener("submit", event => {
  event.preventDefault();

  const newMember = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    level: document.getElementById("level").value,
    interest: document.getElementById("interest").value,
    reason: document.getElementById("reason").value.trim(),
    createdAt: new Date().toISOString()
  };

  const members = getMembers();

  members.unshift(newMember);
  saveMembers(members);
  renderAll();
  joinForm.reset();
  showToast("Interest form submitted.");
});

clearMembers.addEventListener("click", () => {
  if (!isAdmin()) {
    return;
  }

  saveMembers([]);
  renderAll();
  showToast("Demo sign-ups cleared.");
});

clearAllMembers.addEventListener("click", () => {
  if (!isAdmin()) {
    return;
  }

  saveMembers([]);
  renderAll();
  showToast("All sign-ups cleared.");
});

resetDemoData.addEventListener("click", () => {
  if (!isAdmin()) {
    return;
  }

  saveMembers([]);
  saveRegisteredUsers([]);
  saveSiteContent(cloneData(defaultSiteContent));
  editorTabs.dataset.ready = "";
  renderAll();
  showToast("Demo data reset.");
});

adminEventForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!isAdmin()) {
    return;
  }

  const content = getSiteContent();

  content.events.push({
    month: document.getElementById("adminEventMonth").value.trim().toUpperCase(),
    day: document.getElementById("adminEventDay").value.trim(),
    title: document.getElementById("adminEventTitle").value.trim(),
    details: document.getElementById("adminEventDetails").value.trim(),
    location: document.getElementById("adminEventLocation").value.trim()
  });

  saveSiteContent(content);
  adminEventForm.reset();
  renderAll();
  showToast("Event added.");
});

adminProjectForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!isAdmin()) {
    return;
  }

  const content = getSiteContent();

  content.projects.push({
    title: document.getElementById("adminProjectTitle").value.trim(),
    description: document.getElementById("adminProjectDescription").value.trim(),
    tags: document
      .getElementById("adminProjectTags")
      .value
      .split(",")
      .map(tag => tag.trim().toLowerCase())
      .filter(Boolean)
  });

  saveSiteContent(content);
  adminProjectForm.reset();
  renderAll();
  showToast("Project added.");
});

applyJsonButton.addEventListener("click", () => {
  if (!isAdmin()) {
    return;
  }

  try {
    const content = JSON.parse(siteJsonEditor.value);

    saveSiteContent(content);
    editorTabs.dataset.ready = "";
    renderAll();
    showToast("Full site JSON applied.");
  } catch (error) {
    showToast("Invalid JSON. Fix formatting and try again.");
  }
});

downloadJsonButton.addEventListener("click", () => {
  if (!isAdmin()) {
    return;
  }

  downloadSiteJson();
});

resetSiteContentButton.addEventListener("click", () => {
  if (!isAdmin()) {
    return;
  }

  saveSiteContent(cloneData(defaultSiteContent));
  editorTabs.dataset.ready = "";
  renderAll();
  showToast("Site content reset.");
});

window.addEventListener("hashchange", () => {
  const route = window.location.hash.replace("#", "");

  if (routes.includes(route)) {
    setRoute(route || "home", false);
  }
});

renderAll();
setRoute(window.location.hash.replace("#", "") || "home", false);
