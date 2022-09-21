import { useState } from 'react'
import { RecoilRoot} from 'recoil'
import './App.css'

function App() {
  type Member ={
    name: string,
    password: string
  }
  const [member,setMember] = useState<Member>({name:'',password:''})

  const inputForm = (event: {target: HTMLInputElement}):void =>{
    setMember(
      {
        ...member,
        name:event.target.value
      }
    )
    console.log(member)
  }

  return (
    <div>
      <h1>Hello {member.name}</h1>
      <input type="text" value={member.name} onChange={inputForm} />
      <input type="text" value={member.password} onChange={inputForm} />
    </div>
  )
}

export default App
