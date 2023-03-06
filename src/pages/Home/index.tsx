import { Profile } from './components/Profile';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <div>
        <h2>Publicações</h2>
        <span>8 publicações</span>
        <form action="">
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Buscar conteudo"
          />
        </form>
      </div>
    </HomeContainer>
  );
}
