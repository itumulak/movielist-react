import Button from "./Button"
import Wave from "./Wave"

export default () => {
    return (
        <>
            <h1 className="font-montserrat font-semibold text-5xl text-white text-center">Your movie list is <br />empty</h1>
            <Button isPrimary={true} label="Add a new movie"/>
        </>
    )
}