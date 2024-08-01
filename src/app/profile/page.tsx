import ProfileForm from '@/components/ProfileForm'
export default function ProfilePage() {
  // Datos simulados o provenientes de una llamada a una API
  const userData = {
    username: 'example@example.com',
    password: 'password123',
    nombre: 'John',
    apellido: 'Doe',
    telefono: '123456789',
    documento: '12345678',
    pais: 'Peru',
    provincia: 'Lima',
    localidad: 'Barranco',
    role: 'PACIENTE'
  }

  return (
    <div>
      <h1>Editar Perfil</h1>
      <ProfileForm
        username={userData.username}
        password={userData.password}
        nombre={userData.nombre}
        apellido={userData.apellido}
        telefono={userData.telefono}
        documento={userData.documento}
        pais={userData.pais}
        provincia={userData.provincia}
        localidad={userData.localidad}
        role={userData.role}
      />
    </div>
  )
}
