import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignUp from "../components/Signup";
import Login from "../components/Login";
import "../styles/auth.css";

function Auth({ setUser }) {
  const [login, setLogin] = useState(true);

  return (
    <div className="container" id="root">
      <AnimatePresence>
        {login ? (
          <motion.div
            key="login"
            className="form-container login"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
          >
            <Login setUser={setUser} />
          </motion.div>
        ) : (
          <motion.div
            key="signup"
            className="form-container signup"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
          >
            <SignUp />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="toggle-container">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ scale: 1.3 }}
          onClick={() => setLogin(!login)}
        >
          {login ? "Don't have an account?" : "You have an account?"}
        </motion.button>
      </div>
    </div>
  );
}

export default Auth;
