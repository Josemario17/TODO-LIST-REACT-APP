import { useState } from "react";

function Task(props){
    const [checked, setChecked] = useState(false)
    function CheckedListAdd(){
        checked ? setChecked(false) : setChecked(true)
        checked ? checked : props.TaskDone(props.text)
    }
    return (
        <div className="relative w-full h-12 my-2 bg-gray-300 rounded-sm px-2 flex items-center justify-between">
            <div className="w-11/12 bg flex items-center gap-2">
                <button 
                    onClick={CheckedListAdd}
                className="text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke={checked ? 'green' : 'currentColor'} className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </button>
                <input type="text" value={props.text} disabled className="w-full bg-transparent text-gray-800 outline-none" placeholder="default value"/>
           </div>
           <div>
            <button onClick={e => props.eliminar(props.SubKey) } className="w-10 text-gray-800 h-full items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </button>
           </div>
        </div>
    )
}

export default Task;