import logo from "../../../Assets/Logo/logo.png"
export default function HeaderComponent()
{
  return(
    <div className={"flex flex-row justify-between px-5 py-4 "}>


      {/*Logo Goes Here*/}
      <div className={"border-r-2 border-gray-300 pr-8"}>

          <img src={logo} className={"h-12"}  alt={"Wink-it Logo"}/>

      </div>


      {/*Search Box Goes Here*/}
      <div className={"w-[70%]"}>

          <div className={"relative my-2 drop-shadow-2xl"}>

              <span className={"absolute inset-y-0 flex items-center pl-3"} >

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
              </svg>

              </span>

              <input className={"w-full h-10 pl-12 rounded-lg"} type={"text"} placeholder={"Search For Products"} />

          </div>

      </div>


      {/*Login Logout Button Goes here*/}
      <div className={"inline-flex"}>

          <button className={"bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-all font-bold text-lg px-14 mr-4"}>
              <p>Login</p>
          </button>

          <button className={"bg-wGreen text-white font-bold inline-flex items-center text-lg px-4 rounded-lg"}>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
              </svg>

              <p>My Cart</p>
          </button>

      </div>

    </div>
  );
}