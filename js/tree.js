window.onload = function () {
    // 1. تحويل البيانات مع إضافة "وسم" (tag) لكل جيل
    const chartData = [];
    familyData.forEach(generation => {
        // إنشاء اسم للوسم بناءً على رقم الجيل، مثال: "gen-1", "gen-2"
        const generationTag = `gen-${generation.generation_number}`;

        generation.members.forEach(person => {
            let personNode = {
                id: person.id,
                pid: person.parentId,
                name: person.name,
                img: (person.image && person.image.includes('.')) ? person.image : 'images/default-avatar.png',
                tags: [generationTag] // <-- هذا هو السطر الجديد الذي يضيف الوسم
            };

            if (person.partnerId) {
                personNode.pids = [person.partnerId];
            }

            chartData.push(personNode);
        });
    });

    // 2. إعدادات الشجرة مع تحديد ألوان البطاقات لكل جيل
    OrgChart.templates.ana.field_0 = '<text class="field_0" style="font-size: 18px;" fill="#ffffff" x="125" y="95" text-anchor="middle">{val}</text>';

    var chart = new OrgChart(document.getElementById("tree"), {
        nodes: chartData,
        template: "ana",
        nodeBinding: {
            field_0: "name",
            img_0: "img"
        },
        
        // --- هذا هو الجزء الجديد الذي يحدد الألوان ---
        tags: {
            "gen-1": {
                template: "ana", // يمكن تحديد قالب مختلف لكل جيل إذا أردت
                nodeMenu: { // تغيير لون قائمة التفاصيل لتناسب البطاقة
                    details: { text: "تفاصيل", icon: OrgChart.icon.details(24, 24, '#fff'), onClick: (nodeId) => {} }
                }
            },
            "gen-2": {
                template: "ana"
            },
            "gen-3": {
                template: "ana"
            },
            "gen-4": {
                template: "ana"
            }
        },
        // -----------------------------------------

        partnerSeparation: 200,
        enableSearch: true,
        nodeMenu: {
            details: { text: "تفاصيل" },
        },
        rootId: "person1_1",
        mouseScrool: OrgChart.action.zoom,
        layout: OrgChart.mixed,
        scaleInitial: OrgChart.match.boundary,
    });
};
