import { motion } from "framer-motion";
export default function AnimateRoute({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            transition={{ duration: 2 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
        >
            {children}
        </motion.div>
    );
}
