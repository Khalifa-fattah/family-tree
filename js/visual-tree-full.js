document.addEventListener('DOMContentLoaded', function() {
    const treeContainer = document.getElementById('treeContainer');

    function buildTree() {
        const generations = familyData.sort((a, b) => a.generation_number - b.generation_number);

        generations.forEach(gen => {
            const generationRow = document.createElement('div');
            generationRow.className = 'generation';

            // تجميع الأبناء حسب parentId
            const parentsMap = {};
            gen.members.forEach(member => {
                let parentName = '';
                if (gen.generation_number >= 2 && member.parentId) {
                    for (let g of familyData) {
                        const parent = g.members.find(m => m.id === member.parentId);
                        if (parent) {
                            parentName = parent.name;
                            break;
                        }
                    }
                }
                if (!parentsMap[parentName]) parentsMap[parentName] = [];
                parentsMap[parentName].push(member);
            });

            Object.keys(parentsMap).forEach(parentName => {
                const familyDiv = document.createElement('div');
                familyDiv.className = 'family';

                if (parentName) {
                    const parentCard = document.createElement('div');
                    parentCard.className = 'parent-card';
                    parentCard.textContent = parentName;
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
                    childCard.onclick = () => {
                        window.location.href = `person.html?id=${child.id}`;
                    };
                    childrenDiv.appendChild(childCard);
                });

                if(parentName) familyDiv.appendChild(childrenDiv);
                generationRow.appendChild(familyDiv);
            });

            treeContainer.appendChild(generationRow);
        });
    }

    function findMemberByName(name) {
        for(let gen of familyData){
            const member = gen.members.find(m => m.name === name);
            if(member) return member;
        }
        return null;
    }

    buildTree();
});