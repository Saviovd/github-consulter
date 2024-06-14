import { SortBoxStyle } from './SortBoxStyle';

const SortBox = ({ sortType, onSortChange }) => (
   <SortBoxStyle>
      Sort by:
      <select value={sortType} onChange={onSortChange} className='select'>
         <option value='a-z'>A-Z</option>
         <option value='z-a'>Z-A</option>
         <option value='oldest'>Oldest First</option>
         <option value='newest'>Newest First</option>
      </select>
   </SortBoxStyle>
);

export default SortBox;
