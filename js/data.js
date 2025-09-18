// بيانات شجرة العائلة
const familyData = [
    {
        generation_number: 1,
        generation_name: "الجيل الأول - الأجداد",
        members: [
            {
                id: "person1_1",
                name: "احمد عبيد",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: ["person2_1", "person2_2", "person2_3"]
            },
            {
                id: "person1_2",
                name: "نفيسة خلف الله",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: ["person2_1", "person2_2", "person2_3"]
            }
        ]
    },
    {
        generation_number: 2,
        generation_name: "الجيل الثاني - الآباء",
        members: [
            {
                id: "person2_1",
                name: "عز الدين احمد عبيد",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person2_2",
                name: "محمد الحسن احمد عبيد",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person2_3",
                name: "ست النساء احمد عبيد",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person2_4",
                name: "منى احمد عبيد",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person2_5",
                name: "زمزم احمد عبيد",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person2_6",
                name: "عرفة احمد عبيد",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person2_7",
                name: "جدة احمد عبيد",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person2_8",
                name: "ليلى احمد عبيد",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person2_9",
                name: "علي احمد عبيد",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person2_10",
                name: "صفاء احمد عبيد",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            
        ]
    },
    {
        generation_number: 3,
        generation_name: "الجيل الثالث - الأحفاد",
        members: [
            {
                id: "person3_1",
                name: "أحمد محمد العلي",
                image: "images/person3_1.jpg",
                bio: "مهندس معماري مشهور، صمم العديد من المباني المهمة في المدينة. حاصل على شهادة من جامعة القاهرة. متزوج وله ثلاثة أطفال.",
                birth_date: "1920-03-15",
                children: ["person4_1", "person4_2"]
            },
            {
                id: "person3_2",
                name: "فاطمة محمد العلي",
                image: "images/person3_2.jpg",
                bio: "طبيبة أطفال، أول امرأة في العائلة تحصل على شهادة طبية. عملت في مستشفى الأطفال الرئيسي لأكثر من 30 عاماً. لها مساهمات كبيرة في مجال طب الأطفال.",
                birth_date: "1925-08-22",
                children: ["person4_3"]
            },
            {
                id: "person3_3",
                name: "سعد علي العلي",
                image: "images/person3_3.jpg",
                bio: "كاتب وصحفي، عمل في عدة صحف محلية وعربية. له عدة كتب منشورة في الأدب والتاريخ. حاصل على جوائز أدبية متعددة.",
                birth_date: "1918-12-05",
                children: ["person4_4", "person4_5"]
            },
            {
                id: "person3_4",
                name: "نور علي العلي",
                image: "images/person3_4.jpg",
                bio: "معلمة ومديرة مدرسة، كرست حياتها للتعليم. ساهمت في تطوير المناهج التعليمية وتدريب المعلمين. حصلت على وسام التميز في التعليم.",
                birth_date: "1922-06-18",
                children: []
            },
            {
                id: "person3_5",
                name: "يوسف خديجة الأحمد",
                image: "images/person3_5.jpg",
                bio: "رجل أعمال ناجح، أسس شركة للاستيراد والتصدير. ساهم في العديد من المشاريع الخيرية والتنموية. معروف بكرمه وحسن معاملته للموظفين.",
                birth_date: "1920-09-30",
                children: ["person4_6"]
            }
        ]
    },
    {
        generation_number: 4,
        generation_name: "الجيل الرابع - الجيل الحالي",
        members: [
            {
                id: "person4_1",
                name: "محمد أحمد العلي",
                image: "images/person4_1.jpg",
                bio: "مهندس برمجيات، يعمل في شركة تقنية كبرى. متخصص في تطوير التطبيقات المحمولة والذكاء الاصطناعي. حاصل على ماجستير في علوم الحاسوب.",
                birth_date: "1985-04-12",
                children: []
            },
            {
                id: "person4_2",
                name: "سارة أحمد العلي",
                image: "images/person4_2.jpg",
                bio: "طبيبة أسنان، تدير عيادة خاصة. حاصلة على دكتوراه في طب الأسنان من جامعة أمريكية. متطوعة في عدة منظمات خيرية طبية.",
                birth_date: "1988-11-08",
                children: []
            },
            {
                id: "person4_3",
                name: "أمين فاطمة الحسن",
                image: "images/person4_3.jpg",
                bio: "محامي متخصص في القانون التجاري، يعمل في مكتب محاماة مرموق. حاصل على ماجستير في القانون الدولي. له مساهمات في مجال حقوق الإنسان.",
                birth_date: "1982-01-25",
                children: []
            },
            {
                id: "person4_4",
                name: "ليلى سعد العلي",
                image: "images/person4_4.jpg",
                bio: "مصممة جرافيك ومديرة إبداعية، تعمل في وكالة إعلانات دولية. حاصلة على جوائز في التصميم والإبداع. تدرّس التصميم في الجامعة كمحاضرة زائرة.",
                birth_date: "1990-07-14",
                children: []
            },
            {
                id: "person4_5",
                name: "كريم سعد العلي",
                image: "images/person4_5.jpg",
                bio: "طبيب قلب، يعمل في مستشفى جامعي. متخصص في جراحة القلب المفتوح. حاصل على زمالة من مستشفى أمريكي مرموق. له أبحاث منشورة في مجلات طبية عالمية.",
                birth_date: "1987-03-03",
                children: []
            },
            {
                id: "person4_6",
                name: "نادية يوسف الأحمد",
                image: "images/person4_6.jpg",
                bio: "مهندسة مدنية، تعمل في شركة استشارات هندسية. متخصصة في تصميم الجسور والأنفاق. حاصلة على ماجستير في الهندسة الإنشائية. تشارك في مشاريع البنية التحتية الكبرى.",
                birth_date: "1983-12-19",
                children: []
            }
        ]
    }
];

// فهرس للبحث السريع
const personIndex = {};
familyData.forEach(generation => {
    generation.members.forEach(person => {
        personIndex[person.id] = person;
    });
});

// دالة للحصول على شخص بواسطة ID
function getPersonById(id) {
    return personIndex[id];
}

// دالة للحصول على أطفال شخص معين
function getPersonChildren(personId) {
    const person = getPersonById(personId);
    if (!person || !person.children) return [];
    
    return person.children.map(childId => getPersonById(childId)).filter(child => child);
}

// دالة للبحث في الأسماء
function searchPeople(query) {
    if (!query || query.trim() === '') return [];
    
    const searchTerm = query.trim().toLowerCase();
    const results = [];
    
    familyData.forEach(generation => {
        generation.members.forEach(person => {
            if (person.name.toLowerCase().includes(searchTerm)) {
                results.push({
                    ...person,
                    generation_name: generation.generation_name
                });
            }
        });
    });
    
    return results;
}

// دالة للحصول على اسم الجيل لشخص معين
function getPersonGeneration(personId) {
    for (let generation of familyData) {
        for (let member of generation.members) {
            if (member.id === personId) {
                return generation.generation_name;
            }
        }
    }
    return 'غير محدد';
}
