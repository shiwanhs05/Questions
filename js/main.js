
const questions = document.querySelectorAll('.question');
// console.log(questions)
// questions.forEach(function(question){
//   const btn = question.querySelector('.question-btn');
//   btn.addEventListener('click', ()=>{
//     questions.forEach((que)=>{
//       if(que !== question) que.classList.remove('show-text');
//     })
//     question.classList.toggle('show-text');
//   })
// })

//traversing the dom
const btns = document.querySelectorAll('.question-btn');
btns.forEach((btn)=>{
  btn.addEventListener('click', function(e){
    const parent = e.currentTarget.parentElement.parentElement;
    questions.forEach((question)=>
    {
      if(question !== parent) question.classList.remove('show-text');
    })
    parent.classList.toggle('show-text');
  })
})