import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar} from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Avatar>
            <img 
                src="https://media.licdn.com/dms/image/D4D03AQGIMpFLALevAw/profile-displayphoto-shrink_800_800/0/1711248493449?e=1718841600&v=beta&t=UWR47O2NmYf-CkYHhGOaMKgOABHxuy7B8roE5KZ12UE" 
                alt="Foto do usuário" 
            />

            <label htmFor="avatar">
                <FiCamera/>
                <input
                    id="avatar"
                    type="file"
                />
            </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova atual"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}