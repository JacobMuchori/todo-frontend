import { useState } from "react"

export default function Update() {

    const [title, SetTitle] = useState("")
    const [decsription, SetDescription ] = useState("")
    const [status, SetStatus] = useState("")
    const [priority, SetPriority] = useState("")
    
    return (
        <div>
        <form>
            <input type="text" placeholder="Input title" value={title} onChange={e => SetTitle(e.target.value)}></input>
            <input type="text" placeholder="Input description" value={decsription} onChange={e => SetDescription(e.target.value)}></input>
            <input type="number" placeholder="Input status" value={status} onChange={e => SetStatus(e.target.value)}></input>
            <input type="number" placeholder="Input priority" value={priority} onChange={e => SetPriority(e.target.value)}></input>
            <input type="submit"></input>
        </form>
        </div>
    )
}