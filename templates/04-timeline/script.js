async function loadData() {
  const res = await fetch('data.json');
  const d = await res.json();
  const init = d.profile.name[0];

  // TOP BAR
  document.getElementById('topBar').innerHTML = `
    <div class="tb-avatar">${init}</div>
    <div class="tb-info">
      <h1 class="tb-name">${d.profile.name}</h1>
      <p class="tb-title">${d.profile.jobTitle}</p>
      <p class="tb-tagline">${d.profile.tagline}</p>
    </div>
    <div class="tb-contact">
      ${d.contact.map(c => `<div class="tb-contact-item"><span>${c.icon}</span>${c.href ? `<a href="${c.href}" ${c.target ? `target="${c.target}"` : ''}>${c.value}</a>` : `<span>${c.value}</span>`}</div>`).join('')}
    </div>`;

  // TIMELINE
  document.getElementById('timelineCol').innerHTML = `
    <p class="section-heading">경력 타임라인</p>
    <div class="timeline">
      ${d.experience.map(e => `
        <div class="tl-item">
          <div class="tl-dot"></div>
          <p class="tl-date">${e.period}</p>
          <p class="tl-company">${e.company}</p>
          <p class="tl-role">${e.position}</p>
          <ul class="tl-highlights">${e.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
        </div>`).join('')}
    </div>`;

  // INFO COL
  document.getElementById('infoCol').innerHTML = `
    <div class="info-card">
      <p class="section-heading">스킬</p>
      ${Object.entries(d.skills).map(([cat, items]) => `
        <div class="skill-group">
          <p class="sg-label">${cat}</p>
          <div class="sg-tags">${items.map(i => `<span class="sg-tag">${i}</span>`).join('')}</div>
        </div>`).join('')}
    </div>
    <div class="info-card">
      <p class="section-heading">학력</p>
      ${d.education.map(e => `
        <div class="edu-row">
          <p class="edu-name">${e.school}</p>
          <p class="edu-deg">${e.degree}</p>
          <p class="edu-yr">${e.period}</p>
        </div>`).join('')}
    </div>
    <div class="info-card">
      <p class="section-heading">자격증</p>
      ${d.certifications.map(c => `
        <div class="cert-row">
          <div class="cert-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg></div>
          <div>
            <p class="cert-t">${c.title}</p>
            <p class="cert-m"><span>${c.issuer}</span> · ${c.date}</p>
          </div>
        </div>`).join('')}
    </div>`;
}

loadData();
