import React, { Component } from 'react';
import classes from './Article.css'

import H3 from '../../../../components/H3/H3';
import H4 from '../../../../components/H4/H4';
import Specyfication from './Specyfication/Specyfication';
import Technology from './Technology/Technology';

import image from '../../../../assets/machines/FX80L.jpeg';

class Article extends Component {
    render(){
        return(
                <article>
                    <header className={classes.Header}>
                        <div className={classes.Container}>
                            <h2 className={classes.Type}>PBE-08A</h2>
                        </div>
                    </header>
                    <div className={classes.Content}>
                        <div className={classes.Container}>
                            <div className={classes.WrapperContent}>
                                {/** Introduction stateless component */}
                                <section className={classes.Introduction}>
                                    <div className={classes.ImageWrapper}>
                                        <img className={classes.Image} src={image} alt=""/>
                                    </div>
                                    <div className={classes.FeaturesWrapper}>
                                        <H3 hClass="Black" hSize="Sbig" hMb="Mmedium">
                                        Pralnica bębnowa o załadunku czołowym
                                        </H3>
                                        <div className={classes.FeauterItemsWrapper}>
                                            <p className={classes.ItemsTitle}>Cechy</p>
                                            <ul className={classes.ItemsList}>
                                                <li>bez wirowania</li>
                                                <li>sterowanie półautomatyczne</li>
                                                <li>oblachowanie ze stali nierdzewnej</li>
                                                <li>sterownik mikroprocesorowy TC</li>
                                                <li>oba bębny ze stali nierdzewnej</li>
                                                <li>duże kulowe zawory zasilające 3/4 cala</li>
                                                <li>duży kulowy zawór spustowy o średnicy 60 mm</li>
                                                <li>podgrzew elektryczny</li>
                                                <li>funkcje: pranie, płukanie, krochmalenie</li>
                                                <li>trwała budowa</li>
                                                <li>niskie koszty eksploatacji</li>
                                                <li>prosta konstrukcja</li>
                                            </ul>
                                        </div>
                                        <div className={classes.OptionItemsWrapper}>
                                            <p className={classes.ItemsTitle}>Opcje</p>
                                            <ul className={classes.ItemsList}>
                                                <li>wersja elektryczno - parowa</li>
                                            </ul>
                                        </div>
                                        <p className={classes.ShortDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus deserunt unde perferendis velit voluptas earum explicabo ex dignissimos dolorem similique, repudiandae culpa, quasi porro adipisci numquam dolore. Pariatur, provident officia.</p>
                                    </div>
                                </section>
                                {/** Technology statefull component */}
                                <Technology/>
                            </div>
                            <aside className={classes.WrapperNavigation}>
                               <H4 hClass="Black" hMb="Mmedium">Dostępne modele</H4>
                               <ul className={classes.Navigation}>
                                    <li className={classes.NavigationItem}><a className={[classes.NavigationLink,classes.active].join(' ')} href="/">PBE-08</a></li>
                                    <li className={classes.NavigationItem}><a className={classes.NavigationLink} href="/">PBE-08A</a></li>
                                    <li className={classes.NavigationItem}><a className={classes.NavigationLink} href="/">PCE-15</a></li>
                                    <li className={classes.NavigationItem}><a className={classes.NavigationLink} href="/">PCE-15A</a></li>
                                    <li className={classes.NavigationItem}><a className={classes.NavigationLink} href="/">PCP-15</a></li>
                                    <li className={classes.NavigationItem}><a className={classes.NavigationLink} href="/">PCP-15A</a></li>
                                    <li className={classes.NavigationItem}><a className={classes.NavigationLink} href="/">PCE-22</a></li>
                                    <li className={classes.NavigationItem}><a className={classes.NavigationLink} href="/">PCE-22A</a></li>
                                    <li className={classes.NavigationItem}><a className={classes.NavigationLink} href="/">PCP-22</a></li>
                                    <li className={classes.NavigationItem}><a className={classes.NavigationLink} href="/">PCP-22A</a></li>
                                    <li className={classes.NavigationItem}><a className={classes.NavigationLink} href="/">PCE-30</a></li>
                                    <li className={classes.NavigationItem}><a className={classes.NavigationLink} href="/">PCE-30A</a></li>
                                    <li className={classes.NavigationItem}><a className={classes.NavigationLink} href="/">PCP-30</a></li>
                                    <li className={classes.NavigationItem}><a className={classes.NavigationLink} href="/">PCP-30A</a></li>
                                    <li className={classes.NavigationItem}><a className={classes.NavigationLink} href="/">PCE-50</a></li>
                                    <li className={classes.NavigationItem}><a className={classes.NavigationLink} href="/">PCE-50A</a></li>
                                    <li className={classes.NavigationItem}><a className={classes.NavigationLink} href="/">PCP-50</a></li>
                                    <li className={[classes.NavigationItem,classes["Last"]]}><a className={classes.NavigationLink} href="/">PCP-50A</a></li>
                               </ul>
                            </aside>
                            {/** Specyfication statefull component */}
                            <Specyfication/>
                            </div>
                        </div>
                </article>
                
        )
    }
}

export default Article