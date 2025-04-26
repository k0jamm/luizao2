import styled from 'styled-components';
import { useState, ChangeEvent } from 'react';

interface GithubProfile {
  avatar_url: string;
  name: string;
  login: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function StyledPage() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState<GithubProfile | null>(null);

  const fetchProfile = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data: GithubProfile = await res.json();
    setProfile(data);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <Container>
      <h1>Buscar Perfil (Styled-Components)</h1>
      <Input value={username} onChange={handleInputChange} placeholder="Digite o username" />
      <Button onClick={fetchProfile}>Buscar</Button>
      {profile && (
        <div style={{ marginTop: '20px' }}>
          <img src={profile.avatar_url} alt="avatar" width={100} style={{ borderRadius: '50%' }} />
          <p>{profile.name}</p>
          <p>@{profile.login}</p>
        </div>
      )}
    </Container>
  );
}