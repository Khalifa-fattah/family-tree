document.addEventListener('DOMContentLoaded', function() {
    const treeContainer = document.getElementById('treeContainer');

    // خريطة ID → عضو لتسريع البحث
    const memberMap = {};
    data.forEach(gen => { // <-- استخدم 'data' بدل 'familyData'
        gen.members.forEach(m => memberMap[m.id] = m);
    });

    // دالة توليد لون من سلسلة نصية (اسم الأب)
    function stringToColor(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const c = (hash & 0x00FFFFFF)
            .toString(16)
            .toUpperCase();
        return "#" + "000000".substring(0, 6 - c.length) + c;
    }

    function buildTree() {
        const generations = data.sort((a, b) => a.generation_number - b.generation_number);

        generations.forEach((gen) => {
            const generationRow = document.createElement('div');
            generationRow.className = 'generation';

            // تجميع الأبناء حسب parentId
            const parentsMap = {};
            gen.members.forEach(member => {
                let parentName = '';
                if (member.parentId && memberMap[member.parentId]) {
                    parentName = memberMap[member.parentId].name;
                }
                if (!parentsMap[parentName]) parentsMap[parentName] = [];
                parentsMap[parentName].push(member);
            });

            Object.keys(parentsMap).forEach((parentName) => {
                const familyDiv = document.createElement('div');
                familyDiv.className = 'family';

                let parentColor = parentName ? stringToColor(parentName) : "#95a5a6";

                if (parentName) {
                    const parentCard = document.createElement('div');
                    parentCard.className = 'parent-card';
                    parentCard.textContent = parentName;
                    parentCard.style.backgroundColor = parentColor;
                    parentCard.onclick = () => {
                        const parent = findMemberByName(parentName);
                        if(parent) window.location.href = `person.html?id=${parent.id}`;
                    };
                    familyDiv.appendChild(parentCard);
                }

                const childrenDiv = document.createElement('div');
                childrenDiv.className = 'children';
                parentsMap[parentName].forEach(child => {
                    const childCard = document.createElement('div');
                    childCard.className = 'child-card';
                    childCard.textContent = child.name;
                    childCard.style.backgroundColor = parentColor + "33"; // نسخة فاتحة للطفل
                    childCard.onclick = () => {
                        window.location.href = `person.html?id=${child.id}`;
                    };
                    childrenDiv.appendChild(childCard);
                });

                familyDiv.appendChild(childrenDiv);
                generationRow.appendChild(familyDiv);
            });

            treeContainer.appendChild(generationRow);
        });
    }

    function findMemberByName(name) {
        for(let gen of data){
            const member = gen.members.find(m => m.name === name);
            if(member) return member;
        }
        return null;
    }

    buildTree();
});