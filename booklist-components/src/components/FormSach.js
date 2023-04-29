import React from 'react';

function FormSach(props) {
    const booklist = props.booklist
    // console.log ("booklist trong form sach", booklist)
    const render = props.render
    const input_name = React.createRef()
    const input_author = React.createRef()
    function submit_sach(e) {
        e.preventDefault();
        const name_book = input_name.current.value
        const author = input_author.current.value
        booklist.push({
          id:Math.floor(Math.random()*10000),
          name:name_book,
          author: author,
        })
        render()
        console.log(booklist)
    }
    return  <form onSubmit={submit_sach} >
      <div className="row">
        <div className="col">
          <input id="name" ref={input_name} type="text" className="form-control" placeholder="Tên sách" name="name"/>
        </div>
        <div className="col">
          <input id="author" ref={input_author} type="text" className="form-control" placeholder="Tác giả" name="author"/>
        </div>
        <div className="col">
          <button type="submit" onClick={submit_sach} className="btn btn-primary">{/*(choose_sach == null) ? "Thêm sách" : "Sửa sách"*/}Them sach</button>
        </div>
      </div>
    </form>
   }
   export default FormSach