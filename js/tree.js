window.onload = function () {
    // --- الخطوة 1: تعريف القالب المخصص الجديد ---
    // هذا القالب يعرض صورة دائرية (100x100) وفوقها الاسم
    OrgChart.templates.photo_template = Object.assign({}, OrgChart.templates.base);
    OrgChart.templates.photo_template.size = [120, 140]; // حجم المساحة الكلية للعقدة
    OrgChart.templates.photo_template.node =
        '<rect x="0" y="0" width="120" height="140" fill="none" stroke="none"></rect>' + // مساحة شفافة
        '<clipPath id="clip"><circle cx="60" cy="60" r="50"></circle></clipPath>' +
        '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#clip)" xlink:href="{val}" x="10" y="10" width="100" height="100"></image>';
        OrgChart.templates.photo_template.field_0 =
        '<text style="font-size: 18px; font-weight: bold;" fill="#2c3e50" x="60" y="130" text-anchor="middle">{val}</text>';
    
    OrgChart.templates.photo_template.img_0 = ''; // نفرغ هذا لأنه تم دمجه في العقدة الرئيسية

    // -----------------------------------------------------------

    // 2. تحويل البيانات
    const chartData = [];
    familyData.forEach(generation => {
        const generationTag = `gen-${generation.generation_number}`;
        generation.members.forEach(person => {
            const imageUrl = (person.image && person.image.includes('.')) 
                ? person.image 
                : 'images/default-avatar.jpg';

            let personNode = {
                id: person.id,
                pid: person.parentId,
                name: person.name,
                img: imageUrl,
                tags: [generationTag]
            };
            if (person.partnerId) {
                personNode.pids = [person.partnerId];
            }
            chartData.push(personNode);
        });
    });

    // 3. إعدادات الشجرة
    var chart = new OrgChart(document.getElementById("tree"), {
        nodes: chartData,
        
        // --- استخدام القالب المخصص الجديد ---
        template: "photo_template",

        onNodeClick: function(args) { return false; },

        nodeBinding: {
            field_0: "name",
            // نربط الصورة بالعقدة الرئيسية التي عرفناها
            node: "img" 
        },
        
        tags: {
            "gen-1": {}, "gen-2": {}, "gen-3": {}, "gen-4": {}
        },

        partnerSeparation: 150,
        enableSearch: true,
        nodeMenu: { details: { text: "تفاصيل" } },
        rootId: "person1_1",
        mouseScrool: OrgChart.action.zoom,
        layout: OrgChart.mixed,
        scaleInitial: OrgChart.match.boundary,
    });
};
