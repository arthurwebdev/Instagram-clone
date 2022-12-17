import { useState } from "react"

export const withSendOrLike = (Component) => {
	return (props) => {
		const [isShow,setIsShow] = useState(false)

		return  <Component {...props} {...{isShow,setIsShow}} />
	}
}