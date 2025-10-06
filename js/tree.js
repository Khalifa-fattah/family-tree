// هذا هو الكود النهائي والمُحسّن لملف tree.js

window.onload = function () {
    // 1. تعريف القالب المخصص للصور مع إضافة معالجة الأخطاء
    OrgChart.templates.photo_template = Object.assign({}, OrgChart.templates.base);
    OrgChart.templates.photo_template.size = [120, 140];
    OrgChart.templates.photo_template.node =
        '<rect x="0" y="0" width="120" height="140" fill="none" stroke="none"></rect>' +
        '<clipPath id="clip"><circle cx="60" cy="60" r="50"></circle></clipPath>' +
        // --- هذا هو التعديل المهم: إضافة onerror ---
        '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#clip)" xlink:href="{val}" x="10" y="10" width="100" height="100" onerror="this.setAttribute(\'href\', \'images/default-avatar.jpg\');"></image>';
        // ---------------------------------------------
    OrgChart.templates.photo_template.field_0 =
        '<text style="font-size: 18px; font-weight: bold;" fill="#2c3e50" x="60" y="130" text-anchor="middle">{val}</text>';
    OrgChart.templates.photo_template.img_0 = '';

    // 2. تحويل البيانات
    const chartData = [];
    familyData.forEach(generation => {
        const generationTag = `gen-${generation.generation_number}`;
        generation.members.forEach(person => {
            
            // --- منطق اختيار الصورة بناءً على الجنس ---
            let imageUrl = person.image;
            if (!imageUrl || !imageUrl.includes('.')) {
                if (person.gender === 'female') {
                    imageUrl = 'images/female-avatar.jpg';
                } else {
                    imageUrl = 'images/default-avatar.jpg';
                }
            }

            let personNode = {
                id: person.id,
                pid: person.parentId,
                name: person.name,
                img: imageUrl, // هذا هو الحقل الذي يحتوي على رابط الصورة
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
        template: "photo_template",
        
        lazyLoading: true,
        dragScrool: false, 

        onNodeClick: function(args) { return false; },

        nodeBinding: {
            val: "img",
            field_0: "name"
        },

        tags: { "gen-1": {}, "gen-2": {}, "gen-3": {}, "gen-4": {} },
        partnerSeparation: 150,
        enableSearch: true,
        nodeMenu: { details: { text: "تفاصيل" } },
        rootId: "person1_1",
        mouseScrool: OrgChart.action.zoom,
        layout: OrgChart.mixed,
        scaleInitial: OrgChart.match.boundary,
    });

    // تحسين الأداء عند السحب
    chart.on('drag', function (sender, args) {
        sender.SVG.style.imageRendering = 'pixelated';
    });
    chart.on('dragend', function (sender, args) {
        sender.SVG.style.imageRendering = 'auto';
    });
};
