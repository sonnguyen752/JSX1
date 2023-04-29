import FormSach from './components/FormSach';
import BookTable from './components/TableSach';

const L_book = [
  {id:1, name:"Book1",author:"tac gia1"},
  {id:2, name:"Book2",author:"tac gia2"},
  {id:3, name:"Book3",author:"tac gia3"},
]
const L_book1 = [
  {id:4, name:"Book 4",author:"tac gia 4"},
  {id:5, name:"Book 5",author:"tac gia 5"},
  {id:6, name:"Book 6",author:"tac gia 6"},
]
function App(props) {
  const render = props.render

  return (
    <>
 <FormSach booklist= {L_book} render = {render} />
 <BookTable booklist = {L_book}/>
 <FormSach booklist= {L_book1} render = {render} />
 <BookTable booklist = {L_book1}/>
 </>
  );
}
export default App;
