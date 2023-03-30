import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import axios from "axios";

const HomeScreen = () => {
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("");

  const handleGenderChange = (text) => {
    setGender(text);
  };

  const handleWeightChange = (text) => {
    setWeight(text);
  };

  const handleHeightChange = (text) => {
    setHeight(text);
  };

  const handleGoalChange = (text) => {
    setGoal(text);
  };

  const handleSubmit = () => {

      const userModification = {
          gender: gender,
          weight: weight,
          height: height
      }

      axios.put("http://localhost:9000/user/modification", userModification, {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      }).then()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Пол:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleGenderChange}
        value={gender}
      />
      <Text style={styles.label}>Вес (кг):</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleWeightChange}
        value={weight}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Рост (см):</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleHeightChange}
        value={height}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Цель:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleGoalChange}
        value={goal}
      />
      <Button title="Ввести" onPress={handleSubmit} color={"#8b00ff"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "orange",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
