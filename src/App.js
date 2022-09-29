import './reset.css'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
library.add( fab )
const App = () => <PortfolioContainer />;

export default App;
