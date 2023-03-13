

a:link, a:visited, a:active {
  color:#ffffff;;
  text-decoration: none; 
}


a:hover {
  color:#e65624;   
  transition: all 1s;
  
}


.App {
  
  background-color: #0d1929;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  color: white;
  font-family: 'Source Sans Pro', sans-serif;

}


.scroll-effect {
  opacity: 0;
  transition: all 2s;
}
.show {
  opacity: 1;
}
/*//////////
///   Nav Page
//////////*/

.social-links {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 6vw;

}

.pc-display {
  display: flex;
  flex-direction: row;

}
.spacer-nav-pc {
  position: fixed;
  display: flex;
  flex-direction: row;
  height: 100vh;
  max-width: 35%;
}

.logo-nav-pc {
  display: flex;
  flex-direction: column;
  margin-left: 2.5vw;
}
.logo-pc {  
  margin-top: 7vw;
  width: 100%;
  object-fit: contain;

}

.nav-links { /* targets div with all navlinks inside */
  margin-top: 5vw;
  margin-left: 5vw;
  text-align: left;
  font-weight: 600;
}

.nav-options { /*targets <NavOptions /> div */
  margin-left: 3rem;
  font-size: 2vw;
}

.spacer-img {/*targets img element*/
  height: 100vh;  
  object-fit: contain;
}

.outlet-area-pc {
  width: 60%;
  margin-left: auto;
  font-size: 0.9vw;
}

.mob-display {
  display: none;
}
.menu-bar-div-row {
  display: none;
}

/*////////// 
///   Home Page
//////////*/

.home-wrapper {
  height: 100vh;
  width: 100vh;
}
.carousel-item { /*targets coontent inside like title */
  height: 100vh;
  width: 100vh;
  
}
.carousel-container {
  height: 100vh;
  width: 100vh;
  position: absolute;
}

.splash-pic {
  object-fit: contain;
  height:100%;
}
.home-mob {
  display: none;
}
/*//////////
///   Portfolio List page
//////////*/
.port-item {
  padding-top: 3vw;
  
  padding-right:5vw;

  padding-bottom: 1vw;
  text-align: left;
}
.port-images {
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  gap: 2rem;
}
.portimage {
  width: 100%;
  object-fit: contain;
}
.port-title {
  
  color:#e65624;
}

/*//////////
///   Portfolio Item  page
//////////*/

.project-card {
  padding-top: 2vw;
  margin-left: auto;
  margin-right: 5vw;
}

.project-card-images {
  display: flex;
  flex-direction: column;
  gap: 1vw;
  align-items: center;  
}
.project-card-image {
  width:70%;
  object-fit: contain;
}
.project-card-desc {
  padding-top:2vw;
  padding-bottom: 2vw;
}
/*//////////
///   About Us
//////////*/
/* Create three equal columns that floats next to each other */
.about-pc {
  padding-left: 2rem;
  padding-right: 2rem;

}
.values-div-pc {
  padding-top: 3rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;

}
.values-pc {
  margin: auto; 
}

