async function loadData() {
  const res = await fetch('data.json');
  const d = await res.json();

  document.getElementById('resume').innerHTML = `
    <div class="name-row">
      <div class="name-block">
        <h1 class="r-name">${d.profile.name}</h1>
        <p class="r-title">${d.profile.jobTitle}</p>
      </div>
      <div class="contact-block">
        <span class="contact-item">${d.profile.email}</span>
        <span class="contact-item">${d.profile.phone}</span>
        <span class="contact-item"><a href="https://github.com">${d.profile.github}</a></span>
        <span class="contact-item">${d.profile.location}</span>
      </div>
    </div>

    <div class="summary-section">
      <p class="summary-text">${d.summary}</p>
    </div>

    <div class="section">
      <div class="section-hr"><span class="section-title">Experience</span><div class="section-line"></div></div>
      ${d.experience.map(e => `
        <div class="exp-entry">
          <div class="exp-meta">
            <p class="exp-co">${e.company}</p>
            <p class="exp-period">${e.period}</p>
          </div>
          <div>
            <p class="exp-role">${e.role}</p>
            <ul class="exp-items">${e.items.map(i => `<li>${i}</li>`).join('')}</ul>
          </div>
        </div>`).join('')}
    </div>

    <div class="section">
      <div class="section-hr"><span class="section-title">Skills</span><div class="section-line"></div></div>
      ${Object.entries(d.skills).map(([cat, vals]) => `
        <div class="skill-inline">
          <span class="skill-cat-name">${cat}</span>
          <span class="skill-values">${vals.join('  ·  ')}</span>
        </div>`).join('')}
    </div>

    <div class="section">
      <div class="section-hr"><span class="section-title">Education</span><div class="section-line"></div></div>
      ${d.education.map(e => `
        <div class="edu-entry">
          <span class="edu-yr">${e.period}</span>
          <div><p class="edu-school-m">${e.school}</p><p class="edu-maj">${e.major}</p></div>
        </div>`).join('')}
    </div>

    <div class="section">
      <div class="section-hr"><span class="section-title">Certifications</span><div class="section-line"></div></div>
      ${d.certifications.map(c => `<p class="cert-inline"><span>${c.name}</span>  ·  ${c.issuer}  ·  ${c.year}</p>`).join('')}
    </div>`;
}

loadData();
