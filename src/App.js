import './App.css';
import Address from './practiceComponent/Address';
import Age from './practiceComponent/Age';
import Details from './practiceComponent/Details';
import Name from './practiceComponent/Name';
import "./practiceComponent/All.css"
import Details2 from './practiceComponent/Details2';
import College from './practiceComponent/College';
import LearnTernary from './practiceComponent/LearnTernary';
import EffectOnDifferentData from './practiceComponent/EffectOnDifferentData';
import LearnMap1 from './practiceComponent/LearnMap1';
import Location from './practiceComponent/Location';
import LearnMap2 from './practiceComponent/LearnMap2';
import ButtonClick from './practiceComponent/ButtonClick';
import LearnUseStateHook1 from './practiceComponent/learnUseStateHook/LearnUseStateHook1';
import LearnUseState2 from './practiceComponent/learnUseStateHook/LearnUseState2';
import LearnUseState3 from './practiceComponent/learnUseStateHook/LearnUseState3';
import LearnUseState4 from './practiceComponent/learnUseStateHook/LearnUseState4';
import IncrementByChoice from './practiceComponent/learnUseStateHook/IncrementByChoice';
import AppComponent from './practiceComponent/AppComponent';
import Toggle from './practiceComponent/learnUseStateHook/Toggle';
import WhyUseState from './practiceComponent/learnUseStateHook/WhyUseState';
import Increment from './practiceComponent/learnUseStateHook/Increment';
import LearnUseEffectHook from './practiceComponent/LearnUseEffectHook/LearnUseEffectHook';
import LearnCleanUpFunction from './practiceComponent/LearnUseEffectHook/LearnCleanUpFunction';
import { createContext, useState } from 'react';
import MyLinks from './practiceComponent/MyLinks';
import MyRoutes from './practiceComponent/MyRoutes';
import Form1 from './practiceComponent/Form/Form1';
import Form2 from './practiceComponent/Form/Form2';
import NestingRoute from './practiceComponent/LearnRouting/NestingRoute';
import Form3 from './practiceComponent/Form/Form3';
import Learn1UseRefHook from './practiceComponent/LearnUseRefHook/Learn1UseRefHook';
import AddDataToLocalStorage from './practiceComponent/LocalStorage/AddDataToLocalStorage';
import GetLocalStorageData from './practiceComponent/LocalStorage/GetLocalStorageData';
import RemoveLocalStorageData from './practiceComponent/LocalStorage/RemoveLocalStorageData';
import AddDataToSessionStorage from './practiceComponent/LearnSessionStorage/AddDataToSessionStorage';
import GetDataOfSessionData from './practiceComponent/LearnSessionStorage/GetDataOfSessionData';
import RemoveDataFromSessionStorage from './practiceComponent/LearnSessionStorage/RemoveDataFromSessionStorage';
import Parent from './practiceComponent/LearnPropDrilling/Parent';

export let context1 = createContext();
export let context2 = createContext();
function App() {

  let [show, setShow] = useState(false)
  let [name, setName] = useState("Suman")
  let [age, setAge] = useState(23)
  let [address, setAddress] = useState("Kathmandu")
  let a = <p>I am a Student.</p>
  // let name = "Suman"
  /* let age = 23

  console.log(age) */
  return (
    <div>
      {/* <a href="https://www.youtube.com/" target=' '>Youtube</a>

      <p style={{color: 'blue', backgroundColor: 'brown'}}>This is a paragraph.</p>
      
      <h1 style={{color: 'brown',backgroundColor: 'whitesmoke'}}>This is the logo192</h1>

      <img src="./logo192.png" />
  <div className='success'>This is div.</div> */}
     {/*  <Name></Name>
      <Age></Age>
      <Address></Address>
      <Details name="Suman Karki" address="Kathmandu" age={23}></Details>
      <Details2 name="Suman Karki" age={23} address="Kathmandu"></Details2>
      <College name="Patan Multiple campus" address="patandhoka"></College>
      <LearnTernary></LearnTernary>
      <EffectOnDifferentData></EffectOnDifferentData>
      {/* country, province, district, exactLocation */}
     {/*  <Location country="Nepal" province="Bagmati" district="Kathmandu" exactLocation="Baluwatar-4"></Location> */} 
      {/* <LearnMap1></LearnMap1> */}
      {/* <LearnMap2></LearnMap2> */}
      {/* <ButtonClick></ButtonClick>
      <LearnUseStateHook1></LearnUseStateHook1>
      <LearnUseState2></LearnUseState2> */}
      {/* <LearnUseState3></LearnUseState3> */}
      {/* <LearnUseState4></LearnUseState4> */}
      {/* <Name></Name> */}
      {/* <IncrementByChoice></IncrementByChoice>
      <AppComponent></AppComponent>
      <Toggle></Toggle>
      <WhyUseState></WhyUseState>
      <Increment></Increment> */}
      {/* <LearnUseEffectHook></LearnUseEffectHook> */}
     {/*  {show?<LearnCleanUpFunction></LearnCleanUpFunction>:null}
      
      <button onClick={(e)=>{setShow(false)}}>Hide</button>
      <button onClick={(e)=>{setShow(true)}}>Show</button> */}

    {/* <MyLinks></MyLinks>
    <MyRoutes></MyRoutes> */}
  
      {/* <Form1></Form1> */}
      {/* <Form2></Form2> */}
      {/* <NestingRoute></NestingRoute> */}
      {/* <Form3></Form3> */}
      {/* <Learn1UseRefHook></Learn1UseRefHook> */}
      {/* <AddDataToLocalStorage></AddDataToLocalStorage> */}
      {/* <GetLocalStorageData></GetLocalStorageData> */}
      {/* <RemoveLocalStorageData></RemoveLocalStorageData> */}
      {/* <AddDataToSessionStorage></AddDataToSessionStorage> */}

      {/* <GetDataOfSessionData></GetDataOfSessionData> */}
      {/* <RemoveDataFromSessionStorage></RemoveDataFromSessionStorage> */}
      
      <context1.Provider value = {{name: name, age: age, setName: setName, setAge: setAge}}>
      <context2.Provider value = {address}>
      <div>
      <Parent></Parent>
      </div>
      </context2.Provider>
      </context1.Provider>

    </div>
  );
}

export default App;
