// Данные приложения
const appData = {
  "platforms": [
    {
      "name": "Яндекс Дзен",
      "region": "RU",
      "type": "Текстовая платформа",
      "max_posts_per_day": 96,
      "posting_interval": "Каждые 15 минут",
      "monthly_audience_russia": "74%",
      "monthly_audience_global": "75 млн",
      "engagement_rate": "5.2%",
      "traffic_potential": "9.5",
      "difficulty": "Средний",
      "monetization": "Партнерская программа",
      "character_limit": "3500-6000 знаков",
      "content_types": ["Статьи", "Посты", "Видео", "Карточки"],
      "best_niches": ["Финансы", "Кулинария", "Детские товары", "Здоровье"],
      "pitfalls": [
        "Строгая модерация медицинского контента",
        "Блокировка за дублированный контент",
        "Низкая монетизация для новых авторов",
        "Зависимость от алгоритмов"
      ],
      "blocked_in_rf": false,
      "indexing": "Отличная индексация Яндексом"
    },
    {
      "name": "ВКонтакте", 
      "region": "RU",
      "type": "Социальная сеть",
      "max_posts_per_day": "Без лимитов",
      "posting_interval": "Рекомендуется каждые 2-4 часа",
      "monthly_audience_russia": "75%",
      "monthly_audience_global": "100 млн",
      "engagement_rate": "3.8%",
      "traffic_potential": "8.2",
      "difficulty": "Средний",
      "monetization": "Реклама, донаты, VK Pay",
      "character_limit": "15000 символов",
      "content_types": ["Посты", "Статьи", "Видео", "Истории", "Клипы"],
      "best_niches": ["Детские товары", "Кулинария", "Красота", "Развлечения"],
      "pitfalls": [
        "Падающая популярность среди молодежи",
        "Сложные алгоритмы продвижения",
        "Высокая конкуренция с рекламой",
        "Блокировки за спам"
      ],
      "blocked_in_rf": false,
      "indexing": "Хорошая индексация поисковиками"
    },
    {
      "name": "Telegram",
      "region": "Global",
      "type": "Мессенджер",
      "max_posts_per_day": "Без лимитов",
      "posting_interval": "Без ограничений",
      "monthly_audience_russia": "74%",
      "monthly_audience_global": "900 млн",
      "engagement_rate": "6.8%",
      "traffic_potential": "9.8",
      "difficulty": "Высокий",
      "monetization": "Реклама, подписки, донаты, Stars",
      "character_limit": "4096 символов на сообщение",
      "content_types": ["Текст", "Медиа", "Файлы", "Опросы", "Боты"],
      "best_niches": ["Финансы", "Технологии", "Новости", "Крипто"],
      "pitfalls": [
        "Нужна база подписчиков для старта",
        "Отсутствие встроенного поиска",
        "Спам-блокировки",
        "Сложность привлечения новых подписчиков"
      ],
      "blocked_in_rf": false,
      "indexing": "Ограниченная индексация (закрытые каналы)"
    },
    {
      "name": "X (Twitter)",
      "region": "Global",
      "type": "Микроблог",
      "max_posts_per_day": "Без лимитов",
      "posting_interval": "3-10 постов рекомендуется",
      "monthly_audience_russia": "15%",
      "monthly_audience_global": "450 млн",
      "engagement_rate": "1.8%",
      "traffic_potential": "7.2",
      "difficulty": "Высокий",
      "monetization": "X Premium, спонсорство, Creator Revenue",
      "character_limit": "280 символов (4000 с Premium)",
      "content_types": ["Твиты", "Треды", "Spaces", "Видео"],
      "best_niches": ["Технологии", "Финансы", "Новости", "Крипто"],
      "pitfalls": [
        "Высокая токсичность",
        "Быстрая потеря актуальности постов", 
        "Низкий охват в РФ",
        "Жесткие ограничения по символам"
      ],
      "blocked_in_rf": "Частично (замедление)",
      "indexing": "Отличная индексация Google"
    },
    {
      "name": "Instagram",
      "region": "Global", 
      "type": "Визуальная соцсеть",
      "max_posts_per_day": 10,
      "posting_interval": "1-2 поста в день",
      "monthly_audience_russia": "35%",
      "monthly_audience_global": "2 млрд",
      "engagement_rate": "1.22%",
      "traffic_potential": "8.8",
      "difficulty": "Высокий",
      "monetization": "Реклама, Creator Fund, Shopping",
      "character_limit": "2200 символов в подписи",
      "content_types": ["Фото", "Видео", "Reels", "Stories", "Карусели"],
      "best_niches": ["Красота", "Мода", "Путешествия", "Еда", "Фитнес"],
      "pitfalls": [
        "Высокая конкуренция за внимание",
        "Алгоритм сложно предсказать",
        "Нужен визуальный контент",
        "Shadowban за нарушения"
      ],
      "blocked_in_rf": "Заблокирован (Meta признана экстремистской)",
      "indexing": "Ограниченная индексация Stories"
    },
    {
      "name": "LinkedIn",
      "region": "Global",
      "type": "Профессиональная сеть",
      "max_posts_per_day": 2,
      "posting_interval": "1-2 поста в день",
      "monthly_audience_russia": "8%",
      "monthly_audience_global": "900 млн",
      "engagement_rate": "2.4%",
      "traffic_potential": "7.8",
      "difficulty": "Средний", 
      "monetization": "Спонсорский контент, Lead Generation",
      "character_limit": "3000 символов (посты)",
      "content_types": ["Посты", "Статьи", "Карусели", "Видео"],
      "best_niches": ["Бизнес", "Строительство", "Финансы", "B2B"],
      "pitfalls": [
        "Узкая B2B аудитория",
        "Строгие профессиональные рамки",
        "Низкая толерантность к продающему контенту",
        "Ограниченный охват без Premium"
      ],
      "blocked_in_rf": false,
      "indexing": "Отличная индексация B2B контента"
    },
    {
      "name": "Reddit",
      "region": "Global",
      "type": "Форум",
      "max_posts_per_day": "Зависит от кармы",
      "posting_interval": "Новые: 1 пост в 3 дня",
      "monthly_audience_russia": "2%", 
      "monthly_audience_global": "1.1 млрд",
      "engagement_rate": "4.5%",
      "traffic_potential": "8.9",
      "difficulty": "Очень высокий",
      "monetization": "Реклама, Gold Awards",
      "character_limit": "40000 символов",
      "content_types": ["Текст", "Ссылки", "Изображения", "Видео"],
      "best_niches": ["Технологии", "Строительство", "Финансы", "Gaming"],
      "pitfalls": [
        "Сложная система кармы",
        "Строгие правила subreddit",
        "Высокий риск бана за саморекламу",
        "Низкий охват в РФ сегменте"
      ],
      "blocked_in_rf": false,
      "indexing": "Отличная индексация Google"
    },
    {
      "name": "Medium",
      "region": "Global",
      "type": "Блог-платформа",
      "max_posts_per_day": "Без лимитов",
      "posting_interval": "3-5 статей в неделю",
      "monthly_audience_russia": "5%",
      "monthly_audience_global": "100 млн",
      "engagement_rate": "4.2%",
      "traffic_potential": "8.1", 
      "difficulty": "Высокий",
      "monetization": "Partner Program, Sponsorship",
      "character_limit": "Без ограничений",
      "content_types": ["Статьи", "Эссе", "Туториалы"],
      "best_niches": ["Технологии", "Бизнес", "Финансы", "Саморазвитие"],
      "pitfalls": [
        "Высокая конкуренция",
        "Необходимость английского языка",
        "Платный доступ к контенту",
        "Алгоритм favors established writers"
      ],
      "blocked_in_rf": false,
      "indexing": "Отличная индексация всех поисковиков"
    },
    {
      "name": "Habr",
      "region": "RU",
      "type": "IT-платформа",
      "max_posts_per_day": 2,
      "posting_interval": "1-2 статьи в день максимум",
      "monthly_audience_russia": "70%",
      "monthly_audience_global": "15 млн",
      "engagement_rate": "7.8%",
      "traffic_potential": "9.1",
      "difficulty": "Очень высокий",
      "monetization": "Партнерство, реклама, карьерная страница",
      "character_limit": "Без ограничений",
      "content_types": ["Статьи", "Туториалы", "Обзоры технологий"],
      "best_niches": ["Технологии", "Программирование", "DevOps", "Data Science"],
      "pitfalls": [
        "Очень высокие требования к качеству",
        "Строгая модерация",
        "Только IT-тематика",
        "Токсичные комментарии"
      ],
      "blocked_in_rf": false,
      "indexing": "Отличная индексация, высокий авторитет"
    }
  ],
  "niches": {
    "Детские товары": {
      "audience": "Родители 25-40 лет, высокий доход",
      "best_platforms": ["ВКонтакте", "Дзен", "Instagram", "TikTok"],
      "post_types": ["Обзоры игрушек", "Советы по воспитанию", "Безопасность детей"],
      "traffic_potential": "9.0",
      "competition": "Высокая",
      "examples": [
        "Обзор развивающих игрушек от 0 до 3 лет",
        "5 ошибок при выборе детской кроватки", 
        "Как правильно кормить новорожденного"
      ]
    },
    "Строительство": {
      "audience": "Мужчины 30-55 лет, средний/высокий доход",
      "best_platforms": ["LinkedIn", "Reddit", "YouTube", "Habr"],
      "post_types": ["Технические обзоры", "Кейсы проектов", "Инструкции"],
      "traffic_potential": "8.5",
      "competition": "Средняя",
      "examples": [
        "Сравнение цементных марок для фундамента",
        "Ошибки при утеплении дома",
        "Новые технологии в строительстве 2025"
      ]
    },
    "Финансы": {
      "audience": "Мужчины и женщины 25-50 лет, высокий доход",
      "best_platforms": ["LinkedIn", "Medium", "Substack", "Telegram"],
      "post_types": ["Аналитика рынков", "Инвестиционные идеи", "Финансовая грамотность"],
      "traffic_potential": "9.5",
      "competition": "Очень высокая",
      "examples": [
        "Анализ роста биткоина в 2025",
        "Как инвестировать 100 000 рублей",
        "Налоговые льготы для ИП в 2025"
      ]
    },
    "Технологии": {
      "audience": "IT-специалисты 22-45 лет",
      "best_platforms": ["Habr", "Reddit", "Medium", "X"],
      "post_types": ["Туториалы", "Обзоры технологий", "Кейсы разработки"],
      "traffic_potential": "9.8",
      "competition": "Очень высокая",
      "examples": [
        "Гайд по React 19 новые возможности",
        "Сравнение AI моделей GPT vs Claude",
        "Как настроить Kubernetes в production"
      ]
    },
    "Здоровье": {
      "audience": "Женщины и мужчины 30-60 лет",
      "best_platforms": ["Дзен", "ВКонтакте", "Instagram"],
      "post_types": ["Советы врачей", "Диеты", "Упражнения"],
      "traffic_potential": "9.2",
      "competition": "Очень высокая",
      "examples": [
        "10 признаков дефицита витамина D",
        "Как укрепить иммунитет зимой",
        "Правильное питание после 40"
      ]
    },
    "Кулинария": {
      "audience": "Женщины 25-55 лет",
      "best_platforms": ["Дзен", "Instagram", "ВКонтакте"],
      "post_types": ["Рецепты", "Кулинарные лайфхаки", "Обзоры продуктов"],
      "traffic_potential": "8.8",
      "competition": "Высокая",
      "examples": [
        "Быстрые рецепты на каждый день",
        "Секреты идеального борща",
        "Домашняя выпечка без глютена"
      ]
    }
  }
};

