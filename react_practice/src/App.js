import logo from './logo.svg';
import './App.css';

function Header(props){
  console.log('props', props, props.title);
  return <header>
  <h1><a href="/">{props.title}</a></h1>
</header>
}
function Nav(props){
  const list = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    list.push(<li key={t.id}><a href={"/read/"+t.id}>{t.title}</a></li>)
  }
  return  <nav>
    <ol>
      {list}
    </ol>
  </nav>
}
function Article(props){
  // console.log('props', props, props.title, props.body);
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  const topics = [
    {id:1, title:"html", body:"html is ..."},
    {id:2, title:"css", body:"css is ..."},
    {id:3, title:"javascript", body:"js is ..."}
  ]
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
      <Article title="Hi" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
