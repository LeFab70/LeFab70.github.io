class QuizList {
    constructor(container, quizService) {
        this.container = container;
        this.quizService = quizService;
        this.selectedCategory = 'all';
    }

    show() {
        const quizzes = this.quizService.getAllQuizzes();
        this.container.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${quizzes.map(quiz => `
                    <div class="quiz-card bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <h3 class="text-xl font-bold mb-2">${quiz.title}</h3>
                        <p class="text-gray-600 mb-4">${quiz.description}</p>
                        <div class="flex items-center justify-between">
                            <span class="category-badge">${quiz.category}</span>
                            <button onclick="app.showQuizDetail(${quiz.id})" class="btn btn-primary">
                                Commencer
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        this.container.classList.remove('hidden');
    }

    hide() {
        this.container.classList.add('hidden');
    }

    selectCategory(category) {
        this.selectedCategory = category;
        this.render();
    }

    render() {
        const quizzes = this.selectedCategory === 'all' 
            ? this.quizService.getAllQuizzes() 
            : this.quizService.getQuizzesByCategory(this.selectedCategory);

        const categories = this.quizService.getCategories();

        this.container.innerHTML = `
            <div class="category-container">
                <button class="category-badge ${this.selectedCategory === 'all' ? 'active' : 'inactive'}"
                        data-category="all">
                    Toutes les catégories
                </button>
                ${categories.map(category => `
                    <button class="category-badge ${this.selectedCategory === category ? 'active' : 'inactive'}"
                            data-category="${category}">
                        ${category}
                    </button>
                `).join('')}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${quizzes.map(quiz => `
                    <div class="card hover:shadow-lg transition-shadow duration-300">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-xl font-bold text-gray-800">${quiz.title}</h3>
                            <span class="px-3 py-1 rounded-full text-sm font-semibold
                                ${quiz.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
                                  quiz.difficulty === 'Moyen' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'}">
                                ${quiz.difficulty}
                            </span>
                        </div>
                        <p class="text-gray-600 mb-4">${quiz.description}</p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-2">
                                <span class="text-sm text-gray-500">${quiz.questionsCount} questions</span>
                                <span class="text-sm text-gray-500">•</span>
                                <span class="text-sm text-gray-500">${quiz.timeLimit}s par question</span>
                            </div>
                            <button onclick="app.showQuizDetail(${quiz.id})" 
                                    class="btn btn-primary">
                                Démarrer
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Ajouter les écouteurs d'événements pour les catégories
        this.container.querySelectorAll('.category-badge').forEach(button => {
            button.addEventListener('click', () => {
                this.selectCategory(button.dataset.category);
            });
        });
    }
} 