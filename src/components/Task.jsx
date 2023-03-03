const Task = ({ name, edit, deleteUser }) => {
  return (
    <div className="px-5 py-3 rounded-md flex border border-gray-200 pb-2 justify-between">
      <h1 className="text-gray-700 font-medium capitalize text-sm">{name}</h1>
      <div className="flex gap-2">
        <img onClick={edit} className="cursor-pointer" src={"/edit.svg"} />
        <img
          onClick={deleteUser}
          className="cursor-pointer"
          src={"/remove.svg"}
        />
      </div>
    </div>
  );
};

export default Task;
