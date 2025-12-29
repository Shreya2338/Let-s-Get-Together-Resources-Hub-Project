// Collapsible sections
document.querySelectorAll('.collapsible').forEach(header => {
  header.addEventListener('click', () => {
    const list = header.nextElementSibling;
    list.style.display = list.style.display === 'none' ? 'block' : 'none';
  });
});

// Search
document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll('.resource-list li').forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(query) ? 'list-item' : 'none';
  });
});

// Tag filtering
document.querySelectorAll('.tag').forEach(tagBtn => {
  tagBtn.addEventListener('click', () => {
    const tag = tagBtn.dataset.tag;
    document.querySelectorAll('.resource-list li').forEach(li => {
      const tags = li.dataset.tags.toLowerCase();
      li.style.display = tags.includes(tag.toLowerCase()) ? 'list-item' : 'none';
    });
  });
});

// Copy-to-clipboard
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const link = btn.dataset.clipboard;
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!');
    });
  });
});

// Dark mode toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Dark mode styles via JS
const style = document.createElement('style');
style.innerHTML = `
  .dark-mode {
    background-color: #333 !important;
    color: #eee !important;
  }
  .dark-mode a { color: #80c0ff; }
`;
document.head.appendChild(style);
