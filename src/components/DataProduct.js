    
    const data = [
        {id:1,
          name: "Zapatillas",
          thumbnail: "https://www.cronista.com/files/image/295/295924/5ffe0a66110c3.webp?oe=jpg",
         brand: "Nike",
         size: "42",
         price: "150$"
      
        },
        {id:2,
          name: "Sudadera",
          thumbnail: "https://www.innovasport.com/medias/sudadera-nike-sportswear-essential-is-BV4116-010-1.png?context=bWFzdGVyfGltYWdlc3w1NTUxM3xpbWFnZS9wbmd8aW1hZ2VzL2hmMS9oMWMvOTgzMDk3MTQ0MTE4Mi5wbmd8YTdiZjQ4MGZkOWE0ZmQ1NmRlOGJkMWI3NjEyMDIwMzQwZmEwMWJkOWM0OGJjMzE4N2FlMTg4NjY0MWU5MDRmNg",
         brand: "Nike",
         size: "L",
         price: "75$"
      
        },
        {id:3,
          name: "Sudadera",
          thumbnail: "data:image/jpeg;base64,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",
         brand: "Adidas",
         size: "L",
         price: "80$"
      
        },
        {
          id:4,
          name: "Zapatillas",
          thumbnail: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2021/02/16/16134939003134.jpg",
         brand: "Underarmour",
         size: "40",
         price: "130$"
      
        },
        {id:5,
          name: "Chaqueta",
          thumbnail: "https://chemasport.es/27707-thickbox_default/chaqueta-nike-sportswear-windrunner-negro.jpg",
         brand: "Nike",
         size: "S",
         price: "30$"
      
        }
      ];

  export const getData = () =>{
      return new Promise ((resolve, reject)=>{
          setTimeout(() =>{
              return resolve(data);
          }, 2000)
      })
  }

  export default data

