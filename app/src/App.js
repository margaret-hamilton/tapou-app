import "./App.css";

import axios from "axios";
import { useQuery } from "react-query";

export default function App() {
  const { isLoading, error, data } = useQuery("posts", () =>
    axios("https://628d4fd9a339dfef8798e164.mockapi.io/Hazard")
  );
  return (
    <div className="App">
      <form>
  <label>
    <input accept="image/*" id="icon-button-file" type="file" capture="environment"/>
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
      <h1>API Posts</h1>
      {isLoading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error.message}`}</div>
      )}
      <ul>
        {data &&
          data.data.map(({ id, title }) => (
            <li key={id}>
              <h3>{title}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}
