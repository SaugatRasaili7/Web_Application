import Input from "../Input/input";
function Login() {
  return (
    <div className="min-h-screen flex items-center justify-left">
      <form className="w-72 space-y-3">
        <h1 className="text-xl font-bold text-center">Login</h1>
       
           <Input type="text" placeholder="Name"/>
                                                                   
             
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="date"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Sign Up
        </button>
      </form>
         
    </div>
       
  );
}

export default Login;