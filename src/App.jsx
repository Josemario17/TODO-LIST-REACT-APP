import Task from './Task'
import { useEffect, useState } from 'react'

function App() {
  const [list, setList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const tarefasStorage = sessionStorage.getItem('list');
    if (tarefasStorage) {
      setList(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  function addNewTask(e) {
    e.preventDefault();
    if (text.trim() === '') return;
    setList([...list, text]);
    setText('');
  }

  function eliminar(index) {
    setList(list.filter((item, i) => i !== index));
  }

  function TaskDone(index) {
    const task = list[index];
    setDoneList([...doneList, task]);
    eliminar(index);
  }

  return (
    <>
      <div className='w-screen h-screen flex items-start pt-32'>
        <div className='w-2/3 sm-w-1/2 lg:w-2/6 h-auto flex items-start justify-center flex-wrap mx-auto'>
          <form onSubmit={addNewTask} className='relative w-full h-12 bg-gray-900 border-l-4 border-emerald-600 px-2 flex items-center'>
            <input
              type="text"
              placeholder='Adicione um novo item'
              className='w-96 h-full bg-transparent outline-none pl-2'
              onChange={e => setText(e.target.value)}
              value={text}
              required
            />
            <button type='submit' className='text-emerald-300 duration-500 hover:text-emerald-600'>Adicionar</button>
          </form>
          <div className='relative w-full h-auto grid'>
            {list.map((item, index) => (
              <Task key={index} SubKey={index} text={item} eliminar={() => eliminar(index)} TaskDone={() => TaskDone(index)} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
