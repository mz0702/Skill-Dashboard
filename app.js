// Skills Data
const skillsData = [
  {
    id: 1,
    name: 'Predictive Sales',
    description: 'Prognosen für zukünftige Kundenkäufe (z. B. mittels Regressionsmodellen) zur Absatzoptimierung',
    icon: 'fa-chart-line',
    category: 'predictive',
    exampleData: {
      title: 'Beispiel-Anwendungsfall: Umsatzprognose',
      type: 'regression',
      data: [
        { month: 'Jan', actual: 800, forecast: null },
        { month: 'Feb', actual: 820, forecast: null },
        { month: 'Mär', actual: 850, forecast: null },
        { month: 'Apr', actual: 870, forecast: null },
        { month: 'Mai', actual: 890, forecast: null },
        { month: 'Jun', actual: 920, forecast: null },
        { month: 'Jul', actual: null, forecast: 950 },
        { month: 'Aug', actual: null, forecast: 980 },
        { month: 'Sep', actual: null, forecast: 1000 }
      ],
      note: 'Beispiel: Umsatzentwicklung von 800 Tsd. € auf 1 Mio. € über 9 Monate'
    },
    benefits: [
      'Bessere Vorratsplanung',
      'Individuelle Kundenansprache',
      'Datenbasierte Entscheidungen',
      'Personalisiertes Marketing',
      'Tieferes Verständnis für Kundenbedarf'
    ]
  },
  {
    id: 2,
    name: 'Lead-Identifizierung/-Such-Agenten',
    description: 'Automatisierte Lead-Suche durch AI-Agenten, z.B. via Apollo.io & Make/Zapier/N8N',
    icon: 'fa-search',
    category: 'automation',
    exampleNote: 'Beispiel: Generierung von 120 Leads/Monat anstatt 25 manuell',
    flowSteps: [
      { title: 'Kriterien definieren', desc: 'Zielgruppe & ICP festlegen' },
      { title: 'AI-Agent aktivieren', desc: 'Automatische Suche über Plattformen' },
      { title: 'Lead-Validierung', desc: 'Qualitätsprüfung & Anreicherung' },
      { title: 'CRM-Integration', desc: 'Direkte Übergabe an Sales-Team' }
    ],
    benefits: [
      'Schnellere Prozessdurchläufe',
      'Höhere Pipeline-Transparenz',
      'Nachhaltige Skalierbarkeit',
      'Kontinuierliche Lead-Generierung'
    ]
  },
  {
    id: 3,
    name: 'Cold-E-Mail-Automation',
    description: 'Automatische Versand pipelines zur Neukunden-Akquise',
    icon: 'fa-envelope',
    category: 'automation',
    exampleNote: 'Beispiel: 100 E-Mails pro Tag, 20% Response-Rate',
    sequenceData: [
      { step: 'Tag 1', action: 'Initiale E-Mail', rate: 100 },
      { step: 'Tag 3', action: 'Follow-up 1', rate: 60 },
      { step: 'Tag 7', action: 'Follow-up 2', rate: 35 },
      { step: 'Tag 14', action: 'Final Touch', rate: 20 }
    ],
    benefits: [
      'Strukturierter Outreach',
      'Bessere Nachverfolgbarkeit',
      'Konsistente Ansprache',
      'Automatisierte Sequenzen'
    ]
  },
  {
    id: 4,
    name: 'Customer-Sales-Volume Überwachung',
    description: 'Kontinuierliche Analyse von Absatzdaten, Frühwarnung bei Kundenabwanderung',
    icon: 'fa-chart-area',
    category: 'analysis',
    dashboardMetrics: [
      { label: 'Kunde A', trend: 'up', value: '+15%' },
      { label: 'Kunde B', trend: 'stable', value: '±0%' },
      { label: 'Kunde C', trend: 'down', value: '-8%' },
      { label: 'Kunde D', trend: 'up', value: '+22%' }
    ],
    benefits: [
      'Echtzeit-Erkennung von Trends',
      'Frühzeitige Handlungsempfehlungen',
      'Kundenentwicklung monitoren',
      'Risiken identifizieren'
    ]
  },
  {
    id: 5,
    name: 'Intelligent Pricing',
    description: 'Dynamische Preisfindung mittels wissenschaftlicher Methoden',
    icon: 'fa-tags',
    category: 'predictive',
    exampleNote: 'Beispiel: Simulation Van Westendorp, Gabor Granger, Conjoint',
    pricingData: [
      { method: 'Van Westendorp', optimalPrice: 49 },
      { method: 'Gabor Granger', optimalPrice: 47 },
      { method: 'Conjoint', optimalPrice: 51 }
    ],
    benefits: [
      'Bessere Marktpositionierung',
      'Sichtbarkeit von Preistrends',
      'Wissenschaftliche Methoden',
      'Optimierte Preisgestaltung'
    ]
  },
  {
    id: 6,
    name: 'Marktanalysen & Expansion',
    description: 'Neue Märkte identifizieren, Eintrittsstrategie konzipieren',
    icon: 'fa-globe',
    category: 'analysis',
    marketData: [
      { market: 'DACH', potential: 'high', barriers: 'low' },
      { market: 'Benelux', potential: 'medium', barriers: 'medium' },
      { market: 'Nordics', potential: 'high', barriers: 'medium' },
      { market: 'UK', potential: 'medium', barriers: 'high' }
    ],
    benefits: [
      'Marktchancen identifizieren',
      'Expansionsmöglichkeiten visualisieren',
      'Barrieren verstehen',
      'Strategische Planung'
    ]
  },
  {
    id: 7,
    name: 'Competition Analysis',
    description: 'Monatliche Wettbewerberbeobachtung durch AI',
    icon: 'fa-users',
    category: 'analysis',
    exampleNote: 'Beispiel: Marktanteil-Tracking und Alerts',
    competitorData: [
      { name: 'Unternehmen A', share: 32 },
      { name: 'Unternehmen B', share: 27 },
      { name: 'Eigene Position', share: 18 },
      { name: 'Unternehmen C', share: 15 },
      { name: 'Sonstige', share: 8 }
    ],
    benefits: [
      'Zielgerichtete Wettbewerbsanalyse',
      'Chancenmatrix',
      'Risikoerkennung',
      'Marktpositionierung'
    ]
  },
  {
    id: 8,
    name: 'White-Spot-Analyse',
    description: 'Einkaufspotenziale im bestehenden Kundenstamm lokalisieren',
    icon: 'fa-map',
    category: 'analysis',
    exampleNote: 'Beispiel: 8 unterversorgte Kundensegmente',
    heatmapData: [
      { segment: 'Segment A', potential: 'high' },
      { segment: 'Segment B', potential: 'medium' },
      { segment: 'Segment C', potential: 'high' },
      { segment: 'Segment D', potential: 'low' },
      { segment: 'Segment E', potential: 'high' },
      { segment: 'Segment F', potential: 'medium' },
      { segment: 'Segment G', potential: 'minimal' },
      { segment: 'Segment H', potential: 'medium' }
    ],
    benefits: [
      'Gezielte Kundenansprache',
      'Cross- und Upselling-Chancen',
      'Kundenbindung stärken',
      'Potenziale erschließen'
    ]
  },
  {
    id: 9,
    name: 'Generative Engine/LLM Optimization',
    description: 'Verbesserte Sichtbarkeit im KI-Suchumfeld (GEO/LLMO)',
    icon: 'fa-robot',
    category: 'automation',
    roadmapSteps: [
      { phase: 'Q1', milestone: 'Baseline-Analyse' },
      { phase: 'Q2', milestone: 'Content-Optimierung' },
      { phase: 'Q3', milestone: 'LLM-Integration' },
      { phase: 'Q4', milestone: 'Performance-Tracking' }
    ],
    benefits: [
      'Höhere digitale Sichtbarkeit',
      'Bessere Auffindbarkeit',
      'Mehr organische Reichweite',
      'Zukunftssichere Präsenz'
    ]
  },
  {
    id: 10,
    name: 'Automated B2B Tender Discovery',
    description: 'Automatisierte Suche/Analyse von B2B-Ausschreibungen',
    icon: 'fa-file-contract',
    category: 'automation',
    workflowData: [
      { stage: 'Monitoring', hits: 450 },
      { stage: 'Relevanz-Filter', hits: 180 },
      { stage: 'Match-Score', hits: 65 },
      { stage: 'Qualifiziert', hits: 28 }
    ],
    benefits: [
      'Schnellere Ausschreibungsfindung',
      'Gezieltere Teilnahmen',
      'Vermeidung von Overhead',
      'Strukturierter Prozess'
    ]
  },
  {
    id: 11,
    name: 'Weitere Automatisierung-Planning',
    description: 'Entwicklung maßgeschneiderter Automatisierung',
    icon: 'fa-cogs',
    category: 'automation',
    implementationMatrix: [
      { phase: 'Discovery', duration: '2 Wochen' },
      { phase: 'Konzeption', duration: '3 Wochen' },
      { phase: 'Implementierung', duration: '6 Wochen' },
      { phase: 'Testing & Rollout', duration: '2 Wochen' }
    ],
    benefits: [
      'Typische Prozessvorteile',
      'Entlastung der Teams',
      'Fokus auf wertschöpfende Arbeit',
      'Innovationskraft steigern',
      'Kundenerlebnis verbessern'
    ]
  }
];

