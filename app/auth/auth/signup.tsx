import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type SignupNavigation = NavigationProp<ParamListBase>;

const Signup = ({ navigation }: { navigation: SignupNavigation }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Create account</Text>
        <Text style={styles.regularText}>Connect with your friend today!</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={[styles.checkbox, { borderColor: Colors.primary[500] }]} onPress={() => setIsChecked(!isChecked)}>
          {/* Your checkbox component */}
        </TouchableOpacity>
        <Text style={styles.regularText}>I agree to the terms and conditions</Text>
      </View>

      {/* Other components using styles */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 22,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 12,
    color: Colors.light.text,
  },
  regularText: {
    fontSize: 16,
    color: Colors.light.text,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: Colors.primary[500], // Use Colors.primary for borderColor
    marginRight: 8,
  },
});

export default Signup;
