const books = [
    { "book": "Genesis", "chapters": Array.from({ length: 50 }, (_, i) => i + 1) },
    { "book": "Exodus", "chapters": Array.from({ length: 40 }, (_, i) => i + 1) },
    { "book": "Leviticus", "chapters": Array.from({ length: 27 }, (_, i) => i + 1) },
    { "book": "Numbers", "chapters": Array.from({ length: 36 }, (_, i) => i + 1) },
    { "book": "Deuteronomy", "chapters": Array.from({ length: 34 }, (_, i) => i + 1) },
    { "book": "Joshua", "chapters": Array.from({ length: 24 }, (_, i) => i + 1) },
    { "book": "Judges", "chapters": Array.from({ length: 21 }, (_, i) => i + 1) },
    { "book": "Ruth", "chapters": Array.from({ length: 4 }, (_, i) => i + 1) },
    { "book": "1 Samuel", "chapters": Array.from({ length: 31 }, (_, i) => i + 1) },
    { "book": "2 Samuel", "chapters": Array.from({ length: 24 }, (_, i) => i + 1) },
    { "book": "1 Kings", "chapters": Array.from({ length: 22 }, (_, i) => i + 1) },
    { "book": "2 Kings", "chapters": Array.from({ length: 25 }, (_, i) => i + 1) },
    { "book": "1 Chronicles", "chapters": Array.from({ length: 29 }, (_, i) => i + 1) },
    { "book": "2 Chronicles", "chapters": Array.from({ length: 36 }, (_, i) => i + 1) },
    { "book": "Ezra", "chapters": Array.from({ length: 10 }, (_, i) => i + 1) },
    { "book": "Nehemiah", "chapters": Array.from({ length: 13 }, (_, i) => i + 1) },
    { "book": "Esther", "chapters": Array.from({ length: 10 }, (_, i) => i + 1) },
    { "book": "Job", "chapters": Array.from({ length: 42 }, (_, i) => i + 1) },
    { "book": "Psalms", "chapters": Array.from({ length: 150 }, (_, i) => i + 1) },
    { "book": "Proverbs", "chapters": Array.from({ length: 31 }, (_, i) => i + 1) },
    { "book": "Ecclesiastes", "chapters": Array.from({ length: 12 }, (_, i) => i + 1) },
    { "book": "Song of Solomon", "chapters": Array.from({ length: 8 }, (_, i) => i + 1) },
    { "book": "Isaiah", "chapters": Array.from({ length: 66 }, (_, i) => i + 1) },
    { "book": "Jeremiah", "chapters": Array.from({ length: 52 }, (_, i) => i + 1) },
    { "book": "Lamentations", "chapters": Array.from({ length: 5 }, (_, i) => i + 1) },
    { "book": "Ezekiel", "chapters": Array.from({ length: 48 }, (_, i) => i + 1) },
    { "book": "Daniel", "chapters": Array.from({ length: 12 }, (_, i) => i + 1) },
    { "book": "Hosea", "chapters": Array.from({ length: 14 }, (_, i) => i + 1) },
    { "book": "Joel", "chapters": Array.from({ length: 3 }, (_, i) => i + 1) },
    { "book": "Amos", "chapters": Array.from({ length: 9 }, (_, i) => i + 1) },
    { "book": "Obadiah", "chapters": Array.from({ length: 1 }, (_, i) => i + 1) },
    { "book": "Jonah", "chapters": Array.from({ length: 4 }, (_, i) => i + 1) },
    { "book": "Micah", "chapters": Array.from({ length: 7 }, (_, i) => i + 1) },
    { "book": "Nahum", "chapters": Array.from({ length: 3 }, (_, i) => i + 1) },
    { "book": "Habakkuk", "chapters": Array.from({ length: 3 }, (_, i) => i + 1) },
    { "book": "Zephaniah", "chapters": Array.from({ length: 3 }, (_, i) => i + 1) },
    { "book": "Haggai", "chapters": Array.from({ length: 2 }, (_, i) => i + 1) },
    { "book": "Zechariah", "chapters": Array.from({ length: 14 }, (_, i) => i + 1) },
    { "book": "Malachi", "chapters": Array.from({ length: 4 }, (_, i) => i + 1) },
    { "book": "Matthew", "chapters": Array.from({ length: 28 }, (_, i) => i + 1) },
    { "book": "Mark", "chapters": Array.from({ length: 16 }, (_, i) => i + 1) },
    { "book": "Luke", "chapters": Array.from({ length: 24 }, (_, i) => i + 1) },
    { "book": "John", "chapters": Array.from({ length: 21 }, (_, i) => i + 1) },
    { "book": "Acts", "chapters": Array.from({ length: 28 }, (_, i) => i + 1) },
    { "book": "Romans", "chapters": Array.from({ length: 16 }, (_, i) => i + 1) },
    { "book": "1 Corinthians", "chapters": Array.from({ length: 16 }, (_, i) => i + 1) },
    { "book": "2 Corinthians", "chapters": Array.from({ length: 13 }, (_, i) => i + 1) },
    { "book": "Galatians", "chapters": Array.from({ length: 6 }, (_, i) => i + 1) },
    { "book": "Ephesians", "chapters": Array.from({ length: 6 }, (_, i) => i + 1) },
    { "book": "Philippians", "chapters": Array.from({ length: 4 }, (_, i) => i + 1) },
    { "book": "Colossians", "chapters": Array.from({ length: 4 }, (_, i) => i + 1) },
    { "book": "1 Thessalonians", "chapters": Array.from({ length: 5 }, (_, i) => i + 1) },
    { "book": "2 Thessalonians", "chapters": Array.from({ length: 3 }, (_, i) => i + 1) },
    { "book": "1 Timothy", "chapters": Array.from({ length: 6 }, (_, i) => i + 1) },
    { "book": "2 Timothy", "chapters": Array.from({ length: 4 }, (_, i) => i + 1) },
    { "book": "Titus", "chapters": Array.from({ length: 3 }, (_, i) => i + 1) },
    { "book": "Philemon", "chapters": Array.from({ length: 1 }, (_, i) => i + 1) },
    { "book": "Hebrews", "chapters": Array.from({ length: 13 }, (_, i) => i + 1) },
    { "book": "James", "chapters": Array.from({ length: 5 }, (_, i) => i + 1) },
    { "book": "1 Peter", "chapters": Array.from({ length: 5 }, (_, i) => i + 1) },
    { "book": "2 Peter", "chapters": Array.from({ length: 3 }, (_, i) => i + 1) },
    { "book": "1 John", "chapters": Array.from({ length: 5 }, (_, i) => i + 1) },
    { "book": "2 John", "chapters": Array.from({ length: 1 }, (_, i) => i + 1) },
    { "book": "3 John", "chapters": Array.from({ length: 1 }, (_, i) => i + 1) },
    { "book": "Jude", "chapters": Array.from({ length: 1 }, (_, i) => i + 1) },
    { "book": "Revelation", "chapters": Array.from({ length: 22 }, (_, i) => i + 1) }
  ];
  
  
  let version = localStorage.getItem('bibleVersion') || 'en-asv';
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("version").value = version;
    populateBooks();
    document.getElementById("books").addEventListener("change", populateChapters);
    document.getElementById("chapters").addEventListener("change", displayBibleText);
  });
  
  function changeVersion() {
    version = document.getElementById("version").value;
    localStorage.setItem('bibleVersion', version);
    displayBibleText();
  }
  
  function populateBooks() {
    const booksSelect = document.getElementById("books");
    books.forEach((book, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = book.book;
      booksSelect.appendChild(option);
    });
    populateChapters();
  }
  
  function populateChapters() {
    const booksSelect = document.getElementById("books");
    const chaptersSelect = document.getElementById("chapters");
    const selectedBookIndex = booksSelect.value;
    const chapters = books[selectedBookIndex].chapters;
  
    chaptersSelect.innerHTML = "";
    chapters.forEach((chapter) => {
      const option = document.createElement("option");
      option.value = chapter;
      option.textContent = `Chapter ${chapter}`;
      chaptersSelect.appendChild(option);
    });
  
    displayBibleText();
  }
  
  async function displayBibleText() {
    const booksSelect = document.getElementById("books");
    const chaptersSelect = document.getElementById("chapters");
    const selectedBookIndex = booksSelect.value;
    const selectedChapter = chaptersSelect.value;
    const selectedBook = books[selectedBookIndex].book;
  
    const bibleText = document.getElementById("bibleText");
    bibleText.innerHTML = `<h2>${selectedBook} ${selectedChapter}</h2><p>Loading...</p>`;
  
    const bibleBook = selectedBook.replace(/\s/g, '').toLowerCase();
  
    try {
      const response = await fetch(
        `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${bibleBook}/chapters/${selectedChapter}.json`
      );
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const data = await response.json();
  
      bibleText.innerHTML = `<h2>${selectedBook} ${selectedChapter}</h2>`;
      data.data.forEach((verse) => {
        const p = document.createElement("p");
        p.textContent = `${verse.verse}: ${verse.text}`;
        bibleText.appendChild(p);
      });
    } catch (error) {
      console.error("Error fetching Bible data:", error);
      bibleText.innerHTML = `<h2>${selectedBook} ${selectedChapter}</h2><p>Sorry, an error occurred while loading the content.</p>`;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    populateBooks();
    loadDarkMode();
  });

