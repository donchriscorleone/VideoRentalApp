import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TableCard from "./Tables/TableCard";
import Categories from "./Categories/Categories";
import Certificates from "./Certificates/Certificates";
import "./Assets/index.css";
import Members from "./Members/Members";
import Copies from "./Copies/Copies";
import Titles from "./Titles/Titles";
import Rental from "./Rentals/Rental";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" exact component={TableCard} />
        <Route path="/Categories" exact component={Categories} />
        <Route path="/Certificates" exact component={Certificates} />
        <Route path="/Members" exact component={Members} />
        <Route path="/Copies" exact component={Copies} />
        <Route path="/Titles" exact component={Titles} />
        <Route path="/Rentals" exact component={Rental} />
        <Footer />
      </Router>
    </>
  );
}

{
  /* <Router>
<Navbar />
<Route path="/" exact component={FirstCard} />
<Route path="/" exact component={ThirdCard} />
<Route path="/tables" component={ListOfTables} />
<Route path="/contactform" exact component={Modal} />
<Route path="/Category" exact component={CategoryTable} />
<Route path="/Certificates" exact component={FilmCertificate} />
<Route path="/Titles" exact component={FilmTitles} />
<Route path="/Members" exact component={Member} />
<Route path="/Copies" exact component={Copies} />
<Route path="/Rentals" exact component={Rentals} />
</Router>
<Footer /> */
}

export default App;
