import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
  return (
    <div>
      <div className="bg-white border rounded-md mt-40 p-8 max-w-xs mx-auto">
        <h1 className="text-4xl mb-2 font-bold text-center">Login</h1>
        <p className=" text-center mb-4 text-gray-600">
          Entre na sua conta usando o metodo abaixo
        </p>
        <button
          className="bg-blue-500 rounded-md 
        text-white text-center w-full py-4 flex gap-2 justify-center"
        >
          <FontAwesomeIcon icon={faGoogle} className="w-6" />
          <span>Login com Google</span>
        </button>
      </div>
    </div>
  );
}
