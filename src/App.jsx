import React from 'react'
import Shape from './components/Shape'
import ConfirmPas from './components/ConfirmPas'
import Checkbox from './components/Checkbox'
import ChangeColor from './components/ChangeColor'
import ConfirmEmail from './components/ConfirmEmail'
import ChangeValueInput from './components/ChangeValueInput'
import ToDo from './components/ToDo'

const App = () => {
  return (
    <div className='flex justify-center flex-wrap gap-[50px] py-[100px] mx-auto max-w-[1400px] w-full'>
      <Shape />
      <ConfirmPas />
      <Checkbox />
      <ChangeColor />
      <ConfirmEmail />
      <ChangeValueInput />
      <ToDo />
    </div>
  )
}

export default App
