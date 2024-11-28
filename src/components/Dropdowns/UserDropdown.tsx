import React from "react";
import { Dropdown, Menu, Avatar } from "antd";
import { DownOutlined } from "@ant-design/icons";
import image from "../../assets/img/team-1-800x800.jpg";

const UserDropdown: React.FC = () => {
  // Define the menu items
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={(e) => console.log(e.key)}>
        Action
      </Menu.Item>
      <Menu.Item key="2" onClick={(e) => console.log(e.key)}>
        Another action
      </Menu.Item>
      <Menu.Item key="3" onClick={(e) => console.log(e.key)}>
        Something else here
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4" onClick={(e) => console.log(e.key)}>
        Separated link
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <div
        className="text-blueGray-500 block"
        onClick={(e) => e.preventDefault()}
      >
        <div className="items-center flex">
          <Avatar
            size={48}
            src={image}
            style={{ backgroundColor: "#87d068" }}
          />
          <DownOutlined style={{ fontSize: 16, marginLeft: 8 }} />
        </div>
      </div>
    </Dropdown>
  );
};

export default UserDropdown;
