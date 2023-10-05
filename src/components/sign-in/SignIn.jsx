import Img from "../../assets/imags/sign-in-img.png";
function SignIn() {
  return (
    <div className="SignIn min-h-screen flex  overflow-hidden justify-between">
      <div className="flex justify-center items-center pl-[96px] pr-[64px]">
        <form className="w-[560px]">
          <h3 className="text-[32px]">Sign In</h3>
          <div className="form-container mt-[14px]">
            <a
              href="/"
              className="flex justify-center items-center gap-[8px] border-[1px] border-[#D9D9D9] rounded-[5px] h-[40px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_65_733)">
                  <path
                    d="M23.9875 12.2245C23.9875 11.2413 23.9059 10.5238 23.7292 9.77966H12.2393V14.2176H18.9836C18.8477 15.3205 18.1134 16.9815 16.4817 18.0976L16.4588 18.2462L20.0917 20.9964L20.3434 21.0209C22.6549 18.9347 23.9875 15.8653 23.9875 12.2245Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.2391 23.9176C15.5433 23.9176 18.3171 22.8545 20.3432 21.0209L16.4815 18.0976C15.4481 18.8018 14.0611 19.2934 12.2391 19.2934C9.00291 19.2934 6.25622 17.2074 5.27711 14.324L5.13359 14.3359L1.35604 17.1927L1.30664 17.3269C3.31906 21.2334 7.45273 23.9176 12.2391 23.9176Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.27726 14.324C5.01892 13.5799 4.8694 12.7826 4.8694 11.9588C4.8694 11.1349 5.01892 10.3377 5.26367 9.5936L5.25683 9.43513L1.43194 6.53241L1.3068 6.59058C0.477385 8.21168 0.00146484 10.0321 0.00146484 11.9588C0.00146484 13.8855 0.477385 15.7058 1.3068 17.3269L5.27726 14.324Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.2391 4.62403C14.5371 4.62403 16.0871 5.59402 16.971 6.40461L20.4248 3.10928C18.3036 1.1826 15.5433 0 12.2391 0C7.45273 0 3.31906 2.68406 1.30664 6.59056L5.26351 9.59359C6.25622 6.7102 9.00291 4.62403 12.2391 4.62403Z"
                    fill="#EB4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_65_733">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-[24px]">Sign in with Google</span>
            </a>
            <div className="form-group relative flex justify-center  mt-[14px]">
              <p className="before:w-[157px] before:h-[1px] before:absolute before:left-0 before:bg-[#D9D9D9] before:top-[50%] after:absolute after:w-[157px] after:h-[1px] after:bg-[#D9D9D9] after:top-[50%] after:right-0 ">
                Or Sign In With Email
              </p>
            </div>
            <div className="userName flex flex-col w-[100%]">
              <label className="mb-[8px] text-[24px]">Username Or Email</label>
              <input
                type="text"
                className="form-control bg-[#F6F6F6] h-[40px] rounded-md "
              />
            </div>
          </div>
          <div className="form-group flex flex-col  mt-[14px]">
            <div className="flex justify-between items-center">
              <label className="mb-[8px] text-[24px]">Password</label>
              <a href="/" className=" underline float-right">
                Forgot Password ?
              </a>
            </div>
            <input
              type="password"
              className="form-control bg-[#F6F6F6] h-[40px] rounded-md"
            />
          </div>
          <div className="form-group mt-[14px]">
            <button
              type="submit"
              className="bg-Primary text-white rounded-md w-[100%] h-[40px] text-[24px] mt-[28px]"
            >
              Sign In
            </button>
          </div>
          <div className="form-group flex justify-center mt-[14px]  ">
            <p className="text-[24px]">Don&apos;t Have An Account ? </p>
            <a href="/login" className="underline text-Primary text-[24px]">
              Sign Up
            </a>
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

export default SignIn;
