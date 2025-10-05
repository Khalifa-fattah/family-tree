window.onload = function () {
    // 1. تحويل البيانات مع إضافة "وسم" (tag) لكل جيل
    const chartData = [];
    familyData.forEach(generation => {
        const generationTag = `gen-${generation.generation_number}`;

        generation.members.forEach(person => {
            // --- تعديل منطق الصورة ---
            // إذا كان المسار موجوداً ويحتوي على نقطة (امتداد)، استخدمه.
            // وإلا، استخدم المسار الافتراضي الذي حددته.
            const imageUrl = (person.image && person.image.includes('.')) 
                ? person.image 
                : 'images/default-avatar.jpg'; // المسار الافتراضي الجديد

            let personNode = {
                id: person.id,
                pid: person.parentId,
                name: person.name,
                img: imageUrl, // استخدام المسار الصحيح
                tags: [generationTag]
            };

            if (person.partnerId) {
                personNode.pids = [person.partnerId];
            }

            chartData.push(personNode);
        });
    });

    // 2. إعدادات الشجرة
    var chart = new OrgChart(document.getElementById("tree"), {
        nodes: chartData,
        
        // --- استخدام القالب الجديد 'mery' لعرض الصورة والاسم فقط ---
        template: "mery",

        onNodeClick: function(args) {
            return false; // يمنع الإجراء الافتراضي عند النقر
        },

        nodeBinding: {
            field_0: "name", // الاسم
            img_0: "img"     // الصورة
        },
        
        // لا حاجة لتعريف قوالب جديدة للألوان مع هذا القالب
        // سنقوم بتلوين الخطوط الرابطة بدلاً من البطاقات
        tags: {
            "gen-1": { },
            "gen-2": { },
            "gen-3": { },
            "gen-4": { }
        },

        partnerSeparation: 150, // تقليل المسافة لتناسب القالب الجديد
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