.about-column {
  float: left;
  width: 33.33%;
  padding-left:0.5vw;
  padding-right: 0.5vw;  
}
.about-row {
  display: table;
  clear: both;

}
.bios-pc {
  display: table;
  clear: both;
  margin:auto;
}
/*target each image with .staff-pics*/
.staff-pics {
  width: 6rem;
  object-fit: contain;
}
.bio-mob-text {
  display: none;
}
.hidden-div {
  max-width: 80%;
  margin: auto;
}
/*//////////
///   Contact Us
//////////*/
.contact-row {
  display: flex;
  flex-direction: row;
  padding-top: 4rem;
  margin-left:10vw;
  margin-right: auto;
}
.email-container {
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
}
.contact-details {
  text-align: left;
  padding-left: 2rem;
}
.contact-gmap {
  padding-top:1rem;
}
/*//////////
///   Mobile
//////////*/
@media screen and (max-width: 950px) {
  .App {
  
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  font-family: 'Source Sans Pro', sans-serif;
  overflow: auto;

  }
/*//////////
///   Nav Mobile
//////////*/
  .Nav-wrapper {
    width:100%;

    object-fit: contain;
  }
  .pc-display {
    display: none;
  }
  .mob-display {
    display: contents;   
    display: flex;
    flex-direction: row;
  
  }
  .logo-div-pc {
    display: flex;
    flex-direction: row;
    min-height: 5%;
    position: fixed;
    pointer-events: none;
  }
  .logo-mob { /* targets image*/
    height: 100%;
    width: 100%;
    object-fit: contain;
  
  }
  .menu-bar-div-row {
    display: flex;
    flex-direction: row;
    position: fixed;
    height: 2rem;
    width: 100%;
    padding-top: 10vw;
    padding-left:7vw;
    gap: 4vw;
    color: #e65624;
    font-weight: 600;
    font-size: 7vw;

  }
 
  #menubars {
    padding-top: 1.7vw;
  }
  .mob-nav-col {
    display: flex;
    flex-direction: column;
    width: 90%;
    object-fit: contain;
  }
  
  .outlet-area-mob {
    font-size: 2.5vw;
  }

  .spacer-img-mob {
    height: 100vh;
    object-fit: contain;
  }

    /*//////////
    ///   Home Mobile
    //////////*/
  .home-mob {
    display: contents;
    position: fixed;
    
  }
  .mob-NavOptions {
    margin-top: 30vw;
    margin-left: 20vw;
    font-size: 7vw;
  }
  .social-links {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-top: 10vw;
  }
  .home-pc {
    display: none;
  }
    /*//////////
    ///  Portfolio Mobile
    //////////*/

    .fa-arrow-left{
      padding-top: 1.3vw;
  }
  .port-item {
    padding-top: 15vw;
    padding-left:2vw;
    padding-right:1vw;
    padding-bottom: 3vw;
    text-align: left;
  }
  .project-entry {
    padding-bottom: 4vw;
  }
  .port-images {
    display: flex;
    flex-direction: row;
    margin-left:0.5rem;
    margin-right:0.5rem;
    justify-content: space-evenly;
    gap: 0.5rem;
    
  }
  .project-card {
    padding-top: 20vw;
    margin-left: 10vw;
    margin-right: auto;
  }
  
  .project-card-images {
    display: flex;
    flex-direction: column;
    gap: 1vw;
    align-items: center;  
  }
  .project-card-image {
    width:70%;
    object-fit: contain;
  }
  .port-title {
    padding: 1vw;
  }
  .port-slug {
    padding-left: 1.5vw;
  }
    /*//////////
    ///  About Mobile
    //////////*/
  .hidden-div {
    display:none;
  }

  .values-div-pc {
    padding-top: 20vw;  
  }
  .about-column {
    width: 100%;
    font-size: 2vw;
  }
  .about-row {
    display: flex;
    flex-direction: column;
    clear: both;
    padding-top: 1rem;
  }
  .bios-pc {
    display: flex;
    flex-direction: column;
    clear: both;
    margin:auto;
  }
  .staff-pics {
    width: 15vw;
    object-fit: contain;
  }
  .bio-text-pc {
    display: none;
  }
  .bio-mob-row {
    display: flex;
    flex-direction: row;
  }
  .bio-mob-name-col {
    flex-direction: column;
  }
  .bio-mob-text {
    display: contents;
    object-fit: none;
    overflow: visible;
    width:70%;
  }
    /*//////////
    ///   Contact Mobile
    //////////*/
  .contact-row {
    padding-top: 20vw;
  }

  @media screen and (max-width: 850px) {
    
    
    

    }
  
    

  

  
}


border:#e65624;
border-radius: 5px;
border-style: solid;