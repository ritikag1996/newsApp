import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';




export class News1 extends Component {
    static defaultProps={
    country:'in',
    pageSize:5,
    category:'general'
    }
    static propTypes={
     country:PropTypes.string,
     pageSize:PropTypes.number,
     category:PropTypes.string
    }
  capitalization=(word)=>
   {
     let text=word.toLowerCase();
     return text.charAt(0).toUpperCase()+text.slice(1)
   }
     constructor(props){
         super(props);
         console.log("this is news constructor")
         this.state={
             articles:[],
             loading:false,
             page:1,
             totalResults:0
         }
         document.title=`${this.capitalization(this.props.category)} - News App`
         
 }
 async updateNews(){
     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey={this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     this.setState({
         loading:true})
     let data=await fetch(url);
     let parsedData=await data.json();
     console.log(parsedData);
     this.setState({articles:parsedData.articles,
         totalResults:parsedData.totalResults,
         loading:false})
 }
 async componentDidMount(){
     // console.log("cdm")
     // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a5eba3fbe2f4a47961a67573a0f53fe&page=1&pageSize=${this.props.pageSize}`;
     // this.setState({
     //     loading:true})
     // let data=await fetch(url);
     // let parsedData=await data.json();
     // console.log(parsedData);
     // this.setState({articles:parsedData.articles,
     //     totalResults:parsedData.totalResults,
     //     loading:false})
     this.updateNews();
 }
 handlePrevButton=async ()=>{
    
   
     // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a5eba3fbe2f4a47961a67573a0f53fe&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
     // this.setState({
     //     loading:true})
     // let data=await fetch(url);
     // let parsedData=await data.json();
     // console.log(parsedData);
     // this.setState({
     //     page:this.state.page-1,
     //     articles:parsedData.articles,
     // loading:false})
     // console.log("nprev")
     this.setState({
         page:this.state.page-1
     })
     this.updateNews();
 }
 handleNextButton=async ()=>{
  
     // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a5eba3fbe2f4a47961a67573a0f53fe&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
     // this.setState({
     //     loading:true})
     // let data=await fetch(url);
     // let parsedData=await data.json();
     // console.log(parsedData);
     // this.setState({
     //     page:this.state.page+1,
     //     articles:parsedData.articles,
     // loading:false})
     // console.log("next")
     this.setState({
         page:this.state.page+1
     })
     this.updateNews();
     
 }
   render() {
     return (
      <>
         <h1 className='text-center my-4'>News App - Top {this.capitalization(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
          <div className="container">
         <div className="row my-4">
             {!this.state.loading && this.state.articles.map((element) => {
                 return <div className="col-md-4" key={element.url}> 
                 <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://static.toiimg.com/thumb/msid-100678556,width-1070,height-580,imgsize-33756,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} newsUrl={element.url} author={element.author?element.author:"unknown"} date={element.publishedAt} source={element.source.name}/>
                </div>
             })}
          
          
          
         </div>
         </div>
       
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevButton}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextButton}> Next &rarr;</button>
        </div>
 
     </>
       
    
     )
   }
 }

export default News1

