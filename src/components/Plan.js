import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { seoData } from "../Seo";
import Helmet from 'react-helmet';
import Loader from './Loader'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class Plan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:'',
            responsive: [{
                breakpoint: 1199,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
        
                }
              }
            ],
            showsmm:true,
            showseo:false,
            showeseo:false
        };
      }

    componentDidMount() {
        this.props.AddPlanHandler();
        document.body.classList.add("inner_page");
        document.body.classList.add("about_page");
        document.body.classList.add("fmt-0");
        seoData.forEach((data, key) => {
            if (data.page === "plan") {
                this.setState({ title: data.title })
                document.getElementsByTagName("META")['title'].content=data.title;
                document.getElementsByTagName("META")['keywords'].content=data.keywords;
                document.getElementsByTagName("META")['description'].content=data.description;
            }
        })
    }

    componentWillUnmount() {
        document.body.classList.remove("inner_page");
        document.body.classList.remove("about_page");
        document.body.classList.remove("fmt-0");
    }

    change_table(table) {
        var smm = document.getElementById("Tsmm");
        var seo = document.getElementById("Tseo");
        var eseo = document.getElementById("Teseo");
        var selector = document.getElementById("selector");
        var custleft = 0;

        if (table === "smm") {
            this.setState({ showsmm:true , showseo:false, showeseo:false })
            selector.style.left = "7px";
            selector.style.width = smm.clientWidth + "px";
        } else if (table === "seo") {
            this.setState({ showsmm:false , showseo:true, showeseo:false })
            custleft = parseInt(seo.clientWidth) + parseInt(5);
            // console.log(seo.clientWidth);
            selector.style.left = custleft + "px";
            selector.style.width = seo.clientWidth + "px";
        } else if(table === "eseo"){
            this.setState({ showsmm:false , showseo:false, showeseo:true })
            custleft = parseInt(eseo.clientWidth) + parseInt(5);
            selector.style.left = seo.clientWidth + custleft + 1 + "px";
            selector.style.width = seo.clientWidth + "px";
        }
        else{

        }
      }


    render() {
        return (
            <div>
                <Helmet>
                    <title>{this.state.title}</title>
                </Helmet>
                {/* <!--1# hero_section	--> */}
                
                <div className="container-fluid  inner_page_head pt-100 theme_grd" id="particles-js">
                    <div className="container">
                        <div className="row ">
                            <div className="breadcrumb_title">
                                <h1> Pricing Plan </h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        {/* {
                                            this.props.plandata.head_list.map((item,index)=>
                                            <li key={index} className="breadcrumb-item"><a href={item.link}> {item.text} </a></li>
                                            )
                                        } */}
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {
                this.props.plandata.length !== 0 ?
                <React.Fragment>
                <div className=" container-fluid  plan_type_sec mt-100 pb-100 ">
                    <div className="container">
                        <div className="heading text-center col-lg-8 col-md-10 col-sm-12 d-table mx-auto"  >
                            <h2 className="heading_h2 text-center " dangerouslySetInnerHTML={{__html:this.props.plandata.main_title}}  />
                            <p>{this.props.plandata.main_description}</p>
                        </div>
                        <div className="row">
                            {
                                this.props.plandata.plan_list.map((item,index)=>
                                <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className={"wwd_col "+item.div_class}  >
                                        <div className="wwd_icon_outer d_center mx-auto">
                                            <div className={"wwd_icon_inner "+item.icon_class+" d_center"}> <i className={item.icon}></i> </div>
                                            <span className="ani_dot ani_dot0"></span> <span className="ani_dot ani_dot1"></span> </div>
                                        <h5> {item.title} </h5>
                                        <h6> {item.subtitle} </h6>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className=" container-fluid plan_table_sec mt-100 pb-100 ">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h2 className="heading_h2 left_sep">Pricing Plan<span className="g_secondary">Table</span></h2>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <ul className="nav nav-tabs plan_tabs animate__animated wow  animate__fadeInUp" id="myTab" role="tablist"  >
                            <li className="nav-item" role="presentation" onClick={(e)=>this.change_table('smm')} id="Tsmm">
                                <button className={ this.state.showsmm === true ? "nav-link active" : "nav-link" } >SMM</button>
                            </li>
                            <li className="nav-item" role="presentation" onClick={(e)=>this.change_table('seo')} id="Tseo"> 
                                <button className={ this.state.showseo === true ? "nav-link active" : "nav-link" }  >SEO</button> 
                            </li>
                            <li className="nav-item" role="presentation" onClick={(e)=>this.change_table('eseo')} id="Teseo">
                                <button className={ this.state.showeseo === true ? "nav-link active" : "nav-link" } >E.SEO</button>
                            </li>   
                            <div id="selector" className="selector"></div>
                        </ul>
                    </div>
                    <form id="plan_form col-12">
                        <div className="tab-content " id="myTabContent">
                        {
                        this.state.showsmm === true ?
                            <div className={"tab-pane fade "+this.state.showsmm === true ? "show active" : ""} id="smm" role="tabpanel" aria-labelledby="smm-tab">
                                <article>
                                        <ul className="table_nav">
                                            {
                                                this.props.plandata.pricing_table.table_data1.tab_list.map((item,index)=>
                                                <li key={index}>
                                                    <button className={item.class}> {item.value} </button>
                                                </li>
                                                )
                                            }
                                        </ul>
                                        <table className="plan_table">
                                            <thead>
                                                <tr>
                                                    {
                                                        this.props.plandata.pricing_table.table_data1.head.map((item,index)=>
                                                            <th key={index} className={item.class}>{item.value}</th>
                                                        )
                                                    }
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="plan_title_bar">
                                                    {
                                                    this.props.plandata.pricing_table.table_data1.plan_title_bar.map((item,index)=>
                                                        item.class !== '' ?
                                                        <td key={index}><span className={item.class}>{item.value}</span></td>
                                                        :
                                                        <td key={index}>{item.value}</td>
                                                    ) 
                                                    }
                                                    
                                                </tr>

                                                <tr className="choosable ">
                                                {
                                                    this.props.plandata.pricing_table.table_data1.row_data1.map((item,index)=>
                                                        item.class !== '' ?
                                                        <td key={index}><span className={item.class}>{item.value}</span></td>
                                                    :
                                                    <td key={index}>{item.value}</td>
                                                    )
                                                }
                                                </tr>

                                                <tr className="choosable ">
                                                {
                                                    this.props.plandata.pricing_table.table_data1.row_data2.map((item,index)=>
                                                        item.class !== '' ?
                                                        <td key={index}><span className={item.class}>{item.value}</span></td>
                                                    :
                                                    <td key={index}>{item.value}</td>
                                                    )
                                                }
                                                </tr>
                                                
                                                <tr className="choosable ">
                                                {
                                                    this.props.plandata.pricing_table.table_data1.row_data3.map((item,index)=>
                                                        item.class !== '' ?
                                                        <td key={index}><span className={item.class}>{item.value}</span></td>
                                                    :
                                                    <td key={index}>{item.value}</td>
                                                    )
                                                }
                                                </tr>

                                                <tr className="choosable ">
                                                {
                                                    this.props.plandata.pricing_table.table_data1.row_data4.map((item,index)=>
                                                        item.class !== '' ?
                                                        <td key={index}><span className={item.class}>{item.value}</span></td>
                                                    :
                                                    <td key={index}>{item.value}</td>
                                                    )
                                                }
                                                </tr>

                                                <tr className="choosable ">
                                                {
                                                    this.props.plandata.pricing_table.table_data1.row_data5.map((item,index)=>
                                                        item.class !== '' ?
                                                        <td key={index}><span className={item.class}>{item.value}</span></td>
                                                    :
                                                    <td key={index}>{item.value}</td>
                                                    )
                                                }
                                                </tr>

                                                <tr className="choosable ">
                                                {
                                                    this.props.plandata.pricing_table.table_data1.row_data6.map((item,index)=>
                                                        item.class !== '' ?
                                                        <td key={index}><span className={item.class} dangerouslySetInnerHTML={{__html:item.value}} /></td>
                                                    :
                                                    <td key={index} dangerouslySetInnerHTML={{__html:item.value}} />
                                                    )
                                                }
                                                </tr>

                                                <tr className="choosable ">
                                                {
                                                    this.props.plandata.pricing_table.table_data1.row_data7.map((item,index)=>
                                                        item.class !== '' ?
                                                        <td key={index}><span className={item.class} dangerouslySetInnerHTML={{__html:item.value}} /></td>
                                                    :
                                                    <td key={index} dangerouslySetInnerHTML={{__html:item.value}} />
                                                    )
                                                }
                                                </tr>

                                            </tbody>
                                            <tfoot><tr>
                                            <tr className="choosable ">
                                                {
                                                    this.props.plandata.pricing_table.table_data1.footer.map((item,index)=>
                                                        item.class !== '' ?
                                                        <td key={index}><a href={item.link} className={item.class}> {item.value}  </a></td>
                                                    :
                                                    <td key={index}>{item.value}</td>
                                                    )
                                                }
                                                </tr>
                                            </tr></tfoot>
                                        </table>
                                    </article>
                            </div>
                            : null
                        }

                        {
                        this.state.showseo === true ? 
                            <div className={"tab-pane fade "+this.state.showseo === true ? "show active" : ""} id="seo" role="tabpanel" aria-labelledby="seo-tab">
                                <article>
                                <ul className="table_nav">
                                    <li>
                                    <button  className="bg-basic">Aggressive</button>
                                    </li>
                                    <li>
                                    <button  className="bg-standard">Market Leader</button>
                                    </li>
                                    <li className=" active">
                                    <button className="bg-premium" >Trailblazer</button>
                                    </li>
                                    <li >
                                    <button className="bg-customized">Enterprise</button>
                                    </li>

                                </ul>
                                <table className="plan_table">
                                    <thead>
                                    <tr>
                                        <th className="title"><strong>Features</strong></th>
                                        <th className="bg-basic">Aggressive</th>
                                        <th className="bg-standard">Market Leader</th>
                                        <th className="bg-premium default">Trailblazer</th>
                                        <th className="bg-customized">Enterprise</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    
                                    <tr className="choosable ">
                                        <td >Number of keyphrases optimized (Keyphrases with less than 1M results)</td>
                                        <td><span className="text">Up to 80</span></td>
                                        <td><span className="text">Up to 150</span></td>
                                        <td className="default"><span className="text">Up to 300</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                    <tr className="choosable ">
                                        <td >Web server analysis & reporting</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                    <tr className="choosable ">
                                        <td >Keyphrase research & selection</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Predictive keyword analysis</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Meta tags (Title & description)</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Optimization of robots.txt & GoogleBot crawls</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Creation & registrations of sitemap.xml</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Quarterly Earned Media Content Assets - Content, Outreach, UX, or CRO Assets</td>
                                        <td><span className="text">3 Content, Outreach, UX, or CRO Assets</span></td>
                                        <td><span className="text">4 Content, Outreach, UX, or CRO Assets</span></td>
                                        <td className="default"><span className="text">10 Content, Outreach, UX, or CRO Assets</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Google My Business optimization (if needed)</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Mobile site optimization (if applicable)</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Information architecture audit</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Google Analytics setup w/ conversion tracking</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Google Analytics traffic analysis</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Custom Dashboards/Data Views</td>
                                        <td><span className="text">4 dashboards</span></td>
                                        <td><span className="text">8 dashboards</span></td>
                                        <td className="default"><span className="text">8 dashboards</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Not provided analysis reporting</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Local search optimization</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Setup of website sitemap</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Image optimization</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Link redirect audit</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Custom 404 error page setup and optimization</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Canonicalization analysis & domain unification</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Quarterly web page freshness updates</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Initial link analysis and disavow</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Dedicated account representative</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Online project management schedule</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Ongoing quarterly keyword reporting</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Ongoing monthly ROI, traffic, & goal reporting</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Google data highlights</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Ongoing quarterly competitor opportunity reports</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Internal linking restructuring & optimization</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Linkable content promotion</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Header Tags Optimized (Ex. H1s)</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Duplicate content analysis</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Social media monitoring software</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Keyword rank checker access with weekly updates (if requested)</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Website usability analysis</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Universal SEO (Video, Maps, Images, News)</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Continual building of relationships with online bloggers and webmasters</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Link reclamation</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Creation of text navigation (if possible)</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Up to 100 web lead phone calls tracked per month</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Up to 25 web lead phone calls transcribed per month</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Website design analysis</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Video and image XML sitemaps</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Searcher experience analysis (long-clicks, pogo-sticking, bounce rate, etc.)</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick"></span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Link baiting and content development</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick"></span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Channel Specific Call Tracking</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick"></span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Monitor competitors' search rankings on a monthly basis</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Analyze your leads to project the # of leads competitors receive on a monthly basis</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Predict your and your competitors' market share on a monthly basis</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Competitor intelligence login to view competitor data</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >200+ SMEs behind campaign driving results</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td  >Lead Manager -</td>
                                        <td rowspan="2"><span className="text">Includes</span></td>
                                        <td rowspan="2"><span className="text">Includes</span></td>
                                        <td rowspan="2" className="default"><span className="text">Includes</span></td>
                                        <td rowspan="2" className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td  >Track website leads and phone calls</td>
                                        <td ><span className="text">Includes</span></td>
                                        <td ><span className="text">Includes</span></td>
                                        <td className="default"><span className="text">Includes</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td  >Company Tracker - </td>
                                        <td ><span className="text">Includes</span></td>
                                        <td ><span className="text">Includes</span></td>
                                        <td className="default"><span className="text">Includes</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td  >Analyze which companies visit your website</td>
                                        <td >Content Genius - </td>
                                        <td ><span className="text">Includes</span></td>
                                        <td ><span className="text">Includes</span></td>
                                        <td className="default"><span className="text">Includes</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td  >Content Genius - </td>
                                        <td ><span className="text">Includes</span></td>
                                        <td ><span className="text">Includes</span></td>
                                        <td className="default"><span className="text">Includes</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td  >Measure and predict performance of website content</td>
                                        <td ><span className="text">Includes</span></td>
                                        <td ><span className="text">Includes</span></td>
                                        <td className="default"><span className="text">Includes</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Website conversion analysis implementation</td>
                                        <td><span className="text">Custom</span></td>
                                        <td><span className="text">Custom</span></td>
                                        <td className="default"><span className="text">Custom</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable bg-basic">
                                        <td >Initial campaign investment:(Two month duration)</td>
                                        <td><span className="text"><strong>$3,750 - $4,250</strong></span></td>
                                        <td><span className="text"><strong>$5,250 - $5,750</strong></span></td>
                                        <td className="default"><span className="text"><strong>$7,000</strong></span></td>
                                        <td className=""><span className="text"><a href="#!"><strong>Get Quote</strong></a></span></td>
                                    </tr>
                                        <tr className="choosable bg-customized">
                                        <td >Progressive monthly optimization:(6 month commitment - Subsequent 4 months)</td>
                                        <td><span className="text"><strong>$975</strong></span></td>
                                        <td><span className="text"><strong>$1,475</strong></span></td>
                                        <td className="default"><span className="text"><strong>$2,975</strong></span></td>
                                        <td className=""><span className="text"><a href="#!"><strong>Get Quote</strong></a></span></td>
                                    </tr>
                                        
                                
                                    </tbody>
                                    <tfoot>   <tr>
                                        <td>&nbsp;</td>
                                        <td><a href="#!" className="plan_buy_btn for_basic">Buy Now</a></td>
                                        <td><a href="#!" className="plan_buy_btn for_standard">Buy Now</a></td>
                                        <td className="default"><a href="#!" className="plan_buy_btn for_premium">Buy Now</a></td>
                                        <td><a href="#!" className="plan_buy_btn for_customized">Buy Now</a></td>

                                    </tr></tfoot>
                                </table>
                                </article>
                            </div>
                            :null
                        }

                        {
                        this.state.showeseo === true ? 
                            <div className={"tab-pane fade "+this.state.showeseo === true ? "show active" : ""} id="e_seo" role="tabpanel" aria-labelledby="e_seo-tab">
                                <article>
                                <ul className="table_nav">
                                    <li>
                                    <button  className="bg-basic">Aggressive</button>
                                    </li>
                                    <li>
                                    <button  className="bg-standard">Market Leader</button>
                                    </li>
                                    <li className=" active">
                                    <button className="bg-premium" >Trailblazer</button>
                                    </li>
                                    <li >
                                    <button className="bg-customized">Enterprise</button>
                                    </li>

                                </ul>
                                <table className="plan_table">
                                    <thead>
                                    <tr>
                                        <th className="title"><strong>Features</strong></th>
                                        <th className="bg-basic">Aggressive</th>
                                        <th className="bg-standard">Market Leader</th>
                                        <th className="bg-premium default">Trailblazer</th>
                                        <th className="bg-customized">Enterprise</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    
                                    <tr className="choosable ">
                                        <td >Number of keyphrases optimized (Keyphrases with less than 1M results)</td>
                                        <td><span className="text">Up to 150</span></td>
                                        <td><span className="text">Up to 300</span></td>
                                        <td className="default"><span className="text">Up to 600</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                    <tr className="choosable ">
                                        <td >Web server analysis & reporting</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>		
                                    <tr className="choosable ">
                                        <td >Keyphrase research </td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Predictive keyword analysis</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                            
                                        <tr className="choosable ">
                                        <td >Meta tags </td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Optimization of robots.txt & GoogleBot crawls</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Creation & registrations of sitemap.xml</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Quarterly content asset links or long form/skyscraper content assets</td>
                                        <td><span className="text">3 links or content assets</span></td>
                                        <td><span className="text">7 links or content assets</span></td>
                                        <td className="default"><span className="text">16 links or content assets</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                            
                                        <tr className="choosable ">
                                        <td >Mobile site optimization (if applicable)</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Information architecture audit</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Google Analytics setup with conversion tracking</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Google Analytics traffic analysis</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Creation of Google Analytics custom dashboards</td>
                                        <td><span className="text">4 dashboards</span></td>
                                        <td><span className="text">8 dashboards</span></td>
                                        <td className="default"><span className="text">8 dashboards</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Not provided filter / Not provided analysis reporting</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Local search optimization</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Setup of website sitemap</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Google Webmaster Tools and Bing Webmaster Tools setup</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Google/Bing Webmaster Tools analysis (initial and ongoing)</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Alternate text added to images</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Product image optimization</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Link redirect audit</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Breadcrumb analysis/implementation</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Broken link correction (initial)</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >On-page crawl error correction (initial)</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >On-page crawl error correction (monthly)</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Custom 404 error page setup</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Product Markup - Schema HTML tags (ongoing)</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Rel="publisher" implementation</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Initial copywriting articles or blog posts (up to 500 words)</td>
                                        <td><span className="text">Up to 4 pages</span></td>
                                        <td><span className="text">Up to 20 pages</span></td>
                                        <td className="default"><span className="text">Up to 40 pages</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Initial copywriting for product descriptions (up to 150 words)</td>
                                        <td><span className="text">Up to 10 products</span></td>
                                        <td><span className="text">Up to 20 products</span></td>
                                        <td className="default"><span className="text">Up to 40 products</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Ongoing quarterly copywriting for product descriptions</td>
                                        <td><span className="text">Up to 10 products</span></td>
                                        <td><span className="text">Up to 10 products</span></td>
                                        <td className="default"><span className="text">Up to 20 products</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Ongoing quarterly copywriting for product descriptions</td>
                                        <td><span className="text">Up to 10 products</span></td>
                                        <td><span className="text">Up to 10 products</span></td>
                                        <td className="default"><span className="text">Up to 20 products</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Quarterly web page freshness updates</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Initial link analysis and disavow</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Dedicated account representative</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Online project management schedule</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Ongoing quarterly keyword reporting</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Ongoing monthly traffic reporting</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Ongoing monthly transaction/revenue reporting</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Google data highlights</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Content Genius</td>
                                        <td><span className="text">Includes</span></td>
                                        <td><span className="text">Includes</span></td>
                                        <td className="default"><span className="text">Includes</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Internal linking restructuring</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >URL Parameter normalization/exclusions</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Header Tags Optimized (ex. H1s)</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Duplicate content analysis & correction</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Duplicate content analysis & correction</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Social media monitoring software</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Keyword rank checker access (updates weekly)</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Shopping cart funnel analysis and recommendations</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Website usability analysis</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Rich snippets optimization</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Universal SEO (Video, Maps, Images, News)</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Outreach to online influencers</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Link reclamation</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Creation of text navigation (if possible)</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                    
                                        <tr className="choosable ">
                                        <td >Website design analysis</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Video and image XML sitemaps</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Integration of blog w/ RSS</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick"></span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Link baiting and content development</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick"></span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Customer review (user generated content) strategy</td>
                                        <td><span className="tick"></span></td>
                                        <td><span className="tick"></span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>

                                        <tr className="choosable ">
                                        <td >MarketingCloudFX</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >200+ SMEs behind campaign driving results</td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td><span className="tick">&#10004;</span></td>
                                        <td className="default"><span className="tick">&#10004;</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Website conversion analysis implementation</td>
                                        <td ><span className="text">Custom</span></td>
                                        <td ><span className="text">Custom</span></td>
                                        <td className="default"><span className="text">Custom</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        
                                        <tr className="choosable ">
                                        <td >Keyphrases on 1st page results of Google (OR INITIAL PAYMENT BACK - 1 year commitment)</td>
                                        <td ><span className="text">20</span></td>
                                        <td ><span className="text">35</span></td>
                                        <td className="default"><span className="text">50</span></td>
                                        <td className=""><span className="text">Custom</span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Initial campaign investment:(Two month duration)</td>
                                        <td ><span className="text">$5,500</span></td>
                                        <td ><span className="text">$6,000 - $6,500</span></td>
                                        <td className="default"><span className="text">$8,000</span></td>
                                        <td className=""><span className="text"><a href="#!">Get Quote</a></span></td>
                                    </tr>
                                        <tr className="choosable ">
                                        <td >Initial campaign investment:(Two month duration)</td>
                                        <td ><span className="text">$1,475</span></td>
                                        <td ><span className="text">$2,475</span></td>
                                        <td className="default"><span className="text">$4,475</span></td>
                                        <td className=""><span className="text"><a href="#!">Get Quote</a></span></td>
                                    </tr>
                                
                                    </tbody>
                                    <tfoot>   <tr>
                                        <td>&nbsp;</td>
                                        <td><a href="#!" className="plan_buy_btn for_basic">Buy Now</a></td>
                                        <td><a href="#!" className="plan_buy_btn for_standard">Buy Now</a></td>
                                        <td className="default"><a href="#!" className="plan_buy_btn for_premium">Buy Now</a></td>
                                        <td><a href="#!" className="plan_buy_btn for_customized">Buy Now</a></td>

                                    </tr></tfoot>
                                </table>
                                </article>
                            </div>
                            :null
                        }

                        </div>
                    </form>
                    </div>

                    <div className="mt-100">
                        <h3>{this.props.plandata.pricing_table.when_choose_title}</h3>
                        <p>{this.props.plandata.pricing_table.when_choose_description}</p>
                        <Link to={this.props.plandata.pricing_table.contact_us_link} className="contact_btn">{this.props.plandata.pricing_table.contact_us_text}</Link>
                    </div>
                </div>
                </div>

                <div className=" container-fluid testimonial_section pt-100  " >
                    <div className="container">
                        <div className="testimonial_container js-tilt pt-100 pb-100 " >
                            <div className="heading text-center  d-table mx-auto animate__animated wow  animate__fadeInUp"     >
                                <h2 className="heading_h2 text-center "  dangerouslySetInnerHTML={{__html:this.props.plandata.client_says.title}} />
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-10 col-10 offset-1">
                                <Slider autoplay={true} autoplaySpeed={2000} speed={1000} arrows={true} focusOnSelect={true} slidesToShow={1} slidesToScroll={1} dots={false} className="testi_slick ">
                                        {
                                            this.props.plandata.client_says.testimonial.map((item,index)=>
                                            <div key={index}>
                                                <span className="icofont-quote-left"></span>
                                                <p className="client_says">{item.description}</p>
                                                <h5 className="client_name">{item.name}</h5>
                                                <h6 className="client_p">{item.position}</h6>
                                                <span className="icofont-quote-right"></span> 
                                            </div>
                                            )
                                        }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" container-fluid  mt-100  pt-100 mb-100 " >
                    <div className="container">
                        <h2 className="heading_h2 text-center animate__animated wow  animate__fadeInUp" dangerouslySetInnerHTML={{__html:this.props.plandata.client.title}} />
                        <Slider autoplay={false} responsive={this.state.responsive} autoplaySpeed={2000} speed={1000} focusOnSelect={true} slidesToShow={5} slidesToScroll={1} dots={true} className="client_slick">
                            {
                                this.props.plandata.client.list.map((item,index)=>
                                <div key={index}>
                                    <a href={item.link}>
                                    <picture className="d-block img">
                                        <source srcSet={item.img+".webp"} type="image/webp" />
                                        <source srcSet={item.img+".png"} type="image/png" />
                                        <LazyLoadImage effect="blur" src={item.img+".png"} width="214" height="146" alt="Growth-X" title="Growth-X" className="img-fluid" />
                                    </picture>
                                    </a>
                                </div>
                                )
                            }
                        </Slider>
                    </div>
                </div>
                </React.Fragment>
            :
            <Loader />
        }
            </div>
        )
    }
}

export default Plan