// Store chart instances
const chartInstances = {};

// Initialize the dashboard
function initDashboard() {
  renderSkillCards();
  renderSkillDetails();
  updateProgressBar();
  window.addEventListener('scroll', updateProgressBar);
}

// Render skill cards in overview grid
function renderSkillCards() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = skillsData.map(skill => `
    <div class="skill-card" onclick="scrollToSkill(${skill.id})" data-category="${skill.category}" data-name="${skill.name.toLowerCase()}">
      <i class="fas ${skill.icon}"></i>
      <h3>${skill.name}</h3>
      <p>${skill.description}</p>
    </div>
  `).join('');
}

// Render detailed skill sections
function renderSkillDetails() {
  const container = document.getElementById('skills');
  container.innerHTML = skillsData.map(skill => `
    <section class="skill-detail" id="skill-${skill.id}">
      <div class="skill-detail-header">
        <h2><i class="fas ${skill.icon}"></i>${skill.name}</h2>
        <p>${skill.description}</p>
      </div>
      <div class="skill-detail-content">
        <div class="visualization">
          <h3>
            Visualisierung 1: Beispiel-Anwendungsfall
            <span class="example-badge">Beispiel</span>
          </h3>
          ${renderExampleVisualization(skill)}
        </div>
        <div class="visualization">
          <h3>Visualisierung 2: Mehrwert für Sie</h3>
          ${renderBenefitsVisualization(skill)}
        </div>
      </div>
    </section>
  `).join('');
  
  // Initialize charts after DOM is ready
  setTimeout(() => {
    skillsData.forEach(skill => {
      initializeSkillChart(skill);
    });
  }, 100);
}

