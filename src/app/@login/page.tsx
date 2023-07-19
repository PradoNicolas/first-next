export default function Login(){
    return (
        <form action="./../api" method="POST">
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username"/>

            <label htmlFor="password">Password: </label>
            <input type="text" id="password" name="password"/>

            <button type="submit">Submit</button>
        </form>
    )
}