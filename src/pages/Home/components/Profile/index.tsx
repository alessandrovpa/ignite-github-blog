import { useEffect, useState } from 'react';
import { api } from '../../../../lib/axios';
import { Avatar, ProfileContainer, UserInfo } from './styles';

interface UserInfoProps {
  login: string;
  avatarUrl: string;
  name: string;
  url: string;
  company: string | null;
  followers: number;
}

export function Profile() {
  const [userInfo, setUserInfo] = useState({} as UserInfoProps);

  async function getUserData() {
    const response = await api.get('/users/alessandrovpa');
    setUserInfo({
      avatarUrl: response.data.avatar_url,
      company: response.data.company,
      followers: response.data.followers,
      login: response.data.login,
      name: response.data.name,
      url: response.data.html_url,
    });
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <ProfileContainer>
      <div>
        <Avatar src={userInfo.avatarUrl} alt="avatar" />
      </div>
      <div>
        <header>
          <h1>{userInfo.name}</h1>
          <a href={userInfo.url} target="_blank" rel="noreferrer">
            GITHUB
          </a>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <UserInfo>
          <h3>{userInfo.login}</h3>
          <h3>{userInfo.company || 'desempregado'}</h3>
          <h3>{userInfo.followers} seguidores</h3>
        </UserInfo>
      </div>
    </ProfileContainer>
  );
}
