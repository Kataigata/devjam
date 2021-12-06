import mongoose, { Model } from "mongoose";

const { DATABASE_URL } = process.env;

export const connect = async () => {
  const connection = await mongoose
    .connect(
      "mongodb+srv://DogToDo:Test1234@dogtodo.fpzjh.mongodb.net/todoDB?retryWrites=true&w=majority"
    )
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");

  const TodoSchema = new mongoose.Schema({
    item: String,
    completed: Boolean,
  });

  const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

  return { connection, Todo };
};
