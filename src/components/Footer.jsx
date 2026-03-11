
function Footer() {
    return (
      <footer className="footer">
  
        <div className="footer-row1">
         {/* <span>IN STYLE</span>   */}
         <span>Shop</span> 
           <span>About</span> 
           <span>Contact</span>
        </div>

        <div className="footer-row2">
            Valencia, Spain • +34600123543 • info@instyle.com  
        </div>
        <p className="footer-copy">
        &copy; {new Date().getFullYear()} InStyle
        </p>
  
      </footer>
    )
  }
  
  export default Footer