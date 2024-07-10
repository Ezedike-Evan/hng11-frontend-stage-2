import '../css/footer.css'
const Footer = ()=>{
    return(
        <footer>
            <div className='first-div'>
                <p>Stay up to date on the latest features and releases by joining our newsletter.</p>
                <div>
                    <input type="text" placeholder='Email Address'/>
                    <p>Sign up</p>
                </div>
                <p>&copy; 2024 Steeze, All rights reserved.</p>
            </div>
            <div style={{display:'flex'}}>
                <div className='links'>
                    <h6>About</h6>
                    <p>Steeze Express</p> 
                    <p>Steeze Careers</p> 
                    <p>Terms and Conditions</p>
                    <p>Privacy Notice</p> 
                    <p>Official Stores</p> 
                    <p>Flash Sales</p>
                </div>
                <div className='links'>
                    <h6>Useful Links</h6>
                    <p>Service Center</p> 
                    <p>Delivery options and timelines</p> 
                    <p>Corporate and bulk purchases</p> 
                    <p>Returns & Refund Timeline</p> 
                    <p>Return Policy</p>
                </div>
                <div className='links'>
                    <h6>Follow Us</h6>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>X</p>
                    <p>Linkedin</p>
                    <p>Youtube</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer