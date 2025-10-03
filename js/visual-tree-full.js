document.addEventListener('DOMContentLoaded', function() {
    const treeContainer = document.getElementById('treeContainer');

    // خريطة ID → عضو لتسريع البحث
    const memberMap = {};
    data.forEach(gen => {
        gen.members.forEach(m => memberMap[m.id] = m);
    });

    // دالة توليد لون من اسم الأب
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
        // إيجاد كل الأفراد بدون ترتيب حسب الأجيال
        const roots = data.flatMap(gen => gen.members.filter(m => !m.parentId));

        roots.forEach(root => {
            const rootDiv = createPersonBranch(root);
            treeContainer.appendChild(rootDiv);
        });
    }

    function createPersonBranch(person) {
        const familyDiv = document.createElement('div');
        familyDiv.className = 'family';

        // لون العائلة
        const color = stringToColor(person.name);

        // بطاقة الشخص
        const personCard = document.createElement('div');
        personCard.className = 'person-card';
        personCard.textContent = person.name;
        personCard.style.backgroundColor = color;
        personCard.onclick = () => {
            window.location.href = `person.html?id=${person.id}`;
        };
        familyDiv.appendChild(personCard);

        // إنشاء فرع الأبناء
        const children = Object.values(memberMap).filter(m => m.parentId === person.id);
        if (children.length > 0) {
            const childrenDiv = document.createElement('div');
            childrenDiv.className = 'children';
            children.forEach(child => {
                const childBranch = createPersonBranch(child);
                childrenDiv.appendChild(childBranch);
            });
            familyDiv.appendChild(childrenDiv);
        }

        return familyDiv;
    }

    buildTree();
});