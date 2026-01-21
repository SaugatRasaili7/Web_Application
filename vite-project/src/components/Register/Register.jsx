function Register(){
    return(
        <div>
            <h1> Register</h1>
            <form action="">
                <label htmlFor="name"> Name :</label>
                <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          required
          className="w-full p-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
                
                <label htmlFor="Email"> Email :</label>
               <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />


                <label htmlFor="DOB"> DOB :</label>
                <input
    type="date"
    name="dob"
    value={formData.dob}
    onChange={handleChange}
    required
    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />


              

                
            </form>

        </div>
    )
}

export default Register;
