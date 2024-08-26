import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom"
import { getDataQuizz } from "../../services/apiService";
import _ from "lodash";
import "./DetailQuiz.scss"
import Question from "./Question";
const DetailQuizz = (props) => {
     const param = useParams();
     const location = useLocation();
     const [dataQuiz, setDataQuiz] = useState([])
     const [index, setIndex] = useState(0);
     let quizzId = param;

     useEffect(() => {
          fetchDataQuizz();
     }, [quizzId])
     const fetchDataQuizz = async () => {
          let res = await getDataQuizz(quizzId);
          console.log(">>>Check data quizz from axios: ", res)
          if (res && res.EC === 0) {
               let raw = res.DT;
               let data = _.chain(raw)
                    .groupBy("id")
                    .map((value, key) => {
                         let answer = [];
                         let questionDescription, image = null
                         value.forEach((item, index) => {
                              if (index === 0) {
                                   questionDescription = item.description;
                                   image = item.image
                              }
                              item.answer.isSelected = false;
                              answer.push(item.answer)
                         })
                         return { questionId: key, answer: answer, questionDescription, image }
                    })
                    .value();
               setDataQuiz(data)
          }

     }
     const handleCheckBox = (answerId, questionId) => {
          let dataQuizClone = _.cloneDeep(dataQuiz)
          let question = dataQuizClone.find(item => +item.questionId === +questionId)
          if (question && question.answers) {
               let b = question.answers.map((item, index) => {
                    if (+item.id === +answerId) {
                         item.isSelected = !item.isSelected;
                    }
               })
               question.answers = b
          }
          let index = dataQuizClone.findIndex(item => +item.questionId === +questionId)
          if (index > -1) {
               dataQuizClone[index] = question;
               setDataQuiz(dataQuizClone)
          }
     }
     //take param on URL
     const handlePrev = () => {
          if (index - 1 < 0) return;
          setIndex(index - 1)
     }
     const handleNext = () => {
          if (dataQuiz && dataQuiz.length > index + 1) {
               setIndex(index + 1)
          }
     }
     const handleFinishQuiz = () => {
          let payload = {
               quizzId: +quizzId,
               array: []
          }
          let answers = []
          if (dataQuiz && dataQuiz.length > 0) {
               dataQuiz.forEach((item, index) => {
                    let questionId = item.questionId;
                    let userAnswerId = []
                    answers.push({
                         questionId: +questionId,
                         userAnswerId: userAnswerId
                    })
               })
          }
          payload.answer = answers;
     }
     return (
          <div className="detail-quiz-container">
               <div className="left-content">
                    <div className="title">
                         Quizz 1 {location?.state.quizzTitile}
                    </div>
                    <div className="q-body">
                         <img />
                    </div>
                    <div className="q-content">
                         <Question
                              handleCheckBox={handleCheckBox}
                              data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
                         />
                    </div>
                    <div className="footer">
                         <button className="btn btn-secondary" onClick={() => handlePrev()}>Prev</button>
                         <button className="btn btn-primary" onClick={() => handleNext()}>Next</button>
                         <button className="btn btn-warning" onClick={() => handleFinishQuiz()}>Finish</button>
                    </div>
               </div>
               <div className="right-content">
                    Count down
               </div>
          </div>
     )
}
export default DetailQuizz