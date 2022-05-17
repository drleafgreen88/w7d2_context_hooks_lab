import UserContext from "../context/UserContext";

const Header = () => {

    return (
        <>
        <UserContext.Consumer>
        {({name}) => {
            return(
                <>
                <h2>Hello {name} 👋</h2>
                </>
            )}}
        </UserContext.Consumer>
        </>
    )
}

export default Header;
