async function loadData() {
  const res = await fetch('data.json');
  const d = await res.json();
  const init = d.profile.name[0];

  // TOP HEADER
  document.getElementById('topHeader').innerHTML = `
    <div class="th-avatar">${init}</div>
    <div class="th-info">
      <h1 class="th-name">${d.profile.name}</h1>
      <p class="th-title">${d.profile.jobTitle}</p>
    </div>
    <div class="th-contacts">
      <a class="th-contact-chip" href="mailto:${d.profile.email}"><span>📧</span>${d.profile.email}</a>
      <a class="th-contact-chip" href="https://github.com" target="_blank"><span>🔗</span>${d.profile.github}</a>
      <span class="th-contact-chip"><span>📍</span>${d.profile.location}</span>
      <a class="th-contact-chip" href="https://linkedin.com" target="_blank"><span>💼</span>${d.profile.linkedin}</a>
    </div>`;

  // CARD GRID
  document.getElementById('cardGrid').innerHTML = `
    <!-- About -->
    <div class="g-card span-2">
      <p class="card-label">About</p>
      <p class="about-text">${d.about}</p>
    </div>

    <!-- Education -->
    <div class="g-card">
      <p class="card-label">학력</p>
      ${d.education.map(e => `
        <div class="edu-g-item">
          <p class="edu-g-school">${e.school}</p>
          <p class="edu-g-major">${e.major}</p>
          <p class="edu-g-period">${e.period}</p>
        </div>`).join('')}
    </div>

    <!-- Skills -->
    <div class="g-card">
      <p class="card-label">기술 스택</p>
      <div class="skill-blocks">
        ${d.skills.map(s => `
          <div class="skill-block-item">
            <p class="sk-cat">${s.cat}</p>
            <div class="sk-tags">${s.items.map(i => `<span class="sk-tag">${i}</span>`).join('')}</div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Experience -->
    <div class="g-card span-2">
      <p class="card-label">경력</p>
      <div class="exp-list">
        ${d.experience.map(e => `
          <div class="exp-g-item">
            <div class="exp-g-top">
              <div>
                <p class="exp-g-co">${e.company}</p>
                <p class="exp-g-role">${e.role}</p>
              </div>
              <span class="exp-g-period">${e.period}</span>
            </div>
            <ul class="exp-g-items">${e.items.map(i => `<li>${i}</li>`).join('')}</ul>
          </div>`).join('')}
      </div>
    </div>

    <!-- Certifications -->
    <div class="g-card span-3">
      <p class="card-label">자격증</p>
      <div class="cert-g-grid">
        ${d.certifications.map(c => `
          <div class="cert-g-item">
            <p class="cert-g-name">${c.name}</p>
            <p class="cert-g-meta">${c.org}</p>
            <p class="cert-g-date">${c.date}</p>
          </div>`).join('')}
      </div>
    </div>`;
}

loadData();
