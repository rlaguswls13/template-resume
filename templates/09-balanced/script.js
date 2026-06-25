async function loadData() {
  const res = await fetch('data.json');
  const d = await res.json();
  const init = d.profile.name[0];

  // HEADER
  document.getElementById('profileHeader').innerHTML = `
    <div class="ph-avatar">${init}</div>
    <div class="ph-info">
      <h1 class="ph-name">${d.profile.name}</h1>
      <p class="ph-title">${d.profile.jobTitle}</p>
      <p class="ph-summary">${d.summary}</p>
    </div>
    <div class="ph-contacts">
      <div class="ph-contact"><span>📧</span><a href="mailto:${d.profile.email}">${d.profile.email}</a></div>
      <div class="ph-contact"><span>🔗</span><a href="https://github.com" target="_blank">${d.profile.github}</a></div>
      <div class="ph-contact"><span>📍</span><span>${d.profile.location}</span></div>
    </div>`;

  // LEFT COL (experience)
  document.getElementById('leftCol').innerHTML = `
    <p class="sec-title">경력</p>
    ${d.experience.map(e => `
      <div class="exp-bal">
        <div class="exp-bal-head">
          <div>
            <p class="exp-bal-co">${e.company}</p>
            <p class="exp-bal-role">${e.role}</p>
          </div>
          <span class="exp-bal-period">${e.period}</span>
        </div>
        <ul class="exp-bal-items">${e.items.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>`).join('')}`;

  // RIGHT COL
  document.getElementById('rightCol').innerHTML = `
    <div class="r-card">
      <p class="sec-title">기술 숙련도</p>
      ${d.skills.map(s => `
        <div class="skill-bar-item">
          <div class="skill-bar-top">
            <span class="skill-bar-name">${s.name}</span>
            <span class="skill-bar-pct">${s.pct}%</span>
          </div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="width:${s.pct}%"></div></div>
        </div>`).join('')}
    </div>
    <div class="r-card">
      <p class="sec-title">학력</p>
      ${d.education.map(e => `
        <div class="edu-bal">
          <p class="edu-bal-school">${e.school}</p>
          <p class="edu-bal-major">${e.major}</p>
          <p class="edu-bal-period">${e.period}</p>
        </div>`).join('')}
    </div>
    <div class="r-card">
      <p class="sec-title">자격증</p>
      ${d.certifications.map(c => `
        <div class="cert-bal">
          <div class="cert-bal-dot"></div>
          <div>
            <p class="cert-bal-name">${c.name}</p>
            <p class="cert-bal-meta">${c.org} · ${c.year}</p>
          </div>
        </div>`).join('')}
    </div>`;
}

loadData();
