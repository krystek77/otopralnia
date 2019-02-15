import React from 'react';
import classes from './Footer.css'
import Logo from '../../components/Logo/Logo';

const footer = () => {
    return ( 
        <footer className={classes.Footer}>
            <div className={classes.Container}>
                <div className={classes.Address}>
                    <p className={classes.Inner}> ADRES Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, autem error. Aut numquam eius iusto quibusdam quam nesciunt voluptatibus quasi exercitationem, dignissimos, velit architecto deleniti iste commodi eveniet impedit natus?</p>
                </div>
                <div className={classes.Navigation}>
                    <p className={classes.Inner}> NAVIGATION Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, alias distinctio? Perspiciatis sit praesentium fugiat suscipit nulla illo neque rerum, inventore cumque doloribus totam, aliquid odit itaque quaerat cupiditate vitae?</p>
                </div>
                <div className={classes.Newsletter}>
                    <p className={classes.Inner}>NEWSLETTER Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fuga quisquam cumque assumenda perferendis nisi adipisci, fugit in amet harum asperiores iure sapiente esse voluptatum, porro, reprehenderit rem nostrum ea.</p>
                </div>
                <div className={classes.Social}><p>SOCIAL</p></div>
                </div>
                <div className={classes.Copyright}>
                    <div className={classes.Container}>
                        <Logo/>
                        <p>&copy; 2019 Wszystkie prawa zastrzeżone</p>
                    </div>
                </div>
        </footer> )
}
 
export default footer;