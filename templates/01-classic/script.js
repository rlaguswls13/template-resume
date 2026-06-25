async function loadData() {
  const res = await fetch('data.json');
  const d = await res.json();

  // Profile
  const initials = d.profile.name.slice(0, 1);
  document.getElementById('profile').innerHTML = `
    <div class="profile-avatar">${initials}</div>
    <h1 class="name">${d.profile.name}</h1>
    <p class="job-title">${d.profile.jobTitle}</p>`;

  // Contact
  document.getElementById('contact').innerHTML = `
    <p class="section-label">연락처</p>
    <ul>${d.contact.map(c => `<li><span>${c.icon}</span>${c.isLink ? `<a href="${c.href}" ${c.target ? `target="${c.target}"` : ''}>${c.value}</a>` : `<span>${c.value}</span>`}</li>`).join('')}</ul>`;

  // Skills
  document.getElementById('skills').innerHTML = `
    <p class="section-label">기술</p>
    ${Object.entries(d.skills).map(([cat, tags]) => `
      <div class="skill-category">
        <p class="skill-cat-label">${cat}</p>
        <div class="skill-tags">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>`).join('')}`;

  // Education
  document.getElementById('education').innerHTML = `
    <p class="section-label">학력</p>
    ${d.education.map(e => `
      <div class="education-item">
        <h4>${e.school}</h4>
        <p class="degree">${e.degree}</p>
        <p class="year">${e.period}</p>
      </div>`).join('')}`;

  // Introduction
  document.getElementById('introSubtitle').textContent = d.introduction.subtitle;
  document.getElementById('cardsGrid').innerHTML = d.introduction.cards.map(c => `
    <div class="card">
      <span class="card-number">${c.number}</span>
      <h3>${c.title}</h3>
      <p>${c.description}</p>
    </div>`).join('');

  // Experience
  document.getElementById('experience').innerHTML = `
    <h2>경력</h2>
    ${d.experience.map(e => `
      <div class="experience-item">
        <div class="exp-header">
          <div><h3>${e.company}</h3><p class="position">${e.position}</p></div>
          <span class="date">${e.period}</span>
        </div>
        <ul class="responsibilities">${e.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
      </div>`).join('')}`;

  // Certifications
  document.getElementById('certifications').innerHTML = `
    <h2>자격증</h2>
    ${d.certifications.map(c => `
      <div class="project-item">
        <div class="project-header"><h3>${c.title}</h3><span class="date">${c.date}</span></div>
        <p class="project-description">${c.description}</p>
        ${c.details ? `<ul class="project-details">${c.details.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
      </div>`).join('')}`;
}

loadData();
