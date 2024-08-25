import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiService";
import { useNavigate } from "react-router-dom";
import './ListQuizz.scss'
const ListQuizs = (props) => {
     const [arrQuiz, setArrQuiz] = useState([]);
     const navigate = useNavigate();
     useEffect(() => {
          getQuizData();
     }, []);

     const getQuizData = async () => {
          try {
               let data = await getQuizByUser();
               console.log("API Response: ", data); // Debug log
               if (data && data.EC === 0) {
                    console.log("Quizzes Data: ", data.DT); // Debug log
                    setArrQuiz(data.DT);
               } else {
                    console.error('Error fetching quizzes', data);
               }
          } catch (error) {
               console.error('An error occurred:', error);
          }
     };

     return (
          <div className="list-quiz-container container">
               {arrQuiz && arrQuiz.length > 0 ? (
                    arrQuiz.map((item, index) => (
                         <div className="card" style={{ width: '18rem' }} key={item.id}>
                              <img src={`data:image/jpeg;base64,${item.image}` || "default_image_url"} className="card-img-top" alt="Quiz" />
                              <div className="card-body">
                                   <h5 className="card-title">Quizz Test - {index + 1}</h5>
                                   <p className="card-text">{item.description}</p>
                                   <button className="btn btn-primary" onClick={() => navigate(`/quizz/${item.id}`, { state: { quizzTitile: item.description } })}>Start Now!</button>
                              </div>
                         </div>
                    ))
               ) : (
                    <p>No quizzes available.</p>
               )}
          </div>
     );
};

export default ListQuizs;