const restrictionsData = {
  "blocked_platforms": [
    {
      "name": "Instagram",
      "reason": "Meta признана экстремистской организацией",
      "since": "2022-03-21",
      "penalties": "Штраф до 500 тыс. руб. за рекламу"
    },
    {
      "name": "Facebook", 
      "reason": "Meta признана экстремистской организацией",
      "since": "2022-03-21",
      "penalties": "Штраф до 500 тыс. руб. за рекламу"
    }
  ],
  "new_laws_2025": [
    "Запрет рекламы в заблокированных соцсетях с 01.09.2025",
    "Штрафы за поиск экстремистских материалов через VPN: 3-5 тыс. руб.",
    "Штрафы за рекламу VPN: 50-500 тыс. руб.",
    "Регистрация блогеров с аудиторией 10+ тыс. в реестре Роскомнадзора"
  ]
};

const americanMarketData = {
  "top_platforms": {
    "Reddit": {
      "monthly_users": "1.1 billion",
      "engagement_rate": "4.5%",
      "best_for": ["Tech", "Finance", "Gaming", "News"],
      "posting_strategy": "Quality over quantity, community-first approach"
    },
    "Medium": {
      "monthly_users": "100 million", 
      "engagement_rate": "4.2%",
      "best_for": ["Tech", "Business", "Startups", "Self-improvement"],
      "posting_strategy": "Long-form, high-quality articles"
    },
    "Substack": {
      "monthly_users": "35 million",
      "engagement_rate": "8.1%",
      "best_for": ["Newsletter", "Journalism", "Opinion pieces"],
      "posting_strategy": "Direct subscriber communication"
    }
  },
  "content_trends_2025": [
    "AI-assisted content creation (73% of teams use AI)",
    "Short-form video dominance (21% highest ROI)",
    "Voice search optimization (32% daily usage)",
    "Personalized content (75% more likely to purchase)",
    "Social commerce integration"
  ]
};

