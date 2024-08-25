import _ from 'lodash';
const Question = (props) => {
     let { data, index } = props
     if (_.isEmpty(data)) {
          return
          <>
               <div>Not data!</div>
          </>
     }
     return (
          <>
               <div className='q-image'>
                    <img src={`data:image/jpeg;base64,${data.image}`} />
               </div>
               <div className="question">Question {index + 1}:{data.questionDescription} ?</div>
               <div className="answer">
                    {data.answers && data.answers.length &&
                         data.answer.map((item, index) => {
                              return (
                                   <div className="a-child" key={item.id}>
                                        <div class="form-check">
                                             <input
                                                  class="form-check-input"
                                                  type="checkbox" value=""
                                                  id="flexCheckDefault" />
                                             <label class="form-check-label" for="flexCheckDefault">
                                                  {item.description}
                                             </label>
                                        </div>
                                   </div>
                              )
                         })
                    }
               </div>
          </>
     )
}
export default Question