// Render example visualization based on skill type
function renderExampleVisualization(skill) {
  if (skill.exampleData && skill.exampleData.type === 'regression') {
    return `
      <div class="chart-container">
        <canvas id="chart-${skill.id}"></canvas>
      </div>
      <p class="chart-note">${skill.exampleData.note}</p>
    `;
  } else if (skill.flowSteps) {
    return `
      <div class="flowchart">
        ${skill.flowSteps.map(step => `
          <div class="flow-step">
            <h4>${step.title}</h4>
            <p>${step.desc}</p>
          </div>
        `).join('')}
      </div>
      <p class="chart-note">${skill.exampleNote || ''}</p>
    `;
  } else if (skill.sequenceData) {
    return `
      <div class="chart-container">
        <canvas id="chart-${skill.id}"></canvas>
      </div>
      <p class="chart-note">${skill.exampleNote || ''}</p>
    `;
  } else if (skill.dashboardMetrics) {
    return `
      <div class="chart-container">
        <canvas id="chart-${skill.id}"></canvas>
      </div>
      <p class="chart-note">Beispiel: Live-Monitoring von Kundenumsätzen</p>
    `;
  } else if (skill.pricingData) {
    return `
      <div class="chart-container">
        <canvas id="chart-${skill.id}"></canvas>
      </div>
      <p class="chart-note">${skill.exampleNote || ''}</p>
    `;
  } else if (skill.marketData) {
    return `
      <div class="chart-container">
        <canvas id="chart-${skill.id}"></canvas>
      </div>
      <p class="chart-note">Beispiel: Marktpotenzial-Analyse für Expansion</p>
    `;
  } else if (skill.competitorData) {
    return `
      <div class="chart-container">
        <canvas id="chart-${skill.id}"></canvas>
      </div>
      <p class="chart-note">${skill.exampleNote || ''}</p>
    `;
  } else if (skill.heatmapData) {
    return `
      <div class="heatmap-grid">
        ${skill.heatmapData.map(cell => `
          <div class="heatmap-cell heat-${cell.potential}" title="${cell.segment}: ${cell.potential} potential">
            ${cell.segment}
          </div>
        `).join('')}
      </div>
      <p class="chart-note">${skill.exampleNote || ''}</p>
    `;
  } else if (skill.roadmapSteps) {
    return `
      <div class="flowchart">
        ${skill.roadmapSteps.map(step => `
          <div class="flow-step">
            <h4>${step.phase}</h4>
            <p>${step.milestone}</p>
          </div>
        `).join('')}
      </div>
      <p class="chart-note">Beispiel: Optimierungs-Roadmap über 12 Monate</p>
    `;
  } else if (skill.workflowData) {
    return `
      <div class="chart-container">
        <canvas id="chart-${skill.id}"></canvas>
      </div>
      <p class="chart-note">Beispiel: Monatlicher Ausschreibungs-Funnel</p>
    `;
  } else if (skill.implementationMatrix) {
    return `
      <div class="flowchart">
        ${skill.implementationMatrix.map(phase => `
          <div class="flow-step">
            <h4>${phase.phase}</h4>
            <p>Dauer: ${phase.duration}</p>
          </div>
        `).join('')}
      </div>
      <p class="chart-note">Beispiel: Typischer Implementierungszeitplan</p>
    `;
  }
  return '<p>Visualisierung wird geladen...</p>';
}

