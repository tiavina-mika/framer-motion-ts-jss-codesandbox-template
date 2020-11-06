import * as React from "react";
import { motion } from "framer-motion";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  animated: {
    composes: "flexRow justifyCenter alignCenter",
    height: "100vh"
  },
  motion: {
    width: 200,
    height: 200,
    backgroundColor: theme.colors.primary
  }
}));
const Animated = () => {
  const classes = useStyles();
  return (
    <div className={classes.animated}>
      <motion.div animate={{ scale: 2 }} className={classes.motion} />
    </div>
  );
};

export default Animated;
