import React, { useState, CSSProperties } from 'react';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { NavigationProps } from '../structures/DataTypes';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}



const Navigation: React.FC<NavigationProps> = ({ navItems }) => {
  const items: MenuItem[] = navItems;
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState<string | null>(null);
  
  // [
  //   // getItem('Option 1', '1', <PieChartOutlined />),
  //   // getItem('Option 2', '2', <DesktopOutlined />),
  //   // getItem('Option 3', '3', <ContainerOutlined />),
  
  //   // getItem('Navigation One', 'sub1', <MailOutlined />, [
  //   //   getItem('Option 5', '5'),
  //   //   getItem('Option 6', '6'),
  //   //   getItem('Option 7', '7'),
  //   //   getItem('Option 8', '8'),
  //   // ]),
  
    // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    //   getItem('Option 9', '9'),
    //   getItem('Option 10', '10'),
  
    //   getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    // ]),
  // ];
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

const handleMenuClick = (e: MenuInfo): void => {
  const parentKey = e.keyPath[1];
  let toNavigate = "?page=" + ((parentKey != null && parentKey != undefined) ? (parentKey + "&name=" + e.key) : e.key);
  setActiveKey(e.key);

  navigate(toNavigate);
  console.log('toNavigate:', toNavigate);
};

  const navStyle:CSSProperties = {
    width: 256,
    position: 'absolute'
  }


  return (
    <div style={navStyle}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={handleMenuClick} // New prop
      />
    </div>
  );
}

export default Navigation;