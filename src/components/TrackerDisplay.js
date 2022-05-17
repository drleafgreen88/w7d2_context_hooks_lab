import PieChart from './PieChart';
import UserContext from '../context/UserContext';

const TrackerDisplay = ({glasses}) => {


    return (
        <>
        <UserContext.Consumer>
        {({name, goal}) => {
            return(
            <>
            <p>{name}'s daily goal: {goal}</p>
            <p>Glasses drunk: {glasses}</p>
            <PieChart glasses={glasses} goal={goal} />
            { glasses >= goal ? "Goal reached! 🥳" : null }
            <br></br>
            </>
            )}}
        </UserContext.Consumer>
        </>
    )
}

export default TrackerDisplay;
