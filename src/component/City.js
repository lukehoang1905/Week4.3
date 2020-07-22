



import React from 'react'
function cityChoice(){
    console.log('omg')

}
export default function City() {
    return (
        <div>
            <button onClick={()=>cityChoice()} className="btn-danger">UK</button>
            <button onClick={()=>cityChoice()} className="btn-danger">USA</button>
            <button onClick={()=>cityChoice()} className="btn-danger">VN</button>
            <button onClick={()=>cityChoice()} className="btn-danger">AUS</button>
            <button onClick={()=>cityChoice()} className="btn-danger">KOR</button>
            <button onClick={()=>cityChoice()} className="btn-danger">JAP</button>
        </div>
    )
}

