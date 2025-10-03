const colors = ["#ffe4e1", "#e6e6fa", "#f0fff0", "#fffacd", "#f0ffff", "#faebd7"];

function createFamilyTree(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    document.body.appendChild(tooltip);

    familyData.forEach((generation, genIndex) => {
        const genDiv = document.createElement("div");
        genDiv.classList.add("generation");
        const genTitle = document.createElement("h2");
        genTitle.textContent = generation.generation_name;
        genDiv.appendChild(genTitle);

        generation.members.forEach((member, idx) => {
            if (!member.parentId) {
                const familyDiv = document.createElement("div");
                familyDiv.classList.add("family-card");
                familyDiv.style.backgroundColor = colors[idx % colors.length];

                const memberDiv = createPersonDiv(member, tooltip);
                familyDiv.appendChild(memberDiv);

                appendChildren(member, familyDiv, tooltip);

                genDiv.appendChild(familyDiv);
            }
        });

        container.appendChild(genDiv);
    });
}

function createPersonDiv(person, tooltip) {
    const div = document.createElement("div");
    div.classList.add("person-card");

    const img = document.createElement("img");
    img.src = person.image || "images/default-avatar.jpg";
    div.appendChild(img);

    const nameSpan = document.createElement("span");
    nameSpan.textContent = person.name;
    div.appendChild(nameSpan);

    div.addEventListener("mouseenter", (e) => {
        tooltip.innerHTML = `<strong>${person.name}</strong><br>${person.birth_date || ''}<br>${person.bio || ''}`;
        tooltip.style.opacity = 1;
        tooltip.style.left = e.pageX + 10 + "px";
        tooltip.style.top = e.pageY + 10 + "px";
    });

    div.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.pageX + 10 + "px";
        tooltip.style.top = e.pageY + 10 + "px";
    });

    div.addEventListener("mouseleave", () => {
        tooltip.style.opacity = 0;
    });

    return div;
}

function appendChildren(person, parentDiv, tooltip) {
    const children = getPersonChildren(person.id);
    if (!children.length) return;

    const childrenDiv = document.createElement("div");
    childrenDiv.classList.add("children");

    children.forEach(child => {
        const childDiv = createPersonDiv(child, tooltip);
        childrenDiv.appendChild(childDiv);
        appendChildren(child, childDiv, tooltip);
    });

    parentDiv.appendChild(childrenDiv);
}

// استدعاء الشجرة
createFamilyTree("tree-container");