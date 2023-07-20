import styles from './AddedToCartBig.module.css';
import React from 'react';
import { ReactComponent as Added } from "../../assets/image/added.svg";
import AnimatedCard from '../../pages/AnimatedPage/AnimatedCard';

const AddedToCartBig = props => {
    const {
        game
    } = props;

    return (
        <AnimatedCard>
            <div className={styles.addToCart}>
                <h2>Added</h2>
                <Added className={styles.add} />
            </div>
        </AnimatedCard>
    );
  }
  
  export default AddedToCartBig;