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
                              answer.push(item.answer)
                         })
                         return { questionId: key, answer: answer, questionDescription, image }
                    })
                    .value();
               setDataQuiz(data)
          }

     }
     //take param on URL
     console.log(">>>Check param: ", param);
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
                         <Question data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []} />
                    </div>
                    <div className="footer">
                         <button className="btn btn-secondary">Prev</button>
                         <button className="btn btn-primary">Next</button>
                    </div>
               </div>
               <div className="right-content">
                    Count down
               </div>
          </div>
     )
}
export default DetailQuizz