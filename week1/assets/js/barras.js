setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach((bar, i) => {
      setTimeout(() => {
        bar.style.width = bar.dataset.width + '%';
      }, i * 120);
    });
  }, 300);