// Render benefits visualization
function renderBenefitsVisualization(skill) {
  return `
    <ul class="benefits-list">
      ${skill.benefits.map(benefit => `
        <li>
          <i class="fas fa-check-circle"></i>
          <span>${benefit}</span>
        </li>
      `).join('')}
    </ul>
  `;
}

// Initialize charts for each skill
function initializeSkillChart(skill) {
  const canvas = document.getElementById(`chart-${skill.id}`);
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  if (skill.exampleData && skill.exampleData.type === 'regression') {
    chartInstances[skill.id] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: skill.exampleData.data.map(d => d.month),
        datasets: [
          {
            label: 'Ist-Umsatz (Tsd. €)',
            data: skill.exampleData.data.map(d => d.actual),
            borderColor: '#1E3A5F',
            backgroundColor: 'rgba(30, 58, 95, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Prognose (Tsd. €)',
            data: skill.exampleData.data.map(d => d.forecast),
            borderColor: '#FF6B35',
            backgroundColor: 'rgba(255, 107, 53, 0.1)',
            borderDash: [5, 5],
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true, position: 'top' },
          tooltip: { enabled: true }
        },
        scales: {
          y: { beginAtZero: false, min: 750 }
        }
      }
    });
  } else if (skill.sequenceData) {
    chartInstances[skill.id] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: skill.sequenceData.map(s => s.step),
        datasets: [{
          label: 'Response-Rate (%)',
          data: skill.sequenceData.map(s => s.rate),
          backgroundColor: ['#1E3A5F', '#2a5a8f', '#3a6a9f', '#FF6B35']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true, max: 100 }
        }
      }
    });
  } else if (skill.dashboardMetrics) {
    const trendColors = skill.dashboardMetrics.map(m => 
      m.trend === 'up' ? '#7cb342' : m.trend === 'down' ? '#d32f2f' : '#fbc02d'
    );
    chartInstances[skill.id] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: skill.dashboardMetrics.map(m => m.label),
        datasets: [{
          label: 'Trend',
          data: skill.dashboardMetrics.map(m => parseFloat(m.value)),
          backgroundColor: trendColors
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: { display: false }
        }
      }
    });
  } else if (skill.pricingData) {
    chartInstances[skill.id] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: skill.pricingData.map(p => p.method),
        datasets: [{
          label: 'Optimaler Preis (€)',
          data: skill.pricingData.map(p => p.optimalPrice),
          backgroundColor: ['#1E3A5F', '#2a5a8f', '#FF6B35']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  } else if (skill.marketData) {
    const potentialMap = { high: 3, medium: 2, low: 1 };
    const barrierMap = { high: 3, medium: 2, low: 1 };
    chartInstances[skill.id] = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Marktchancen',
          data: skill.marketData.map(m => ({
            x: potentialMap[m.potential],
            y: 4 - barrierMap[m.barriers],
            label: m.market
          })),
          backgroundColor: '#FF6B35',
          borderColor: '#1E3A5F',
          pointRadius: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(context) {
                return skill.marketData[context.dataIndex].market;
              }
            }
          }
        },
        scales: {
          x: {
            title: { display: true, text: 'Marktpotenzial' },
            min: 0, max: 4,
            ticks: { callback: (value) => ['', 'Niedrig', 'Mittel', 'Hoch'][value] || '' }
          },
          y: {
            title: { display: true, text: 'Eintrittsbarriere (invertiert)' },
            min: 0, max: 4,
            ticks: { callback: (value) => ['', 'Hoch', 'Mittel', 'Niedrig'][value] || '' }
          }
        }
      }
    });
  } else if (skill.competitorData) {
    chartInstances[skill.id] = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: skill.competitorData.map(c => c.name),
        datasets: [{
          data: skill.competitorData.map(c => c.share),
          backgroundColor: ['#1E3A5F', '#2a5a8f', '#FF6B35', '#f57c00', '#fbc02d']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right' }
        }
      }
    });
  } else if (skill.workflowData) {
    chartInstances[skill.id] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: skill.workflowData.map(w => w.stage),
        datasets: [{
          label: 'Anzahl Ausschreibungen',
          data: skill.workflowData.map(w => w.hits),
          backgroundColor: ['#1E3A5F', '#2a5a8f', '#3a6a9f', '#FF6B35']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
}

// Scroll to specific skill section
function scrollToSkill(skillId) {
  const element = document.getElementById(`skill-${skillId}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Scroll to contact section
function scrollToContact() {
  const element = document.getElementById('contact');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Update progress bar on scroll
function updateProgressBar() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight - windowHeight;
  const scrolled = window.scrollY;
  const progress = (scrolled / documentHeight) * 100;
  document.getElementById('progressBar').style.width = progress + '%';
}

// Filter skills by search
function filterSkills() {
  const searchValue = document.getElementById('skillSearch').value.toLowerCase();
  const cards = document.querySelectorAll('.skill-card');
  
  cards.forEach(card => {
    const skillName = card.getAttribute('data-name');
    if (skillName.includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Filter skills by category
function filterByCategory(category) {
  const cards = document.querySelectorAll('.skill-card');
  const tags = document.querySelectorAll('.filter-tag');
  
  // Update active tag
  tags.forEach(tag => tag.classList.remove('active'));
  event.target.classList.add('active');
  
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Handle contact form submission
function handleContactSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const company = document.getElementById('company').value;
  const message = document.getElementById('message').value;
  
  // Show success modal
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <h3>Vielen Dank für Ihre Anfrage!</h3>
    <p>Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei Ihnen melden.</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>E-Mail:</strong> ${email}</p>
    ${company ? `<p><strong>Unternehmen:</strong> ${company}</p>` : ''}
    <button class="cta-button" onclick="closeModal()">Schließen</button>
  `;
  
  document.getElementById('infoModal').classList.add('active');
  
  // Reset form
  event.target.reset();
}

// Close modal
function closeModal() {
  document.getElementById('infoModal').classList.remove('active');
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
  const modal = document.getElementById('infoModal');
  if (event.target === modal) {
    closeModal();
  }
});

// Initialize dashboard on load
window.addEventListener('DOMContentLoaded', initDashboard);