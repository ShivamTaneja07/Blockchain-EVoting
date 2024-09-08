import * as React from "react";
import { Button, Typography } from "@mui/material";
import CoverLayout from "../components/CoverLayout";
import { useNavigate } from "react-router-dom";
import style from "./Home.css"

const backgroundImage =
  "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1400";

export default function CoverPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("home button clicked");
    navigate("/home");
    window.location.reload();
  };

  return (
    <div>
      <div className="banner-upper" style={{color:'white',display:'flex', paddingLeft:'10%', paddingRight:'10%', paddingTop:'5%', backgroundColor:'black', justifyContent:'space-between'}}>
        <div style={{display:'flex', flexDirection:'column',}}>
          <h1 style={{fontSize:'60px', fontWeight:'700',}}>Secure Voting<br/>made<span style={{color:'blue'}}> Simple</span></h1>
          <h3 style={{fontSize:'30px', width:'70%'}}><span style={{color:'blue', fontSize:'35px'}}>E</span>-Vote will manage the voters role for your online ballot on your behalf.</h3>
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', marginTop:'-20px'}}>
        <h3  style={{fontSize:'30px', fontWeight:'700',}}>Be a part of the decision<br/><span  style={{fontSize:'40px', fontWeight:'700', color:'blue'}}>Vote Today</span>
</h3>
        <button onClick={handleClick} style={{background:'blue', width:'100px', color:'white', border:'none', padding:'10px', fontWeight:'600', borderRadius:'7%', zIndex:3}}>Connect</button>
        </div>
      </div>

      <div class="banner" style={{alignItems:'center', alignContent:'center', textAlign:'center'}}>
      <div class="banner-feat">
        <span style={{textOrientation:'upright'}}>FEATURES</span>
        <div class="vl"></div>
      </div>
      <div class="banner-content">
        <span>Secured by 256 bit Encryption</span>
        <span>Backed by Etherium based technology</span>
        <span>Verifiable Transaction</span>
        <span>Easy to use</span>
        <span>Faster Voting process</span>
      </div>
    </div>

    </div>
  );
}
