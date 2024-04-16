import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Lougot } from './styles'

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://avatars.githubusercontent.com/u/62298587?v=4"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>João Victor Gomes</strong>
        </div>
      </Profile>

      <Lougot>
        <RiShutDownLine />
      </Lougot>

    </Container>
  )
}