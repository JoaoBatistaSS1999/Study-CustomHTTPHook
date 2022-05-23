import classes from "./TaskItem.module.css";

const TaskItem = ({ children }) => {
  return <li className={classes.task}>{children}</li>;
};

export default TaskItem;