// Состояние приложения
let currentSortColumn = '';
let currentSortDirection = 'asc';
let filteredPlatforms = [...appData.platforms];
let trafficChart = null;

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    console.log('Application initializing...');
    
    // Инициализируем все компоненты
    initNavigation();
    initPlatformsTable();
    initFilters();
    initNiches();
    initPitfalls();
    initRestrictions();
    initAmericanMarket();
    initCalculator();
    initSEO();
    initModal();
    
    console.log('Application initialized successfully');
});

// Навигация
function initNavigation() {
    console.log('Initializing navigation...');
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetSection = this.dataset.section;
            console.log('Navigation clicked:', targetSection);
            
            // Обновляем активную кнопку
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Показываем нужную секцию
            showSection(targetSection);
        });
    });
}

function showSection(sectionName) {
    console.log('Showing section:', sectionName);
    
    // Скрываем все секции
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });
    
    // Показываем нужную секцию
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
        console.log('Section shown successfully:', sectionName);
    } else {
        console.error('Section not found:', sectionName);
    }
}

// Таблица платформ
function initPlatformsTable() {
    console.log('Initializing platforms table...');
    renderPlatformsTable();
    initTableSorting();
}

function renderPlatformsTable() {
    const tbody = document.getElementById('platforms-tbody');
    if (!tbody) {
        console.error('platforms-tbody not found');
        return;
    }
    
    tbody.innerHTML = '';
    
    filteredPlatforms.forEach(platform => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <div class="platform-icon">${platform.name.charAt(0)}</div>
                    <div>
                        <strong>${platform.name}</strong>
                        <div style="font-size: 11px; color: var(--color-text-secondary);">${platform.type}</div>
                    </div>
                </div>
            </td>
            <td><span class="status ${platform.region === 'RU' ? 'status--success' : 'status--info'}">${platform.region}</span></td>
            <td><strong>${platform.max_posts_per_day}</strong></td>
            <td>${platform.posting_interval}</td>
            <td>${platform.monthly_audience_russia}</td>
            <td>
                <div class="traffic-indicator ${getTrafficClass(platform.traffic_potential)}">
                    ${platform.traffic_potential}/10
                </div>
            </td>
            <td><span class="difficulty-${getDifficultyClass(platform.difficulty)}">${platform.difficulty}</span></td>
            <td>${platform.engagement_rate}</td>
            <td>
                <button class="btn action-btn btn--primary" onclick="showPlatformDetails('${platform.name}')">
                    Подробнее
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
    console.log('Platforms table rendered with', filteredPlatforms.length, 'platforms');
}

function getTrafficClass(potential) {
    const value = parseFloat(potential);
    if (value >= 9) return 'traffic-high';
    if (value >= 7) return 'traffic-medium';
    return 'traffic-low';
}

function getDifficultyClass(difficulty) {
    switch(difficulty) {
        case 'Средний': return 'medium';
        case 'Высокий': return 'hard';
        case 'Очень высокий': return 'hard';
        default: return 'easy';
    }
}

// Сортировка таблицы
function initTableSorting() {
    const headers = document.querySelectorAll('.platforms-table th[data-sort]');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const column = header.dataset.sort;
            
            if (currentSortColumn === column) {
                currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                currentSortColumn = column;
                currentSortDirection = 'asc';
            }
            
            sortPlatforms(column, currentSortDirection);
            renderPlatformsTable();
        });
    });
}

