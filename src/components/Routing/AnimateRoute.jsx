import { motion } from "framer-motion";
export default function AnimateRoute({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.2 } }}
            transition={{ duration: 0.2 }}
            animate={{ opacity: 1 }}
        >
            {children}
        </motion.div>
    );
}
