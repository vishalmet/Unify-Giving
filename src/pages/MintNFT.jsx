import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Bg from "../assets/bg.png";
import { Link } from "react-router-dom";

const MintNFT = () => {

    const [name, setName] = useState({Name: ""});
    const [from, setFrom] = useState({From: ""});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setName((prevState) => ({
        ...prevState,
        [name]: value,
        }));
        setFrom((prevState) => ({
        ...prevState,
        [name]: value,
        }));
    };

  return (
    <div
      className=" h-screen bg-cover bg-center bricolage-font pb-6"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className=" pt-8">
        <Navbar />
        <div className=" pt-16">
          <p className=" text-3xl md:text-5xl mx-3 md:mx-0 flex justify-center font-semibold">
            {" "}
            Get Your Early Contributor NFT Now!
          </p>
          <p className=" text-xl text-gray-900 flex justify-center mx-[2%] md:mx-[16%] lg:mx-[26%] pt-6 text-center">
            Mint your exclusive NFT, be an early supporter, and unlock special
            features while helping those experiencing homelessness through Unify
            Giving
          </p>
          <div className=" mx-2 md:mx-0">
            <div className=" flex justify-center">
                <h1 className="text-gray-900 md:w-[60%] lg:w-[45%] text-xl pt-10">
                Enter your name
                <input
                    type="text"
                    className="p-4 mt-3 w-full rounded-3xl text-xl text-black bg-transparent border-2 border-gray-900 focus:border-purple-700 focus:outline-none"
                    placeholder=""
                    required
                    name="Name"
                    value={name.Name}
                    onChange={handleChange}
                />
                </h1>
            </div>
            <div className=" flex justify-center">
                <h1 className="text-gray-900 md:w-[60%] lg:w-[45%] text-xl pt-6">
                Where are you from?
                <input
                    type="text"
                    className="p-4 mt-3 w-full rounded-3xl text-xl text-black bg-transparent border-2 border-gray-900 focus:border-purple-700 focus:outline-none"
                    placeholder=""
                    required
                    name="From"
                    value={from.From}
                    onChange={handleChange}
                />
                </h1>
            </div>
            <div className=" flex justify-center text-base md:text-xl font-semibold pt-6">
                <Link to='/minted' className='hover:cursor-pointer border p-4 px-8 text-white rounded-full transition-transform hover:scale-95 ease-in-out hover:shadow-2xl' style={{ backgroundColor: '#6200EE' }}> Mint Now 🡥 </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintNFT;
