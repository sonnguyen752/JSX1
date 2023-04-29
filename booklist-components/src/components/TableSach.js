function BookTable(props) {
    const booklist = props.booklist
    return <table className="table table-striped table-hover">
     <thead>
       <tr>
         <th>ID</th>
         <th>Name</th>
         <th>Author</th>
         <th>Action</th>
       </tr>
     </thead>
     <tbody>
       {booklist.map(item=>
         <tr>
           <td>{item.id}</td>
           <td>{item.name}</td>
           <td>{item.author}</td>
           <td>
             <button /*onClick={()=>{sua_sach(item)}}*/ className={(/*choose_sach*/ null == item.id) ? 'btn btn-primary' : 'btn btn-info'}>Sửa</button>
             <button /*onClick={()=>{xoa_sach(item.id)}}*/ className="btn btn-danger">Xóa</button>
           </td>
         </tr>
       )}
     </tbody> 
   </table>
  }
  export default BookTable