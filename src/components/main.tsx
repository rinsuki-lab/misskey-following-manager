import { observer } from "mobx-react"
import React = require("react")
import { store } from "../store"

@observer
export class Main extends React.Component {
    render() {
        return <div>
            <p>Hello, {store.misskeyLoggedInUser!.user.username}!</p>
        </div>
    }
}
