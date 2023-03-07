import { Link } from 'react-router-dom';
import { dateFormatter } from '../../../../utils/formatter';
import { CardContainer } from './styles';

interface CardProps {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
}

export function Card({ id, title, body, createdAt }: CardProps) {
  return (
    <CardContainer>
      <Link to={`/issue/${id}`}>
        <header>
          <h1>{title}</h1>

          <span>{dateFormatter.format(createdAt)}</span>
        </header>
        <p>{body}</p>
      </Link>
    </CardContainer>
  );
}
