class App {
    constructor() {
        this.container = document.getElementById('main-content');
        this.quizService = new QuizService();
        this.quizList = new QuizList(document.getElementById('quiz-list'), this.quizService);
        this.quizDetail = new QuizDetail(document.getElementById('quiz-detail'), this.quizService);
        this.quizQuestion = new QuizQuestion(document.getElementById('quiz-question'), this.quizService);
        this.quizResult = new QuizResult(document.getElementById('quiz-result'), this.quizService);
        
        this.currentQuizId = null;
        this.init();
    }

    init() {
        this.quizList.show();
        this.quizDetail.hide();
        this.quizQuestion.hide();
        this.quizResult.hide();
        
        // Attendre que le DOM soit chargé avant d'initialiser les écouteurs d'événements
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeEventListeners());
        } else {
            this.initializeEventListeners();
        }
    }

    initializeEventListeners() {
        const backToListBtn = document.getElementById('back-to-list');
        const backToDetailBtn = document.getElementById('back-to-detail');
        
        if (backToListBtn) {
            backToListBtn.addEventListener('click', () => this.showQuizList());
        }
        
        if (backToDetailBtn) {
            backToDetailBtn.addEventListener('click', () => this.showQuizDetail(this.currentQuizId));
        }
    }

    showQuizList() {
        this.quizList.show();
        this.quizDetail.hide();
        this.quizQuestion.hide();
        this.quizResult.hide();
    }

    showQuizDetail(quizId) {
        this.currentQuizId = quizId;
        this.quizList.hide();
        this.quizDetail.show(quizId);
        this.quizQuestion.hide();
        this.quizResult.hide();
    }

    startQuiz(quizId, questionCount) {
        this.quizList.hide();
        this.quizDetail.hide();
        this.quizQuestion.startQuiz(quizId, questionCount);
        this.quizQuestion.container.classList.remove('hidden');
        this.quizResult.hide();
    }

    selectAnswer(answerIndex) {
        this.quizQuestion.selectAnswer(answerIndex);
    }

    nextQuestion() {
        this.quizQuestion.nextQuestion();
    }

    previousQuestion() {
        this.quizQuestion.previousQuestion();
    }

    showQuizResult(quizId, score, totalQuestions) {
        this.quizList.hide();
        this.quizDetail.hide();
        this.quizQuestion.hide();
        this.quizResult.show(quizId, score, totalQuestions);
    }

    exitQuiz(quizId, currentQuestionIndex) {
        if (!this.container) {
            console.error('Container not found');
            return;
        }

        const quiz = this.quizService.getQuizById(quizId);
        const answeredQuestions = this.quizQuestion.answers.filter(answer => answer !== undefined).length;
        const totalQuestions = quiz.questionsCount || quiz.questions.length;
        const progressPercentage = Math.round((answeredQuestions / totalQuestions) * 100);
        
        // Afficher le popup de confirmation
        const popup = document.getElementById('confirmation-popup');
        const message = document.getElementById('confirmation-message');
        const confirmButton = document.getElementById('confirm-exit');
        const cancelButton = document.getElementById('cancel-exit');
        
        // Mettre à jour le message
        message.textContent = `Vous avez répondu à ${answeredQuestions} questions sur ${totalQuestions} (${progressPercentage}%)`;
        
        // Afficher le popup
        popup.classList.add('active');
        
        // Gérer la confirmation
        confirmButton.onclick = () => {
            // Réinitialiser l'état du quiz
            this.quizQuestion.answers = [];
            this.quizQuestion.currentQuestionIndex = 0;
            this.quizQuestion.hide();
            
            // Cacher le popup
            popup.classList.remove('active');
            
            // Retourner à la liste des quiz
            this.showQuizList();
        };
        
        // Gérer l'annulation
        cancelButton.onclick = () => {
            // Cacher le popup
            popup.classList.remove('active');
            
            // Continuer le quiz
            this.quizQuestion.container.classList.remove('hidden');
        };
    }

    resumeQuiz() {
        // Supprimer la notification
        const notification = document.querySelector('.exit-notification');
        if (notification) {
            notification.remove();
        }
    }

    confirmExitQuiz() {
        // Supprimer la notification
        const notification = document.querySelector('.exit-notification');
        if (notification) {
            notification.remove();
        }
        
        // Masquer le quiz en cours et retourner à la liste
        this.quizQuestion.hide();
        this.showQuizList();
    }
}

// Attendre que le DOM soit chargé avant d'initialiser l'application
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new App();
    });
} else {
    window.app = new App();
} 