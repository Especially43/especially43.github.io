  // Enhanced game data with better categorization and descriptions
        const gamesData = [
            { 
                name: "Adrenaline Challenge", 
                url: "https://especially43.github.io/game3/adrenaline-challenge/", 
                category: "action", 
                description: "High-octane racing and stunts that will get your adrenaline pumping!" 
            },
            { 
                name: "Alxemy", 
                url: "https://especially43.github.io/game3/alxemy/", 
                category: "puzzle", 
                description: "Create new elements by combining materials in this addictive alchemy game." 
            },
            { 
                name: "Avalanche", 
                url: "https://especially43.github.io/game3/avalanche/", 
                category: "action", 
                description: "Survive the endless avalanche in this thrilling downhill adventure." 
            },
            { 
                name: "Bad Piggies", 
                url: "https://especially43.github.io/game3/bad-piggies/", 
                category: "puzzle", 
                description: "Help green pigs build creative contraptions to reach their destination." 
            },
            { 
                name: "Battle for Gondor", 
                url: "https://especially43.github.io/game3/battle-for-gondor/", 
                category: "strategy", 
                description: "Epic fantasy warfare strategy in the realm of Middle-earth." 
            },
            { 
                name: "Big Shot Boxing", 
                url: "https://especially43.github.io/game3/big-shot-boxing/", 
                category: "action", 
                description: "Step into the ring and become the ultimate boxing champion." 
            },
            { 
                name: "Bob the Robber", 
                url: "https://especially43.github.io/game3/bob-the-robber/", 
                category: "adventure", 
                description: "Sneak through buildings and steal treasures in this stealth adventure." 
            },
            { 
                name: "Boxhead 2Play", 
                url: "https://especially43.github.io/game3/boxhead2play/", 
                category: "action", 
                description: "Cooperative zombie shooter with intense multiplayer action." 
            },
            { 
                name: "Candy Crush", 
                url: "https://especially43.github.io/game3/candy-crush/", 
                category: "puzzle", 
                description: "Match colorful candies in this sweet and addictive puzzle game." 
            },
            { 
                name: "Champion Archer", 
                url: "https://especially43.github.io/game3/champion-archer/", 
                category: "action", 
                description: "Test your precision and become the ultimate archery champion." 
            },
            { 
                name: "Chibi Knight", 
                url: "https://especially43.github.io/game3/chibi-knight/", 
                category: "adventure", 
                description: "Embark on an epic quest as a tiny but brave knight warrior." 
            },
            { 
                name: "Creative Kill Chamber", 
                url: "https://especially43.github.io/game3/creative-kill-chamber/", 
                category: "puzzle", 
                description: "Use creativity and stealth to solve assassination puzzles." 
            },
            { 
                name: "Cubefield", 
                url: "https://especially43.github.io/game3/cubefield/", 
                category: "action", 
                description: "Navigate through endless cube fields at breakneck speed." 
            },
            { 
                name: "Diggy", 
                url: "https://especially43.github.io/game3/diggy/", 
                category: "adventure", 
                description: "Dig deep underground to uncover hidden treasures and mysteries." 
            },
            { 
                name: "Earn to Die", 
                url: "https://especially43.github.io/game3/earn-to-die-1/", 
                category: "action", 
                description: "Drive through zombie hordes in post-apocalyptic survival racing." 
            },
            { 
                name: "Earn to Die 2", 
                url: "https://especially43.github.io/game3/earn-to-die-2/", 
                category: "action", 
                description: "More zombies, better cars, and epic destruction in the sequel." 
            },
            { 
                name: "Earn to Die 2012", 
                url: "https://especially43.github.io/game3/earn-to-die-2012/", 
                category: "action", 
                description: "The original zombie car racing experience that started it all." 
            },
            { 
                name: "Effing Worms", 
                url: "https://especially43.github.io/game3/effing-worms-1/", 
                category: "action", 
                description: "Control a giant underground worm and devour everything above." 
            },
            { 
                name: "Effing Worms 2", 
                url: "https://especially43.github.io/game3/effing-worms-2/", 
                category: "action", 
                description: "More wormy destruction and chaos in this action-packed sequel." 
            },
            { 
                name: "Effing Worms Xmas", 
                url: "https://especially43.github.io/game3/effing-worms-xmas/", 
                category: "action", 
                description: "Holiday-themed worm rampage with festive destructive fun." 
            },
            { 
                name: "Fortz", 
                url: "https://especially43.github.io/game3/fortz/", 
                category: "strategy", 
                description: "Build and defend your fortress in strategic tower defense combat." 
            },
            { 
                name: "Haunt the House", 
                url: "https://especially43.github.io/game3/haunt-the-house/", 
                category: "adventure", 
                description: "Become a ghost and scare away the living from your haunted house." 
            },
            { 
                name: "Jellydad Hero", 
                url: "https://especially43.github.io/game3/jellydad-hero/", 
                category: "adventure", 
                description: "Help Jellydad rescue his family in this adorable platform adventure." 
            },
            { 
                name: "Last Stand Union City", 
                url: "https://especially43.github.io/game3/last-stand-union-city/", 
                category: "action", 
                description: "Survive the zombie apocalypse in this immersive RPG shooter." 
            },
            { 
                name: "Little Alchemy", 
                url: "https://especially43.github.io/game3/little-alchemy/", 
                category: "puzzle", 
                description: "Combine basic elements to create complex items and discoveries." 
            },
            { 
                name: "Merge Fruit", 
                url: "https://especially43.github.io/game3/merge-fruit/", 
                category: "puzzle", 
                description: "Merge similar fruits to create bigger and better varieties." 
            },
            { 
                name: "Minecraft Classic", 
                url: "https://especially43.github.io/game3/minecraft-classic/", 
                category: "adventure", 
                description: "Build and explore in the classic version of the legendary sandbox." 
            },
            { 
                name: "My Friend Pedro", 
                url: "https://especially43.github.io/game3/my-friend-pedro/", 
                category: "action", 
                description: "Stylish bullet-time gunplay with a talking banana as your guide." 
            },
            { 
                name: "One More Flight", 
                url: "https://especially43.github.io/game3/one-more-flight/", 
                category: "action", 
                description: "Pilot your aircraft as far as possible in endless flying adventure." 
            },
            { 
                name: "Papa Louie 3", 
                url: "https://especially43.github.io/game3/papa-louie-3/", 
                category: "adventure", 
                description: "Join Papa Louie on another delicious platforming adventure." 
            },
            { 
                name: "Papa's Bakeria", 
                url: "https://especially43.github.io/game3/papas-bakeria/", 
                category: "restaurant", 
                description: "Bake perfect pies and serve hungry customers in Papa's bakery." 
            },
            { 
                name: "Papa's Cupcakeria", 
                url: "https://especially43.github.io/game3/papas-cupcakeria/", 
                category: "restaurant", 
                description: "Create beautiful decorated cupcakes and satisfy sweet tooths." 
            },
            { 
                name: "Papa's Donuteria", 
                url: "https://especially43.github.io/game3/papas-donuteria/", 
                category: "restaurant", 
                description: "Fry fresh donuts and add delicious toppings for customers." 
            },
            { 
                name: "Papa's Freezeria", 
                url: "https://especially43.github.io/game3/papas-freezeria/", 
                category: "restaurant", 
                description: "Serve ice cream sundaes on a tropical island vacation spot." 
            },
            { 
                name: "Papa's Hot Doggeria", 
                url: "https://especially43.github.io/game3/papas-hot-doggeria/", 
                category: "restaurant", 
                description: "Grill hot dogs and serve them with perfect toppings and sides." 
            },
            { 
                name: "Papa's Pancakeria", 
                url: "https://especially43.github.io/game3/papas-pancakeria/", 
                category: "restaurant", 
                description: "Flip fluffy pancakes and create breakfast masterpieces." 
            },
            { 
                name: "Papa's Pastaria", 
                url: "https://especially43.github.io/game3/papas-pastaria/", 
                category: "restaurant", 
                description: "Cook authentic pasta dishes in this Italian restaurant simulator." 
            },
            { 
                name: "Papa's Pizzeria", 
                url: "https://especially43.github.io/game3/papas-pizzeria/", 
                category: "restaurant", 
                description: "Make and serve delicious pizzas in the original Papa's game." 
            },
            { 
                name: "Papa's Scooperia", 
                url: "https://especially43.github.io/game3/papas-scooperia/", 
                category: "restaurant", 
                description: "Scoop ice cream and create perfect sundaes with toppings." 
            },
            { 
                name: "Papa's Sushiria", 
                url: "https://especially43.github.io/game3/papas-sushiria/", 
                category: "restaurant", 
                description: "Roll fresh sushi and serve authentic Japanese cuisine." 
            },
            { 
                name: "Papa's Taco Mia", 
                url: "https://especially43.github.io/game3/papas-taco-mia/", 
                category: "restaurant", 
                description: "Build delicious tacos with fresh ingredients and salsas." 
            },
            { 
                name: "Papa's Wingeria", 
                url: "https://especially43.github.io/game3/papas-wingeria/", 
                category: "restaurant", 
                description: "Serve chicken wings with various sauces and perfect sides." 
            },
            { 
                name: "Penguin Diner", 
                url: "https://especially43.github.io/game3/penguin-diner/", 
                category: "restaurant", 
                description: "Help Penny serve customers in her cozy Antarctic diner." 
            },
            { 
                name: "Portal", 
                url: "https://especially43.github.io/game3/portal/", 
                category: "puzzle", 
                description: "Solve mind-bending puzzles using advanced portal technology." 
            },
            { 
                name: "Rebuild", 
                url: "https://especially43.github.io/game3/rebuild-1/", 
                category: "strategy", 
                description: "Rebuild civilization after the zombie apocalypse in this strategy game." 
            },
            { 
                name: "Rebuild 2", 
                url: "https://especially43.github.io/game3/rebuild-2/", 
                category: "strategy", 
                description: "Expand your survivor colony and reclaim the city in the sequel." 
            },
            { 
                name: "Riddle School", 
                url: "https://especially43.github.io/game3/riddle-school-1/", 
                category: "adventure", 
                description: "Escape from school using wit, creativity, and problem-solving." 
            },
            { 
                name: "Riddle School 2", 
                url: "https://especially43.github.io/game3/riddle-school-2/", 
                category: "adventure", 
                description: "More school escape puzzles and mysteries await in the sequel." 
            },
            { 
                name: "Riddle School 3", 
                url: "https://especially43.github.io/game3/riddle-school-3/", 
                category: "adventure", 
                description: "The adventure continues with new challenges and characters." 
            },
            { 
                name: "Riddle School 4", 
                url: "https://especially43.github.io/game3/riddle-school-4/", 
                category: "adventure", 
                description: "Uncover deeper mysteries in this compelling installment." 
            },
            { 
                name: "Riddle School 5", 
                url: "https://especially43.github.io/game3/riddle-school-5/", 
                category: "adventure", 
                description: "The epic conclusion to the beloved Riddle School saga." 
            },
            { 
                name: "Riddle Transfer", 
                url: "https://especially43.github.io/game3/riddle-transfer-1/", 
                category: "adventure", 
                description: "A new chapter in the Riddle universe with fresh mysteries." 
            },
            { 
                name: "Riddle Transfer 2", 
                url: "https://especially43.github.io/game3/riddle-transfer-2/", 
                category: "adventure", 
                description: "Continue the mysterious adventure with more puzzles to solve." 
            },
            { 
                name: "Shopping City", 
                url: "https://especially43.github.io/game3/shopping-city/", 
                category: "strategy", 
                description: "Build and manage your own thriving shopping empire." 
            },
            { 
                name: "Shopping Street", 
                url: "https://especially43.github.io/game3/shopping-street/", 
                category: "strategy", 
                description: "Create a bustling retail district with diverse shops." 
            },
            { 
                name: "Strike Force Heroes", 
                url: "https://especially43.github.io/game3/strike-force-heroes-1/", 
                category: "action", 
                description: "Lead an elite military squad in this tactical combat shooter." 
            },
            { 
                name: "Strike Force Heroes 2", 
                url: "https://especially43.github.io/game3/strike-force-heroes-2/", 
                category: "action", 
                description: "More intense military combat and customization in the sequel." 
            },
            { 
                name: "Strike Force Heroes 3", 
                url: "https://especially43.github.io/game3/strike-force-heroes-3/", 
                category: "action", 
                description: "The ultimate tactical combat experience with advanced warfare." 
            },
            { 
                name: "Super Fighters", 
                url: "https://especially43.github.io/game3/super-fighters/", 
                category: "action", 
                description: "Intense multiplayer fighting with destructible environments." 
            },
            { 
                name: "The Black Knight", 
                url: "https://especially43.github.io/game3/the-black-knight/", 
                category: "adventure", 
                description: "Medieval adventure filled with epic quests and battles." 
            },
            { 
                name: "Tidal Wave", 
                url: "https://especially43.github.io/game3/tidal-wave/", 
                category: "action", 
                description: "Surf massive waves and perform incredible stunts on water." 
            },
            { 
                name: "Trap the Cat", 
                url: "https://especially43.github.io/game3/trap-the-cat/", 
                category: "puzzle", 
                description: "Strategic puzzle game where you must outsmart a clever cat." 
            },
            { 
                name: "Wheely", 
                url: "https://especially43.github.io/game3/wheely-1/", 
                category: "puzzle", 
                description: "Help the cute red car solve puzzles and reach destinations." 
            },
            { 
                name: "Wheely 2", 
                url: "https://especially43.github.io/game3/wheely-2/", 
                category: "puzzle", 
                description: "More charming adventures with Wheely the problem-solving car." 
            },
            { 
                name: "Wheely 3", 
                url: "https://especially43.github.io/game3/wheely-3/", 
                category: "puzzle", 
                description: "Wheely continues his puzzle-solving journey with new challenges." 
            },
            { 
                name: "Wheely 4: Time Travel", 
                url: "https://especially43.github.io/game3/wheely-4/", 
                category: "puzzle", 
                description: "Time travel adventures with our favorite car hero Wheely." 
            },
            { 
                name: "Wheely 5: Armageddon", 
                url: "https://especially43.github.io/game3/wheely-5/", 
                category: "puzzle", 
                description: "Wheely faces his most challenging puzzles in this adventure." 
            },
            { 
                name: "Wheely 6: Fairytale", 
                url: "https://especially43.github.io/game3/wheely-6/", 
                category: "puzzle", 
                description: "Fairytale-themed adventure with Wheely in a magical world." 
            },
            { 
                name: "Wheely 7: Detective", 
                url: "https://especially43.github.io/game3/wheely-7/", 
                category: "puzzle", 
                description: "Detective Wheely solves mysteries and crimes in this adventure." 
            },
            { 
                name: "Wheely 8: Aliens", 
                url: "https://especially43.github.io/game3/wheely-8/", 
                category: "puzzle", 
                description: "The latest space adventure in the beloved Wheely series." 
            }
        ];

        // Application state
        let currentGames = [...gamesData];
        let currentCategory = 'all';
        let currentView = 'grid';
        let searchTimeout;
        let favorites = JSON.parse(localStorage.getItem('gamehub-favorites') || '[]');

        // DOM Elements
        const elements = {
            searchInput: document.getElementById('search-input'),
            searchResults: document.getElementById('search-results'),
            categoryFilters: document.getElementById('category-filters'),
            gamesGrid: document.getElementById('games-grid'),
            gamesList: document.getElementById('games-list'),
            resultsInfo: document.getElementById('results-info'),
            randomGameName: document.getElementById('random-game-name'),
            randomGameBtn: document.getElementById('random-game-btn'),
            panicBtn: document.getElementById('panic-btn'),
            header: document.getElementById('header'),
            totalGamesCounter: document.getElementById('total-games')
        };

        // Initialize application
        document.addEventListener('DOMContentLoaded', function() {
            initializeApp();
        });

        function initializeApp() {
            setupEventListeners();
            setupRandomGame();
            renderGames();
            updateResultsInfo();
            
            // Update total games counter
            elements.totalGamesCounter.textContent = gamesData.length;
            
            // Initial loading animation
            setTimeout(() => {
                elements.gamesGrid.querySelector('.loading')?.remove();
            }, 800);
        }

        function setupEventListeners() {
            // Search functionality
            elements.searchInput.addEventListener('input', handleSearch);
            elements.searchInput.addEventListener('focus', showSearchResults);
            elements.searchInput.addEventListener('blur', () => {
                setTimeout(() => hideSearchResults(), 150);
            });

            // Category filters
            elements.categoryFilters.addEventListener('click', handleCategoryFilter);

            // View toggle
            document.querySelectorAll('.view-btn').forEach(btn => {
                btn.addEventListener('click', handleViewToggle);
            });

            // Random game
            elements.randomGameBtn.addEventListener('click', playRandomGame);

            // School panic mode
            elements.panicBtn.addEventListener('click', togglePanicMode);
            document.addEventListener('keydown', (e) => {
                if (e.key === '`' || e.key === 'Escape') {
                    e.preventDefault();
                    togglePanicMode();
                }
            });

            // Header scroll effect
            window.addEventListener('scroll', handleScroll);

            // Navigation
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', handleNavigation);
            });

            // Scroll animations
            const observer = new IntersectionObserver(handleIntersection, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
            });
        }

        function handleSearch(e) {
            const query = e.target.value.toLowerCase().trim();
            
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                if (query === '') {
                    filterGames();
                    hideSearchResults();
                    return;
                }

                // Filter games based on search
                currentGames = gamesData.filter(game => 
                    game.name.toLowerCase().includes(query) ||
                    game.category.toLowerCase().includes(query) ||
                    game.description.toLowerCase().includes(query)
                );

                // Apply category filter if active
                if (currentCategory !== 'all') {
                    currentGames = currentGames.filter(game => game.category === currentCategory);
                }

                renderGames();
                updateResultsInfo();
                showSearchSuggestions(query);
            }, 300);
        }

        function showSearchSuggestions(query) {
            if (!query) {
                hideSearchResults();
                return;
            }

            const suggestions = gamesData
                .filter(game => game.name.toLowerCase().includes(query))
                .slice(0, 5);

            if (suggestions.length === 0) {
                hideSearchResults();
                return;
            }

            elements.searchResults.innerHTML = suggestions
                .map(game => `
                    <div class="search-result" onclick="selectGame('${game.name}')">
                        <strong>${highlightMatch(game.name, query)}</strong>
                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">
                            ${game.category.charAt(0).toUpperCase() + game.category.slice(1)}
                        </div>
                    </div>
                `).join('');
            
            showSearchResults();
        }

        function highlightMatch(text, query) {
            const regex = new RegExp(`(${query})`, 'gi');
            return text.replace(regex, '<span style="background: var(--primary); color: white; padding: 0.1rem 0.2rem; border-radius: 3px;">$1</span>');
        }

        function selectGame(gameName) {
            const game = gamesData.find(g => g.name === gameName);
            if (game) {
                window.open(game.url, '_blank');
            }
            hideSearchResults();
        }

        function showSearchResults() {
            elements.searchResults.style.display = 'block';
        }

        function hideSearchResults() {
            elements.searchResults.style.display = 'none';
        }

        function handleCategoryFilter(e) {
            if (!e.target.classList.contains('filter-btn')) return;

            // Update active filter
            document.querySelectorAll('.filter-btn').forEach(btn => 
                btn.classList.remove('active'));
            e.target.classList.add('active');

            currentCategory = e.target.dataset.category;
            filterGames();
        }

        function filterGames() {
            const query = elements.searchInput.value.toLowerCase().trim();

            if (currentCategory === 'all') {
                currentGames = [...gamesData];
            } else {
                currentGames = gamesData.filter(game => game.category === currentCategory);
            }

            // Apply search filter if active
            if (query) {
                currentGames = currentGames.filter(game => 
                    game.name.toLowerCase().includes(query) ||
                    game.category.toLowerCase().includes(query) ||
                    game.description.toLowerCase().includes(query)
                );
            }

            renderGames();
            updateResultsInfo();
        }

        function handleViewToggle(e) {
            document.querySelectorAll('.view-btn').forEach(btn => 
                btn.classList.remove('active'));
            e.target.classList.add('active');

            currentView = e.target.dataset.view;
            
            if (currentView === 'list') {
                elements.gamesGrid.style.display = 'none';
                elements.gamesList.classList.add('active');
                elements.gamesList.style.display = 'flex';
            } else {
                elements.gamesGrid.style.display = 'grid';
                elements.gamesList.classList.remove('active');
                elements.gamesList.style.display = 'none';
            }

            renderGames();
        }

        function renderGames() {
            if (currentGames.length === 0) {
                renderEmptyState();
                return;
            }

            if (currentView === 'grid') {
                renderGridView();
            } else {
                renderListView();
            }
        }

        function renderGridView() {
            const gamesHTML = currentGames
                .map((game, index) => createGameCard(game, index))
                .join('');

            elements.gamesGrid.innerHTML = gamesHTML;
        }

        function renderListView() {
            const gamesHTML = currentGames
                .map((game, index) => createGameListItem(game, index))
                .join('');

            elements.gamesList.innerHTML = gamesHTML;
        }

        function createGameCard(game, index) {
            const isFavorite = favorites.includes(game.name);
            return `
                <div class="game-card" style="animation-delay: ${index * 0.1}s;">
                    <div class="game-header">
                        <span class="game-category">${game.category}</span>
                        <button class="game-favorite ${isFavorite ? 'active' : ''}" 
                                onclick="toggleFavorite('${game.name}')" 
                                title="Add to favorites">
                            ${isFavorite ? '⭐' : '☆'}
                        </button>
                    </div>
                    <h3 class="game-title">${game.name}</h3>
                    <p class="game-description">${game.description}</p>
                    <div class="game-actions">
                        <a href="${game.url}" target="_blank" class="play-btn">
                            <span>🎮</span>
                            <span>Play Now</span>
                        </a>
                        <button class="info-btn" onclick="showGameInfo('${game.name}')" title="Game info">
                            ℹ️
                        </button>
                    </div>
                </div>
            `;
        }

        function createGameListItem(game, index) {
            const isFavorite = favorites.includes(game.name);
            return `
                <div class="game-card list-item" style="animation-delay: ${index * 0.05}s;">
                    <div class="game-info">
                        <span class="game-category">${game.category}</span>
                        <h3 class="game-title">${game.name}</h3>
                        <p class="game-description">${game.description}</p>
                    </div>
                    <div class="game-actions">
                        <button class="game-favorite ${isFavorite ? 'active' : ''}" 
                                onclick="toggleFavorite('${game.name}')" 
                                title="Add to favorites">
                            ${isFavorite ? '⭐' : '☆'}
                        </button>
                        <a href="${game.url}" target="_blank" class="play-btn">
                            <span>🎮</span>
                            <span>Play</span>
                        </a>
                    </div>
                </div>
            `;
        }

        function renderEmptyState() {
            const emptyHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">🎮</div>
                    <h3>No games found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;

            if (currentView === 'grid') {
                elements.gamesGrid.innerHTML = emptyHTML;
            } else {
                elements.gamesList.innerHTML = emptyHTML;
            }
        }

        function updateResultsInfo() {
            const total = gamesData.length;
            const showing = currentGames.length;
            const category = currentCategory === 'all' ? 'all categories' : currentCategory;
            
            elements.resultsInfo.textContent = `Showing ${showing} of ${total} games in ${category}`;
        }

        function setupRandomGame() {
            const randomGame = getRandomGame();
            elements.randomGameName.textContent = randomGame.name;
            elements.randomGameBtn.onclick = () => playGame(randomGame);
        }

        function getRandomGame() {
            return gamesData[Math.floor(Math.random() * gamesData.length)];
        }

        function playRandomGame(e) {
            e.preventDefault();
            const randomGame = getRandomGame();
            elements.randomGameName.textContent = randomGame.name;
            
            // Add a small delay for visual feedback
            setTimeout(() => {
                playGame(randomGame);
            }, 200);
        }

        function playGame(game) {
            window.open(game.url, '_blank');
        }

        function toggleFavorite(gameName) {
            const index = favorites.indexOf(gameName);
            if (index > -1) {
                favorites.splice(index, 1);
            } else {
                favorites.push(gameName);
            }
            
            localStorage.setItem('gamehub-favorites', JSON.stringify(favorites));
            renderGames(); // Re-render to update favorite status
        }

        function showGameInfo(gameName) {
            const game = gamesData.find(g => g.name === gameName);
            if (!game) return;

            // Create a simple modal-like alert with game information
            const info = `
🎮 ${game.name}

📁 Category: ${game.category.charAt(0).toUpperCase() + game.category.slice(1)}

📝 Description: ${game.description}

🔗 Ready to play? Click OK to open the game!
            `;

            if (confirm(info)) {
                playGame(game);
            }
        }

        function togglePanicMode(forceOff = false) {
    const isActive = document.body.classList.contains('panic-mode');

    if (forceOff || isActive) {
        document.body.classList.remove('panic-mode');
        document.getElementById('exit-panic-btn').style.display = 'none';
        localStorage.setItem('gamehub-panic-mode', false);
    } else {
        document.body.classList.add('panic-mode');
        document.getElementById('exit-panic-btn').style.display = 'block';
        localStorage.setItem('gamehub-panic-mode', true);
    }
}