function sortPlatforms(column, direction) {
    filteredPlatforms.sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];
        
        // Обработка числовых значений
        if (column === 'traffic_potential' || column === 'max_posts_per_day') {
            aVal = parseFloat(aVal) || 0;
            bVal = parseFloat(bVal) || 0;
        }
        
        if (aVal < bVal) return direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return direction === 'asc' ? 1 : -1;
        return 0;
    });
}

// Фильтры
function initFilters() {
    console.log('Initializing filters...');
    const regionFilter = document.getElementById('region-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const searchFilter = document.getElementById('search-filter');
    const exportBtn = document.getElementById('export-csv');
    
    if (regionFilter) regionFilter.addEventListener('change', applyFilters);
    if (difficultyFilter) difficultyFilter.addEventListener('change', applyFilters);
    if (searchFilter) searchFilter.addEventListener('input', applyFilters);
    if (exportBtn) exportBtn.addEventListener('click', exportToCSV);
}

function applyFilters() {
    const regionFilter = document.getElementById('region-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const searchFilter = document.getElementById('search-filter');
    
    const regionValue = regionFilter ? regionFilter.value : '';
    const difficultyValue = difficultyFilter ? difficultyFilter.value : '';
    const searchValue = searchFilter ? searchFilter.value.toLowerCase() : '';
    
    filteredPlatforms = appData.platforms.filter(platform => {
        const matchesRegion = !regionValue || platform.region === regionValue;
        const matchesDifficulty = !difficultyValue || platform.difficulty === difficultyValue;
        const matchesSearch = !searchValue || platform.name.toLowerCase().includes(searchValue);
        
        return matchesRegion && matchesDifficulty && matchesSearch;
    });
    
    renderPlatformsTable();
}

// Экспорт в CSV
function exportToCSV() {
    const headers = ['Название', 'Регион', 'Тип', 'Постов/день', 'Интервал', 'Аудитория РФ', 'Потенциал трафика', 'Сложность', 'Engagement Rate'];
    const rows = filteredPlatforms.map(platform => [
        platform.name,
        platform.region,
        platform.type,
        platform.max_posts_per_day,
        platform.posting_interval,
        platform.monthly_audience_russia,
        platform.traffic_potential,
        platform.difficulty,
        platform.engagement_rate
    ]);
    
    const csvContent = [headers, ...rows]
        .map(row => row.map(cell => `"${cell}"`).join(','))
        .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'платформы_для_трафика.csv';
    link.click();
}

// Ниши
function initNiches() {
    console.log('Initializing niches...');
    const nichesGrid = document.getElementById('niches-grid');
    if (!nichesGrid) return;
    
    Object.entries(appData.niches).forEach(([nicheName, nicheData]) => {
        const nicheCard = document.createElement('div');
        nicheCard.className = 'niche-card';
        nicheCard.innerHTML = `
            <h3>${nicheName}</h3>
            <div class="niche-stats">
                <div class="niche-stat">
                    <strong>${nicheData.traffic_potential}/10</strong>
                    Потенциал трафика
                </div>
                <div class="niche-stat">
                    <strong>${nicheData.competition}</strong>
                    Конкуренция
                </div>
            </div>
            <p><strong>Аудитория:</strong> ${nicheData.audience}</p>
            <p><strong>Лучшие платформы:</strong> ${nicheData.best_platforms.join(', ')}</p>
            <div class="niche-examples">
                <h4>Примеры контента:</h4>
                <ul>
                    ${nicheData.examples.map(example => `<li>${example}</li>`).join('')}
                </ul>
            </div>
        `;
        nichesGrid.appendChild(nicheCard);
    });
}

// Подводные камни
function initPitfalls() {
    console.log('Initializing pitfalls...');
    const pitfallsContainer = document.getElementById('pitfalls-container');
    if (!pitfallsContainer) return;
    
    appData.platforms.forEach(platform => {
        const pitfallItem = document.createElement('div');
        pitfallItem.className = 'pitfall-item';
        pitfallItem.innerHTML = `
            <h3>
                <div class="platform-icon">${platform.name.charAt(0)}</div>
                ${platform.name}
            </h3>
            <ul class="pitfall-list">
                ${platform.pitfalls.map(pitfall => `<li>${pitfall}</li>`).join('')}
            </ul>
        `;
        pitfallsContainer.appendChild(pitfallItem);
    });
}

// Ограничения
function initRestrictions() {
    console.log('Initializing restrictions...');
    const blockedPlatforms = document.getElementById('blocked-platforms');
    const newLaws = document.getElementById('new-laws');
    
    if (blockedPlatforms) {
        restrictionsData.blocked_platforms.forEach(platform => {
            const blockedItem = document.createElement('div');
            blockedItem.className = 'blocked-item';
            blockedItem.innerHTML = `
                <h4>${platform.name}</h4>
                <p><strong>Причина:</strong> ${platform.reason}</p>
                <p><strong>С:</strong> ${platform.since}</p>
                <p><strong>Штрафы:</strong> ${platform.penalties}</p>
            `;
            blockedPlatforms.appendChild(blockedItem);
        });
    }
    
    if (newLaws) {
        restrictionsData.new_laws_2025.forEach(law => {
            const lawItem = document.createElement('div');
            lawItem.className = 'law-item';
            lawItem.textContent = law;
            newLaws.appendChild(lawItem);
        });
    }
}

// Американский рынок
function initAmericanMarket() {
    console.log('Initializing American market...');
    const americanPlatforms = document.getElementById('american-platforms');
    const contentTrends = document.getElementById('content-trends');
    
    if (americanPlatforms) {
        Object.entries(americanMarketData.top_platforms).forEach(([name, data]) => {
            const platformDiv = document.createElement('div');
            platformDiv.className = 'american-platform';
            platformDiv.innerHTML = `
                <h4>${name}</h4>
                <div class="platform-stats">
                    <div><strong>${data.monthly_users}</strong><br>Пользователей</div>
                    <div><strong>${data.engagement_rate}</strong><br>Engagement</div>
                </div>
                <p><strong>Лучше для:</strong> ${data.best_for.join(', ')}</p>
                <p><strong>Стратегия:</strong> ${data.posting_strategy}</p>
            `;
            americanPlatforms.appendChild(platformDiv);
        });
    }
    
    if (contentTrends) {
        americanMarketData.content_trends_2025.forEach(trend => {
            const trendDiv = document.createElement('div');
            trendDiv.className = 'trend-item';
            trendDiv.textContent = trend;
            contentTrends.appendChild(trendDiv);
        });
    }
}

// Калькулятор трафика
function initCalculator() {
    console.log('Initializing calculator...');
    const checkboxContainer = document.getElementById('platform-checkboxes');
    const calculateBtn = document.getElementById('calculate-traffic');
    
    if (checkboxContainer) {
        appData.platforms.forEach(platform => {
            const checkboxItem = document.createElement('div');
            checkboxItem.className = 'checkbox-item';
            checkboxItem.innerHTML = `
                <input type="checkbox" id="platform-${platform.name}" value="${platform.name}">
                <label for="platform-${platform.name}">${platform.name} (${platform.traffic_potential}/10)</label>
            `;
            checkboxContainer.appendChild(checkboxItem);
        });
    }
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateTraffic);
    }
}

