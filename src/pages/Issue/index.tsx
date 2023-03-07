import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ContentContainer,
  IssueContainer,
  ProfileContainer,
  UserInfo,
} from './style';
import GithubIcon from '../../assets/github.svg';
import CompanyIcon from '../../assets/company.svg';
import FollowersIcon from '../../assets/followers.svg';
import { dateFormatter } from '../../utils/formatter';
import { api } from '../../lib/axios';

interface IssueData {
  title: string;
  url: string;
  login: string;
  createdAt: Date;
  comments: number;
  body: string;
}

export function Issue() {
  const [issue, setIssue] = useState({} as IssueData);
  const { id } = useParams();

  const getIssue = useCallback(async () => {
    const response = await api.get(
      `repos/alessandrovpa/ignite-github-blog/issues/${id}`
    );

    setIssue({
      title: response.data.title,
      comments: response.data.comments,
      createdAt: new Date(response.data.created_at),
      login: response.data.user.login,
      url: response.data.html_url,
      body: response.data.body,
    });
  }, [id]);

  useEffect(() => {
    getIssue();
  }, [getIssue]);

  return (
    <IssueContainer>
      <ProfileContainer>
        <div>
          <header>
            <Link to="/">{'< '}VOLTAR</Link>
            <a href={issue.url} target="_blank" rel="noreferrer">
              VER NO GITHUB
            </a>
          </header>
          <h1>{issue.title}</h1>
          <UserInfo>
            <h3>
              <img src={GithubIcon} alt="github logo" />
              {issue.login}
            </h3>
            <h3>
              <img src={CompanyIcon} alt="data icon" />
              {dateFormatter.format(issue.createdAt)}
            </h3>
            <h3>
              <img src={FollowersIcon} alt="comments icon" />
              {issue.comments} comentários
            </h3>
          </UserInfo>
        </div>
      </ProfileContainer>
      <ContentContainer>{issue.body}</ContentContainer>
    </IssueContainer>
  );
}
