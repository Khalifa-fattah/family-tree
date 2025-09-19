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
                image: "images/default-avatar",
                bio: "",
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
                name: "عز الدين احمد عبيد",
                parentId: "person1_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person2_2",
                name: "محمد الحسن احمد عبيد",
                parentId: "person1_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person2_3",
                name: "ست النساء احمد عبيد",
                parentId: "person1_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
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
                name: "محمد عز الدين",
                parentId: "person2_1",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            },
            {
                id: "person3_4",
                name: "آدم محمد",
                parentId: "person2_2",
                image: "images/default-avatar",
                bio: "",
                birth_date: "",
                children: []
            }
            // أضف باقي الجيل الثالث بنفس الطريقة مع parentId الصحيح
        ]
    },
    {
        generation_number: 4,
        generation_name: "الجيل الرابع - أبناء الأحفاد",
        members: [
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