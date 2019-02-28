import React, { Component } from 'react';
import classes from './Article.css'

import H3 from '../../../../components/H3/H3';
import H4 from '../../../../components/H4/H4';
import Specyfication from './Specyfication/Specyfication';
import Technologies from './Technologies/Technologies';

import image from '../../../../assets/machines/FX80L.jpeg';

class Article extends Component {
    render(){
        console.log("Article")
        console.log(this.props)
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
                                        <p className={classes.ShortDescription}>
                                            Pralnica bębnowa o załadunku czołowym przenaczona jest do przemysłowego prania każdego rodzaju
                                            tkanin i odzieży. Cechą charakterystyczną jest prosta i solidna konstrukcja. Minimum elektroniki
                                            oraz brak skomplikowanych rozwiązań technicznzych, czyni to urządzenie najtańsze w eksploatacji
                                            i bardzo trwałe. Urządzenia w standardzie posiadają zarówno nierdzewny bęben wewnętrzny i zewnętrzny oraz oblachowanie. Wersja półautomatyczna zapewnia maksymalną kontrolę na zużyciem wody i całym
                                            cyklem prania, zaś wersja automatyczna, szybką i komfortową pracę.  
                                        </p>
                                    </div>
                                </section>
                                {/** Technology statefull component */}
                                <Technologies technologies={this.props.technologies}/>
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