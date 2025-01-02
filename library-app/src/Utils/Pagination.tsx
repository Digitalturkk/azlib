export const Pagination: React.FC<{currentPage: number,
    totalPages: number,
     paginate: any}> = (props) => {

       const pageNumbers = [];

       if (props.currentPage === 1 ) {
           pageNumbers.push(props.currentPage);
           if (props.totalPages >= props.currentPage + 1) {
               pageNumbers.push(props.currentPage + 1);
           }
           if (props.totalPages >= props.currentPage + 2) {
               pageNumbers.push(props.currentPage + 2);
           }
           if (props.totalPages >= props.currentPage + 3) {
               pageNumbers.push(props.currentPage + 3);
           }
       } else if (props.currentPage > 1) {
           if (props.currentPage >= 3 ) {
               pageNumbers.push(props.currentPage - 2);
               pageNumbers.push(props.currentPage - 1);
           } else {
               pageNumbers.push(props.currentPage - 1);
           }

          pageNumbers.push(props.currentPage);
          
          if (props.totalPages >= props.currentPage + 1) {
           pageNumbers.push(props.currentPage + 1);
          }
          if (props.totalPages >= props.currentPage + 2) {
           pageNumbers.push(props.currentPage + 2);
          }
          if (props.totalPages >= props.currentPage + 3) {
           pageNumbers.push(props.currentPage + 3);
          }
       }

       return (
           <nav className="flex justify-center">
               <ul className='flex space-x-3 text-white text-xl bg-indigo-600 p-3 rounded-3xl'>
                   <li className='bg-indigo-300 rounded-2xl p-1 w-10 flex justify-center' onClick={() => props.currentPage > 1 && props.paginate(props.currentPage - 1)}>
                       <button className=''>
                           {'<'}
                       </button>
                   </li>
                   {pageNumbers.map(number => (
                       <li key={number} onClick={() => props.paginate(number)} 
                           className={'bg-indigo-300 rounded-2xl w-10 flex justify-center hover:bg-indigo-500 focus-within:bg-indigo-800'}>
                               <button className=''>
                                   {number}
                               </button>
                       </li>
                   ))}
                   <li className='bg-indigo-300 rounded-2xl p-1 w-10 flex justify-center' onClick={() => props.currentPage < props.totalPages && props.paginate(props.currentPage + 1)}>
                       <button className=''>
                           {'>'}
                       </button>
                   </li>
               </ul>
           </nav>
       );
     }