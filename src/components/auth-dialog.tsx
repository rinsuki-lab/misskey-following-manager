import { observer } from "mobx-react"
import React = require("react")
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import { store } from "../store"

@observer
export class AuthDialog extends React.Component {
    render() {
        const authSession = store.misskeyAuthSession!
        return <Modal isOpen={authSession != null} centered> { authSession && <>
            <ModalHeader>
                認証
            </ModalHeader>
            <ModalBody>
                <ol>
                    <li>
                        <a href={authSession.url} target="_blank" onClick={(e) => {
                            window.open(authSession.url, "_blank", "width=480,height=640")
                            e.preventDefault()
                        }}>{authSession.url}</a> で認証する
                    </li>
                    <li>
                        下の「終わった」ボタンを押す
                    </li>
                </ol>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={() => {store.misskeyAuthSession = undefined}}>やっぱやめた</Button>
                <Button color="primary" onClick={() => {store.userAuthorizedLogin()}}>終わった</Button>
            </ModalFooter>
        </>}
        </Modal>
    }
}
