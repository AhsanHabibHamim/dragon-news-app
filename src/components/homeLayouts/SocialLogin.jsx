import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold text-[#706F6F] mb-5">Login With</h2>
      <div className="space-y-2.5">
        <button className="btn btn-outline btn-secondary w-full">
          <FcGoogle size={24}></FcGoogle> Login With Google
        </button>
        <button className="btn btn-outline btn-primary w-full">
         <FaGithub size={24}></FaGithub> Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
