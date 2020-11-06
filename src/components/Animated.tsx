import * as React from "react";
import { motion } from "framer-motion";
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles((theme: any) => ({
  animated: {
    composes: "flexRow justifyCenter alignCenter",
    height: "100vh",
  },
  animatedLine: {
    composes: "flexRow flex1",
    height: 12,
    backgroundColor: theme.colors.primary
  },
  inactiveLine: {
    composes: "stretchSelf",
    backgroundColor: 'red'
  }
}));
const Animated = () => {
  const classes = useStyles();
  return (
    <div className={classes.animated}>
        <div className={classes.animatedLine}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }} 
            className={classes.inactiveLine}
            transition={{
              duration: 0.8,
            }}
          />
      </div>
    </div>
  );
};

export default Animated;
