class QuizResult {
    constructor(container, quizService) {
        this.container = container;
        this.quizService = quizService;
    }

    show(quizId, score, totalQuestions) {
        const quiz = this.quizService.getQuizById(quizId);
        const percentage = Math.round((score / totalQuestions) * 100);
        
        this.container.classList.remove('hidden');
        this.container.innerHTML = `
            <div class="card">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">Résultats du Quiz</h2>
                    <div class="text-6xl font-bold text-primary-600 mb-2">${percentage}%</div>
                    <p class="text-xl text-gray-600">${score} bonnes réponses sur ${totalQuestions} questions</p>
                </div>

                <div class="mb-8">
                    <h3 class="text-xl font-semibold mb-4">Détails du Quiz</h3>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-500">Titre du Quiz</p>
                            <p class="text-lg font-semibold">${quiz.title}</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-500">Catégorie</p>
                            <p class="text-lg font-semibold">${quiz.category}</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-500">Difficulté</p>
                            <p class="text-lg font-semibold">${quiz.difficulty}</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-500">Temps par question</p>
                            <p class="text-lg font-semibold">${quiz.timeLimit}s</p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center space-x-4">
                    <button onclick="app.showQuizList()" class="btn btn-secondary">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                        </svg>
                        Retour à la liste
                    </button>
                    <button onclick="app.startQuiz(${quiz.id})" class="btn btn-primary">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                        </svg>
                        Réessayer
                    </button>
                </div>
            </div>
        `;
    }

    hide() {
        this.container.classList.add('hidden');
    }
} 