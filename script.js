
const injuriesData = {
  head: {
    'Headache/Migraine': {
      symptoms: 'Throbbing pain, sensitivity to light.',
      treatment: 'Rest in a dark room, hydration, OTC pain relievers, consult doctor if severe.'
    },
    'Concussion': {
      symptoms: 'Dizziness, nausea, confusion after a head impact.',
      treatment: 'Immediately see a doctor, rest, avoid strenuous activity.'
    }
  },
  shoulder: {
    'Rotator Cuff Strain': {
      symptoms: 'Pain lifting arm overhead, weakness, tenderness.',
      treatment: 'RICE method, gentle stretching, physical therapy if persistent.'
    },
    'Dislocation': {
      symptoms: 'Severe pain, visible deformity, inability to move shoulder.',
      treatment: 'Seek immediate medical help, immobilize, possible surgery.'
    }
  },
  knee: {
    'Meniscus Tear': {
      symptoms: 'Pain, swelling, locking of the knee.',
      treatment: 'RICE, possibly braces, physical therapy, see specialist if severe.'
    },
    'ACL Sprain': {
      symptoms: 'Pain, popping sensation during injury, instability.',
      treatment: 'RICE, knee brace, physical therapy, possible surgery.'
    }
  },
  ankle: {
    'Sprain': {
      symptoms: 'Swelling, bruising, pain on movement.',
      treatment: 'RICE method, compression bandage, gentle mobilization over time.'
    },
    'Achilles Tendonitis': {
      symptoms: 'Pain near heel, stiffness when walking.',
      treatment: 'Rest, ice, heel lifts, physical therapy exercises.'
    }
  },

  headBack: {
    'Occipital Headache': {
      symptoms: 'Pain at the back of the head or neck, tension-like tightness.',
      treatment: 'Rest, gentle neck stretching, massage, consult doctor if severe.'
    }
  },
  shoulderBack: {
    'Shoulder Blade Pain': {
      symptoms: 'Aching or soreness around the scapula.',
      treatment: 'Apply heat, gentle stretches, posture correction, physical therapy.'
    }
  },
  upperBack: {
    'Upper Back Strain': {
      symptoms: 'Tightness, stiffness, or pain in the thoracic spine area.',
      treatment: 'RICE, gentle stretching, posture exercises, consult physician if persistent.'
    }
  },
  lowerBack: {
    'Lumbar Strain': {
      symptoms: 'Aching or sharp pain in lower back, stiffness, difficulty bending.',
      treatment: 'RICE, gentle movements, core strengthening, consult physician if persistent.'
    },
    'Sciatica': {
      symptoms: 'Radiating pain down one leg, tingling or numbness.',
      treatment: 'Gentle stretching, anti-inflammatory meds, physical therapy, see professional if severe.'
    }
  },
  glutes: {
    'Piriformis Syndrome': {
      symptoms: 'Buttock pain, possible radiating leg pain, numbness.',
      treatment: 'Piriformis stretches, ice/heat therapy, avoid prolonged sitting, consult PT if severe.'
    },
    'Gluteal Strain': {
      symptoms: 'Pain in the buttock region when climbing stairs or running.',
      treatment: 'RICE, gentle stretches, gradual return to activity.'
    }
  },
  hamstrings: {
    'Hamstring Pull/Strain': {
      symptoms: 'Sudden pain in the back of thigh, possible bruising.',
      treatment: 'RICE, avoid strenuous activity, gentle stretching, consult PT if severe.'
    }
  },
  calf: {
    'Calf Strain': {
      symptoms: 'Sharp pain in the calf, difficulty standing on toes.',
      treatment: 'RICE, gentle stretching, compression sleeves, progressive exercise.'
    }
  },

  elbow: {
    'Tennis Elbow': { 
      symptoms: 'Pain on the outside of the elbow, weak grip strength.',
      treatment: 'Rest, ice, elbow brace, physical therapy, avoid repetitive motions.'
    },
    'Golfers Elbow': {
      symptoms: 'Pain on the inside of the elbow, weak wrist flexors.',
      treatment: 'Rest, ice, elbow brace, physical therapy, avoid repetitive motions.'
    }
  },
  wrist: {
    'Carpal Tunnel Syndrome': {
      symptoms: 'Numbness, tingling in fingers, pain in wrist.',
      treatment: 'Rest, wrist splint, ergonomic adjustments, consult doctor if severe.'
    },
    'Wrist Sprain': {
      symptoms: 'Swelling, pain, difficulty moving wrist.',
      treatment: 'RICE, wrist brace, gentle exercises, consult doctor if severe.'
    }
  },
  
  stomach: {
    'Stomach Ache': {
      symptoms: 'Pain or discomfort in the abdomen, bloating, cramps.',
      treatment: 'Rest, hydration, light diet, consult doctor if severe.'
    },
    'Indigestion': {
      symptoms: 'Burning sensation in upper abdomen, bloating, nausea.',
      treatment: 'Antacids, avoid trigger foods, consult doctor if persistent.'
    }
  },
  chest: {
    'Chest Pain': {
      symptoms: 'Pressure, tightness, or pain in the chest area.',
      treatment: 'Seek immediate medical help, rest, avoid exertion.'
    },
    'Heartburn': {
      symptoms: 'Burning sensation in the chest, acid reflux.',
      treatment: 'Antacids, avoid trigger foods, consult doctor if persistent.'
    }
  },
  quadriceps: {
    'Quadriceps Strain': {
      symptoms: 'Pain in the front of the thigh, swelling, bruising.',
      treatment: 'RICE, gentle stretching, gradual return to activity.'
    },
    'Quad Tendonitis': {
      symptoms: 'Pain above the kneecap, stiffness, swelling.',
      treatment: 'RICE, gentle stretching, quad strengthening exercises.'
    }
  }
  };