function toggleFab() {
    const fabOptions = document.querySelector('.fab-options');
    fabOptions.classList.toggle('active');
  }
  
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
  
    const darkModeButton = document.querySelector('.fab-options button');
    darkModeButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
  }
  
  function loadDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
      document.body.classList.add('dark-mode');
      document.querySelector('.fab-options button').textContent = 'Light Mode';
    }
  }
  
  function copyText() {
    const bibleText = document.getElementById("bibleText").innerText;
    navigator.clipboard.writeText(bibleText).then(() => {
      alert('Text copied to clipboard');
    }).catch(err => {
      console.error('Error copying text: ', err);
    });
  }
  
//   function screenshot() {
//     html2canvas(document.querySelector('.container')).then(canvas => {
//       const imgData = canvas.toDataURL('image/png');
//       const link = document.createElement('a');
//       link.href = imgData;
//       link.download = 'bible-screenshot.png';
//       link.click();
//     });
//   }



function screenshot() {
    // Capture the content of the .container element
    html2canvas(document.querySelector('.container')).then(canvas => {
      // Convert canvas data to a URL representing the image
      const imgData = canvas.toDataURL('image/png');
      
      // Create a link element to trigger the download
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'bible-screenshot.png'; // Set the filename for download
      
      // Programmatically click the link to trigger the download
      link.click();
    });
  }

  

  let isHighlighting = false;
