async function loadData() {
  const res = await fetch('data.json');
  const d = await res.json();
  const init = d.profile.name[0];

  document.getElementById('resume').innerHTML = `
    <!-- Photo block -->
    <div class="mag-photo">
      <div class="mag-avatar">${init}</div>
      <p class="mag-avatar-name">${d.profile.name}</p>
      <p class="mag-avatar-title">${d.profile.jobTitle}</p>
      <ul class="mag-contact-list">
        ${d.contact.map(c => `<li><span>${c.icon}</span>${c.href ? `<a href="${c.href}" ${c.target ? `target="${c.target}"` : ''}>${c.value}</a>` : `<span>${c.value}</span>`}</li>`).join('')}
      </ul>
    </div>

    <!-- Intro block -->
    <div class="mag-intro">
      <h1 class="mag-name-big">${d.profile.name}</h1>
      <p class="mag-title-big">${d.profile.jobTitle}</p>
      <p class="mag-tagline-text">${d.profile.tagline}</p>
    </div>

    <!-- Right info -->
    <div class="mag-right-info">
      <p class="mag-section-label">학력</p>
      ${d.education.map(e => `
        <div class="edu-mag">
          <p class="edu-school-mag">${e.school}</p>
          <p class="edu-degree-mag">${e.degree}</p>
          <p class="edu-yr-mag">${e.period}</p>
        </div>`).join('')}
      <p class="mag-section-label">자격증</p>
      ${d.certifications.map(c => `
        <div class="cert-mag">
          <strong>${c.name}</strong>
          ${c.year || ''}
        </div>`).join('')}
    </div>

    <!-- Skills -->
    <div class="mag-skills">
      <p class="mag-section-label">기술 스택</p>
      <div class="mag-tag-cloud">
        ${d.skills.map(s => `<span class="mag-tag">${s}</span>`).join('')}
      </div>
    </div>

    <!-- Experience -->
    <div class="mag-exp">
      <p class="mag-exp-section-label">경력</p>
      ${d.experience.map(e => `
        <div class="exp-mag-card">
          <p class="exp-mag-co">${e.company}</p>
          <p class="exp-mag-role">${e.role}</p>
          <p class="exp-mag-period">${e.period}</p>
          <p class="exp-mag-summary">${e.summary}</p>
          <ul class="exp-mag-items">${e.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>`).join('')}
    </div>

    <!-- Bottom right quote -->
    <div class="mag-bottom-right">
      <p class="mag-quote">"Swift로 섬세한 경험을 만듭니다"</p>
      <p class="mag-quote-sub">Native · Performance · Detail</p>
    </div>`;
}

loadData();
