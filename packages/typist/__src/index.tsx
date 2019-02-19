import React from "react";
import ReactDOM from "react-dom";

import * as styles from './scss/main.scss'

const App = () =>
    <div className={styles.containerFluid}>
      kkl
        <div className={`${styles.row}`}>
            <div className={styles.col2} />
            <div className={styles.col8}>
                <h1 onClick={() => window.location.href = '/'}>
                   Typer
                </h1>

            </div>

            <div className={styles.col2} />
        </div>
    </div>;

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
