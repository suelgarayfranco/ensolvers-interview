import ToDoList from './components/ToDoList'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TaskEditor from './components/TaskEditor';
import FoldersList from './components/FoldersList';
import './App.css'

function App() {

  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={FoldersList}/>
        <Route path="/:id" exact component={ToDoList}/>
        <Route path="/:folder/edit/:task" component={TaskEditor}/>
      </div>
    </Router>
  )
}

export default App;
