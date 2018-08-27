import { observer } from "mobx-react"
import React = require("react")
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Navbar, NavbarBrand } from "reactstrap"
import { store } from "../store"
import { AuthDialog } from "./auth-dialog"
import { Main } from "./main"

interface Props {
}

interface State {
}

@observer
export class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const authSession = store.misskeyAuthSession!
        return <div>
            <Navbar color="light" light>
                <NavbarBrand>Misskey Following Manager</NavbarBrand>
            </Navbar>
            <Container>
                <AuthDialog />
                { store.misskeyLoggedInUser == null ? this.renderGuest() : <Main />}
            </Container>
        </div>
    }

    renderGuest() {
        return <>
            <h1>ログイン</h1>
            <Button color="primary" onClick={() => store.startLogin()}>Misskeyアカウントでログイン</Button>
        </>
    }
}
