import React, { useState } from 'react';
import './App.css';
import { Button, List } from 'antd';
import { trackEvent } from './analytics';

function App() {
  const [actionList, setActionList] = useState([]);
  const addToActionList = action => {
    trackEvent('App', 'AddToActionList', action);
    setActionList([...actionList, action]);
  };

  return (
    <div className="App">
      <header className="App-header">
        cristian-pavel-dev
      </header>
      <main className="App-main">
        <h4 className="title">Actions</h4>
        <div className="button-container">
          <Button
            className="button"
            type="primary"
            onClick={() => addToActionList('the first button was clicked')}
          >
            First
          </Button>
          <Button
            className="button"
            type="secondary"
            onClick={() => addToActionList('the second button was clicked')}
          >
            Second
          </Button>
        </div>
        <h4 className="title">History</h4>
        <List
          className="item-list"
          size="small"
          bordered
          dataSource={actionList}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </main>
    </div>
  );
}

export default App;