function showInjuryOptions(bodyPart) {
  const dropdownSection = document.getElementById('injuryDropdownSection');
  const bodyPartTitle = document.getElementById('bodyPartTitle');
  const injurySelect = document.getElementById('injurySelect');

  injurySelect.innerHTML = '<option value="">-- Please choose an option --</option>';

  bodyPartTitle.textContent = `Injury Options for: ${bodyPart[0].toUpperCase() + bodyPart.slice(1)}`;

  if (injuriesData[bodyPart]) {
    const injuriesForPart = Object.keys(injuriesData[bodyPart]);
    injuriesForPart.forEach(injuryName => {
      const option = document.createElement('option');
      option.value = injuryName;
      option.textContent = injuryName;
      injurySelect.appendChild(option);
    });
  }

  injurySelect.dataset.bodyPart = bodyPart;

  dropdownSection.style.display = 'block';

  document.getElementById('treatmentSection').style.display = 'none';
}

function showTreatment() {
  const injurySelect = document.getElementById('injurySelect');
  const selectedInjury = injurySelect.value;
  const bodyPart = injurySelect.dataset.bodyPart;
  const treatmentSection = document.getElementById('treatmentSection');
  const treatmentDetails = document.getElementById('treatmentDetails');

  if (!selectedInjury) {
    treatmentSection.style.display = 'none';
    return;
  }


  const injuryInfo = injuriesData[bodyPart][selectedInjury];
  let detailsHtml = '';

  if (injuryInfo) {
    detailsHtml += `<p><strong>Injury:</strong> ${selectedInjury}</p>`;
    if (injuryInfo.symptoms) {
      detailsHtml += `<p><strong>Common Symptoms:</strong> ${injuryInfo.symptoms}</p>`;
    }
    if (injuryInfo.treatment) {
      detailsHtml += `<p><strong>Recommended Treatment:</strong> ${injuryInfo.treatment}</p>`;
    }
    detailsHtml += `
      <p><strong>When to Seek Professional Help:</strong><br/>
      If symptoms worsen, persist for more than a few days, or significantly limit movement,
      consult a medical professional.</p>
    `;
  }

  treatmentDetails.innerHTML = detailsHtml;
  treatmentSection.style.display = 'block';

  saveSearch(bodyPart, selectedInjury);
}

function resetSelection() {
  document.getElementById('injurySelect').value = '';
  document.getElementById('injuryDropdownSection').style.display = 'none';
  document.getElementById('treatmentSection').style.display = 'none';
}


function printRecommendations() {
  window.print();
}

function saveSearch(bodyPart, selectedInjury) {
  let history = JSON.parse(localStorage.getItem('recoverEaseHistory')) || [];

  const record = {
    bodyPart: bodyPart,
    injury: selectedInjury,
    timestamp: new Date().toISOString()
  };

  history.unshift(record);

  if (history.length > 10) {
    history.pop();
  }

  localStorage.setItem('recoverEaseHistory', JSON.stringify(history));

  loadSearchHistory();
}


function loadSearchHistory() {
  const searchList = document.getElementById('searchHistory');
  searchList.innerHTML = ''; 

  const history = JSON.parse(localStorage.getItem('recoverEaseHistory')) || [];

  if (history.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No recent searches yet.';
    searchList.appendChild(li);
    return;
  }

  history.forEach(entry => {
    const li = document.createElement('li');
    const displayName = capitalize(entry.bodyPart) + ' - ' + entry.injury;
    li.textContent = displayName;
    searchList.appendChild(li);
  });
}

function clearSearchHistory() {
  localStorage.removeItem('recoverEaseHistory');
  loadSearchHistory();
}


function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


window.onload = function() {
  loadSearchHistory();
};
