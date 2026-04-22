import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';
import Props from './Component/Props';
import State from './Component/State';
import EventHandler from './Component/EventHandler';
import ConditionalRending from './Component/ConditionalRendering';
import ListRendering from './Component/ListRendering';
import Style from './Component/style/Style';
import CompA from './Component/ComponentLifeCycle/CompA';
import Fragment from './Component/Fragments/Fregment';
import PureCom from './Component/Pure&UnpureComponent/PureCom';
import ParentComforPureom from './Component/Pure&UnpureComponent/ParentComForPureComponent';
import RefClassCom from './Component/Ref/RefClassCom';
import RefFuctionalCom from './Component/Ref/RefFuctionalCom';
import Get from './Component/HTTP-Request/Get';
import Post from './Component/HTTP-Request/Post';
import LoginWithUseState from './Component/Hooks/UseState/LoginWithUseState';
import DataFetchingUseEffect from './Component/Hooks/UseEffect/DataFetchingUseEffect';

function App() {
  return (
    <div className="App">
      {/* props */}
      {/* <Props name="Ganesh" age="25" deg="FrontEnd Developer" salary="50000"/> */}

      {/* state */}
      {/* <State /> */}

      {/* event handler */}
      {/* <EventHandler /> */}

      {/* conditional rendering */}
      {/* <ConditionalRending /> */}

      {/* list rendering */}
      {/* <ListRendering/> */}

      {/* css styling */}
      {/* <Style /> */}

      {/* component life cycle */}
      {/* <CompA /> */}

      {/* fragment */}
      {/* <Fragment /> */}

      {/* pure and unpure component */}
      {/* <PureCom/> 
      <ParentComforPureom/>      */}

      {/* ref : reference */}
      {/* <RefClassCom />
      <RefFuctionalCom /> */}

      {/* HTTP Request */}
      {/* <Get />
      <Post /> */}
      {/* --------------------------------------------------------------------------------------------------- */}

      {/* Hooks */}
      {/* <LoginWithUseState /> */}
      <DataFetchingUseEffect/>

    </div>
  );
}

export default App;
