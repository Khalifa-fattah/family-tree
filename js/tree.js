document.addEventListener('DOMContentLoaded', () => {
  const treeWrapper = document.getElementById('tree-wrapper');
  const treeContainer = document.getElementById('tree');

  // بناء الشجرة من ملف data.js
  function buildTree(data, parentId = null) {
    return data.filter(p => p.parentId === parentId)
      .map(p => ({
        ...p,
        children: buildTree(data, p.id)
      }));
  }

  const treeData = buildTree(familyData);

  function renderTree(nodes, level = 0) {
    if (!nodes.length) return '';
    let html = `<div class="tree-level">`;
    nodes.forEach(node => {
      html += `
        <div class="tree-node ${node.parentId ? '' : 'parent'}">
          ${node.name}
        </div>
      `;
    });
    html += `</div>`;
    nodes.forEach(node => {
      if (node.children.length) {
        html += `<div class="tree-children">${renderTree(node.children, level + 1)}</div>`;
      }
    });
    return html;
  }

  treeContainer.innerHTML = renderTree(treeData);

  // ========== التحكم في الزووم والتحريك ==========
  let scale = 1;
  let posX = 0, posY = 0;
  let isDragging = false;
  let startX, startY;

  // التكبير والتصغير بعجلة الماوس
  treeWrapper.addEventListener('wheel', e => {
    e.preventDefault();
    const zoomIntensity = 0.1;
    if (e.deltaY < 0) {
      scale += zoomIntensity;
    } else {
      scale = Math.max(0.2, scale - zoomIntensity);
    }
    updateTransform();
  });

  // السحب بالماوس
  treeWrapper.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.clientX - posX;
    startY = e.clientY - posY;
  });

  document.addEventListener('mouseup', () => isDragging = false);

  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    posX = e.clientX - startX;
    posY = e.clientY - startY;
    updateTransform();
  });

  // دعم اللمس (موبايل)
  treeWrapper.addEventListener('touchstart', e => {
    if (e.touches.length === 1) {
      isDragging = true;
      startX = e.touches[0].clientX - posX;
      startY = e.touches[0].clientY - posY;
    }
  });

  treeWrapper.addEventListener('touchend', () => isDragging = false);

  treeWrapper.addEventListener('touchmove', e => {
    if (!isDragging || e.touches.length !== 1) return;
    posX = e.touches[0].clientX - startX;
    posY = e.touches[0].clientY - startY;
    updateTransform();
  });

  function updateTransform() {
    treeWrapper.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
  }
});