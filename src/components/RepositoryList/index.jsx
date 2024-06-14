import Link from 'next/link';
import { Repository, RepositoryListStyle, Title } from './RepositoryListStyle';

const RepositoryList = ({ owner, list }) => {
   console.log(owner);
   console.log(list);
   return (
      <>
         <Title>
            Repositories of <span>{owner.login}</span>
         </Title>
         <RepositoryListStyle>
            {list.map((repo) => (
               <Repository key={repo.id}>
                  <h3 className='repository-name'>{repo.name}</h3>
                  <span className='owner'>
                     by{' '}
                     <Link
                        href={`https://github.com/${owner.login}`}
                        target='_blank'
                        className='link'
                     >
                        {owner.login}
                     </Link>
                  </span>
                  <p className='repository-description'>{repo.description ? repo.description : 'The repository has no description'}</p>
               </Repository>
            ))}
         </RepositoryListStyle>
      </>
   );
};

export default RepositoryList;
