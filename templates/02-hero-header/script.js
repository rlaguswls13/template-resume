async function loadData() {
  const res = await fetch('data.json');
  const d = await res.json();
  const init = d.profile.name[0];

  // HERO
  document.getElementById('hero').innerHTML = `
    <div class="hero-avatar">${init}</div>
    <div class="hero-info">
      <h1 class="hero-name">${d.profile.name}</h1>
      <p class="hero-title">${d.profile.jobTitle}</p>
      <p class="hero-tagline">${d.profile.tagline}</p>
      <div class="hero-stats">
        ${d.stats.map(s => `<div class="stat-box"><div class="stat-val">${s.value}</div><div class="stat-lbl">${s.label}</div></div>`).join('')}
      </div>
    </div>
    <div class="hero-contact">
      ${d.contact.map(c => `<div class="hero-contact-item"><span>${c.icon}</span>${c.href ? `<a href="${c.href}" ${c.target ? `target="${c.target}"` : ''}>${c.value}</a>` : `<span>${c.value}</span>`}</div>`).join('')}
    </div>`;

  // MAIN COL (experience + summary)
  document.getElementById('mainCol').innerHTML = `
    <div class="summary-box"><p>${d.summary}</p></div>
    <p class="section-title">경력</p>
    ${d.experience.map(e => `
      <div class="exp-item">
        <div class="exp-company">${e.company}</div>
        <div class="exp-position">${e.position}</div>
        <div class="exp-period">${e.period}</div>
        <ul class="exp-list">${e.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
      </div>`).join('')}`;

  // SIDE COL
  document.getElementById('sideCol').innerHTML = `
    <div class="side-card">
      <p class="section-title">스킬</p>
      ${Object.entries(d.skills).map(([cat, items]) => `
        <div class="skill-group">
          <p class="skill-group-label">${cat}</p>
          <div class="skill-pills">${items.map(i => `<span class="pill">${i}</span>`).join('')}</div>
        </div>`).join('')}
    </div>
    <div class="side-card">
      <p class="section-title">학력</p>
      ${d.education.map(e => `
        <div class="edu-item">
          <p class="edu-school">${e.school}</p>
          <p class="edu-degree">${e.degree}</p>
          <p class="edu-period">${e.period}</p>
        </div>`).join('')}
    </div>
    <div class="side-card">
      <p class="section-title">자격증</p>
      ${d.certifications.map(c => `
        <div class="cert-item">
          <p class="cert-title">${c.title}</p>
          <p class="cert-issuer">${c.issuer}</p>
          <p class="cert-date">${c.date}</p>
        </div>`).join('')}
    </div>`;
}

loadData();
