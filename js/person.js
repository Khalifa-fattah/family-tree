// JavaScript لصفحة الشخص الفردية

document.addEventListener('DOMContentLoaded', function() {
    // الحصول على ID الشخص من URL
    const urlParams = new URLSearchParams(window.location.search);
    const personId = urlParams.get('id');
    
    if (!personId) {
        showError('لم يتم تحديد الشخص المطلوب');
        return;
    }
    
    // الحصول على بيانات الشخص
    const person = getPersonById(personId);
    
    if (!person) {
        showError('الشخص المطلوب غير موجود');
        return;
    }
    
    // عرض معلومات الشخص
    displayPersonInfo(person);
    
    // عرض أطفال الشخص
    displayPersonChildren(person);
    
    // دالة عرض معلومات الشخص
    function displayPersonInfo(person) {
        // تحديث عنوان الصفحة
        document.getElementById('pageTitle').textContent = `${person.name} - شجرة العائلة`;
        
        // عرض الصورة
        const personImage = document.getElementById('personImage');
        personImage.src = person.image;
        personImage.alt = person.name;
        personImage.onerror = function() {
            this.src = 'images/default-avatar.jpg';
        };
        
        // عرض الاسم
        document.getElementById('personName').textContent = person.name;
        
        // عرض تاريخ الميلاد
        const birthDate = formatDate(person.birth_date);
        document.getElementById('personBirthDate').textContent = birthDate;
        
        // عرض الجيل
        const generation = getPersonGeneration(person.id);
        document.getElementById('personGeneration').textContent = generation;
        
        // عرض النبذة الشخصية
        document.getElementById('personBio').textContent = person.bio || 'لا توجد معلومات إضافية متاحة.';
    }
    
    // دالة عرض أطفال الشخص
    function displayPersonChildren(person) {
        const childrenContainer = document.getElementById('childrenContainer');
        const childrenSection = document.getElementById('childrenSection');
        const noChildrenMessage = document.getElementById('noChildrenMessage');
        
        const children = getPersonChildren(person.id);
        
        if (children.length === 0) {
            childrenSection.classList.add('hidden');
            noChildrenMessage.classList.remove('hidden');
            return;
        }
        
        childrenSection.classList.remove('hidden');
        noChildrenMessage.classList.add('hidden');
        
        childrenContainer.innerHTML = '';
        
        children.forEach(child => {
            const childCard = createChildCard(child);
            childrenContainer.appendChild(childCard);
        });
    }
    
    // دالة إنشاء كارت الطفل
    function createChildCard(child) {
        const card = document.createElement('div');
        card.className = 'child-card';
        card.onclick = () => navigateToPersonPage(child.id);
        
        const name = document.createElement('a');
        name.className = 'child-name';
        name.href = `person.html?id=${child.id}`;
        name.textContent = child.name;
        name.onclick = (e) => {
            e.preventDefault();
            navigateToPersonPage(child.id);
        };
        
        card.appendChild(name);
        
        return card;
    }
    
    // دالة الانتقال لصفحة شخص آخر
    function navigateToPersonPage(personId) {
        window.location.href = `person.html?id=${personId}`;
    }
    
    // دالة تنسيق التاريخ
    function formatDate(dateString) {
        if (!dateString) return 'غير محدد';
        
        const date = new Date(dateString);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            // calendar: 'islamic'
        };
        
        try {
            return date.toLocaleDateString('ar-SA', options);
        } catch (error) {
            // في حالة فشل التنسيق الإسلامي، استخدم التنسيق العادي
            return date.toLocaleDateString('ar-SA', {
                year: 'numeric', 
                month: 'long', 
                day: 'numeric'
            });
        }
    }
    
    // دالة عرض رسالة خطأ
    function showError(message) {
        const container = document.querySelector('.container');
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <h2 style="color: #e74c3c; margin-bottom: 1rem;">خطأ</h2>
                <p style="color: #7f8c8d; margin-bottom: 2rem;">${message}</p>
                <a href="index.html" style="background: #3498db; color: white; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 5px; display: inline-block;">العودة للصفحة الرئيسية</a>
            </div>
        `;
    }
    
    // إضافة تأثيرات بصرية
    addVisualEffects();
    
    function addVisualEffects() {
        // تأثير ظهور تدريجي للمحتوى
        const personProfile = document.querySelector('.person-profile');
        const childrenSection = document.querySelector('.children-section');
        
        if (personProfile) {
            personProfile.style.opacity = '0';
            personProfile.style.transform = 'translateY(20px)';
            personProfile.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                personProfile.style.opacity = '1';
                personProfile.style.transform = 'translateY(0)';
            }, 100);
        }
        
        if (childrenSection && !childrenSection.classList.contains('hidden')) {
            childrenSection.style.opacity = '0';
            childrenSection.style.transform = 'translateY(20px)';
            childrenSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                childrenSection.style.opacity = '1';
                childrenSection.style.transform = 'translateY(0)';
            }, 300);
        }
        
        // تأثير تحميل الصورة
        const personImage = document.getElementById('personImage');
        if (personImage) {
            personImage.style.opacity = '0';
            personImage.style.transition = 'opacity 0.5s ease';
            
            personImage.onload = function() {
                this.style.opacity = '1';
            };
        }
    }
    
    // إضافة معالج للتنقل بالكيبورد
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.location.href = 'index.html';
        }
    });
});
