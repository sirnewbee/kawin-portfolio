import React, { useEffect, useState } from "react";
import Projects from "./Projects";
import DeveloperInformation from "./DeveloperInformation";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import Navigation from "../components/navigation";
import { clearTransitions } from "../global/AnimationScripts";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<JSX.Element | null>(null);
  const [navItems , setNavItems] = useState([
    {label: 'Projects', key: '/projects', icon: <PieChartOutlined />, onClick: function(){
      clearTransitions();
      navigate('?page=projects');
    }},
    {label: 'Dev Information', key: 'dev-info', icon: <DesktopOutlined />, onClick: function(){
      clearTransitions();
      navigate('?page=dev-info');
    }}
  ]);

  const handlePage = () => {
    switch (page) {
      case "dev-info":
        setCurrentPage(<DeveloperInformation />);
        break;
      case "projects":
        setCurrentPage(<Projects />);
        break;
      default:
        setCurrentPage(<Projects />);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      navigate("?page=dev-info");
    }, 3000);
  }, []);

  useEffect(() => {
    const queryParameters = new URLSearchParams(location.search);
    const newPage = queryParameters.get("page");
    setPage(newPage);

    handlePage();
  }, [location, page]);

  const style = {
    homeContainer: {
      height: '100vh',
      width: '100wh'
    },
    contentContainer:{
      width: '100%',
      backgroundColor: 'gray',
      height: '100%',
      paddingLeft: '100px',
      paddingTop: '20px'
    }
  };

  return (
    <div style={style.homeContainer}>
      <Navigation navItems={navItems} />
      <div style={style.contentContainer}>
        {currentPage}
      </div>
    </div>
  );
};

export default Home;
