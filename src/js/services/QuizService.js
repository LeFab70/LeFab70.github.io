class QuizService {
    constructor() {
        this.quizzes = [
            {
                id: 1,
                title: "JavaScript Basics",
                description: "Test your knowledge of JavaScript fundamentals",
                category: "JavaScript",
                difficulty: "Beginner",
                timeLimit: 30,
                questionsCount: 20,
                questions: [
                    {
                        id: 1,
                        text: "What is JavaScript?",
                        answers: [
                            "A markup language",
                            "A programming language",
                            "A styling language",
                            "A database language"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 2,
                        text: "Which of the following is not a JavaScript data type?",
                        answers: [
                            "String",
                            "Boolean",
                            "Integer",
                            "Undefined"
                        ],
                        correctAnswer: 2,
                        timeLimit: 30
                    },
                    {
                        id: 3,
                        text: "What does the 'this' keyword refer to in JavaScript?",
                        answers: [
                            "The current function",
                            "The global object",
                            "The object that owns the code",
                            "The parent object"
                        ],
                        correctAnswer: 2,
                        timeLimit: 30
                    },
                    {
                        id: 4,
                        text: "What is the correct way to declare a variable in JavaScript?",
                        answers: [
                            "var x = 5;",
                            "variable x = 5;",
                            "x = 5;",
                            "let x = 5;"
                        ],
                        correctAnswer: 3,
                        timeLimit: 30
                    },
                    {
                        id: 5,
                        text: "What is the output of console.log(typeof null)?",
                        answers: [
                            "null",
                            "undefined",
                            "object",
                            "string"
                        ],
                        correctAnswer: 2,
                        timeLimit: 30
                    },
                    {
                        id: 6,
                        text: "Which method is used to add an element to the end of an array?",
                        answers: [
                            "push()",
                            "pop()",
                            "shift()",
                            "unshift()"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 7,
                        text: "What is the purpose of the 'use strict' directive?",
                        answers: [
                            "To enable strict mode",
                            "To disable strict mode",
                            "To define strict variables",
                            "To enforce type checking"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 8,
                        text: "Which operator is used for strict equality comparison?",
                        answers: [
                            "==",
                            "===",
                            "=",
                            "!="
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 9,
                        text: "What is a closure in JavaScript?",
                        answers: [
                            "A function that returns another function",
                            "A function that has access to its outer function's scope",
                            "A function that takes no arguments",
                            "A function that is called immediately"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 10,
                        text: "What is the purpose of the 'async' keyword?",
                        answers: [
                            "To define a synchronous function",
                            "To define an asynchronous function",
                            "To pause execution",
                            "To handle errors"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 11,
                        text: "What is the output of console.log(1 + '1')?",
                        answers: [
                            "2",
                            "11",
                            "NaN",
                            "Error"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 12,
                        text: "Which method is used to convert a string to a number?",
                        answers: [
                            "parseInt()",
                            "toString()",
                            "toNumber()",
                            "convert()"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 13,
                        text: "What is the purpose of the 'bind' method?",
                        answers: [
                            "To create a new function",
                            "To bind a function to an object",
                            "To bind events",
                            "To bind variables"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 14,
                        text: "What is the output of console.log([] == ![])?",
                        answers: [
                            "true",
                            "false",
                            "Error",
                            "undefined"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 15,
                        text: "Which method is used to remove the last element from an array?",
                        answers: [
                            "push()",
                            "pop()",
                            "shift()",
                            "unshift()"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 16,
                        text: "What is the purpose of the 'map' method?",
                        answers: [
                            "To filter elements",
                            "To transform elements",
                            "To sort elements",
                            "To reverse elements"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 17,
                        text: "What is the output of console.log(typeof [])?",
                        answers: [
                            "array",
                            "object",
                            "undefined",
                            "null"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 18,
                        text: "Which method is used to join array elements into a string?",
                        answers: [
                            "concat()",
                            "join()",
                            "split()",
                            "merge()"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 19,
                        text: "What is the purpose of the 'reduce' method?",
                        answers: [
                            "To reduce array size",
                            "To transform array to single value",
                            "To filter array elements",
                            "To sort array elements"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 20,
                        text: "What is the output of console.log(0.1 + 0.2 === 0.3)?",
                        answers: [
                            "true",
                            "false",
                            "Error",
                            "undefined"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 21,
                        text: "Which method is used to check if an array includes a value?",
                        answers: [
                            "contains()",
                            "includes()",
                            "has()",
                            "find()"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 22,
                        text: "What is the purpose of the 'filter' method?",
                        answers: [
                            "To transform elements",
                            "To create new array with matching elements",
                            "To sort elements",
                            "To reverse elements"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 23,
                        text: "What is the output of console.log(NaN === NaN)?",
                        answers: [
                            "true",
                            "false",
                            "Error",
                            "undefined"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 24,
                        text: "Which method is used to find an element in an array?",
                        answers: [
                            "search()",
                            "find()",
                            "locate()",
                            "get()"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 25,
                        text: "What is the purpose of the 'sort' method?",
                        answers: [
                            "To filter elements",
                            "To transform elements",
                            "To sort elements",
                            "To reverse elements"
                        ],
                        correctAnswer: 2,
                        timeLimit: 30
                    },
                    {
                        id: 26,
                        text: "What is the output of console.log(typeof function() {})?",
                        answers: [
                            "function",
                            "object",
                            "undefined",
                            "null"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 27,
                        text: "Which method is used to reverse an array?",
                        answers: [
                            "flip()",
                            "reverse()",
                            "invert()",
                            "backwards()"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 28,
                        text: "What is the purpose of the 'slice' method?",
                        answers: [
                            "To modify array",
                            "To create new array from portion",
                            "To add elements",
                            "To remove elements"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 29,
                        text: "What is the output of console.log([] + [])?",
                        answers: [
                            "[]",
                            "[object Object]",
                            "",
                            "undefined"
                        ],
                        correctAnswer: 2,
                        timeLimit: 30
                    },
                    {
                        id: 30,
                        text: "Which method is used to add elements to the beginning of an array?",
                        answers: [
                            "push()",
                            "pop()",
                            "shift()",
                            "unshift()"
                        ],
                        correctAnswer: 3,
                        timeLimit: 30
                    }
                ]
            },
            {
                id: 2,
                title: "Python Fundamentals",
                description: "Test your knowledge of Python programming",
                category: "Python",
                difficulty: "Beginner",
                timeLimit: 30,
                questionsCount: 20,
                questions: [
                    {
                        id: 1,
                        text: "What is Python?",
                        answers: [
                            "A markup language",
                            "A programming language",
                            "A styling language",
                            "A database language"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 2,
                        text: "Which of the following is not a Python data type?",
                        answers: [
                            "String",
                            "Boolean",
                            "Integer",
                            "Character"
                        ],
                        correctAnswer: 3,
                        timeLimit: 30
                    },
                    {
                        id: 3,
                        text: "What is the correct way to create a function in Python?",
                        answers: [
                            "function myFunction():",
                            "def myFunction():",
                            "create myFunction():",
                            "func myFunction():"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 4,
                        text: "What is the output of print(2 ** 3)?",
                        answers: [
                            "6",
                            "8",
                            "5",
                            "Error"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 5,
                        text: "Which method is used to get the length of a list?",
                        answers: [
                            "size()",
                            "length()",
                            "len()",
                            "count()"
                        ],
                        correctAnswer: 2,
                        timeLimit: 30
                    },
                    {
                        id: 6,
                        text: "What is the purpose of the 'if' statement?",
                        answers: [
                            "To create loops",
                            "To make decisions",
                            "To define functions",
                            "To handle errors"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 7,
                        text: "What is the output of print('Hello' + 'World')?",
                        answers: [
                            "Hello World",
                            "HelloWorld",
                            "Error",
                            "None"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 8,
                        text: "Which operator is used for exponentiation?",
                        answers: [
                            "*",
                            "**",
                            "^",
                            "//"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 9,
                        text: "What is a list comprehension in Python?",
                        answers: [
                            "A way to create lists",
                            "A way to filter lists",
                            "A way to sort lists",
                            "A way to reverse lists"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 10,
                        text: "What is the purpose of the 'try' statement?",
                        answers: [
                            "To define functions",
                            "To create loops",
                            "To handle exceptions",
                            "To make decisions"
                        ],
                        correctAnswer: 2,
                        timeLimit: 30
                    },
                    {
                        id: 11,
                        text: "What is the output of print(10 / 3)?",
                        answers: [
                            "3",
                            "3.333...",
                            "3.0",
                            "Error"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 12,
                        text: "Which method is used to convert a string to lowercase?",
                        answers: [
                            "lower()",
                            "toLower()",
                            "casefold()",
                            "downcase()"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 13,
                        text: "What is the purpose of the 'with' statement?",
                        answers: [
                            "To create loops",
                            "To handle resources",
                            "To define functions",
                            "To make decisions"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 14,
                        text: "What is the output of print(bool([]))?",
                        answers: [
                            "True",
                            "False",
                            "Error",
                            "None"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 15,
                        text: "Which method is used to add an element to a list?",
                        answers: [
                            "push()",
                            "append()",
                            "add()",
                            "insert()"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 16,
                        text: "What is the purpose of the 'lambda' function?",
                        answers: [
                            "To create anonymous functions",
                            "To create named functions",
                            "To create recursive functions",
                            "To create class methods"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 17,
                        text: "What is the output of print(type([]))?",
                        answers: [
                            "list",
                            "array",
                            "tuple",
                            "dict"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 18,
                        text: "Which method is used to remove an element from a list?",
                        answers: [
                            "delete()",
                            "remove()",
                            "pop()",
                            "clear()"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 19,
                        text: "What is the purpose of the 'map' function?",
                        answers: [
                            "To filter elements",
                            "To transform elements",
                            "To sort elements",
                            "To reverse elements"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 20,
                        text: "What is the output of print(True + True)?",
                        answers: [
                            "True",
                            "False",
                            "2",
                            "Error"
                        ],
                        correctAnswer: 2,
                        timeLimit: 30
                    },
                    {
                        id: 21,
                        text: "Which method is used to check if a string contains a substring?",
                        answers: [
                            "contains()",
                            "includes()",
                            "in",
                            "find()"
                        ],
                        correctAnswer: 2,
                        timeLimit: 30
                    },
                    {
                        id: 22,
                        text: "What is the purpose of the 'filter' function?",
                        answers: [
                            "To transform elements",
                            "To create new list with matching elements",
                            "To sort elements",
                            "To reverse elements"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 23,
                        text: "What is the output of print(None == None)?",
                        answers: [
                            "True",
                            "False",
                            "Error",
                            "None"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 24,
                        text: "Which method is used to find an element in a list?",
                        answers: [
                            "search()",
                            "find()",
                            "index()",
                            "locate()"
                        ],
                        correctAnswer: 2,
                        timeLimit: 30
                    },
                    {
                        id: 25,
                        text: "What is the purpose of the 'sorted' function?",
                        answers: [
                            "To filter elements",
                            "To transform elements",
                            "To sort elements",
                            "To reverse elements"
                        ],
                        correctAnswer: 2,
                        timeLimit: 30
                    },
                    {
                        id: 26,
                        text: "What is the output of print(type(lambda x: x))?",
                        answers: [
                            "function",
                            "lambda",
                            "object",
                            "type"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 27,
                        text: "Which method is used to reverse a list?",
                        answers: [
                            "flip()",
                            "reverse()",
                            "invert()",
                            "backwards()"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 28,
                        text: "What is the purpose of the 'slice' operator?",
                        answers: [
                            "To modify list",
                            "To create new list from portion",
                            "To add elements",
                            "To remove elements"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 29,
                        text: "What is the output of print([] + [])?",
                        answers: [
                            "[]",
                            "[[]]",
                            "[]",
                            "Error"
                        ],
                        correctAnswer: 2,
                        timeLimit: 30
                    },
                    {
                        id: 30,
                        text: "Which method is used to add elements to the beginning of a list?",
                        answers: [
                            "push()",
                            "append()",
                            "insert()",
                            "prepend()"
                        ],
                        correctAnswer: 2,
                        timeLimit: 30
                    }
                ]
            },
            {
                id: 3,
                title: "HTML & CSS",
                description: "Test your knowledge of HTML and CSS",
                category: "Web Development",
                difficulty: "Beginner",
                timeLimit: 20,
                questionsCount: 20,
                questions: [
                    {
                        id: 1,
                        text: "Que signifie HTML ?",
                        answers: [
                            "Hyper Text Markup Language",
                            "High Tech Modern Language",
                            "Hyper Transfer Markup Language",
                            "Home Tool Markup Language"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 2,
                        text: "Quelle balise HTML est utilisée pour définir une feuille de style interne ?",
                        answers: [
                            "<script>",
                            "<css>",
                            "<style>",
                            "<link>",
                            "<stylesheet>"
                        ],
                        correctAnswer: 2,
                        timeLimit: 30
                    },
                    {
                        id: 3,
                        text: "Quelle balise est utilisée pour créer un lien hypertexte ?",
                        answers: [
                            "<link>",
                            "<a>",
                            "<href>",
                            "<url>"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 4,
                        text: "Quelle balise est utilisée pour créer un paragraphe ?",
                        answers: [
                            "<p>",
                            "<par>",
                            "<para>",
                            "<text>"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 5,
                        text: "Quelle balise est utilisée pour créer une liste non ordonnée ?",
                        answers: [
                            "<ol>",
                            "<ul>",
                            "<li>",
                            "<list>"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 6,
                        text: "Quelle balise est utilisée pour créer un titre de niveau 1 ?",
                        answers: [
                            "<h1>",
                            "<title>",
                            "<head>",
                            "<header>"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 7,
                        text: "Quelle balise est utilisée pour insérer une image ?",
                        answers: [
                            "<img>",
                            "<image>",
                            "<picture>",
                            "<photo>"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 8,
                        text: "Quelle balise est utilisée pour créer un formulaire ?",
                        answers: [
                            "<form>",
                            "<input>",
                            "<submit>",
                            "<button>"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 9,
                        text: "Quelle balise est utilisée pour créer un tableau ?",
                        answers: [
                            "<table>",
                            "<grid>",
                            "<data>",
                            "<matrix>"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 10,
                        text: "Quelle balise est utilisée pour créer une ligne dans un tableau ?",
                        answers: [
                            "<row>",
                            "<tr>",
                            "<line>",
                            "<td>"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 11,
                        text: "Quelle balise est utilisée pour créer une cellule dans un tableau ?",
                        answers: [
                            "<cell>",
                            "<td>",
                            "<data>",
                            "<item>"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 12,
                        text: "Quelle balise est utilisée pour créer un commentaire en HTML ?",
                        answers: [
                            "<!-- -->",
                            "<comment>",
                            "<!comment>",
                            "/* */"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 13,
                        text: "Quelle balise est utilisée pour créer un saut de ligne ?",
                        answers: [
                            "<br>",
                            "<break>",
                            "<lb>",
                            "<nl>"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 14,
                        text: "Quelle balise est utilisée pour créer une liste ordonnée ?",
                        answers: [
                            "<ul>",
                            "<ol>",
                            "<li>",
                            "<list>"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 15,
                        text: "Quelle balise est utilisée pour créer un élément de liste ?",
                        answers: [
                            "<item>",
                            "<li>",
                            "<list>",
                            "<element>"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 16,
                        text: "Quelle balise est utilisée pour créer un champ de saisie de texte ?",
                        answers: [
                            "<input>",
                            "<text>",
                            "<textbox>",
                            "<field>"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 17,
                        text: "Quelle balise est utilisée pour créer un bouton ?",
                        answers: [
                            "<button>",
                            "<input>",
                            "<click>",
                            "<submit>"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 18,
                        text: "Quelle balise est utilisée pour créer une division ?",
                        answers: [
                            "<div>",
                            "<section>",
                            "<part>",
                            "<block>"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 19,
                        text: "Quelle balise est utilisée pour créer un en-tête ?",
                        answers: [
                            "<head>",
                            "<header>",
                            "<title>",
                            "<h1>"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 20,
                        text: "Quelle balise est utilisée pour créer un pied de page ?",
                        answers: [
                            "<foot>",
                            "<footer>",
                            "<bottom>",
                            "<end>"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    }
                ]
            },
            {
                id: 4,
                title: "Database Fundamentals",
                description: "Test your knowledge of database concepts and normalization",
                category: "Database",
                difficulty: "Beginner",
                timeLimit: 30,
                questionsCount: 10,
                questions: [
                    {
                        id: 1,
                        text: "What is the First Normal Form (1NF)?",
                        answers: [
                            "A table where each column contains atomic values",
                            "A table with no repeating groups",
                            "A table with a primary key",
                            "All of the above"
                        ],
                        correctAnswer: 3,
                        timeLimit: 30
                    },
                    {
                        id: 2,
                        text: "In Second Normal Form (2NF), a table must be in 1NF and:",
                        answers: [
                            "Have no partial dependencies",
                            "Have no transitive dependencies",
                            "Have a composite primary key",
                            "Have at least one foreign key"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 3,
                        text: "Third Normal Form (3NF) requires that:",
                        answers: [
                            "All attributes are dependent on the primary key",
                            "There are no transitive dependencies",
                            "The table has a single-column primary key",
                            "All foreign keys are indexed"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 4,
                        text: "What is a primary key?",
                        answers: [
                            "A column that uniquely identifies each row",
                            "A column that references another table",
                            "A column that contains only unique values",
                            "A column that cannot be null"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 5,
                        text: "What is a foreign key?",
                        answers: [
                            "A key that is used to join tables",
                            "A key that is unique in another table",
                            "A key that references a primary key in another table",
                            "All of the above"
                        ],
                        correctAnswer: 3,
                        timeLimit: 30
                    }
                ]
            },
            {
                id: 5,
                title: "C++ Programming",
                description: "Test your knowledge of C++ programming concepts",
                category: "C++",
                difficulty: "Beginner",
                timeLimit: 30,
                questionsCount: 10,
                questions: [
                    {
                        id: 1,
                        text: "What is the correct way to declare a pointer in C++?",
                        answers: [
                            "int ptr;",
                            "int *ptr;",
                            "*int ptr;",
                            "pointer int ptr;"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 2,
                        text: "What is the purpose of the 'new' operator in C++?",
                        answers: [
                            "To create a new variable",
                            "To allocate memory dynamically",
                            "To initialize a class",
                            "To declare a new function"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 3,
                        text: "What is a constructor in C++?",
                        answers: [
                            "A function that destroys objects",
                            "A function that initializes objects",
                            "A function that copies objects",
                            "A function that compares objects"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 4,
                        text: "What is the difference between 'public' and 'private' in C++?",
                        answers: [
                            "Public members are accessible from anywhere, private only from the class",
                            "Public members can be modified, private cannot",
                            "Public members are static, private are instance members",
                            "There is no difference"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 5,
                        text: "What is inheritance in C++?",
                        answers: [
                            "A way to create new classes from existing ones",
                            "A way to share variables between classes",
                            "A way to copy objects",
                            "A way to destroy objects"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    }
                ]
            },
            {
                id: 6,
                title: "C# Windows Forms",
                description: "Test your knowledge of C# Windows Forms development",
                category: "C#",
                difficulty: "Beginner",
                timeLimit: 30,
                questionsCount: 10,
                questions: [
                    {
                        id: 1,
                        text: "What is Windows Forms in C#?",
                        answers: [
                            "A database management system",
                            "A GUI framework for desktop applications",
                            "A web development framework",
                            "A game development framework"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 2,
                        text: "What is the purpose of the Form class in Windows Forms?",
                        answers: [
                            "To create database connections",
                            "To create the main window of an application",
                            "To handle file operations",
                            "To manage network connections"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 3,
                        text: "What is an event handler in Windows Forms?",
                        answers: [
                            "A method that responds to user actions",
                            "A database query",
                            "A file operation",
                            "A network request"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 4,
                        text: "What is the purpose of the Button control?",
                        answers: [
                            "To display text",
                            "To create clickable buttons",
                            "To show images",
                            "To play sounds"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    },
                    {
                        id: 5,
                        text: "What is the purpose of the TextBox control?",
                        answers: [
                            "To display images",
                            "To allow user input",
                            "To create buttons",
                            "To play videos"
                        ],
                        correctAnswer: 1,
                        timeLimit: 30
                    }
                ]
            },
            {
                id: 7,
                title: "Object-Oriented Programming",
                description: "Test your knowledge of OOP concepts",
                category: "OOP",
                difficulty: "Beginner",
                timeLimit: 30,
                questionsCount: 10,
                questions: [
                    {
                        id: 1,
                        text: "What are the four main principles of OOP?",
                        answers: [
                            "Inheritance, Polymorphism, Abstraction, Encapsulation",
                            "Variables, Functions, Classes, Objects",
                            "Public, Private, Protected, Static",
                            "Input, Output, Process, Storage"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 2,
                        text: "What is encapsulation in OOP?",
                        answers: [
                            "Hiding the internal details of an object",
                            "Creating new classes from existing ones",
                            "Allowing objects to take many forms",
                            "Creating abstract classes"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 3,
                        text: "What is polymorphism in OOP?",
                        answers: [
                            "The ability of objects to take many forms",
                            "The process of hiding data",
                            "The creation of new classes",
                            "The management of memory"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 4,
                        text: "What is inheritance in OOP?",
                        answers: [
                            "Creating new classes from existing ones",
                            "Hiding data from other classes",
                            "Managing memory allocation",
                            "Handling user input"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        id: 5,
                        text: "What is abstraction in OOP?",
                        answers: [
                            "Showing only essential features",
                            "Creating multiple instances",
                            "Managing memory",
                            "Handling errors"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    }
                ]
            },
            {
                id: 8,
                title: "Introduction aux affaires",
                description: "Testez vos connaissances sur les concepts fondamentaux du monde des affaires",
                category: "Business",
                difficulty: "Débutant",
                questionsCount: 20,
                timeLimit: 30,
                questions: [
                    {
                        question: "Qu'est-ce qu'un plan d'affaires?",
                        answers: [
                            "Un document détaillant la stratégie et les projections financières d'une entreprise",
                            "Une liste de tâches quotidiennes",
                            "Un catalogue de produits",
                            "Un organigramme d'entreprise"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Que signifie ROI?",
                        answers: [
                            "Retour sur investissement",
                            "Rapport organisationnel interne",
                            "Règle opérationnelle internationale",
                            "Réseau d'orientation industrielle"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Qu'est-ce que le marketing mix?",
                        answers: [
                            "Les 4P : Prix, Produit, Place, Promotion",
                            "Un cocktail d'entreprise",
                            "Une stratégie de vente",
                            "Un budget marketing"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Quelle est la définition d'une PME?",
                        answers: [
                            "Petite et Moyenne Entreprise",
                            "Plan de Management Économique",
                            "Processus de Modernisation d'Entreprise",
                            "Programme de Motivation des Employés"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Qu'est-ce qu'une étude de marché?",
                        answers: [
                            "Une analyse des clients potentiels et de la concurrence",
                            "Un rapport financier annuel",
                            "Une liste de prix",
                            "Un plan de communication"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Qu'est-ce que le fonds de roulement?",
                        answers: [
                            "La différence entre actifs et passifs à court terme",
                            "Le profit annuel",
                            "Le total des ventes",
                            "Le salaire des employés"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Quel est le rôle d'un business angel?",
                        answers: [
                            "Un investisseur qui finance les startups",
                            "Un consultant en management",
                            "Un directeur commercial",
                            "Un expert-comptable"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Qu'est-ce que la veille concurrentielle?",
                        answers: [
                            "L'observation et l'analyse des concurrents",
                            "La surveillance des employés",
                            "Le contrôle qualité",
                            "La gestion des stocks"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Que signifie B2B?",
                        answers: [
                            "Business to Business",
                            "Back to Business",
                            "Business to Bank",
                            "Bank to Business"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Qu'est-ce qu'un bilan comptable?",
                        answers: [
                            "Un état des actifs et passifs de l'entreprise",
                            "Un rapport de ventes",
                            "Une liste de clients",
                            "Un planning des réunions"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Qu'est-ce que la segmentation de marché?",
                        answers: [
                            "La division du marché en groupes de clients distincts",
                            "La répartition des tâches",
                            "La division des profits",
                            "L'organisation des départements"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Quel est le rôle d'un compte de résultat?",
                        answers: [
                            "Montrer les profits et pertes sur une période",
                            "Lister les employés",
                            "Gérer les stocks",
                            "Planifier les réunions"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Qu'est-ce que le seuil de rentabilité?",
                        answers: [
                            "Le point où les revenus égalent les coûts",
                            "Le profit maximum",
                            "Le chiffre d'affaires annuel",
                            "Le total des investissements"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Que signifie SWOT?",
                        answers: [
                            "Forces, Faiblesses, Opportunités, Menaces",
                            "Service Web Orienté Travail",
                            "Système World Organisation Trade",
                            "Structure Web Orientation Technique"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Qu'est-ce que le cash flow?",
                        answers: [
                            "Les flux de trésorerie de l'entreprise",
                            "Le profit net",
                            "Les dettes de l'entreprise",
                            "Le capital social"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Qu'est-ce qu'une proposition de valeur?",
                        answers: [
                            "La promesse de valeur faite aux clients",
                            "Le prix des produits",
                            "La valeur de l'entreprise",
                            "Le coût de production"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Que signifie CRM?",
                        answers: [
                            "Customer Relationship Management",
                            "Compte Rendu Mensuel",
                            "Contrôle des Ressources Matérielles",
                            "Centre de Recherche Marketing"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Qu'est-ce que le capital social?",
                        answers: [
                            "L'apport initial des actionnaires",
                            "Les bénéfices annuels",
                            "Les dettes de l'entreprise",
                            "Le chiffre d'affaires"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Qu'est-ce qu'une partie prenante (stakeholder)?",
                        answers: [
                            "Toute personne ou entité impactée par l'entreprise",
                            "Un actionnaire majoritaire",
                            "Un client fidèle",
                            "Un fournisseur principal"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    },
                    {
                        question: "Qu'est-ce que la gouvernance d'entreprise?",
                        answers: [
                            "L'ensemble des règles de gestion et de contrôle",
                            "Le conseil d'administration",
                            "La stratégie commerciale",
                            "Le plan marketing"
                        ],
                        correctAnswer: 0,
                        timeLimit: 30
                    }
                ]
            }
        ];
    }

    getQuizById(id, questionCount = null) {
        const quiz = this.quizzes.find(q => q.id === id);
        if (!quiz) return null;

        // Si un nombre de questions est spécifié, sélectionner aléatoirement les questions
        if (questionCount && questionCount < quiz.questions.length) {
            const shuffledQuestions = [...quiz.questions].sort(() => Math.random() - 0.5);
            return {
                ...quiz,
                questions: shuffledQuestions.slice(0, questionCount),
                questionsCount: questionCount
            };
        }

        return {
            ...quiz,
            questionsCount: quiz.questions.length
        };
    }

    getAllQuizzes() {
        return this.quizzes;
    }

    getQuizzesByCategory(category) {
        return this.quizzes.filter(quiz => quiz.category === category);
    }

    getCategories() {
        const categories = [...new Set(this.quizzes.map(quiz => quiz.category))];
        return categories;
    }

    submitQuizAnswers(quizId, answers) {
        const quiz = this.getQuizById(quizId);
        let score = 0;
        
        console.log('Quiz:', quiz);
        console.log('Answers:', answers);
        
        answers.forEach((answer, index) => {
            console.log(`Question ${index + 1}:`);
            console.log('User answer:', answer);
            console.log('Correct answer:', quiz.questions[index].correctAnswer);
            console.log('Question text:', quiz.questions[index].text);
            console.log('Question answers:', quiz.questions[index].answers);
            
            // Vérifier si la réponse est définie
            if (answer !== undefined && answer !== null) {
                // Convertir les réponses en nombres pour la comparaison
                const userAnswer = Number(answer);
                const correctAnswer = Number(quiz.questions[index].correctAnswer);
                
                console.log('User answer (number):', userAnswer);
                console.log('Correct answer (number):', correctAnswer);
                
                if (userAnswer === correctAnswer) {
                    score++;
                    console.log('Correct!');
                } else {
                    console.log('Incorrect!');
                }
            } else {
                console.log('No answer provided!');
            }
        });
        
        console.log('Final score:', score, 'out of', answers.length);
        
        return {
            score,
            totalQuestions: answers.length
        };
    }
} 