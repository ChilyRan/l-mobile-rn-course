import { View, StyleSheet, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        //for android
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        //for ios
        style={({ presed }) => presed && styles.pressedItem}
      >
        {/* {console.log("props", props)} */}
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#ffff",
  },
  pressedItem:{
    opacity: 0.5
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
