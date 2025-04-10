class QuizQuestion {
    constructor(container, quizService) {
        this.container = container;
        this.quizService = quizService;
        this.currentQuiz = null;
        this.currentQuestionIndex = 0;
        this.selectedAnswer = null;
        this.answers = [];
        this.timer = null;
        this.timeLeft = 0;
    }

    startQuiz(quizId, questionCount) {
        this.currentQuiz = this.quizService.getQuizById(quizId, questionCount);
        this.currentQuestionIndex = 0;
        this.selectedAnswer = null;
        this.answers = [];
        this.showQuestion();
    }

    showQuestion() {
        if (!this.currentQuiz) return;

        const question = this.currentQuiz.questions[this.currentQuestionIndex];
        this.timeLeft = question.timeLimit;
        
        const progressPercentage = Math.round((this.currentQuestionIndex / this.currentQuiz.questions.length) * 100);
        const isAnswered = this.answers[this.currentQuestionIndex] !== undefined;
        
        this.container.innerHTML = `
            <div class="card">
                <div class="flex justify-between items-center mb-6">
                    <div class="flex items-center space-x-4">
                        <button id="back-to-detail" class="btn btn-secondary">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                            </svg>
                            Retour
                        </button>
                        <button id="exit-quiz" class="btn btn-secondary">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                            Quitter le Quiz
                        </button>
                    </div>
                    <div class="text-right">
                        <div class="text-sm text-gray-600">Question ${this.currentQuestionIndex + 1} sur ${this.currentQuiz.questions.length}</div>
                        <div class="text-lg font-bold text-primary-600">${progressPercentage}% Complété</div>
                    </div>
                </div>

                <div class="mb-6">
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div class="bg-primary-600 h-2.5 rounded-full" style="width: ${progressPercentage}%"></div>
                    </div>
                </div>

                <div class="question-container">
                    <div class="flex justify-between items-center mb-4">
                        <div class="question-text">${question.text}</div>
                        <div id="timer" class="text-lg font-bold text-primary-600">${this.timeLeft}s</div>
                    </div>
                    
                    <div class="answers-container">
                        ${question.answers.map((answer, index) => {
                            const isSelected = this.selectedAnswer === index;
                            const isCorrect = index === question.correctAnswer;
                            const isAnswered = this.answers[this.currentQuestionIndex] !== undefined;
                            
                            let classes = 'answer-option';
                            if (isAnswered) {
                                if (isCorrect) {
                                    classes += ' correct';
                                } else if (isSelected && !isCorrect) {
                                    classes += ' incorrect';
                                }
                            } else if (isSelected) {
                                classes += ' selected';
                            }
                            
                            return `
                                <div class="${classes}" 
                                     ${!isAnswered ? `onclick="app.selectAnswer(${index})"` : ''}>
                                    <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                                    <span class="option-text">${answer}</span>
                                    ${isAnswered && isCorrect ? '<span class="text-green-500 ml-2">✓</span>' : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div class="flex justify-between mt-8">
                    <button onclick="app.previousQuestion()" 
                            class="btn btn-secondary ${this.currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}"
                            ${this.currentQuestionIndex === 0 ? 'disabled' : ''}>
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                        Précédent
                    </button>
                    <button onclick="app.nextQuestion()" 
                            class="btn btn-primary ${this.selectedAnswer === null ? 'opacity-50 cursor-not-allowed' : ''}"
                            ${this.selectedAnswer === null ? 'disabled' : ''}>
                        ${this.currentQuestionIndex === this.currentQuiz.questions.length - 1 ? 'Terminer' : 'Suivant'}
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        this.startTimer();

        // Ajouter les gestionnaires d'événements pour les boutons
        document.getElementById('back-to-detail').addEventListener('click', () => {
            app.showQuizDetail(this.currentQuiz.id);
        });

        document.getElementById('exit-quiz').addEventListener('click', () => {
            app.exitQuiz(this.currentQuiz.id, this.currentQuestionIndex);
        });
    }

    selectAnswer(answerIndex) {
        this.selectedAnswer = answerIndex;
        this.answers[this.currentQuestionIndex] = answerIndex;
        this.showQuestion();
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuiz.questions.length - 1) {
            this.currentQuestionIndex++;
            this.selectedAnswer = null;
            this.showQuestion();
        } else {
            this.finishQuiz();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.selectedAnswer = this.answers[this.currentQuestionIndex];
            this.showQuestion();
        }
    }

    startTimer() {
        clearInterval(this.timer);
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            const timerElement = document.getElementById('timer');
            if (timerElement) {
                timerElement.textContent = `${this.timeLeft}s`;
            }
            
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.nextQuestion();
            }
        }, 1000);
    }

    finishQuiz() {
        clearInterval(this.timer);
        const result = this.quizService.submitQuizAnswers(this.currentQuiz.id, this.answers);
        app.showQuizResult(this.currentQuiz.id, result.score, result.totalQuestions);
    }

    hide() {
        clearInterval(this.timer);
        this.container.classList.add('hidden');
    }
} 