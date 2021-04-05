import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

document.cookie = "samesite=lax";

ReactDOM.render(<App/>, document.getElementById("root"));
