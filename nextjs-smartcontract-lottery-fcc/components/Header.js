import { ConnectButton } from "web3uikit"

// yarn add web3uikit // library gives pop-up modal
export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row">
            <img src="/logo.png" alt="logo" width="50px" height="2px"></img>
            <h1 className="py-4 px-4 font-bold text-3xl"> Decentralized Lottery</h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
