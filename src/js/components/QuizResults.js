class QuizResults {
    constructor(quizService) {
        this.quizService = quizService;
    }

    show(quizId, score, totalQuestions, timeSpent, answers) {
        const quiz = this.quizService.getQuizById(quizId);
        const percentage = Math.round((score / totalQuestions) * 100);
        const timePerQuestion = Math.round(timeSpent / totalQuestions);
        
        // Calcul des statistiques
        const correctAnswers = answers.filter(a => a.isCorrect).length;
        const incorrectAnswers = answers.filter(a => !a.isCorrect).length;
        const averageTime = Math.round(timeSpent / totalQuestions);
        
        // Filtrer les questions ratées
        const failedQuestions = quiz.questions.filter((question, index) => !answers[index].isCorrect);
        
        // Création du contenu HTML
        const content = `
            <div class="results-container max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">Résultats du Quiz</h2>
                    <h3 class="text-2xl text-primary-600 mb-2">${quiz.title}</h3>
                    <div class="score-circle mx-auto w-48 h-48 rounded-full flex items-center justify-center 
                                ${percentage >= 70 ? 'bg-green-100' : percentage >= 50 ? 'bg-yellow-100' : 'bg-red-100'}">
                        <div class="text-center">
                            <div class="text-5xl font-bold ${percentage >= 70 ? 'text-green-600' : percentage >= 50 ? 'text-yellow-600' : 'text-red-600'}">
                                ${percentage}%
                            </div>
                            <div class="text-gray-600">Score</div>
                        </div>
                    </div>
                    <p class="text-xl text-gray-600 mt-4">${correctAnswers} bonnes réponses sur ${totalQuestions} questions</p>
                </div>

                <div class="stats-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div class="stat-card p-4 bg-gray-50 rounded-lg">
                        <div class="text-2xl font-bold text-primary-600">${correctAnswers}</div>
                        <div class="text-gray-600">Réponses correctes</div>
                    </div>
                    <div class="stat-card p-4 bg-gray-50 rounded-lg">
                        <div class="text-2xl font-bold text-primary-600">${incorrectAnswers}</div>
                        <div class="text-gray-600">Réponses incorrectes</div>
                    </div>
                    <div class="stat-card p-4 bg-gray-50 rounded-lg">
                        <div class="text-2xl font-bold text-primary-600">${averageTime}s</div>
                        <div class="text-gray-600">Temps moyen par question</div>
                    </div>
                </div>

                ${failedQuestions.length > 0 ? `
                    <div class="questions-summary mb-8">
                        <h3 class="text-xl font-bold text-gray-800 mb-4">
                            Questions à revoir (${failedQuestions.length})
                        </h3>
                        <div class="space-y-4">
                            ${failedQuestions.map((question, index) => {
                                const originalIndex = quiz.questions.indexOf(question);
                                const userAnswer = answers[originalIndex];
                                const userChoice = question.answers[userAnswer.selectedIndex];
                                const correctAnswer = question.answers[question.correctAnswer];
                                
                                return `
                                    <div class="question-card p-4 rounded-lg bg-red-50">
                                        <div class="flex items-center justify-between mb-2">
                                            <span class="font-semibold">Question ${originalIndex + 1}</span>
                                            <span class="text-red-600">✗ Incorrect</span>
                                        </div>
                                        <p class="text-gray-700 mb-2">${question.question}</p>
                                        <div class="space-y-2">
                                            <div class="text-sm">
                                                <span class="font-semibold">Votre réponse:</span>
                                                <span class="text-red-600">${userChoice}</span>
                                            </div>
                                            <div class="text-sm">
                                                <span class="font-semibold">Bonne réponse:</span>
                                                <span class="text-green-600">${correctAnswer}</span>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                ` : `
                    <div class="text-center p-6 bg-green-50 rounded-lg mb-8">
                        <h3 class="text-xl font-bold text-green-600 mb-2">Félicitations !</h3>
                        <p class="text-gray-600">Vous avez répondu correctement à toutes les questions.</p>
                    </div>
                `}

                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <button onclick="app.showQuizDetail(${quizId})" 
                            class="btn-primary flex-1 sm:flex-none">
                        <i class="fas fa-redo mr-2"></i>Recommencer
                    </button>
                    <button onclick="app.showQuizList()" 
                            class="btn-secondary flex-1 sm:flex-none">
                        <i class="fas fa-list mr-2"></i>Retour aux quiz
                    </button>
                </div>
            </div>
        `;

        document.getElementById('main-content').innerHTML = content;
    }
} 