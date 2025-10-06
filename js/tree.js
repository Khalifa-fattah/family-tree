window.onload = function () {
    // 1. تعريف القالب المخصص للصور
    OrgChart.templates.photo_template = Object.assign({}, OrgChart.templates.base);
    OrgChart.templates.photo_template.size = [120, 140];
    OrgChart.templates.photo_template.node =
        '<rect x="0" y="0" width="120" height="140" fill="none" stroke="none"></rect>' +
        '<clipPath id="clip"><circle cx="60" cy="60" r="50"></circle></clipPath>' +
        '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#clip)" xlink:href="{val}" x="10" y="10" width="100" height="100"></image>';
    OrgChart.templates.photo_template.field_0 =
        '<text style="font-size: 18px; font-weight: bold;" fill="#2c3e50" x="60" y="130" text-anchor="middle">{val}</text>';
    
    // لا نحتاج لربط حقل الصورة هنا لأننا سنربطه في nodeBinding
    OrgChart.templates.photo_template.img_0 = '';

    // 2. تحويل البيانات
    const chartData = [];
    familyData.forEach(generation => {
        const generationTag = `gen-${generation.generation_number}`;
        generation.members.forEach(person => {
            
            // --- منطق اختيار الصورة بناءً على الجنس (الكود الصحيح) ---
            let imageUrl = person.image; // نبدأ بالصورة المخصصة للشخص

            // إذا لم تكن هناك صورة مخصصة، اختر الصورة الافتراضية بناءً على الجنس
            if (!imageUrl || !imageUrl.includes('.')) {
                if (person.gender === 'female') {
                    imageUrl = 'images/female-avatar.jpg'; // الصورة الافتراضية للإناث
                } else {
                    imageUrl = 'images/default-avatar.jpg'; // الصورة الافتراضية للذكور
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

    // 3. إعدادات الشجرة مع كل تحسينات الأداء
    var chart = new OrgChart(document.getElementById("tree"), {
        nodes: chartData,
        template: "photo_template",
        
        lazyLoading: true,
        dragScrool: false, 

        onNodeClick: function(args) { return false; },

        // --- هذا هو السطر الذي تم تصحيحه ---
        nodeBinding: {
            val: "img",      // نربط حقل 'img' بالصورة {val}
            field_0: "name"  // نربط حقل 'name' بالنص {val}
        },
        // ------------------------------------

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