function calculateTraffic() {
    console.log('Calculating traffic...');
    const selectedPlatforms = [];
    const checkboxes = document.querySelectorAll('#platform-checkboxes input[type="checkbox"]:checked');
    
    checkboxes.forEach(checkbox => {
        const platform = appData.platforms.find(p => p.name === checkbox.value);
        if (platform) selectedPlatforms.push(platform);
    });
    
    if (selectedPlatforms.length === 0) {
        alert('Выберите хотя бы одну платформу');
        return;
    }
    
    const postsPerDay = parseInt(document.getElementById('posts-per-day').value) || 10;
    const periodDays = parseInt(document.getElementById('period-days').value) || 30;
    
    // Расчеты
    const results = selectedPlatforms.map(platform => {
        const engagementRate = parseFloat(platform.engagement_rate.replace('%', '')) / 100;
        const trafficPotential = parseFloat(platform.traffic_potential);
        
        // Упрощенный расчет потенциального трафика
        const dailyViews = postsPerDay * trafficPotential * 100;
        const dailyTraffic = dailyViews * engagementRate;
        const totalTraffic = dailyTraffic * periodDays;
        
        return {
            name: platform.name,
            dailyTraffic: Math.round(dailyTraffic),
            totalTraffic: Math.round(totalTraffic),
            trafficPotential
        };
    });
    
    renderTrafficChart(results);
    renderTrafficSummary(results, periodDays);
}

