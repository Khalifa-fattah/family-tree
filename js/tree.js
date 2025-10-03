window.onload = function () {
    // 1. تحويل البيانات مع إضافة "وسم" (tag) لكل جيل
    const chartData = [];
    familyData.forEach(generation => {
        const generationTag = `gen-${generation.generation_number}`;

        generation.members.forEach(person => {
            let personNode = {
                id: person.id,
                pid: person.parentId,
                name: person.name,
                img: (person.image && person.image.includes('.')) ? person.image : 'images/default-avatar.png',
                tags: [generationTag] // إضافة الوسم لكل شخص
            };

            if (person.partnerId) {
                personNode.pids = [person.partnerId];
            }

            chartData.push(personNode);
        });
    });

    // --- الجزء الجديد والمهم: تعريف قوالب ملونة لكل جيل ---
    // ننسخ القالب الأصلي 'ana' وننشئ قوالب جديدة بأسماء مختلفة
    OrgChart.templates['gen-1-template'] = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates['gen-2-template'] = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates['gen-3-template'] = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates['gen-4-template'] = Object.assign({}, OrgChart.templates.ana);
    // -----------------------------------------------------------

    // 2. إعدادات الشجرة
    var chart = new OrgChart(document.getElementById("tree"), {
        nodes: chartData,
        
        onNodeClick: function(args) {
            return false; // يمنع فتح صفحة التفاصيل الافتراضية
        },

        nodeBinding: {
            field_0: "name",
            img_0: "img"
        },
        
        // --- تعديل مهم: نربط كل وسم بالقالب الملون الخاص به ---
        tags: {
            "gen-1": { template: "gen-1-template" },
            "gen-2": { template: "gen-2-template" },
            "gen-3": { template: "gen-3-template" },
            "gen-4": { template: "gen-4-template" }
        },
        // ----------------------------------------------------

        partnerSeparation: 200,
        enableSearch: true,
        nodeMenu: {
            details: { text: "تفاصيل" }
        },
        rootId: "person1_1",
        mouseScrool: OrgChart.action.zoom,
        layout: OrgChart.mixed,
        scaleInitial: OrgChart.match.boundary,
    });
};
