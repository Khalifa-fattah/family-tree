// JavaScript للصفحة الرئيسية

document.addEventListener('DOMContentLoaded', function() {
    // عناصر DOM
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');
    const generationsContainer = document.getElementById('generationsContainer');
    
    // تحميل وعرض الأجيال
    loadGenerations();
    
    // إعداد البحث
    setupSearch();
    
    // دالة تحميل وعرض الأجيال
    function loadGenerations() {
        generationsContainer.innerHTML = '';
        
        familyData.forEach(generation => {
            const generationCard = createGenerationCard(generation);
            generationsContainer.appendChild(generationCard);
        });
    }
    
    // دالة إنشاء كارت الجيل
    function createGenerationCard(generation) {
        const card = document.createElement('div');
        card.className = 'generation-card';
        
        const header = document.createElement('div');
        header.className = 'generation-header';
        
        const title = document.createElement('h2');
        title.className = 'generation-title';
        title.textContent = generation.generation_name;
        
        header.appendChild(title);
        
        const membersContainer = document.createElement('div');
        membersContainer.className = 'generation-members';
        
        generation.members.forEach(member => {
            const memberCard = createMemberCard(member);
            membersContainer.appendChild(memberCard);
        });
        
        card.appendChild(header);
        card.appendChild(membersContainer);
        
        return card;
    }
    
    // دالة إنشاء كارت العضو
    function createMemberCard(member) {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.onclick = () => navigateToPersonPage(member.id);
        
        const name = document.createElement('a');
        name.className = 'member-name';
        name.href = `person.html?id=${member.id}`;
        name.textContent = member.name;
        name.onclick = (e) => {
            e.preventDefault();
            navigateToPersonPage(member.id);
        };
        
        card.appendChild(name);
        
        return card;
    }
    
    // دالة الانتقال لصفحة الشخص
    function navigateToPersonPage(personId) {
        window.location.href = `person.html?id=${personId}`;
    }
    
    // إعداد وظائف البحث
    function setupSearch() {
        // البحث عند الكتابة
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            if (query.length > 0) {
                performSearch(query);
            } else {
                hideSearchResults();
            }
        });
        
        // البحث عند الضغط على زر البحث
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query.length > 0) {
                performSearch(query);
            }
        });
        
        // البحث عند الضغط على Enter
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query.length > 0) {
                    performSearch(query);
                }
            }
        });
        
        // إخفاء نتائج البحث عند النقر خارجها
        document.addEventListener('click', function(e) {
            if (!searchResults.contains(e.target) && 
                !searchInput.contains(e.target) && 
                !searchBtn.contains(e.target)) {
                hideSearchResults();
            }
        });
    }
    
    // دالة تنفيذ البحث
    function performSearch(query) {
        const results = searchPeople(query);
        displaySearchResults(results);
    }
    
    // دالة عرض نتائج البحث
    function displaySearchResults(results) {
        searchResults.innerHTML = '';
        
        if (results.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'search-result-item';
            noResults.innerHTML = '<div class="search-result-name">لا توجد نتائج</div>';
            searchResults.appendChild(noResults);
        } else {
            results.forEach(person => {
                const resultItem = createSearchResultItem(person);
                searchResults.appendChild(resultItem);
            });
        }
        
        searchResults.classList.remove('hidden');
    }
    
    // دالة إنشاء عنصر نتيجة البحث
    function createSearchResultItem(person) {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.onclick = () => {
            navigateToPersonPage(person.id);
            hideSearchResults();
        };
        
        const name = document.createElement('div');
        name.className = 'search-result-name';
        name.textContent = person.name;
        
        const generation = document.createElement('div');
        generation.className = 'search-result-generation';
        generation.textContent = person.generation_name;
        
        item.appendChild(name);
        item.appendChild(generation);
        
        return item;
    }
    
    // دالة إخفاء نتائج البحث
    function hideSearchResults() {
        searchResults.classList.add('hidden');
    }
    
    // تحسين تجربة المستخدم - تركيز على حقل البحث عند تحميل الصفحة
    searchInput.focus();
    
    // إضافة تأثيرات بصرية للتفاعل
    addVisualEffects();
    
    function addVisualEffects() {
        // تأثير التمرير السلس للأجيال
        const generationCards = document.querySelectorAll('.generation-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        generationCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
});
