import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { Card } from './components/Card';
import { Profile } from './components/Profile';
import { CardsContainer, HomeContainer, SearchContainer } from './styles';

interface Issue {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);

  async function searchIssues() {
    const newIssues: Issue[] = [];
    const response = await api.get(
      'search/issues?q=%20repo:alessandrovpa/ignite-github-blog'
    );

    response.data.items.map((item) => {
      const newIssue: Issue = {
        id: item.number,
        body: item.body,
        title: item.title,
        createdAt: new Date(item.created_at),
      };
      newIssues.push(newIssue);
      return item;
    });
    setIssues(newIssues);
  }

  useEffect(() => {
    searchIssues();
  }, []);

  return (
    <HomeContainer>
      <Profile />
      <SearchContainer>
        <div>
          <h2>Publicações</h2>
          <span>8 publicações</span>
        </div>
        <form action="">
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Buscar conteudo"
          />
        </form>
      </SearchContainer>
      <CardsContainer>
        {issues.map((issue) => {
          return (
            <Card
              id={issue.id}
              key={issue.id}
              body={issue.body}
              title={issue.title}
              createdAt={issue.createdAt}
            />
          );
        })}
      </CardsContainer>
    </HomeContainer>
  );
}
