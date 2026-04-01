import { motion, useReducedMotion } from 'framer-motion';

const variants = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
    },
    scaleUp: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
    staggerContainer: {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    },
};

const ScrollReveal = ({
    children,
    variant = 'fadeUp',
    delay = 0,
    duration = 0.6,
    className = '',
    once = true,
    amount = 0.2,
}) => {
    const shouldReduce = useReducedMotion();
    const selectedVariant = variants[variant] || variants.fadeUp;

    if (shouldReduce) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={selectedVariant}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({ children, className = '', once = true }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.15 }}
        variants={variants.staggerContainer}
        className={className}
    >
        {children}
    </motion.div>
);

export const StaggerItem = ({ children, className = '' }) => (
    <motion.div
        variants={variants.fadeUp}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

export default ScrollReveal;
