import app from './app';
import addUserToTask from './endpoints/addUserToTask';
import changeTaskStatus from './endpoints/changeTaskStatus';
import changeUserNickname from './endpoints/changeUserNickname';
import deleteTaskById from './endpoints/deleteTaskById';
import getTasks from './endpoints/getTasks';
import getUsers from './endpoints/getUsers';
import getUsersToTask from './endpoints/getUsersToTask';
import test from './endpoints/test';


app.get("/test", test);


app.get("/users", getUsers);
app.get("/tasks", getTasks);
app.get("/tasks/:taskId/users", getUsersToTask);

app.post("/tasks/:taskId/users", addUserToTask);

app.put("/users/:userId", changeUserNickname);
app.put("/tasks/:taskId", changeTaskStatus);

app.delete("/tasks/:taskId", deleteTaskById);
