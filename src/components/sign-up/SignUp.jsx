import Img from "../../assets/imags/sign-up-img.png";
function SignUp() {
  return (
    <div className="signUp min-h-screen flex  overflow-hidden justify-between">
      <div className="flex justify-center items-center pl-[96px] pr-[64px]">
        <form className="w-[560px]">
          <h3 className="text-[32px]">Sign Up</h3>
          <div className="form-container mt-[14px]">
            <div className="form-group flex justify-between gap-[28px] mt-[14px]">
              <div className="name flex flex-col w-[100%]">
                <label className="mb-[8px] text-[24px]">Name</label>
                <input
                  type="text"
                  className="form-control bg-[#F6F6F6] h-[40px] rounded-md "
                />
              </div>
              <div className="userName flex flex-col w-[100%]">
                <label className="mb-[8px] text-[24px]">Username</label>
                <input
                  type="text"
                  className="form-control bg-[#F6F6F6] h-[40px] rounded-md "
                />
              </div>
            </div>
            <div className="form-group flex flex-col mt-[14px]">
              <label className="mb-[8px] text-[24px]">Email</label>
              <input
                type="email"
                className="form-control bg-[#F6F6F6] h-[40px] rounded-md"
              />
            </div>
            <div className="form-group flex flex-col mt-[14px]">
              <label className="mb-[8px] text-[24px]">Password</label>
              <input
                type="password"
                className="form-control bg-[#F6F6F6] h-[40px] rounded-md"
              />
            </div>
            <div className="form-group mt-[14px]">
              <button
                type="submit"
                className="bg-Primary text-white rounded-md w-[100%] h-[40px] text-[24px]"
              >
                Create Account
              </button>
            </div>
            <div className="form-group flex justify-center mt-[14px]  ">
              <p className="text-[24px]">Already Have An Account ? </p>
              <a href="/login" className="underline text-Primary text-[24px]">
                Sign In
              </a>
            </div>
          </div>
        </form>
      </div>
      <div className="w-[100%] relative flex justify-center items-center">
        <img src={Img} className="w-[500px] h-[500px] z-50 ml-[-20px]" />
        <div className="absolute circle bg-[#FFF5E0] w-[1024px] h-[1059px] rounded-[1059px]  -z-50 left-0"></div>
        <div className="absolute circle bg-[#FFE2A7] w-[1024px] h-[989.431px] rounded-[1024px]  -z-40 left-[137px]"></div>
        <div className="absolute circle bg-[#FFCF6D] w-[1024px] h-[989.431px] rounded-[1024px]  -z-40 left-[318px]"></div>
      </div>
    </div>
  );
}

export default SignUp;
