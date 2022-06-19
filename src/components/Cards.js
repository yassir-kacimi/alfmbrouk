import React,{useState, useEffect} from 'react';
import db from "../service/firebase";
import Card from "./Card";
import "../styles/Cards.css";
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function Cards() {


        // function handleClick(){
        //      setClasse(!classe);

        // }
         
       
        const [cards, setCards] = useState([]);
        const [category, setCategory] = useState("");
        const [ville, setVille] = useState("");
 
  
        useEffect(() => { // f chargement dial la page kikhrej lia kolchi ... 3ad apres anbda querying 
          db.collection("Offers").onSnapshot((snapshot) =>
            setCards(snapshot.docs.map((doc) => doc.data()))
          );
        }, []);

        //  useEffect(() => {
        //   db.collection("Offers").find ({ " category": {category}, "ville": {Ville} }).onSnapshot((snapshot) =>
        //        setCards(snapshot.docs.map((doc) => doc.data()))) ; 
        // });

        // function Submit(e){
        //         e.preventDefault();
        //         setCards([]);
        //         db.collection("Offers")
        //           .find ({ category: "Photograph", ville: "Rabat" })
        //           .onSnapshot((snapshot) =>
        //                 setCards(snapshot.docs.map((doc) => doc.data()))) ; 
               
        //         setCategory("");
        //         setVille("");
                
        // }
        // e.preventDefault();
        // setCards([]);
        // db.collection("Offers")
        // .find ({ " category": {category}, "ville": {Ville} })
        // .onSnapshot((snapshot) =>
        //         setCards(snapshot.docs.map((doc) => doc.data()))) ; 
       
        // setCategory("");
        // setVille("");
        // };
        // .doc(category)
//  `Message #${channelName}`

  return (
     <div className='Cards'>


             
<div className='browszeRow'>
<div className='browze'>
<h2>Trouver une Offre</h2>
</div>
<form className='form'>
<label className="label1" for="services">Filtrer par Categorie</label>       
<select value={category} onChange={(e) => setCategory(e.target.value)}  className='services' name="services" id="service">

 <option></option>
 <option value="Traiteur">Traiteur</option>
 <option value="Photograph">Photograph</option>
 <option value="Neggafa">Neggafa</option>
 <option value="Sales">Sales</option>
 <option value="Musicien">Musicien</option>
 <option value="Tailleur">Tailleur</option>
 <option value="invitations">invitations</option>
 <option value="Bijous">Bijous</option>
 </select>

 <label className="label2" for="services">Filtrer par Ville</label>       
 <select value={ville} onChange={(e) => setVille(e.target.value)}  className='services' name="villes" id="ville">
 <option></option>
 <option value="Casablanca">Casablanca</option>
 <option value="Rabat">Rabat</option>
 <option value="Tanger">Tanger</option>
 <option value="Marrakech">Marrakech</option>
 <option value="Fes">Fes</option>
 <option value="Agadir">Agadir</option>

 </select>
 <button  type="submit" class="btn btn-outline-warning btn2">Submit</button>


</form>





{/* <div className='next'>
<p className='seeAll'>See All</p>
<NavigateNextIcon />
</div>      */}

</div> 



   
     
     <div className='offercards'>      
       {cards.map((card) => (
                <Card
                key={card.id}   
                src={card.image}
                description={card.text}
                rating="5.0"
                price={card.price}
                // user={card.user}
        />
       ))}
               
    </div>
    {/* <div className='SCards'>
       
        <Card   
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_9GTOjpcKnShK51QRz1azSbLLfpOaJ6i0Q&usqp=CAU.png"
                description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   "
                rating="5.0"
                price="1000 MAD"
        />
       <Card   
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pZfiUeuU1e6ngAGud2a4BiqYFJFwDOVGFA&usqp=CAU" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
                rating="5.0"
                price="1000 MAD"
        />
        <Card   
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf2tnI2jHy-RiBTYtbhzRkJ03h-1gggb-D_A&usqp=CAU"
                description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  "
                rating="5.0"
                price="1000 MAD"
        />
        <Card   
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WHkwvBbRIqBVEiQ78_12XtmtFyecDr3-hA&usqp=CAU"
                description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   "
                rating="5.0"
                price="1000 MAD"
        />
        <Card   
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpgnRy1Utn3C47_WhBVXzq5b1Y10ztMIKBg&usqp=CAU"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
                rating="5.0"
                price="1000 MAD"
        />

          
    </div> */}
    
    
    
    
    </div>

  )
}

export default Cards;



// {/* <div className='browszeRow'>
// <div className='browze'>
// <h2>Browse</h2>
// </div>
// <form className='form'>
// <label className="label1" for="services">Filter by Category</label>       
// <select value={category} onChange={(e) => setCategory(e.target.value)}  className='services' name="services" id="service">

//  <option></option>
//  <option value="Traiteur">Traiteur</option>
//  <option value="Photograph">Photograph</option>
//  <option value="Neggafa">Neggafa</option>
//  <option value="Sales">Sales</option>
//  <option value="Musicien">Musicien</option>
//  <option value="Tailleur">Tailleur</option>
//  <option value="invitations">invitations</option>
//  <option value="Bijous">Bijous</option>
//  </select>

//  <label className="label2" for="services">Filter by City</label>       
//  <select value={ville} onChange={(e) => setVille(e.target.value)}  className='services' name="villes" id="ville">
//  <option></option>
//  <option value="Casablanca">Casablanca</option>
//  <option value="Rabat">Rabat</option>
//  <option value="Tanger">Tanger</option>
//  <option value="Marrakech">Marrakech</option>
//  <option value="Fes">Fes</option>
//  <option value="Agadir">Agadir</option>

//  </select>
//  <button  type="submit" class="btn btn-danger btn2">Submit</button>


// </form>





// {/* <div className='next'>
// <p className='seeAll'>See All</p>
// <NavigateNextIcon />
// </div>      */}

// </div>  */}
