import React, { Component,lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader'
import axios from 'axios';

// import Home from './containers/HomeContainer';
const Home = lazy(() => import('./containers/HomeContainer'))
// import About from './containers/AboutContainer';
const About = lazy(() => import('./containers/AboutContainer'))
// import Services from "./containers/ServiceContainer";
const Services = lazy(() => import('./containers/ServiceContainer'))
// import Plan from "./containers/PlanContainer";
const Plan = lazy(() => import('./containers/PlanContainer'))
// import NewsBlogs from "./containers/News_blogsContainer";
const NewsBlogs = lazy(() => import('./containers/News_blogsContainer'))
// import Contact from "./containers/ContactContainer";
const Contact = lazy(() => import('./containers/ContactContainer'))
// import Single_page_blog from "./containers/SinleBlogContainer";
const Single_page_blog = lazy(() => import('./containers/SinleBlogContainer'))


if(window.location.hostname === "localhost"){
  axios.defaults.baseURL = window.location.protocol+"//"+window.location.hostname+"/growthx/content/";
}
else{
  axios.defaults.baseURL = window.location.protocol+"//"+window.location.hostname+"/content/";
}

export default class App extends Component {
  
  constructor(){
    super();
    this.state = {
     header:[],
     home:[],
     footer:[],
     isdata:0
    }
  }

  componentDidMount(){
    axios.get('Data.php?file=content').then((res)=>{
        this.setState({
          header:res.data.header,
          home:res.data.homepage,
          footer:res.data.footer,
          isdata:1
        })
    }).catch((error)=>{
      console.log(error);
    });
  }

  render() {
    return (
      <React.Fragment>
      {
        this.state.isdata !== 0 ?    
      <Router>
        <Suspense fallback={<Loader />}>
        <Header headerdata = {this.state.header} />    
        <Switch>
          <Route exact path="/"><Home fields={this.state.header.solution_feilds} /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/services"><Services /></Route>
          <Route path="/plan"><Plan /></Route>
          <Route path="/news-n-blog"><NewsBlogs fields={this.state.header.solution_feilds} /></Route>
          <Route path="/contact"><Contact contact_fields={this.state.header} fields={this.state.header.solution_feilds} /></Route>
          <Route path="/:slug" component={Single_page_blog}></Route>
        </Switch>
        <Footer footerdata = {this.state.footer} />
        </Suspense>
      </Router>
      : null  
      }
  </React.Fragment>

    )
  }
}
