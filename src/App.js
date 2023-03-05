import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from './key';


const src = "https://content.guardianapis.com/search?page=2&q=debate&api-key=test";
const apiKey = API_KEY
function App() {
  const [articles,setArticles] = useState([]);

  useEffect(()=>{
    console.log(apiKey)
    axios
      .get(src)
      .then(data=>{
        setArticles(data.data.response.results);
      })
  },[])

  return(
    <div className='App'>
      <h1>
        {articles.map(article =>{
          return(
            <p><a href={article.webUrl}>{article.webTitle}</a></p>
          );
        })}
      </h1>
    </div>
  )
}
export default App;