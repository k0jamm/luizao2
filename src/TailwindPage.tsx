import { useState, ChangeEvent } from 'react';

interface GithubProfile {
  avatar_url: string;
  name: string;
  login: string;
}

export default function TailwindPage() {
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
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Buscar Perfil (Tailwind CSS)</h1>
      <input
        value={username}
        onChange={handleInputChange}
        placeholder="Digite o username"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={fetchProfile}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Buscar
      </button>
      {profile && (
        <div className="mt-6 flex flex-col items-center">
          <img src={profile.avatar_url} alt="avatar" className="w-24 h-24 rounded-full" />
          <p className="mt-2 text-lg">{profile.name}</p>
          <p className="text-gray-500">@{profile.login}</p>
        </div>
      )}
    </div>
  );
}
