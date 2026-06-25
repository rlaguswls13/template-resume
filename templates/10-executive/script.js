async function loadData() {
  const res = await fetch('data.json');
  const d = await res.json();
  const init = d.profile.name[0];

  // HERO
  document.getElementById('execHero').innerHTML = `
    <div class="hero-avatar-wrap"><div class="hero-avatar">${init}</div></div>
    <h1 class="hero-name">${d.profile.name}</h1>
    <p class="hero-title">${d.profile.jobTitle}</p>
    <p class="hero-location">
      📍 ${d.profile.location} &nbsp;·&nbsp;
      <a href="mailto:${d.profile.email}">${d.profile.email}</a> &nbsp;·&nbsp;
      <a href="https://linkedin.com" target="_blank">${d.profile.linkedin}</a>
    </p>
    <div class="kpi-row">
      ${d.kpis.map(k => `
        <div class="kpi-box">
          <div class="kpi-val">${k.value}</div>
          <div class="kpi-lbl">${k.label}</div>
        </div>`).join('')}
    </div>`;

  // LEFT COL: summary + achievements
  document.getElementById('colLeft').innerHTML = `
    <p class="col-heading">Executive Summary</p>
    <p class="exec-summary">${d.summary}</p>
    <p class="col-heading">Key Achievements</p>
    ${d.achievements.map(a => `
      <div class="achievement-item">
        <div class="ach-dot"></div>
        <div>
          <p class="ach-title">${a.title}</p>
          <p class="ach-desc">${a.desc}</p>
        </div>
      </div>`).join('')}`;

  // CENTER COL: experience timeline
  document.getElementById('colCenter').innerHTML = `
    <p class="col-heading">경력</p>
    <div class="exp-exec">
      ${d.experience.map(e => `
        <div class="exp-exec-item">
          <div class="exec-dot"></div>
          <p class="exec-period">${e.period}</p>
          <p class="exec-co">${e.company}</p>
          <p class="exec-role">${e.role}</p>
          <ul class="exec-items">${e.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>`).join('')}
    </div>`;

  // RIGHT COL: skills + edu + certs
  document.getElementById('colRight').innerHTML = `
    <p class="col-heading">기술 & 전문성</p>
    ${Object.entries(d.skills).map(([cat, items]) => `
      <div class="skill-exec-group">
        <p class="se-cat">${cat}</p>
        <div class="se-tags">${items.map(i => `<span class="se-tag">${i}</span>`).join('')}</div>
      </div>`).join('')}
    <div class="exec-divider"></div>
    <p class="col-heading">학력</p>
    ${d.education.map(e => `
      <div class="edu-exec">
        <p class="edu-exec-school">${e.school}</p>
        <p class="edu-exec-major">${e.major}</p>
        <p class="edu-exec-period">${e.period}</p>
      </div>`).join('')}
    <div class="exec-divider"></div>
    <p class="col-heading">자격증</p>
    ${d.certifications.map(c => `
      <div class="cert-exec">
        <span class="cert-exec-star">★</span>
        <div>
          <p class="cert-exec-name">${c.name}</p>
          <p class="cert-exec-meta">${c.org} · ${c.year}</p>
        </div>
      </div>`).join('')}`;
}

loadData();
