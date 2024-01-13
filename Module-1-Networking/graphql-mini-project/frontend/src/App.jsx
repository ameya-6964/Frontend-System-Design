import { useState } from "react";
import "./App.css";
import { useQuery, useMutation, gql } from "@apollo/client";

const GET_HELLO = gql`
  query {
    hello
  }
`;

const SET_MESSAGE = gql`
  mutation SetMessage($message: String!) {
    setMessage(message: $message)
  }
`;

function App() {
  const { loading, error, data, refetch } = useQuery(GET_HELLO);
  const [message, setMessageState] = useState(
    "Click On Below Button To Change This Message"
  );

  const [setMessage] = useMutation(SET_MESSAGE, {
    onCompleted: () => {
      // After the mutation is completed, refetch the data to update the UI
      refetch();
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSetMessage = async () => {
    const userInput = prompt("Enter a message:");
    if (userInput) {
      setMessageState(userInput);
      await setMessage({ variables: { message: userInput } });
    }
  };

  return (
    <div>
      <h1>{data.hello}</h1>
      <h3>Message: {message}</h3>
      <button onClick={handleSetMessage}>Set Message</button>
    </div>
  );
}

export default App;
