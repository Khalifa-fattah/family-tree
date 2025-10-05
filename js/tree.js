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
                // نستخدم المسار الموجود في البيانات، وسنعالج الخطأ لاحقاً
                img: person.image, 
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
        template: "ana",
        
        onNodeClick: function(args) {
            return false; // يمنع فتح صفحة التفاصيل الافتراضية
        },

        nodeBinding: {
            field_0: "name",
            img_0: "img"
        },
        
        tags: {
            "gen-1": { template: "ana" },
            "gen-2": { template: "ana" },
            "gen-3": { template: "ana" },
            "gen-4": { template: "ana" }
        },

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

    // --- الجزء الجديد والمهم: معالجة الصور المكسورة ---
    // هذا الكود يتم تشغيله بعد إنشاء الشجرة
    // وهو يمر على كل الصور ويستمع لحدث "error"
    chart.on('render', function() {
        const images = document.querySelectorAll('.boc-img-0'); // استهداف كل الصور في الشجرة
        images.forEach(img => {
            img.addEventListener('error', function() {
                // عند فشل تحميل الصورة، استبدلها بالصورة الافتراضية
                this.setAttribute('href', 'images/default-avatar.png');
            });
            // للتأكد من أن الصور التي ليس لها مسار أصلاً تظهر بالصورة الافتراضية
            if (!img.getAttribute('href')) {
                img.setAttribute('href', 'images/default-avatar.png');
            }
        });
    });
    // استدعاء render مرة واحدة يدوياً لتطبيق الكود على الفور
    chart.draw();
    // ----------------------------------------------------
};
