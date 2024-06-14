import { RepositoryListStyle } from './RepositoryListStyle';

const RepositoryList = ({ owner, list }) => {
   return (
      <>
         {owner?.login ? <h2>Repositories of {owner.login}</h2> : <h2>Search for the user in the search bar above</h2>}
         <RepositoryListStyle>
            {list.map((repo) => (
               <li key={repo.id}>
                  <strong>{repo.name}</strong> - {repo.description}
               </li>
            ))}
         </RepositoryListStyle>
      </>
   );
};

export default RepositoryList;
