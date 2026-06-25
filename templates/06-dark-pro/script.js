async function loadData() {
  const res = await fetch('data.json');
  const d = await res.json();
  const init = d.profile.name[0];

  document.getElementById('darkSidebar').innerHTML = `
    <div class="d-avatar-wrap">
      <div class="d-avatar">${init}</div>
      <h1 class="d-name">${d.profile.name}</h1>
      <p class="d-title">${d.profile.jobTitle}</p>
      <p class="d-tagline">${d.profile.tagline}</p>
    </div>
    <div class="d-divider"></div>
    <p class="d-label">연락처</p>
    <ul class="d-contact-list">
      ${d.contact.map(c => `<li><span>${c.icon}</span>${c.href ? `<a href="${c.href}" ${c.target ? `target="${c.target}"` : ''}>${c.value}</a>` : `<span>${c.value}</span>`}</li>`).join('')}
    </ul>
    <div class="d-divider"></div>
    <p class="d-label">기술 스택</p>
    ${d.skills.map(s => `
      <div class="d-skill-block">
        <p class="d-skill-cat">${s.cat}</p>
        <div class="d-skill-list">${s.items.map(i => `<span class="d-tag">${i}</span>`).join('')}</div>
      </div>`).join('')}
    <div class="d-divider"></div>
    <p class="d-label">학력</p>
    ${d.education.map(e => `
      <div class="d-edu-item">
        <p class="d-edu-school">${e.school}</p>
        <p class="d-edu-deg">${e.degree}</p>
        <p class="d-edu-yr">${e.period}</p>
      </div>`).join('')}`;

  document.getElementById('darkMain').innerHTML = `
    <div class="dm-section">
      <p class="dm-heading">// About</p>
      <p class="about-text">${d.profile.tagline}</p>
    </div>
    <div class="dm-section">
      <p class="dm-heading">// Experience</p>
      ${d.experience.map(e => `
        <div class="exp-dark">
          <div class="exp-dark-top">
            <div>
              <p class="exp-company-d">${e.company}</p>
              <p class="exp-role-d">${e.role}</p>
            </div>
            <span class="exp-date-d">${e.period}</span>
          </div>
          <ul class="exp-details">${e.details.map(r => `<li>${r}</li>`).join('')}</ul>
        </div>`).join('')}
    </div>
    <div class="dm-section">
      <p class="dm-heading">// Certifications</p>
      ${d.certifications.map(c => `
        <div class="cert-dark">
          <div class="cert-led"></div>
          <div>
            <p class="cert-name-d">${c.name}</p>
            <p class="cert-meta-d">${c.issuer} · ${c.date}</p>
          </div>
        </div>`).join('')}
    </div>`;
}

loadData();
