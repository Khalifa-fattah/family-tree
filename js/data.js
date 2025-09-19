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
                children: ["person2_1", "person2_2", "person2_3", "person2_4", "person2_5", "person2_6", "person2_7", "person2_8", "person2_9", "person2_10"]
            },
            {
                id: "person1_2",
                name: "نفيسة خلف الله",
                image: "images/person1_2.jpg",
                bio: "هي نفيسة بت خلف الله على الشيخ من اسرة عريقة في مروي شرق منطقة شبا لها اخ اسمه محمد خلف الله تزوجت من الجد احمد عبيد ولهم من اللابناء ما شاء الله بنين وبنات توفي زوجها اولا وكانت عماد الاسرة توفيت عام 1985 بعد اداء فريضة الحج بعد حياة حافلة بالعطاء والكرم",
                birth_date: "",
                children: ["person2_1", "person2_2", "person2_3", "person2_4", "person2_5", "person2_6", "person2_7", "person2_8", "person2_9", "person2_10"]
            }
        ]
    },
    {
        generation_number: 2,
        generation_name: "الجيل الثاني - الآباء",
        members: [
            {
                id: "person2_1",
                name: "عز الدين",
                parentId: "person1_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: ["person3_1", "person3_2","person3_3","person3_4","person3_5","person3_6","person3_7","person3_8"]
            },
            {
                id: "person2_2",
                name: "محمد الحسن",
                parentId: "person1_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: ["person3_9","person3_10","person3_11"]
            },
            {
                id: "person2_3",
                name: "ست النساء",
                parentId: "person1_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: ["person3_12"]
            },
            {
                id: "person2_4",
                name: "منى",
                parentId: "person1_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: ["person3_13","person3_14","person3_15","person3_16","person3_17","person3_18","person3_19"]
            },
            {
                id: "person2_5",
                name: "زمزم",
                parentId: "person1_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: ["person3_20","person3_21","person3_22","person3_23","person3_24","person3_25","person3_26","person3_27","person3_28"]
            },
            {
                id: "person2_6",
                name: "عرفة",
                parentId: "person1_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: ["person3_29","person3_30","person3_31","person3_32","person3_33","person3_34","person3_35","person3_36","person3_37"]
            },
            {
                id: "person2_7",
                name: "جدة",
                parentId: "person1_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person2_8",
                name: "ليلى",
                parentId: "person1_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: ["person3_38","person3_39","person3_40","person3_41"]
            },
            {
                id: "person2_9",
                name: "علي",
                parentId: "person1_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: ["person3_42","person3_43","person3_44","person3_45"]
            },
            {
                id: "person2_10",
                name: "صفاء",
                parentId: "person1_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: ["person3_46","person3_47"]
            },
        ]
    },
    {
        generation_number: 3,
        generation_name: "الجيل الثالث - الأحفاد",
        members: [
            {
                id: "person3_1",
                name: "عاطف عز الدين",
                parentId: "person2_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_2",
                name: "زاهر عز الدين",
                parentId: "person2_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_3",
                name: "رشيدة عز الدين",
                parentId: "person2_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_4",
                name: "محمد عز الدين",
                parentId: "person2_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: ["person4_25","person3_26","person3_27"]
            },
            {
                id: "person3_5",
                name: " سامي عز الدين",
                parentId: "person2_1", 
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person3_6",
                name: "وليد عز الدين",
                parentId: "person2_1",
                image: "images/default-avatar",
                bio: "له الرحمه",
                birth_date: "",
                children: []
            },
            {
                id: "person3_7",
                name: "امل عز الدين",
                parentId: "person2_1",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person3_8",
                parentId: "person2_1",
                name: "اميرة عز الدين",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person3_9",
                name: "نفيسه محمد الحسن",
                parentId: "person2_2",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_10",
                name: "مصعب محمد الحسن",
                parentId: "person2_2",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_11",
                name: "احمد محمد الحسن",
                parentId: "person2_2",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_12",
                name: "حسام حسن",
                parentId: "person2_3",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_13",
                name: "عوض على",
                parentId: "person2_4",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_14",
                name: "قذافي على",
                parentId: "person2_4",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_15",
                name: "عماد على",
                parentId: "person2_4",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_16",
                name: "محمد على",
                parentId: "person2_4",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },{
                id: "person3_17",
                name: "هالة على",
                parentId: "person2_4",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_18",
                name: "نهلة على",
                parentId: "person2_4",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_19",
                name: "نهى على",
                parentId: "person2_4",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_20",
                name: "ياسر كمال",
                parentId: "person2_5",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_21",
                name: "سمية كمال",
                parentId: "person2_5",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_22",
                name: "الهام كمال",
                parentId: "person2_5",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_23",
                name: "امتثال كمال",
                parentId: "person2_5",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_24",
                name: "سلمى كمال",
                parentId: "person2_5",
                image: "images/default-avatar",
                bio: "لها الرحمة",
                birth_date: "",
                children: []
            },
            {
                id: "person3_25",
                name: "ابو بكر كمال",
                parentId: "person2_5",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_26",
                name: "محمد كمال",
                parentId: "person2_5",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            
            {
                id: "person3_27",
                name: "مروة كمال",
                parentId: "person2_5",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_28",
                name: "سارة كمال",
                parentId: "person2_5",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_29",
                name: "عادل فضل الله",
                parentId: "person2_6",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: ["person4_1"]
            },
            {
                id: "person3_30",
                name: "رباب فضل الله",
                parentId: "person2_6",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person3_31",
                name: "انور فضل الله",
                parentId: "person2_6",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: ["person4_2","person4_3"]
            },
            {
                id: "person3_32",
                name: "خالد فضل الله",
                parentId: "person2_6",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "له الرحمة",
                children: [""]
            },
            {
                id: "person3_33",
                name: "مرتضى فضل الله",
                parentId: "person2_6",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: ["person4_4","person4_5","person4_6","person4_7",]
            },
            {
                id: "person3_34",
                name: "ربيعة فضل الله",
                parentId: "person2_6",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: ["person4_8","person4_9","person4_10","person4_11","person4_12","person4_13",]
            },
            {
                id: "person3_35",
                name: "على فضل الله",
                parentId: "person2_6",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: ["person4_14","person4_15","person4_16",]
            },
              {
                id: "person3_36",
                name: "رحاب فضل الله",
                parentId: "person2_6",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: ["person4_17","person4_18","person4_19","person4_20","person4_21","person4_22","person4_23","person4_24",]
            },
            {
                id: "person3_37",
                name: "نهال فضل الله",
                parentId: "person2_6",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: ["person4_25","person3_26","person3_27"]
            },
            {
                id: "person3_38",
                name: "ابو سفيان طه",
                parentId: "person2_7",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person3_39",
                name: "ابو العلا طه",
                parentId: "person2_7",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person3_40",
                name: "ابو العتاهية طه",
                parentId: "person2_7",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person3_41",
                name: "ابو القاسم طه",
                parentId: "person2_7",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person3_42",
                name: "احمد على",
                parentId: "person2_9",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person3_43",
                name: "نفيسة على",
                parentId: "person2_9",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person3_44",
                name: "نسيبة على",
                parentId: "person2_9",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person3_45",
                name: "خنساء على",
                parentId: "person2_9",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person3_46",
                name: "ابو القاسم كمال",
                parentId: "person2_10",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            {
                id: "person3_47",
                name: "الاء كمال",
                parentId: "person2_10",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: [""]
            },
            // أضف باقي الجيل الثالث بنفس الطريقة مع parentId الصحيح
        ]
    },
    {
        generation_number: 4,
        generation_name: "الجيل الرابع - أبناء الأحفاد",
        members: [
           {
                id: "person4_1",
                name: "محمد عادل",
                parentId: "person3_29",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_2",
                name: "ايه انور",
                parentId: "person3_31",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_3",
                name: "الاء انور",
                parentId: "person3_31",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_4",
                name: "غادة مرتضى",
                parentId: "person3_33",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_5",
                name: "مجاب مرتضى",
                parentId: "person3_33",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_6",
                name: "غفران مرتضي",
                parentId: "person3_33",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_7",
                name: "خالد مرتضى",
                parentId: "person3_33",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_8",
                name: "خليفة عبدالفتاح",
                parentId: "person3_34",
                image: "images/person4_8.jpg",
                bio: "الاخ الاكبر من منطقة نوري درس بها والتحق بجامعة السودان للعلوم والتكنلوجيا في كلية هندسة  النفط والتعدين درس لغات برمجة وذكاء اصطناعي مصمم مواقع الكترونية",
                birth_date: "2002-6-2",
                children: []
            },
            {
                id: "person4_9",
                name: "شهد عبدالفتاح",
                parentId: "person3_34",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "2003",
                children: []
            },
            {
                id: "person4_10",
                name: "شذى عبدالفتاح",
                parentId: "person3_",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "2006",
                children: []
            },
            {
                id: "person4_11",
                name: "عرفة عبدالفتاح",
                parentId: "person3_34",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "2008",
                children: []
            },
            {
                id: "person4_12",
                name: "محمد عبدالفتاح",
                parentId: "person3_34",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "2014",
                children: []
            },
            {
                id: "person4_13",
                name: "ترتيل عبدالفتاح",
                parentId: "person3_",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "2016",
                children: []
            },
            {
                id: "person4_14",
                name: "محمد على",
                parentId: "person3_35",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_15",
                name: "رباب على",
                parentId: "person3_35",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_16",
                name: "رانيا على",
                parentId: "person3_35",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_17",
                name: "محمد حافظ",
                parentId: "person3_36",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_18",
                name: "مزن حافظ",
                parentId: "person3_36",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_19",
                name: "بشارة حافظ",
                parentId: "person3_36",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_20",
                name: "لدن حافظ",
                parentId: "person3_36",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_21",
                name: "مهاجر حافظ",
                parentId: "person3_36",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_22",
                name: "احمد حافظ",
                parentId: "person3_36",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_23",
                name: "عادل حافظ",
                parentId: "person3_36",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_24",
                name: "مشكاة حافظ",
                parentId: "person3_36",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_25",
                name: "اسماء محمد",
                parentId: "person3_4",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_26",
                name: "احمد محمد",
                parentId: "person3_4",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person4_27",
                name: "عزالدين محمد",
                parentId: "person3_4",
                image: "images/defualt-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            // يمكن إضافة أعضاء الجيل الرابع بنفس الطريقة مع parentId
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
