import { Dialog, Layout, Menu } from "tdesign-react"
import {
  SearchIcon,
  NotificationFilledIcon,
  HomeIcon,
  DashboardIcon,
  UploadIcon,
  InfoCircleIcon,
  DownloadIcon
} from "tdesign-icons-react"
import { Outlet, useNavigate } from "react-router"
import { useState } from "react"

const { HeadMenu, MenuItem } = Menu

function SidebarMenu() {
  const navigator = useNavigate()
  return (
    <Menu theme="light" value="dashboard" style={{ marginRight: 50, height: 550 }}>
      <MenuItem value="dashboard" onClick={() => navigator("/")} icon={<DashboardIcon />}>
        Dashboard
      </MenuItem>
      <MenuItem value="encode" onClick={() => navigator("/encoding")} icon={<UploadIcon />}>
        Encode
      </MenuItem>
      <MenuItem value="decode" onClick={() => navigator("/decoding")} icon={<DownloadIcon />}>
        Decode
      </MenuItem>
      <MenuItem value="info" onClick={() => navigator("/about")} icon={<InfoCircleIcon />}>
        About
      </MenuItem>
    </Menu>
  )
}

const {
  Header, Content, Footer, Aside
} = Layout

function HuffmanSidebar() {
  const navigator = useNavigate()
  const [visibleConfirm, setVisibleConfirm] = useState(false)
  const onClickConfirm = () => {
    setVisibleConfirm(true)
  }

  const onCloseConfirm = () => {
    setVisibleConfirm(false)
  }
  return (
    <div className="tdesign-demo-item--layout">
      <Layout>
        <Header>
          <HeadMenu
            value="item1"
            // logo={<img width="64" src={Icon} alt="logo" />}
            operations={<div className="t-menu__operations">
              <SearchIcon className="t-menu__operations-icon" />
              <NotificationFilledIcon
                onClick={() => onClickConfirm()}
                className="t-menu__operations-icon"
              />
              <HomeIcon onClick={() => navigator("/")} className="t-menu__operations-icon" />
            </div>
            }
          >
            {/*<MenuItem value="item1">已选内容</MenuItem>*/}
            {/*<MenuItem value="item2">菜单内容一</MenuItem>*/}
          </HeadMenu>
          <Dialog header="提示" theme="info" cancelBtn={false} visible={visibleConfirm}
                  onClose={onCloseConfirm}
          ></Dialog>
        </Header>
        <Layout>
          <Aside style={{ borderTop: "1px solid var(--component-border)" }}>
            <SidebarMenu />
          </Aside>
          <Layout>
            <Content>
              <Outlet />
            </Content>
            <Footer
              style={{
                textAlign: "center",
                borderTop: "1px solid var(--component-border)"
              }}
            >
              Copyright @ 2023 Brian Yang. All Rights Reserved
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default HuffmanSidebar
