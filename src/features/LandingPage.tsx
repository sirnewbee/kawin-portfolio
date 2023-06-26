import React, { useEffect, useState, CSSProperties } from "react";
import { useNavigate, Navigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [transferPage, setTransferPage] = useState(false);
  const timeoutHolder = setTimeout(function(){
    setTransferPage(true);
  }, 300000);

  const navigatePage = () => {
    setTransferPage(true);
    clearTimeout(timeoutHolder);
  }

  const styles = {
    containerStyle: {
      backgroundColor: 'black',
      color: 'white',
      height: '100vh',
      widht: '100vh'
    }
  };

  return (
    <div style={styles.containerStyle} onClick={navigatePage}>
      {(transferPage) ? (<Navigate to="/home?page=projects"></Navigate>) : null}
      My landing page
    </div>
  );
}

export default LandingPage;