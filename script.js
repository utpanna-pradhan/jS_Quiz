
//crteated array name quizData which will store questions inform of array ,each array element is having 6 objects in it.
var quizdata = 
[
    {
        //create objects => having 6 property (1 ques,4 options,1 correct ans)
       question : 'Which framework belongs to js ?',
       a : '.net',
       b : 'flask',
       c : 'react',
       d : 'django',
       correct : 'c'
    },
    {
        question : 'Which is not a programming language ?',
        a : 'html',
        b :'c',
        c : 'java',
        d : 'python',
        correct : 'a'
    },
    {
        question :'Which is not a framework ?' ,
        a:'react',
        b: 'Javascript',
        c: 'angular',
        d: 'Nextjs',
        correct:'b'
    },
    {
        question :'Which is not used for styling ?' ,
        a:'CSS',
        b: 'Bootstrap',
        c: 'TailwindCSS',
        d: 'Redux',
        correct:'d'
    },
    {
        question :'What is not true for component in Reactjs ?' ,
        a:'Components are reusable',
        b: 'They are used for styling',
        c: 'They accept props',
        d: 'Serve the same purpose as JavaScript functions',
        correct:'b'
    },
    {
        question :'Which is used for backend ?' ,
        a:'Reacctjs',
        b: 'Nextjs',
        c: 'Django',
        d: 'vuejs',
        correct:'c'
    },
    {
        question :'When setState()  is called inside render() method, which of the following events takes place ?' ,
        a:'Duplicate key error',
        b: 'Repetitive output',
        c: 'Nothing happens',
        d: 'Stackoverflow error',
        correct:'d'
    },
    {
        question :'The function which is called to render HTML to a web page in react ?' ,
        a:'render()',
        b: 'render_DOM()',
        c: 'render_HTML()',
        d: 'React_render()',
        correct:'a'
    },
    {
        question :'What are arbitrary inputs of components in react also known as ?' ,
        a:'Elements',
        b: 'props',
        c: 'key',
        d: 'attribute',
        correct:'b'
    },
    {
        question:'Total ways of defining variables in ES6 is ?',
        a: '1',
        b:'2',
        c:'3',
        d:'4',
        correct:'c'
    }

]//quiz data completed



var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')

var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn = document.getElementById('submit')


//variables are created
//first question is initially 0
var currentQuestion = 0;
//performance of quiz
var quizScore = 0;



loadQuiz()
//automatically called whenever page is loaded i.e question appears when page is loading
//whenever loadquiz is executed it will load 2nd question(i.e currentQuestion = 1) but initially question is 0
function loadQuiz(){
    //avoid deselect radio button by mistake
    deselect()

    //load question then 4 options
    question.innerHTML =quizdata[currentQuestion].question
    option_a.innerText= quizdata[currentQuestion].a
    option_b.innerText= quizdata[currentQuestion].b
    option_c.innerText = quizdata[currentQuestion].c
    option_d.innerText = quizdata[currentQuestion].d


}
function deselect(){
    //look for each answer ,check all radio button is checked or not,if it is selected then it will deselect that option
    answer.forEach(answer => answer.checked = false)
}

submitbtn.addEventListener('click', () =>{
    var selectedoption;
    answer.forEach(answer =>{
        if(answer.checked){
            selectedoption = answer.id
        }
    })
    if(selectedoption == quizdata[currentQuestion].correct)
    {
        quizScore= quizScore + 1
    }
    currentQuestion = currentQuestion + 1
    if (currentQuestion == quizdata.length){
        document.getElementById('quizdiv').innerHTML = `You have answered ${quizScore} correctly out of ${quizdata.length}`
    }
    else{
        loadQuiz()
    }
})