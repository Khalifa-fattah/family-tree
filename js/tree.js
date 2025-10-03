window.onload = function () {
    // هذا الكود يضمن أن الصفحة وملف البيانات قد تم تحميلهما بالكامل

    // 1. تحويل بيانات العائلة إلى تنسيق يفهمه OrgChart
    const chartData = [];
    familyData.forEach(generation => {
        generation.members.forEach(person => {
            // ننشئ كائن الشخص الأساسي
            let personNode = {
                id: person.id,
                pid: person.parentId, // parentId هو نفسه pid
                name: person.name,
                img: person.image || 'images/default-avatar.png'
            };

            // **الخطوة الجديدة: البحث عن الشريك وربطه**
            // إذا كان للشخص partnerId، نضيفه إلى خاصية pids
            if (person.partnerId) {
                personNode.pids = [person.partnerId];
            }

            chartData.push(personNode);
        });
    });

    // 2. إعدادات الشجرة
    var chart = new OrgChart(document.getElementById("tree"), {
        nodes: chartData, // استخدام البيانات المحولة
        template: "ana", // قالب يدعم الصور
        nodeBinding: {
            field_0: "name", // عرض الاسم
            img_0: "img"     // عرض الصورة
        },
        
        // إعدادات مهمة للتعامل مع الشركاء
        partnerSeparation: 200, // المسافة بين الشريكين
        
        // إعدادات إضافية
        enableSearch: true, // تفعيل البحث
        nodeMenu: {
            details: { text: "تفاصيل" },
        },
        // تحديد الجد كجذر للشجرة
        rootId: "person1_1",
        
        // إعدادات التكبير والتصغير والتحريك
        mouseScrool: OrgChart.action.zoom,
        layout: OrgChart.mixed,
        scaleInitial: OrgChart.match.boundary,
    });
};
