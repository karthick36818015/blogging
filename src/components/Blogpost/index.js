import React from 'react';
import './style.css';
import Card from '../UI/Card';
import ProfileInfo from "../../components/slick";

const Blogpost =(props)=>{
    return (
        <div className="blogpostcontainer">
            <Card style={{marginbottom:'100px'}}>
                <div className="blogheader">
                <span className="blogcategory">worst of 2020</span>
                <h1 className="posttitle">chadwick bose</h1>
                <span className="postedby">posted on nov 5 by blogging</span>
                </div>
                <div className="postimagecontainer">
                  <img src={require('../../blogpostimages/chadwick.png')}alt="postimage"/>
                  <ProfileInfo/>
                    </div>
        
            </Card>
            
            <Card style={{marginbottom:'50px'}}>
                <div className="blogheader">
                <span className="blogcategory">end of ipl season </span>
                <h1 className="posttitle">cricket</h1>
                <span className="postedby">posted on nov 11 by blogging</span>
                </div>
                <div className="postimagecontainer">
                  <img src={require('../../blogpostimages/cricket.png')}alt="postimage"/>
                  <ProfileInfo/>
                    </div>
        
            </Card>

            <Card style={{marginbottom:'50px'}}>
                <div className="blogheader">
                <span className="blogcategory">Heaven is under our feet as well as over our heads </span>
                <h1 className="posttitle">NATURE</h1>
                <span className="postedby">posted on nov 15 by blogging</span>
                </div>
                <div className="postimagecontainer">
                  <img src={require('../../blogpostimages/nature.png')}alt="postimage"/>
                    </div>
                    <ProfileInfo/>
            </Card>

            <Card style={{marginbottom:'50px'}}>
                <div className="blogheader">
                <span className="blogcategory"> If you think lifting is dangerous, try being weak </span>
                <h1 className="posttitle">FITNESS</h1>
                <span className="postedby">posted on nov 18 by blogging</span>
                </div>
                <div className="postimagecontainer">
                  <img src={require('../../blogpostimages/fitness.png')}alt="postimage"/>
                    </div>
                    <ProfileInfo/>
            </Card>

            <Card style={{marginbottom:'50px'}}>
                <div className="blogheader">
                <span className="blogcategory">Clothes mean nothing until someone lives in them </span>
                <h1 className="posttitle">FASHION</h1>
                <span className="postedby">posted on nov 20 by blogging</span>
                </div>
                <div className="postimagecontainer">
                  <img src={require('../../blogpostimages/fashion.png')}alt="postimage"/>
                    </div>
                    <ProfileInfo/>
            </Card>

        
                </div>
                
                );
 }
 
 export default Blogpost;
