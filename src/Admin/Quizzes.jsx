import React, { useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteQuestionRequest, fetchQuestionRequest } from '../store/questions/questionAction'
import { FaRegEye } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import ViewQuestionModel from '../Components/ViewQuestionModel';
import AddQuestionModel from '../Components/AddQuestionModel';
import UpdateQuestionModel from '../Components/UpdateQuestionModel';
import Sidebar from '../Components/Sidebar';
import Header from '../components/Header';

const Quizzes = () => {

  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [viewQuestionModel, setViewQuestionModel] = useState(false)
  const [addQuestionModel, setAddQuestionModel] = useState(false)
  const [updateQuestionModel, setUpdateQuestionModel] = useState(false)

  const questions = useSelector((state) => state.questions.questions)
  const dispatch = useDispatch()

  const handleViewQuestionModel = (question) => {
    setSelectedQuestion(question)
    setViewQuestionModel(!viewQuestionModel)
  }

  const handleDelete = (id) => {
    console.log(id)
    if (confirm("Are you sure want to delete this question ?")) {
      dispatch(deleteQuestionRequest(id))
    }
  }

  const handleUpdateQuestionModel = (question) => {
    setSelectedQuestion(question)
    console.log(selectedQuestion)
    setUpdateQuestionModel(!updateQuestionModel)
  }

  useEffect(() => {
    dispatch(fetchQuestionRequest())
  }, [dispatch])

  return (
    <>
      <Header/>

      <div class="admin-main-container">
        <Sidebar />

        <section class="right-sidebar main-content">
          <div class="title">
            <h1>All Quiz Questions</h1>
          </div>
          <button id="add-new-question-btn" onClick={() => setAddQuestionModel(true)}>Add new Question</button>
          <table class="table" id="question-table">
            <tr>
              <th>Sr.No</th>
              <th>Questions</th>
              <th>Actions</th>
            </tr>

            {
              questions?.map((question, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{question.question}</td>
                  <td >
                    <FaRegEye style={{ marginRight: "10px", color: "blue", cursor: "pointer" }} onClick={() => handleViewQuestionModel(question)}/>
                    <FaPen style={{ marginRight: "10px", color: "purple", cursor: "pointer" }} onClick={() => handleUpdateQuestionModel(question)} />
                    <FaTrashCan style={{ color: "red", cursor: "pointer" }} onClick={() => handleDelete(question.id)} />
                  </td>
                </tr>
              ))
            }


          </table>
        </section>
      </div>

      {
        viewQuestionModel && <ViewQuestionModel question={selectedQuestion} setViewQuestionModel={setViewQuestionModel} />
      }
      {
        addQuestionModel && <AddQuestionModel setAddQuestionModel={setAddQuestionModel} />
      }
      {
        updateQuestionModel && <UpdateQuestionModel selectedQuestion={selectedQuestion} setUpdateQuestionModel={setUpdateQuestionModel} />
      }

    </>
  )
}

export default Quizzes;