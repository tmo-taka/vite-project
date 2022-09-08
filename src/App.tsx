import { useState,createContext,Suspense } from 'react'
import { RecoilRoot} from 'recoil'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button} from '@Components/button'
import {MemoText } from '@Components/text'
import { RecoilTest} from '@Components/recoilTest'
import { Fetch } from '@Components/fetch'
import { DataProvider } from '@Context/dataContext';

function App() {
  const [count, setCount] = useState<number>(0)
  const [num, setNum] = useState<number>(1)

  const CountContext = createContext<number>(count);

  const increment = ():void =>{
    setCount(count+num)
  }
  const decrement = ():void =>{
    setCount(count-num)
  }

  const changeCount = (event: {target : HTMLInputElement }):void =>{
    const value:string = event.target.value
    const changeNumber:number = parseInt(value)
    console.log(isNaN(changeNumber))
    if(!isNaN(changeNumber)){
      setNum(changeNumber)
    }
  }

  const handClick = () =>{
    alert('ボタンを押しましたね？')
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          count was {count}
          <div className="card_btn">
            <button onClick={() => increment()}>{num}増やす</button>
            <button onClick={() => decrement()}>{num}減らす</button>
          </div>
      </div>
      <input type="text" value={num} onChange={(event) => changeCount(event)}/>
      <DataProvider>
        <Button type="small" txt="これがボタンです" onClick={handClick}/>
      </DataProvider>
      <MemoText txt="これです"/>
      <RecoilRoot>
        <RecoilTest />
      </RecoilRoot>
      <Suspense fallback={<p>Loading...</p>}>
        <Fetch />
      </Suspense>
    </div>
  )
}

export default App
