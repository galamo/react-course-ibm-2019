import React from "react";
import { useSelector } from "react-redux";
// export default class HomePage extends React.Component {
//   render() {
//     return <h1> Home page </h1>;
//   }
// }

export default function HomePage() {
  const state = useSelector(state => state);
  console.log(state);
  return (
    <div>
      <h1> Home page </h1>;
    </div>
  );
}
