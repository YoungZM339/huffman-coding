import { Button, Card, Layout } from "tdesign-react"
import { useNavigate } from "react-router"

const { Content } = Layout

function HuffmanError() {
  const navigator = useNavigate()

  return (
    <Content
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        flexDirection: "column"
      }}
    >
      <Card>
        <h1>404 Not Found</h1>
        <p>Sorry, the page you visited does not exist.</p>
        <Button type="primary" onClick={() => navigator("/")}>
          Back Home
        </Button>
      </Card>
    </Content>
  )
}

export default HuffmanError
