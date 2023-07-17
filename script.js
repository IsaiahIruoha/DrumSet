import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";
import * as bootstrap from "https://cdn.skypack.dev/bootstrap@5.2.3";

const App = () => {
  const [power, setPower] = React.useState(false);
  const [volume, setVolume] = React.useState(50);
  const [output, setOutput] = React.useState("");

  const handleVolumeOutput = event => {
    setOutput(event.target.value);
  };
  const handleDrumOutput = drum => {
    setOutput(drum);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (output === volume) {
        setOutput("");
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [output, volume]);

  return /*#__PURE__*/(
    React.createElement("div", { className: "container", id: "app-box" }, /*#__PURE__*/
    React.createElement("div", { className: "row justify-content-around p-5" }, /*#__PURE__*/
    React.createElement("div", { className: "col-7 buttonBox d-flex flex-column" }, /*#__PURE__*/
    React.createElement(DrumButtons, {
      handleDrumOutput: handleDrumOutput,
      volume: volume,
      power: power })), /*#__PURE__*/


    React.createElement("div", { className: "col-4 controlBox" }, /*#__PURE__*/
    React.createElement(OutputBox, { output: output }), /*#__PURE__*/
    React.createElement(ToggleBar, { power: power, setPower: setPower }), /*#__PURE__*/
    React.createElement(SliderBar, {
      setVolume: setVolume,
      power: power,
      handleVolumeOutput: handleVolumeOutput })))));





};

const DrumButtons = props => {
  const playClip = audioID => {
    document.getElementById(audioID).play();
  };
  for (let audio of document.getElementsByTagName("audio")) {
    audio.volume = props.volume / 100;
  }
  const handleClick = (audioID, drumID) => {
    props.handleDrumOutput(drumID);
    playClip(audioID);
  };

  React.useEffect(() => {
    const handleKeyPress = event => {
      for (let button of document.getElementsByTagName("button")) {
        if (
        event.key === button.querySelector("audio").id.toLowerCase() ||
        event.key === button.querySelector("audio").id)
        {
          handleClick(button.querySelector("audio").id.toUpperCase(), button.id.replace(/-/g, " "));
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "row my-3 buttonRow" }, /*#__PURE__*/
    React.createElement("div", { className: "col d-flex justify-content-center" }, /*#__PURE__*/
    React.createElement("button", {
      className: "drum-pad btn btn-primary d-flex align-items-center justify-content-center",
      id: "Heater-1",
      onClick: () => handleClick("Q", "Heater 1"),
      disabled: !props.power }, "Q", /*#__PURE__*/


    React.createElement("audio", {
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      class: "clip",
      id: "Q" }))), /*#__PURE__*/



    React.createElement("div", { className: "col d-flex justify-content-center" }, /*#__PURE__*/
    React.createElement("button", {
      className: "drum-pad btn btn-primary d-flex align-items-center justify-content-center",
      id: "Heater-2",
      onClick: () => handleClick("W", "Heater 2"),
      disabled: !props.power }, "W", /*#__PURE__*/


    React.createElement("audio", {
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      class: "clip",
      id: "W" }))), /*#__PURE__*/



    React.createElement("div", { className: "col d-flex justify-content-center" }, /*#__PURE__*/
    React.createElement("button", {
      className: "drum-pad btn btn-primary d-flex align-items-center justify-content-center",
      id: "Heater-3",
      onClick: () => handleClick("E", "Heater 3"),
      disabled: !props.power }, "E", /*#__PURE__*/


    React.createElement("audio", {
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      class: "clip",
      id: "E" })))), /*#__PURE__*/




    React.createElement("div", { className: "row my-3 buttonRow" }, /*#__PURE__*/
    React.createElement("div", { className: "col d-flex justify-content-center" }, /*#__PURE__*/
    React.createElement("button", {
      className: "drum-pad btn btn-primary d-flex align-items-center justify-content-center",
      id: "Heater-4",
      onClick: () => handleClick("A", "Heater 4"),
      disabled: !props.power }, "A", /*#__PURE__*/


    React.createElement("audio", {
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      class: "clip",
      id: "A" }))), /*#__PURE__*/



    React.createElement("div", { className: "col d-flex justify-content-center" }, /*#__PURE__*/
    React.createElement("button", {
      className: "drum-pad btn btn-primary d-flex align-items-center justify-content-center",
      id: "Clap",
      onClick: () => handleClick("S", "Clap"),
      disabled: !props.power }, "S", /*#__PURE__*/


    React.createElement("audio", {
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      class: "clip",
      id: "S" }))), /*#__PURE__*/



    React.createElement("div", { className: "col d-flex justify-content-center" }, /*#__PURE__*/
    React.createElement("button", {
      className: "drum-pad btn btn-primary d-flex align-items-center justify-content-center",
      id: "Open-HH",
      onClick: () => handleClick("D", "Open HH"),
      disabled: !props.power }, "D", /*#__PURE__*/


    React.createElement("audio", {
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      class: "clip",
      id: "D" })))), /*#__PURE__*/




    React.createElement("div", { className: "row my-3 buttonRow" }, /*#__PURE__*/
    React.createElement("div", { className: "col d-flex justify-content-center" }, /*#__PURE__*/
    React.createElement("button", {
      className: "drum-pad btn btn-primary d-flex align-items-center justify-content-center",
      id: "Kick-n'-Hat",
      onClick: () => handleClick("Z", "Kick n' Hat"),
      disabled: !props.power }, "Z", /*#__PURE__*/


    React.createElement("audio", {
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      class: "clip",
      id: "Z" }))), /*#__PURE__*/



    React.createElement("div", { className: "col d-flex justify-content-center" }, /*#__PURE__*/
    React.createElement("button", {
      className: "drum-pad btn btn-primary d-flex align-items-center justify-content-center",
      id: "Kick",
      onClick: () => handleClick("X", "Kick"),
      disabled: !props.power }, "X", /*#__PURE__*/


    React.createElement("audio", {
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      class: "clip",
      id: "X" }))), /*#__PURE__*/



    React.createElement("div", { className: "col d-flex justify-content-center" }, /*#__PURE__*/
    React.createElement("button", {
      className: "drum-pad btn btn-primary d-flex align-items-center justify-content-center",
      id: "Closed-HH",
      onClick: () => handleClick("C", "Closed HH"),
      disabled: !props.power }, "C", /*#__PURE__*/


    React.createElement("audio", {
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      class: "clip",
      id: "C" }))))));






};
const OutputBox = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "row my-3" }, /*#__PURE__*/
    React.createElement("div", { className: "col d-flex justify-content-center" }, /*#__PURE__*/
    React.createElement("div", { className: "outputScreen", id: "display" }, /*#__PURE__*/
    React.createElement("p", null, props.output)))));




};
const ToggleBar = props => {
  const handlePower = () => {
    props.setPower(!props.power);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "row my-4" }, /*#__PURE__*/
    React.createElement("div", { className: "col d-flex justify-content-center" }, /*#__PURE__*/
    React.createElement("div", { class: "form-check form-switch" }, /*#__PURE__*/
    React.createElement("input", {
      class: "form-check-input",
      type: "checkbox",
      id: "powerSwitch",
      onChange: handlePower }), /*#__PURE__*/

    React.createElement("label", { class: "form-check-label", for: "powerSwitch" }, /*#__PURE__*/
    React.createElement("p", null, props.power ? "Power ON" : "Power OFF"))))));





};
const SliderBar = props => {
  const handleChange = event => {
    props.setVolume(event.target.value);
    props.handleVolumeOutput(event);
  };
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "row my-3" }, /*#__PURE__*/
    React.createElement("div", { className: "col d-flex justify-content-around flex-column" }, /*#__PURE__*/
    React.createElement("label", { for: "volumeRange", class: "volume" }, "Adjust Volume"), /*#__PURE__*/


    React.createElement("input", {
      type: "range",
      min: "0",
      max: "100",
      class: "form-range",
      id: "volumeRange",
      onChange: handleChange }))), /*#__PURE__*/



    React.createElement("div", { className: "row my-3" }, /*#__PURE__*/
    React.createElement("div", { className: "col d-flex justify-content-center" }, /*#__PURE__*/
    React.createElement("svg", { viewBox: "0 0 512 512", width: "100", title: "drum" }, /*#__PURE__*/
    React.createElement("path", {
      fill: !props.power ? "#5A5A5A" : "#0d6efd",
      d: "M431.34 122.05l73.53-47.42a16 16 0 0 0 4.44-22.19l-8.87-13.31a16 16 0 0 0-22.19-4.44l-110.06 71C318.43 96.91 271.22 96 256 96 219.55 96 0 100.55 0 208.15v160.23c0 30.27 27.5 57.68 72 77.86v-101.9a24 24 0 1 1 48 0v118.93c33.05 9.11 71.07 15.06 112 16.73V376.39a24 24 0 1 1 48 0V480c40.93-1.67 78.95-7.62 112-16.73V344.34a24 24 0 1 1 48 0v101.9c44.5-20.18 72-47.59 72-77.86V208.15c0-43.32-35.76-69.76-80.66-86.1zM256 272.24c-114.88 0-208-28.69-208-64.09s93.12-64.08 208-64.08c17.15 0 33.73.71 49.68 1.91l-72.81 47a16 16 0 0 0-4.43 22.19l8.87 13.31a16 16 0 0 0 22.19 4.44l118.64-76.52C430.09 168 464 186.84 464 208.15c0 35.4-93.13 64.09-208 64.09z" }))))));






};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("drum-machine"));