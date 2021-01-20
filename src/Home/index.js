import React from "react";
        import Slider from "react-slick";
        import "slick-carousel/slick/slick.css";
        import "slick-carousel/slick/slick-theme.css";
        import './style.css';
import ProfileInfo from "../../components/slick";
        


        const SimpleSlider =props=> {
            
            var settings = {
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1
            };
            return (
              <Slider {...settings}>
                <div className="texting">
                  <img src="https://a2e2z5d7.rocketcdn.me/wp-content/uploads/2019/12/Blogging-Services-670x335.jpg" width="1366" height="500"/>
                <p>Don’t focus on having a great blog. Focus on producing a blog that’s great for your readers</p>

                   <p> As a blogger, everything you do flows from understanding your audience and seeking to help them</p>
                   <p>-brian clark</p>
                   <ProfileInfo/>
                </div>
                <div className="texting">
                <img src="https://lapaas.b-cdn.net/wp-content/uploads/2019/03/blogging-2-1080x675.jpg"width="1366" height="500"/>
                 <p>The first thing you need to decide when you build your blog is what you want to accomplish with it, and what it can do if successful</p>
                 <p>-ron dawson</p>
                 <ProfileInfo/>
                </div>
                <div className="texting">
                <img src="https://www.lyfemarketing.com/blog/wp-content/uploads/2018/11/benefits-of-blogging.jpg" width="1366" height="500"/>
              <p>  Don’t try to plan everything out to the very last detail.</p>
                <p> I’m a big believer in just getting it out there: create a minimal viable product or website, launch it, and get feedback</p>
                <p>-neil patel</p>
                <ProfileInfo/>
                </div>
                <div className="texting">
                <img src="https://taxguru.in/wp-content/uploads/2020/05/Blogging.jpg"width="1366" height="500"/>
               <p> Where the Internet is about availability of information, blogging is about making information creation available to anyone</p>
                <p>-george siemens</p>
                <ProfileInfo/>
                </div>
                <div className="texting">
                <img src="https://www.emergingedtech.com/wp/wp-content/uploads/2018/04/blogging-1280x720.jpg"width="1366" height="500"/>
                <p>Making money from blogging requires you to do only two things: drive a lot traffic, then maximize the income from that traffic </p>
                <p>-john chow </p>
                <ProfileInfo/>
                </div>
                <div className="texting">
                <img src="https://blog.hubspot.com/hs-fs/hub/53/file-23115630-jpg/blog/images/blogging_image.jpg"width="1366" height="500"/>
                <p> If you love writing or making music or blogging or any sort of performing art, then do it. Do it with everything you’ve got. Just don’t plan on using it as a shortcut to making a living</p>
                <p>-seth godin </p>
                <ProfileInfo/>
                </div>
              </Slider>
            );
          }
        
          export default SimpleSlider;          
        
        
