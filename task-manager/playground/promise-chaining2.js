require("../src/db/mongoose");
const Task = require("../src/models/task");

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("63ee61d51e1c3e26b0f1d90e")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
