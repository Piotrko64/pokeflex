import { motion } from "framer-motion";
import { Props } from "react-confetti";
import { MainComponentLayoutRouting } from "./MainComponentLayoutRouting";
export default function AnimateRoute({ children }: Props) {
    return (
        <MainComponentLayoutRouting>
            <motion.div
                initial={{ opacity: 0 }}
                exit={{ opacity: 0, y: -50, transition: { duration: 0.2 } }}
                transition={{ duration: 0.2 }}
                animate={{ opacity: 1 }}
            >
                {children}
            </motion.div>
        </MainComponentLayoutRouting>
    );
}
