import { useTitleColorContext } from "../../hook/useTitleColorContext"

const Contact = () => {
const color = useTitleColorContext()
  return (
    <>
    <h2 style={color}>Contact</h2>
    </>
  )
}

export default Contact