// Exit button listener
document.getElementById('exit-panic-btn').addEventListener('click', () => {
    togglePanicMode(true);
});

        function handleScroll() {
            const scrolled = window.scrollY > 50;
            elements.header.classList.toggle('scrolled', scrolled);
        }

        function handleNavigation(e) {
            e.preventDefault();
            const target = e.target.getAttribute('href');
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => 
                link.classList.remove('active'));
            e.target.classList.add('active');

            // Smooth scroll to section
            if (target === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (target === '#games') {
                document.getElementById('games').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start' 
                });
            } else if (target === '#categories') {
                document.getElementById('controls').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start' 
                });
            }
        }

        function handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }

        // Utility function for debouncing
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        // Load saved panic mode state
        if (localStorage.getItem('gamehub-panic-mode') === 'true') {
            document.body.classList.add('panic-mode');
        }

        // Enhanced keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Focus search with Ctrl+K or Cmd+K
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                elements.searchInput.focus();
            }
            
            // Clear search with Escape
            if (e.key === 'Escape' && document.activeElement === elements.searchInput) {
                elements.searchInput.value = '';
                elements.searchInput.blur();
                filterGames();
            }
        });

        // Add loading animation for better UX
        window.addEventListener('load', () => {
            // Remove any remaining loading states
            document.querySelectorAll('.loading').forEach(el => {
                el.style.display = 'none';
            });
            
            // Add staggered animation to game cards
            document.querySelectorAll('.game-card').forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });
        });

        // Add some fun easter eggs
        let konamiCode = [];
        const konamiSequence = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];

        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.code);
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
                // Easter egg: Show all Papa's games
                currentCategory = 'restaurant';
                document.querySelector('[data-category="restaurant"]').classList.add('active');
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    if (btn.dataset.category !== 'restaurant') {
                        btn.classList.remove('active');
                    }
                });
                filterGames();
                
                // Show a fun message
                elements.randomGameName.textContent = "🍕 Papa's Games Unlocked! 🍕";
                setTimeout(() => setupRandomGame(), 3000);
                
                konamiCode = [];
            }
        });

        // Performance optimization: Lazy load game descriptions
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    card.classList.add('loaded');
                    observer.unobserve(card);
                }
            });
        }, { rootMargin: '100px' });

        // Clean up event listeners on page unload
        window.addEventListener('beforeunload', () => {
            clearTimeout(searchTimeout);
        });
