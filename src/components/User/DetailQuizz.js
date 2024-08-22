import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getDataQuizz } from "../../services/apiService";
import _ from "lodash";
const DetailQuizz = (props) => {
     const param = useParams();
     const quizzId = param;

     useEffect(() => {
          fetchDataQuizz();
     }, [quizzId])
     const fetchDataQuizz = async () => {
          let res = await getDataQuizz(quizzId);
          console.log(">>>Check data quizz from axios: ", res)
          if (res && res.EC === 0) {
               let raw = res.DT;
               _.chain(raw)
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
          }

     }
     //take param on URL
     console.log(">>>Check param: ", param);
     return (
          <div>
               Detail1
          </div>
     )
}
export default DetailQuizz