import { motion } from "framer-motion";
import MainComponentLayout from "../Layout/MainComponentLayout";
export default function AnimateRoute({ children }) {
    return (
        <MainComponentLayout>
            <motion.div
                initial={{ opacity: 0 }}
                exit={{ opacity: 0, y: -50, transition: { duration: 0.2 } }}
                transition={{ duration: 0.2 }}
                animate={{ opacity: 1 }}
            >
                {children}
            </motion.div>
        </MainComponentLayout>
    );
}
