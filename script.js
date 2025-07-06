document.addEventListener('DOMContentLoaded', function() {
      const categories = document.getElementById('categories');
      const tools = {
        assistants: document.getElementById('tools-assistants'),
        productivity: document.getElementById('tools-productivity'),
        learning: document.getElementById('tools-learning'),
        writing: document.getElementById('tools-writing'),
        collaboration: document.getElementById('tools-collaboration'),
        planning: document.getElementById('tools-planning'),
        finance: document.getElementById('tools-finance'),
        accessibility: document.getElementById('tools-accessibility'),
        programming: document.getElementById('tools-programming'),
        image: document.getElementById('tools-image'),
        automation: document.getElementById('tools-automation'),
        social: document.getElementById('tools-social'),
        design: document.getElementById('tools-design'),
        specialized: document.getElementById('tools-specialized'),
        miscellaneous: document.getElementById('tools-miscellaneous'),
        'pdf-tools': document.getElementById('tools-pdf-tools'),
      };
      document.querySelectorAll('.category').forEach(cat => {
        cat.addEventListener('click', function() {
          const catKey = cat.getAttribute('data-category');
          categories.style.display = 'none';
          Object.values(tools).forEach(a => a && a.classList.remove('active'));
          if (tools[catKey]) tools[catKey].classList.add('active');
          window.scrollTo(0, 0);
        });
      });
      window.showCategories = function() {
        categories.style.display = 'grid';
        Object.values(tools).forEach(a => a && a.classList.remove('active'));
        window.scrollTo(0, 0);
      }
    }); 