import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  // HiArrowSmRight,
  HiBookOpen,
  HiChartPie,
  // HiInbox,
  HiLogin,
  HiLogout,
  HiOutlineCloudUpload,
  HiShoppingBag,
  // HiTable,
  // HiUser,
  HiViewBoards,
} from "react-icons/hi";

import profi from "../assets/profile.jpg";
const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="#" img={profi} imgAlt="User Porfile Pic">
        <p>Dukan Dar</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiBookOpen}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiLogin}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiLogout}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
