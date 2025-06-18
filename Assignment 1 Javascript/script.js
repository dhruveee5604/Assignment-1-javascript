// Initialize word categories
const wordBank = {
  character: ['The cat', 'A pirate', 'An astronaut', 'The robot', 'A dragon'],
  action: ['jumped over', 'flew past', 'ran toward', 'slept on', 'danced with'],
  place: ['the moon', 'a haunted house', 'the castle', 'the playground', 'a volcano']
};

// Initialize story array
let story = [];

// Add random word from selected category
function addToStory(type) {
  const words = wordBank[type];
  const randomWord = words[Math.floor(Math.random() * words.length)];
  story.push(randomWord);
  updateStory();
}

// Update story text in UI
function updateStory() {
  document.getElementById('story-text').innerText = story.join(' ');
}

// Clear the current story
function clearStory() {
  story = [];
  updateStory();
}

// Speak the story using Web Speech API
function speakStory() {
  if (story.length === 0) return;
  const utterance = new SpeechSynthesisUtterance(story.join(' '));
  window.speechSynthesis.speak(utterance);
}
