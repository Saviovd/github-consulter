import { RepositoryListStyle } from "./RepositoryListStyle";

const RepositoryList = ({ list }) => {
   return (
      <>
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
