import { AuthedUserContext } from "../../App";
import { useContext } from "react";

import WordList from "../WordList/WordList";

const Dashboard = () => {
    const user = useContext(AuthedUserContext);
    return (
        <main>
            <WordList />
        </main>
    );
};

export default Dashboard;
