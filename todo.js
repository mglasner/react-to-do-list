function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return (
      <li className="list-group-item" >{todo.text}&nbsp;
        <span>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={handle}>
              🗑️
          </button>
        </span>
      </li>
  )
}
