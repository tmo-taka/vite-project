import { useState } from 'react'
import { RecoilRoot} from 'recoil'
import './App.css'

function App() {
  type Member ={
    name: string,
    password: string
  }
  const [member,setMember] = useState<Member>({name:'',password:''})

  const inputForm = (key: keyof Member, event: {target: HTMLInputElement}):void =>{
      const obj:Member = {...member};
      obj[key] = event.target.value;
      setMember(obj)
  }

  return (
    <div>
      <h1>Hello {member.name}</h1>
      <div>
        <input type="text" value={member.name} onChange={(event) => inputForm('name',event)} />
        <input type="text" value={member.password} onChange={(event) => inputForm('password',event)} />
      </div>
    </div>
  )
}

export default App
