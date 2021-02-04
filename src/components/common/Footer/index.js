import React, {useState, useEffect} from 'react'
import Quotation from '../Quotation';
import quotations from './quotations';
import styles from './index.css'


const Footer = ({index}) => {

     const quotations = ()=> [
        "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.",
        "To go wrong in one's own way is better than to go right in someone else's.",
        "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth.",
        "What is hell? I maintain that it is the suffering of being unable to love.",
        "The darker the night, the brighter the stars, The deeper the grief, the closer is God!",
        "I say let the world go to hell, but I should always have my tea.",
        "Man only likes to count his troubles; he doesn't calculate his happiness.",
        "The soul is healed by being with children.",
        "I love mankind, he said, 'but I find to my amazement that the more I love mankind as a whole, the less I love man in particular'"
    ]

    let quotation;

    index !== -1? quotation = quotations[index]: quotation=quotations[2]

    return (
        <footer className="footer"><Quotation index={index} quotation={quotation} /></footer> 
    )
}

export default Footer
