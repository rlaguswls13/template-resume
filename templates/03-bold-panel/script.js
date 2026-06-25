async function loadData() {
  const res = await fetch('data.json');
  const d = await res.json();
  const init = d.profile.name[0];

  // LEFT PANEL
  document.getElementById('panel').innerHTML = `
    <div class="panel-avatar-wrap">
      <div class="panel-avatar">${init}</div>
      <h1 class="panel-name">${d.profile.name}</h1>
      <p class="panel-title">${d.profile.jobTitle}</p>
      <p class="panel-tagline">${d.profile.tagline}</p>
    </div>
    <div class="divider"></div>
    <p class="plabel">연락처</p>
    <ul class="contact-list">
      ${d.contact.map(c => `<li><span>${c.icon}</span>${c.href ? `<a href="${c.href}" ${c.target ? `target="${c.target}"` : ''}>${c.value}</a>` : `<span>${c.value}</span>`}</li>`).join('')}
    </ul>
    <div class="divider"></div>
    <p class="plabel">기술 스택</p>
    ${d.skills.map(s => `
      <div class="skill-block">
        <p class="skill-cat">${s.category}</p>
        <div class="skill-items">${s.items.map(i => `<span class="skill-tag">${i}</span>`).join('')}</div>
      </div>`).join('')}
    <div class="divider"></div>
    <p class="plabel">학력</p>
    ${d.education.map(e => `
      <div class="edu-item-p">
        <p class="edu-school-p">${e.school}</p>
        <p class="edu-degree-p">${e.degree}</p>
        <p class="edu-year-p">${e.period}</p>
      </div>`).join('')}`;

  // RIGHT CONTENT
  document.getElementById('content').innerHTML = `
    <div class="content-section">
      <h2 class="section-heading">About</h2>
      <p class="summary-text">${d.profile.tagline} ${d.summary || ''}</p>
    </div>
    <div class="content-section">
      <h2 class="section-heading">경력</h2>
      ${d.experience.map(e => `
        <div class="exp-card">
          <div class="exp-card-top">
            <div>
              <p class="exp-company">${e.company}</p>
              <p class="exp-pos">${e.position}</p>
            </div>
            <span class="period-badge">${e.period}</span>
          </div>
          <ul class="resp-list">${e.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
        </div>`).join('')}
    </div>
    <div class="content-section">
      <h2 class="section-heading">자격증</h2>
      ${d.certifications.map(c => `
        <div class="cert-row">
          <div class="cert-dot"></div>
          <div>
            <p class="cert-title">${c.title}</p>
            <p class="cert-meta"><span>${c.issuer}</span> &nbsp;·&nbsp; ${c.date}</p>
          </div>
        </div>`).join('')}
    </div>`;
}

loadData();
