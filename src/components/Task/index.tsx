import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type ItemProps = {
  name: string;
  concluida: boolean;
};

type Item = {
  item: ItemProps;
  setTaskWithConcluida: (task: ItemProps) => void;
  deleteTask: (task: ItemProps) => void;
};

export function Task({ item, setTaskWithConcluida, deleteTask }: Item) {
  function handleClickTask(task: ItemProps) {
    setTaskWithConcluida(task);
  }

  function handleClickDeleteTask(task: ItemProps) {
    deleteTask(task);
  }

  return (
    <>
      <Pressable
        style={styles.containerTask}
        onPress={() => handleClickTask(item)}
      >
        <Image
          source={
            item.concluida
              ? require("../../../assets/checked.png")
              : require("../../../assets/check.png")
          }
        />
        <Text
          style={item.concluida ? styles.textTaskConcluida : styles.textTaskNew}
        >
          {" "}
          {item.name}{" "}
        </Text>
        <Pressable onPress={() => handleClickDeleteTask(item)}>
          <Image
            style={{ width: 38, height: 38 }}
            source={require("../../../assets/trash.png")}
          />
        </Pressable>
      </Pressable>
    </>
  );
}
