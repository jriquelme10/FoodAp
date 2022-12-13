import { Text, StyleSheet, ShadowPropTypesIOS } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import Ticker from "react-native-ticker"; //textStyle  duration

const Timer = (props, key) => (
  <CountdownCircleTimer
    key={key}
    isPlaying={props.isPlaying}
    duration={props.duration}
    colors={["#004777", "#F7B801", "#A30000", "#000000"]}
    colorsTime={[9, 5, 2, 0]}
    // initialRemainingTime={props.initialRemainingTime}
    updateInterval={0}
    size={180}
    strokeWidth={15} //ancho relleno
    trailStrokeWidth={15} //ancho rail
    strokeLinecap="round" // "round" | "square" | "butt"
    rotation="clockwise" // "clockwise" | "counterclockwise"
    trailColor="#808080"
    isSmoothColorTransition={true}
    onComplete={() => ({
      shouldRepeat: true,
      delay: 2,
      newInitialRemainingTime: 9,
    })}
    //  onUpdate={() => console.log("tick")}
  >
    {({ remainingTime, color }) => (
      /**<Text style={{ color, fontSize: 30 }}>{remainingTime}</Text>)}*/
      <Ticker textStyle={styles.number} duration={500}>
        {remainingTime}
      </Ticker>
    )}
  </CountdownCircleTimer>
);

function alerta() {
  alert("se acabo el tiempo");
}

const styles = StyleSheet.create({
  number: {
    fontSize: 40,
  },
});

export default Timer;

//Ticker