function renderTrafficChart(results) {
    const canvas = document.getElementById('traffic-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (trafficChart) {
        trafficChart.destroy();
    }
    
    trafficChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: results.map(r => r.name),
            datasets: [{
                label: 'Ожидаемый трафик за период',
                data: results.map(r => r.totalTraffic),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'],
                borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

function renderTrafficSummary(results, periodDays) {
    const summaryDiv = document.getElementById('traffic-summary');
    if (!summaryDiv) return;
    
    const totalTraffic = results.reduce((sum, r) => sum + r.totalTraffic, 0);
    const avgDailyTraffic = Math.round(totalTraffic / periodDays);
    
    summaryDiv.innerHTML = `
        <h4>Сводка по трафику</h4>
        <div class="summary-stat">
            <span>Общий трафик за период:</span>
            <span class="summary-value">${totalTraffic.toLocaleString()}</span>
        </div>
        <div class="summary-stat">
            <span>Средний дневной трафик:</span>
            <span class="summary-value">${avgDailyTraffic.toLocaleString()}</span>
        </div>
        <div class="summary-stat">
            <span>Количество платформ:</span>
            <span class="summary-value">${results.length}</span>
        </div>
        <div class="summary-stat">
            <span>Лучшая платформа:</span>
            <span class="summary-value">${results.sort((a, b) => b.totalTraffic - a.totalTraffic)[0]?.name || 'Н/Д'}</span>
        </div>
    `;
}

// SEO и индексация
function initSEO() {
    console.log('Initializing SEO...');
    const seoContent = document.getElementById('seo-content');
    if (!seoContent) return;
    
    appData.platforms.forEach(platform => {
        const seoItem = document.createElement('div');
        seoItem.className = 'seo-item';
        
        // Определяем рейтинг индексации
        let rating = 3;
        let stars = '★★★☆☆';
        if (platform.indexing.includes('Отличная')) {
            rating = 5;
            stars = '★★★★★';
        } else if (platform.indexing.includes('Хорошая')) {
            rating = 4;
            stars = '★★★★☆';
        } else if (platform.indexing.includes('Ограниченная')) {
            rating = 2;
            stars = '★★☆☆☆';
        }
        
        seoItem.innerHTML = `
            <div class="seo-platform">${platform.name}</div>
            <div class="seo-rating">
                <span class="seo-stars">${stars}</span>
                <span>${platform.indexing}</span>
            </div>
        `;
        seoContent.appendChild(seoItem);
    });
}

// Модальное окно
function initModal() {
    console.log('Initializing modal...');
    const modal = document.getElementById('platform-modal');
    const closeBtn = document.getElementById('modal-close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
}

function showPlatformDetails(platformName) {
    console.log('Showing platform details for:', platformName);
    const platform = appData.platforms.find(p => p.name === platformName);
    if (!platform) return;
    
    const modal = document.getElementById('platform-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    
    if (!modal || !title || !body) return;
    
    title.textContent = platform.name;
    body.innerHTML = `
        <div class="modal-section">
            <h4>Основная информация</h4>
            <p><strong>Регион:</strong> ${platform.region}</p>
            <p><strong>Тип:</strong> ${platform.type}</p>
            <p><strong>Максимум постов в день:</strong> ${platform.max_posts_per_day}</p>
            <p><strong>Рекомендуемый интервал:</strong> ${platform.posting_interval}</p>
            <p><strong>Лимит символов:</strong> ${platform.character_limit}</p>
        </div>
        
        <div class="modal-section">
            <h4>Аудитория и метрики</h4>
            <p><strong>Аудитория в РФ:</strong> ${platform.monthly_audience_russia}</p>
            <p><strong>Глобальная аудитория:</strong> ${platform.monthly_audience_global}</p>
            <p><strong>Engagement Rate:</strong> ${platform.engagement_rate}</p>
            <p><strong>Потенциал трафика:</strong> ${platform.traffic_potential}/10</p>
        </div>
        
        <div class="modal-section">
            <h4>Типы контента</h4>
            <ul>
                ${platform.content_types.map(type => `<li>${type}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h4>Лучшие ниши</h4>
            <ul>
                ${platform.best_niches.map(niche => `<li>${niche}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h4>Монетизация</h4>
            <p>${platform.monetization}</p>
        </div>
        
        <div class="modal-section">
            <h4>Индексация</h4>
            <p>${platform.indexing}</p>
        </div>
        
        <div class="modal-section">
            <h4>Статус блокировки в РФ</h4>
            <p>${platform.blocked_in_rf === false ? 'Не заблокирован' : platform.blocked_in_rf}</p>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('platform-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}