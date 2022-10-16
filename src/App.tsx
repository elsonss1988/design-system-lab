import { useState } from 'react'
import { Heading } from './components/Heading'
import { Logo } from './Logo'
import { Text } from './components/Text'
import './styles/global.css'
import { TextInput } from './components/TextInput'
import { Envelope, Lock } from 'phosphor-react'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'

export function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className="w-screen h-screen bg-gray-900  flex flex-col items-center justify-center text-white">
     <header className="flex flex-col items-center">
      <Logo/>
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className='text-gray-400 mt-1'>
          Faça login e comece a usar
        </Text>
     </header>

     <form className='flex flex-col items-strerch gap-4 w-full max-w-sm mt10'>
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold"> Endereço de Email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder="Digite seu email"/>
          </TextInput.Root>
        </label>

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold"> Sua Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder="************"/>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex  items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200"> Lembrar de mim por 30 dias</Text>
        </label>
        <Button type="submit" className="mt-4"> Entrar na Plataforma</Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        < Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200"> Esqueceu a sua senha</a>
        </Text>
        < Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200"> Não possui conta? crie uma agora!</a>
        </Text>
      </footer>
    </div>
    
  </>
  )
}

