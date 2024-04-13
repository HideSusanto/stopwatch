import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const StopwatchApp: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);
  const [lapButtonDisabled, setLapButtonDisabled] = useState(true);
  const [laporreset, setLaporreset] = useState(true);

  const [count, setCount] = useState(1);

  let interval: NodeJS.Timeout | null = null;

  useEffect(() => {
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 0.1);
      }, 100);
      setLapButtonDisabled(false); // Khi đang chạy, cho phép nhấn nút lap
    } else {
      if (interval) clearInterval(interval);
      setLapButtonDisabled(false); // Khi dừng, vô hiệu hóa nút lap
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
    if (!isRunning) {
      //setCount(1)
      //setLaps([]);
      setLapButtonDisabled(false);
      setLaporreset(false);
    }
  };

  const handleLapReset = () => {
    if (isRunning) {
      setCount(count+1);
      setLaps(prevLaps => [ elapsedTime, ...prevLaps]);
    } else {
      setCount(1);
      setElapsedTime(0);
      setLaps([]);
      setLaporreset(true);
    }
  };

  const formatTime = (timeInSeconds: number): string => {
    const pad = (n: number, z: number = 2): string => ('00' + n).slice(-z);
    const milliseconds = Math.floor((timeInSeconds % 1) * 1000);
    timeInSeconds = Math.floor(timeInSeconds);
    const seconds = Math.floor(timeInSeconds % 60);
    const minutes = Math.floor((timeInSeconds / 60) % 60);
    return `${pad(minutes)}:${pad(seconds)},${pad(milliseconds, 3)}`.slice(0, -1);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.time, {alignSelf: 'center'}]}>{formatTime(elapsedTime)}</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={[styles.button, lapButtonDisabled || laporreset ? styles.disabledButton : null]}
          onPress={handleLapReset}
          disabled={lapButtonDisabled || laporreset}>
          <Text style={[styles.buttonText, lapButtonDisabled ? styles.disabledText : null]}>
            {isRunning || laporreset ? 'Lap' : 'Reset'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isRunning ? styles.stopButton : styles.startButton]}
          onPress={handleStartStop}>
          <Text style={isRunning ? styles.stopText : styles.startText}>{isRunning ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>
        
      </View>
      <View style={[styles.lapContainer]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
            <Text style={[styles.lapText]}>Lap {count}:</Text>
            </View>
            <View>
            <Text style={styles.lapText}> {formatTime(elapsedTime)}</Text>
            </View>
          </View>
        {laps.map((lap, index) => (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.lapText} key={index}>Lap {index + 1}:</Text><Text style={styles.lapText}> {formatTime(lap)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#474540',
  },
  time: {
    fontSize: 48,
    color: '#fff'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between'
  },
  button: {
    marginHorizontal: 10,
    padding: 30,
    backgroundColor: '#rgba(52, 52, 52, 0.1)',
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  startButton: {
    backgroundColor: '#0a6117',
    opacity: 0.6
  },
  stopButton: {
    backgroundColor: '#dc3545',
    opacity: 0.6,
  },
  startText: {
    color: '#38e852',
    fontSize: 18,
  },
  stopText: {
    color: 'red',
    fontSize: 18,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  disabledText: {
    color: '#999',
  },
  lapContainer: {
    marginTop: 20,
    
  },
  lapText: {
    marginHorizontal: 10,
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
});

export default StopwatchApp;
