// ===== PASSWORD PROTECTION =====
const correctPassword = "lgt2025"; // 🔴 CHANGE THIS

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const error = document.getElementById("error-message");

  if (input === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("site-content").style.display = "block";
  } else {
    error.textContent = "Incorrect password. Try again.";
  }
}

// ===== COLLAPSIBLE SECTIONS =====
document.querySelectorAll('.collapsible').forEach(header => {
  header.addEventListener('click', () => {
    const list = header.nextElementSibling;
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
  });
});

// ===== SEARCH FUNCTION =====
document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll('.resource-list li').forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(query) ? 'list-item' : 'none';
  });
});

// ===== TAG FILTERING =====
document.querySelectorAll('.tag').forEach(tagBtn => {
  tagBtn.addEventListener('click', () => {
    const tag = tagBtn.dataset.tag.toLowerCase();

    if (tag === 'all') {
      document.querySelectorAll('.resource-list li').forEach(li => li.style.display = 'list-item');
      return;
    }

    document.querySelectorAll('.resource-list li').forEach(li => {
      const tags = li.dataset.tags ? li.dataset.tags.toLowerCase() : '';
      li.style.display = tags.includes(tag) ? 'list-item' : 'none';
    });
  });
});

// ===== COPY-TO-CLIPBOARD =====
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const link = btn.dataset.clipboard;
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!');
    });
  });
});

// ===== DARK MODE TOGGLE =====
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ===== OPTIONAL DARK MODE STYLES VIA JS =====
const style = document.createElement('style');
style.innerHTML = `
  .dark-mode {
    background-color: #333 !important;
    color: #eee !important;
  }
  .dark-mode a { color: #80c0ff; }
  .dark-mode ul.resource-list {
    background-color: #2a2a2a !important;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5) !important;
  }
`;
document.head.appendChild(style);
