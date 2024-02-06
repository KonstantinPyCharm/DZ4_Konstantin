import './App.css';
import Modal from './components/modal/Modal';
import { useState } from 'react';
import Button from './components/button/Button';
import TodoList from './components/TodoList/TodoList';


function App() {
  const [ show, setShow ] = useState(false);
  const [ input, setInput ] = useState('');
  const [tasks, setTasks] = useState([{
    id:1 ,
    task: 'coding'
  },
    {
      id:2,
      task: 'eat'
    },
    {
      id:3,
      task: 'sleep'
    }])
  // const tasks = [
  //   {
  //     id:1 ,
  //     task: 'coding'
  //   },
  //   {
  //     id:2,
  //     task: 'eat'
  //   },
  //   {
  //     id:3,
  //     task: 'sleep'
  //   }
  // ];

  const handleShow = () => setShow(!show);

  const handleAdd = () => {
    setTasks(prev => [ ...prev, {
        id: tasks.length + 1,
        task: input
      }
      ]
    );
    console.log(tasks);
  };

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const handleDelete = (id) => {
    console.log(id);
  }
  // const a = [1,2,3]
  // const b = [4,5,6]
  // console.log([...a,...b]);

  return (
    <div>
      {
        show &&
        <Modal
          handleShow={handleShow}
          onChangeInput={onChangeInput}
          handleAdd={handleAdd}
        >

        </Modal>
      }
      <Button action={handleShow} text={'открыть'}/>
      <TodoList tasks={tasks} handleDelete={handleDelete}/>
    </div>
  );
}


export default App;
