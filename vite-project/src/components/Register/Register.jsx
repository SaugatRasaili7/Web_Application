function Register(){
    return(
        <div>
            <h1> Register</h1>
            <form action="">
                <label htmlFor="name"> Email :</label>
                <input type="text" value={"Enter your Email"}/> <br />

                <label htmlFor="password"> Password :</label>
                <input type="password" value={"Enter your password"}/> <br /> 

                <label htmlFor="DOB"> DOB :</label>
                <input type="date " /> <br />


                <label htmlFor="Age"> Age :</label>
                <input type="number" value={"Enter your age"} />
                

                
            </form>

        </div>
    )
}

export default Register;
