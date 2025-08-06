import "../styles/components/popup.scss"

function DropPopup({notis = []}){
    return (
        <div className="drop-wrapper">
            <div className="drop-option">
                <span>Mark all as read</span>
            </div>
            <div className="list-noti">
                {notis.map((noti, index) => (
                <div key={index}  className="noti">
                    <div className="logo-noti">
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/admin-dashboard-flat-multicolor/setting-19.png" alt="" className="logo"/>
                    </div>
                    <div className="noti-text">{noti}</div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default DropPopup