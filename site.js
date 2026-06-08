// Inject shared nav and footer includes
async function loadIncludes() {
  const includes = document.querySelectorAll('[data-include]');
  for (const el of includes) {
    const file = el.getAttribute('data-include');
    try {
      const res = await fetch(file);
      if (res.ok) {
        el.innerHTML = await res.text();
      }
    } catch (e) {
      console.warn(`Could not load include: ${file}`, e);
    }
  }
}

document.addEventListener('DOMContentLoaded', loadIncludes);
