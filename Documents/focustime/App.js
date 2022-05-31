import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { FocusHistory } from './src/features/focus/FocusHistory';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Timer } from './src/features/timer/Timer';
import { colors } from './src/utils/color';
import { spacing } from './src/utils/sizes';

const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2,
};

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }]); //FocusHistory 
  };

  //De aca para abajo se añade guardado y cargado usando asnc storage
  //

  const saveFocusHistory = async () => {
    try{
     await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch(e) {
      console.log(e);
    }
  }

  const loadFocusHistory = async () => {
    try{
      const history = await AsyncStorage.getItem(focusHistory);

      if(history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    } catch(e){
      console.log(e);
    }
  }

  //Arreglar esta parte

  useEffect(() => {
    loadFocusHistory();
  }, []) ///Todo se puede meter aca

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory])

  const onClear = () => {
    setFocusHistory([]);
  };



  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistorySubjectWithState(focusSubject, STATUSES.COMPLETE);
            setFocusSubject(null); //Cambiar este valor
          }}
          clearSubject={() => {
            addFocusHistorySubjectWithState(focusSubject, STATUSES.CANCELLED);
            setFocusSubject(null); //Cambiar este valor
          }}
        />
      ) : (
        <View style={{flex: 0.5}}>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory focusHistory={focusHistory} onClear={onClear}/>
        </View>
      )}
      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
    backgroundColor: colors.darkBlue,
  }
});
