import React from 'react';
import ImageGallery from 'react-image-gallery';


function GalleryPage() {
    const pictures = [
        {
            original: 'images/bananas.JPG',
            thumbnail: 'images/bananas.JPG',
            description: `A tasty bowl of bananas that a monkey would dream of (2022)`,
            originalHeight: '450px',
        },
        {
            original: 'images/Factoria-Mall-Lights.JPG',
            thumbnail: 'images/Factoria-Mall-Lights.JPG',
            description: `Calming lights for a quiet Thursday night (2022)`,
            originalHeight: '450px',
        },
        {
            original: 'images/Bellevue-Square-Christmas.JPG',
            thumbnail: 'images/Bellevue-Square-Christmas.JPG',
            description: `Christmas themed mall with a massive Christmas Tree (2022)`,
            originalHeight: '450px',
        },
        {
            original: 'images/Downtown-Bellevue-Park.JPG',
            thumbnail: 'images/Downtown-Bellevue-Park.JPG',
            description: `Such a beautiful view of office and hotel buildings! (2022)`,
            originalHeight: '450px',

        },
        {
            original: 'images/Evans-Creek-Pathway.JPG',
            thumbnail: 'images/Evans-Creek-Pathway.JPG',
            description: `A Sammamish trail to a mysterious cavern (2022)`,
            originalHeight: '450px',

        },
        {
            original: 'images/Java-Critters-Exercise.jpg',
            thumbnail: 'images/Java-Critters-Exercise.jpg',
            description: `A program that manipulates characters 'Critters' to move around (2022)`,
            originalHeight: '450px',

        },
        {
            original: 'images/Java-Graphics-Matrix.jpg',
            thumbnail: 'images/Java-Graphics-Matrix.jpg',
            description: `A program that outputs 6 patterns that resemble matrixes of different dimensions (2022)`,
            originalHeight: '450px',
        },
        {
            original: 'images/BirthdayProgram.png',
            thumbnail: 'images/BirthdayProgram.png',
            description: `A program that celebrates the user's birthday (2022)`,
            originalHeight: '450px',

        },
        {
            original: 'images/korean-army-stew.JPG',
            thumbnail: 'images/korean-army-stew.JPG',
            description: `One of my hobbies is cooking new things with my friends, like Korean Army Stew! (2022)`,
            originalHeight: '450px',
        },
        {
            original: 'images/Mossy-Tree-Twisted.JPG',
            thumbnail: 'images/Mossy-Tree-Twisted.JPG',
            description: `A twisted mossy tree in the middle of the trail (2023)`,
            originalHeight: '450px',
        }
    ];

    return (
        <>
         <h2> Gallery </h2>
         <p> Some beautiful pictures that I really enjoy! I hope you take some time to see the beautiful slideshow! </p>
          <article class="gallery"> 
          <ImageGallery items={pictures} />   
        </article>
        </>
    );
 }
 export default GalleryPage;