import react from "react";
import Book from "./Book";
const Card=({book})=>{
  console.log(book);
    return(
      <>

      
      {
     book.map((item)=>{
        
          return(
          
        
    

       
    <div className="book-cont">
        <div className="book-i">
            <img src={item.thumbnail} alt="Book Cover" className="mainbookimage"/>
        </div>
        <div className="book-det">
            <h2 className="book-tit">{item.title}</h2>
            <p className="book-auth">{item.author}</p>
            <p className="book-descript">
          this is
            </p>
            <p className="book-pri">&#8377;{item.price}</p>
        </div>
    </div>

  
            
    
 )

})}
</>


    )
}
export default Card;