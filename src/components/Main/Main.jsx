import Cooks from "../Cooks/Cooks";
import Cards from "../Cards/Cards";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Main = () => {

    const [cards, setCards] = useState([]);

    const handleAddToCook = (card) =>{
        const newCard = [...cards, card];
        const isExit = cards.find(cook => cook.recipe_id == card.recipe_id);
        if(!isExit){
            setCards(newCard);
        }
        else{
            toast ('already exits');
        }     
    }   

    return (
        <main>
            <div className="text-center py-8">
                <h1 className="font-bold text-4xl mb-3">Our Recipes</h1>
                <p className="font-semibold text-[20px]">You will love this spaghetti pasta alternative. <br /> It's richly packed with fiber, manganese which supports bone structure, and antioxidants.</p>
            </div>
            <div className="flex gap-6 md:flex-row flex-col justify-between">
                <Cards handleAddToCook={handleAddToCook}></Cards>
                <Cooks cards={cards}></Cooks>
            </div>
           <ToastContainer />
        </main>
    );
};

export default Main;    