let highlightColor = '#ffeb3b'; // Default highlight color (yellow)

function highlightText() {
  const bibleText = document.getElementById("bibleText");
  
  // Toggle highlighting mode
  isHighlighting = !isHighlighting;

  if (isHighlighting) {
    // Show color picker
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.style.display = 'block';
    colorPicker.focus(); // Focus color picker for immediate use

    // Show save button
    const saveButton = document.getElementById('saveHighlight');
    saveButton.style.display = 'block';

    // Add event listener for color picker change
    colorPicker.addEventListener('change', () => {
      highlightColor = colorPicker.value;
    });

    // Add event listener for document click to end highlighting
    document.addEventListener('click', endHighlighting);
    
    // Prevent text selection while highlighting
    bibleText.style.userSelect = 'none';
  } else {
    // Hide color picker and save button
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.style.display = 'none';
    const saveButton = document.getElementById('saveHighlight');
    saveButton.style.display = 'none';

    // Remove event listener for document click
    document.removeEventListener('click', endHighlighting);
    
    // Allow text selection after highlighting
    bibleText.style.userSelect = 'auto';
  }
}

function endHighlighting(event) {
  const bibleText = document.getElementById("bibleText");
  
  // Check if click is outside of bibleText and colorPicker
  if (!bibleText.contains(event.target) && event.target !== document.getElementById('colorPicker')) {
    isHighlighting = false;
    highlightText(); // Toggle off highlighting
  }
}

function saveHighlight() {
  // Create a copy of the container to preserve styles
  const containerCopy = document.querySelector('.container').cloneNode(true);

  // Apply styles for highlighting to the copy
  const highlightedElements = containerCopy.querySelectorAll('.highlighted');
  highlightedElements.forEach(element => {
    element.style.backgroundColor = highlightColor;
  });

  // Convert to canvas and save as image
  html2canvas(containerCopy).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'highlighted-bible.png';
    link.click();
  });
}

// Additional functions like copyText() and screenshot() remain unchanged from previous implementation


