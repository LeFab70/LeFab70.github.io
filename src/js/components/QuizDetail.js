class QuizDetail {
    constructor(container, quizService) {
        this.container = container;
        this.quizService = quizService;
    }

    show(quizId) {
        const quiz = this.quizService.getQuizById(quizId);
        this.container.classList.remove('hidden');
        this.container.innerHTML = `
            <div class="card">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-800">${quiz.title}</h2>
                    <span class="category-badge">${quiz.category}</span>
                </div>

                <div class="mb-6">
                    <p class="text-gray-600 mb-4">${quiz.description}</p>
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-500">Nombre de questions</p>
                            <p class="text-lg font-semibold">${quiz.questions.length}</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-500">Temps par question</p>
                            <p class="text-lg font-semibold">${quiz.timeLimit}s</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-500">Difficulté</p>
                            <p class="text-lg font-semibold">${quiz.difficulty}</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-500">Catégorie</p>
                            <p class="text-lg font-semibold">${quiz.category}</p>
                        </div>
                    </div>
                </div>

                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2">Instructions</h3>
                    <ul class="list-disc list-inside text-gray-600 space-y-2">
                        <li>Chaque question a un temps limité</li>
                        <li>Vous ne pouvez pas revenir en arrière après avoir répondu</li>
                        <li>Le score est basé sur les bonnes réponses</li>
                    </ul>
                </div>

                <div class="mb-6">
                    <label for="question-count" class="block text-sm font-medium text-gray-700 mb-2">
                        Nombre de questions (minimum 5)
                    </label>
                    <div class="flex items-center space-x-4">
                        <input type="range" 
                               id="question-count" 
                               name="question-count" 
                               min="5" 
                               max="${quiz.questions.length}" 
                               value="${quiz.questions.length}"
                               class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
                        <span id="question-count-value" class="text-lg font-semibold text-primary-600">
                            ${quiz.questions.length}
                        </span>
                    </div>
                </div>

                <div class="flex justify-between">
                    <button onclick="app.showQuizList()" class="btn btn-secondary">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                        </svg>
                        Retour
                    </button>
                    <button onclick="app.startQuiz(${quiz.id}, document.getElementById('question-count').value)" class="btn btn-primary">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                        </svg>
                        Démarrer le Quiz
                    </button>
                </div>
            </div>
        `;

        // Ajouter l'écouteur d'événements pour le range input
        const questionCountInput = document.getElementById('question-count');
        const questionCountValue = document.getElementById('question-count-value');
        
        questionCountInput.addEventListener('input', (e) => {
            questionCountValue.textContent = e.target.value;
        });
    }

    hide() {
        this.container.classList.add('hidden');
    }
} 