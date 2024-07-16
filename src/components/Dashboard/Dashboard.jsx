import { AuthedUserContext } from "../../App";
import { useContext } from "react";

import WordDetails from "../WordDetails/WordDetails";
import WordList from "../WordList/WordList";

const Dashboard = () => {
    const user = useContext(AuthedUserContext);
    return (
        <main>
            <WordDetails />
            <WordList />
        </main>
    );
};

export default Dashboard;
