import React , { Component } from 'react';
import classes from './Specyfication.css';

import Button from '../../../../../components/UI/Button/Button';
import H3 from '../../../../../components/H3/H3';

class Specyfication extends Component {

    state = {
        technical:true,//false
        gallery:false,//true
        show:true//false
    }

    clickedButtonHandler = (tabClicked) =>{
        if(this.state[tabClicked]===false && tabClicked==="gallery"){
            this.setState({
                technical:this.state[tabClicked],
                gallery:!this.state[tabClicked],
                show:this.state[tabClicked]
            })
        }
        else if(this.state[tabClicked]===false && tabClicked==="technical"){
            this.setState({
                technical:!this.state[tabClicked],
                gallery:this.state[tabClicked],
                show:!this.state[tabClicked]
            })
        }
        // console.log(tabClicked)
        
    }

    downloadLeafletHandler = () => {
        // console.log("Download")
    }

    render(){
        // console.log("Spec Render")
        const show = this.state.show

        return (
            <section className={classes.Specyfication}>
                <H3 hClass="Black" hSize="Sbig" hMb="Mmedium">Specyfikacja</H3>
                <div className={classes.ButtonTabsWrapper}>
                    <Button 
                        btnClass="Blue"
                        fontSize="FS_Medium"
                        padding="PAD_Medium"
                        noBorder="noBorder"
                        active ={this.state.show ? true : false}
                        clicked={()=>this.clickedButtonHandler("technical")}>
                        Dane techniczne
                    </Button>
                    <Button 
                        btnClass="Blue"
                        fontSize="FS_Medium"
                        padding="PAD_Medium"
                        noBorder="noBorder"
                        last="Last"
                        active ={this.state.show ? false : true}
                        clicked={()=>this.clickedButtonHandler("gallery")}>
                        Galeria
                    </Button>
                </div>
                {show && 
                <div className={classes.TabWrapper}>
                    <table className={classes.TechnicalData} cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Typ</th><th>-</th><th>PCE-08</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><th scope="row">Załadunek</th><td className={classes.Unit}>kg</td><td>8</td></tr>
                            <tr><th scope="row">Pojemność bębna</th><td className={classes.Unit}>litrów</td><td>80</td></tr>
                            <tr><th scope="row">Moduł załadunku</th><td className={classes.Unit}>-</td><td>1:10</td></tr>
                            <tr><th scope="row">Obroty wirowania</th><td className={classes.Unit}>-</td><td>bez wirowania</td></tr>
                            <tr><th scope="row">Funkcje</th><td className={classes.Unit}>-</td><td>pranie, płukanie, krochmalenie</td></tr>
                            <tr><th scope="row">Podgrzew</th><td className={classes.Unit}>-</td><td>elektryczny</td></tr>
                            <tr><th scope="row">Moc podgrzewu</th><td className={classes.Unit}>kW</td><td>12</td></tr>
                            <tr><th scope="row">Moc zainstalowana</th><td className={classes.Unit}>kW</td><td>12.55</td></tr>
                            <tr><th scope="row">Zasilanie</th><td className={classes.Unit}>-</td><td>400-415/50/3 + PEN</td></tr>
                            <tr><th scope="row">Podłączenie wody</th><td className={classes.Unit}>cal</td><td>2x3/4</td></tr>
                            <tr><th scope="row">Spust wody</th><td className={classes.Unit}>cal</td><td>60</td></tr>
                            <tr><th scope="row">Wysokość</th><td className={classes.Unit}>mm</td><td>1250</td></tr>
                            <tr><th scope="row">Szerokość</th><td className={classes.Unit}>mm</td><td>880</td></tr>
                            <tr><th scope="row">Głębokość</th><td className={classes.Unit}>mm</td><td>680</td></tr>
                            <tr><th scope="row">Masa netto</th><td className={classes.Unit}>kg</td><td>200</td></tr>
                        </tbody>
                    </table>
                    <div className={classes.DownloadLeaflet}>
                        <Button 
                            btnClass="Blue"
                            fontSize="FS_Medium"
                            padding="PAD_Medium"
                            animation
                            clicked={this.downloadLeafletHandler}>
                            Pobierz kartę informacyjną</Button>
                    </div>
                </div>
                }
                {!show && 
                <div className={classes.TabWrapper}>
                    <p className={classes.Gallery}> GALERIA Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus maiores accusantium incidunt expedita enim nam, commodi iste sit eaque doloremque saepe consequatur aliquid nobis tempora placeat beatae earum, est exercitationem.</p>
                    <div className={classes.DownloadLeaflet}>
                        <Button 
                            btnClass="Blue"
                            fontSize="FS_Medium"
                            padding="PAD_Medium"
                            animation 
                            clicked={this.downloadLeafletHandler}>
                            Pobierz kartę informacyjną</Button>
                    </div>
                </div>
                }
            </section>
        )
    }
}

export default Specyfication