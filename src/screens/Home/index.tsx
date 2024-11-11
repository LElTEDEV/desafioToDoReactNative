import {
  Image,
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Task } from "@/src/components/Task";

type TasksProps = {
  name: string;
  concluida: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  const [newTask, setNewTask] = useState("");

  const tasksConcluidasAmount =
    tasks.length > 0 ? tasks.filter((task) => task.concluida === true) : [];

  function setTaskWithConcluida(task: TasksProps) {
    const taskAtt = { ...task, concluida: !task.concluida };
    const tasksNew = tasks.filter((atual) => atual.name !== task.name);

    setTasks(() => [...tasksNew, taskAtt]);
  }

  function handleAddNewTask() {
    if (newTask.length <= 0) {
      return;
    }

    const taskCreated = { name: newTask, concluida: false };

    const taskExists = tasks.find((task) => task.name === taskCreated.name);

    if (taskExists) {
      return Alert.alert("Já existe", "Essa tarefa já existe!");
    }

    setTasks((atual) => [...atual, taskCreated]);
    setNewTask("");
  }

  function deleteTask(task: TasksProps) {
    setTasks((atual) => atual.filter((tasks) => tasks !== task));
  }

  return (
    <>
      <View style={styles.header}>
        <Image source={require("../../../assets/Logo.png")} />
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          style={styles.inputNewTask}
          value={newTask}
          onChangeText={setNewTask}
        />
        <Pressable
          style={styles.containerButtonAddTask}
          onPress={handleAddNewTask}
        >
          <Text style={styles.textButton}>+</Text>
        </Pressable>
      </View>

      <View style={styles.containerTasks}>
        <View style={styles.infosTasks}>
          <View style={styles.containerInfo}>
            <Text style={styles.textInfoCriada}>Criadas</Text>
            <Text style={styles.textAmountInfo}>{tasks.length}</Text>
          </View>

          <View style={styles.containerInfo}>
            <Text style={styles.textInfoConcluida}>Concluídas</Text>
            <Text style={styles.textAmountInfo}>
              {tasksConcluidasAmount.length}
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        style={{ width: "90%", alignSelf: "center" }}
        data={tasks}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Task
            item={item}
            setTaskWithConcluida={setTaskWithConcluida}
            deleteTask={deleteTask}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.empytTasks}>
            <Image source={require("../../../assets/Clipboard.png")} />
            <Text style={styles.textPrimaryEmpty}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.textSecondaryEmpty}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </>
  );
}
