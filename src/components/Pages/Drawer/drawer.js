import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Drawer, Button } from 'antd';

const Drawerr = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Show User
      </Button>
      <Drawer
        title="Add User"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>1)........</p>
        <p>2)........</p>
        <p>3)........</p>
      </Drawer>
    </>
  );
};

export default Drawerr;