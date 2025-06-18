const selections = {
  subject: null,
  verb: null,
  adjective: null,
  object: null,
  location: null,
};

const columns = document.querySelectorAll('.column');
const sentenceEl = document.getElementById('sentence');
const speakBtn = document.getElementById('speakBtn');

columns.forEach(column => {
  const colName = column.dataset.column;
  const buttons = column.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('selected'));

     
      button.classList.add('selected');

  
      selections[colName] = button.textContent;

      updateSentence();
    });
  });
});

function updateSentence() {
  const { subject, verb, adjective, object, location } = selections;

  if (subject && verb && adjective && object && location) {
    sentenceEl.textContent = `${subject} ${verb} ${adjective} ${object} ${location}.`;
  } else {
    // showing blankspace as a placeholder for missing selections
    const display = 
      `${subject || '___'} ${verb || '___'} ${adjective || '___'} ${object || '___'} ${location || '___'}.`;
    sentenceEl.textContent = display;
  }
}

document.getElementById('resetBtn').addEventListener('click', () => {
  // Clear selections
  for (const key in selections) {
    selections[key] = null;
  }
 
  columns.forEach(column => {
    column.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));
  });
  updateSentence();
});

// Speak button;- Not sure if this will work or not
speakBtn.addEventListener('click', () => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(sentenceEl.textContent);
    window.speechSynthesis.speak(utterance);
  } else {
    alert('Speech synthesis is not supported in this browser.');
  }
});

updateSentence();
