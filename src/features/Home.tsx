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

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<JSX.Element | null>(null);
  const [navItems , setNavItems] = useState([
    {label: 'Projects', key: '/projects', icon: <PieChartOutlined />, onClick: function(){
      navigate('?page=projects');
    }},
    {label: 'Dev Information', key: 'dev-info', icon: <DesktopOutlined />, onClick: function(){
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

  return (
    <div>
      <Navigation navItems={navItems} />
      {currentPage}
    </div>
  );
};

export default Home;
