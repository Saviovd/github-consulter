export const selectSortedRepositories = (state) => {
   const { repositories, sortType } = state.repositories;

   switch (sortType) {
      case 'a-z':
         return [...repositories].sort((a, b) => a.name.localeCompare(b.name));
      case 'z-a':
         return [...repositories].sort((a, b) => b.name.localeCompare(a.name));
      case 'oldest':
         return [...repositories].sort(
            (a, b) => new Date(a.created_at) - new Date(b.created_at)
         );
      case 'newest':
         return [...repositories].sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
         );
      default:
         return repositories;
   }
};
